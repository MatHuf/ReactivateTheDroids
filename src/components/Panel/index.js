import React, { useState, useCallback } from "react";
import PanelHeader from "./PanelHeader";
import PanelMain from "./PanelMain";
import PanelFooter from "./PanelFooter";
import { lottiePlayStates, lottiePlayDirections } from "../Lottie";
import { useSignal } from "../../context/signalContext";
import { useActivation } from "../../context/activationContext";
import "./panel.css";

const Panel = () => {
	const [signal, setSignal] = useSignal();
	const [active, setActive] = useActivation(false);
	const [mainAnimationState, setMainAnimationState] = useState(lottiePlayStates.stop);
	const [mainAnimationDirection, setMainAnimationDirection] = useState(
		lottiePlayDirections.forward
	);

	const activate = () => {
		if (signal) {
			active
				? setMainAnimationDirection(lottiePlayDirections.reverse)
				: setMainAnimationDirection(lottiePlayDirections.forward);
			setActive(!active);
			setMainAnimationState(lottiePlayStates.play);
		}
	};

	const disconnect = () => {
		setSignal(!signal);
	};

	const onActivateComplete = useCallback(() => setMainAnimationState(lottiePlayStates.pause), []);

	return (
		<div className="panel-container">
			<PanelHeader />
			<PanelMain
				animationState={mainAnimationState}
				direction={mainAnimationDirection}
				onComplete={onActivateComplete}
			/>
			<PanelFooter onActivate={activate} onDisconnect={disconnect} />
		</div>
	);
};

export default Panel;
