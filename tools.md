---
title: Tools
---

# Tools

Here's a collection of tools created while creating content for our games that you may find useful.

## TTRPG Tools

### Hex Map Generation

#### Terrain Tile Generation

For more details on how to use see the <a href="2025-07-26-osr-hex-gen-surrounding-area.html">surrounding area</a> blog post from the OSR Hex Map Generation series following the [The Gygax 75 Challenge](https://archive.org/details/the-gygax-75-challenge-ttrpg-worldbuilding-resource).

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
    <br/>
    <label>Number of Hexes:</label> <input id="no-hexes" type="number" value="31" oninput="no-hexes-slider.value=no-hexes.value" /> <input class="rpgui-slider" type="range" id="no-hexes-slider" name="noHexsSlider" min="1" max="100" value="31" data-rpguitype="slider" oninput="no-hexes.value=no-hexes-slider.value" />
    <input class="my-slider" id="rangeInput" type="range" min="0" max="200" oninput="amount.value=rangeInput.value" />
    <input id="amount" type="number" value="100" min="0" max="200" oninput="rangeInput.value=amount.value" />
    <label>Terrain Types:</label> <textarea id="sub-terrain-types" rows="31"></textarea>
    <button onClick="generateTerrain(document.getElementById('sub-terrain-type').value, 31, 20, 'sub-terrain-rolls', 'sub-terrain-types')" class="rpgui-button" type="button"><p>Re-roll</p></button>
</div>

## Game Development Tools

<br/><br/><br/><br/><br/><br/><br/><br/>
<img src="images/skelly2.png" style="display:inline-block; width:160px;bottom: 0;left: 0px;position: absolute;">
<img src="images/skelly2.png" style="display:inline-block; width:160px;bottom: 0;right: 0px;position: absolute;transform: scaleX(-1);">