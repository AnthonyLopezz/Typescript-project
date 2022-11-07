import { Response, Request } from "express";
import Create_customerDao from "../../daos/customer/create_customerDao";
import { SQL_CREATE_CUSTOMER } from "../../repositories/customer/create";
import { SQL_READ_CUSTOMER } from "../../repositories/customer/read";


class Create_customerController extends Create_customerDao {
    public create(req: Request, res: Response): void {
        const identification = req.body.identification;
        const name = req.body.customerName;
        const lastName = req.body.customerLastname;
        const address = req.body.address;
        const phone = req.body.phone;
        const parameters = [identification, name, lastName, address, phone];
        Create_customerController.create(SQL_READ_CUSTOMER.VERIFY, SQL_CREATE_CUSTOMER.CREATE, parameters, res);
    }
}

const create_customerController = new Create_customerController();
export default create_customerController;