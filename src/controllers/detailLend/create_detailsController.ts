import { Response, Request } from "express";
import Create_detailsDao from "../../daos/detailLend/create_detailsDao";
import { SQL_CREATE_DETAILS } from "../../repositories/detailLend/create";
import { SQL_READ_DETAILS } from "../../repositories/detailLend/read";



class Create_detailsController extends Create_detailsDao {
    public create(req: Request, res: Response): void {
        const lend = req.body.lendId;
        const book = req.body.bookId;
        const returnDate = req.body.returnDate;
        const daysLate = req.body.daysLate;
        const description = req.body.description;
        const deliveryDay = req.body.deliveryDay;
        const parameters = [lend, book, returnDate, daysLate, description, deliveryDay];
        Create_detailsController.create(SQL_READ_DETAILS.VERIFY, SQL_CREATE_DETAILS.CREATE, parameters, res);
    }
}

const create_detailsController = new Create_detailsController();
export default create_detailsController;