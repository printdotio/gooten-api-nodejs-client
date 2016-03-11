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
  
  
  var PreconfiguredProductImage = function PreconfiguredProductImage(url, description, index, id) { 
    
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
  };

  PreconfiguredProductImage.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new PreconfiguredProductImage();
    
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
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  PreconfiguredProductImage.prototype.getUrl = function() {
    return this['Url'];
  }

  /**
   * @param {String} url
   **/
  PreconfiguredProductImage.prototype.setUrl = function(url) {
    this['Url'] = url;
  }
  
  /**
   * @return {String}
   **/
  PreconfiguredProductImage.prototype.getDescription = function() {
    return this['Description'];
  }

  /**
   * @param {String} description
   **/
  PreconfiguredProductImage.prototype.setDescription = function(description) {
    this['Description'] = description;
  }
  
  /**
   * @return {Integer}
   **/
  PreconfiguredProductImage.prototype.getIndex = function() {
    return this['Index'];
  }

  /**
   * @param {Integer} index
   **/
  PreconfiguredProductImage.prototype.setIndex = function(index) {
    this['Index'] = index;
  }
  
  /**
   * @return {String}
   **/
  PreconfiguredProductImage.prototype.getId = function() {
    return this['Id'];
  }

  /**
   * @param {String} id
   **/
  PreconfiguredProductImage.prototype.setId = function(id) {
    this['Id'] = id;
  }
  
  

  

  if (module) {
    module.PreconfiguredProductImage = PreconfiguredProductImage;
  }

  return PreconfiguredProductImage;
  
  
}));
