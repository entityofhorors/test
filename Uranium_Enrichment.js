//*****************************
// URANIUM ENRICHMENT MOD BY E303
// *****************************

 // ---------------- Vanadium Ore ----------------
    elements.vanadium_ore = {
        color: ["#403933", "#292725", "#858585",],
        behavior: behaviors.POWDER,
        category: "land",
        state: "solid",
        density: 3000,
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
                    if (Math.random()<0.5){changePixel(pixel, "vanadium_slurry")} else {changePixel(pixel, "rock")}
                        deletePixel(c.x, c.y);
                 
                }
            }
         }
     };
 // ---------------- Molten Vanadium Ore ----------------
    elements.molten_vanadium_ore = {
        color: ["#deae00", "#960000", "#d43f00",],
        behavior: behaviors.MOLTEN,
        category: "states",
        state: "liquid",
        density: 3500,
        temp: 1500,
        tempLow: 1500,
        stateLow: "vanadium_ore",
    };
 // ---------------- Vanadium Slurry ----------------
    elements.vanadium_slurry = {
        color: "#7a7a7a",
        behavior: behaviors.LIQUID,
        category: "liquids",
        state: "liquid",
        tempLow: 0,
        stateLow: ["dirty_ice", "vanadium_ore"],
        tempHigh: 150,
        stateHigh: ["carbon_dioxide", "steam", "vanadium_ore"],
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
        behavior: behaviors.MOLTEN,
        category: "states",
        state: "liquid",
        density: 6110,
        temp: 1900,
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
                        changePixel(pixel, "vanadium_catalyst");
                        deletePixel(c.x, c.y);
                    }
                }
            }
        }
     };
 // ---------------- Vanadium Catalyst ----------------
    elements.vanadium_catalyst = {
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
                        changePixel(pixel, "vanadium_catalyst_water");
                        deletePixel(c.x, c.y);
                    }
                }
            }
        }

     };
if (!elements.oxygen.reactions) { elements.oxygen.reactions = {} }
elements.oxygen.reactions.potassium = { "elem1":null, "elem2":"potassium_peroxide"};
if (!elements.mercury.reactions) { elements.mercury.reactions = {} }
elements.mercury.reactions.chlorine = { "elem1":null, "elem2":"mercuric_chloride"};
if (!elements.hydrogen.reactions) { elements.hydrogen.reactions = {} }
elements.hydrogen.reactions.methane = { "elem1":null, "elem2":"hydrogen_chloride_precursor"};

    elements.coal = {
        color: ["#303030", "#212121", "#121212"],
        behavior: behaviors.POWDER,
        category: "land",
        state: "solid",
        density: 1400,
        burn: 45,
        burnTime: 1000,
        burnInto: "fossil_feul_emissions",
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

                if (n.element === "activated_vanadium_pentoxide") {
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

                if (n.element === "vanadium_catalyst_water") {
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
 // ---------------- Vanadium Catalyst Water ----------------
    elements.vanadium_catalyst_water = {
        color: "#ffc800",
        behavior: behaviors.LIQUID,
        category: "liquids",
        state: "liquid",
        density: 2360,
        tempHigh: 100,
        stateHigh: ["steam", "vanadium_catalyst"],
        tempLow: 0,
        stateLow: ["ice", "vanadium_catalyst"]

     };
 // ---------------- Radioactive Ore ----------------
    elements.radioactive_ore = {
        color: ["#263623", "#102912", "#545454",],
        behavior: [ 
         "CR:radiation%.02|CR:radiation%.02|CR:radiation%.02",
         "CR:radiation%.02|XX|CR:radiation%.02",
         "M2|M1|M2",
    ],
        category: "land",
        state: "solid",
        density: 3000,
        tempHigh: 1500,
        stateHigh: "molten_radioactive_ore",
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
                    if (Math.random()<0.5){changePixel(pixel, "radioactive_slurry")} else {changePixel(pixel, "rock")}
                        deletePixel(c.x, c.y);
                    }
               }
           }
 
     };
// ---------------- Molten Radioactive Ore ----------------
    elements.molten_radioactive_ore = {
        color: ["#63370a", "#570600", "#ffd000"],
        behavior: [ 
         "CR:radiation%.02 AND CR:fire%.07|CR:radiation%.02 AND CR:fire%.07|CR:radiation%.02 AND CR:fire%.07",
         "M2 AND CR:radiation%.02|XX|M2 AND CR:radiation%.02",
         "M2 AND CR:radiation%.02|M1|M2 AND CR:radiation%.02",
    ],
        category: "states",
        state: "liquid",
        density: 19050,
        temp: 1500,
        tempLow: 1500,
        stateLow: "radioactive_ore",
     };
 // ---------------- Radioactive Slurry ----------------
    elements.radioactive_slurry = {
        color: ["#456340", "#163819", "#696969",],
        behavior: [ 
         "CR:radiation%.02|CR:radiation%.02|CR:radiation%.02",
         "M2 AND CR:radiation%.02|XX|M2 AND CR:radiation%.02",
         "M2 AND CR:radiation%.02|M1|M2 AND CR:radiation%.02",
    ],
        category: "liquids",
        state: "liquid",
        density: 2800,
        tempLow: 0,
        stateLow: ["irradiated_ice", "radioactive_ore"],
        tempHigh: 150,
        stateHigh: ["rad_steam", "radioactive_ore"],
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

                if (n.element === "sulfuric_acid") {
                    if (Math.random() < 0.1) {
                        changePixel(pixel, "yellowcake");
                        deletePixel(c.x, c.y);
                    }
                }
            }
        }
     };
 // ---------------- Yellowcake ----------------
    elements.yellowcake = {
        color: "#bfb300",
        behavior: [ 
         "CR:radiation%.03 AND CH:water>irradiated_water|CR:radiation%.03 AND CH:water>irradiated_water|CR:radiation%.03 AND CH:water>irradiated_water",
         "CR:radiation%.03 AND CH:water>irradiated_water|XX|CR:radiation%.03 AND CH:water>irradiated_water",
         "M2 AND CH:water>irradiated_water|M1 AND CH:water>irradiated_water|M2 AND CH:water>irradiated_water",
    ],
        category: "powders",
        state: "solid",
        density: 2000,
        tempHigh: 2880,
        stateHigh: "unenriched_uranium"
     };
 // ---------------- Unenriched Uranium ----------------
    elements.unenriched_uranium = {
        color: ["#456340", "#163819", "#325421",],
        behavior: [ 
         "M1 AND CR:radiation%.03 AND CH:water>irradiated_water%1.5|M1 AND CR:radiation%.03 AND CH:water>irradiated_water%1.5|M1 AND CR:radiation%.03 AND CH:water>irradiated_water%1.5",
         "M1 AND CR:radiation%.03 AND CH:water>irradiated_water%1.5|XX|M1 AND CR:radiation%.03 AND CH:water>irradiated_water%1.5",
         "M1 AND CR:radiation%.03 AND CH:water>irradiated_water%1.5|M1 AND CR:radiation%.03 AND CH:water>irradiated_water%1.5|M1 AND CR:radiation%.03 AND CH:water>irradiated_water%1.5",
    ],
        category: "gases",
        state: "gas",
        density: 2500,
        temp: 2000,
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

                if (n.element === "electric") {
                    if (Math.random() < 0.0003) {
                    if (Math.random()<0.5){changePixel(pixel, "molten_uranium")} else {changePixel(pixel, "molten_depleted_uranium")}
                        deletePixel(c.x, c.y);
                        
                    }
                }
                if (n.element === "carbon_dioxide") {
                    if (Math.random()<0.5){changePixel(pixel, "methane")} else {changePixel(pixel, "methane")}
                        deletePixel(c.x, c.y);
                        
                    }
            
            for (let c of coords) {
                if (!pixelMap[c.x] || !pixelMap[c.x][c.y]) continue;

                let n = pixelMap[c.x][c.y];
                if (!n) continue;

                if (n.element === "enrichment_laser") {
                    if (Math.random() < 0.00015) {
                    if (Math.random()<0.5){changePixel(pixel, "molten_uranium")} else {changePixel(pixel, "molten_depleted_uranium")}
                        deletePixel(c.x, c.y);
                        
                      }
                   }
                }
            }
        }
    };
// ---------------- Depleted Uranium ----------------
    elements.depleted_uranium = {
        color: ["#171f14", "#0f120e", "#133009"],
        behavior: behaviors.POWDER,
        category: "powders",
        state: "solid",
        density: 19050,
        tempHigh: 2880,
        stateHigh: "molten_depleted_uranium"
     };
// ---------------- Molten Depleted Uranium ----------------
    elements.molten_depleted_uranium = {
        color: ["#63370a", "#570600", "#ffd000"],
        behavior: behaviors.MOLTEN,
        category: "states",
        state: "liquid",
        density: 19050,
        temp: 2880,
        tempLow: 2880,
        stateLow: "depleted_uranium",
     };
// ---------------- Enrichment Laser ----------------
    elements.enrichment_laser = {
        color: "#ff0000",
        behavior: [ 
         "CR:radiation%.05 AND CH:water>irradiated_water%1.5|CR:radiation%.05 AND CH:water>irradiated_water%1.5|CR:radiation%.05 AND CH:water>irradiated_water%1.5",
         "CR:radiation%.05 AND CH:water>irradiated_water%1.5|DL%3.5|CR:radiation%.05 AND CH:water>irradiated_water%1.5",
         "CR:radiation%.05 AND CH:water>irradiated_water%1.5|M1 AND BO AND CH:water>irradiated_water%1.5|CR:radiation%.05 AND CH:water>irradiated_water%1.5",
    ],
        category: "energy",
        state: "gas",
        density: 19050,
        temp: 4500,
     };
 // ---------------- Potassium Peroxide ----------------
    elements.potassium_peroxide = {
        color: "#ffee00",
        behavior: behaviors.POWDER,
        category: "powders",
        state: "solid",
        density: 2140,
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

                if (n.element === "potassium") {
                  if (pixel.temp >= 55) {
                    if (Math.random() < 0.1) {
                        changePixel(pixel, "potassium_oxide");
                        deletePixel(c.x, c.y);
                    }
                }
            }
        }
    }
    }
      // ---------------- Potassium Oxide ----------------
    elements.potassium_oxide = {
        color: "#bab025",
        behavior: behaviors.POWDER,
        category: "powders",
        state: "solid",
        density: 2320,
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
                        changePixel(pixel, "activated_vanadium_pentoxide");
                        deletePixel(c.x, c.y);
                    }
                }
            }
        }
    };
      // ---------------- Activated Vanadium Pentoxide ----------------
    elements.activated_vanadium_pentoxide = {
        color: ["#8a5c00", "#ab6702", "#784e00",],
        behavior: behaviors.POWDER,
        category: "powders",
        state: "solid",
        density: 1400,
    };
 // ---------------- Bauxite ----------------
    elements.bauxite = {
        color: ["#85290b", "#7a5b51", "#6b1f1f",],
        behavior: behaviors.POWDER,
        category: "land",
        state: "solid",
        density: 1950,
        tempHigh: 1500,
        stateHigh: "molten_bauxite",
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
                    if (Math.random()<0.5){changePixel(pixel, "bauxite_slurry")} else {changePixel(pixel, "rock")}
                        deletePixel(c.x, c.y);
                    }
                }
            }
        
     };
 // ---------------- Bauxite Slurry ----------------
    elements.bauxite_slurry = {
        color: "#8a5636",
        behavior: behaviors.LIQUID,
        category: "liquids",
        state: "liquid",
        tempLow: 0,
        stateLow: ["dirty_ice", "bauxite"],
        tempHigh: 150,
        stateHigh: ["carbon_dioxide", "steam", "vanadium_ore"],
        density: 1450,
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

                if (n.element === "molten_sodium") {
                    if (Math.random() < 0.1) {
                        changePixel(pixel, "gibbsite");
                        deletePixel(c.x, c.y);
                    }
                }
            }
        }
     };
 // ---------------- Molten Bauxite ----------------
    elements.molten_vanadium_ore = {
        color: ["#deae00", "#960000", "#d43f00",],
        behavior: behaviors.MOLTEN,
        category: "states",
        state: "liquid",
        density: 3500,
        temp: 1500,
        tempLow: 1500,
        stateLow: "bauxite",
    };
 // ---------------- Gibbsite ----------------
    elements.gibbsite = {
        color: ["#ab4100", "#6b2901"],
        behavior: behaviors.POWDER,
        category: "powders",
        state: "solid",
        density: 2440,
        tempHigh: 1110,
        stateHigh: ["alumina", "aluminum_oxide"],
    };
 // ---------------- Alumina ----------------
    elements.alumina = {
        color: "#919191",
        behavior: behaviors.LIQUID,
        category: "liquids",
        state: "liquid",
        density: 3750,
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

                if (n.element === "calcium_fluoride") {
                    if (Math.random() < 0.1) {
                        changePixel(pixel, "aluminum");
                        deletePixel(c.x, c.y);
                    }
                }
                if (n.element === "zinc") {
                    if (Math.random() < 0.1) {
                        changePixel(pixel, "zinc_alumina_catalyst");
                        deletePixel(c.x, c.y);
                    }
                }
            }
        }
     };
 // ---------------- Aluminum Oxide ----------------
    elements.aluminum_oxide = {
        color: "#b0b0b0",
        behavior: behaviors.POWDER,
        category: "powders",
        state: "solid",
        density: 3750,
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

                if (n.element === "alcohol") {
                    if (Math.random() < 0.1) {
                        changePixel(pixel, "ethylene");
                        deletePixel(c.x, c.y);
                    }
                }
            }
        }
     };
 // ---------------- Ethylene ----------------
    elements.ethylene = {
        color: "#ababab",
        behavior: behaviors.GAS,
        category: "gases",
        state: "gas",
        density: 568,
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

                if (n.element === "oxygenated_vynal_bimetalic_silver_catalyst") {
                    if (Math.random() < 0.1) {
                        changePixel(pixel, "ethyline_oxide");
                        deletePixel(c.x, c.y);
                    }
                }
            }
        }
     };
 // ---------------- Fluorite ----------------
    elements.fluorite = {
        color: ["#008a0b", "#113314", "#545454",],
        behavior: behaviors.POWDER,
        category: "land",
        state: "solid",
        density: 3100,
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

                if (n.element === "sulfuric_acid") {
                    if (Math.random()<0.5){changePixel(pixel, "hydrogen_fluorite")} else {changePixel(pixel, "hydrofluric_acid")}
                        deletePixel(c.x, c.y);
                    }
                }
            }
        
     };
 // ---------------- Hydroden Flourite ----------------
    elements.hydrogen_fluorite = {
        color: "#919191",
        behavior: behaviors.GAS,
        category: "gases",
        state: "gas",
        density: 967,
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

                if (n.element === "calcium") {
                    if (Math.random() < 0.1) {
                        changePixel(pixel, "calcium_fluoride");
                        deletePixel(c.x, c.y);
                    }
                }
            }
        }
     };
 // ---------------- Hydrofluric Acid ----------------
    elements.hydrofluric_acid = {
        color: "#b3c4af",
        behavior: behaviors.LIQUID,
        category: "liquids",
        state: "liquid",
        density: 1200,
     };
 // ---------------- Calcium Floride ----------------
    elements.calcium_fluoride = {
        color: ["#b5b5b5", "#85715e", "#6b553f",],
        behavior: behaviors.POWDER,
        category: "powders",
        state: "solid",
        density: 3100,
        
     };
 // ---------------- Iradiated Water ----------------
    elements.irradiated_water = {
        color: ["#209e56", "#209e2f", "#0d7a20",],
        behavior: [ 
         "CR:radiation%.02|CR:radiation%.02|CR:radiation%.02",
         "M2 AND CR:radiation%.02|XX|M2 AND CR:radiation%.02",
         "M2 AND CR:radiation%.02|M1|M2 AND CR:radiation%.02",
    ],
        category: "liquids",
        state: "liquid",
        density: 1400,
        tempHigh: 100,
        stateHigh: "rad_steam",
        tempLow: 0,
        stateLow: "irradiated_ice",
     };
 // ---------------- Iradiated Ice ----------------
    elements.irradiated_ice = {
        color: ["#72a387", "#55ab60", "#3f7549",],
        behavior: [ 
         "CR:radiation%.02|CR:radiation%.02|CR:radiation%.02",
         "CR:radiation%.02|XX|CR:radiation%.02",
         "CR:radiation%.02|XX|CR:radiation%.02",
    ],
        category: "solids",
        state: "solid",
        density: 1400,
        temp: 0,
        tempHigh: 0,
        stateHigh: "irradiated_water",
     };
 // ---------------- Silver Powder ----------------
    elements.silver_powder = {
        color: ["#dbdbdb", "#bfbfbf", "#9e9d9d",],
        behavior: behaviors.POWDER,
        category: "powders",
        state: "solid",
        density: 10497,
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

                if (n.element === "gold_coin") {
                    if (Math.random() < 0.1) {
                        changePixel(pixel, "bimetalic_silver_catalyst");
                        deletePixel(c.x, c.y);
                    }
                }
            }
        }
     };
 // ---------------- Bimetalic Silver Catalyst ----------------
    elements.bimetalic_silver_catalyst = {
        color: ["#dbdbdb", "#c7a200", "#9e9d9d","#9e9d9d", "#8c7200"],
        behavior: behaviors.POWDER,
        category: "powders",
        state: "solid",
        density: 15497,

     };
 // ---------------- Hydrogen Chloride ----------------
    elements.hydrogen_chloride = {
        color: "#8b9476",
        behavior: behaviors.GAS,
        category: "gases",
        state: "gas",
        density: 1.6,
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

                if (n.element === "mercuric_chloride") {
                    if (Math.random() < 0.1) {
                        changePixel(pixel, "vinyl_chloride");
                        deletePixel(c.x, c.y);
                    }
                }
            }
        }
     };
 // ---------------- Mercuric Chloride ----------------
    elements.mercuric_chloride = {
        color: "#737867",
        behavior: behaviors.GAS,
        category: "gases",
        state: "gas",
        density: 5540,
     };
 // ---------------- Vinyl Chloride ----------------
    elements.vinyl_chloride = {
        color: "#778556",
        behavior: behaviors.GAS,
        category: "gases",
        state: "gas",
        density: 1.6,
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

                if (n.element === "bimetalic_silver_catalyst") {
                    if (Math.random() < 0.1) {
                        changePixel(pixel, "vinyl_chloride_bimetalic_silver_catalyst");
                        deletePixel(c.x, c.y);
                    }
                }
            }
        }
     };
 // ---------------- Vinyl Chloride Bimetalic Silver Catalyst ----------------
    elements.vinyl_chloride_bimetalic_silver_catalyst = {
        color: ["#dbdbdb", "#c7a200", "#9e9d9d","#9e9d9d", "#8c7200", "#778556"],
        behavior: behaviors.POWDER,
        category: "powders",
        state: "solid",
        density: 10497,
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
                        changePixel(pixel, "oxygenated_vinyl_chloride_bimetalic_silver_catalyst");
                        deletePixel(c.x, c.y);
                    }
                }
            }
        }
     };
 // ---------------- Oxygenated Vinyl Chloride Bimetalic Silver Catalyst ----------------
    elements.oxygenated_vinyl_chloride_bimetalic_silver_catalyst = {
        color: ["#dbdbdb", "#c7a200", "#9e9d9d","#9e9d9d", "#8c7200", "#778556", "#527485"],
        behavior: behaviors.POWDER,
        category: "powders",
        state: "solid",
        density: 10497,
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

                if (n.element === "ethylene") {
                    if (Math.random() < 0.1) {
                        changePixel(pixel, "ethylene_oxide");
                        deletePixel(c.x, c.y);
                    }
                }
            }
        }
     };
 // ---------------- Hydrogen Chloride Precursor ----------------
    elements.hydrogen_chloride_precursor = {
        color: "#527485",
        behavior: behaviors.GAS,
        category: "gases",
        state: "gas",
        density: 1.6,
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

                if (n.element === "chlorine") {
                    if (Math.random() < 0.1) {
                        changePixel(pixel, "hydrogen_chloride");
                        deletePixel(c.x, c.y);
                    }
                }
            }
        }
     };
 // ---------------- Ethtlene Oxide ----------------
    elements.ethylene_oxide = {
        color: ["#c9c9c9", "ababab", "#808080"],
        behavior: behaviors.POWDER,
        category: "powders",
        state: "solid",
        density: 890,
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

                if (n.element === "methlaymine") {
                    if (Math.random() < 0.1) {
                        changePixel(pixel, "methyldiethanolamine");
                        deletePixel(c.x, c.y);
                    }
                }
            }
        }
     };
 // ---------------- Zinc-Alumina Catalyst ----------------
    elements.zinc_alumina_catalyst = {
        color: ["#757575", "#666666", "#595959",],
        behavior: behaviors.POWDER,
        category: "powders",
        state: "solid",
        density: 1450,
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

                if (n.element === "hydrogen") {
                    if (Math.random() < 0.1) {
                        changePixel(pixel, "hydrogen_zinc_alumina_catalyst");
                        deletePixel(c.x, c.y);
                    }
                }
            }
        }
     };
 // ---------------- Hydrogen Zinc-Alumina Catalyst ----------------
    elements.hydrogen_zinc_alumina_catalyst = {
        color: ["#666e73", "#505a5e", "#454d4f", "#414d59"],
        behavior: behaviors.POWDER,
        category: "powders",
        state: "solid",
        density: 1100,
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

                if (n.element === "carbon_dioxide") {
                    if (Math.random() < 0.1) {
                        changePixel(pixel, "methanol");
                        deletePixel(c.x, c.y);
                    }
                }
            }
        }
     };
 // ---------------- Methanol ----------------
    elements.methanol = {
        color: "#b6b8a7",
        behavior: behaviors.LIQUID,
        category: "liquids",
        state: "liquid",
        density: 792,
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

                if (n.element === "ammonia") {
                    if (Math.random() < 0.1) {
                        changePixel(pixel, "methlaymine");
                        deletePixel(c.x, c.y);
                    }
                }
            }
        }
     };
 // ---------------- Methlaymine ----------------
    elements.methlaymine = {
        color: "#9ea187",
        behavior: behaviors.LIQUID,
        category: "liquids",
        state: "liquid",
        density: 703,
        burn: 95,
        burnTime: 100,
        burnInto: ["carbon_dioxide", "steam","nitrogen"],
    };
 // ---------------- Methyldiethanolamine ----------------
    elements.methyldiethanolamine = {
        color: "#c7c7c7",
        behavior: behaviors.LIQUID,
        category: "liquids",
        state: "liquid",
        density: 1038,
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

                if (n.element === "sour_gas") {
                    if (Math.random()<0.33){changePixel(pixel, "hydrogen_sulfide")} else {changePixel(pixel, "sweet_gas")}
                        deletePixel(c.x, c.y);
                    }
                }
            }
     };
 // ---------------- Sour Gas ----------------
    elements.sour_gas = {
        color: "#9db05f",
        behavior: behaviors.GAS,
        category: "gases",
        state: "gas",
        density: .8,
        burn: 95,
        burnTime: 100,
        burnInto: ["carbon_dioxide", "steam"],
    };
 // ---------------- Sweet Gas ----------------
    elements.sweet_gas = {
        color: "#aab588",
        behavior: behaviors.GAS,
        category: "gases",
        state: "gas",
        density: .9,
        burn: 95,
        burnTime: 800,
        burnInto: ["carbon_dioxide", "steam"],
    };
 // ---------------- Hydrogen Sulfide ----------------
    elements.hydrogen_sulfide = {
        color: ["#fbffd9", "#d9deb6", "#c4c789"],
        behavior: behaviors.GAS,
        category: "gases",
        state: "gas",
        density: 1453,
        burn: 95,
        burnTime: 300,
        burnInto: ["sulfur_dioxide", "steam"],
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

                if (n.element === "natrual_gas") {
                    if (Math.random() < 0.1) {
                        changePixel(pixel, "sour_gas");
                        deletePixel(c.x, c.y);
                    }
                }
            }
        }
     };
 // ---------------- Natrual Gas ----------------
    elements.natrual_gas = {
        color: "#d0d9c1",
        behavior: behaviors.GAS,
        category: "gases",
        state: "gas",
        density: .9,
        burn: 95,
        burnTime: 500,
        burnInto: ["carbon_dioxide", "methane"],
    };


elements.silver.breakInto = "silver_powder"

if (!elements.copper.reactions){elements.copper.reactions = {}}
elements.copper.reactions.molten_salt = {charged: true, elem2: ["chlorine", "molten_sodium"]}
 if (!elements.iron.reactions){elements.copper.reactions = {}}
elements.iron.reactions.molten_salt = {charged: true, elem2: ["chlorine", "molten_sodium"]}
if (!elements.gold.reactions){elements.copper.reactions = {}}
elements.gold.reactions.molten_salt = {charged: true, elem2: ["chlorine", "molten_sodium"]}
 if (!elements.silver.reactions){elements.copper.reactions = {}}
elements.silver.reactions.molten_salt = {charged: true, elem2: ["chlorine", "molten_sodium"]}
