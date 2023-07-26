#! /usr/bin/env node

const importLocal = require("import-local")
const log = require("npmlog")
const entry = require("../lib/index.js")

// importLocal优先选用本地的版本
if(importLocal(__filename)) {
  log.info("cli", "使用zhztestcli")
} else {
  // 加载入口文件
  entry(process.argv.slice(2))
}