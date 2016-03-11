(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ProductVariantResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ProductVariantResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    root.SwaggerJsClient.ProductvariantsApi = factory(root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.ProductVariantResponse);
  }
}(this, function(ApiClient, ProductVariantResponse) {
  'use strict';

  var ProductvariantsApi = function ProductvariantsApi(apiClient) {
    this.apiClient = apiClient || ApiClient.default;

    var self = this;
    
    
    /**
     * Get a list of available product variations. Includes pricing information
     * Get a list of all available product variations, or if one passes in a specific product type id (productId), gets a list of available variations of a recipe product.
     * @param {String} countryCode The country code the order would be shipped to. For example, &#39;US&#39; or &#39;FR&#39;
     * @param {String} productId Recipe product ID, such as those returned from the /products service
     * @param {Integer} version Version of the api being used
     * @param {String} source Description of the source-- ios, android, api, widget
     * @param {String} opts['all'] Whether or not to return all available printio products, or just ones in your recipe. Pass &#39;true&#39; or &#39;false&#39;.
     * @param {String} opts['languageCode'] Two-character language code, defaults to \&quot;en\&quot; (english)
     * @param {String} opts['currencyCode'] Three character currency code, defaults to \&quot;USD\&quot; (united states dollar)
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: ProductVariantResponse
     */
    self.getProductvariants = function(countryCode, productId, version, source, opts, callback) {
      opts = opts || {};
      var postBody = null;
      
      // verify the required parameter 'countryCode' is set
      if (countryCode == null) {
        throw "Missing the required parameter 'countryCode' when calling getProductvariants";
      }
      
      // verify the required parameter 'productId' is set
      if (productId == null) {
        throw "Missing the required parameter 'productId' when calling getProductvariants";
      }
      
      // verify the required parameter 'version' is set
      if (version == null) {
        throw "Missing the required parameter 'version' when calling getProductvariants";
      }
      
      // verify the required parameter 'source' is set
      if (source == null) {
        throw "Missing the required parameter 'source' when calling getProductvariants";
      }
      

      var pathParams = {
        'version': version,
        'source': source
      };
      var queryParams = {
        'countryCode': countryCode,
        'productId': productId,
        'all': opts['all'],
        'languageCode': opts['languageCode'],
        'currencyCode': opts['currencyCode']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ProductVariantResponse;

      return this.apiClient.callApi(
        '/productvariants/v/{version}/source/{source}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );

    }
    
    
  };

  return ProductvariantsApi;
}));
