/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'no-store', // Disable cache for this path
                    },
                ],
            },
        ]
    },
    images: {
        domains: ["res.cloudinary.com"],
    },
}
