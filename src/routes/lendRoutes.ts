import { Router } from "express";
import create_lendController from "../controllers/lend/create_lendController";
import delete_lendController from "../controllers/lend/delete_lendController";
import read_lendController from "../controllers/lend/read_lendController";
import update_lendController from "../controllers/lend/update_lendController";

class LendRoutes{

    public routeLendApi: Router;

    constructor(){
        this.routeLendApi = Router();
        this.settings();
    }

    public settings(){
        this.routeLendApi.get('/all', read_lendController.get);
        this.routeLendApi.post('/create', create_lendController.create);
        this.routeLendApi.get('/find/:id', read_lendController.findById);
        this.routeLendApi.delete('/delete/:id', delete_lendController.deleteById);

        this.routeLendApi.put('/update', update_lendController.updateLend);

    }
}

const lendRoutes = new LendRoutes();
export default lendRoutes.routeLendApi;