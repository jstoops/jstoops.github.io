---
author: jstoops
title: OSR Hex Generation
---

I'm planning on starting an [Old School Essentials](https://necroticgnome.com/pages/about-old-school-essentials) game and needed to create a hex map for it. While looking up techniques to do this I came across this video series by [Games from the Front](https://www.youtube.com/@GamesfromtheFront) that inspired me to use this approach and wanted to share it with my fellow TTRPG enthusiasts: [Old School Essentials](https://www.youtube.com/playlist?list=PLk0ytbdOezZttM7yCY3pA9GGjCxNcjjL_).

This approach can be used for any OSR (Old School Renaissance or Old School Revival) game like the original AD&D, [Dungeon Crawl Classics (DCC)](https://goodman-games.com/dungeon-crawl-classics-rpg/), [Shadowdark](https://www.thearcanelibrary.com/collections/shadowdark-rpg), [Deathbringer](https://www.drivethrurpg.com/en/product/396879/deathbringer-rpg), [Grave](https://jasontocci.itch.io/grave), [Iron Halberd](https://level2janitor.itch.io/iron-halberd), [Knave](https://questingbeast.itch.io/knave), [Basic Fantasy](https://www.basicfantasy.org/), and many others based on the original DnD rules.

The main inspiration for this "world building" process comes from [The Gygax 75 Challenge](https://archive.org/details/the-gygax-75-challenge-ttrpg-worldbuilding-resource) that suggests the following steps:

1. The Concept: Pitch -> Sources of Inspiration
2. Surrounding Area
3. The Dungeon
4. Town Features
5. The Larger World

# Week 1: The Concept: Pitch and Sources of Inspiration

So to get started, you need to articulate the big ideas and gather sources.

> "Step 1 is something you do in your head. Now, fantasy/swords & sorcery games need not have any fixed basis for the assumptions made by its referee (my own doesn't) except those which embrace the whole of fantasy. This sort of campaign can mix any and all of the various bases which will be mentioned below - and then some. […]
> Settings based upon limits (if one can speak of fantasy limits) can be very interesting in themselves providing the scope of the setting will allow the players relative free-reign to their imaginations." – E.G.G.

## Pitch

In the Gygax 75 Challenge is suggested that you write down 3-7 well-crafted bullet points that will both communicate and "sell" the world to your players.

For example:

- _The Forsaken Frontier_ is on the edge of civilization where settlers seek their fortune and cling to the protection of local nobles and warlords.
- _The Wilds._ Not far beyond though, the Frontier is wild where millennia of forgotten civilizations lie in ruins crawling with monsters, evil sorcerers, distant kingdoms of ancient races, and in the unexplored depths an otherworldly evil.
- _Player characters are human._ Creatures that are either more or less than human come from interactions between gods and mortals or from a more ancient time. These creatures are feared and mistrusted, even if some have become human (e.g. the centaurs).
- _Magic is unknown, dangerous, and inhuman._ Even the best wizards occasionally fail to properly harness a spell, with unpredictable results. Low-level wizards are powerful. High-level wizards fear for their souls. Continual use of magic results in…changes. Exposure to demons, radiation from other planes, elemental energies in toxic quantities, and the servants of Chaos all affect a wizard over the course of his career. Magic is unpredictable and spells can fail, or may misfire, and the magic user may suffer corruption.

## Sources of Inspiration

- The Keep on the Borderlands and the Amber Castle, book series like [The Legend of Drizzt by R.A. Salvatore](https://dungeonsanddragonsfan.com/legend-of-drizzt-books-in-order/) and [The Black Company by Glen Cook](https://en.wikipedia.org/wiki/The_Black_Company), and the classic AD&D 1e Dungeon Masters Guide.

# Tools

So, how do you go about creating your own hex map from scratch using the random tables in the AD&D 1e Dungeon Masters Guide (DMG) and other resources?

I'm using the tool [Worldgrapher](https://worldographer.com/) because the [pro version](https://store.inkwellideas.com/products/bunlde-hexographer-cityographer-and-dungeonographer-pro-versions) allows multiple map levels so you can start with a high-level world map and zoom into continent, kingdom, and province detail maps which works well with the DMG and can be fully configured and customized to your preferred number of hexes within the previous levels hex. I've also used the free version, [Hexographer](https://www.hexographer.com/free-version/), for years to create hex maps and will work fine for this you just have to create a separate map for each level so the steps will be slightly different.

[Filling in the Blanks](https://www.drivethrurpg.com/en/product/325708/filling-in-the-blanks) and [D30 Sandbox Companion](https://www.drivethrurpg.com/en/product/124392/d30-sandbox-companion) have useful rules for generating specific aspects of your world too that are useful.

# Week 2: The Surrounding Area

Once you've got your pitch you'll need to start creating your hex map, one settlement of significant size where your players start out (e.g. The Village of Hommlet), at least 2 other settlements, other major terrain feature, a mysterious site to explore (e.g. The Moathouse), a dungeon entrance, and a random encounter table for the area.

> "[…] sitting down with a large piece of hex ruled paper and drawing a large scale map. A map with a scale of 1 hex = 1 mile will be about right for player operations such as exploring, camping, adventuring, and eventually building their strongholds. Even such small things as a witch's hut and side entrances to the dungeon can be shown on the map. The central features of the map must be the major town and the dungeon entrance." – E.G.G.

## Set up Worldographer

Here's the steps to setup Worldgrapher for a 15x15 hex map at the WORLD level:

1. Open Worldographer
2. Select File->New World/Kingdom Map
3. Settings:

   - _Hexes Wide:_ 15
   - _Hexes High:_ 15
   - _Initial View Level:_ WORLD
   - Select _All one terrain_ and set to: Blank

<img src="../../../images/Worldographer-New-World-Map.jpg" alt="New Worldographer 15x15 hex map settings" />

4. Click **Generate Map**
5. Add label at World Level with the text "30mi/hex" by selecting Label->New Text Label and clicking on the the map to place it. Make sure only World is checked else it'll appear on every level, not just the World level.

<img src="../../../images/Worldographer-World-Map-Scale-Label-Settings.jpg" alt="World map label settings" /><br>
<img src="../../../images/Worldographer-World-Map-Scale-Label.jpg" alt="Example World map label" />

6. Show hex numbers & reduce size:

   - Check _Numbers_ in bottom toolbar <img src="../../../images/Worldographer-Show-Hex-Numbers.jpg" alt="Show hex numbers and configure" />
   - Click the cog icon to the right of Numbers to Configure Tile Numbers
   - Make a lighter _Color_ (e.g. #4d4d4d)
   - Set _Size_ to 12
   - Set _Pre-Pad_ to 10s digit

<img src="../../../images/Worldographer-Configure-Tile-Numbers.jpg" alt="Show hex numbers and configure" />

## Select Center Atlas-level Hex Terrain

Note: Atlas-level = WORLD level in Worldographer

Here's the steps to set the starting location on the World map (known as Atlas-level map in AD&D) for your **One large settlement** (define large however you like):

1. Select Terrain->Farmland (aka plains in DMG) & click on starting hex, e.g. 08.05, where the campaign will begin

<img src="../../../images/Worldographer-Terrain-Farmland-Plains.jpg" alt="Terrain for plains" />

2. Select Feature->Building Clanmoot icon (if you right-click on the icon or terrain you can add it to your favorites so easy to find again)
3. Enter label, e.g. Village of Hommlet
4. Settings:

   - Check _Override color_ and set to appropriate color e.g. Black
   - Check _Override Default Scale_ and set to appropriate scale, e.g. 75
   - Check _Scale height independently_ and set to appropriate scale, e.g. 75
   - Set _Label Style_ to City or Village
   - Make sure World, Continent, Kingdom and Province is checked so feature icon and label appears on every level of the map

<img src="../../../images/Worldographer-Center-Map-Village-Label-Settings.jpg" alt="Starting location feature icon and label settings" />

5. Click in starting hex to place feature icon & label for starting settlement, e.g. 08.05

<img src="../../../images/Worldographer-Center-Map-Village-Feature-Icon-Label.jpg" alt="Starting location feature icon and label" />

## Generate Surroundings Atlas-level Hex Terrain

Use APPENDIX B: RANDOM WILDERNESS TERRAIN table on page 174 of the DMG to generate terrain surrounding starting tile. For the Atlas-level that's just 6 tiles.

The tool below allows you to select the starting tile terrain type, "Plains" in this caase, and then click the link in step 1 to randomly generating the terrain types for the 6 surrounding tiles.

Here's the steps to generate terrain:

1. <a onClick="generateTerrain(document.getElementById('atlas-terrain-type').value, 6, 20, 'atlas-terrain-rolls', 'atlas-terrain-types')">Roll a d20 6 times</a>, noting down the result for each roll. These are the 6 terrain types surrounding your starting hex.
2. Define the terrain type for each roll using the table below by matching the result under your starting tile's terrain column, i.e. Plains, with the terrain type, e.g. if you rolled a 12 it is Scrub
3. Apply the generated terrains to surrounding hexes in Worldographer of starting hex, e.g. 08.06, starting at hex above, e.g. 08.04, and continuing clockwise for all 6 surrounding cells
   - Depressions & Ponds: retains prior terrain type and apply special marking indicating it's a depression or pond
   - 1 in 10 chance for Hills to include Forests and Forests to include Hills: roll a d10 for each hill and each forest hex to see if they contain both then update hex to represent that (link in step 1 automatically does this for you)

<div class="roll-results" style="float:right; width: 57%; padding-left: 5px;">
   <label>Starting Tile:</label>
   <select id="atlas-terrain-type" class="rpgui-dropdown" data-rpguitype="dropdown" style="display: none;">
      <option value="Plains" selected="">Plains</option>
      <option value="Scrub">Scrub</option>
      <option value="Forest">Forest</option>
      <option value="Desert">Desert</option>
      <option value="Hills">Hills</option>
      <option value="Mountains">Mountains</option>
      <option value="Marsh">Marsh</option>
   </select>
  <label>Rolls:</label> <input id="atlas-terrain-rolls" />
  <label>Terrain Types:</label> <textarea id="atlas-terrain-types" rows="6"></textarea>
  <button onClick="generateTerrain(document.getElementById('atlas-terrain-type').value, 6, 20, 'atlas-terrain-rolls', 'atlas-terrain-types')" class="rpgui-button" type="button"><p>Re-roll</p></button>
</div>

<img src="../../../images/Worldographer-Generate-Surrounding-Terrain-World-Level.jpg" alt="Example Atlas-level map with surrounding terrain generated" />

|                 | Plains | Scrub | Forest | Rough | Desert | Hills | Mountains | Marsh |
| :-------------- | :---: | :---: | :----: | :---: | :----: | :---: | :-------: | :---: |
| Plains          | 1-11  |  1-3  |   1    |  1-2  |  1-3   |   1   |     1     |  1-2  |
| Scrub           |  12   | 4-11  |  2-4   |  3-4  |  4-5   |  2-3  |     2     |  3-4  |
| Forest\*        |  13   | 12-13 | 12-14  |   5   |  N/A   |  4-5  |     3     |  5-6  |
| Rough           |  14   |  14   |   15   |  6-8  |  6-8   |  6-7  |    4-5    |   7   |
| Desert          |  15   |  15   |  N/A   | 9-10  |  9-14  |   8   |     6     |  N/A  |
| Hills\*\*       |  16   |  16   |   16   | 11-15 |   15   | 9-14  |   7-10    |   8   |
| Mountains\*\*\* |  17   |  17   |   17   | 16-17 | 16-17  | 15-16 |   11-18   |  N/A  |
| Marsh           |  18   |  18   |   18   |  18   |   18   |  17   |    N/A    | 9-15  |
| Pond            |  19   |  19   |   19   |  19   |   19   | 18-19 |    19     | 16-19 |
| Depression      |  20   |  20   |   20   |  20   |   20   |  20   |    20     |  20   |

<pre>
*   1 in 10 also includes <b>hills</b>
    aka Hill Forest Decid., Hill Forest Evrgr. in Worldographer.
**  1 in 10 also includes <b>forest</b>
    aka Hill Forest Decid., Hill Forest Evrgr. in Worldographer.
*** 1 in 20 have a <b>pass</b> which leads through the range
    aka Shapes->Preset: Trail->Curve, reduce Width, e.g. 5 click
    points through mountain to represent pass.
</pre>

Terrain Guide:

- **Plain:** tundra, steppe, savanna, prairie, heath, moor, downs, meadow e.g. _Farmland_ in Worldographer
- **Scrub:** brush, veldt, bush, thickets, brackens e.g. _Grassland_ in Worldographer
- **Forest:** woods, jungle, groves and copses (light forest) e.g. _Forest Decid._, _Forest Evrgr._, etc. in Worldographer
- **Rough:** badlands e.g. _Other Badland_ in Worldographer
- **Desert:** barrens, waste, flat, snowfield e.g. _Desert Sandy_ in Worldographer
- **Hills:** ridges, bluffs, dunes e.g. _Hills_ in Worldographer
- **Mountains:** mesas, glacier, tors e.g. _Mtn_ in Worldographer
- **Marsh:** fen, slough, swamp, bog, mire, quagmire, morass e.g. _Marsh_ in Worldographer
- **Pond:** pools, tarn, lake e.g. _Cosmic Planet High Water Medium Temperature_ with Override Default Scale and Scale height independently set appropriately for size and shape of pond/lake in Worldographer
- **Depression:** gorge, rift, valley, canyon e.g. _Symbol Crater_ with Color override, Override Default Scale, Scale height independently and Rotate (clockwise) set appropriately for size, color and direction of gorge in Worldographer

Source: DMG p173 APPENDIX B: RANDOM WILDERNESS TERRAIN table

Can continue to build out map at this level, if desired.

## Select Sub-level Hex Terrain

Note: Sub-level = CONTINENT level in Worldographer.

Starting hex = Center hex of large hex, e.g. 40.24, and should have village/town icon and label from Atlas-level

Here's the steps to drill into the central hex at the Atlas-level to start creating the map you can use to in the first few sessions for the players to start their hex crawl:

1. In Worldographer, change Level to CONTINENT
2. Select 5 for _Number of Tiles_ then click **OK**, **OK**

<img src="../../../images/Worldographer-Child-Map-Number-of-Tiles-Settings.jpg" alt="Number of tiles setting for child map" />

3. Remove overspill hexes by selecting the Blank terrain then clicking on unwanted hex or holding down left mouse button and moving over them (overspill is any not part of the 6 large hexes surrounding starting large hex)
4. Add label at Continent Level with the text "6mi/hex"

## Generate Sub-level Hex Terrain

This follows the same process as generatign terrain at the Atlas-level except it is for 31 hexes this time.

Here's the steps to generate the terrain for the times surrounding your starting settlement:

1. <a onClick="generateTerrain(document.getElementById('sub-terrain-type').value, 31, 20, 'sub-terrain-rolls', 'sub-terrain-types')">Roll a d20 31 times</a>, noting down the result for each roll. These are the 31 terrain types surrounding your starting hex.
2. Check first few hexes have some additional plains, e.g. low numbers, so it makes sence for a settlement like this and re-roll, if necessary, until terrain distribution feels right for what you have in mind for this area
3. Define the terrain type for each roll using the table below by matching the result under your starting tile's terrain column, i.e. Plains
4. Apply the generated terrains to all the tiles representing the higher level Atlas tile radiating out from the starting hex, e.g. 40.25
  - In Worldographer optionally blank out all hexes in center large hex except center starting hex to make it easier to see which hexes have had terrain from spreadsheet applied
   - Optionally make the center hex Farmland if village with farms
   - Apply randomly generated terrain to surrounding hexes until the terrain type starting at hex above starting hex. Proceed up until top of large hex reached, e.g. 40.42, 40.23, then proceed from hex to the right down to bottom of large hex, or until change in terrain type, e.g. 41.22, 41.23, 41.21, etc.
   - Repeat until all hexes adjacent hexes to center starting hex are filled:
     - When change in terrain reached set that hex to the new terrain type then start over at hex below or to the right of starting hex, e.g. 40.26, and proceed to bottom of large hex then proceed from hex to left up to top of large hex, or until change in terrain type
     - When change in terrain reached set that hex to the new terrain type then start over hex at below or to the left starting hex
   - Now apply adhoc to remaining hexes using generated terrain as guidance, e.g. pick an unfilled hex to start applying the rest of the terrain to
   - Depressions & Ponds: retains prior terrain type and apply special marking indicating it's a depression or pond
   - 1 in 10 chance for Hills to include Forests and Forests to include Hills: roll a d10 for each hill and each forest hex to see if they contain both then update hex to represent that (link in step 1 automatically does this for you)

<div class="roll-results">
   <label>Starting Tile:</label>
   <select id="sub-terrain-type" class="rpgui-dropdown" data-rpguitype="dropdown" style="display: none;">
      <option value="Plains" selected="">Plains</option>
      <option value="Scrub">Scrub</option>
      <option value="Forest">Forest</option>
      <option value="Desert">Desert</option>
      <option value="Hills">Hills</option>
      <option value="Mountains">Mountains</option>
      <option value="Marsh">Marsh</option>
   </select>
  <label>Rolls:</label> <textarea id="sub-terrain-rolls" rows="3"></textarea>
  <label>Terrain Types:</label> <textarea id="sub-terrain-types" rows="31"></textarea>
  <button onClick="generateTerrain(document.getElementById('sub-terrain-type').value, 31, 20, 'sub-terrain-rolls', 'sub-terrain-types')" class="rpgui-button" type="button"><p>Re-roll</p></button>
</div>

## Determine Features, Location & Type

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

Use [Filling in the Blanks](./Resources/Rules/Filling_in_the_Blanks_PDF_v.3.1.pdf) under 2.2. Change in Elevation on p. 13-14.

Steps:

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
   - <input id="elevation-change-difference" placeholder="1d6x100" />

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
|  86-95  | **Unusual.** This is an unusual feature that is non-magical in nature but rarely seen. Roll 1d100 below to determine the actual feature. If the existing terrain doesn't fit with the feature, roll again. |
|   100   | **Magical/magically created terrain.** This category includes things like fungal forests, fields of flowers that magically put those walking through them to sleep, areas where gravity is increased or decreased, etc. The terrain itself could have a magical effect — for instance, it could be a null-magic zone, where no magic functions — or it could be obviously magically created, such as an entire hex where the ground has been turned into bright green glass. Regardless, the terrain type here is both clearly out of place and clearly artificial/magical in nature. |

_Unusal Feature Terrain Table_

| :------: | :-------------------------------------------------------------------- |
|   1-10   | Glacier. A mass of densely packed,
slowly moving snow. Those on the glacier
have their movement reduced by 1/2,
suffer the same risk of sun-blindness as
on a salt flat, and have a 1 in 6 chance
of encountering a hazard for each subhex
they enter on the glacier (most likely a
crevasse or a sinkhole).
11-20. Hot springs. See the section on
water features in Chapter Ten.
21-30. Landlocked sand dunes. All that
remains of an ancient, land-locked sea or
ocean. Treat as desert.
31-40. Mudflats. A stretch of barren clay
that cracks when it dries. When wet, it
becomes slick and difficult to traverse.
Reduce movement by 1/2 when traveling
through a wet mudflat.
41-50. Other.
51-60. Petrified forest. The remains of an
ancient forest can be found here, the
trees turned to stone. There’s only a 1 in
6 chance the trees are actually standing,
otherwise they are lying on the ground.
61-70. Rock Formations. Unusual rock
formations dot the landscape: towers
of stone such as the Devil’s Tower in
Wyoming or the Stone Forest in China,
or unusual boulder deposits (see Chapter
Two for more information).

#### Resources

PCs could mine the minerals, harvest the vegetables, hunt the game, etc. to create XP and income.

Use [Filling in the Blanks](./Resources/Rules/Filling_in_the_Blanks_PDF_v.3.1.pdf) under 4. Resources on p. 48-56.

Steps:

1. Exceptional resource? 1d20
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

