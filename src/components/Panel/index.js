import React, { useState } from "react";
import PanelHeader from "./PanelHeader";
import PanelMain from "./PanelMain";
import PanelFooter from "./PanelFooter";
import { lottiePlayStates } from "../Lottie";
import "./panel.css";

const Panel = props => {
	const [mainAnimationState, setMainAnimationState] = useState(lottiePlayStates.stop);

	const activate = () => {
		setMainAnimationState(lottiePlayStates.play);
	};

	const deactivate = () => {
		console.log("deactivate clicked");
	};

	return (
		<div className="panel-container">
			<PanelHeader />
			<PanelMain animationState={mainAnimationState} />
			<PanelFooter onActivate={activate} onDeactivate={deactivate} />
		</div>
	);
};

export default Panel;
