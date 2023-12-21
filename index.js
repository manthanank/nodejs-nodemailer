const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

require("dotenv").config();

const app = express();

app.use(express.json());

app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true,
}));

app.use("/api", require("./routes/email"));

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});