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
			<div className="droid-section">
				<div className="droid-footer">
					<div className="footer-outer">
						<div className="footer-inner footer-inner-left">
							<div className="faux-button faux-button-left"></div>
						</div>
					</div>
					<div className="footer-center-outer">
						<div className="faux-button faux-button-triple"></div>
						<div className="faux-button faux-button-text"></div>
						<div className="faux-button faux-button-center"></div>
						<div className="faux-button faux-button-text"></div>
						<div className="faux-button faux-button-triple"></div>
					</div>
					<div className="footer-outer">
						<div className="footer-inner footer-inner-right">
							<div className="faux-button faux-button-right"></div>
						</div>
					</div>
				</div>
			</div>
			<div className="controls-section">
				<div className="controls-deco circle"></div>
				<ActionButton action={deactivate} />
				<ActionButton action={activate} />
				<div className="controls-deco triangle"></div>
			</div>
		</div>
	);
};

export default Panel;
