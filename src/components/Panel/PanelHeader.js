import React from "react";
import SegmentedMarker from "./SegmentedMarker";
import SmallMarker from "./SmallMarker";
import { useSignal } from "../../context/signalContext";
import "./panelHeader.css";

const PanelHeader = props => {
	const [signal] = useSignal();

	let pausedClassName = signal ? "" : "paused";

	return (
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
					<div className="markers-container">
						<div className={`small-marker-container marker-group-1 ${pausedClassName}`}>
							<SmallMarker />
						</div>
						<div className={`segmented-marker-container marker-group-1 ${pausedClassName}`}>
							<SegmentedMarker />
						</div>
					</div>
					I<br />M<br />O<br />4
				</div>
			</div>
			<div className="data-column">
				<div></div>
				<div className="data-column-inner flex-to-bottom-right">
					<div className="markers-container">
						<div className={`small-marker-container marker-group-2 ${pausedClassName}`}>
							<SmallMarker />
						</div>
						<div className={`segmented-marker-container marker-group-2 ${pausedClassName}`}>
							<SegmentedMarker />
						</div>
					</div>
					U<br />X<br />9<br />F
				</div>
			</div>
			<div className="data-column data-column-right">
				<div></div>
				<div className="data-column-inner flex-to-bottom-right">
					<div className="markers-container">
						<div className={`small-marker-container marker-group-3 ${pausedClassName}`}>
							<SmallMarker />
						</div>
						<div className={`segmented-marker-container marker-group-3 ${pausedClassName}`}>
							<SegmentedMarker />
						</div>
					</div>
					8<br />K<br />T
				</div>
			</div>
		</div>
	);
};

export default PanelHeader;
