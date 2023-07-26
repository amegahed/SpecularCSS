/******************************************************************************\
|                                                                              |
|                                   main.js                                    |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This defines the main script for the demo application.                |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.txt', which is part of this source code distribution.        |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2023, Specular CSS, https://www.specularcss.org         |
\******************************************************************************/

//
// getting methods
//

function getMaterials() {
	let names = [];
	let options = $('.material-selector option');
	for (let i = 0; i < options.length; i++) {
		names.push($(options[i]).val());
	}
	return names;
}

function getTextures() {
	let names = [];
	let options = $('.texture-selector option');
	for (let i = 0; i < options.length; i++) {
		names.push($(options[i]).val());
	}
	return names;
}

function getShapes() {
	let names = [];
	let options = $('.shape-selector option');
	for (let i = 0; i < options.length; i++) {
		names.push($(options[i]).val());
	}
	return names;
}

//
// setting methods
//

function setColor(color, element) {

	// set color of element
	//
	element.css({
		'--primary-color': color
	});
}

function setMaterial(material, element) {
	let materials = this.getMaterials();

	// remove prev materials
	//
	for (let i = 0; i < materials.length; i++) {
		element.removeClass(materials[i]);
	}

	// set new material
	//
	element.addClass(material);
}

function setTexture(texture, element) {
	let textures = this.getTextures();

	// remove prev textures
	//
	for (let i = 0; i < textures.length; i++) {
		element.removeClass(textures[i]);
	}

	// add texture class
	//
	if (texture != 'none') {
		element.addClass(texture);
		element.addClass('textured');
	} else {
		element.removeClass('textured');
	}
}

function setShape(shape, element) {
	let shapes = this.getShapes();

	// remove prev shapes
	//
	for (let i = 0; i < shapes.length; i++) {
		element.removeClass(shapes[i]);
	}

	// add shape class
	//
	element.addClass(shape);
}

$(document).ready(() => {

	//
	// set up event handlers
	//

	$('input[type="color"').change((event) => {
		let color = $(event.target).val();
		let swatch = $(event.target).parent().next();

		// set color of swatch
		//
		setColor(color, swatch);
	});

	$('.material-selector').change((event) => {
		let material = $(event.target).val();
		let panel = $(event.target).closest('.panel');

		// set material of panel
		//
		setMaterial(material, panel);
	});

	$('.texture-selector').change((event) => {
		let texture = $(event.target).val();
		let swatch = $(event.target).parent().find('.swatch');

		// set texture of swatch
		//
		setTexture(texture, swatch);
	});

	$('.shape-selector').change((event) => {
		let shape = $(event.target).val();
		let swatch = $(event.target).parent().find('.swatch');

		// set shape of swatch
		//
		setShape(shape, swatch);
	});
});