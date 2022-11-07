import { Response, Request } from "express";
import Update_lendDao from "../../daos/lend/update_lendDao";
import { SQL_UPDATE_LEND } from "../../repositories/lend/update";


class Update_lendController extends Update_lendDao {

    public updateLend(req: Request, res: Response): void {
        const id = req.body.lendId;
        const date = req.body.startDate;
        const description = req.body.description;
        const customerId = req.body.customerId;
        const parameters = [id, date, description, customerId];
        Update_lendController.update( SQL_UPDATE_LEND.UPDATE, parameters, res);
    }
}

const update_lendController = new Update_lendController();
export default update_lendController;