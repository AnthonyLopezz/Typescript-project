import { Response, Request } from "express";
import Update_customerDao from "../../daos/customer/update_customerDao";
import { SQL_UPDATE_CUSTOMER } from "../../repositories/customer/update";



class Update_customerController extends Update_customerDao {

    public updateCustomer(req: Request, res: Response): void {
        const id = req.body.customerId;
        const identification = req.body.identification;
        const name = req.body.customerName;
        const lastName = req.body.customerLastname;
        const address = req.body.address;
        const phone = req.body.phone;
        const parameters = [id, identification, name, lastName, address, phone];
        Update_customerController.update( SQL_UPDATE_CUSTOMER.UPDATE, parameters, res);
    }
}

const update_customerController = new Update_customerController();
export default update_customerController;