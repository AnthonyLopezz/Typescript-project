import { Response, Request } from "express";
import Delete_customerDao from "../../daos/customer/delete_customerDao";
import { SQL_DELETE_CUSTOMER } from "../../repositories/customer/delete";



class Delete_customerController extends Delete_customerDao {
    
    public deleteById(req: Request, res: Response): void {
        const id = req.params.id;
        const parameter = [id];

        Delete_customerController.delete(SQL_DELETE_CUSTOMER.DELETE, parameter, res);

    }
}

const delete_customerController = new Delete_customerController();
export default delete_customerController;