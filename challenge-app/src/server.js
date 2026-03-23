const express = require("express");
const os = require("os");

const app = express();
const PORT = 3000;

app.use(express.json());

const recipes = [
  {
    id: 1,
    name: "Tabbouleh",
    mainIngredient: "Parsley",
    description: "A fresh salad with parsley, tomatoes, bulgur, lemon, and olive oil."
  },
  {
    id: 2,
    name: "Fattoush",
    mainIngredient: "Vegetables",
    description: "A mixed vegetable salad with toasted pita bread."
  },
  {
    id: 3,
    name: "Kibbeh",
    mainIngredient: "Bulgur and meat",
    description: "A traditional Lebanese dish made with bulgur, minced meat, and spices."
  },
  {
    id: 4,
    name: "Warak Enab",
    mainIngredient: "Grape leaves",
    description: "Stuffed grape leaves with rice, herbs, and lemon."
  },
  {
    id: 5,
    name: "Mujadara",
    mainIngredient: "Lentils",
    description: "A dish made with lentils, rice, and caramelized onions."
  }
];

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    app: "Lebanese Recipes API",
    hostname: os.hostname()
  });
});

app.get("/api/recipes", (req, res) => {
  res.json(recipes);
});

app.get("/api/featured", (req, res) => {
  res.json(recipes[0]);
});

app.get("/api/info", (req, res) => {
  res.json({
    app: "Lebanese Recipes API",
    version: "v2",
    hostname: os.hostname(),
    totalRecipes: recipes.length
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Lebanese Recipes API running on port ${PORT}`);
});