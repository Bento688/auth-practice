import express from "express";

const app = express();

app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
  res.json({
    message: "HEllo!",
  });
});

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
