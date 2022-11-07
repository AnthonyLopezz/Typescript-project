import { Response, Request } from "express";
import Delete_publisherDao from "../../daos/publisher/delete_publisherDao";
import { SQL_DELETE_PUBLISHER } from "../../repositories/publisher/delete";


class Delete_publisherController extends Delete_publisherDao {
    
    public deleteById(req: Request, res: Response): void {
        const id = req.params.id;
        const parameter = [id];

        Delete_publisherController.delete(SQL_DELETE_PUBLISHER.DELETE, parameter, res);

    }
}

const delete_publisherController = new Delete_publisherController();
export default delete_publisherController;