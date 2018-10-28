// Imports the Google Cloud client library
const vision = require('@google-cloud/vision').v1p3beta1;

// Creates a client
const client = new vision.ProductSearchClient();

const projectId = 'enstyle-220706';
const location = 'us-east1';

const productSetPath = 'projects/' + projectId + '/locations/' + location + '/products/' + '5'

console.log(productSetPath)

client.getProduct({name: productSetPath})
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        console.log(err)
    })