(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    factory(root.SwaggerJsClient, root.SwaggerJsClient.ApiClient);
  }
}(this, function(module, ApiClient) {
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

  
  
  

  

  if (module) {
    module.PreconfiguredProductsInsertResponse = PreconfiguredProductsInsertResponse;
  }

  return PreconfiguredProductsInsertResponse;
  
  
}));
