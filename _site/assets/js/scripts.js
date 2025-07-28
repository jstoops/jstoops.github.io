function rollDice(noSides) {
  return Math.floor(Math.random() * noSides) + 1;
}

function rollMultipleDice(noDice, noSides) {
  result = 0;
  for (i=0; i < noDice; i++) {
    result += rollDice(noSides);
  }
  return result;
}

function displayMultipleDiceRolls(noDice, noSides, displayElement) {
  result = "";
  for (i=0; i < noDice; i++) {
    result = result + rollDice(noSides) + ",";
  }
  const resultOutput = document.getElementById(displayElement);
  resultOutput.value = result.slice(0, -1);
}

const plainsRanges = [
  { min: 1, max: 11, text: "Plains" },
  { min: 12, max: 12, text: "Scrub" },
  { min: 13, max: 13, text: "Forest" },
  { min: 14, max: 14, text: "Rough" },
  { min: 15, max: 15, text: "Desert" },
  { min: 16, max: 16, text: "Hills" },
  { min: 17, max: 17, text: "Mountains" },
  { min: 18, max: 18, text: "Marsh" },
  { min: 19, max: 19, text: "Pond" },
  { min: 20, max: 20, text: "Depression" }
];

const scrubRanges = [
  { min: 1, max: 3, text: "Plains" },
  { min: 4, max: 11, text: "Scrub" },
  { min: 12, max: 13, text: "Forest" },
  { min: 14, max: 14, text: "Rough" },
  { min: 15, max: 15, text: "Desert" },
  { min: 16, max: 16, text: "Hills" },
  { min: 17, max: 17, text: "Mountains" },
  { min: 18, max: 18, text: "Marsh" },
  { min: 19, max: 19, text: "Pond" },
  { min: 20, max: 20, text: "Depression" }
];

const forestRanges = [
  { min: 1, max: 1, text: "Plains" },
  { min: 2, max: 4, text: "Scrub" },
  { min: 5, max: 14, text: "Forest" },
  { min: 15, max: 15, text: "Rough" },
  { min: 16, max: 16, text: "Hills" },
  { min: 17, max: 17, text: "Mountains" },
  { min: 18, max: 18, text: "Marsh" },
  { min: 19, max: 19, text: "Pond" },
  { min: 20, max: 20, text: "Depression" }
];

const roughRanges = [
  { min: 1, max: 2, text: "Plains" },
  { min: 3, max: 4, text: "Scrub" },
  { min: 5, max: 5, text: "Forest" },
  { min: 6, max: 8, text: "Rough" },
  { min: 9, max: 10, text: "Desert" },
  { min: 11, max: 15, text: "Hills" },
  { min: 16, max: 17, text: "Mountains" },
  { min: 18, max: 18, text: "Marsh" },
  { min: 19, max: 19, text: "Pond" },
  { min: 20, max: 20, text: "Depression" }
];

const desertRanges = [
  { min: 1, max: 3, text: "Plains" },
  { min: 4, max: 5, text: "Scrub" },
  { min: 6, max: 8, text: "Rough" },
  { min: 9, max: 14, text: "Desert" },
  { min: 15, max: 15, text: "Hills" },
  { min: 16, max: 17, text: "Mountains" },
  { min: 18, max: 18, text: "Marsh" },
  { min: 19, max: 19, text: "Pond" },
  { min: 20, max: 20, text: "Depression" }
];

const hillsRanges = [
  { min: 1, max: 1, text: "Plains" },
  { min: 2, max: 3, text: "Scrub" },
  { min: 4, max: 5, text: "Forest" },
  { min: 6, max: 7, text: "Rough" },
  { min: 8, max: 8, text: "Desert" },
  { min: 9, max: 14, text: "Hills" },
  { min: 15, max: 16, text: "Mountains" },
  { min: 17, max: 17, text: "Marsh" },
  { min: 18, max: 19, text: "Pond" },
  { min: 20, max: 20, text: "Depression" }
];

const mountainsRanges = [
  { min: 1, max: 1, text: "Plains" },
  { min: 2, max: 2, text: "Scrub" },
  { min: 3, max: 3, text: "Forest" },
  { min: 4, max: 5, text: "Rough" },
  { min: 6, max: 6, text: "Desert" },
  { min: 7, max: 10, text: "Hills" },
  { min: 11, max: 18, text: "Mountains" },
  { min: 19, max: 19, text: "Pond" },
  { min: 20, max: 20, text: "Depression" }
];

const marshRanges = [
  { min: 1, max: 2, text: "Plains" },
  { min: 3, max: 4, text: "Scrub" },
  { min: 5, max: 6, text: "Forest" },
  { min: 7, max: 7, text: "Rough" },
  { min: 8, max: 8, text: "Hills" },
  { min: 9, max: 15, text: "Marsh" },
  { min: 16, max: 19, text: "Pond" },
  { min: 20, max: 20, text: "Depression" }
];

function multiTerrain(terrainType) {
  
  if (terrainType == "Mountains") {
    const pass = rollDice(20);
    if (pass == 20) {
      return "Mountains with Pass";
    }
  }

  if (terrainType == "Hills" || terrainType == "Forest") {
    const multi = rollDice(10);

    if (multi == 10) {
      return "Hill Forest";
    }
  }

  return terrainType;
}

function terrainLookup(terrainRoll, terrainType) {
  switch (terrainType) {
    case "Plains":
      for (const range of plainsRanges) {
        if (terrainRoll >= range.min && terrainRoll <= range.max) {
          return multiTerrain(range.text);
        }
      }
      return "Unknown";
    case "Scrub":
      for (const range of scrubRanges) {
        if (terrainRoll >= range.min && terrainRoll <= range.max) {
          return multiTerrain(range.text);
        }
      }
      return "Unknown";
    case "Forest":
      for (const range of forestRanges) {
        if (terrainRoll >= range.min && terrainRoll <= range.max) {
          return multiTerrain(range.text);
        }
      }
      return "Unknown";
    case "Rough":
      for (const range of roughRanges) {
        if (terrainRoll >= range.min && terrainRoll <= range.max) {
          return multiTerrain(range.text);
        }
      }
      return "Unknown";
    case "Desert":
      for (const range of desertRanges) {
        if (terrainRoll >= range.min && terrainRoll <= range.max) {
          return multiTerrain(range.text);
        }
      }
      return "Unknown";
    case "Hills":
      for (const range of hillsRanges) {
        if (terrainRoll >= range.min && terrainRoll <= range.max) {
          return multiTerrain(range.text);
        }
      }
      return "Unknown";
    case "Mountains":
      for (const range of mountainsRanges) {
        if (terrainRoll >= range.min && terrainRoll <= range.max) {
          return multiTerrain(range.text);
        }
      }
      return "Unknown";
    case "Marsh":
      for (const range of marshRanges) {
        if (terrainRoll >= range.min && terrainRoll <= range.max) {
          return multiTerrain(range.text);
        }
      }
      return "Unknown";
    default:
      return "Unknown";
  }
}

function generateTerrain(terrainType, noDice, rollDisplayElement, terrainDisplayElement) {
  const rollResultOutput = document.getElementById(rollDisplayElement);
  const terrainOutput = document.getElementById(terrainDisplayElement);
  const noSides = 20;
  rollResults = "";
  terrain = "";
  for (i=0; i < noDice; i++) {
    result = rollDice(noSides);
    rollResults = rollResults + result + ",";
    terrain = terrain + result + " - " + terrainLookup(result, terrainType) + "\n";
  }
  rollResultOutput.value = terrainType + ": " + rollResults.slice(0, -1);
  terrainOutput.value = terrain.slice(0, -1);
}

const featureRanges = [
  { min: 1, max: 4, text: "Geologic" },
  { min: 5, max: 8, text: "Structure" },
  { min: 9, max: 12, text: "Resource" },
  { min: 13, max: 13, text: "Hazard" },
  { min: 14, max: 14, text: "Sign" },
  { min: 15, max: 15, text: "Dungeon" },
  { min: 16, max: 17, text: "Terrain" },
  { min: 18, max: 18, text: "Settlement" },
  { min: 19, max: 19, text: "Water" },
  { min: 20, max: 20, text: "Magic" }
];

function generateFeatures(noFeatures, rollDisplayElement, featureDisplayElement) {
  const rollResultOutput = document.getElementById(rollDisplayElement);
  const featureOutput = document.getElementById(featureDisplayElement);
  const noSides = 20;
  const noHexes = 100;
  rollResults = "";
  features = "";
  for (i=0; i < noFeatures; i++) {
    result = rollDice(noSides);
    rollResults = rollResults + result + ",";
    hexTile = rollDice(noHexes);
    for (const range of featureRanges) {
      if (result >= range.min && result <= range.max) {
        features = features + "Hex: " + hexTile + ". Roll: " + result + " - " + range.text + "\n";
      }
    }
  }
  rollResultOutput.value = rollResults.slice(0, -1);
  featureOutput.value = features.slice(0, -1);
}

function generateLairs(noLairs, displayElement) {
  const output = document.getElementById(displayElement);
  const noHexes = 100;
  lairs = "";
  for (i=0; i < noLairs; i++) {
    hexTile = rollDice(noHexes);
    lairs = lairs + "Hex: " + hexTile + "\n";
  }
  output.value = lairs.slice(0, -1);
}

const elevationChangeReasonRanges = [
  { min: 1, max: 75, text: "The change is natural, the result of time and the elements." },
  { min: 75, max: 90, text: "The change is natural but out of place or the result of natural violence; a rock formation that does not belong in the area, a gorge formed not by the slow erosion from a river but an active fault line, etc. It could also be a crater left by, say, a meteor." },
  { min: 91, max: 96, text: "The change is unnatural but clearly the work of years of physical labor." },
  { min: 97, max: 99, text: "The change is unnatural and clearly the work of magic." },
  { min: 100, max: 100, text: "Referee's choice" }
];

function elevationChangeReason(displayElement) {
  const output = document.getElementById(displayElement);
  const noSides = 100;
  result = rollDice(noSides);
  for (const range of elevationChangeReasonRanges) {
    if (result >= range.min && result <= range.max) {
      output.value = range.text;
      return;
    }
  }
  output.value = "Unknown";
}

function elevationChangeHigherLower(displayElement) {
  const output = document.getElementById(displayElement);
  const noSides = 6;
  result = rollDice(noSides);
  if (result < 4) {
    output.value = "Higher than the surrounding land";
  }
  else {
    output.value = "Lower than the surrounding land";
  }
}

const elevationChangeAmountRanges = [
  { min: 1, max: 60, text: "The land is YARDS lower or higher than the surrounding area.", noDice: 5, noSides: 20, multipliedBy: 1 },
  { min: 61, max: 75, text: "The land is YARDS lower or higher than the surrounding area", noDice: 1, noSides: 6, multipliedBy: 100 },
  { min: 76, max: 100, text: "The land is YARDS lower or higher than the surrounding area.", noDice: 1, noSides: 20, multipliedBy: 100 }
];

function elevationChangeAmount(displayElement) {
  const output = document.getElementById(displayElement);
  const noSides = 100;
  result = rollDice(noSides);
  for (const range of elevationChangeAmountRanges) {
    if (result >= range.min && result <= range.max) {
      output.value = range.text.replace("YARDS", rollMultipleDice(range.noDice, noSides)*range.multipliedBy + " yards");
      return;
    }
  }
  output.value = "Unknown";
}

const elevationChangeAreaRanges = [
  { min: 1, max: 35, text: "A single subhex", noDice: 1, noSides: 1, modifier: 0 },
  { min: 36, max: 70, text: "AREA subhexes", noDice: 1, noSides: 4, modifier: 1 },
  { min: 71, max: 85, text: "AREA subhexes", noDice: 3, noSides: 4, modifier: 0 },
  { min: 86, max: 98, text: "AREA subhexes", noDice: 4, noSides: 8, modifier: 0 },
  { min: 99, max: 100, text: "AREA total hexes", noDice: 1, noSides: 4, modifier: 1 }
];

function elevationChangeArea(displayElement) {
  const output = document.getElementById(displayElement);
  const noSides = 100;
  result = rollDice(noSides);
  for (const range of elevationChangeAreaRanges) {
    if (result >= range.min && result <= range.max) {
      output.value = range.text.replace("AREA", rollMultipleDice(range.noDice, noSides)+range.modifier);
      return;
    }
  }
  output.value = "Unknown";
}

const elevationChangeDegreeRanges = [
  { min: 1, max: 4, text: "Within one degree of surrounding terrain" },
  { min: 5, max: 6, text: "Within two degrees of surrounding terrain" }
];

function elevationChangeDifference(displayElement) {
  const output = document.getElementById(displayElement);
  const noSides = 6;
  result = rollDice(noSides);
  if (result > 5) {
    output.value = "No difference";
    return;
  }
  result = rollDice(noSides);
  for (const range of elevationChangeDegreeRanges) {
    if (result >= range.min && result <= range.max) {
      output.value = range.text;
      return;
    }
  }
  output.value = "Unknown";
}

const resourceExceptionalValueRanges = [
  { min: 1, max: 3, text: "25% more that base value" },
  { min: 4, max: 5, text: "50% more that base value" },
  { min: 6, max: 7, text: "75% more that base value" },
  { min: 8, max: 8, text: "100% more that base value" }
];

function resourceExceptionalValue(displayElement) {
  const output = document.getElementById(displayElement);
  const noSides = 6;
  result = rollDice(noSides);
  if (result < 6) {
    output.value = "No, not exceptional";
    return;
  }
  result = rollDice(8);
  for (const range of resourceExceptionalValueRanges) {
    if (result >= range.min && result <= range.max) {
      output.value = range.text;
      return;
    }
  }
  output.value = "Unknown";
}