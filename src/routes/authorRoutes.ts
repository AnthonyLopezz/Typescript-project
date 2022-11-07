import { Router } from "express";
import create_authorController from "../controllers/author/create_authorController";
import delete_authorController from "../controllers/author/delete_authorController";
import read_authorController from "../controllers/author/read_authorController";
import update_authorController from "../controllers/author/update_authorController";

class AuthorRoutes{

    public routeAuthorApi: Router;

    constructor(){
        this.routeAuthorApi = Router();
        this.settings();
    }

    public settings(){
        this.routeAuthorApi.get('/all', read_authorController.getAuthor);
        this.routeAuthorApi.post('/create', create_authorController.create);
        this.routeAuthorApi.get('/find/:id', read_authorController.findById);
        this.routeAuthorApi.delete('/delete/:id', delete_authorController.deleteById);

        this.routeAuthorApi.put('/update', update_authorController.updateAuthor);

    }
}

const authorRoutes = new AuthorRoutes();
export default authorRoutes.routeAuthorApi;