import { Router } from "express";
import create_authorBookController from "../controllers/authorBook/create_authorBookController";
import delete_authorBookController from "../controllers/authorBook/delete_authorBookController";
import read_authorBookController from "../controllers/authorBook/read_authorBookController";
import update_authorBookController from "../controllers/authorBook/update_authorBookController";

class AuthorBookRoutes{

    public routeAuthorBookApi: Router;

    constructor(){
        this.routeAuthorBookApi = Router();
        this.settings();
    }

    public settings(){
        this.routeAuthorBookApi.get('/all', read_authorBookController.getAuthorBook);
        this.routeAuthorBookApi.post('/create', create_authorBookController.create);
        this.routeAuthorBookApi.get('/find/:id', read_authorBookController.findById);
        this.routeAuthorBookApi.delete('/delete/:id', delete_authorBookController.deleteById);

        this.routeAuthorBookApi.put('/update', update_authorBookController.updateAuthorBook);

    }
}

const authorBookRoutes = new AuthorBookRoutes();
export default authorBookRoutes.routeAuthorBookApi;