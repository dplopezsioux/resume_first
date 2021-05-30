console.log("load skill");

const path = require("path");
let fs = require("fs");

let data = "";

let readStream = fs.createReadStream(
  path.resolve(__dirname + "skill.json"),
  "utf8"
);

readStream
  .on("data", function (chunk) {
    data += chunk;
  })
  .on("end", function () {
    console.log(data);
  });
