const fs = require('fs');

export default class TodoController {
    static getAllTodos = async (req: any, res: any) => {
        try {
        } catch (error) {
            res.status(500).json({
                success: 'false',
                message: error.message
            });
        }
    }

    static getTodo = async (req: any, res: any) => {
        try {
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
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                success: 'false',
                message: error.message
            });
        }
    }

    static saveFile = async (req: any, res: any) => {
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
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                success: 'false',
                message: error.message
            });
        }
    }

};