import { Response, Request } from "express";
import Read_bookDao from "../../daos/book/read_bookDao";
import { SQL_READ_BOOK } from "../../repositories/book/read";



class Read_bookController extends Read_bookDao {
    public getAuthor(req: Request, res: Response): void {
        Read_bookController.get(SQL_READ_BOOK.ALL, [], res);
    }

    public findById(req: Request, res: Response): void {
        const id = req.params.id;
        const parameter = [id];

        Read_bookController.find(SQL_READ_BOOK.LOAD, parameter, res);

    }

    public findByQuery(req: Request, res: Response): void {
        const id = req.params.id;
        const parameter = [id];

        Read_bookController.findQuery(SQL_READ_BOOK.QUERY, parameter, res);

    }
}

const read_bookController = new Read_bookController();
export default read_bookController;