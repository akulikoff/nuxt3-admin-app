const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(cors());

// Mock user data
const mockUser = {
  email: process.env.EMAIL,
  password: process.env.PASSWORD,
};

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email === mockUser.email && password === mockUser.password) {
    res.cookie("auth", "true", {
      httpOnly: true,
      secure: true,
      // sameSite: "Strict",
    });
    res.status(200).json({ success: true });
  } else {
    res
      .status(401)
      .json({ success: false, message: "Invalid email or password" });
  }
});
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/login`);
});
