require("dotenv").config();
const { MongoClient } = require("mongodb");
let db;
const url = process.env.DB_URL;

async function connectingDB() {
  try {
    const client = new MongoClient(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    await client.connect();
    console.log("Connected to the db");
    db = client.db();
  } catch (err) {
    console.log(err);
  }
}
async function getNextSequence(name) {
  const result = await db
    .collection("counters")
    .findOneAndUpdate(
      { _id: name },
      { $inc: { current: 1 } },
      { returnOriginal: false }
    );
  return result.value.current;
}

function getDB() {
  return db;
}
module.exports = { connectingDB, getNextSequence, getDB };