(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.GootenApiClient) {
      root.GootenApiClient = {};
    }
    root.GootenApiClient.PreconfiguredProductsInsertResponse = factory(root.GootenApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';
  
  
  var PreconfiguredProductsInsertResponse = function PreconfiguredProductsInsertResponse() { 
    
  };

  PreconfiguredProductsInsertResponse.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new PreconfiguredProductsInsertResponse();
    
    return _this;
  }

  
  
  

  

  return PreconfiguredProductsInsertResponse;
  
  
}));
