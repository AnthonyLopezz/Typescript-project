import { Response, Request } from "express";
import Create_authorDao from "../../daos/author/create_authorDao";
import { SQL_CREATE_AUTHOR } from "../../repositories/author/create";
import { SQL_READ_AUTHOR } from "../../repositories/author/read";


class Create_authorController extends Create_authorDao {
    public create(req: Request, res: Response): void {
        const name = req.body.authorName;
        const lastname = req.body.authorLastname;
        const nationality = req.body.nationality;
        const description = req.body.description;
        const parameters = [name, lastname, nationality, description];
        Create_authorController.create(SQL_READ_AUTHOR.VERIFY, SQL_CREATE_AUTHOR.CREATE, parameters, res);
    }
}

const create_authorController = new Create_authorController();
export default create_authorController;