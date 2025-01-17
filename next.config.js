/** @type {import('next').NextConfig} */

const nextConfig = {
    async redirects() {
        return [
            {
                source: '/', // Quando acessar a raiz
                destination: '/home', // Redireciona para /home
                permanent: false, // Use "true" para redirecionamento permanente (301)
            },
        ];
    },
};

module.exports = nextConfig;