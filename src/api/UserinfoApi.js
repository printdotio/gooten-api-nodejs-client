(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.GootenApiClient) {
      root.GootenApiClient = {};
    }
    root.GootenApiClient.UserinfoApi = factory(root.GootenApiClient.ApiClient, root.GootenApiClient.UserInfo);
  }
}(this, function(ApiClient, UserInfo) {
  'use strict';

  var UserinfoApi = function UserinfoApi(apiClient) {
    this.apiClient = apiClient || ApiClient.default;

    var self = this;
    
    
    /**
     * Get the user&#39;s language code and country based upon IP
     * IP-based user info lookup
     * @param {String} opts['languageCode'] Two-character language code, if known at the time.
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: UserInfo
     */
    self.getUserinfo = function(opts, callback) {
      opts = opts || {};
      var postBody = null;
      

      var pathParams = {
      };
      var queryParams = {
        'languageCode': opts['languageCode']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = UserInfo;

      return this.apiClient.callApi(
        '/userinfo/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );

    }
    
    
  };

  return UserinfoApi;
}));
