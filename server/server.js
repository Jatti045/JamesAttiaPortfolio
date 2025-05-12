require("dotenv").config();

const apiRoutes = require("./routes/api-routes");

const cors = require("cors");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json());
app.use(
  cors({
    origin:
      process.env.MODE === "development"
        ? "http://localhost:3000"
        : "https://james-attia.vercel.app",
  })
);

//routes
app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${[PORT]}`);
});
