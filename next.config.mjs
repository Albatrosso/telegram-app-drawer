import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin("./src/core/i18n/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "",
    output: "standalone",
    async redirects() {
        return [
            {
                source: "/",
                destination: "/MainPage",
                permanent: true
            }
        ];
    }
};

export default withNextIntl(nextConfig);