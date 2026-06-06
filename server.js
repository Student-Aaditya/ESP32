const express = require("express");
const app = express();

let gpioState = "LOW";

// Health check
app.get("/", (req, res) => { 
    res.send("ESP32 GPIO Server Running");
 });

 // Turn ON 
 app.post("/gpio/on", (req, res) => { 
    gpioState = "HIGH"; console.log("GPIO -> HIGH");
     res.json({ success: true, state: gpioState }); 
    });