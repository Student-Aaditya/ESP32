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

    // Turn OFF 
    app.post("/gpio/off", (req, res) => { 
      gpioState = "LOW"; console.log("GPIO -> LOW");
       res.json({ success: true, state: gpioState });
       });

       // Get Status 
app.get("/gpio/status", (req, res) => { 
   res.json({ state: gpioState }); 
});

const PORT = process.env.PORT || 3000;
 app.listen(PORT, () => { 
   console.log(`Server running on port ${PORT}`); 
});