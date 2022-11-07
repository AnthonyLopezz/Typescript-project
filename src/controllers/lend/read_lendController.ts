import { Response, Request } from "express";
import Read_lendDao from "../../daos/lend/read_lendDao";
import { SQL_READ_LEND } from "../../repositories/lend/read";



class Read_lendController extends Read_lendDao {
    public get(req: Request, res: Response): void {
        Read_lendController.get(SQL_READ_LEND.ALL, [], res);
    }

    public findById(req: Request, res: Response): void {
        const id = req.params.id;
        const parameter = [id];

        Read_lendController.find(SQL_READ_LEND.LOAD, parameter, res);

    }
}

const read_lendController = new Read_lendController();
export default read_lendController;