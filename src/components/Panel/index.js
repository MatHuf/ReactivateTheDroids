import PanelButton from "../PanelButton";
import "./panel.css";

const Panel = props => {
	return (
		<div className="panel-container">
			<div className="data-section"></div>
			<div className="droid-section"></div>
			<div className="controls-section">
				<PanelButton />
				<PanelButton />
			</div>
		</div>
	);
};

export default Panel;
