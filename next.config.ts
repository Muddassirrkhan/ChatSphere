import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
		remotePatterns: [
			{ hostname: "acoustic-gull-168.convex.cloud" },
		//	{ hostname: "oaidalleapiprodscus.blob.core.windows.net" },
		],
	},
};

export default nextConfig;
