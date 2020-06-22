import React from "react";
import ShareButtons from "../components/ShareButtons";

export default function Finish(props) {
	return (
		<div>
			finalizou, seu score é {props.score}
			<ShareButtons />
		</div>
	);
}
