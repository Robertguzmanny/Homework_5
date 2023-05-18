const express = require("express");

const app = express();

// const path = require("path");

const cors = require("cors");

const pool = require("./db");

// host react app as static files
app.use(cors());
app.use(express.json());

// Routes
app.get("/");

app.post("/links", async (req, res) => {
  try {
    const info = req.body;
    const newLink = await pool.query(
      "INSERT INTO links (link_name, hyperlink) VALUES ($1, $2) RETURNING *",
      [info.link_name, info.hyperlink]
    );

    res.status(200).json(newLink.rows);
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/links", async (req, res) => {
  try {
    const allLiknks = await pool.query("SELECT * FROM links");
    res.json(allLiknks.rows);
  } catch (error) {
    console.error(error.message);
  }
});
app.get("/links/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const Link = await pool.query(
      "SELECT link_name, hyperlink  FROM links WHERE link_id = $1",
      [id]
    );
    res.json(Link.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});
app.put("/links/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const description = req.body;
    const updateLink = await pool.query(
      "UPDATE links SET link_name = $1, hyperlink = $2 WHERE link_id = $3",
      [description.link_name, description.hyperlink, id]
    );
    res.json("Link is Updated!!");
  } catch (error) {
    console.error(error.message);
  }
});

app.delete("/links/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const removeLink = await pool.query(
      "DELETE FROM links WHERE link_id = $1",
      [id]
    );
    res.json("Link was deleted!!");
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(5001, () => {
  console.log("Server has started on port 5001");
});
