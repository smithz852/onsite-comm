import db from '../config/connection.js'
import Categories from '../models/index.js'
import categorySeeds from './categorySeeds.json' assert { type: 'json' };

db.once('open', async () => {
  await Categories.insertMany(categorySeeds);
  console.log(categorySeeds)
  // console.log(db)
  console.log('completed seeding')
  process.exit(0);
})