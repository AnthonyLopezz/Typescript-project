import { Response, Request } from "express";
import Update_publisherDao from "../../daos/publisher/update_publisherDao";
import { SQL_UPDATE_PUBLISHER } from "../../repositories/publisher/update";

class Update_publisherController extends Update_publisherDao {

    public updatePublisher(req: Request, res: Response): void {
        const id = req.body.publisherId;
        const name = req.body.publisherName;
        const country = req.body.country;
        const phone = req.body.phone;
        const parameters = [id, name, country, phone];
        Update_publisherController.update( SQL_UPDATE_PUBLISHER.UPDATE, parameters, res);
    }
}

const update_publisherController = new Update_publisherController();
export default update_publisherController;