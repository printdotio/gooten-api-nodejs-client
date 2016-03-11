(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/PostSubmittedOrder', '../model/OrderResult', '../model/PostOrder'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PostSubmittedOrder'), require('../model/OrderResult'), require('../model/PostOrder'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    root.SwaggerJsClient.OrdersApi = factory(root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.PostSubmittedOrder, root.SwaggerJsClient.OrderResult, root.SwaggerJsClient.PostOrder);
  }
}(this, function(ApiClient, PostSubmittedOrder, OrderResult, PostOrder) {
  'use strict';

  var OrdersApi = function OrdersApi(apiClient) {
    this.apiClient = apiClient || ApiClient.default;

    var self = this;
    
    
    /**
     * Get an order
     * Gets basic information about an order.
     * @param {String} id Order Id
     * @param {Integer} version Version of the api being used
     * @param {String} source Description of the source-- ios, android, api
     * @param {String} opts['languageCode'] Resultant info language. Defaults to &#39;en&#39;.
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: PostSubmittedOrder
     */
    self.gETOrders = function(id, version, source, opts, callback) {
      opts = opts || {};
      var postBody = null;
      
      // verify the required parameter 'id' is set
      if (id == null) {
        throw "Missing the required parameter 'id' when calling gETOrders";
      }
      
      // verify the required parameter 'version' is set
      if (version == null) {
        throw "Missing the required parameter 'version' when calling gETOrders";
      }
      
      // verify the required parameter 'source' is set
      if (source == null) {
        throw "Missing the required parameter 'source' when calling gETOrders";
      }
      

      var pathParams = {
        'version': version,
        'source': source
      };
      var queryParams = {
        'id': id,
        'languageCode': opts['languageCode']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PostSubmittedOrder;

      return this.apiClient.callApi(
        '/orders/v/{version}/source/{source}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );

    }
    
    /**
     * Submit an order
     * Places an order into the system. An order can be submitted as PrePayment (in order to temporarily place an order and get an ID for Paypal) using the IsPreSubmit flag.
     * @param {PostOrder} order Order to be submitted
     * @param {Integer} version Version of the api being used
     * @param {String} source Description of the source-- ios, android, api
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: OrderResult
     */
    self.pOSTOrders = function(order, version, source, callback) {
      var postBody = order;
      
      // verify the required parameter 'order' is set
      if (order == null) {
        throw "Missing the required parameter 'order' when calling pOSTOrders";
      }
      
      // verify the required parameter 'version' is set
      if (version == null) {
        throw "Missing the required parameter 'version' when calling pOSTOrders";
      }
      
      // verify the required parameter 'source' is set
      if (source == null) {
        throw "Missing the required parameter 'source' when calling pOSTOrders";
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
      var returnType = OrderResult;

      return this.apiClient.callApi(
        '/orders/v/{version}/source/{source}/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );

    }
    
    
  };

  return OrdersApi;
}));
