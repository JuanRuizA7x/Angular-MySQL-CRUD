import { Request, Response} from 'express';
import pool from '../database';

class GamesController {

    public async getAllGames (req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM games', function(err, games, fields) {
            if (err) throw err;
            res.json(games);
        });
    }

    public async getGame (req: Request, res: Response): Promise<any> {
        const id = Number(req.params.id);
        const game = await pool.query(`SELECT * FROM games WHERE id =${id}`, function(err, game, fields) {
            if (err) throw err;
            res.json(game);
        });
    }

    public async createGame (req: Request, res: Response): Promise<void> {
        console.log(req.body);
        await pool.query('INSERT INTO games set ?', [req.body]);
        res.json({message: 'Game created'});
    }

    public updateGame (req: Request, res: Response) {
        res.json({text: 'Updating  the game ' + req.params.id + '...'});
    }

    public deleteGame (req: Request, res: Response) {
        res.json({text: 'Deleting  the game ' + req.params.id + '...'});
    }

} 

const gamesController: GamesController = new GamesController();
export default gamesController;