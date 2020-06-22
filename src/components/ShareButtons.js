import React from "react";
import Config from "./Config";
import {
	EmailShareButton,
	FacebookShareButton,
	LinkedinShareButton,
	PinterestShareButton,
	RedditShareButton,
	TelegramShareButton,
	TwitterShareButton,
	ViberShareButton,
	WhatsappShareButton,
	WhatsappIcon,
} from "react-share";

export default function ShareButtons() {
	return (
		<WhatsappShareButton title={Config.title} url={Config.url}>
			<WhatsappIcon round={true} />
		</WhatsappShareButton>
	);
}
