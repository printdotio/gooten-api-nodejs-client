(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/CountryList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CountryList'));
  } else {
    // Browser globals (root is window)
    if (!root.GootenApiClient) {
      root.GootenApiClient = {};
    }
    root.GootenApiClient.CountriesApi = factory(root.GootenApiClient.ApiClient, root.GootenApiClient.CountryList);
  }
}(this, function(ApiClient, CountryList) {
  'use strict';

  var CountriesApi = function CountriesApi(apiClient) {
    this.apiClient = apiClient || ApiClient.default;

    var self = this;
    
    
    /**
     * Get a list of supported countries. Output is in specified language.
     * Get a list of supported countries. Output is in specified language.
     * @param {String} opts['languageCode'] Two-character language code, like \&quot;en\&quot; (english)
     * @param {String} opts['key'] A string used to query the language dictionary for specific values within a category.
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: CountryList
     */
    self.countries = function(opts, callback) {
      opts = opts || {};
      var postBody = null;
      

      var pathParams = {
      };
      var queryParams = {
        'languageCode': opts['languageCode'],
        'key': opts['key']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CountryList;

      return this.apiClient.callApi(
        '/countries/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );

    }
    
    
  };

  return CountriesApi;
}));
