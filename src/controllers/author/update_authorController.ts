import { Response, Request } from "express";
import Update_authorDao from "../../daos/author/update_authorDao";
import { SQL_UPDATE_AUTHOR } from "../../repositories/author/update";

class Update_authorController extends Update_authorDao {

    public updateAuthor(req: Request, res: Response): void {
        const id = req.body.authorId;
        const name = req.body.authorName;
        const lastname = req.body.authorLastname;
        const nationality = req.body.nationality;
        const description = req.body.description;
        const parameters = [id, name, lastname, nationality, description];
        Update_authorController.update( SQL_UPDATE_AUTHOR.UPDATE, parameters, res);
    }
}

const update_authorController = new Update_authorController();
export default update_authorController;