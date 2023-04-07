const express = require("express");
const cors = require("cors");
const { connection } = require("./utils/connection");
const dotenv = require("dotenv");

//@import Routes
const employeeRouter = require("./routes/employee.route")


const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;

//use routes
app.use("/api/employee",employeeRouter)

app.listen(PORT, () => {
 console.log(`Server is up and running on port number: ${PORT}`);
 connection();
});

