(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './ProductBuildInfoSpace'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./ProductBuildInfoSpace'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    factory(root.SwaggerJsClient, root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.ProductBuildInfoSpace);
  }
}(this, function(module, ApiClient, ProductBuildInfoSpace) {
  'use strict';
  
  
  var ProductBuildOption = function ProductBuildOption(name, imageUrl, isDefault, category, isPartnerSpecific, spaces) { 
    
    /**
     * datatype: String
     * required 
     **/
    this['Name'] = name;
    /**
     * datatype: String
     * required 
     **/
    this['ImageUrl'] = imageUrl;
    /**
     * datatype: Boolean
     * required 
     **/
    this['IsDefault'] = isDefault;
    /**
     * datatype: String
     * required 
     **/
    this['Category'] = category;
    /**
     * datatype: Boolean
     * required 
     **/
    this['IsPartnerSpecific'] = isPartnerSpecific;
    /**
     * datatype: [ProductBuildInfoSpace]
     * required 
     **/
    this['Spaces'] = spaces;
  };

  ProductBuildOption.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new ProductBuildOption();
    
    if (data['Name']) {
      _this['Name'] = ApiClient.convertToType(data['Name'], 'String');
    }
    
    if (data['ImageUrl']) {
      _this['ImageUrl'] = ApiClient.convertToType(data['ImageUrl'], 'String');
    }
    
    if (data['IsDefault']) {
      _this['IsDefault'] = ApiClient.convertToType(data['IsDefault'], 'Boolean');
    }
    
    if (data['Category']) {
      _this['Category'] = ApiClient.convertToType(data['Category'], 'String');
    }
    
    if (data['IsPartnerSpecific']) {
      _this['IsPartnerSpecific'] = ApiClient.convertToType(data['IsPartnerSpecific'], 'Boolean');
    }
    
    if (data['Spaces']) {
      _this['Spaces'] = ApiClient.convertToType(data['Spaces'], [ProductBuildInfoSpace]);
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  ProductBuildOption.prototype.getName = function() {
    return this['Name'];
  }

  /**
   * @param {String} name
   **/
  ProductBuildOption.prototype.setName = function(name) {
    this['Name'] = name;
  }
  
  /**
   * @return {String}
   **/
  ProductBuildOption.prototype.getImageUrl = function() {
    return this['ImageUrl'];
  }

  /**
   * @param {String} imageUrl
   **/
  ProductBuildOption.prototype.setImageUrl = function(imageUrl) {
    this['ImageUrl'] = imageUrl;
  }
  
  /**
   * @return {Boolean}
   **/
  ProductBuildOption.prototype.getIsDefault = function() {
    return this['IsDefault'];
  }

  /**
   * @param {Boolean} isDefault
   **/
  ProductBuildOption.prototype.setIsDefault = function(isDefault) {
    this['IsDefault'] = isDefault;
  }
  
  /**
   * @return {String}
   **/
  ProductBuildOption.prototype.getCategory = function() {
    return this['Category'];
  }

  /**
   * @param {String} category
   **/
  ProductBuildOption.prototype.setCategory = function(category) {
    this['Category'] = category;
  }
  
  /**
   * @return {Boolean}
   **/
  ProductBuildOption.prototype.getIsPartnerSpecific = function() {
    return this['IsPartnerSpecific'];
  }

  /**
   * @param {Boolean} isPartnerSpecific
   **/
  ProductBuildOption.prototype.setIsPartnerSpecific = function(isPartnerSpecific) {
    this['IsPartnerSpecific'] = isPartnerSpecific;
  }
  
  /**
   * @return {[ProductBuildInfoSpace]}
   **/
  ProductBuildOption.prototype.getSpaces = function() {
    return this['Spaces'];
  }

  /**
   * @param {[ProductBuildInfoSpace]} spaces
   **/
  ProductBuildOption.prototype.setSpaces = function(spaces) {
    this['Spaces'] = spaces;
  }
  
  

  

  if (module) {
    module.ProductBuildOption = ProductBuildOption;
  }

  return ProductBuildOption;
  
  
}));
