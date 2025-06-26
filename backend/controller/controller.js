const db = require("../config/db");

// Login
const userLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username and password are required",
      });
    }

    const [rows] = await db.query(
      "SELECT * FROM students_db.login WHERE username = ? AND password = ?",
      [username, password]
    );

    if (rows.length > 0) {
      return res.status(200).json({
        success: true,
        message: "Login successful",
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password",
      });
    }

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


// Signup
const userSignup = async (req, res) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username and password are required",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters long",
      });
    }

    const [existing] = await db.query(
      "SELECT * FROM login WHERE username = ?",
      [username]
    );

    if (existing.length > 0) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    const [rows] = await db.query(
      "INSERT INTO students_db.login (username, password) VALUES (?, ?)",
      [username, password]
    );

    return res.status(200).json({
      success: true,
      message: "Signup successful",
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


module.exports = { userLogin, userSignup };
