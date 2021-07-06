const express = require("express");
const path = require("path");
const app = express();
// const logger = require("./middleware/logger.js");

const PORT = process.env.PORT || 5000;

// Init middleware
// app.use(logger);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Members API route
app.use("/api/members", require("./routes/api/members"));

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
