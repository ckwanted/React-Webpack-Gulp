module.exports = {
    entry : './src/index.js',

    output : {
        filename: './src/assets/js/bundle.js'
    },

    module : {
        loaders : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                loaders : ['babel-loader']
            }
        ]
    }
};