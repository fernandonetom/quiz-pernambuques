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

export default function ShareButtons({ score }) {
	const title = `Minha nota foi ${score}, quanto você consegue?`;
	return (
		<>
			<WhatsappShareButton title={title} separator=" | " url={Config.url}>
				<WhatsappIcon round={true} />
			</WhatsappShareButton>
			<FacebookShareButton quote={title} url={Config.url}>
				<FacebookIcon round={true} />
			</FacebookShareButton>
			<EmailShareButton subject={title} separator=" | " body={Config.url}>
				<EmailIcon round={true} />
			</EmailShareButton>
			<RedditShareButton title={title} url={Config.url}>
				<RedditIcon round={true} />
			</RedditShareButton>
			<TelegramShareButton title={title} url={Config.url}>
				<TelegramIcon round={true} />
			</TelegramShareButton>
			<TwitterShareButton title={title} url={Config.url}>
				<TwitterIcon round={true} />
			</TwitterShareButton>
		</>
	);
}
