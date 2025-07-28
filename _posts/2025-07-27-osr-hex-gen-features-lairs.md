---
author: jstoops
title: Hex Gen - Features and Lairs
---

After generating the hexes for the <a href="2025-07-26-osr-hex-gen-surrounding-area.html">surrounding area</a> you need to determine features, locations & lairs.

Use Table 1.1 – Feature Types on page 7 and Figure One - Placing Lairs Features on page 5 of [Filling in the Blanks](https://www.drivethrurpg.com/en/product/325708/filling-in-the-blanks) to add additional, interesting features to the core hex. 1d6 features and 1d6 lairs in each 6-mile hex seems too dense, therefore, instead of every 6-mile hex up it a level so do every 30-mile hex has 6 features and 5 lairs, i.e. the entire large hex at the Sub-level. Feel free to adjust these numbers or roll to randomize the number per 30-mile hex.

Here's the steps to generate feature and lairs:

1. <a onClick="generateFeatures(6, 20, 100, 'feature-rolls', 'feature-results')">Roll a d20 and a d100 six times</a> for the features and their location
2. Using the figure for hex numbers 1-31 find the hex for each Location & add an icon with text representing the feature
3. <a onClick="generateLairs(5, 100, 'lair-results')">Roll a d100 5 times</a> for the lairs
4. Using the figure for hex numbers 1-31 find the hex for each Location & add an icon a lair

<div class="roll-results" style="float:left; width: 45%; padding-right: 10px;">
  <h2>Features</h2>
  <label>Rolls:</label> <input id="feature-rolls" />
  <label>Features:</label> <textarea id="feature-results" rows="6"></textarea>
  <button onClick="generateFeatures(6, 20, 100, 'feature-rolls', 'feature-results')" class="rpgui-button" type="button"><p>Re-roll</p></button>
</div>

<div class="roll-results" style="float:right; width: 45%;">
  <h2>Lairs</h2>
  <label>Lairs:</label> <textarea id="lair-results" rows="5"></textarea>
  <button onClick="generateLairs(5, 100, 'lair-results')" class="rpgui-button" type="button"><p>Re-roll</p></button>
</div>

<div style="clear: both;"></div>

**Table 1.1 – Feature Types**

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

<img src="../../../Images/Filling-in-the-Blanks-Hex-Numbers-1-100.jpg" alt="Hex numbering for d100" />

Source: [Filling in the Blanks](https://www.drivethrurpg.com/en/product/325708/filling-in-the-blanks)

### Flesh Out Features

For each feature generated determine the details for it using the Features section on pages 6-8 of [Filling in the Blanks](https://www.drivethrurpg.com/en/product/325708/filling-in-the-blanks).

#### Depressions

Use [Filling in the Blanks](https://www.drivethrurpg.com/en/product/325708/filling-in-the-blanks) under 2.2. Change in Elevation on p. 13-14.

Here's the steps for fleshing out the details of a depression:

1. Why did the elevation change? <a onClick="elevationChangeReason(100, 'elevation-change-reason')">Roll a d100</a>

   - Use the _Elevation Change Reason Table_ below to determine reason
   - <input id="elevation-change-reason" placeholder="Why did the elevation change?" />

2. Lower by how much? <a onClick="elevationChangeAmount(100, 'elevation-change-amount')">Roll a d100</a>

   - Use the _Elevation Change Amount Table_ below to determine by how much
   - <input id="elevation-change-amount" placeholder="Lower by how much?" />

3. How large is the area with changed terrain? <a onClick="elevationChangeArea(100, 'elevation-change-area')">Roll a d100</a>

   - Use the _Elevation Change Area Table_ below to determine how large an area changed
   - <input id="elevation-change-area" placeholder="How large is the area with changed terrain?" />

4. Is the terrain within the change of elevation different than the surrounds? <a onClick="document.getElementById('elevation-change-difference').value=rollMultipleDice(1, 100)*100">Roll a d6</a> and if less than 5 then roll a d6 to see by how many degrees it changes.

   - There is a _1-4 in 6 chance_ that the change in elevation represents a differing terrain type than the surrounding environs.
   - This change in terrain will most often (1-4) be within one degree of the surrounding terrain, or (5-6) within two degrees.
   - If one degree of change then roll a d3 (or d6/2) 
   - <input id="elevation-change-difference" placeholder="Is the terrain different than the surrounds?" />

5. Describe depression in hex notes and update label with depression type

_Elevation Change Reason Table_

| :---: | :-------------------------------------------------------------------------------------------------- |
|  1-75 | The change is natural, the result of time and the elements. |
| 76-90 | The change is natural but out of place or the result of natural violence; a rock formation that does not belong in the area, a gorge formed not by the slow erosion from a river but an active fault line, etc. It could also be a crater left by, say, a meteor. |
| 91-96 | The change is unnatural but clearly the work of years of physical labor. |
| 97-99 | The change is unnatural and clearly the work of magic. |
|  100  | Referee's choice |

_Elevation Change Amount Table_

| :------: | :-------------------------------------------------------------------- |
|   1-60   | The land is 5d20 yards lower or higher than the surrounding area.     |
|  61-75   | The land is 1d6x100 yards lower or higher than the surrounding area.  |
|  76-100  | The land is 1d20x100 yards lower or higher than the surrounding area. |

_Elevation Change Area Table_

| :------: | :---------------- |
|   1-35   | a single subhex   |
|  36-70   | 1d4+1 subhexes    |
|  71-85   | 3d4 subhexes      |
|  86-98   | 4d8 subhexes      |
|  99-100  | 1d4+1 total hexes |

_Degree of Change in Terrain Table_

| :------: | :-------------------------------------------------------------------- |
|   1-50  | **Within one degree.** The basic terrain type remains the same, with a slight change. For instance, farmland, grazing land, grasslands, shrublands and savannas are all flat, relatively treeless terrains that are within one degree of one another. Likewise, a hill could be barren, grassy, or forested and still be within one degree of the basic “hill” type. |
|  51-85  | **Within two degrees.** An area of a grasslands hex could be hilly, or an area of a hilly hex could be mountainous, but a mountain still wouldn't be found in the middle of a flat plain. |
|  86-95  | **Unusual.** This is an unusual feature that is non-magical in nature but rarely seen. Roll 1d100 on the _Unusual Feature Terrain Table_ below to determine the actual feature. If the existing terrain doesn't fit with the feature, roll again. |
|   100   | **Magical/magically created terrain.** This category includes things like fungal forests, fields of flowers that magically put those walking through them to sleep, areas where gravity is increased or decreased, etc. The terrain itself could have a magical effect — for instance, it could be a null-magic zone, where no magic functions — or it could be obviously magically created, such as an entire hex where the ground has been turned into bright green glass. Regardless, the terrain type here is both clearly out of place and clearly artificial/magical in nature. |

_Unusual Feature Terrain Table_

| :------: | :-------------------------------------------------------------------- |
|   1-10   | **Glacier.** A mass of densely packed, slowly moving snow. Those on the glacier have their movement reduced by 1/2, suffer the same risk of sun-blindness as on a salt flat, and have a 1 in 6 chance of encountering a hazard for each subhex they enter on the glacier (most likely a crevasse or a sinkhole). |
|  11-20   | **Hot springs.** The water is heated by geothermal means and is often (1-4 in 6) accompanied by a strong smell of sulfur. It will rarely (1 in 6) be unbearably hot, inflicting (1-3) 1, (4-5) 1d4, or (6) 1d6 points of damage for every round someone not immune to fire damage is within. If it is hot enough to inflict damage there's a 1-2 in 6 chance it is actually a geyser (see _Geyser_ below). |
|  21-30   | **Landlocked sand dunes.** All that remains of an ancient, land-locked sea or ocean. Treat as desert. |
|  31-40   | **Mudflats.** A stretch of barren clay that cracks when it dries. When wet, it becomes slick and difficult to traverse. Reduce movement by 1/2 when traveling through a wet mudflat.
|  41-50   | **Other.** |
|  51-60   | **Petrified forest.** The remains of an ancient forest can be found here, the trees turned to stone. There's only a 1 in 6 chance the trees are actually standing, otherwise they are lying on the ground.
|  61-70   | **Rock Formations.** Unusual rock formations dot the landscape: towers of stone such as the Devil's Tower in Wyoming or the Stone Forest in China, or unusual boulder deposits. See the **Geologic** section. |

_Geyser_

- There will be (1-3) one geyser, (4-5) 2d4, or (6) 3d8 spread throughout the subhex, with an additional 1 in 6 chance this feature occurs over 1d20 subhexes.
- Geysers are pools of extremely hot (1-4) water or (5-6) mud.
- There's only a 1 in 6 chance the pool will be cool enough (relatively) that individuals can enter it without suffering damage; otherwise someone not resistant to fire will suffer 1d6 points of damage for every round they're within the pool.
- Geysers erupt every (1) 1d6 hours, (2-3) 1d8 days, (4-5) 1d4 weeks, (6) 1d4 months.
- If this is generated as a triggered hazard, assume they erupt upon the adventurers first entering the subhex, with subsequent eruptions occurring on a regular basis thereafter.
- Boiling water (or mud) is spread over a radius of (1-3) 1d20 yards, (4-5) 5d20 yards, or (6) 10d100 yards (reduce ranges for mud eruptions by half), inflicting (1-3) 1d6, (4-5) 2d6, or (6) 3d6 points of damage.
- If it is a mud eruption, it inflicts half the initial damage in the round after the eruption.
- A save versus breath reduces the damage by half.
- A geyser will erupt for (1-3) 1d6 rounds, (4-5) 1d10 minutes, or (6)1d8 hours.

Source: [Filling in the Blanks](https://www.drivethrurpg.com/en/product/325708/filling-in-the-blanks)

#### Resources

PCs could mine the minerals, harvest the vegetables, hunt the game, etc. to create XP and income.

Use [Filling in the Blanks](https://www.drivethrurpg.com/en/product/325708/filling-in-the-blanks) under 4. Resources on p. 48-56.

Here's the steps for fleshing out the details of a resource:

1. Exceptional resource? <a onClick="resourceExceptionalValue(20, 'resource-exceptional-value')">Roll a d20</a>

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

Steps:

1. Roll a d10 for possible structures
2. Additional roles for more details on structure
3. Describe structure in hex notes and update label with structure type

#### Geologic

Use [Filling in the Blanks](./Resources/Rules/Filling_in_the_Blanks_PDF_v.3.1.pdf) under 2. Geologic on p. 48-56.
Rock Formations p14
## 6. Determine Lair Location & Occupants

Use APPENDIX C: RANDOM MONSTER ENCOUNTERS tables for appropriate conditions and area of [DMG](./Resources/Rules/Dungeon-Masters-Guide-1E.pdf) to determine occupants of lairs, e.g. for this map Temperate And Sub-Tropical Conditions in Uninhabited/Wilderness Areas on p. 184.

1. Roll d100 for pre-dominate terrain for each lair
2. In Worldographer, update label for each lair with creature type
3. Roll on sub tables, if necessary

### Generate ruins

Use Ruins Generator tables in [D30 Sandbox Companion](https://www.drivethrurpg.com/en/product/124392/d30-sandbox-companion) on p. 21.

d30: https://rolladie.net/roll-a-d30-die

Steps:

1. Roll d30 on RG1 to determine type of ruins
2. Roll d30 on RG2 to determine character of ruin/decay & degree
3. Describe ruins in hex notes

## 7. Determine Settlements

Use [D30 Sandbox Companion](./Resources/Rules/d30_Sandbox_Companion.pdf) IPD: INHABITATION BY POPULATION DENSITY table on p20 to determine density of population. Each hex has a 1 in 3 chance of having a settlement and the density will determine if there actually is a settlement.

Density for this map are: Frontier

Steps:

1. Open [Hex Population Excel](https://docs.google.com/spreadsheets/d/1C-7wzWaNHMVVr-sSvk1lJImEKx9R6gpx/edit?usp=sharing&ouid=112939477498268066745&rtpof=true&sd=true)
2. Select _Subhex Population_ tab
3. Set predominate terrain type in M2 from Atlas-level hex, e.g. Plains, & population density, e.g. Frontier
4. Update the V4 cell to re-run the random number generators
5. Copy the randomly generated settlement & settlement type numbers (S5:T35)
6. Select first cell under Settlement? Random (E5) then right-click on selection then select Past special->Values only
7. Using the figure for hex numbers 1-31 find the hex for each Subhex # with Settlement of Maybe & add an icon, e.g. Building Cottage or Settlement City Ruined, with a label for the Type

### Generate Settlement Names

Use something like [Don Jon's Fantasy Name Generator](https://donjon.bin.sh/fantasy/name/#type=set;set=city)

