import pool from "../db/db";
const fs = require('fs');

export default class Todo {
    static getAllTodos = async (req: any, res: any) => {
        try {
            const result = await pool.query("SELECT * FROM todo");
            res.status(200).json({
                success: 'true',
                data: result.rows
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                success: 'false',
                message: error.message
            });
        }
    }

    static getTodo = async (req: any, res: any) => {
        try {
            const { id } = req.params;
            const result = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
            if (result.rows[0]) {
                res.status(200).json({
                    success: 'true',
                    data: result.rows[0]
                });
            }
            else {
                res.status(200).json({
                    success: 'false',
                    messsage: 'No data'
                });
            }
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                success: 'false',
                message: error.message
            });
        }
    }

    static postTodo = async (req: any, res: any) => {
        try {
            const { description } = req.body;
            const result = await pool.query(
                "INSERT INTO todo (description) VALUES($1) RETURNING *",
                [description]
            );
            res.status(200).json({
                success: 'true',
                data: result.rows[0]
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                success: 'false',
                message: error.message
            });
        }
    }

    static postSave = async (req: any, res: any) => {
        try {
            const { image, storeId, storeName, date, totalPrice } = req.body;
            const data = [
                { image: image, storeId: storeId, storeName: storeName, date: date, totalPrice: totalPrice }
            ]
            var fileName = data[0].image + '.json';
            if (!fs.existsSync('./test/' + fileName)) {
                const myJSON = JSON.stringify(data);
                fs.writeFile('./test/' + fileName, myJSON, function (err: any) {
                    if (err) throw err;
                    console.log('saved file okly');
                });
            }
            res.status(200).json({
                success: 'true'
            });
            console.log('saved completely');
        } catch (error) {
            console.log('error', error);
        }
    }

    static putTodo = async (req: any, res: any) => {
        try {
            const { id } = req.params;
            const { description } = req.body;

            const check = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
            if (check.rows[0]) {
                const result = await pool.query(
                    "UPDATE todo SET description = $1 WHERE todo_id = $2",
                    [description, id]
                );
                res.status(200).json({
                    success: 'true',
                    data: result.rows[0]
                });
            }
            else {
                res.status(200).json({
                    success: 'false',
                    message: 'todo_id is invalid'
                });
            }

        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                success: 'false',
                message: error.message
            });
        }
    }

    static deleteTodo = async (req: any, res: any) => {
        try {
            const { id } = req.params;

            const check = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
            if (check.rows[0]) {
                const result = await pool.query(
                    "DELETE FROM todo WHERE todo_id = $1",
                    [id]
                );
                res.status(200).json({
                    success: 'true',
                    data: result.rows[0]
                });
            }
            else {
                res.status(200).json({
                    success: 'false',
                    message: 'todo_id is invalid'
                });
            }

        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                success: 'false',
                message: error.message
            });
        }
    }

};