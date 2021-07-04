import React from "react";
import ActionButton from "../ActionButton";
import ScrollingChart from "../ScrollingChart";
import { useActivation } from "../../context/activationContext";
import "./panelFooter.css";

const PanelFooter = props => {
	const [active] = useActivation();

	const activateButtonContent = (
		<div className="button-content-container">
			<div className="button-text-left">
				Z<br />T
			</div>
			<div className="button-text-right">
				O<br />H<br />4
			</div>
		</div>
	);

	const signalButtonContent = (
		<div className="button-content-container chart-button-container">
			<div className="chart-display">
				<ScrollingChart />
			</div>
			<div className="button-text-left">O</div>
			<div className="button-text-right">
				9<br />J<br />T
			</div>
		</div>
	);

	return (
		<div className="controls-section">
			<div className="controls-deco circle"></div>
			{/* Signal button on left showing wave animation */}
			<ActionButton action={props.onDisconnect}>{signalButtonContent}</ActionButton>
			{/* Activate button on right */}
			<ActionButton action={props.onActivate} active={active}>
				{activateButtonContent}
			</ActionButton>
			<div className="triangle">&#9650;</div>
		</div>
	);
};

export default PanelFooter;
