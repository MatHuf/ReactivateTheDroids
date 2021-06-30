import React from "react";
import "./segmentedMarker.css";

const SegmentedMarker = () => {
	return (
		<div className="marker-container">
			<div className="marker marker-top"></div>
			<div className="marker marker-mid-upper"></div>
			<div className="marker marker-mid-lower"></div>
			<div className="marker marker-bottom"></div>
		</div>
	);
};

export default SegmentedMarker;
