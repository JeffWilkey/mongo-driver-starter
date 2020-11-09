const { MongoClient } = require('mongodb');
const { DB_URL } = require('./config');

const client = new MongoClient(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
    console.log('mongo client closed');
  }
}

run();
