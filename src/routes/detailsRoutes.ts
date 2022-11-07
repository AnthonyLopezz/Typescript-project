import { Router } from "express";
import create_detailsController from "../controllers/detailLend/create_detailsController";
import delete_detailsController from "../controllers/detailLend/delete_detailsController";
import read_detailsController from "../controllers/detailLend/read_detailsController";
import update_detailsController from "../controllers/detailLend/update_detailsController";

class DetailsRoutes{

    public routeDetailsApi: Router;

    constructor(){
        this.routeDetailsApi = Router();
        this.settings();
    }

    public settings(){
        this.routeDetailsApi.get('/all', read_detailsController.getdetails);
        this.routeDetailsApi.post('/create', create_detailsController.create);
        this.routeDetailsApi.get('/find/:id', read_detailsController.findById);
        this.routeDetailsApi.delete('/delete/:id', delete_detailsController.deleteById);

        this.routeDetailsApi.put('/update', update_detailsController.updateDetail);

    }
}

const detailsRoutes = new DetailsRoutes();
export default detailsRoutes.routeDetailsApi;