import { Router } from 'express';
import gamesController from '../controllers/gamesController';

class GamesRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', gamesController.getAllGames);
        this.router.get('/:id', gamesController.getGame);
        this.router.post('/', gamesController.createGame);
        this.router.put('/:id', gamesController.updateGame);
        this.router.delete('/:id', gamesController.deleteGame);
    }

}

const gamesRoutes: GamesRoutes = new GamesRoutes();
export default gamesRoutes.router;