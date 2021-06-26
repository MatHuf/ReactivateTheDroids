import React, { useState } from "react";
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
				setMainAnimationState(lottiePlayStates.play);
				setMainAnimationDirection(lottiePlayDirections.forward);
				setMainActivate(true);
				break;
			case true:
				setMainAnimationState(lottiePlayStates.play);
				setMainAnimationDirection(lottiePlayDirections.reverse);
				setMainActivate(false);
				break;
			//no default
		}
	};

	const deactivate = () => {
		console.log("deactivate clicked");
	};

	return (
		<div className="panel-container">
			<PanelHeader />
			<PanelMain animationState={mainAnimationState} direction={mainAnimationDirection} />
			<PanelFooter onActivate={activate} onDeactivate={deactivate} />
		</div>
	);
};

export default Panel;
