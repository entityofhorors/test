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
                        changePixel(pixel, "redcake");
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

                if (n.element === "water") {
                    if (Math.random() < 0.1) {
                        changePixel(pixel, "vanadium_oxide_water");
                        deletePixel(c.x, c.y);
                    }
                }
            }
        }

     };
//if (!elements.oxygen.reactions) { elements.oxygen.reactions = {} }
//elements.oxygen.reactions.suflur_gas = { "elem1":null, "elem2": null};
//if (!elements.sodium.reactions) { elements.sodium.reactions = {} }
//elements.sodium.reactions.calcium = {"elem1":null, "elem2": null};
 // ---------------- Coal ----------------
    elements.coal = {
        color: ["#303030", "#212121", "#121212"],
        behavior: behaviors.POWDER,
        category: "powders",
        state: "solid",
        density: 1400,
        burn: 45,
        burnTime: 300,
        tempHigh: 2500,
        stateHigh: "fossil_feul_emissions",
        

     };
 // ---------------- Fossil Feul Emissions ----------------
    elements.fossil_feul_emissions = {
        color: "#262626",
        behavior: behaviors.GAS,
        category: "gases",
        state: "gas",
        density: 1900,
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

                if (n.element === "limestone") {
                    if (Math.random() < 0.1) {
                        changePixel(pixel, "calcium_sulfate");
                        deletePixel(c.x, c.y);
                    }
                }
            }
        }
     };
 // ---------------- Redcake ----------------
    elements.redcake = {
        color: ["#820d0d", "#a60000", "#c40000"],
        behavior: behaviors.POWDER,
        category: "powders",
        state: "solid",
        density: 800,
        tempHigh: 650, 
        stateHigh: "vanadium_pentoxide"
    };
 // ---------------- Vanadium Pentoxide ----------------
    elements.vanadium_pentoxide = {
        color: ["#8a3700", "#ab4502", "#783000",],
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

                if (n.element === "metal_scrap") {
                    if (Math.random() < 0.1) {
                        changePixel(pixel, "vanadium");
                        deletePixel(c.x, c.y);
                    }
                }
            }
        }
     };
 // ---------------- Calcium Sulfate ----------------
    elements.calcium_sulfate = {
        color: ["#c9c9c9", "#e0d7af", "#998e5c",],
        behavior: behaviors.POWDER,
        category: "powders",
        state: "solid",
        density: 3360,
        tempHigh: 1700,
        stateHigh: ["molten_calcium", "carbon_dioxide", "sulfur_dioxide"],

     };
 // ---------------- Sulfur Dioxide ----------------
    elements.sulfur_dioxide = {
        color: "#e8deb0",
        behavior: behaviors.GAS,
        category: "gases",
        state: "gas",
        density: 2,
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

                if (n.element === "vanadium_pentoxide") {
                    if (Math.random() < 0.1) {
                        changePixel(pixel, "sulfur_trioxide");
                        deletePixel(c.x, c.y);
                    }
                }
            }
        }
     };
 // ---------------- Sulfur Trioxide ----------------
    elements.sulfur_trioxide = {
        color: "#e6d68c",
        behavior: behaviors.GAS,
        category: "gases",
        state: "gas",
        density: 2,
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

                if (n.element === "vanadium_oxide_water") {
                    if (Math.random() < 0.1) {
                        changePixel(pixel, "sulfuric_acid");
                        deletePixel(c.x, c.y);
                    }
                }
            }
        }
     };
 // ---------------- Sulphuric Acid ----------------
    elements.sulfuric_acid = {
        color: "#ededed",
        behavior: behaviors.LIQUID,
        category: "liquids",
        state: "liquid",
        density: 1840,
     };
 // ---------------- Vanadium Oxide Water ----------------
    elements.vanadium_oxide_water = {
        color: "#7a7a7a",
        behavior: behaviors.LIQUID,
        category: "liquids",
        state: "liquid",
        density: 2360,

     };
 // ---------------- Radioactive Ore ----------------
    elements.radioactive_ore = {
        color: ["#403933", "#292725", "#858585",],
        behavior: [ 
         "CR:radiation%2|CR:radiation%2|CR:radiation%2",
         "CR:radiation%2|XX|CR:radiation",
         "CR:radiation%2|CR:radiation%2|CR:radiation%2",
    ],
        category: "powders",
        state: "solid",
        density: 3500,
        tempHigh: 1500,
        stateHigh: "molten_radioactive_ore",
                 // tick: function(pixel) {
           // let coords = [
            //    {x: pixel.x+1, y: pixel.y},
            //    {x: pixel.x-1, y: pixel.y},
            //    {x: pixel.x, y: pixel.y+1},
            //    {x: pixel.x, y: pixel.y-1},
           // ];

            //for (let c of coords) {
             //   if (!pixelMap[c.x] || !pixelMap[c.x][c.y]) continue;

              //  let n = pixelMap[c.x][c.y];
              //  if (!n) continue;

              //  if (n.element === "water") {
              //      if (Math.random() < 0.1) {
              //          changePixel(pixel, "vanadium_slurry");
              //          deletePixel(c.x, c.y);
             //       }
           //     }
        //    }
      //  }
     };





