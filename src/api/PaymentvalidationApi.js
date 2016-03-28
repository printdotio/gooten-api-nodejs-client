(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/PaymentValidationResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PaymentValidationResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.GootenApiClient) {
      root.GootenApiClient = {};
    }
    root.GootenApiClient.PaymentvalidationApi = factory(root.GootenApiClient.ApiClient, root.GootenApiClient.PaymentValidationResponse);
  }
}(this, function(ApiClient, PaymentValidationResponse) {
  'use strict';

  var PaymentvalidationApi = function PaymentvalidationApi(apiClient) {
    this.apiClient = apiClient || ApiClient.default;

    var self = this;
    
    
    /**
     * Submit payment validation for PayPal
     * Submit payment validation for PayPal
     * @param {String} orderId Order Id returned from orders/POST
     * @param {String} payPalKey The PayPal key returned from the Mobile SDK
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: PaymentValidationResponse
     */
    self.paymentvalidation = function(orderId, payPalKey, callback) {
      var postBody = null;
      
      // verify the required parameter 'orderId' is set
      if (orderId == null) {
        throw "Missing the required parameter 'orderId' when calling paymentvalidation";
      }
      
      // verify the required parameter 'payPalKey' is set
      if (payPalKey == null) {
        throw "Missing the required parameter 'payPalKey' when calling paymentvalidation";
      }
      

      var pathParams = {
      };
      var queryParams = {
        'OrderId': orderId,
        'PayPalKey': payPalKey
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PaymentValidationResponse;

      return this.apiClient.callApi(
        '/paymentvalidation/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );

    }
    
    
  };

  return PaymentvalidationApi;
}));
