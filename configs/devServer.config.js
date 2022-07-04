const path = require('path')

module.exports = {
    contentBase: path.resolve(__dirname, '../static'),
    host: '127.0.0.1',
    port: 8888,
    compress: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    open: true,
}
