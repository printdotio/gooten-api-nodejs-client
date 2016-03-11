(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/FileResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/FileResult'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    root.SwaggerJsClient.ImagesApi = factory(root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.FileResult);
  }
}(this, function(ApiClient, FileResult) {
  'use strict';

  var ImagesApi = function ImagesApi(apiClient) {
    this.apiClient = apiClient || ApiClient.default;

    var self = this;
    
    
    /**
     * POSTs files to a temporary store
     * POSTs files to a temporary store
     * @param {File} images Form/multipart file post
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: FileResult
     */
    self.postImages = function(images, callback) {
      var postBody = null;
      
      // verify the required parameter 'images' is set
      if (images == null) {
        throw "Missing the required parameter 'images' when calling postImages";
      }
      

      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'Images': images
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FileResult;

      return this.apiClient.callApi(
        '/images/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );

    }
    
    
  };

  return ImagesApi;
}));
