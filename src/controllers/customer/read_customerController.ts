import { Response, Request } from "express";
import Read_customerDao from "../../daos/customer/read_customerDao";
import { SQL_READ_CUSTOMER } from "../../repositories/customer/read";



class Read_customerController extends Read_customerDao {
    public getAuthor(req: Request, res: Response): void {
        Read_customerController.get(SQL_READ_CUSTOMER.ALL, [], res);
    }

    public findById(req: Request, res: Response): void {
        const id = req.params.id;
        const parameter = [id];

        Read_customerController.find(SQL_READ_CUSTOMER.LOAD, parameter, res);

    }

    public findByQuery(req: Request, res: Response): void {
        const id = req.params.id;
        const parameter = [id];

        Read_customerController.find(SQL_READ_CUSTOMER.QUERY, parameter, res);

    }
}

const read_customerController = new Read_customerController();
export default read_customerController;