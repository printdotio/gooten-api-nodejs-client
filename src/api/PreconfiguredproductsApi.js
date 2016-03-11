(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/PreconfiguredProductsInsertResponse', '../model/PreconfiguredProductInsert', '../model/PreconfiguredProductsResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PreconfiguredProductsInsertResponse'), require('../model/PreconfiguredProductInsert'), require('../model/PreconfiguredProductsResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    root.SwaggerJsClient.PreconfiguredproductsApi = factory(root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.PreconfiguredProductsInsertResponse, root.SwaggerJsClient.PreconfiguredProductInsert, root.SwaggerJsClient.PreconfiguredProductsResponse);
  }
}(this, function(ApiClient, PreconfiguredProductsInsertResponse, PreconfiguredProductInsert, PreconfiguredProductsResponse) {
  'use strict';

  var PreconfiguredproductsApi = function PreconfiguredproductsApi(apiClient) {
    this.apiClient = apiClient || ApiClient.default;

    var self = this;
    
    
    /**
     * Insert a preconfigured product
     * Insert a preconfigured product into your recipe.
     * @param {PreconfiguredProductInsert} preconfiguredProductInsert The product to be inserted
     * @param {Integer} version Version of the api being used
     * @param {String} source Description of the source-- ios, android, api
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: PreconfiguredProductsInsertResponse
     */
    self.createPreconfiguredproducts = function(preconfiguredProductInsert, version, source, callback) {
      var postBody = preconfiguredProductInsert;
      
      // verify the required parameter 'preconfiguredProductInsert' is set
      if (preconfiguredProductInsert == null) {
        throw "Missing the required parameter 'preconfiguredProductInsert' when calling createPreconfiguredproducts";
      }
      
      // verify the required parameter 'version' is set
      if (version == null) {
        throw "Missing the required parameter 'version' when calling createPreconfiguredproducts";
      }
      
      // verify the required parameter 'source' is set
      if (source == null) {
        throw "Missing the required parameter 'source' when calling createPreconfiguredproducts";
      }
      

      var pathParams = {
        'version': version,
        'source': source
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
      var returnType = PreconfiguredProductsInsertResponse;

      return this.apiClient.callApi(
        '/preconfiguredproducts/v/{version}/source/{source}/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );

    }
    
    /**
     * Delete a preconfigured product
     * Delete a preconfigured product from your recipe.
     * @param {Integer} version Version of the api being used
     * @param {String} source Description of the source-- ios, android, api
     * @param {String} opts['sku'] The preconfigured product&#39;s sku.
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: PreconfiguredProductsInsertResponse
     */
    self.deletePreconfiguredproducts = function(version, source, opts, callback) {
      opts = opts || {};
      var postBody = null;
      
      // verify the required parameter 'version' is set
      if (version == null) {
        throw "Missing the required parameter 'version' when calling deletePreconfiguredproducts";
      }
      
      // verify the required parameter 'source' is set
      if (source == null) {
        throw "Missing the required parameter 'source' when calling deletePreconfiguredproducts";
      }
      

      var pathParams = {
        'version': version,
        'source': source
      };
      var queryParams = {
        'sku': opts['sku']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PreconfiguredProductsInsertResponse;

      return this.apiClient.callApi(
        '/preconfiguredproducts/v/{version}/source/{source}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );

    }
    
    /**
     * Get a list of your preconfigured products
     * Get a list of your preconfigured products. The products returned are entirely specific to your recipe.
     * @param {String} countryCode The country code where it would be shipped to. For example, &#39;US&#39; or &#39;CA&#39;
     * @param {Integer} version Version of the api being used
     * @param {String} source Description of the source-- ios, android, api
     * @param {String} opts['languageCode'] Two-character language code, defaults to \&quot;en\&quot; (english)
     * @param {String} opts['currencyCode'] Three character currency code, defaults to \&quot;USD\&quot; (united states dollar)
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: PreconfiguredProductsResponse
     */
    self.getPreconfiguredproducts = function(countryCode, version, source, opts, callback) {
      opts = opts || {};
      var postBody = null;
      
      // verify the required parameter 'countryCode' is set
      if (countryCode == null) {
        throw "Missing the required parameter 'countryCode' when calling getPreconfiguredproducts";
      }
      
      // verify the required parameter 'version' is set
      if (version == null) {
        throw "Missing the required parameter 'version' when calling getPreconfiguredproducts";
      }
      
      // verify the required parameter 'source' is set
      if (source == null) {
        throw "Missing the required parameter 'source' when calling getPreconfiguredproducts";
      }
      

      var pathParams = {
        'version': version,
        'source': source
      };
      var queryParams = {
        'countryCode': countryCode,
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
      var returnType = PreconfiguredProductsResponse;

      return this.apiClient.callApi(
        '/preconfiguredproducts/v/{version}/source/{source}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );

    }
    
    /**
     * Update a preconfigured product
     * Update a preconfigured product into your recipe.
     * @param {PreconfiguredProductInsert} preconfiguredProductInsert The product to be inserted
     * @param {Integer} version Version of the api being used
     * @param {String} source Description of the source-- ios, android, api
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: PreconfiguredProductsInsertResponse
     */
    self.updatePreconfiguredproducts = function(preconfiguredProductInsert, version, source, callback) {
      var postBody = preconfiguredProductInsert;
      
      // verify the required parameter 'preconfiguredProductInsert' is set
      if (preconfiguredProductInsert == null) {
        throw "Missing the required parameter 'preconfiguredProductInsert' when calling updatePreconfiguredproducts";
      }
      
      // verify the required parameter 'version' is set
      if (version == null) {
        throw "Missing the required parameter 'version' when calling updatePreconfiguredproducts";
      }
      
      // verify the required parameter 'source' is set
      if (source == null) {
        throw "Missing the required parameter 'source' when calling updatePreconfiguredproducts";
      }
      

      var pathParams = {
        'version': version,
        'source': source
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
      var returnType = PreconfiguredProductsInsertResponse;

      return this.apiClient.callApi(
        '/preconfiguredproducts/v/{version}/source/{source}/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );

    }
    
    
  };

  return PreconfiguredproductsApi;
}));
