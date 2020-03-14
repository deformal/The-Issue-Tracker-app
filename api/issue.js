const { UserInputError } = require("apollo-server-express");
const { getDB, getNextSequence, getPrevSequence } = require("./db.js");

async function get(_, { id }) {
  const db = getDB();
  const issue = await db.collection("issues").findOne({ id });
  return issue;
}

async function list(_, { status, effortMin, effortMax }) {
  const db = getDB();
  const filter = {};
  if (status) filter.status = status;
  if (effortMin !== undefined || effortMax !== undefined) {
    filter.effort = {};
    if (effortMin !== undefined) filter.effort.$gte = effortMin;
    if (effortMax !== undefined) filter.effort.$lte = effortMax
  }
  const issues = await db
    .collection("issues")
    .find(filter)
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
  const result = await db.collection("issues").deleteOne({ id });
  console.log("deleted");
  await getPrevSequence("issues");
  const remaining = await db.collection("issues").find({});
  return remaining;
}

module.exports = { list, add, get, del };
