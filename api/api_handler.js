const fs = require("fs");
require("dotenv").config();
const { ApolloServer } = require("apollo-server-express");
const GraphQLDate = require("./graphql_datemodule.js");
const about = require("./about.js");
const issues = require("./issue.js");

const resolvers = {
  Query: {
    about: about.getMessage,
    List: issues.list,
    issue: issues.get,
    issueCounts: issues.counts,
  },
  Mutation: {
    setAboutMessage: about.setMessage,
    issueAdd: issues.add,
    issueUpdate: issues.update,
    issueDelete: issues.removing,
    issueRestore: issues.restore,
  },
  GraphQLDate,
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync("schema.graphql", "utf-8"),
  resolvers,
  formatError: (error) => {
    console.log(error);
    return error;
  },
});

function installHandler(app) {
  const enableCors = (process.env.ENABLE_CORS || "true") == "true";
  console.log(process.env.ENABLE_CORS);
  server.applyMiddleware({ app, path: "/graphql", cors: enableCors });
}

module.exports = { installHandler };
