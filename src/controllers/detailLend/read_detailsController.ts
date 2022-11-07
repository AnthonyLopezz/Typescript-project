import { Response, Request } from "express";
import Read_detailsDao from "../../daos/detailLend/read_detailsDao";
import { SQL_READ_DETAILS } from "../../repositories/detailLend/read";


class Read_detailsController extends Read_detailsDao {
    public getdetails(req: Request, res: Response): void {
        Read_detailsController.get(SQL_READ_DETAILS.ALL, [], res);
    }

    public findById(req: Request, res: Response): void {
        const id = req.params.id;
        const parameter = [id];

        Read_detailsController.find(SQL_READ_DETAILS.LOAD, parameter, res);

    }
}

const read_detailsController = new Read_detailsController();
export default read_detailsController;