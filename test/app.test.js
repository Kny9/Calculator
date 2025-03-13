const request = require("supertest");
const express = require("express");
const { add, subtract, multiply, divide } = require("../calculator");
const app = require("../app");

app.get("/add/:a/:b", (req, res) => {
    try {
        const result = add(Number(req.params.a), Number(req.params.b));
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get("/subtract/:a/:b", (req, res) => {
    try {
        const result = subtract(Number(req.params.a), Number(req.params.b));
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get("/multiply/:a/:b", (req, res) => {
    try {
        const result = multiply(Number(req.params.a), Number(req.params.b));
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get("/divide/:a/:b", (req, res) => {
    try {
        const result = divide(Number(req.params.a), Number(req.params.b));
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

describe("Calculator API", () => {
    test("GET /add/5/3 return 8", async () => {
        const response = await request(app).get("/add/5/3");
        expect(response.status).toBe(200);
        expect(response.body.result).toBe(8);
    });

    test("GET /subtract/10/4 return 6", async () => {
        const response = await request(app).get("/subtract/10/4");
        expect(response.status).toBe(200);
        expect(response.body.result).toBe(6);
    });

    test("GET /multiply/6/2 return 12", async () => {
        const response = await request(app).get("/multiply/6/2");
        expect(response.status).toBe(200);
        expect(response.body.result).toBe(12);
    });

    test("GET /divide/10/2 return 5", async () => {
        const response = await request(app).get("/divide/10/2");
        expect(response.status).toBe(200);
        expect(response.body.result).toBe(5);
    });

    test("GET /divide/10/0 return an error", async () => {
        const response = await request(app).get("/divide/10/0");
        expect(response.status).toBe(400);
        expect(response.body.error).toBe("division par 0 pas valide.");
    });

    test("GET /add/a/b return an error", async () => {
        const response = await request(app).get("/add/a/b");
        expect(response.status).toBe(400);
        expect(response.body.error).toBe("ce n'est pas un nombre");
    });
});
