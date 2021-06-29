import React, { useEffect, useRef } from "react";
import "./scrollingChart.css";

const ScrollingChart = props => {
	const canvasRef = useRef();
	const barPool = useRef([]);

	useEffect(() => {
		if (barPool.current.length === 0) {
			populatePool();
		}
		draw();
	}, [barPool.current.length]);

	const populatePool = () => {
		// 30 Bars needed on screen
		for (let i = 0; i < 30; i++) {
			barPool.current.push({
				// TODO wave height
				position: i * 20,
			});
		}
	};

	const moveBars = () => {
		let canvas = canvasRef.current;
		let ctx = canvas.getContext("2d");

		barPool.current.forEach(bar => {
			// Allow bars to move fully off canvas before resetting
			bar.position <= -20 ? (bar.position = ctx.canvas.width) : bar.position--;
		});
	};

	const draw = () => {
		let canvas = canvasRef.current;
		let ctx = canvas.getContext("2d");
		// Clear canvas
		// Save canvas state (styles)
		// Draw animated shapes
		// Restore canvas state

		moveBars();

		// Prepare canvas
		ctx.globalCompositeOperation = "destination-over";
		ctx.clearRect(0, 0, 300, 60); // ActionButton size

		// Save canvas state
		ctx.fillStyle = "#ffffff"; //"#6fa2cb";
		ctx.save();

		// Array of rects to draw
		// Increment position
		// Min/Max positions, when reached max, reset to min to loop
		if (barPool.current.length) {
			barPool.current.forEach(bar => {
				let posX = bar.position;
				let posY = 15; // TODO
				if (posX < ctx.canvas.width) {
					ctx.fillRect(posX, posY, 15, 35);
				}
			});
		}

		ctx.restore();

		window.requestAnimationFrame(draw);
	};

	return <canvas className="chart-container" ref={canvasRef} />;
};

export default ScrollingChart;
