(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ShipEstimate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ShipEstimate'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    root.SwaggerJsClient.ShippriceestimateApi = factory(root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.ShipEstimate);
  }
}(this, function(ApiClient, ShipEstimate) {
  'use strict';

  var ShippriceestimateApi = function ShippriceestimateApi(apiClient) {
    this.apiClient = apiClient || ApiClient.default;

    var self = this;
    
    
    /**
     * Get a baseline ship price for an item
     * Price returned is an estimate which may or may not be realistically attainable.
     * @param {Integer} productId Product ID
     * @param {String} countryCode Country Code it will be shipped to
     * @param {String} opts['currencyCode'] Currency Code the estimate should be in. Defaults to USD.
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: ShipEstimate
     */
    self.getShippriceestimate = function(productId, countryCode, opts, callback) {
      opts = opts || {};
      var postBody = null;
      
      // verify the required parameter 'productId' is set
      if (productId == null) {
        throw "Missing the required parameter 'productId' when calling getShippriceestimate";
      }
      
      // verify the required parameter 'countryCode' is set
      if (countryCode == null) {
        throw "Missing the required parameter 'countryCode' when calling getShippriceestimate";
      }
      

      var pathParams = {
      };
      var queryParams = {
        'productId': productId,
        'countryCode': countryCode,
        'currencyCode': opts['currencyCode']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ShipEstimate;

      return this.apiClient.callApi(
        '/shippriceestimate/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );

    }
    
    
  };

  return ShippriceestimateApi;
}));
