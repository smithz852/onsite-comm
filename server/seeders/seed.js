import db from '../config/connection.js'
import Categories from '../models/index.js'
import categorySeeds from './categorySeeds.json' assert { type: 'json' };

db.once('open', async () => {
  await Categories.create(categorySeeds);
  console.log('completed seeding')
  process.exit(0);
})