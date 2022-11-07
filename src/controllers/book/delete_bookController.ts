import { Response, Request } from "express";
import Delete_bookDao from "../../daos/book/delete_bookDao";
import { SQL_DELETE_BOOK } from "../../repositories/book/delete";



class Delete_bookController extends Delete_bookDao {
    
    public deleteById(req: Request, res: Response): void {
        const id = req.params.id;
        const parameter = [id];

        Delete_bookController.delete(SQL_DELETE_BOOK.DELETE, parameter, res);

    }
}

const delete_bookController = new Delete_bookController();
export default delete_bookController;