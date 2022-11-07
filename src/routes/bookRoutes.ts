import { Router } from "express";
import create_bookController from "../controllers/book/create_bookController";
import delete_bookController from "../controllers/book/delete_bookController";
import read_bookController from "../controllers/book/read_bookController";
import update_bookController from "../controllers/book/update_bookController";

class BookRoutes{

    public routeBookApi: Router;

    constructor(){
        this.routeBookApi = Router();
        this.settings();
    }

    public settings(){
        this.routeBookApi.get('/all', read_bookController.getAuthor);
        this.routeBookApi.post('/create', create_bookController.create);
        this.routeBookApi.get('/find/:id', read_bookController.findById);
        this.routeBookApi.get('/findquery/:id', read_bookController.findByQuery);
        this.routeBookApi.delete('/delete/:id', delete_bookController.deleteById);

        this.routeBookApi.put('/update', update_bookController.updateBook);

    }
}

const bookRoutes = new BookRoutes();
export default bookRoutes.routeBookApi;