(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ProductPreviewResponse', '../model/ProductPreviewRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ProductPreviewResponse'), require('../model/ProductPreviewRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    root.SwaggerJsClient.ProductpreviewApi = factory(root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.ProductPreviewResponse, root.SwaggerJsClient.ProductPreviewRequest);
  }
}(this, function(ApiClient, ProductPreviewResponse, ProductPreviewRequest) {
  'use strict';

  var ProductpreviewApi = function ProductpreviewApi(apiClient) {
    this.apiClient = apiClient || ApiClient.default;

    var self = this;
    
    
    /**
     * Submit an image (or images) to be rendered into a product preview.
     * Submit an image (or images) to be rendered into a product preview.
     * @param {ProductPreviewRequest} productPreviewRequest Request detailing the operation needing completed
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: ProductPreviewResponse
     */
    self.pOSTProductpreview = function(productPreviewRequest, callback) {
      var postBody = productPreviewRequest;
      
      // verify the required parameter 'productPreviewRequest' is set
      if (productPreviewRequest == null) {
        throw "Missing the required parameter 'productPreviewRequest' when calling pOSTProductpreview";
      }
      

      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ProductPreviewResponse;

      return this.apiClient.callApi(
        '/productpreview/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );

    }
    
    
  };

  return ProductpreviewApi;
}));
