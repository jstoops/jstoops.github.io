---
title: Tools
---

Here's a collection of tools created while creating content for our games that you may find useful.

# TTRPG Tools

## Hex Map Generation

### Terrain Tile Generation

For more details on how to use see the <a href="2025-07-26-osr-hex-gen-surrounding-area.html">surrounding area</a> blog post from the OSR Hex Map Generation series following the [The Gygax 75 Challenge](https://archive.org/details/the-gygax-75-challenge-ttrpg-worldbuilding-resource).

<div class="roll-results rpgui-container framed-golden-2" style="position:relative; width:100%; height:auto; display:inline-block">
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
    <button onClick="generateTerrain(document.getElementById('terrain-type').value, document.getElementById('no-hexes').value, 20, 'terrain-rolls', 'terrain-types')" class="rpgui-button" type="button"><p>Re-roll</p></button>
</div>

<div style="clear: both;" />

# Game Dev Tools

<br/><br/><br/><br/><br/><br/><br/><br/>
<img src="images/skelly2.png" style="display:inline-block; width:160px;bottom: 0;left: 0px;position: absolute;">
<img src="images/skelly2.png" style="display:inline-block; width:160px;bottom: 0;right: 0px;position: absolute;transform: scaleX(-1);">