const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.post("/create-profile", (req, res) => {
  const { name, bio, image } = req.body;

  if (!name || !bio || !image) {
    return res.status(400).json({
      success: false,
      message: "All fields are required"
    });
  }

  res.json({
    success: true,
    profile: {
      name,
      bio,
      image
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});