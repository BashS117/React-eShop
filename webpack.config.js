const path = require ('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');
const MiniCssExtractPlugin= require('mini-css-extract-plugin');

module.exports={
    entry:'./src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'react-eshop/bundle.js',
        publicpath: '/react-eshop/',
    },
    resolve:{
        extensions:['.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            assets: path.resolve(__dirname, 'src/assets/images/'),

            // '@assets' : path.resolve(__dirname, 'src/assets/images/'),
        },
        fallback: {
            util: require.resolve("util/"),
            fs: false,
          }
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use:[
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: "file-loader",
                
            },
            
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
            
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
                    ],
                
}