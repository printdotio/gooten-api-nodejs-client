(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './PreconfiguredProduct'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PreconfiguredProduct'));
  } else {
    // Browser globals (root is window)
    if (!root.GootenApiClient) {
      root.GootenApiClient = {};
    }
    root.GootenApiClient.PreconfiguredProductsResponse = factory(root.GootenApiClient.ApiClient, root.GootenApiClient.PreconfiguredProduct);
  }
}(this, function(ApiClient, PreconfiguredProduct) {
  'use strict';
  
  
  var PreconfiguredProductsResponse = function PreconfiguredProductsResponse(preconfiguredProducts) { 
    
    /**
     * datatype: [PreconfiguredProduct]
     * required 
     **/
    this['PreconfiguredProducts'] = preconfiguredProducts;
  };

  PreconfiguredProductsResponse.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new PreconfiguredProductsResponse();
    
    if (data['PreconfiguredProducts']) {
      _this['PreconfiguredProducts'] = ApiClient.convertToType(data['PreconfiguredProducts'], [PreconfiguredProduct]);
    }
    
    return _this;
  }

  
  
  /**
   * @return {[PreconfiguredProduct]}
   **/
  PreconfiguredProductsResponse.prototype.getPreconfiguredProducts = function() {
    return this['PreconfiguredProducts'];
  }

  /**
   * @param {[PreconfiguredProduct]} preconfiguredProducts
   **/
  PreconfiguredProductsResponse.prototype.setPreconfiguredProducts = function(preconfiguredProducts) {
    this['PreconfiguredProducts'] = preconfiguredProducts;
  }
  
  

  

  return PreconfiguredProductsResponse;
  
  
}));
