
const path = require('path');
const webpack = require('webpack');
module.exports = {
    publicPath: '/',
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: [
                path.resolve(__dirname,'./src/assets/css/variable.scss')
            ]
        }
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                jQuery: 'jquery',
                $: 'jquery'
            })
        ]
    }
    
}
