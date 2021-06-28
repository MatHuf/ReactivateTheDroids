import "./actionButton.css";

const ActionButton = props => {
	return (
		<div className="action-button-container" onClick={props.action}>
			<div className="action-button-active-center">{props.content && props.content}</div>
			<div className="action-button-top"></div>
			<div className="action-button-mid"></div>
			<div className="action-button-bottom"></div>
		</div>
	);
};

export default ActionButton;
