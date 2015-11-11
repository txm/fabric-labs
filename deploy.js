var fs = require('fs')
var knox = require('knox')
var S3Deployer = require('deploy-s3')

// Read your package.json file
var pkg = JSON.parse(fs.readFileSync('./deploy.json'))

// Read your access key and secret key
var credentials = JSON.parse(fs.readFileSync('./credentials.json'))

// Choose your bucket
credentials.bucket = 'labs.txm.net'

// Create a client with your credentials
var client = knox.createClient(credentials)

// Create a new S3Deployer 
var deployer = new S3Deployer(pkg, client)

var doneHandler = (function() { console.log('Done') })
var failHandler = console.error
var progressHandler = console.log

// deploy() returns a promise and notifies of each uploaded file
deployer.deploy().then(doneHandler, failHandler, progressHandler)
