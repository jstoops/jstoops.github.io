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

Use APPENDIX B: RANDOM WILDERNESS TERRAIN table on page 174 of the DMG to generate terrain surrounding starting tile.

Steps:

1. Roll a d20 6 times, noting down the result for each roll. These are the 6 terrain types surrounding your starting hex.
2. Define the terrain type for each roll using the table below by matching the result under your starting tile's terrain column, i.e. Plain, with the terrain type, e.g. if you rolled a 12 it is Scrub
3. Apply the generated terrains to surrounding hexes in Worldographer of starting hex, e.g. 08.06, starting at hex above, e.g. 08.04, and continuing clockwise for all 6 surrounding cells

<img src="../../../images/Worldographer-Generate-Surrounding-Terrain-World-Level.jpg" alt="Example Atlas-level map with surrounding terrain generated" />

Terrain Guide:
**Plain:** tundra, steppe, savanna, prairie, heath, moor, downs, meadow e.g. _Farmland_ in Worldographer
**Scrub:** brush, veldt, bush, thickets, brackens e.g. _Grassland_ in Worldographer
**Forest:** woods, jungle, groves and copses (light forest) e.g. _Forest Decid._, _Forest Evrgr._, etc. in Worldographer
**Rough:** badlands e.g. _Other Badland_ in Worldographer
**Desert:** barrens, waste, flat, snowfield e.g. _Desert Sandy_ in Worldographer
**Hills:** ridges, bluffs, dunes e.g. _Hills_ in Worldographer
**Mountains:** mesas, glacier, tors e.g. _Mtn_ in Worldographer
**Marsh:** fen, slough, swamp, bog, mire, quagmire, morass e.g. _Marsh_ in Worldographer
**Pond:** pools, tarn, lake e.g. _Cosmic Planet High Water Medium Temperature_ with Override Default Scale and Scale height independently set appropriately for size and shape of pond/lake in Worldographer
**Depression:** gorge, rift, valley, canyon e.g. _Symbol Crater_ with Color override, Override Default Scale, Scale height independently and Rotate (clockwise) set appropriately for size, color and direction of gorge in Worldographer

|                 | Plain | Scrub | Forest | Rough | Desert | Hills | Mountains | Marsh |
| :-------------- | :---: | :---: | :----: | :---: | :----: | :---: | :-------: | :---: |
| Plains          | 1-11  |  1-3  |   1    |  1-2  |  1-3   |   1   |     1     |  1-2  |
| Scrub           |  12   | 4-11  |  2-4   |  3-4  |  4-5   |  2-3  |     2     |  3-4  |
| Forest\*        |  13   | 12-13 | 12-23  | 5-14  |  N/A   |  4-5  |     3     |  5-6  |
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

Source: DMG p174 APPENDIX B: RANDOM WILDERNESS TERRAIN table

Can continue to build out map at this level, if desired.

## Select Sub-level Hex Terrain

Note: Sub-level = CONTINENT level in Worldographer.

Starting hex = Center hex of large hex, e.g. 40.24, and should have village/town icon and label from Atlas-level

Steps:

1. In Worldographer, change Level to CONTINENT
2. Select 5 for _Number of Tiles_ then click **OK**, **OK**

<img src="../../../images/Worldographer-Child-Map-Number-of-Tiles-Settings.jpg" alt="Number of tiles setting for child map" />

3. Remove overspill hexes by selecting the Blank terrain then clicking on unwanted hex or holding down left mouse button and moving over them (overspill is any not part of the 6 large hexes surrounding starting large hex)
4. Add label at Continent Level with the text "6mi/hex"

## Generate Sub-level Hex Terrain

Steps:

1. In Hex Population Excel->1. Hex Terrain update the L8 cell to re-run the random number generators (check first hexes have some additional plains, e.g. low numbers)
2. Copy all the randomly generated numbers (L11:L41)
3. Select first cell under Pasted in the Subhex table (B11)
4. Apply the generated terrains
   - In Worldographer optionally blank out all hexes in center large hex except center starting hex to make it easier to see which hexes have had terrain from spreadsheet applied
   - Optionally make the center hex Farmland if village with farms
   - Apply randomly generated from the column that corresponds to the Atlas-level terrain, e.g. Plains, starting at row 11, e.g. C11, to surrounding hexes until the terrain type starting at hex above starting hex. Proceed up until top of large hex reached, e.g. C11->40.42, C12->40.23, then proceed from hex to the right down to bottom of large hex, or until change in terrain type, e.g. C13->41.22, C14->41.23, C15->41.21, etc.
   - Repeat until all hexes adjacent hexes to center starting hex are filled:
     - When change in terrain reached set that hex to the new terrain type then start over at hex below or to the right of starting hex, e.g. 40.26, and proceed to bottom of large hex then proceed from hex to left up to top of large hex, or until change in terrain type
     - When change in terrain reached set that hex to the new terrain type then start over hex at below or to the left starting hex
   - Now apply adhoc to remaining hexes using generated terrain as guidance, e.g. pick an unfilled hex to start applying the rest of the terrain to
   - Depressions & Ponds: retains prior terrain type and apply special marking indicating it's a depression or pond
   - 1 in 10 chance for Hills to include Forests and Forests to include Hills: roll a d10 for each hill and each forest hex to see if they contain both then update hex to represent that
