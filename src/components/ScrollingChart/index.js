import React, { useEffect, useRef } from "react";
import "./scrollingChart.css";

const ScrollingChart = props => {
	const canvasRef = useRef();
	const barPool = useRef([]);

	useEffect(() => {
		draw();
	}, []);

	const draw = () => {
		let canvas = canvasRef.current;
		let ctx = canvas.getContext("2d");
		// Clear canvas
		// Save canvas state (styles)
		// Draw animated shapes
		// Restore canvas state

		console.log(ctx);

		// Prepare canvas
		ctx.globalCompositeOperation = "destination-over";
		ctx.clearRect(0, 0, 100, 60); // ActionButton size

		// Save canvas state
		ctx.fillStyle = "#6fa2cb";
		ctx.save();

		// Array of rects to draw
		// Increment position
		// Min/Max positions, when reached max, reset to min to loop

		ctx.fillRect(canvasRef.current.height, canvasRef.current.height, 5, 35);

		ctx.restore();

		window.requestAnimationFrame(draw);
	};

	return <canvas className="chart-container" ref={canvasRef} />;
};

export default ScrollingChart;
