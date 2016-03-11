(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/SubmittedOrderList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/SubmittedOrderList'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    root.SwaggerJsClient.OrdersearchApi = factory(root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.SubmittedOrderList);
  }
}(this, function(ApiClient, SubmittedOrderList) {
  'use strict';

  var OrdersearchApi = function OrdersearchApi(apiClient) {
    this.apiClient = apiClient || ApiClient.default;

    var self = this;
    
    
    /**
     * Search an orders
     * Search through the orders and return information about orders that match search criteria.
     * @param {String} opts['genericValues'] Any value which is related to order (partner name, address, phone, couponCode, etc...)
     * @param {String} opts['lastName'] Partner last name
     * @param {String} opts['email'] Partner email
     * @param {String} opts['postalCode'] Billing/Shipping address postal code
     * @param {String} opts['startDate'] Start date of the date range when order was created
     * @param {String} opts['endDate'] End date of the date range when order was created
     * @param {String} opts['uniqueUserId'] User Id
     * @param {Integer} opts['partnerId'] Partner Id
     * @param {Integer} opts['pageSize'] How many items to return in reponse.
     * @param {Integer} opts['page'] Page number, how many items to skip.
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: SubmittedOrderList
     */
    self.gETOrdersearch = function(opts, callback) {
      opts = opts || {};
      var postBody = null;
      

      var pathParams = {
      };
      var queryParams = {
        'genericValues': opts['genericValues'],
        'lastName': opts['lastName'],
        'email': opts['email'],
        'postalCode': opts['postalCode'],
        'startDate': opts['startDate'],
        'endDate': opts['endDate'],
        'uniqueUserId': opts['uniqueUserId'],
        'partnerId': opts['partnerId'],
        'pageSize': opts['pageSize'],
        'page': opts['page']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SubmittedOrderList;

      return this.apiClient.callApi(
        '/ordersearch/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );

    }
    
    
  };

  return OrdersearchApi;
}));
