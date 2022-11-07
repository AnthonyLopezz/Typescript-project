import { Response, Request } from "express";
import Update_authorBookDao from "../../daos/authorBook/update_authorBookDao";
import { SQL_UPDATE_AUTHORBOOK } from "../../repositories/authorBook/update";

class Update_authorBookController extends Update_authorBookDao {

    public updateAuthorBook(req: Request, res: Response): void {
        const id = req.body.authorBookId;
        const authorId = req.body.authorId;
        const bookId = req.body.bookId;
        const parameters = [id, authorId, bookId];
        Update_authorBookController.update( SQL_UPDATE_AUTHORBOOK.UPDATE, parameters, res);
    }
}

const update_authorBookController = new Update_authorBookController();
export default update_authorBookController;