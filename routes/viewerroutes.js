//Viewer routes

const viewercontroller = require("../controllers/viewercontroller")

const express = require("express")
const viewerrouter  = express.Router()

viewerrouter.post("/insertviewer",viewercontroller.insertviewer)
viewerrouter.post("/checkviewerlogin",viewercontroller.checkviewerlogin)
viewerrouter.put("/updateviewerprofile",viewercontroller.updateviewerprofile)
viewerrouter.get("/viewerprofile/:email",viewercontroller.viewerprofile)

module.exports = viewerrouter