import { Response, Request } from "express";
import Read_authorDao from "../../daos/author/read_authorDao";
import { SQL_READ_AUTHOR } from "../../repositories/author/read";


class Read_authorController extends Read_authorDao {
    public getAuthor(req: Request, res: Response): void {
        Read_authorController.get(SQL_READ_AUTHOR.ALL, [], res);
    }

    public findById(req: Request, res: Response): void {
        const id = req.params.id;
        const parameter = [id];

        Read_authorController.find(SQL_READ_AUTHOR.LOAD, parameter, res);

    }
}

const read_authorController = new Read_authorController();
export default read_authorController;