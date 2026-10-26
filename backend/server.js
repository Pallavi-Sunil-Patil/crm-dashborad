const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {

    const { name, password } = req.body;

    const sql =
        "SELECT * FROM users WHERE name=? AND password=?";

    db.query(sql, [name, password], (err, result) => {

        if (err) {
            return res.json({
                success: false,
                message: "Database Error"
            });
        }

        if (result.length > 0) {

            return res.json({
                success: true,
                user: result[0]
            });

        } else {

            return res.json({
                success: false
            });

        }

    });

});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});