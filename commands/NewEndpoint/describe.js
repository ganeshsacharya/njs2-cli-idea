module.exports = {
    command: 'endpoint <endpoint-name>', 
    description: 'Create new Endpoint for Njs2 Project', 
    body: (yargs) => {
        return yargs.positional('endpoint-name', {
            describe: 'Your Endpoint name',
            default: "test.details",
            alias: "E"
        })
    }
}