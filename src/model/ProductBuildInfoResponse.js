(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ProductBuildOption'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ProductBuildOption'));
  } else {
    // Browser globals (root is window)
    if (!root.GootenApiClient) {
      root.GootenApiClient = {};
    }
    root.GootenApiClient.ProductBuildInfoResponse = factory(root.GootenApiClient.ApiClient, root.GootenApiClient.ProductBuildOption);
  }
}(this, function(ApiClient, ProductBuildOption) {
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
  
  

  

  return ProductBuildInfoResponse;
  
  
}));
