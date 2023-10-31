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

};