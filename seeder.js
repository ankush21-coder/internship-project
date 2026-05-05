const Product = require('./models/Product');
const products = require('./data/products');

const seedProducts = async () => {
  try {
    // Clear existing products and seed new ones
    await Product.deleteMany({});
    
    // Insert the new products
    const insertedProducts = await Product.insertMany(products);
    console.log(`Successfully seeded ${insertedProducts.length} products to the database.`);
  } catch (error) {
    console.error('Error seeding products:', error.message);
  }
};

module.exports = seedProducts;
