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
						<div className="data-column-inner flex-to-bottom-left">
							<span>
								T<br />6
							</span>
						</div>
					</div>
					<div className="data-column-detail"></div>
				</div>
				<div className="data-column">
					<div></div>
					<div className="data-column-inner flex-to-bottom-right">
						I<br />M<br />O<br />4
					</div>
				</div>
				<div className="data-column">
					<div></div>
					<div className="data-column-inner flex-to-bottom-right">
						U<br />X<br />9<br />F
					</div>
				</div>
				<div className="data-column data-column-right">
					<div></div>
					<div className="data-column-inner flex-to-bottom-right">
						8<br />K<br />T
					</div>
				</div>
			</div>
			<div className="droid-section">
				<div className="droid-display">
					<div className="display-side-container">
						<div className="display-top-left flex-to-bottom-right">
							E<br />Y
						</div>
						<div className="display-segmented-container display-segment-margin">
							<div className="display-left-segment"></div>
							<div className="display-center-lower-segment"></div>
							<div className="display-right-segment flex-to-bottom-right">
								N<br />H<br />D
							</div>
						</div>
					</div>
					<div></div>
					<div className="display-side-container">
						<div className="display-segmented-container">
							<div className="display-left-segment flex-to-bottom-left">
								H<br />O<br />T
							</div>
							<div className="display-center-upper-segment"></div>
							<div className="display-right-segment"></div>
						</div>
						<div className="display-segmented-container display-segment-margin">
							<div className="display-left-segment flex-to-bottom-left">
								R<br />8<br />P
							</div>
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
				<div className="triangle">&#9650;</div>
			</div>
		</div>
	);
};

export default Panel;
