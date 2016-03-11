(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Order', '../model/OrderPriceResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Order'), require('../model/OrderPriceResult'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    root.SwaggerJsClient.PriceestimateApi = factory(root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.Order, root.SwaggerJsClient.OrderPriceResult);
  }
}(this, function(ApiClient, Order, OrderPriceResult) {
  'use strict';

  var PriceestimateApi = function PriceestimateApi(apiClient) {
    this.apiClient = apiClient || ApiClient.default;

    var self = this;
    
    
    /**
     * Get an order price
     * Get the price of an order, including discounts from a coupon.
     * @param {Order} order Order to potentially be submitted
     * @param {Integer} version Version of the api being used
     * @param {String} source Description of the source-- ios, android, api
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: OrderPriceResult
     */
    self.pOSTPriceestimate = function(order, version, source, callback) {
      var postBody = order;
      
      // verify the required parameter 'order' is set
      if (order == null) {
        throw "Missing the required parameter 'order' when calling pOSTPriceestimate";
      }
      
      // verify the required parameter 'version' is set
      if (version == null) {
        throw "Missing the required parameter 'version' when calling pOSTPriceestimate";
      }
      
      // verify the required parameter 'source' is set
      if (source == null) {
        throw "Missing the required parameter 'source' when calling pOSTPriceestimate";
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
      var returnType = OrderPriceResult;

      return this.apiClient.callApi(
        '/priceestimate/v/{version}/source/{source}/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );

    }
    
    
  };

  return PriceestimateApi;
}));
