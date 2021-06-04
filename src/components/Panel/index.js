import ActionButton from "../ActionButton";
import "./panel.css";

const Panel = props => {
	const activate = () => {
		console.log("activate clicked");
	};

	const deactivate = () => {
		console.log("deactivate clicked");
	};

	return (
		<div className="panel-container">
			<div className="data-section"></div>
			<div className="droid-section"></div>
			<div className="controls-section">
				<ActionButton action={deactivate} />
				<ActionButton action={activate} />
			</div>
		</div>
	);
};

export default Panel;
