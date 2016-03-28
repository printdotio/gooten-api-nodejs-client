(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.GootenApiClient) {
      root.GootenApiClient = {};
    }
    root.GootenApiClient.AddressvalidationApi = factory(root.GootenApiClient.ApiClient, root.GootenApiClient.Result);
  }
}(this, function(ApiClient, Result) {
  'use strict';

  var AddressvalidationApi = function AddressvalidationApi(apiClient) {
    this.apiClient = apiClient || ApiClient.default;

    var self = this;
    
    
    /**
     * Validates an address and returns a suggested address (if available) and a validation score.
     * Validates an address and returns a suggested address (if available) and a validation score.
     * @param {String} opts['line1'] Address line1.
     * @param {String} opts['line2'] Address line2.
     * @param {String} opts['city'] Address city.
     * @param {String} opts['state'] Address state.
     * @param {String} opts['postalCode'] Address postal code/zip.
     * @param {String} opts['countryCode'] Address country code.
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: Result
     */
    self.addressvalidation = function(opts, callback) {
      opts = opts || {};
      var postBody = null;
      

      var pathParams = {
      };
      var queryParams = {
        'line1': opts['line1'],
        'line2': opts['line2'],
        'city': opts['city'],
        'state': opts['state'],
        'postalCode': opts['postalCode'],
        'countryCode': opts['countryCode']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Result;

      return this.apiClient.callApi(
        '/addressvalidation/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );

    }
    
    
  };

  return AddressvalidationApi;
}));
