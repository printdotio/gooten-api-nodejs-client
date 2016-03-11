(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './Preconfiguration'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./Preconfiguration'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    factory(root.SwaggerJsClient, root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.Preconfiguration);
  }
}(this, function(module, ApiClient, Preconfiguration) {
  'use strict';
  
  
  var PreconfiguredItem = function PreconfiguredItem(productId, productVariantSku, preconfigurations) { 
    
    /**
     * The ID of the product this item references.
     * datatype: Integer
     * required 
     **/
    this['ProductId'] = productId;
    /**
     * The sku of the product variant this item references.
     * datatype: String
     * required 
     **/
    this['ProductVariantSku'] = productVariantSku;
    /**
     * datatype: [Preconfiguration]
     * required 
     **/
    this['Preconfigurations'] = preconfigurations;
  };

  PreconfiguredItem.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new PreconfiguredItem();
    
    if (data['ProductId']) {
      _this['ProductId'] = ApiClient.convertToType(data['ProductId'], 'Integer');
    }
    
    if (data['ProductVariantSku']) {
      _this['ProductVariantSku'] = ApiClient.convertToType(data['ProductVariantSku'], 'String');
    }
    
    if (data['Preconfigurations']) {
      _this['Preconfigurations'] = ApiClient.convertToType(data['Preconfigurations'], [Preconfiguration]);
    }
    
    return _this;
  }

  
  
  /**
   * get The ID of the product this item references.
   * @return {Integer}
   **/
  PreconfiguredItem.prototype.getProductId = function() {
    return this['ProductId'];
  }

  /**
   * set The ID of the product this item references.
   * @param {Integer} productId
   **/
  PreconfiguredItem.prototype.setProductId = function(productId) {
    this['ProductId'] = productId;
  }
  
  /**
   * get The sku of the product variant this item references.
   * @return {String}
   **/
  PreconfiguredItem.prototype.getProductVariantSku = function() {
    return this['ProductVariantSku'];
  }

  /**
   * set The sku of the product variant this item references.
   * @param {String} productVariantSku
   **/
  PreconfiguredItem.prototype.setProductVariantSku = function(productVariantSku) {
    this['ProductVariantSku'] = productVariantSku;
  }
  
  /**
   * @return {[Preconfiguration]}
   **/
  PreconfiguredItem.prototype.getPreconfigurations = function() {
    return this['Preconfigurations'];
  }

  /**
   * @param {[Preconfiguration]} preconfigurations
   **/
  PreconfiguredItem.prototype.setPreconfigurations = function(preconfigurations) {
    this['Preconfigurations'] = preconfigurations;
  }
  
  

  

  if (module) {
    module.PreconfiguredItem = PreconfiguredItem;
  }

  return PreconfiguredItem;
  
  
}));
