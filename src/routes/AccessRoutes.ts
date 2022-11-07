import { Router } from "express";
import accessController from "../controllers/user/accessController";

class AccessRoutes{

    public routeAccessApi: Router;

    constructor(){
        this.routeAccessApi = Router();
        this.settings();
    }

    public settings(){
        this.routeAccessApi.post('/access', accessController.verify);

    }
}

const accessRoutes = new AccessRoutes();
export default accessRoutes.routeAccessApi;