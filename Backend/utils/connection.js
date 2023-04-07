const mongoose = require("mongoose");

const connection = async () => {
 const MongoURL = process.env.MONGODB_URL;

mongoose
   .connect(MongoURL)
   .then(() => {
     console.log("Connected to MongoDB");
    })
    .catch(() => {
     console.log("Could not connect to MongoDB");
    });
};

module.exports = { connection };

