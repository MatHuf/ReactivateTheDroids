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
			<div className="data-section">
				<div className="data-column-subdivided">
					<div className="data-column data-column-left">
						<div></div>
						<div className="data-column-inner">
							T<br />Q
						</div>
					</div>
					<div className="data-column-detail"></div>
				</div>
				<div className="data-column">
					<div></div>
					<div className="data-column-inner"></div>
				</div>
				<div className="data-column">
					<div></div>
					<div className="data-column-inner"></div>
				</div>
				<div className="data-column data-column-right">
					<div></div>
					<div className="data-column-inner"></div>
				</div>
			</div>
			<div className="droid-section">
				<div className="droid-display">
					<div className="display-side-container">
						<div className="display-top-right"></div>
						<div className="display-segmented-container display-segment-margin">
							<div className="display-left-segment"></div>
							<div className="display-center-lower-segment"></div>
							<div className="display-right-segment"></div>
						</div>
					</div>
					<div></div>
					<div className="display-side-container">
						<div className="display-segmented-container">
							<div className="display-left-segment"></div>
							<div className="display-center-upper-segment"></div>
							<div className="display-right-segment"></div>
						</div>
						<div className="display-segmented-container display-segment-margin">
							<div className="display-left-segment"></div>
							<div className="display-center-lower-segment"></div>
							<div className="display-right-segment"></div>
						</div>
					</div>
				</div>
				<div className="droid-footer">
					<div className="footer-outer">
						<div className="footer-inner footer-inner-left">
							<div className="faux-button faux-button-left"></div>
						</div>
					</div>
					<div className="footer-center-outer">
						<div className="footer-outline-break-container">
							<div className="break-top-left">
								<div className="break-top-extention"></div>
							</div>
							<div className="break-center"></div>
							<div></div>
							<div className="break-bottom-left"></div>
						</div>
						<div className="faux-button-container">
							<div className="faux-button faux-button-text">&lt;</div>
							<div className="faux-button faux-button-center"></div>
							<div className="faux-button faux-button-text">&gt;</div>
						</div>
						<div className="footer-outline-break-container">
							<div className="break-top-right">
								<div className="break-top-extention"></div>
							</div>
							<div className="break-center"></div>
							<div></div>
							<div className="break-bottom-right"></div>
						</div>
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
