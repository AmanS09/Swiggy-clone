const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "userdata"
});

app.post('/signup', (req, res) => {
    req.body.password=req.body.password.toString();
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) {
            return res.json("Error");
        }
        bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
            if (err) {
                return res.json("Error");
            }
            const sql = "INSERT INTO logindata (`name`, `number`, `email`, `password`) VALUES ?";
            const values = [
                [req.body.name, req.body.number, req.body.email, hashedPassword]
            ];
            db.query(sql, [values], (err, data) => {
                if (err) {
                    return res.json("Error");
                }
                return res.json(data);
            });
        });
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT * FROM logindata WHERE `email` = ?";
    db.query(sql, [email], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            const hashedPassword = data[0].password; // Access hashed password from data[0]
            let password1=req.body.password.toString();
            bcrypt.compare(password1, hashedPassword, (err, isMatch) => {
                if (err) {
                    console.log(err);
                    console.log("hi");
                    return res.json("Error");
                }
                if (isMatch) {
                    return res.json("Success");
                } else {
                    console.log("Failed");
                    return res.json("Failed");
                }
            });
        } else {
            return res.json("Failed");
        }
    });
});

app.listen(8081, () => {
    console.log("listening");
});
