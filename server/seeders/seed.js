import db from '../config/connection.js'
import Categories from '../models/index.js'
import SubCategory from '../models/SubCategory.js';
import categorySeeds from './categorySeeds.json' assert { type: 'json' };
import subCategories from './subCategories.json' assert { type: 'json' };

db.once('open', async () => {
  await Categories.insertMany(categorySeeds);
  await SubCategory.insertMany(subCategories)
  console.log(categorySeeds)
  console.log(subCategories)
  // console.log(db)
  console.log('completed seeding')
  process.exit(0);
})