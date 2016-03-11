(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './ProductBuildOption'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./ProductBuildOption'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    factory(root.SwaggerJsClient, root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.ProductBuildOption);
  }
}(this, function(module, ApiClient, ProductBuildOption) {
  'use strict';
  
  
  var ProductBuildInfoResponse = function ProductBuildInfoResponse(options) { 
    
    /**
     * datatype: [ProductBuildOption]
     * required 
     **/
    this['Options'] = options;
  };

  ProductBuildInfoResponse.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new ProductBuildInfoResponse();
    
    if (data['Options']) {
      _this['Options'] = ApiClient.convertToType(data['Options'], [ProductBuildOption]);
    }
    
    return _this;
  }

  
  
  /**
   * @return {[ProductBuildOption]}
   **/
  ProductBuildInfoResponse.prototype.getOptions = function() {
    return this['Options'];
  }

  /**
   * @param {[ProductBuildOption]} options
   **/
  ProductBuildInfoResponse.prototype.setOptions = function(options) {
    this['Options'] = options;
  }
  
  

  

  if (module) {
    module.ProductBuildInfoResponse = ProductBuildInfoResponse;
  }

  return ProductBuildInfoResponse;
  
  
}));
