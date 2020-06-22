import React from "react";
import Config from "./Config";
import {
	EmailShareButton,
	EmailIcon,
	FacebookShareButton,
	FacebookIcon,
	FacebookMessengerShareButton,
	FacebookMessengerIcon,
	PinterestShareButton,
	PinterestIcon,
	RedditShareButton,
	RedditIcon,
	TelegramShareButton,
	TelegramIcon,
	TwitterShareButton,
	TwitterIcon,
	WhatsappShareButton,
	WhatsappIcon,
} from "react-share";

export default function ShareButtons() {
	return (
		<>
			<WhatsappShareButton title={Config.title} url={Config.url}>
				<WhatsappIcon round={true} />
			</WhatsappShareButton>
			<FacebookShareButton title={Config.title} url={Config.url}>
				<FacebookIcon round={true} />
			</FacebookShareButton>
			<FacebookMessengerShareButton title={Config.title} url={Config.url}>
				<FacebookMessengerIcon round={true} />
			</FacebookMessengerShareButton>
			<EmailShareButton subject={Config.title} body={Config.url}>
				<EmailIcon round={true} />
			</EmailShareButton>
			<PinterestShareButton description={Config.title}>
				<PinterestIcon round={true} />
			</PinterestShareButton>
			<RedditShareButton title={Config.title}>
				<RedditIcon round={true} />
			</RedditShareButton>
			<TelegramShareButton title={Config.title}>
				<TelegramIcon round={true} />
			</TelegramShareButton>
			<TwitterShareButton title={Config.title} url={Config.url}>
				<TwitterIcon round={true} />
			</TwitterShareButton>
		</>
	);
}
