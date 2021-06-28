import React from "react";
import ActionButton from "../ActionButton";
import "./panelFooter.css";

const PanelFooter = props => {
	const activateButtonContent = (
		<div className="main-button-container">
			<div className="main-button-text-left">
				Z<br />T
			</div>
			<div className="main-button-text-right">
				O<br />H<br />4
			</div>
		</div>
	);

	return (
		<div className="controls-section">
			<div className="controls-deco circle"></div>
			<ActionButton action={props.onDeactivate} />
			<ActionButton action={props.onActivate} content={activateButtonContent} />
			<div className="triangle">&#9650;</div>
		</div>
	);
};

export default PanelFooter;
