/** @type {import('next').NextConfig} */

const nextConfig = {
    //Enable PPR
    //{/*The 'incremental' value allows to adopt PPR for specific routes. */ }
    experimental: {
        ppr: 'incremental',//incremental
    },
};

export default nextConfig;
