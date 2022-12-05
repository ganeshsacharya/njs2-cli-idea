module.exports = {
    command: 'project <project-name>',
    description: 'Create new Njs2 Project',
    body: (yargs) => {
        return yargs.positional('project-name', {
            describe: 'Your backend project name',
            default: "rest-server",
            alias: "P"
        })
    }
}