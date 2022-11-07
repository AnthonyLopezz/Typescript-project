import { Response, Request } from "express";
import Delete_lendDao from "../../daos/lend/delete_lendDao";
import { SQL_DELETE_LEND } from "../../repositories/lend/delete";



class Delete_lendController extends Delete_lendDao {
    
    public deleteById(req: Request, res: Response): void {
        const id = req.params.id;
        const parameter = [id];

        Delete_lendController.delete(SQL_DELETE_LEND.DELETE, parameter, res);

    }
}

const delete_lendController = new Delete_lendController();
export default delete_lendController;