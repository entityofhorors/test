/*****************************
 URANIUM ENRICHMENT MOD BY K.T
 *****************************/

// ---------------- Vanadium Ore ----------------
elements.vanadium_ore = {
    name: "Vandium",
    color: ["#545454", "#3b3b3b", "#8c8c8c"],
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    temp: 20,
    tempHigh: 690,
    stateHigh: "molten_vanadium_ore",
    density: 6.1
     }
};
// ---------------- Molten Vanadium Ore ----------------
elements.molten_vanadium_ore = {
    color: ["#770000", "#570000", "#990000"],
    behavior: behaviors.LIQUID,
    category: "states",
    state: "solid",
    tempLow: 690,
    stateLow: "vanadium_ore",
    density: 6.1
    }
};
