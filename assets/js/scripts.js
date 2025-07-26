function rollDice(noSides) {
  return Math.floor(Math.random() * noSides) + 1;
}

function rollMultipleDice(noDice, noSides, displayElement) {
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
    const pass = Math.floor(Math.random() * 20) + 1;
    if (pass == 20) {
      return "Mountains with Pass";
    }
  }

  if (terrainType == "Hills" || terrainType == "Forest") {
    const multi = Math.floor(Math.random() * 10) + 1;

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

function generateTerrain(terrainType, noDice, noSides, rollDisplayElement, terrainDisplayElement) {
  const rollResultOutput = document.getElementById(rollDisplayElement);
  const terrainOutput = document.getElementById(terrainDisplayElement);
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