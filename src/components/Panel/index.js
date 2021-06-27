import React, { useState, useCallback } from "react";
import PanelHeader from "./PanelHeader";
import PanelMain from "./PanelMain";
import PanelFooter from "./PanelFooter";
import { lottiePlayStates, lottiePlayDirections } from "../Lottie";
import "./panel.css";

const Panel = props => {
	const [mainActive, setMainActivate] = useState(false);
	const [mainAnimationState, setMainAnimationState] = useState(lottiePlayStates.stop);
	const [mainAnimationDirection, setMainAnimationDirection] = useState(lottiePlayDirections.forward);

	const activate = () => {
		switch (mainActive) {
			case false:
				setMainAnimationDirection(lottiePlayDirections.forward);
				setMainAnimationState(lottiePlayStates.play);
				setMainActivate(true);
				break;
			case true:
				setMainAnimationDirection(lottiePlayDirections.reverse);
				setMainAnimationState(lottiePlayStates.play);
				setMainActivate(false);
				break;
			//no default
		}
	};

	const deactivate = () => {
		console.log("deactivate clicked");
	};

	const onActivateComplete = useCallback(() => setMainAnimationState(lottiePlayStates.pause), []);

	return (
		<div className="panel-container">
			<PanelHeader />
			<PanelMain animationState={mainAnimationState} direction={mainAnimationDirection} onComplete={onActivateComplete} />
			<PanelFooter onActivate={activate} onDeactivate={deactivate} />
		</div>
	);
};

export default Panel;
