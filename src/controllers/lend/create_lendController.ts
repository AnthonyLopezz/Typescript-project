import { Response, Request } from "express";
import Create_lendDao from "../../daos/lend/create_lendDao";
import { SQL_CREATE_LEND } from "../../repositories/lend/create";
import { SQL_READ_LEND } from "../../repositories/lend/read";


class Create_lendController extends Create_lendDao {
    public create(req: Request, res: Response): void {
        const date = req.body.startDate;
        const description = req.body.description;
        const customerId = req.body.customerId;
        const parameters = [date, description, customerId];
        Create_lendController.create(SQL_READ_LEND.VERIFY, SQL_CREATE_LEND.CREATE, parameters, res);
    }
}

const create_lendController = new Create_lendController();
export default create_lendController;