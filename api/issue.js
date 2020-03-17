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
    if (effortMax !== undefined) filter.effort.$lte = effortMax;
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

async function update(_, { id, changes }) {
  const db = getDB();
  if (changes.title || changes.status || changes.owner) {
    const issue = await db.collection("issues").findOne({ id });
    Object.assign(issue, changes);
    Validate(issue);
  }
  await db.collection("issues").updateOne({ id }, { $set: changes });
  const savedIssue = await db.collection("issues").findOne({ id });
  return savedIssue;
}

async function removing(_, { id }) {
  const db = getDB();
  const issue = await db.collection("issues").findOne({ id });
  if (!issue) return false; //not found
  issue.deleted = new Date();

  let deleteTabledata = db.collection("deleted_issues").findOne({ id });
  if (deleteTabledata) {
    let found = await db.collection("deleted_issues").deleteOne({ id }, issue);
    let result = await db.collection("deleted_issues").insertOne(issue);
    if (result.insertedId) {
      result = await db.collection("issues").deleteOne({ id });

      const newCount = await db.collection("issues").count();
      const cntr = await db
        .collection("counters")
        .updateOne({ _id: "issues" }, { $set: { current: newCount } });
      11;
      return result.deletedCount === 1;
    }
  } else {
    let result = await db.collection("deleted_issues").insertOne(issue);

    if (result.insertedId) {
      result = await db.collection("issues").deleteOne({ id });

      const newCount = await db.collection("issues").count();
      const cntr = await db
        .collection("counters")
        .updateOne({ _id: "issues" }, { $set: { current: newCount } });
      return result.deletedCount === 1;
    }
  }
  return false;
}

module.exports = { list, add, get, update, removing };
