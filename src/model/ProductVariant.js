(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './ProductOption'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./ProductOption'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    factory(root.SwaggerJsClient, root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.ProductOption);
  }
}(this, function(module, ApiClient, ProductOption) {
  'use strict';
  
  
  var ProductVariant = function ProductVariant(sku, maxImages, hasTemplates, options) { 
    
    /**
     * datatype: String
     * required 
     **/
    this['Sku'] = sku;
    /**
     * datatype: Integer
     * required 
     **/
    this['MaxImages'] = maxImages;
    /**
     * datatype: Boolean
     * required 
     **/
    this['HasTemplates'] = hasTemplates;
    /**
     * datatype: [ProductOption]
     * required 
     **/
    this['Options'] = options;
  };

  ProductVariant.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new ProductVariant();
    
    if (data['Sku']) {
      _this['Sku'] = ApiClient.convertToType(data['Sku'], 'String');
    }
    
    if (data['MaxImages']) {
      _this['MaxImages'] = ApiClient.convertToType(data['MaxImages'], 'Integer');
    }
    
    if (data['HasTemplates']) {
      _this['HasTemplates'] = ApiClient.convertToType(data['HasTemplates'], 'Boolean');
    }
    
    if (data['Options']) {
      _this['Options'] = ApiClient.convertToType(data['Options'], [ProductOption]);
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  ProductVariant.prototype.getSku = function() {
    return this['Sku'];
  }

  /**
   * @param {String} sku
   **/
  ProductVariant.prototype.setSku = function(sku) {
    this['Sku'] = sku;
  }
  
  /**
   * @return {Integer}
   **/
  ProductVariant.prototype.getMaxImages = function() {
    return this['MaxImages'];
  }

  /**
   * @param {Integer} maxImages
   **/
  ProductVariant.prototype.setMaxImages = function(maxImages) {
    this['MaxImages'] = maxImages;
  }
  
  /**
   * @return {Boolean}
   **/
  ProductVariant.prototype.getHasTemplates = function() {
    return this['HasTemplates'];
  }

  /**
   * @param {Boolean} hasTemplates
   **/
  ProductVariant.prototype.setHasTemplates = function(hasTemplates) {
    this['HasTemplates'] = hasTemplates;
  }
  
  /**
   * @return {[ProductOption]}
   **/
  ProductVariant.prototype.getOptions = function() {
    return this['Options'];
  }

  /**
   * @param {[ProductOption]} options
   **/
  ProductVariant.prototype.setOptions = function(options) {
    this['Options'] = options;
  }
  
  

  

  if (module) {
    module.ProductVariant = ProductVariant;
  }

  return ProductVariant;
  
  
}));
