import { Response, Request } from "express";
import Update_detailsDao from "../../daos/detailLend/update_detailsDao";
import { SQL_UPDATE_DETAILS } from "../../repositories/detailLend/update";


class Update_detailsController extends Update_detailsDao {

    public updateDetail(req: Request, res: Response): void {
        const id = req.body.detailLendId;
        const lend = req.body.lendId;
        const book = req.body.bookId;
        const returnDate = req.body.returnDate;
        const daysLate = req.body.daysLate;
        const description = req.body.description;
        const deliveryDay = req.body.deliveryDay;
        const parameters = [id, lend, book, returnDate, daysLate, description,deliveryDay];
        Update_detailsController.update( SQL_UPDATE_DETAILS.UPDATE, parameters, res);
    }
}

const update_detailsController = new Update_detailsController();
export default update_detailsController;