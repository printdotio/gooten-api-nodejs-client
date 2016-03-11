(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './OrderItem', './Payment', './ShipToAddress'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./OrderItem'), require('./Payment'), require('./ShipToAddress'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    factory(root.SwaggerJsClient, root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.OrderItem, root.SwaggerJsClient.Payment, root.SwaggerJsClient.ShipToAddress);
  }
}(this, function(module, ApiClient, OrderItem, Payment, ShipToAddress) {
  'use strict';
  
  
  var Order = function Order(shipToAddress, items, payment, couponCode) { 
    
    /**
     * datatype: ShipToAddress
     * required 
     **/
    this['ShipToAddress'] = shipToAddress;
    /**
     * datatype: [OrderItem]
     * required 
     **/
    this['Items'] = items;
    /**
     * datatype: Payment
     * required 
     **/
    this['Payment'] = payment;
    /**
     * datatype: String
     * required 
     **/
    this['CouponCode'] = couponCode;
  };

  Order.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new Order();
    
    if (data['ShipToAddress']) {
      _this['ShipToAddress'] = ShipToAddress.constructFromObject(data['ShipToAddress']);
    }
    
    if (data['Items']) {
      _this['Items'] = ApiClient.convertToType(data['Items'], [OrderItem]);
    }
    
    if (data['Payment']) {
      _this['Payment'] = Payment.constructFromObject(data['Payment']);
    }
    
    if (data['CouponCode']) {
      _this['CouponCode'] = ApiClient.convertToType(data['CouponCode'], 'String');
    }
    
    return _this;
  }

  
  
  /**
   * @return {ShipToAddress}
   **/
  Order.prototype.getShipToAddress = function() {
    return this['ShipToAddress'];
  }

  /**
   * @param {ShipToAddress} shipToAddress
   **/
  Order.prototype.setShipToAddress = function(shipToAddress) {
    this['ShipToAddress'] = shipToAddress;
  }
  
  /**
   * @return {[OrderItem]}
   **/
  Order.prototype.getItems = function() {
    return this['Items'];
  }

  /**
   * @param {[OrderItem]} items
   **/
  Order.prototype.setItems = function(items) {
    this['Items'] = items;
  }
  
  /**
   * @return {Payment}
   **/
  Order.prototype.getPayment = function() {
    return this['Payment'];
  }

  /**
   * @param {Payment} payment
   **/
  Order.prototype.setPayment = function(payment) {
    this['Payment'] = payment;
  }
  
  /**
   * @return {String}
   **/
  Order.prototype.getCouponCode = function() {
    return this['CouponCode'];
  }

  /**
   * @param {String} couponCode
   **/
  Order.prototype.setCouponCode = function(couponCode) {
    this['CouponCode'] = couponCode;
  }
  
  

  

  if (module) {
    module.Order = Order;
  }

  return Order;
  
  
}));
