/*****************************
 URANIUM ENRICHMENT MOD BY K.T
 *****************************/

// ---------------- Vanadium Ore ----------------
elements.vanadium_ore = {,
    color: ["#545454", "#3b3b3b", "#8c8c8c"],
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    meltingPoint: 690,
    meltinto: molten_vanadium_ore,
    density: 6.1

                },
// ---------------- Molten Vanadium Ore ----------------
elements.molten_vanadium_ore = {,
    color: ["#545454", "#3b3b3b", "#8c8c8c"],
    behavior: behaviors.LIQUID,
    category: "states",
    state: "solid",
    tempLow: 690,
    stateLow: vanadium_ore,
    density: 6.1

                },

