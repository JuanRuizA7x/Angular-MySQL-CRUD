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
        await pool.query('INSERT INTO games set ?', [req.body]);
        res.json({message: 'Game created'});
    }

    public async updateGame (req: Request, res: Response) {
        const id = Number(req.params.id);
        pool.query(`UPDATE games set ? WHERE id = ${id}`, [req.body]);
        res.json({message: 'Game updated'});
    }

    public async deleteGame (req: Request, res: Response) {
        const id = Number(req.params.id);
        await pool.query(`DELETE FROM games WHERE  id =${id}`);
        res.json({message: 'Game deleted'});
    }

} 

const gamesController: GamesController = new GamesController();
export default gamesController;