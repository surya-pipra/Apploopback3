var server = require("./server");
var chalk = require("chalk");
var app = require("./server");

var ds = server.dataSources.db;
var tables = [
  "AccessToken",
  "ACL",
  "cfuser",
  "blog",
  "comments"
];
ds.automigrate(tables, async function(er) {
  if (er) throw er;
  console.log(
    chalk.green.bold("CF tables [") +
    tables +
    chalk.green.bold("] created in "),
    ds.adapter.name
  );
  ds.disconnect();
});
