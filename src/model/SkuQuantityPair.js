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
    root.GootenApiClient.SkuQuantityPair = factory(root.GootenApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';
  
  
  var SkuQuantityPair = function SkuQuantityPair(SKU, quantity) { 
    
    /**
     * datatype: String
     * required 
     **/
    this['SKU'] = SKU;
    /**
     * datatype: Integer
     * required 
     **/
    this['Quantity'] = quantity;
  };

  SkuQuantityPair.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new SkuQuantityPair();
    
    if (data['SKU']) {
      _this['SKU'] = ApiClient.convertToType(data['SKU'], 'String');
    }
    
    if (data['Quantity']) {
      _this['Quantity'] = ApiClient.convertToType(data['Quantity'], 'Integer');
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  SkuQuantityPair.prototype.getSKU = function() {
    return this['SKU'];
  }

  /**
   * @param {String} SKU
   **/
  SkuQuantityPair.prototype.setSKU = function(SKU) {
    this['SKU'] = SKU;
  }
  
  /**
   * @return {Integer}
   **/
  SkuQuantityPair.prototype.getQuantity = function() {
    return this['Quantity'];
  }

  /**
   * @param {Integer} quantity
   **/
  SkuQuantityPair.prototype.setQuantity = function(quantity) {
    this['Quantity'] = quantity;
  }
  
  

  

  return SkuQuantityPair;
  
  
}));
