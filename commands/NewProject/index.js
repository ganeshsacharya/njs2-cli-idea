module.exports = (argv) => {
    if (argv.verbose) console.info(`Creating a new Njs2 Project by name: ${argv['project-name']}`)
    console.log(argv)
}