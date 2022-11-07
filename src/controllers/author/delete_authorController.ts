import { Response, Request } from "express";
import Delete_authorDao from "../../daos/author/delete_authorDao";
import { SQL_DELETE_AUTHOR } from "../../repositories/author/delete";


class Delete_authorController extends Delete_authorDao {
    
    public deleteById(req: Request, res: Response): void {
        const id = req.params.id;
        const parameter = [id];

        Delete_authorController.delete(SQL_DELETE_AUTHOR.DELETE, parameter, res);

    }
}

const delete_authorController = new Delete_authorController();
export default delete_authorController;