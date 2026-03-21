//*****************************
// URANIUM ENRICHMENT MOD BY E303
// *****************************

runAfterLoad(function() {
    
 // ---------------- Vanadium Ore ----------------
    elements.vanadium_ore = {
        color: "#38ce31",
        behavior: behaviors.POWDER,
        category: "powders",
        state: "solid",
        density: 3500,
        tempHigh: 1500,
        stateHigh: "steam",
        };
    });
