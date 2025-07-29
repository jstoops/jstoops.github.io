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
  { min: 1, max: 50, text: "Within one degree of surrounding terrain" },
  { min: 51, max: 85, text: "Within two degrees of surrounding terrain" },
  { min: 86, max: 95, text: "UNUSUAL" },
  { min: 96, max: 100, text: "Magical/magically created terrain" }
];

const unusualFeatureTerrainRanges = [
  { min: 1, max: 10, text: "Glacier" },
  { min: 11, max: 20, text: "HOTSPRINGS" },
  { min: 21, max: 30, text: "Landlocked sand dunes" },
  { min: 31, max: 40, text: "Mudflats" },
  { min: 41, max: 50, text: "Other - Referee's choice" },
  { min: 51, max: 60, text: "Petrified forest" },
  { min: 61, max: 70, text: "ROCK" }
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
    text += "and are unbearably hot, inflicting ";
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
  { min: 71, max: 100, text: "OUTCROPPING", diameterNoDice: 0, diameterNoSides: 0, densityNoDice: 1, densityNoSides: 6, densityAreaNoDice: 1, densityAreaNoSides: 4, densityAreaMultiplier: 0 }
]

const rocksOutcroppingSizeRanges = [
  { min: 1, max: 25, text: "(approx. 75 feet to a side)", noDice: 1, noSides: 10, multiplier: 1000, modifier: 0 },
  { min: 26, max: 50, text: "(approx. 230 feet to a side)", noDice: 1, noSides: 10, multiplier: 10000, modifier: 0 },
  { min: 51, max: 70, text: "(approx. 715 feet to a side)", noDice: 1, noSides: 10, multiplier: 100000, modifier: 0 },
  { min: 71, max: 80, text: "(2,400 feet to a side)", noDice: 1, noSides: 10, multiplier: 1000000, modifier: 0 },
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
        for (const range of rocksTypeRanges) {
          if (result >= range.min && result <= range.max) {
            if (range.text.includes("hex")) {
              text += " occupying ";
              if (range.noDice > 0) {
                result = (rollMultipleDice(range.noDice, range.noSides)*range.multiplier)+range.modifier;
              } else {
                result = range.modifier;
              }
              text += result + " " + range.text;
              return text;
            } else {
              result = (rollMultipleDice(range.noDice, range.noSides)*range.multiplier)+range.modifier;
              text += result + " square feet " + range.text;
              return text;
            }
          }
        }
      } else {
        result = rollMultipleDice(range.noDice, range.noSides)*range.multiplier;
        text += range.text + result + " square feet.";
        return text;
      }
    }
  }
  return "Unknown";
}

const rocksNaturallyOccurringRanges = [
  { min: 1, max: 60, text: "Naturally occurring." },
  { min: 61, max: 95, text: "Naturally occurring, but not usually found in the area." },
  { min: 96, max: 100, text: "Not naturally occurring." }
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
  { min: 1, max: 1, text: "Is meaningless, obscene or pornographic graffiti." },
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
        switch (range.text) {
          case "FORMULA":
            if (result < 5) {
              text = "spell";
            } else {
              text = "magical item";
            }
            return "Contains the formula to a " + text + ". It takes " + rollDice(8) + " weeks plus one day per additional stone containing the writing to decipher and understand what is scribed upon it."
          case "PROPHECY":
            if (result < 5) {
              text = "a prophecy, concerning events that are yet to come.";
            } else {
              text = "a prophecy, concerning events that have already passed.";
            }
            result = rollDice(6);
            if (result < 3) {
              text += " The prophecy is wrong."
            }
            return text;
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
                  return text;
                }
              }
            } else if (result < 5) {
              return text + " a map of the surrounding area.";
            } else if (result == 5) {
              result = rollDice(6);
              if (result < 3) {
                return text + " a map to an undiscovered/unknown area in another plane or dimension.";
              } else if (result == 6) {
                return text + " a map of a dungeon.";
              } else {
                return text + " a map to an undiscovered/unknown area.";
              }
            }

          default:
            return range.text;
        }
      }
    }
  } else if (result < 6) {
    text = "The rocks are arranged in a specific pattern.";
  } else {
    text = "The Rocks are magical.";
  }
}

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
