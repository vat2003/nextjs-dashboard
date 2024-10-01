/** @type {import('next').NextConfig} */

const nextConfig = {
    //Enable PPR
    //{/*The 'incremental' value allows to adopt PPR for specific routes. */ }
    experimental: {
        ppr: true,//incremental
    },
};

export default nextConfig;
