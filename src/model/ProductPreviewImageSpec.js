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
    root.GootenApiClient.ProductPreviewImageSpec = factory(root.GootenApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';
  
  
  var ProductPreviewImageSpec = function ProductPreviewImageSpec(url, x1, x2, y1, y2) { 
    
    /**
     * datatype: String
     * required 
     **/
    this['Url'] = url;
    /**
     * datatype: Integer
     * required 
     **/
    this['X1'] = x1;
    /**
     * datatype: Integer
     * required 
     **/
    this['X2'] = x2;
    /**
     * datatype: Integer
     * required 
     **/
    this['Y1'] = y1;
    /**
     * datatype: Integer
     * required 
     **/
    this['Y2'] = y2;
  };

  ProductPreviewImageSpec.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new ProductPreviewImageSpec();
    
    if (data['Url']) {
      _this['Url'] = ApiClient.convertToType(data['Url'], 'String');
    }
    
    if (data['X1']) {
      _this['X1'] = ApiClient.convertToType(data['X1'], 'Integer');
    }
    
    if (data['X2']) {
      _this['X2'] = ApiClient.convertToType(data['X2'], 'Integer');
    }
    
    if (data['Y1']) {
      _this['Y1'] = ApiClient.convertToType(data['Y1'], 'Integer');
    }
    
    if (data['Y2']) {
      _this['Y2'] = ApiClient.convertToType(data['Y2'], 'Integer');
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  ProductPreviewImageSpec.prototype.getUrl = function() {
    return this['Url'];
  }

  /**
   * @param {String} url
   **/
  ProductPreviewImageSpec.prototype.setUrl = function(url) {
    this['Url'] = url;
  }
  
  /**
   * @return {Integer}
   **/
  ProductPreviewImageSpec.prototype.getX1 = function() {
    return this['X1'];
  }

  /**
   * @param {Integer} x1
   **/
  ProductPreviewImageSpec.prototype.setX1 = function(x1) {
    this['X1'] = x1;
  }
  
  /**
   * @return {Integer}
   **/
  ProductPreviewImageSpec.prototype.getX2 = function() {
    return this['X2'];
  }

  /**
   * @param {Integer} x2
   **/
  ProductPreviewImageSpec.prototype.setX2 = function(x2) {
    this['X2'] = x2;
  }
  
  /**
   * @return {Integer}
   **/
  ProductPreviewImageSpec.prototype.getY1 = function() {
    return this['Y1'];
  }

  /**
   * @param {Integer} y1
   **/
  ProductPreviewImageSpec.prototype.setY1 = function(y1) {
    this['Y1'] = y1;
  }
  
  /**
   * @return {Integer}
   **/
  ProductPreviewImageSpec.prototype.getY2 = function() {
    return this['Y2'];
  }

  /**
   * @param {Integer} y2
   **/
  ProductPreviewImageSpec.prototype.setY2 = function(y2) {
    this['Y2'] = y2;
  }
  
  

  

  return ProductPreviewImageSpec;
  
  
}));
