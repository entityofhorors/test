//*****************************
// URANIUM ENRICHMENT MOD BY E303
// *****************************

 // ---------------- Vanadium Ore ----------------
    elements.vanadium_ore = {
        color: ["#403933", "#292725", "#858585",],
        behavior: behaviors.POWDER,
        category: "powders",
        state: "solid",
        density: 3500,
        tempHigh: 1500,
        stateHigh: "molten_vanadium_ore",
                  tick: function(pixel) {
            let coords = [
                {x: pixel.x+1, y: pixel.y},
                {x: pixel.x-1, y: pixel.y},
                {x: pixel.x, y: pixel.y+1},
                {x: pixel.x, y: pixel.y-1},
            ];

            for (let c of coords) {
                if (!pixelMap[c.x] || !pixelMap[c.x][c.y]) continue;

                let n = pixelMap[c.x][c.y];
                if (!n) continue;

                if (n.element === "water") {
                    if (Math.random() < 0.1) {
                        changePixel(pixel, "vanadium_slurry");
                        deletePixel(c.x, c.y);
                    }
                }
            }
        }
     };
 // ---------------- Molten Vanadium Ore ----------------
    elements.molten_vanadium_ore = {
        color: ["#deae00", "#960000", "#d43f00",],
        behavior: behaviors.LIQUID,
        category: "states",
        state: "liquid",
        density: 3500,
        tempLow: 1500,
        stateLow: "vanadium_ore",
    };
 // ---------------- Vanadium Slurry ----------------
    elements.vanadium_slurry = {
        color: "#7a7a7a",
        behavior: behaviors.LIQUID,
        category: "liquids",
        state: "liquid",
        density: 2500,
                  tick: function(pixel) {
            let coords = [
                {x: pixel.x+1, y: pixel.y},
                {x: pixel.x-1, y: pixel.y},
                {x: pixel.x, y: pixel.y+1},
                {x: pixel.x, y: pixel.y-1},
            ];

            for (let c of coords) {
                if (!pixelMap[c.x] || !pixelMap[c.x][c.y]) continue;

                let n = pixelMap[c.x][c.y];
                if (!n) continue;

                if (n.element === "sodium") {
                    if (Math.random() < 0.1) {
                        changePixel(pixel, "sodium_vanadate");
                        deletePixel(c.x, c.y);
                    }
                }
            }
        }
     };
 // ---------------- Sodium Vanadate ----------------
    elements.sodium_vanadate = {
        color: "#ff8000",
        behavior: behaviors.POWDER,
        category: "powders",
        state: "solid",
        density: 1500,
                  tick: function(pixel) {
            let coords = [
                {x: pixel.x+1, y: pixel.y},
                {x: pixel.x-1, y: pixel.y},
                {x: pixel.x, y: pixel.y+1},
                {x: pixel.x, y: pixel.y-1},
            ];

            for (let c of coords) {
                if (!pixelMap[c.x] || !pixelMap[c.x][c.y]) continue;

                let n = pixelMap[c.x][c.y];
                if (!n) continue;

                if (n.element === "water") {
                    if (Math.random() < 0.1) {
                        changePixel(pixel, "vanadium");
                        deletePixel(c.x, c.y);
                    }
                }
            }
        }
     };
 // ---------------- Vanadium ----------------
    elements.vanadium = {
        color: "#a6a6a6",
        behavior: behaviors.SOLID,
        category: "solids",
        state: "solid",
        density: 6110,
        tempHigh: 1900,
        stateHigh: "molten_vanadium",
     };
 // ---------------- Molten Vanadium ----------------
    elements.molten_vanadium = {
        color: ["#ff8000", "#ff4d00", "#ff1e00"],
        behavior: behaviors.LIQUID,
        category: "states",
        state: "liquid",
        density: 6110,
        tempLow: 1900,
        stateLow: "vanadium",
                  tick: function(pixel) {
            let coords = [
                {x: pixel.x+1, y: pixel.y},
                {x: pixel.x-1, y: pixel.y},
                {x: pixel.x, y: pixel.y+1},
                {x: pixel.x, y: pixel.y-1},
            ];

            for (let c of coords) {
                if (!pixelMap[c.x] || !pixelMap[c.x][c.y]) continue;

                let n = pixelMap[c.x][c.y];
                if (!n) continue;

                if (n.element === "oxygen") {
                    if (Math.random() < 0.1) {
                        changePixel(pixel, "vanadium_oxide");
                        deletePixel(c.x, c.y);
                    }
                }
            }
        }
     };
 // ---------------- Vanadium Oxide ----------------
    elements.vanadium_oxide = {
        color: "#ffc800",
        behavior: behaviors.POWDER,
        category: "powders",
        state: "solid",
        density: 3360,
                  tick: function(pixel) {
            let coords = [
                {x: pixel.x+1, y: pixel.y},
                {x: pixel.x-1, y: pixel.y},
                {x: pixel.x, y: pixel.y+1},
                {x: pixel.x, y: pixel.y-1},
            ];

            for (let c of coords) {
                if (!pixelMap[c.x] || !pixelMap[c.x][c.y]) continue;

                let n = pixelMap[c.x][c.y];
                if (!n) continue;

                if (n.element === "vanadium_oxide") {
                    if (Math.random() < 0.1) {
                        changePixel(pixel, "vanadium_oxide");
                        deletePixel(c.x, c.y);
                    }
                }
            }
        }
     };
 // ---------------- Sulfur Trioxide Reaction ----------------
    elements.oxygen.reactions.sulfur_gas = {
        "sulfur_gas" {
        elem1: null, 
        elem2: "sulfur_trioxide", 
          
         }
    };
 // ---------------- Sulfur Trioxide ----------------
    elements.sulfur_trioxide = {
        color: "##fff2c2",
        behavior: behaviors.GAS,
        category: "gases",
        state: "gas",
        density: 1920,

     };
