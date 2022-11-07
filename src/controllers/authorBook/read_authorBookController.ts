import { Response, Request } from "express";
import Read_authorBookDao from "../../daos/authorBook/read_authorBookDao";
import { SQL_READ_AUTHORBOOK } from "../../repositories/authorBook/read";


class Read_authorBookController extends Read_authorBookDao {
    public getAuthorBook(req: Request, res: Response): void {
        Read_authorBookController.get(SQL_READ_AUTHORBOOK.ALL, [], res);
    }

    public findById(req: Request, res: Response): void {
        const id = req.params.id;
        const parameter = [id];

        Read_authorBookController.find(SQL_READ_AUTHORBOOK.LOAD, parameter, res);

    }
}

const read_authorBookController = new Read_authorBookController();
export default read_authorBookController;