"use strict";function loadFontsByJs(){document.addEventListener("DOMContentLoaded",()=>{const style=document.createElement('style');style.textContent=`
			@font-face {
			font-family: "gilroy-bold";
			font-weight: bold;
			font-display: swap;
			src: url("${themePath}/assets/fonts/Gilroy-Bold.otf") format("opentype");
			}

			@font-face {
			font-family: "GilroyRegular";
			font-weight: 300;
			font-display: swap;
			src: url("${themePath}/assets/fonts/Gilroy-Regular.otf") format("opentype");
			}

			@font-face {
			font-family: "Gilroy-regular";
			font-weight: 400;
			font-display: swap;
			src: url("${themePath}/assets/fonts/Gilroy-Medium.otf") format("opentype");
			}

			@font-face {
			font-family: "Gilroy-SemiBold";
			font-weight: 500;
			font-display: swap;
			src: url("${themePath}/assets/fonts/Gilroy-SemiBold.otf") format("opentype");
			}

			@font-face {
			font-family: "Gilroy-Medium";
			font-weight: 400;
			src: url("${themePath}/assets/fonts/Gilroy-Medium.otf") format("opentype");
			}
			@font-face {
			font-family: "cocogoose-pro-thin";
			font-weight: 400;
			src: url("${themePath}/assets/fonts/Cocogoose-Pro-Thin-trial.ttf") format("opentype");
			}

			@font-face {
			font-family: "cocogoose";
			font-weight: 400;
			src: url("${themePath}/assets/fonts/Cocogoose-Pro-trial.ttf") format("opentype");
			}
		`;document.head.appendChild(style);var link=document.createElement('link');link.rel='stylesheet';link.href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';document.getElementsByTagName('HEAD')[0].appendChild(link)})}
loadFontsByJs()