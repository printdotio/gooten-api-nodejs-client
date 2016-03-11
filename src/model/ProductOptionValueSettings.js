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
  
  
  var ProductOptionValueSettings = function ProductOptionValueSettings(iconUrl, iconType, colorRgba) { 
    
    /**
     * datatype: String
     * required 
     **/
    this['IconUrl'] = iconUrl;
    /**
     * datatype: String
     * required 
     **/
    this['IconType'] = iconType;
    /**
     * datatype: String
     * required 
     **/
    this['ColorRgba'] = colorRgba;
  };

  ProductOptionValueSettings.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new ProductOptionValueSettings();
    
    if (data['IconUrl']) {
      _this['IconUrl'] = ApiClient.convertToType(data['IconUrl'], 'String');
    }
    
    if (data['IconType']) {
      _this['IconType'] = ApiClient.convertToType(data['IconType'], 'String');
    }
    
    if (data['ColorRgba']) {
      _this['ColorRgba'] = ApiClient.convertToType(data['ColorRgba'], 'String');
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  ProductOptionValueSettings.prototype.getIconUrl = function() {
    return this['IconUrl'];
  }

  /**
   * @param {String} iconUrl
   **/
  ProductOptionValueSettings.prototype.setIconUrl = function(iconUrl) {
    this['IconUrl'] = iconUrl;
  }
  
  /**
   * @return {String}
   **/
  ProductOptionValueSettings.prototype.getIconType = function() {
    return this['IconType'];
  }

  /**
   * @param {String} iconType
   **/
  ProductOptionValueSettings.prototype.setIconType = function(iconType) {
    this['IconType'] = iconType;
  }
  
  /**
   * @return {String}
   **/
  ProductOptionValueSettings.prototype.getColorRgba = function() {
    return this['ColorRgba'];
  }

  /**
   * @param {String} colorRgba
   **/
  ProductOptionValueSettings.prototype.setColorRgba = function(colorRgba) {
    this['ColorRgba'] = colorRgba;
  }
  
  

  

  if (module) {
    module.ProductOptionValueSettings = ProductOptionValueSettings;
  }

  return ProductOptionValueSettings;
  
  
}));
