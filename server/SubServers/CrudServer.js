const express = require("express");
const app = express();
const db = require("./db");

// Common function for create and update operations
async function crudOperation(req, res, operation, crudType) {
  console.log(
    `From CrudServer: updating the database with ${operation} form for ${crudType}`
  );
    try {
        const formData = Object.values(req.body);
        console.log("updating database with form", formData);
        
    const results = await db.executeStoredProcedure(
      `${operation}_${crudType}`,
      formData
    );
    res.json({ message: `Successfully ${operation}d ${crudType}` });
  } catch (error) {
    console.error("Error sending JSON file:", error);
    res.json({ error: error.sqlMessage });
  }
}

app.post("/create/:crudType", async (req, res) => {
  const crudType = req.params.crudType;
  await crudOperation(req, res, "create", crudType);
});

app.post("/update/:crudType", async (req, res) => {
  const crudType = req.params.crudType;
  await crudOperation(req, res, "update", crudType);
});

app.post("/delete/:crudType", async (req, res) => {
  const crudType = req.params.crudType;
  await crudOperation(req, res, "delete", crudType);
});

module.exports = app; // Export the router
