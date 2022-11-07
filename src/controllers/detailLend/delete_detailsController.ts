import { Response, Request } from "express";
import Delete_detailsDao from "../../daos/detailLend/delete_detailsDao";
import { SQL_DELETE_DETAILS } from "../../repositories/detailLend/delete";

class Delete_detailsController extends Delete_detailsDao {
    
    public deleteById(req: Request, res: Response): void {
        const id = req.params.id;
        const parameter = [id];

        Delete_detailsController.delete(SQL_DELETE_DETAILS.DELETE, parameter, res);

    }
}

const delete_detailsController = new Delete_detailsController();
export default delete_detailsController;