//*****************************
// URANIUM ENRICHMENT MOD BY K.T
// *****************************

currentColor = "#80ffff";
function deletecoconut() {
    throw "The game crashed, because you deleted the coconut."
}
let rPOWDER = behaviors.POWDER
console.log("Welcome to the console.");
console.log(rPOWDER);

// ---------------- Vanadium Ore ----------------
elements.vanadium_ore = {
    name: "Vandium",
    color: ["#545454", "#3b3b3b", "#8c8c8c"],
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    density: 6.1,
    temp: 20,
    tempHigh: 690,
    stateHigh: "molten_vanadium_ore",
     }
// ---------------- Molten Vanadium Ore ----------------
elements.molten_vanadium_ore = {
    color: ["#770000", "#570000", "#990000"],
    behavior: behaviors.LIQUID,
    category: "states",
    state: "liquid",
    density: 6.1,
    temp: 20,
    tempLow: 690,
    stateLow: "vanadium_ore",
    }

// ---------------- Testium ----------------
elements.test = {
    name: "Testium",
    color: "#ff0000",
    behavior: behaviors.POWDER,
    category: "land",
    state: "solid",
    density: 15,
    temp: 22,
    }
