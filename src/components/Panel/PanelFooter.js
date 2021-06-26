import React from "react";
import ActionButton from "../ActionButton";

const PanelFooter = props => {
	return (
		<div className="controls-section">
			<div className="controls-deco circle"></div>
			<ActionButton action={props.onDeactivate} />
			<ActionButton action={props.onActivate} />
			<div className="triangle">&#9650;</div>
		</div>
	);
};

export default PanelFooter;
