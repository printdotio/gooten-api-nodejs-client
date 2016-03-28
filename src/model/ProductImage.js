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
    root.GootenApiClient.ProductImage = factory(root.GootenApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';
  
  
  var ProductImage = function ProductImage(url, description, index, id, imageTypes) { 
    
    /**
     * datatype: String
     * required 
     **/
    this['Url'] = url;
    /**
     * datatype: String
     * required 
     **/
    this['Description'] = description;
    /**
     * datatype: Integer
     * required 
     **/
    this['Index'] = index;
    /**
     * datatype: String
     * required 
     **/
    this['Id'] = id;
    /**
     * datatype: [String]
     * required 
     **/
    this['ImageTypes'] = imageTypes;
  };

  ProductImage.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new ProductImage();
    
    if (data['Url']) {
      _this['Url'] = ApiClient.convertToType(data['Url'], 'String');
    }
    
    if (data['Description']) {
      _this['Description'] = ApiClient.convertToType(data['Description'], 'String');
    }
    
    if (data['Index']) {
      _this['Index'] = ApiClient.convertToType(data['Index'], 'Integer');
    }
    
    if (data['Id']) {
      _this['Id'] = ApiClient.convertToType(data['Id'], 'String');
    }
    
    if (data['ImageTypes']) {
      _this['ImageTypes'] = ApiClient.convertToType(data['ImageTypes'], ['String']);
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  ProductImage.prototype.getUrl = function() {
    return this['Url'];
  }

  /**
   * @param {String} url
   **/
  ProductImage.prototype.setUrl = function(url) {
    this['Url'] = url;
  }
  
  /**
   * @return {String}
   **/
  ProductImage.prototype.getDescription = function() {
    return this['Description'];
  }

  /**
   * @param {String} description
   **/
  ProductImage.prototype.setDescription = function(description) {
    this['Description'] = description;
  }
  
  /**
   * @return {Integer}
   **/
  ProductImage.prototype.getIndex = function() {
    return this['Index'];
  }

  /**
   * @param {Integer} index
   **/
  ProductImage.prototype.setIndex = function(index) {
    this['Index'] = index;
  }
  
  /**
   * @return {String}
   **/
  ProductImage.prototype.getId = function() {
    return this['Id'];
  }

  /**
   * @param {String} id
   **/
  ProductImage.prototype.setId = function(id) {
    this['Id'] = id;
  }
  
  /**
   * @return {[String]}
   **/
  ProductImage.prototype.getImageTypes = function() {
    return this['ImageTypes'];
  }

  /**
   * @param {[String]} imageTypes
   **/
  ProductImage.prototype.setImageTypes = function(imageTypes) {
    this['ImageTypes'] = imageTypes;
  }
  
  

  

  return ProductImage;
  
  
}));
