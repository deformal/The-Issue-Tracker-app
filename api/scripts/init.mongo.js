<<<<<<< HEAD
db.issues.remove({});
const issuesDB = [
  {
    id: 1,
    status: "New",
    owner: "Saurabh",
    effort: "5",
    created: new Date("2020-02-12"),
    due: new Date("2020-03-12"),
    title: "Error in console when clicking ADD"
  },
  {
    id: 2,
    status: "Assigned",
    owner: "Annu",
    effort: "2",
    created: new Date("2020-02-18"),
    due: new Date("2020-03-20"),
    title: "Missing bottom border on the panel"
  }
];
db.issues.insertMany(issuesDB);
=======
>>>>>>> problem fixed
const count = db.issues.count();
print("Inserted", count, "issues");
db.counters.remove({ _id: "issues" });
db.counters.insert({ _id: "issues", current: count });
db.issues.createIndex({ id: 1 }, { unique: true });
db.issues.createIndex({ status: 1 });
db.issues.createIndex({ owner: 1 });
db.issues.createIndex({ created: 1 });
