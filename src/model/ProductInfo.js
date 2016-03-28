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
    root.GootenApiClient.ProductInfo = factory(root.GootenApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';
  
  
  var ProductInfo = function ProductInfo(contentType, content, key, index) { 
    
    /**
     * datatype: String
     * required 
     **/
    this['ContentType'] = contentType;
    /**
     * datatype: [String]
     * required 
     **/
    this['Content'] = content;
    /**
     * datatype: String
     * required 
     **/
    this['Key'] = key;
    /**
     * The suggested ordering of the content about the product.
     * datatype: Integer
     * required 
     **/
    this['Index'] = index;
  };

  ProductInfo.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new ProductInfo();
    
    if (data['ContentType']) {
      _this['ContentType'] = ApiClient.convertToType(data['ContentType'], 'String');
    }
    
    if (data['Content']) {
      _this['Content'] = ApiClient.convertToType(data['Content'], ['String']);
    }
    
    if (data['Key']) {
      _this['Key'] = ApiClient.convertToType(data['Key'], 'String');
    }
    
    if (data['Index']) {
      _this['Index'] = ApiClient.convertToType(data['Index'], 'Integer');
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  ProductInfo.prototype.getContentType = function() {
    return this['ContentType'];
  }

  /**
   * @param {String} contentType
   **/
  ProductInfo.prototype.setContentType = function(contentType) {
    this['ContentType'] = contentType;
  }
  
  /**
   * @return {[String]}
   **/
  ProductInfo.prototype.getContent = function() {
    return this['Content'];
  }

  /**
   * @param {[String]} content
   **/
  ProductInfo.prototype.setContent = function(content) {
    this['Content'] = content;
  }
  
  /**
   * @return {String}
   **/
  ProductInfo.prototype.getKey = function() {
    return this['Key'];
  }

  /**
   * @param {String} key
   **/
  ProductInfo.prototype.setKey = function(key) {
    this['Key'] = key;
  }
  
  /**
   * get The suggested ordering of the content about the product.
   * @return {Integer}
   **/
  ProductInfo.prototype.getIndex = function() {
    return this['Index'];
  }

  /**
   * set The suggested ordering of the content about the product.
   * @param {Integer} index
   **/
  ProductInfo.prototype.setIndex = function(index) {
    this['Index'] = index;
  }
  
  

  

  return ProductInfo;
  
  
}));
