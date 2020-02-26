const { UserInputError } = require("apollo-server-express");
const { getDB, getNextSequence } = require("./db.js");

async function list() {
  const db = getDB();
  const issues = await db
    .collection("issues")
    .find({})
    .toArray();
  return issues;
}

function Validate(data) {
  const errors = [];
  if (data.title.length < 3)
    errors.push('Field "title" must be at least 3 characters long.');
  if (data.status == "Assigned" && !data.owner)
    errors.push('Field "owner" is required when status is "Assigned" ');
  if (errors.length > 0)
    throw new UserInputError("Invalid inputs form the user", { errors });
}

async function add(_, { issue }) {
  const db = getDB();
  Validate(issue);
  issue.created = new Date();
  issue.id = await getNextSequence("issues");
  const result = await db.collection("issues").insertOne(issue);
  const savedIssue = await db
    .collection("issues")
    .findOne({ _id: result.insertedId });
  return savedIssue;
}

async function del(_, { id }) {
  const db = getDB();
  const result = await db.collection("issues").deleteOne({ id: id });
  return result.data.title;
  console.log("deleted");
}

module.exports = { list, add, del };
