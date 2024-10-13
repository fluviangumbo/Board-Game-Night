import { Game } from '../models/index.js';
import csvParser from 'csv-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

interface GameType {
    id: number;
    name: string;
    published: number;
    rank: number;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const seedGames = async () => {
    const games: GameType[] = [];

    fs.createReadStream(path.join(__dirname, '../../db/boardgames_ranks.csv'))
      .pipe(csvParser())
      .on('data', (row: any) => {
        games.push({
            id: row.id,
            name: row.name,
            published: row.yearpublished,
            rank: row.rank,
        });
      })
      .on('end', async () => {
        try {
            await Game.bulkCreate(games);
            console.log('Games table seeded successfully.\n\n');
        } catch (err) {
            console.error('Error seeding games table.', err);
        }
      });
}