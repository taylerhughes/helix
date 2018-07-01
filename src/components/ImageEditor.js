import React, { Component } from 'react';
import './ImageEditor.css';

class ImageEditor extends Component {

	constructor() {
		super();
		this.createCanvas = this.createCanvas.bind(this);
		this.getImageDimensions = this.getImageDimensions.bind(this);
		this.draw = this.draw.bind(this);
	}

	componentDidMount() {
		const imageurl = "https://storage.googleapis.com/" + this.props.location.state.imageuri;
		this.getImageDimensions(imageurl);
	}

	getImageDimensions(url) {
		var img = new Image();

		img.onload = () => {
			this.createCanvas(img.width, img.height);
			this.draw(url);
		}

		img.src = url;
	}

	createCanvas(width, height) {
		let mycanvas = document.createElement("canvas");
		console.log(width, height);
		mycanvas.width = width;
		mycanvas.height = height;
		mycanvas.id = "mycanvas";
		document.getElementById("canvas-container").appendChild(mycanvas);
	}

	draw(imageurl) {
	  var ctx = document.getElementById('mycanvas').getContext('2d');
	  var img = new Image();
	  img.onload = function() {
	    ctx.drawImage(img, 0, 0);
	  };
	  img.src = imageurl;
	}

	render() {
		return (
			<div id="canvas-container">

			</div>
		)
	}
}

export default ImageEditor;