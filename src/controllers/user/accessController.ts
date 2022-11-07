import { Response, Request } from "express";
import AccessDao from "../../daos/user/accessDao";
import { SQL_ACCESS } from "../../repositories/user/access";

class AccessController extends AccessDao {

    public verify(req: Request, res: Response): void {
        const nick = req.body.userNick;
        const pass = req.body.password;
        const parameter = [nick, pass];

        AccessController.access(SQL_ACCESS.VERIFY, parameter, res);

    }
}

const accessController = new AccessController();
export default accessController;