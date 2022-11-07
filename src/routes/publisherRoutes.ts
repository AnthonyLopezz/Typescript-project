import { Router } from "express";
import create_publisherController from "../controllers/publisher/create_publisherController";
import delete_publisherController from "../controllers/publisher/delete_publisherController";
import read_publisherController from "../controllers/publisher/read_publisherController";
import update_publisherController from "../controllers/publisher/update_publisherController";

class PublisherRoutes{

    public routePublisherApi: Router;

    constructor(){
        this.routePublisherApi = Router();
        this.settings();
    }

    public settings(){
        this.routePublisherApi.get('/all', read_publisherController.getpublisher);
        this.routePublisherApi.post('/create', create_publisherController.create);
        this.routePublisherApi.get('/find/:id', read_publisherController.findById);
        this.routePublisherApi.get('/findquery/:id', read_publisherController.findByQuery);
        this.routePublisherApi.delete('/delete/:id', delete_publisherController.deleteById);

        this.routePublisherApi.put('/update', update_publisherController.updatePublisher);

    }
}

const publisherRoutes = new PublisherRoutes();
export default publisherRoutes.routePublisherApi;