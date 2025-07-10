import fbteePreset from "@nkzw/babel-preset-fbtee";
import react from "@vitejs/plugin-react";

export default {
	plugins: [
		react({
			babel: {
				presets: [fbteePreset],
			},
		}),
	],
};
