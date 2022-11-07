import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import authorRoutes from '../../routes/authorRoutes';
import bookRoutes from '../../routes/bookRoutes';
import customerRoutes from '../../routes/customerRoutes';
import lendRoutes from '../../routes/lendRoutes';
import publisherRoutes from '../../routes/publisherRoutes';
import detailsRoutes from '../../routes/detailsRoutes';
import authorBookRoutes from '../../routes/authorBookRoutes';
import validate from '../../middleware/Validate';
import AccessRoutes from '../../routes/AccessRoutes';

class Server {

    public app: express.Application;

    constructor(){
        this.app = express();
        this.startConfig();
        this.activateRoutes();

    }

    public startConfig(): void{

        this.app.set('PORT', 8088);
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json({limit: '100mb'}));
        this.app.use(express.urlencoded({extended: true}));
    }

    public activateRoutes(){
        //this.app.use('/api/private/author', authorRoutes);
        this.app.use('/api/private/book', bookRoutes);
        this.app.use('/api/private/customer', customerRoutes);
        this.app.use('/api/private/lend', lendRoutes);
        this.app.use('/api/private/publisher', publisherRoutes);
        this.app.use('/api/private/details', detailsRoutes);
        this.app.use('/api/private/authorbook', authorBookRoutes);

        
        this.app.use('/api/public', AccessRoutes);
        this.app.use('/api/private/author', validate.delToken, authorRoutes);

    
    }

    public start(){
        this.app.listen(this.app.get('PORT'), ()=> {
            console.log('WORKS! ', this.app.get('PORT'));
        })

    }
}

export default Server;