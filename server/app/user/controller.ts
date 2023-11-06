import prisma from '../common/helpers/prisma.helper';
import { Role } from '@prisma/client';
import CryptoHelper from '../common/helpers/crypto.helper';
import TokenHelper from '../common/helpers/token.helper';

export default class UserController {
  static async init() {
    if (
      !process.env.SUPER_ADMIN ||
      !process.env.SUPER_EMAIL ||
      !process.env.SUPER_PWD
    )
      return false

    const email = process.env.SUPER_EMAIL
    const password = CryptoHelper.generateHash(process.env.SUPER_PWD)

    const user = await prisma.user.findUnique({
      where: {
        username: email.trim().toLowerCase(),
      },
    })
    if (!user) {
      await prisma.user.create({
        data: {
          username: email.trim().toLowerCase(),
          password,
          role: Role.ADMIN,
          accessKey: TokenHelper.genCode6(),
        },
      })

      return true
    }
    return false
  }

  static getUser = async (req: any, res: any) => {
    try {
      const { uid } = req.body;
      if (!uid) {
        return res.status(200).json({
          success: "false",
          message: "invalid user id"
        })
      }
      const user = await prisma.user.findUnique({
        where: {
          id: uid
        }
      });
      if (user) {
        return res.status(200).json({
          success: "true",
          data: user
        })
      }
      else {
        return res.status(200).json({
          success: "false",
          message: "user id not found"
        })
      }
    } catch (error) {
      res.status(500).json({
        success: "false",
        message: error.message
      });
    }
  }

  static createUser = async (req: any, res: any) => {
    try {
      const { username, password, role } = req.body;
      if (!username || !password || !role) return res.status(200).json({
        success: "false",
        message: "invalid user info"
      });
      if (role !== "CUSTOMER" && role !== "ADMIN") return res.status(200).json({
        success: "false",
        message: "invalid role"
      })
      const user = await prisma.user.create({
        data: {
          username: username,
          password: password,
          role: role
        },
      });

      if (user) return res.status(200).json({
        success: 'true',
        data: user
      })
      else return res.status(200).json({
        success: 'false',
      })

    } catch (error) {
      res.status(500).json({
        success: "false",
        message: error.message
      });
    }
  }
};