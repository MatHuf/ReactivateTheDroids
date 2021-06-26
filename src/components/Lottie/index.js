import React, { useEffect, useState, useRef } from "react";
import lottie from "lottie-web";

const Lottie = props => {
	const [lottieInstance, setLottieInstance] = useState();
	const lottieContainer = useRef();

	// TODO handle this initial config better
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
			setLottieInstance(newInstance);
		}
	}, [props.animation]);

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

	// TODO add listener for onComplete event and provide prop for callback

	return <div id={props.id ?? ""} ref={lottieContainer} className={props.className ?? ""}></div>;
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
