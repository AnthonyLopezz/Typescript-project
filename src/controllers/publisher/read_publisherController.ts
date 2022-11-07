import { Response, Request } from "express";
import Read_publisherDao from "../../daos/publisher/read_publisherDao";
import { SQL_READ_PUBLISHER } from "../../repositories/publisher/read";


class Read_publisherController extends Read_publisherDao {
    public getpublisher(req: Request, res: Response): void {
        Read_publisherController.get(SQL_READ_PUBLISHER.ALL, [], res);
    }

    public findById(req: Request, res: Response): void {
        const id = req.params.id;
        const parameter = [id];

        Read_publisherController.find(SQL_READ_PUBLISHER.LOAD, parameter, res);

    }

    public findByQuery(req: Request, res: Response): void {
        const id = req.params.id;
        const parameter = [id];

        Read_publisherController.find(SQL_READ_PUBLISHER.QUERY, parameter, res);

    }
}

const read_publisherController = new Read_publisherController();
export default read_publisherController;