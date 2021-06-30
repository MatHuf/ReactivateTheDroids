import React from "react";
import Lottie from "../Lottie";
import B1_Activate_Draft from "../../animations/B1_Activate_Draft.json";
import "./panelMain.css";

const PanelMain = props => {
	return (
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
				<Lottie
					animation={B1_Activate_Draft}
					playState={props.animationState}
					onComplete={props.onComplete}
					direction={props.direction}
					className={"animation-container"}
				/>
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
	);
};

export default PanelMain;
