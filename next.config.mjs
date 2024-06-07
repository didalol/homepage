import mdx from "@next/mdx"
const withMDX = mdx();

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure pageExtensions to support MDX
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

export default withMDX(nextConfig);;


