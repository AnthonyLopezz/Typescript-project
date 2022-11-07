import { Response, Request } from "express";
import Delete_authorBookDao from "../../daos/authorBook/delete_authorBookDao";
import { SQL_DELETE_AUTHORBOOK } from "../../repositories/authorBook/delete";


class Delete_authorBookController extends Delete_authorBookDao {
    
    public deleteById(req: Request, res: Response): void {
        const id = req.params.id;
        const parameter = [id];

        Delete_authorBookController.delete(SQL_DELETE_AUTHORBOOK.DELETE, parameter, res);

    }
}

const delete_authorBookController = new Delete_authorBookController();
export default delete_authorBookController;