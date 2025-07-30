---
author: clanredhead
title: Hex Gen - Features and Lairs
---

After generating the hexes for the <a href="2025-07-26-osr-hex-gen-surrounding-area.html">surrounding area</a> you need to determine features, locations & lairs.

Use Table 1.1 – Feature Types on page 7 and Figure One - Placing Lairs Features on page 5 of [Filling in the Blanks](https://www.drivethrurpg.com/en/product/325708/filling-in-the-blanks) to add additional, interesting features to the core hex. 1d6 features and 1d6 lairs in each 6-mile hex seems too dense, therefore, instead of every 6-mile hex up it a level so do every 30-mile hex has 6 features and 5 lairs, i.e. the entire large hex at the Sub-level. Feel free to adjust these numbers or roll to randomize the number per 30-mile hex.

Here's the steps to generate feature and lairs:

1. <a onClick="generateFeatures(6,'feature-rolls', 'feature-results'); document.getElementById('no-features').value=6;">Roll a d20 and a d100 six times</a> for the features and their location
2. Using the figure for hex numbers 1-31 find the hex for each Location & add an icon with text representing the feature
3. <a onClick="generateLairs(5, 'lair-results'); document.getElementById('no-lairs').value=5;">Roll a d100 5 times</a> for the lairs
4. Using the figure for hex numbers 1-31 find the hex for each Location & add an icon a lair

<div class="roll-results rpgui-container framed-golden-2" style="float:left; width: 45%; padding-right: 10px; position:relative; height:auto; display:inline-block">
   <h2>Features</h2>
   <label>Number of Features:</label> <input id="no-features" value="6" />
   <label>Rolls:</label> <input id="feature-rolls" />
   <label>Features:</label> <textarea id="feature-results" rows="6"></textarea>
   <button onClick="generateFeatures(document.getElementById('no-features').value, 'feature-rolls', 'feature-results')" class="rpgui-button" type="button"><p>Re-roll</p></button>
</div>

<div class="roll-results rpgui-container framed-golden-2" style="float:right; width: 45%; position:relative; height:auto; display:inline-block">
   <h2>Lairs</h2>
   <label>Number of Lairs:</label> <input id="no-lairs" value="5" />
   <label>Lairs:</label> <textarea id="lair-results" rows="5"></textarea>
   <button onClick="generateLairs(document.getElementById('no-lairs').value, 'lair-results')" class="rpgui-button" type="button"><p>Re-roll</p></button>
</div>

<div style="clear: both;"></div>

<br/>
_Table 1.1 – Feature Types_

|  d20  | Result     |
| :---: | :--------- |
|  1-4  | Geologic   |
|  5-8  | Structure  |
| 9-12  | Resource   |
|  13   | Hazard     |
|  14   | Sign       |
|  15   | Dungeon    |
| 16-17 | Terrain    |
|  18   | Settlement |
|  19   | Water      |
|  20   | Magic      |

Use the figure below to determine the hex numbers for placing the features and lairs.

<img class="framed" src="../../../images/Filling-in-the-Blanks-Hex-Numbers-1-100.jpg" alt="Hex numbering for d100" />

Source: [Filling in the Blanks](https://www.drivethrurpg.com/en/product/325708/filling-in-the-blanks)

### Flesh Out the Features

For each feature generated determine the details for it using the Features section on pages 6-8 of [Filling in the Blanks](https://www.drivethrurpg.com/en/product/325708/filling-in-the-blanks).

#### Depressions

Use [Filling in the Blanks](https://www.drivethrurpg.com/en/product/325708/filling-in-the-blanks) under 2.2. Change in Elevation on p. 13-14.

Here's the steps for fleshing out the details of a depression:

1. <input id="elevation-change-reason" placeholder="Why did the elevation change?" /> <a onClick="elevationChangeReason('elevation-change-reason')">Roll a d100</a>
2. <input id="elevation-change-amount" placeholder="Lower by how much?" /> <a onClick="elevationChangeAmount('elevation-change-amount')">Roll a d100</a>
3. <input id="elevation-change-area" placeholder="How large is the area with changed terrain?" style="width: 70%" /> <a onClick="elevationChangeArea('elevation-change-area')">Roll a d100</a>
4. Is the terrain within the change of elevation different than the surrounds? <a onClick="elevationChangeDifference('elevation-change-difference')">Roll a d6</a> and if less than 5 then roll a d6 to see by how many degrees it changes.
   <textarea id="elevation-change-difference" placeholder="Is the terrain different than the surrounds?" rows="5"></textarea>

   - There is a _1-4 in 6 chance_ that the change in elevation represents a differing terrain type than the surrounding environs.
   - If a difference in terrain will most often be within one degree of the surrounding terrain, or within two degrees. There could also be an unusual feature or magically created terrain, see _Degree of Change in Terrain Table_ for details.
   - If one degree of change then roll a d3 (or d6/2)

5. Describe depression in hex notes and update label with depression type

#### Resources

PCs could mine the minerals, harvest the vegetables, hunt the game, etc. to create XP and income.

Use [Filling in the Blanks](https://www.drivethrurpg.com/en/product/325708/filling-in-the-blanks) under 4. Resources on p. 48-56.

Here's the steps for fleshing out the details of a resource:

1. Exceptional resource? <a onClick="resourceExceptionalValue('resource-exceptional-value')">Roll a d20</a>

   - There's a 1 in 20 chance that the resource is exceptional. If it is, roll a d8.
   - It's worth 25% more on a 1-3, 50% more on a 4-5, 75% more on a 6-7, or 100% more on an 8 than the base value.
   - It's up to you why this resource is of exceptional value, such as purity, appearance, or other properties.
   - <input id="resource-exceptional-value" placeholder="Exceptional resource?" />

2. Category of resource? 1d20
3. Additional roles for more details on resource
4. Describe resource in hex notes and update label with resource name

#### Sign

Look at other features in the hex or surrounding hexes to determine what the sign is for.

#### Structure

Use [Filling in the Blanks](./Resources/Rules/Filling_in_the_Blanks_PDF_v.3.1.pdf) under 3. Structures on p. 19-45.

Here's the steps to determine what kind of structures are on your map:

1. Roll a d10 for possible structures
2. Additional roles for more details on structure
3. Describe structure in hex notes and update label with structure type

#### Geologic

Use [Filling in the Blanks](./Resources/Rules/Filling_in_the_Blanks_PDF_v.3.1.pdf) under 2. Geologic on p. 48-56.
Rock Formations p14

<div class="roll-results rpgui-container framed-golden-2" style="width: 100%; position:relative; height:auto; display:inline-block">
    <h2>Other Terrain Features</h2>
    <input id="rocky-terrain" placeholder="Type of rocky terrain?" style="width: 78%" /> <button onClick="document.getElementById('rocky-terrain').value=rockyTerrain()" class="rpgui-button" type="button"><p>Re-roll</p></button>
    <input id="natural-rock-formation" placeholder="Naturally occurring rock formation?" style="width: 78%" /> <button onClick="document.getElementById('natural-rock-formation').value=rocksNaturallyOccurring()" class="rpgui-button" type="button"><p>Re-roll</p></button>
    <textarea id="unusual-rocks" placeholder="Something unusual about the rocks?" rows="5"></textarea> <button onClick="document.getElementById('unusual-rocks').value=rocksUnusual()" class="rpgui-button" type="button"><p>Re-roll</p></button>
    <br/>
    <input id="hot-springs" placeholder="Hotsprings" style="width: 78%" /> <button onClick="hotSprings('hot-springs')" class="rpgui-button" type="button"><p>Re-roll</p></button>
</div>

<div style="clear: both;"></div>