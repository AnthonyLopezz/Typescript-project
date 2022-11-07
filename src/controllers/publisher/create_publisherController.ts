import { Response, Request } from "express";
import Create_publisherDao from "../../daos/publisher/create_publisherDao";
import { SQL_CREATE_PUBLISHER } from "../../repositories/publisher/create";
import { SQL_READ_PUBLISHER } from "../../repositories/publisher/read";


class Create_publisherController extends Create_publisherDao {
    public create(req: Request, res: Response): void {
        const name = req.body.publisherName;
        const country = req.body.country;
        const phone = req.body.phone;
        const parameters = [name, country, phone];
        Create_publisherController.create(SQL_READ_PUBLISHER.VERIFY, SQL_CREATE_PUBLISHER.CREATE, parameters, res);
    }
}

const create_publisherController = new Create_publisherController();
export default create_publisherController;