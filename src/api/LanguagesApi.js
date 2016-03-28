(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/LanguageDictionary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/LanguageDictionary'));
  } else {
    // Browser globals (root is window)
    if (!root.GootenApiClient) {
      root.GootenApiClient = {};
    }
    root.GootenApiClient.LanguagesApi = factory(root.GootenApiClient.ApiClient, root.GootenApiClient.LanguageDictionary);
  }
}(this, function(ApiClient, LanguageDictionary) {
  'use strict';

  var LanguagesApi = function LanguagesApi(apiClient) {
    this.apiClient = apiClient || ApiClient.default;

    var self = this;
    
    
    /**
     * Get text in a specified language
     * Get text in a specified language
     * @param {String} languageCode Two-character language code, like \&quot;en\&quot; (english)
     * @param {String} opts['key'] A string used to query the language dictionary for specific values within a category.
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: LanguageDictionary
     */
    self.getLanguageText = function(languageCode, opts, callback) {
      opts = opts || {};
      var postBody = null;
      
      // verify the required parameter 'languageCode' is set
      if (languageCode == null) {
        throw "Missing the required parameter 'languageCode' when calling getLanguageText";
      }
      

      var pathParams = {
      };
      var queryParams = {
        'languageCode': languageCode,
        'key': opts['key']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LanguageDictionary;

      return this.apiClient.callApi(
        '/languages/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );

    }
    
    
  };

  return LanguagesApi;
}));
