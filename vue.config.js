module.exports = {
    pages: {
        index: {
            entry: 'src/main.ts',
            title: 'Stitcher'
        }
    },
    devServer: {
        port: '5183',
        open: true,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    // publicPath: './'
}