import { Response, Request } from "express";
import Create_bookDao from "../../daos/book/create_bookDao";
import { SQL_CREATE_BOOK } from "../../repositories/book/create";
import { SQL_READ_BOOK } from "../../repositories/book/read";


class Create_bookController extends Create_bookDao {
    public create(req: Request, res: Response): void {
        const title = req.body.bookTitle;
        const publicationDate = req.body.publicationDate;
        const code = req.body.code;
        const isbn = req.body.isbn;
        const publisherId = req.body.publisherId;
        const parameters = [title, publicationDate, code, isbn, publisherId];
        Create_bookController.create(SQL_READ_BOOK.VERIFY, SQL_CREATE_BOOK.CREATE, parameters, res);
    }
}

const create_bookController = new Create_bookController();
export default create_bookController;