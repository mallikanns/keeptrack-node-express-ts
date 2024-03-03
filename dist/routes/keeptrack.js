"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const MockProjects_1 = require("../MockProjects");
exports.router = (0, express_1.Router)();
exports.router.get("/", (req, res) => {
    // req.query._page
    res.send(JSON.stringify(MockProjects_1.MOCK_PROJECTS));
});
exports.router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id))
        return res.status(400).send({ msg: "Bad Request ID" });
    const project = MockProjects_1.MOCK_PROJECTS.find((prj) => prj.id === id);
    if (!project)
        res.sendStatus(404);
    return res.send(project);
});
exports.router.put("/:id", (req, res) => {
    console.log("OK");
    return res.send(req.body);
});
