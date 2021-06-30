import React, { useEffect, useRef } from "react";
import "./scrollingChart.css";

const ScrollingChart = props => {
	const canvasRef = useRef();
	const barPool = useRef([]);
	const animationTime = useRef(0);

	const draw = isActive => {
		let canvas = canvasRef.current;
		let ctx = canvas.getContext("2d");

		moveBars();

		// Prepare canvas
		ctx.globalCompositeOperation = "destination-over";
		ctx.clearRect(0, 0, 300, 300);

		// Save canvas state
		ctx.fillStyle = "#6fa2cb";
		ctx.save();

		// Draw bars
		if (barPool.current.length) {
			barPool.current.forEach((bar, i) => {
				// Bars should be higher on right side
				let amplitude = (isActive ? 15 : 5) * bar.position * 0.01;
				let posX = bar.position;
				let posY = canvas.height * 0.5 - (1 + Math.cos(i + animationTime.current * 0.5)) * amplitude;
				if (posX < ctx.canvas.width) {
					ctx.fillRect(posX, posY, 15, 35);
				}
			});
		}

		ctx.restore();
	};

	useEffect(() => {
		if (barPool.current.length === 0) {
			populatePool();
		}
		let frameId;

		const render = () => {
			animationTime.current += 0.2;
			draw(props.isActive);
			frameId = window.requestAnimationFrame(render);
		};
		render();

		return () => {
			window.cancelAnimationFrame(frameId);
		};
	}, [draw]);

	const populatePool = () => {
		// 16 Bars needed on screen
		for (let i = 0; i < 16; i++) {
			barPool.current.push({
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

	return <canvas className="chart-container" ref={canvasRef} />;
};

export default ScrollingChart;
