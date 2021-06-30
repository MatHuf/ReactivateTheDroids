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

		ctx.save();

		// Draw bars
		if (barPool.current.length) {
			barPool.current.forEach((bar, i) => {
				// Bars should be higher on right side
				let amplitude = (isActive ? 15 : 5) * bar.position * 0.01;
				let posX = bar.position;
				let posY = canvas.height * 0.5 - (1 + Math.cos(i + animationTime.current * 0.5)) * amplitude;
				// Gradients are globally positioned so need to move with bar

				if (posX < ctx.canvas.width) {
					// Draw top of bar
					ctx.fillStyle = "#6fa2cb";
					ctx.fillRect(posX, posY, 15, 25);
					// Draw bottom of bar
					let gradient = ctx.createLinearGradient(posX, 0, posX, canvas.height);
					gradient.addColorStop(0, "#6fa2cb");
					// gradient.addColorStop(0.1, "#6fa2cb");
					gradient.addColorStop(1, "#092968");
					ctx.fillStyle = gradient;
					ctx.fillRect(posX, posY + 25, 15, canvas.height + 10);
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
