/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://blockly.googlecode.com/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Text blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

//goog.provide('Blockly.Blocks.text');

goog.require('Blockly.Blocks');

////////
Blockly.Blocks['material_air'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Air")
    this.setOutput(true, "Material");
    this.setTooltip('air material block');
    this.setColour(290);
  }
};

Blockly.Python['material_air'] = function(block) {
  var code = 'block.Block(0)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_stone'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Stone")
    this.setOutput(true, "Material");
    this.setTooltip('sone material block');
    this.setColour(290);
  }
};

Blockly.Python['material_stone'] = function(block) {
  var code = 'block.Block(1)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_grass'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Grass")
    this.setOutput(true, "Material");
    this.setTooltip('Grass material block');
    this.setColour(290);
  }
};

Blockly.Python['material_stone'] = function(block) {
  var code = 'block.Block(2)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_dirt'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Dirt")
    this.setOutput(true, "Material");
    this.setTooltip('Dirt material block');
    this.setColour(290);
  }
};

Blockly.Python['material_dirt'] = function(block) {
  var code = 'block.Block(3)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_cobblestone'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Cobblestone")
    this.setOutput(true, "Material");
    this.setTooltip('Cobblestone material block');
    this.setColour(290);
  }
};

Blockly.Python['material_cobblestone'] = function(block) {
  var code = 'block.Block(4)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_wood_planks'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Wood Planks")
    this.setOutput(true, "Material");
    this.setTooltip('Wood Planks material block');
    this.setColour(290);
  }
};

Blockly.Python['material_wood_planks'] = function(block) {
  var code = 'block.Block(5)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_sapling'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Sapling")
    	.appendField(new Blockly.FieldDropdown([['Oak', '0'], ['Spruce', '1'],
      											['Birch', '2']]), "saplingType");
    this.setOutput(true, "Material");
    this.setTooltip('Sapling material block');
    this.setColour(290);
  }
};

Blockly.Python['material_sapling'] = function(block) {
  var value_saplingType = this.getFieldValue('saplingType');
  var code = 'block.Block(6), '+value_saplingType;
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_bedrock'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Bedrock")
    this.setOutput(true, "Material");
    this.setTooltip('Bedrock material block');
    this.setColour(290);
  }
};

Blockly.Python['material_bedrock'] = function(block) {
  var code = 'block.Block(7)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_water_flowing'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("water Flowing")
    this.setOutput(true, "Material");
    this.setTooltip('Water Flowing material block');
    this.setColour(290);
  }
};

Blockly.Python['material_water_flowing'] = function(block) {
  var code = 'block.Block(8)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_water_stationary'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Water Stationary")
    this.setOutput(true, "Material");
    this.setTooltip('Water Stationary material block');
    this.setColour(290);
  }
};

Blockly.Python['material_water_stationary'] = function(block) {
  var code = 'block.Block(9)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_lava_flowing'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Lava Flowing")
    this.setOutput(true, "Material");
    this.setTooltip('Lava Flowing material block');
    this.setColour(290);
  }
};

Blockly.Python['material_lava_flowing'] = function(block) {
  var code = 'block.Block(10)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_lava_stationary'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Lava Stationary")
    this.setOutput(true, "Material");
    this.setTooltip('Lava Stationary material block');
    this.setColour(290);
  }
};

Blockly.Python['material_lava_stationary'] = function(block) {
  var code = 'block.Block(11)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_sand'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Sand")
    this.setOutput(true, "Material");
    this.setTooltip('Sand material block');
    this.setColour(290);
  }
};

Blockly.Python['material_sand'] = function(block) {
  var code = 'block.Block(12)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_gravel'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Gravel")
    this.setOutput(true, "Material");
    this.setTooltip('Gravel material block');
    this.setColour(290);
  }
};

Blockly.Python['material_gravel'] = function(block) {
  var code = 'block.Block(13)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_gold_ore'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Gold Ore")
    this.setOutput(true, "Material");
    this.setTooltip('Gold Ore material block');
    this.setColour(290);
  }
};

Blockly.Python['material_gold_ore'] = function(block) {
  var code = 'block.Block(14)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_iron_ore'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Iron Ore")
    this.setOutput(true, "Material");
    this.setTooltip('Iron Ore material block');
    this.setColour(290);
  }
};

Blockly.Python['material_iron_ore'] = function(block) {
  var code = 'block.Block(15)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_coal_ore'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Coal Ore")
    this.setOutput(true, "Material");
    this.setTooltip('Coal Ore material block');
    this.setColour(290);
  }
};

Blockly.Python['material_coal_ore'] = function(block) {
  var code = 'block.Block(16)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_wood'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Wood")
    	.appendField(new Blockly.FieldDropdown([['Oak', '0'], ['Spruce', '1'],
      											['Birch', '2']]), "woodType");
    this.setOutput(true, "Material");
    this.setTooltip('Wood material block');
    this.setColour(290);
  }
};

Blockly.Python['material_wood'] = function(block) {
  var value_woodType = this.getFieldValue('woodType');
  var code = 'block.Block(17), '+value_woodType;
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_leaves'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Leaves")
    this.setOutput(true, "Material");
    this.setTooltip('Leaves material block');
    this.setColour(290);
  }
};

Blockly.Python['material_leaves'] = function(block) {
  var code = 'block.Block(18)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_glass'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Glass")
    this.setOutput(true, "Material");
    this.setTooltip('Glass material block');
    this.setColour(290);
  }
};

Blockly.Python['material_glass'] = function(block) {
  var code = 'block.Block(20)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_lapis_lazuli_ore'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Lapis Lazuli Ore")
    this.setOutput(true, "Material");
    this.setTooltip('Lapis Lazuli Ore material block');
    this.setColour(290);
  }
};

Blockly.Python['material_lapis_lazuli_ore'] = function(block) {
  var code = 'block.Block(21)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_lapis_lazuli_block'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Lapis Lazuli Block")
    this.setOutput(true, "Material");
    this.setTooltip('Lapis Lazuli Block material block');
    this.setColour(290);
  }
};

Blockly.Python['material_lapis_lazuli_block'] = function(block) {
  var code = 'block.Block(22)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_sandstone'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Sandstone")
    this.setOutput(true, "Material");
    this.setTooltip('Sandstone material block');
    this.setColour(290);
  }
};

Blockly.Python['material_sandstone'] = function(block) {
  var code = 'block.Block(24)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_bed'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Bed")
    this.setOutput(true, "Material");
    this.setTooltip('Bed material block');
    this.setColour(290);
  }
};

Blockly.Python['material_bed'] = function(block) {
  var code = 'block.Block(26)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_cobweb'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Cobweb")
    this.setOutput(true, "Material");
    this.setTooltip('Cobweb material block');
    this.setColour(290);
  }
};

Blockly.Python['material_cobweb'] = function(block) {
  var code = 'block.Block(30)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_grass_tall'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Grass Tall")
    	.appendField(new Blockly.FieldDropdown([['Shrub', '0'], ['Grass', '1'],
      											['Fern', '2']]), "grass_tallType");
    this.setOutput(true, "Material");
    this.setTooltip('Grass Tall material block');
    this.setColour(290);
  }
};

Blockly.Python['material_grass_tall'] = function(block) {
  var value_grass_tallType = this.getFieldValue('grass_tallType');
  var code = 'block.Block(31), '+value_grass_tallType;
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_wool'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Wool Color")
      	.appendField(new Blockly.FieldDropdown([['White', '0'], ['Orange', '1'],
      											['Magenta', '2'], ['Light Blue', '3'],
      											['Yellow', '4'], ['Lime', '5'],
      											['Pink', '6'], ['Grey', '7'],
      											['Light Grey', '8'], ['Cyan', '9'],
      											['Purple', '10'], ['Blue', '11'],
      											['Brown', '12'], ['Green', '13'],
      											['Red', '14'], ['Black', '15']]), "woolColor");
    this.setOutput(true, "Material");
    this.setTooltip('Wool material block');
    this.setColour(290);
  }
};

Blockly.Python['material_wool'] = function(block) {
  var value_woolColor = this.getFieldValue('woolColor');
  var code = 'block.Block(35), '+value_woolColor;
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_flower_yellow'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Flower Yellow")
    this.setOutput(true, "Material");
    this.setTooltip('Flower Yellow material block');
    this.setColour(290);
  }
};

Blockly.Python['material_flower_yellow'] = function(block) {
  var code = 'block.Block(37)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_flower_cyan'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Flower Cyan")
    this.setOutput(true, "Material");
    this.setTooltip('Flower Cyan material block');
    this.setColour(290);
  }
};

Blockly.Python['material_flower_cyan'] = function(block) {
  var code = 'block.Block(38)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_mushroom_brown'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Mushroom Brown")
    this.setOutput(true, "Material");
    this.setTooltip('Mushroom Brown material block');
    this.setColour(290);
  }
};

Blockly.Python['material_mushroom_brown'] = function(block) {
  var code = 'block.Block(39)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_mushroom_red'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Mushroom Red")
    this.setOutput(true, "Material");
    this.setTooltip('Mushroom Red material block');
    this.setColour(290);
  }
};

Blockly.Python['material_mushroom_red'] = function(block) {
  var code = 'block.Block(40)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_gold_block'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Gold Block")
    this.setOutput(true, "Material");
    this.setTooltip('Gold Block material block');
    this.setColour(290);
  }
};

Blockly.Python['material_gold_block'] = function(block) {
  var code = 'block.Block(41)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_iron_block'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Sand")
    this.setOutput(true, "Material");
    this.setTooltip('Sand material block');
    this.setColour(290);
  }
};

Blockly.Python['material_iron_block'] = function(block) {
  var code = 'block.Block(42)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_stone_slab_double'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Slab Double")
    	.appendField(new Blockly.FieldDropdown([['Stone', '0'], ['Sandstone', '1'],
      											['Wooden', '2'], ['Cobblestone', '3'],
      											['Brick', '4'], ['Stone Brick', '5']]), "stone_slabType");
    this.setOutput(true, "Material");
    this.setTooltip('Slab Double material block');
    this.setColour(290);
  }
};

Blockly.Python['material_stone_slab_double'] = function(block) {
  var value_stone_slabType = this.getFieldValue('stone_slabType');
  var code = 'block.Block(43), '+value_stone_slabType;
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_stone_slab'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Slab")
    	.appendField(new Blockly.FieldDropdown([['Stone', '0'], ['Sandstone', '1'],
      											['Wooden', '2'], ['Cobblestone', '3'],
      											['Brick', '4'], ['Stone Brick', '5']]), "stone_slabType");
    this.setOutput(true, "Material");
    this.setTooltip('Slab material block');
    this.setColour(290);
  }
};

Blockly.Python['material_stone_slab'] = function(block) {
  var value_stone_slabType = this.getFieldValue('stone_slabType');
  var code = 'block.Block(44), '+value_stone_slabType;
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_brick_block'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Brick Block")
    this.setOutput(true, "Material");
    this.setTooltip('Brick Block material block');
    this.setColour(290);
  }
};

Blockly.Python['material_brick_block'] = function(block) {
  var code = 'block.Block(45)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_tnt'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("TNT")
    	.appendField(new Blockly.FieldDropdown([['Inactive', '0'], ['Active', '1']]), "tntType");
    this.setOutput(true, "Material");
    this.setTooltip('TNT material block');
    this.setColour(290);
  }
};

Blockly.Python['material_tnt'] = function(block) {
  var value_tntType = this.getFieldValue('tntType');
  var code = 'block.Block(46), '+value_tntType;
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_bookshelf'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Bookshelf")
    this.setOutput(true, "Material");
    this.setTooltip('Bookshelf material block');
    this.setColour(290);
  }
};

Blockly.Python['material_bookshelf'] = function(block) {
  var code = 'block.Block(47)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_moss_stone'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Moss Stone")
    this.setOutput(true, "Material");
    this.setTooltip('Moss Stone material block');
    this.setColour(290);
  }
};

Blockly.Python['material_moss_stone'] = function(block) {
  var code = 'block.Block(48)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_obsidian'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Obsidian")
    this.setOutput(true, "Material");
    this.setTooltip('Obsidian Stone material block');
    this.setColour(290);
  }
};

Blockly.Python['material_obsidian'] = function(block) {
  var code = 'block.Block(49)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_obsidian'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Obsidian")
    this.setOutput(true, "Material");
    this.setTooltip('Obsidian material block');
    this.setColour(290);
  }
};

Blockly.Python['material_obsidian'] = function(block) {
  var code = 'block.Block(49)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_torch'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Torch")
    	.appendField(new Blockly.FieldDropdown([['Pointing East', '1'], ['Pointing West', '2'],
      											['Pointing South', '3'], ['Pointing North', '4'],
      											['Facing Up', '5']]), "torchType");
    this.setOutput(true, "Material");
    this.setTooltip('Torch material block');
    this.setColour(290);
  }
};

Blockly.Python['material_torch'] = function(block) {
  var value_torchType = this.getFieldValue('torchType');
  var code = 'block.Block(50), '+value_torchType;
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_fire'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Obsidian")
    this.setOutput(true, "Material");
    this.setTooltip('Obsidian material block');
    this.setColour(290);
  }
};

Blockly.Python['material_fire'] = function(block) {
  var code = 'block.Block(51)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_stairs_wood'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Stairs Wood")
    this.setOutput(true, "Material");
    this.setTooltip('Stairs Wood material block');
    this.setColour(290);
  }
};

Blockly.Python['material_stairs_wood'] = function(block) {
  var code = 'block.Block(53)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_chest'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Chest")
    this.setOutput(true, "Material");
    this.setTooltip('Chest material block');
    this.setColour(290);
  }
};

Blockly.Python['material_chest'] = function(block) {
  var code = 'block.Block(54)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_diamond_ore'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Diamond Ore")
    this.setOutput(true, "Material");
    this.setTooltip('Diamond Ore material block');
    this.setColour(290);
  }
};

Blockly.Python['material_diamond_ore'] = function(block) {
  var code = 'block.Block(56)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_diamond_block'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Diamond Block")
    this.setOutput(true, "Material");
    this.setTooltip('Diamond Block material block');
    this.setColour(290);
  }
};

Blockly.Python['material_diamond_block'] = function(block) {
  var code = 'block.Block(57)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_crafting_table'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Crating Table")
    this.setOutput(true, "Material");
    this.setTooltip('Crafting Table block');
    this.setColour(290);
  }
};

Blockly.Python['material_crafting_table'] = function(block) {
  var code = 'block.Block(58)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_farmland'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Farmland")
    this.setOutput(true, "Material");
    this.setTooltip('Farmland material block');
    this.setColour(290);
  }
};

Blockly.Python['material_farmland'] = function(block) {
  var code = 'block.Block(60)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_furnace_inactive'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Furnace Inactive")
    this.setOutput(true, "Material");
    this.setTooltip('Furnace Inactive material block');
    this.setColour(290);
  }
};

Blockly.Python['material_furnace_inactive'] = function(block) {
  var code = 'block.Block(61)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_furnace_active'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Furnace Active")
    this.setOutput(true, "Material");
    this.setTooltip('Furnace Active material block');
    this.setColour(290);
  }
};

Blockly.Python['material_furnace_active'] = function(block) {
  var code = 'block.Block(62)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_door_wood'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Door Wood")
    this.setOutput(true, "Material");
    this.setTooltip('Door Wood material block');
    this.setColour(290);
  }
};

Blockly.Python['material_door_wood'] = function(block) {
  var code = 'block.Block(64)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_ladder'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Ladder")
    this.setOutput(true, "Material");
    this.setTooltip('Ladder material block');
    this.setColour(290);
  }
};

Blockly.Python['material_ladder'] = function(block) {
  var code = 'block.Block(65)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_stairs_cobblestone'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Stairs Cobblestone")
    this.setOutput(true, "Material");
    this.setTooltip('Stairs Cobblestone material block');
    this.setColour(290);
  }
};

Blockly.Python['material_stairs_cobblestone'] = function(block) {
  var code = 'block.Block(67)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_door_iron'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Door Iron")
    this.setOutput(true, "Material");
    this.setTooltip('Door Iron material block');
    this.setColour(290);
  }
};

Blockly.Python['material_door_iron'] = function(block) {
  var code = 'block.Block(71)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_redstone_ore'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Redstone Ore")
    this.setOutput(true, "Material");
    this.setTooltip('Redstone Ore material block');
    this.setColour(290);
  }
};

Blockly.Python['material_redstone_ore'] = function(block) {
  var code = 'block.Block(73)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_snow'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Snow")
    this.setOutput(true, "Material");
    this.setTooltip('Snow material block');
    this.setColour(290);
  }
};

Blockly.Python['material_snow'] = function(block) {
  var code = 'block.Block(78)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_ice'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Ice")
    this.setOutput(true, "Material");
    this.setTooltip('Ice material block');
    this.setColour(290);
  }
};

Blockly.Python['material_ice'] = function(block) {
  var code = 'block.Block(79)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_snow_block'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Snow Block")
    this.setOutput(true, "Material");
    this.setTooltip('Snow Block material block');
    this.setColour(290);
  }
};

Blockly.Python['material_snow_block'] = function(block) {
  var code = 'block.Block(80)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_cactus'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Cactus")
    this.setOutput(true, "Material");
    this.setTooltip('Cactus material block');
    this.setColour(290);
  }
};

Blockly.Python['material_cactus'] = function(block) {
  var code = 'block.Block(81)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_clay'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Clay")
    this.setOutput(true, "Material");
    this.setTooltip('Clay material block');
    this.setColour(290);
  }
};

Blockly.Python['material_clay'] = function(block) {
  var code = 'block.Block(82)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_sugar_cane'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Sugar Cane")
    this.setOutput(true, "Material");
    this.setTooltip('Sugar Cane material block');
    this.setColour(290);
  }
};

Blockly.Python['material_sugar_cane'] = function(block) {
  var code = 'block.Block(83)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_fence'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Fence")
    this.setOutput(true, "Material");
    this.setTooltip('Fence material block');
    this.setColour(290);
  }
};

Blockly.Python['material_fence'] = function(block) {
  var code = 'block.Block(85)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_glowstone_block'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Glowstone Block")
    this.setOutput(true, "Material");
    this.setTooltip('Glowstone Block material block');
    this.setColour(290);
  }
};

Blockly.Python['material_glowstone_block'] = function(block) {
  var code = 'block.Block(89)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_bedrock_invisible'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Bedrock Invisible")
    this.setOutput(true, "Material");
    this.setTooltip('Bedrock Invisible material block');
    this.setColour(290);
  }
};

Blockly.Python['material_bedrock_invisible'] = function(block) {
  var code = 'block.Block(95)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_stone_brick'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Stone Brick")
    	.appendField(new Blockly.FieldDropdown([['Normal', '0'], ['Mossy', '1'],
      											['Cracked', '2'], ['Chiseled', '3']]), "stone_brickType");
    this.setOutput(true, "Material");
    this.setTooltip('Stone Brick material block');
    this.setColour(290);
  }
};

Blockly.Python['material_stone_brick'] = function(block) {
  var value_stone_brickType = this.getFieldValue('stone_brickType');
  var code = 'block.Block(98), '+value_stone_brickType;
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_glass_pane'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Glass Pane")
    this.setOutput(true, "Material");
    this.setTooltip('Glass Pane material block');
    this.setColour(290);
  }
};

Blockly.Python['material_glass_pane'] = function(block) {
  var code = 'block.Block(102)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_melon'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Melon")
    this.setOutput(true, "Material");
    this.setTooltip('Melon material block');
    this.setColour(290);
  }
};

Blockly.Python['material_melon'] = function(block) {
  var code = 'block.Block(103)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_fence_gate'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Fence Gate")
    this.setOutput(true, "Material");
    this.setTooltip('Fence Gate material block');
    this.setColour(290);
  }
};

Blockly.Python['material_fence_gate'] = function(block) {
  var code = 'block.Block(107)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_glowing_obsidian'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Glowing Obsidian")
    this.setOutput(true, "Material");
    this.setTooltip('Glowing Obsidian material block');
    this.setColour(290);
  }
};

Blockly.Python['material_glowing_obsidian'] = function(block) {
  var code = 'block.Block(246)';
  return [code, Blockly.Python.ORDER_NONE];
};

////////
Blockly.Blocks['material_nether_reactor_core'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Nether Reactor Core")
    this.setOutput(true, "Material");
    this.setTooltip('Nether Reactor Core material block');
    this.setColour(290);
  }
};

Blockly.Python['material_nether_reactor_core'] = function(block) {
  var code = 'block.Block(247)';
  return [code, Blockly.Python.ORDER_NONE];
};

