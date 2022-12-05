#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

// yargs(hideBin(process.argv))
// 	.strict()
//     .scriptName("njs22")
//     .command('project <project-name>', 'Create new Njs2 Project', (yargs) => {
//         return yargs
//         .positional('project-name', {
//             describe: 'Your backend project name',
//             default: "rest-server",
//             alias: "P"
//         })
//     }, (argv) => {
//         if (argv.verbose) console.info(`Creating a new Njs2 Project by name: ${argv['project-name']}`)
//         console.log(argv)
//     })
// 	.command('endpoint <endpoint-name>', 'Create new Endpoint for Njs2 Project', (yargs) => {
//         return yargs
//         .positional('endpoint-name', {
//             describe: 'Your Endpoint name',
//             default: "test.details",
//             alias: "E"
//         })
//     }, (argv) => {
//         if (argv.verbose) console.info(`Creating a new Njs2 Project by name: ${argv['endpoint-name']}`)
//         console.log(argv)
//     })
// 	.demandCommand(1, '')
//     .option('verbose', {
//         alias: 'v',
//         type: 'boolean',
//         description: 'Run with verbose logging'
//     })
//     .parse()

const requireDir = require("require-dir")

const allCommands = requireDir("./commands", {
    recurse: true
})

const yARGS = yargs(hideBin(process.argv)).strict();

Object.values(allCommands)
	.reduce((all, commandData) => {
		const {describe: {command, description, body}, index: response} = commandData;
		return all.command(command, description, body, response)
	}, yARGS)
	.demandCommand(1, '')
    .option('verbose', {
        alias: 'v',
        type: 'boolean',
        description: 'Run with verbose logging'
    })
    .parse()


