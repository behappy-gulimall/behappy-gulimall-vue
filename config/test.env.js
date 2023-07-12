'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  OSS: '"http://behappy-xiaowu.oss-cn-beijing.aliyuncs.com"',
})
