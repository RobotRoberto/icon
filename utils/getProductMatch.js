module.exports = {
    getProductMatch: function(imageToMatch) {
        const vision = require('@google-cloud/vision').v1p3beta1;
        const productSearchClient = new vision.ProductSearchClient();
        const imageAnnotatorClient = new vision.ImageAnnotatorClient();

        const projectId = 'enstyle-220706';
        const location = 'us-east1';
        const productSetId = 'test_data';
        const productCategory = 'apparel';   

        const productSetPath = productSearchClient.productSetPath(
            projectId,
            location,
            productSetId
        )

        const request = {
            image: {content: imageToMatch},
            features: [{type: 'PRODUCT_SEARCH'}],
            imageContext: {
                productSearchParams: {
                    productSet: productSetPath,
                    productCategories: [productCategory]
                }
            }
        }

        imageAnnotatorClient
            .batchAnnotateImages({ requests: [request]})
            .then(responses => {
                return responses[0]
            })
    }
}