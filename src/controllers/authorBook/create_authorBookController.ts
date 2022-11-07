import { Response, Request } from "express";
import Create_authorBookDao from "../../daos/authorBook/create_authorBookDao";
import { SQL_CREATE_AUTHORBOOK } from "../../repositories/authorBook/create";
import { SQL_READ_AUTHORBOOK } from "../../repositories/authorBook/read";


class Create_authorBookController extends Create_authorBookDao {
    public create(req: Request, res: Response): void {
        const authorId = req.body.authorId;
        const bookId = req.body.bookId;
        const parameters = [authorId, bookId];
        Create_authorBookController.create(SQL_READ_AUTHORBOOK.VERIFY, SQL_CREATE_AUTHORBOOK.CREATE, parameters, res);
    }
}

const create_authorBookController = new Create_authorBookController();
export default create_authorBookController;