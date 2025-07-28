---
title: Tools
---

Here's a collection of tools created while creating content for our games that you may find useful.

# TTRPG Tools

## Hex Map Generation

### Terrain Tile Generation

For more details on how to use see the <a href="2025/07/26/osr-hex-gen-surrounding-area.html">surrounding area</a> blog post from the OSR Hex Map Generation series following the [The Gygax 75 Challenge](https://archive.org/details/the-gygax-75-challenge-ttrpg-worldbuilding-resource).

<div class="roll-results rpgui-container framed-golden-2" style="position:relative; width:100%; height:auto; display:inline-block">
    <h2>Generate Terrain</h2>
    <label>Starting Tile:</label>
    <select id="terrain-type" class="rpgui-dropdown" data-rpguitype="dropdown" style="display: none;">
        <option value="Plains" selected="">Plains</option>
        <option value="Scrub">Scrub</option>
        <option value="Forest">Forest</option>
        <option value="Desert">Desert</option>
        <option value="Hills">Hills</option>
        <option value="Mountains">Mountains</option>
        <option value="Marsh">Marsh</option>
    </select>
    <br/>
    <label>Number of Hexes:</label> <input id="no-hexes" value="31" />
    <label>Rolls:</label> <input id="terrain-rolls" />
    <label>Terrain Types:</label> <textarea id="terrain-types" rows="6"></textarea>
    <button onClick="generateTerrain(document.getElementById('terrain-type').value, document.getElementById('no-hexes').value, 'terrain-rolls', 'terrain-types')" class="rpgui-button" type="button"><p>Re-roll</p></button>
</div>

<div style="clear: both;" />

### Features and Lairs Generation

For more details on how to use see the <a href="2025/07/27/osr-hex-gen-features-lairs.html">features and lairs</a> blog post from the OSR Hex Map Generation series following the [Filling in the Blanks](https://www.drivethrurpg.com/en/product/325708/filling-in-the-blanks) approach.

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

<div style="clear: both;" />

# Game Dev Tools

<br/><br/><br/><br/><br/><br/><br/><br/>
<img src="images/skelly2.png" style="display:inline-block; width:160px;bottom: 0;left: 0px;position: absolute;">
<img src="images/skelly2.png" style="display:inline-block; width:160px;bottom: 0;right: 0px;position: absolute;transform: scaleX(-1);">