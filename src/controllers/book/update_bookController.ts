import { Response, Request } from "express";
import Update_bookDao from "../../daos/book/update_bookDao";
import { SQL_UPDATE_BOOK } from "../../repositories/book/update";


class Update_bookController extends Update_bookDao {

    public updateBook(req: Request, res: Response): void {
        const id = req.body.bookId;
        const title = req.body.bookTitle;
        const publicationDate = req.body.publicationDate;
        const code = req.body.code;
        const isbn = req.body.isbn;
        const publisherId = req.body.publisherId;
        const parameters = [id, title, publicationDate, code, isbn, publisherId];
        Update_bookController.update( SQL_UPDATE_BOOK.UPDATE, parameters, res);
    }
}

const update_bookController = new Update_bookController();
export default update_bookController;