(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ImageValidatorResult', '../model/ImageValidationVm'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ImageValidatorResult'), require('../model/ImageValidationVm'));
  } else {
    // Browser globals (root is window)
    if (!root.GootenApiClient) {
      root.GootenApiClient = {};
    }
    root.GootenApiClient.ImagevalidationApi = factory(root.GootenApiClient.ApiClient, root.GootenApiClient.ImageValidatorResult, root.GootenApiClient.ImageValidationVm);
  }
}(this, function(ApiClient, ImageValidatorResult, ImageValidationVm) {
  'use strict';

  var ImagevalidationApi = function ImagevalidationApi(apiClient) {
    this.apiClient = apiClient || ApiClient.default;

    var self = this;
    
    
    /**
     * Submit image validation
     * Validates an images and returns a validation errors (if available).
     * @param {ImageValidationVm} req Image validation request, contains sku and image sizes per space
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: ImageValidatorResult
     */
    self.pOSTImagevalidation = function(req, callback) {
      var postBody = req;
      
      // verify the required parameter 'req' is set
      if (req == null) {
        throw "Missing the required parameter 'req' when calling pOSTImagevalidation";
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
      var returnType = ImageValidatorResult;

      return this.apiClient.callApi(
        '/imagevalidation/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );

    }
    
    
  };

  return ImagevalidationApi;
}));
