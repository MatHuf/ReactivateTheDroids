import React from "react";
import Lottie, { lottiePlayStates } from "../Lottie";
import B1_Activate_Rev1 from "../../animations/B1_Activate_Rev1.json";
import Warning from "../../animations/Warning.json";
import { useSignal } from "../../context/signalContext";
import "./panelMain.css";

const PanelMain = props => {
	const [signal] = useSignal();

	return (
		<div className="droid-section">
			<div className="droid-display">
				<div className="display-side-container">
					<div className="display-top-left flex-to-bottom-right overflow-hidden">
						E<br />Y
					</div>
					<div className="display-segmented-container display-segment-margin">
						<div className="display-left-segment"></div>
						<div className="display-center-lower-segment"></div>
						<div className="display-right-segment flex-to-bottom-right overflow-hidden">
							N<br />H<br />D
						</div>
					</div>
				</div>
				{!signal && (
					<div className="warning-container">
						<div className="warning-inner">
							<div className="display-left-segment"></div>
							<div></div>
							<div className="display-right-segment"></div>
							<Lottie
								animation={Warning}
								playState={lottiePlayStates.play}
								loop={true}
								className={"warning-animation"}
							/>
						</div>
					</div>
				)}
				<Lottie
					animation={B1_Activate_Rev1}
					playState={props.animationState}
					onComplete={props.onComplete}
					direction={props.direction}
					className={"animation-container"}
				/>
				<div className="display-side-container">
					<div className="display-segmented-container">
						<div className="display-left-segment flex-to-bottom-left overflow-hidden">
							H<br />O<br />T
						</div>
						<div className="display-center-upper-segment"></div>
						<div className="display-right-segment"></div>
					</div>
					<div className="display-segmented-container display-segment-margin">
						<div className="display-left-segment flex-to-bottom-left overflow-hidden">
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
