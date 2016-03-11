(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ShippingPricesRequest', '../model/ShippingPricesResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ShippingPricesRequest'), require('../model/ShippingPricesResult'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    root.SwaggerJsClient.ShippingpricesApi = factory(root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.ShippingPricesRequest, root.SwaggerJsClient.ShippingPricesResult);
  }
}(this, function(ApiClient, ShippingPricesRequest, ShippingPricesResult) {
  'use strict';

  var ShippingpricesApi = function ShippingpricesApi(apiClient) {
    this.apiClient = apiClient || ApiClient.default;

    var self = this;
    
    
    /**
     * Get a list of shipping options and prices for items
     * Get a list of shipping options and prices for items.
     * @param {ShippingPricesRequest} shippingPricesRequest DTO with required information
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: ShippingPricesResult
     */
    self.pOSTShippingprices = function(shippingPricesRequest, callback) {
      var postBody = shippingPricesRequest;
      
      // verify the required parameter 'shippingPricesRequest' is set
      if (shippingPricesRequest == null) {
        throw "Missing the required parameter 'shippingPricesRequest' when calling pOSTShippingprices";
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
      var returnType = ShippingPricesResult;

      return this.apiClient.callApi(
        '/shippingprices/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );

    }
    
    
  };

  return ShippingpricesApi;
}));
