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

const unusualFeatureTerrainRanges = [
  { min: 1, max: 10, text: "Glacier" },
  { min: 11, max: 20, text: "HOTSPRINGS" },
  { min: 21, max: 30, text: "Landlocked sand dunes" },
  { min: 31, max: 40, text: "Mudflats" },
  { min: 41, max: 50, text: "Other - Referee's choice" },
  { min: 51, max: 60, text: "Petrified forest" },
  { min: 61, max: 70, text: "ROCK" },
  { min: 71, max: 80, text: "Salt flats" },
  { min: 81, max: 90, text: "Temperate rain forest" },
  { min: 91, max: 100, text: "VOLCANO" }
];

const hotSpringsDamageRanges = [
  { min: 1, max: 3, text: "1 point of" },
  { min: 4, max: 5, text: "1d4 points of" },
  { min: 6, max: 6, text: "1d6 points of" }
];

function hotSprings(displayElement) {
  const output = document.getElementById(displayElement);
  var text = "Hot springs";
  result = rollDice(6);
  if (result < 5) {
      text += " with strong smell of sulfur"
  }
  result = rollDice(6);
  if (result == 1) {
    text += " and are unbearably hot, inflicting ";
    result = rollDice(6);
    for (const range of hotSpringsDamageRanges) {
      if (result >= range.min && result <= range.max) {
        text += range.text + " damage every round";
        output.value = text;
        return;
      }
    }
  }
  output.value = text;
}

const rocksTypeRanges = [
  { min: 1, max: 35, text: "A number of smaller rocks with avg. diameter of ", diameterNoDice: 1, diameterNoSides: 6, densityNoDice: 3, densityNoSides: 10, densityAreaNoDice: 1, densityAreaNoSides: 20, densityAreaMultiplier: 100 },
  { min: 36, max: 70, text: "A smaller number of larger rocks with avg. diameter of ", diameterNoDice: 3, diameterNoSides: 6, densityNoDice: 1, densityNoSides: 4, densityAreaNoDice: 1, densityAreaNoSides: 20, densityAreaMultiplier: 100 },
  { min: 71, max: 100, text: "OUTCROPPING", diameterNoDice: 0, diameterNoSides: 0, densityNoDice: 0, densityNoSides: 0, densityAreaNoDice: 0, densityAreaNoSides: 0, densityAreaMultiplier: 0 }
]

const rocksOutcroppingSizeRanges = [
  { min: 1, max: 25, text: "(approx. 75 feet to a side).", noDice: 1, noSides: 10, multiplier: 1000, modifier: 0 },
  { min: 26, max: 50, text: "(approx. 230 feet to a side).", noDice: 1, noSides: 10, multiplier: 10000, modifier: 0 },
  { min: 51, max: 70, text: "(approx. 715 feet to a side).", noDice: 1, noSides: 10, multiplier: 100000, modifier: 0 },
  { min: 71, max: 80, text: "(2,400 feet to a side).", noDice: 1, noSides: 10, multiplier: 1000000, modifier: 0 },
  { min: 81, max: 89, text: "subhex", noDice: 0, noSides: 0, multiplier: 1, modifier: 1 },
  { min: 90, max: 94, text: "subhexes", noDice: 1, noSides: 4, multiplier: 1, modifier: 1 },
  { min: 95, max: 97, text: "subhexes", noDice: 3, noSides: 8, multiplier: 1, modifier: 1 },
  { min: 98, max: 99, text: "hex", noDice: 0, noSides: 0, multiplier: 1, modifier: 1 },
  { min: 100, max: 100, text: "hexes", noDice: 1, noSides: 4, multiplier: 1, modifier: 1 }
]

const rocksAresRanges = [
  { min: 1, max: 32, text: "square feet", noDice: 1, noSides: 4, multiplier: 100},
  { min: 33, max: 50, text: "square feet", noDice: 2, noSides: 6, multiplier: 500},
  { min: 51, max: 65, text: "square feet", noDice: 3, noSides: 8, multiplier: 1000},
  { min: 66, max: 80, text: "square feet", noDice: 4, noSides: 10, multiplier: 10000},
  { min: 81, max: 90, text: "subhexes", noDice: 1, noSides: 4, multiplier: 1},
  { min: 91, max: 95, text: "subhexes", noDice: 3, noSides: 6, multiplier: 1},
  { min: 96, max: 99, text: "subhexes", noDice: 4, noSides: 8, multiplier: 1},
  { min: 100, max: 100, text: "hexes", noDice: 1, noSides: 4, multiplier: 1}
]

function rockyTerrain() {
  text = "";
  result = rollDice(100);
  for (const range of rocksTypeRanges) {
    if (result >= range.min && result <= range.max) {
      if (range.text == "OUTCROPPING") {
        text = "An outcropping of rock ";
        result = rollDice(100);
        for (const range of rocksOutcroppingSizeRanges) {
          if (result >= range.min && result <= range.max) {
            if (range.text.includes("hex")) {
              text += "occupying ";
              if (range.noDice > 0) {
                result = (rollMultipleDice(range.noDice, range.noSides)*range.multiplier)+range.modifier;
                text += result + " " + range.text;
              } else {
                result = range.modifier;
                text += result + " " + range.text;
              }
              if (range.text == "hex" || range.noDice > 0) {
                result = rollDice(6);
                if (result < 4) {
                  text += " with a single outcropping in each subhex.";
                } else if (result < 6) {
                  text += " with " + rollDice(4) + " outcroppings in each subhex.";
                } else {
                  text += " and the outcroppings join together to form one massive outcropping that covers the entire area.";
                }
              }
              return text;
            } else {
              result = (rollMultipleDice(range.noDice, range.noSides)*range.multiplier)+range.modifier;
              text += result + " square feet " + range.text;
              return text;
            }
          }
        }
      } else {
        result = rollMultipleDice(range.diameterNoDice, range.diameterNoSides);
        if (result < 2) {
          text += range.text.slice(0, -2) + "smaller than a foot.";
        } else {
          result = result-1;
          text += range.text + result + " feet, with a density of ";
          result = rollMultipleDice(range.densityNoDice, range.densityNoSides);
          text += result + " per ";
          result = rollMultipleDice(range.densityAreaNoDice, range.densityAreaNoSides)*range.densityAreaMultiplier;
          text += result + " square foot.";
        }
        return text;
      }
    }
  }
  return "Unknown";
}

const rocksNaturallyOccurringRanges = [
  { min: 1, max: 60, text: "Naturally occurring, the result of erosion, weathering, etc." },
  { min: 61, max: 95, text: "Naturally occurring, but not usually found in the area (such as the rocks deposited by a glacier)." },
  { min: 96, max: 100, text: "Not naturally occurring. They will be deliberately placed, trolls turned to stone by the sun's rays, petrified tree stumps from an ancient forest, etc." }
]

function rocksNaturallyOccurring() {
  result = rollDice(100);
  for (const range of rocksNaturallyOccurringRanges) {
    if (result >= range.min && result <= range.max) {
      return range.text;
    }
  }
  return "Unknown";
}

const rockWritingRanges = [
  { min: 1, max: 1, text: "meaningless, obscene or pornographic graffiti." },
  { min: 2, max: 2, text: "FORMULA" },
  { min: 3, max: 3, text: "PROPHECY" },
  { min: 4, max: 4, text: "MAP" },
  { min: 5, max: 5, text: "CREVICE" },
  { min: 6, max: 6, text: "HISTORY" },
  { min: 7, max: 7, text: "WARNING" },
  { min: 8, max: 8, text: "MESSAGE" },
  { min: 9, max: 9, text: "LETTERS" },
  { min: 10, max: 10, text: "Referee's choice." }
]

const treasureMapRanges = [
  { min: 1, max: 3, text: "1 magic item.", item1NoDice: 0, item1NoSides: 0, item1Multiplier: 0, item2NoDice: 0, item2NoSides: 6, item2Multiplier: 0},
  { min: 4, max: 5, text: "ITEM1 gems and ITEM2 pieces of jewelry.", item1NoDice: 1, item1NoSides: 6, item1Multiplier: 10, item2NoDice: 2, item2NoSides: 10, item2Multiplier: 1}
]

const monumentMemorializingRanges = [
  {min: 1, max: 25, text: "Built to honor the dead (usually fallen in battle or disaster)." },
  {min: 26, max: 50, text: "Built to honor an event (such as a battle, the signing of a treaty, the birth of a ruler, etc.)." },
  {min: 51, max: 75, text: "Built to honor an individual (such as a ruler, powerful mage, etc.)." },
  {min: 76, max: 85, text: "Built to honor a concept (such as Law or Chaos)." },
  {min: 86, max: 95, text: "Built to honor a religion or deity." },
  {min: 96, max: 100, text: "Built to house an object or person (such as an artifact or relic, or an emperor's burial chambers)." }
]

const magicalAffectRanges = [
  { min: 1, max: 15, text: "Climate" },
  { min: 16, max: 30, text: "Flora and Fauna" },
  { min: 31, max: 55, text: "Other" },
  { min: 56, max: 70, text: "Ley Lines" },
  { min: 71, max: 85, text: "Resonance or Dissonance" },
  { min: 86, max: 100, text: "Space and Time" }
]

function rocksUnusual() {
  result = rollDice(6);
  text = "";
  itemValue = 0;
  if (result < 4) {
    text = "The rocks have been written on with ";
    result = rollDice(10);
    for (const range of rockWritingRanges) {
      if (result >= range.min && result <= range.max) {
        result = rollDice(6);
        console.log(range.text);
        switch (range.text) {
          case "FORMULA":
            text += "the formula to a ";
            if (result < 5) {
              text += "spell";
            } else {
              text += "magical item";
            }
            text += ". It takes " + rollDice(8) + " weeks plus one day per additional stone containing the writing to decipher and understand what is scribed upon it."
            break;
            
          case "PROPHECY":
            if (result < 5) {
              text += "a prophecy, concerning events that are yet to come.";
            } else {
              text += "a prophecy, concerning events that have already passed.";
            }
            result = rollDice(6);
            if (result < 3) {
              text += " The prophecy is wrong."
            }
            break;

          case "MAP":
            if (result < 3) {
              text += "a treasure map leading to ";
              for (const range of treasureMapRanges) {
                if (result >= range.min && result <= range.max) {
                  text += range.text;
                  if (range.item1NoDice != 0) {
                    itemValue = rollMultipleDice(range.item1NoDice, range.item1NoSides)*range.item1Multiplier;
                    text = text.replace("ITEM1", itemValue);
                    if (range.item2NoDice != 0) {
                      itemValue = rollMultipleDice(range.item2NoDice, range.item2NoSides)*range.item2Multiplier;
                      text = text.replace("ITEM2", itemValue);
                    }
                  }
                  break;
                }
              }
            } else if (result < 5) {
              text += "a map of the surrounding area.";
            } else if (result == 5) {
              result = rollDice(6);
              if (result < 3) {
                text += "a map to an undiscovered/unknown area in another plane or dimension.";
              } else if (result == 6) {
                text += "a map of a dungeon.";
              } else {
                text += "a map to an undiscovered/unknown area.";
              }
            }
            break;

          case "CREVICE":
            text += "instructions about a small crevice in the rock: if the adventurers write a question on a slip of paper";
            if (result < 3) {
              text += " written in a specific language";
            } else if (result < 5) {
              text += " written in the asker's blood";
            } else {
              text += " accompanied by a gift";
            }
            text += " then it is slipped it into the crevice, and return the next day, the writing will reform itself as an answer to the question posed (treat as ";
            result = rollDice(6);
            if (result < 4) {
              text += "augury"
            } else if (result < 6) {
              text += "divination";
            } else {
              text += "commune";
            }
            result = 6+rollDice(8);
            text += ", cast by a cleric of level " + result + ")";
            break;

          case "HISTORY":
            text += "a record of a historical event. ";
            result = rollDice(100);
            for (const range of monumentMemorializingRanges) {
              if (result >= range.min && result <= range.max) {
                text += range.text;
                break;
              }
            }
            break;

          case "WARNING":
            text += "a warning about ";
            if (result < 5) {
              text += "current";
            } else {
              text += "past and no longer relevant";
            }
            text += " danger in the area.";
            break;

          case "MESSAGE":
            text += "a personal missive directed towards one of the adventurers";
            if (result < 4) {
              text += " containing accurate information from a dead relative or friend.";
            } else if ( result < 6) {
              text += " containing advice about upcoming events.";
            } else {
              text += " from a friend or relative saying hello.";
            }
            break;

          case "LETTERS":
            text += "a single letter per stone, arranged in a random fashion. The letters, when sorted, spell out ";
            result = rollDice(7);
            if (result < 3) {
              text += "a dirty word.";
            } else if (result < 5) {
              text += "the name of an ancient king or magician.";
            } else if (result == 5) {
              text += "the name of an ally of the party who means to betray them.";
            } else if (result == 6) {
              text += "the true name of a demon or fairy that can be used to bind said creature."
            } else {
              text += "assembly direction. If the stones are arranged according to the directions written upon tem, they create ";
              result = rollDice(6);
              if (result < 3) {
                text += "a sculpture.";
              } else if (result < 5) {
                text += "a crude dwelling.";
              } else {
                if (result == 5) {
                  text += "a portal that functions as a gate to a another world";
                } else {
                  text += "a circle";
                  result = rollDice(20)+10;
                  text += result + " feet in diameter, inside which the adventurers may camp without fear of wandering monsters"
                }
                text += " lasting ";
                result = rollDice(6);
                if (result == 1) {
                  text += rollDice(4) + " uses (camping 8 hours counts as a use).";
                } else if (result == 2) {
                  text += rollDice(4) + " hours.";
                } else if (result == 3) {
                  text += rollMultipleDice(3,4) + " hours.";
                } else if (result == 4) {
                  text += rollDice(4) + " days.";
                } else if (result == 5) {
                  text += rollDice(4) + " weeks.";
                } else if (result == 2) {
                  text += " permanently.";
                }
              }
            }
            break;

          default:
            text += range.text;
        }
        return text;
      }
    }
  } else if (result < 6) {
    text = "The rocks are arranged in a specific pattern.";
    console.log(text);
    result = rollDice(6);
    if (result < 5) {
      text += " The pattern can only be discerned from above.";
    } else {
      text += " The pattern is obvious from ground level.";
      result = rollDice(4);
      if (result == 1){
        text += " The pattern is of a random shape or arrangement, determined by the whim of a mad artist, whimsical deity or capricious spirit.";
      } else if (result == 2) {
        text += " The pattern is mundane in nature, forming a shape or image with little to no significance except to its executor.";
      } else if (result < 5) {
        text += " There is power within the pattern, but it is not clear what it is. It takes " + rollDice(8) + " days of study to determine what the pattern does. The pattern ";
        result = rollDice(6);
        switch(result){
          case 1:
            text += "is a ward against ";
            result = rollDice(6);
            if (result < 3) {
              text += "Elementals.";
            } else if (result < 5) {
              text += "Lycanthropes.";
            } else if (result == 5) {
              text += "Magic.";
            } else {
              text += "Undead.";
            }
            break;

          case 2:
            text += "functions as a gate ";
            result = rollDice(6);
            if (result < 4) {
              text += "to another place in this world.";
            } else if (result < 6) {
              text += "to a place in another world or dimension.";
            } else {
              text += "to another time";
            }
            break;

          case 3:
            text += "functions to alter the surrounding weather ";
            result = rollDice(6);
            if (result < 3) {
              text += "by moderating it.";
            } else if (result < 5) {
              text += "by intensifying it.";
            } else {
              text += "by attracting a certain phenomenon.";
            }
            break;

          case 4:
            text += "acts as a prison, containing a powerful creature or creatures (with a combined HD total of " + rollMultipleDice(10, 10) + ").";
            break;

          case 5:
            text += "acts as a focus for ley line energy";
            result = rollDice(6);
            if (result < 4) {
              text += " and once focused has since shifted position";
            }
            text += ".";
            break;

          default:
            text += "is an artifact designed to cast a permanent spell over a larger area.";
        }
      }
    }
    return text;
  } else {
    text = "The rocks are magical that affect the ";
    console.log(text);
    result = rollDice(100);
    for (const range of magicalAffectRanges) {
      if (result >= range.min && result <= range.max) {
        text += range.text;
        return text + " in the area.";
      }
    }
  }
}

const elevationChangeDegreeRanges = [
  { min: 1, max: 50, text: "Within one degree of surrounding terrain. The basic terrain type remains the same, with a slight change. For instance, farmland, grazing land, grasslands, shrublands and savannas are all flat, relatively treeless terrains that are within one degree of one another. Likewise, a hill could be barren, grassy, or forested and still be within one degree of the basic hill type." },
  { min: 51, max: 85, text: "Within two degrees of surrounding terrain. An area of a grasslands hex could be hilly, or an area of a hilly hex could be mountainous, but a mountain still wouldn't be found in the middle of a flat plain." },
  { min: 86, max: 95, text: "UNUSUAL" },
  { min: 96, max: 99, text: "Out of place - the feature is out of place but still mundane (although it may have been created by magical means!): a mountain in the middle of a prairie, or a land-locked sea in hill country." },
  { min: 96, max: 100, text: "Magical/magically created terrain. This category includes things like fungal forests, fields of flowers that magically put those walking through them to sleep, areas where gravity is increased or decreased, etc. The terrain itself could have a magical effect — for instance, it could be a null-magic zone, where no magic functions — or it could be obviously magically created, such as an entire hex where the ground has been turned into bright green glass. Regardless, the terrain type here is both clearly out of place and clearly artificial/magical in nature." }
];

function elevationChangeDifference(displayElement) {
  const output = document.getElementById(displayElement);
  result = rollDice(6);
  if (result > 5) {
    output.value = "No difference";
    return;
  }
  result = rollDice(100);
  for (const range of elevationChangeDegreeRanges) {
    if (result >= range.min && result <= range.max) {
      if (range.text == "UNUSUAL") {
        result = rollDice(100);
        for (const range of unusualFeatureTerrainRanges) {
          if (result >= range.min && result <= range.max) {
            if (range.text == "HOTSPRINGS") {
              hotSprings(displayElement);
              return;
            } else if (range.text == "ROCK") {
              output.value = "Type of rocky terrain? " + rockyTerrain() + "\nNaturally occurring? " + rocksNaturallyOccurring() + "\nSomething unusual about the rocks? " + rocksUnusual();
              return;
            } else if (range.text == "VOLCANO") {
              result = rollDice(20);
              if (result < 8) {
                result = rollDice(100);
                output.value = "Volcano - not currently active but will erupt in " + result + " months.";
                return;
              } else if (result < 15) {
                result = rollDice(100);
                output.value = "Volcano - not currently active but will erupt in " + result + " years.";
                return;
              } else if (result < 20) {
                output.value = "Volcano - extinct.";
                return;
              } else {
                output.value = "Volcano - currently erupting (treat as hazard).";
                return;
              }
            } else {
              output.value = range.text;
              return;
            }
          }
        }
      } else {
        output.value = range.text;
        return;
      }
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
