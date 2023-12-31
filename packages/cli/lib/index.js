const commander = require("commander")
const {program} = commander;
const pkg = require('../package.json')

module.exports = function(args) {
    program
        .name(Object.keys(pkg.bin)[0])
        .usage('<command> [options]')
        .version(pkg.version)
        .option('-d, --debug', '是否开启调试模式', false);

    program
        .command("init [name]")
        .description("init p")
        .option("-f, --force", "是否强制更新", false)
        .action((name, options) => {
            console.log("init...", name, options);
        })

    program.parse(process.argv)
    console.log("lib-index", args)
}