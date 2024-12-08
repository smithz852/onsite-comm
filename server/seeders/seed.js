import { db } from '../server.js'
import { Categories, SubCategories } from '../models/index.js'
import categorySeeds from './categorySeeds.json' assert { type: 'json' };
import subCategories from './subCategories.json' assert { type: 'json' };

db.once('open', async () => {
  await Categories.insertMany(categorySeeds);
  await SubCategories.insertMany(subCategories)
  console.log(categorySeeds)
  console.log(subCategories)
  // console.log(db)
  console.log('completed seeding')
  process.exit(0);
})