(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/OrderStatusUpdateResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/OrderStatusUpdateResult'));
  } else {
    // Browser globals (root is window)
    if (!root.GootenApiClient) {
      root.GootenApiClient = {};
    }
    root.GootenApiClient.OrderstatusApi = factory(root.GootenApiClient.ApiClient, root.GootenApiClient.OrderStatusUpdateResult);
  }
}(this, function(ApiClient, OrderStatusUpdateResult) {
  'use strict';

  var OrderstatusApi = function OrderstatusApi(apiClient) {
    this.apiClient = apiClient || ApiClient.default;

    var self = this;
    
    
    /**
     * Update an order status
     * Update status of each order item.
     * @param {String} partnerBillingKey Partner billing key
     * @param {String} id Order Id
     * @param {String} orderStatusName Order status name for update
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: OrderStatusUpdateResult
     */
    self.pOSTOrderstatus = function(partnerBillingKey, id, orderStatusName, callback) {
      var postBody = null;
      
      // verify the required parameter 'partnerBillingKey' is set
      if (partnerBillingKey == null) {
        throw "Missing the required parameter 'partnerBillingKey' when calling pOSTOrderstatus";
      }
      
      // verify the required parameter 'id' is set
      if (id == null) {
        throw "Missing the required parameter 'id' when calling pOSTOrderstatus";
      }
      
      // verify the required parameter 'orderStatusName' is set
      if (orderStatusName == null) {
        throw "Missing the required parameter 'orderStatusName' when calling pOSTOrderstatus";
      }
      

      var pathParams = {
      };
      var queryParams = {
        'partnerBillingKey': partnerBillingKey,
        'id': id,
        'orderStatusName': orderStatusName
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = OrderStatusUpdateResult;

      return this.apiClient.callApi(
        '/orderstatus/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );

    }
    
    
  };

  return OrderstatusApi;
}));
