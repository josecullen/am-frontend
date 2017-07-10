'use strict'
let nodeEnv = process.env.NODE_ENV || 'dev'

let config = {
  dev    : require('./dev.config.json')
}

module.exports = config[nodeEnv] || config.dev
