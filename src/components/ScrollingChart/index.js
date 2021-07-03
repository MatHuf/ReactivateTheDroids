import React, { useEffect, useRef } from "react";
import { useSignal } from "../../context/signalContext";
import { useActivation } from "../../context/activationContext";
import "./scrollingChart.css";

const ScrollingChart = props => {
	const canvasRef = useRef();
	const barPool = useRef([]);
	const animationTime = useRef(0);
	const [signal] = useSignal();
	const [active] = useActivation();

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
				let barWidth = 10;
				let barHeight = 25;
				// Higher amplitude on right side
				let amplitude = (isActive ? 15 : 5) * bar.position * 0.01;
				let posX = bar.position;
				let posY = signal
					? canvas.height * 0.6 - (1 + Math.cos(i + animationTime.current * 0.5)) * amplitude
					: canvas.height - 10;
				if (posX < ctx.canvas.width) {
					// Draw top of bar
					ctx.fillStyle = "#6fa2cb";
					ctx.fillRect(posX, posY, barWidth, barHeight);
					// Draw bottom of bar
					// Gradients are globally positioned so need to move with bar
					let gradient = ctx.createLinearGradient(posX, posY, posX, canvas.height);
					gradient.addColorStop(0, "#6fa2cb");
					gradient.addColorStop(1, "#092968");
					ctx.fillStyle = gradient;
					ctx.fillRect(posX, posY + barHeight, barWidth, canvas.height + barWidth);
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
			draw(active);
			frameId = window.requestAnimationFrame(render);
		};
		render();

		return () => {
			window.cancelAnimationFrame(frameId);
		};
	}, [draw]);

	const populatePool = () => {
		for (let i = 0; i < 23; i++) {
			barPool.current.push({
				position: i * 14,
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
