(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './OrderItemImage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./OrderItemImage'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    factory(root.SwaggerJsClient, root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.OrderItemImage);
  }
}(this, function(module, ApiClient, OrderItemImage) {
  'use strict';
  
  
  var OrderItem = function OrderItem(quantity, SKU, shipCarrierMethodId, images) { 
    
    /**
     * datatype: Integer
     * required 
     **/
    this['Quantity'] = quantity;
    /**
     * datatype: String
     * required 
     **/
    this['SKU'] = SKU;
    /**
     * datatype: Integer
     * required 
     **/
    this['ShipCarrierMethodId'] = shipCarrierMethodId;
    /**
     * datatype: [OrderItemImage]
     * required 
     **/
    this['Images'] = images;
  };

  OrderItem.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new OrderItem();
    
    if (data['Quantity']) {
      _this['Quantity'] = ApiClient.convertToType(data['Quantity'], 'Integer');
    }
    
    if (data['SKU']) {
      _this['SKU'] = ApiClient.convertToType(data['SKU'], 'String');
    }
    
    if (data['ShipCarrierMethodId']) {
      _this['ShipCarrierMethodId'] = ApiClient.convertToType(data['ShipCarrierMethodId'], 'Integer');
    }
    
    if (data['Images']) {
      _this['Images'] = ApiClient.convertToType(data['Images'], [OrderItemImage]);
    }
    
    return _this;
  }

  
  
  /**
   * @return {Integer}
   **/
  OrderItem.prototype.getQuantity = function() {
    return this['Quantity'];
  }

  /**
   * @param {Integer} quantity
   **/
  OrderItem.prototype.setQuantity = function(quantity) {
    this['Quantity'] = quantity;
  }
  
  /**
   * @return {String}
   **/
  OrderItem.prototype.getSKU = function() {
    return this['SKU'];
  }

  /**
   * @param {String} SKU
   **/
  OrderItem.prototype.setSKU = function(SKU) {
    this['SKU'] = SKU;
  }
  
  /**
   * @return {Integer}
   **/
  OrderItem.prototype.getShipCarrierMethodId = function() {
    return this['ShipCarrierMethodId'];
  }

  /**
   * @param {Integer} shipCarrierMethodId
   **/
  OrderItem.prototype.setShipCarrierMethodId = function(shipCarrierMethodId) {
    this['ShipCarrierMethodId'] = shipCarrierMethodId;
  }
  
  /**
   * @return {[OrderItemImage]}
   **/
  OrderItem.prototype.getImages = function() {
    return this['Images'];
  }

  /**
   * @param {[OrderItemImage]} images
   **/
  OrderItem.prototype.setImages = function(images) {
    this['Images'] = images;
  }
  
  

  

  if (module) {
    module.OrderItem = OrderItem;
  }

  return OrderItem;
  
  
}));
