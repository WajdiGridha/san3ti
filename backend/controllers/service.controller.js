const { NOW } = require("sequelize");
const db = require("../models");
const mysql = require("mysql2/promise");
const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "san3ti",
});

exports.getService = async (req, res) => {
  try {
    const [rows] = await connection.query("SELECT * FROM services");
    res.json(rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching services" });
  }
};

exports.getServiceById = async (req, res) => {
  try {
    const [rows] = await connection.query(
      "SELECT * FROM services WHERE id = ?",
      [req.params.id]
    );
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ message: "Service not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching Service" });
  }
};

exports.addService = async (req, res) => {
  try {
    const [result] = await connection.query(
      "INSERT INTO services SET ?",
      req.body
    );
    res.json({ id: result.insertId });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating service" });
  }
};

exports.putService = async (req, res) => {
  try {
    const [result] = await connection.query(
      "UPDATE services SET ? WHERE id = ?",
      [req.body, req.params.id]
    );
    if (result.affectedRows > 0) {
      res.json({ message: "service updated successfully" });
    } else {
      res.status(404).json({ message: "services not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating service" });
  }
};

exports.deleteService = async (req, res) => {
  try {
    const [result] = await connection.query(
      "DELETE FROM services WHERE id = ?",
      [req.params.id]
    );
    if (result.affectedRows > 0) {
      res.json({ message: "service deleted successfully" });
    } else {
      res.status(404).json({ message: "service not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error deleting service" });
  }
};
