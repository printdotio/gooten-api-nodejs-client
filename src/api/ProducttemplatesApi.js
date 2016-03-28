(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ProductBuildInfoResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ProductBuildInfoResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.GootenApiClient) {
      root.GootenApiClient = {};
    }
    root.GootenApiClient.ProducttemplatesApi = factory(root.GootenApiClient.ApiClient, root.GootenApiClient.ProductBuildInfoResponse);
  }
}(this, function(ApiClient, ProductBuildInfoResponse) {
  'use strict';

  var ProducttemplatesApi = function ProducttemplatesApi(apiClient) {
    this.apiClient = apiClient || ApiClient.default;

    var self = this;
    
    
    /**
     * Get a list of product templates
     * Get a list of product templates.
     * @param {String} sku Productvariant sku.
     * @param {String} opts['languageCode'] Two-character language code, defaults to \&quot;en\&quot; (english)
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: ProductBuildInfoResponse
     */
    self.getProducttemplates = function(sku, opts, callback) {
      opts = opts || {};
      var postBody = null;
      
      // verify the required parameter 'sku' is set
      if (sku == null) {
        throw "Missing the required parameter 'sku' when calling getProducttemplates";
      }
      

      var pathParams = {
      };
      var queryParams = {
        'sku': sku,
        'languageCode': opts['languageCode']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ProductBuildInfoResponse;

      return this.apiClient.callApi(
        '/producttemplates/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );

    }
    
    
  };

  return ProducttemplatesApi;
}));
