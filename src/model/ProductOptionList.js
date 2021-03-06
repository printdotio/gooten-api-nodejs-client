(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ProductOption'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ProductOption'));
  } else {
    // Browser globals (root is window)
    if (!root.GootenApiClient) {
      root.GootenApiClient = {};
    }
    root.GootenApiClient.ProductOptionList = factory(root.GootenApiClient.ApiClient, root.GootenApiClient.ProductOption);
  }
}(this, function(ApiClient, ProductOption) {
  'use strict';
  
  
  var ProductOptionList = function ProductOptionList(name, values) { 
    
    /**
     * datatype: String
     * required 
     **/
    this['Name'] = name;
    /**
     * datatype: [ProductOption]
     * required 
     **/
    this['Values'] = values;
  };

  ProductOptionList.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new ProductOptionList();
    
    if (data['Name']) {
      _this['Name'] = ApiClient.convertToType(data['Name'], 'String');
    }
    
    if (data['Values']) {
      _this['Values'] = ApiClient.convertToType(data['Values'], [ProductOption]);
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  ProductOptionList.prototype.getName = function() {
    return this['Name'];
  }

  /**
   * @param {String} name
   **/
  ProductOptionList.prototype.setName = function(name) {
    this['Name'] = name;
  }
  
  /**
   * @return {[ProductOption]}
   **/
  ProductOptionList.prototype.getValues = function() {
    return this['Values'];
  }

  /**
   * @param {[ProductOption]} values
   **/
  ProductOptionList.prototype.setValues = function(values) {
    this['Values'] = values;
  }
  
  

  

  return ProductOptionList;
  
  
}));
