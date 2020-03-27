'use strict';

const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        search: './src/search.js'
    },
    output:{
        path:path.join(__dirname,'dist'),
        filename:'[name].js'
    },
    mode:'production',
    module:{
        rules:[
            // 解析ES6
            {
                test: /(\.jsx|\.js)$/, //可以使用ES6模式
                use: "babel-loader"
            }
        ]
    }
};