const express = require("express");
const path = require("path");
const { add, subtract, multiply, divide } = require("./calculator");

const app = express();
const PORT = 3000;

// Middleware pour valider les nombres
function validateNumbers(req, res, next) {
    const { a, b } = req.params;
    
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "ce n'est pas un nombre" });
    }

    req.a = Number(a);
    req.b = Number(b);
    next();
}
app.use(express.static(path.join(__dirname, 'public')));

// route HTML 
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// routes operation
app.get("/add/:a/:b", validateNumbers, (req, res) => {
    res.json({ result: add(req.a, req.b) });
});

app.get("/subtract/:a/:b", validateNumbers, (req, res) => {
    res.json({ result: subtract(req.a, req.b) });
});

app.get("/multiply/:a/:b", validateNumbers, (req, res) => {
    res.json({ result: multiply(req.a, req.b) });
});

app.get("/divide/:a/:b", validateNumbers, (req, res) => {
    if (req.b === 0) {
        return res.status(400).json({ error: "division par 0 pas valide." });
    }
    res.json({ result: divide(req.a, req.b) });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
