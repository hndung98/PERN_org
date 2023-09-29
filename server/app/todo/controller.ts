import pool from "../db/db";

export default class Todo {
    static getAllTodos = async(req: any, res: any) => {        
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

    static getTodo = async(req: any, res: any) => {
        try {
            const { id } = req.params;
            const result = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
            if(result.rows[0]){
                res.status(200).json({
                    success: 'true',
                    data: result.rows[0]
                });
            }
            else{
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

    static postTodo = async(req: any, res: any) => {
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

    static putTodo = async(req: any, res: any) => {
        try {
            const { id } = req.params;
            const { description } = req.body;
            
            const check = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
            if(check.rows[0]){
                const result = await pool.query( 
                    "UPDATE todo SET description = $1 WHERE todo_id = $2",
                    [description, id]
                );
                res.status(200).json({
                    success: 'true',
                    data: result.rows[0]
                });
            }
            else{
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

    static deleteTodo = async(req: any, res: any) => {
        try {
            const { id } = req.params;
            
            const check = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
            if(check.rows[0]){
                const result = await pool.query( 
                    "DELETE FROM todo WHERE todo_id = $1",
                    [id]
                );
                res.status(200).json({
                    success: 'true',
                    data: result.rows[0]
                });
            }
            else{
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