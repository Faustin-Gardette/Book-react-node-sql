import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "book",
});

app.get("/", (req, res) => {
  res.json("C'est le back ");
});

app.get("/books", (req, res) => {
  const sql = "SELECT * FROM books";

  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const sql =
    "INSERT INTO books (`title`, `descr`, `price`, `cover`) VALUES (?)";

  const values = [
    req.body.title,
    req.body.descr,
    req.body.price,
    req.body.cover,
  ];

  db.query(sql, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("livre créé");
  });
});

app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const sql = "DELETE FROM books WHERE id = ?";

  db.query(sql, [bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Livre supprimé");
  });
});

app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const sql =
    "UPDATE books SET `title` = ?, `descr` = ?, `price` = ?, `cover` = ? WHERE id = ?";

  const values = [
    req.body.title,
    req.body.descr,
    req.body.price,
    req.body.cover,
  ];

  db.query(sql, [...values, bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Livre modifié");
  });
});

app.listen(8800, () => {
  console.log("back co");
});
