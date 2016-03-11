(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ProductList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ProductList'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    root.SwaggerJsClient.ProductsApi = factory(root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.ProductList);
  }
}(this, function(ApiClient, ProductList) {
  'use strict';

  var ProductsApi = function ProductsApi(apiClient) {
    this.apiClient = apiClient || ApiClient.default;

    var self = this;
    
    
    /**
     * Get a list of products
     * Get a list of products. The products returned may have variants. Products returned are only those within the overall recipe. All images returned from the service are dynamically resizable by adding width and height querystrings.
     * @param {String} countryCode The country code where it would be shipped to. For example, &#39;US&#39; or &#39;CA&#39;
     * @param {Integer} version Version of the api being used
     * @param {String} source Description of the source-- ios, android, api
     * @param {String} opts['all'] Whether or not to return all available printio products, or just ones in your recipe. Pass &#39;true&#39; or &#39;false&#39;.
     * @param {String} opts['languageCode'] Two-character language code, defaults to \&quot;en\&quot; (english)
     * @param {String} opts['currencyCode'] Three character currency code, defaults to \&quot;USD\&quot; (united states dollar)
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: ProductList
     */
    self.getProducts = function(countryCode, version, source, opts, callback) {
      opts = opts || {};
      var postBody = null;
      
      // verify the required parameter 'countryCode' is set
      if (countryCode == null) {
        throw "Missing the required parameter 'countryCode' when calling getProducts";
      }
      
      // verify the required parameter 'version' is set
      if (version == null) {
        throw "Missing the required parameter 'version' when calling getProducts";
      }
      
      // verify the required parameter 'source' is set
      if (source == null) {
        throw "Missing the required parameter 'source' when calling getProducts";
      }
      

      var pathParams = {
        'version': version,
        'source': source
      };
      var queryParams = {
        'countryCode': countryCode,
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
      var returnType = ProductList;

      return this.apiClient.callApi(
        '/products/v/{version}/source/{source}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );

    }
    
    
  };

  return ProductsApi;
}));
