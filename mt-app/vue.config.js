let path = require('path')
let webpack = require("webpack")
let fs = require("fs");

function resolve(dir) {
    console.log(__dirname)
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: './',
    chainWebpack: config => {
        config.resolve.alias.set('@', resolve('src'))
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery",
                Popper: ["popper.js", "default"]
            })
        ]
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080/',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            },
        }
    },
    // css: {
    //     loaderOptions: {
    //         sass: {
    //             data: fs.readFileSync('src/assets/css/variable.scss', 'utf-8')
    //         }
    //     }
    // }
}
