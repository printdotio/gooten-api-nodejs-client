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
  
  
  var Item = function Item(quantity, sku, status, product) { 
    
    /**
     * datatype: Integer
     * required 
     **/
    this['Quantity'] = quantity;
    /**
     * datatype: String
     * required 
     **/
    this['Sku'] = sku;
    /**
     * datatype: String
     * required 
     **/
    this['Status'] = status;
    /**
     * datatype: String
     * required 
     **/
    this['Product'] = product;
  };

  Item.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new Item();
    
    if (data['Quantity']) {
      _this['Quantity'] = ApiClient.convertToType(data['Quantity'], 'Integer');
    }
    
    if (data['Sku']) {
      _this['Sku'] = ApiClient.convertToType(data['Sku'], 'String');
    }
    
    if (data['Status']) {
      _this['Status'] = ApiClient.convertToType(data['Status'], 'String');
    }
    
    if (data['Product']) {
      _this['Product'] = ApiClient.convertToType(data['Product'], 'String');
    }
    
    return _this;
  }

  
  
  /**
   * @return {Integer}
   **/
  Item.prototype.getQuantity = function() {
    return this['Quantity'];
  }

  /**
   * @param {Integer} quantity
   **/
  Item.prototype.setQuantity = function(quantity) {
    this['Quantity'] = quantity;
  }
  
  /**
   * @return {String}
   **/
  Item.prototype.getSku = function() {
    return this['Sku'];
  }

  /**
   * @param {String} sku
   **/
  Item.prototype.setSku = function(sku) {
    this['Sku'] = sku;
  }
  
  /**
   * @return {String}
   **/
  Item.prototype.getStatus = function() {
    return this['Status'];
  }

  /**
   * @param {String} status
   **/
  Item.prototype.setStatus = function(status) {
    this['Status'] = status;
  }
  
  /**
   * @return {String}
   **/
  Item.prototype.getProduct = function() {
    return this['Product'];
  }

  /**
   * @param {String} product
   **/
  Item.prototype.setProduct = function(product) {
    this['Product'] = product;
  }
  
  

  

  if (module) {
    module.Item = Item;
  }

  return Item;
  
  
}));
