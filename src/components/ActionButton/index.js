import "./actionButton.css";

const ActionButton = props => {
	return (
		<div className="action-button-container" onClick={props.action}>
			<div
				className={`action-button-active-center ${
					props.active ? "action-button-container-animate" : ""
				}`}
			>
				{props.children}
			</div>
			<div className={`action-button-top ${props.active ? "action-button-top-animate" : ""}`}></div>
			<div className="action-button-mid"></div>
			<div
				className={`action-button-bottom ${props.active ? "action-button-bottom-animate" : ""}`}
			></div>
		</div>
	);
};

export default ActionButton;
