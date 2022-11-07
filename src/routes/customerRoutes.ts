import { Router } from "express";
import create_customerController from "../controllers/customer/create_customerController";
import delete_customerController from "../controllers/customer/delete_customerController";
import read_customerController from "../controllers/customer/read_customerController";
import update_customerController from "../controllers/customer/update_customerController";

class CustomerRoutes{

    public routeCustomerApi: Router;

    constructor(){
        this.routeCustomerApi = Router();
        this.settings();
    }

    public settings(){
        this.routeCustomerApi.get('/all', read_customerController.getAuthor);
        this.routeCustomerApi.post('/create', create_customerController.create);
        this.routeCustomerApi.get('/find/:id', read_customerController.findById);
        this.routeCustomerApi.get('/findquery/:id', read_customerController.findByQuery);
        this.routeCustomerApi.delete('/delete/:id', delete_customerController.deleteById);

        this.routeCustomerApi.put('/update', update_customerController.updateCustomer);

    }
}

const customerRoutes = new CustomerRoutes();
export default customerRoutes.routeCustomerApi;