const webpack = require('webpack');
const path = require('path');
const SellData = require('./src/mock/data.json')
const seller = SellData.seller
const goods = SellData.goods
const ratings = SellData.ratings

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    port: 9000,
    before: function(app, server) {
      app.get('/api/seller', (req, res) => {
        res.json({
          data: seller
        })
      })
      app.get('/api/goods', (req, res) => {
        res.json({
          data: goods
        })
      })
      app.get('/api/ratings', (req, res) => {
        res.json({
          data: ratings
        })
      })
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
