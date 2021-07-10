import React, { useEffect, useState, useRef } from "react";
import lottie from "lottie-web";

const Lottie = props => {
	const [lottieInstance, setLottieInstance] = useState();
	const lottieContainer = useRef();

	useEffect(() => {
		if (props.animation) {
			let lottieConfig = {
				animationData: props.animation,
				container: lottieContainer.current,
				loop: props.loop ?? false,
			};
			let newInstance = lottie.loadAnimation(lottieConfig);
			if (lottieInstance) {
				lottieInstance.destroy();
			}
			if (props.onComplete) {
				newInstance.addEventListener("complete", props.onComplete);
			}
			setLottieInstance(newInstance);
		}
	}, [props.animation]); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		if (lottieInstance && props.playState) {
			switch (props.playState) {
				case lottiePlayStates.play:
					lottieInstance.play();
					break;
				case lottiePlayStates.pause:
					lottieInstance.pause();
					break;
				case lottiePlayStates.stop:
					lottieInstance.stop();
					break;
				// no default
			}
		}
	}, [props.playState, lottieInstance]);

	useEffect(() => {
		if (lottieInstance && props.direction) {
			lottieInstance.setDirection(props.direction);
		}
	}, [props.direction, lottieInstance]);

	useEffect(() => {
		return () => {
			// TODO how to handle this if onComplete gets changed?
			if (props.onComplete && lottieInstance) {
				lottieInstance.removeEventListener("complete", props.onComplete);
			}
		};
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return <div ref={lottieContainer} className={props.className ?? ""}></div>;
};

export default Lottie;

export const lottiePlayStates = {
	play: "play",
	pause: "pause",
	stop: "stop",
};

export const lottiePlayDirections = {
	forward: 1,
	reverse: -1,
};
