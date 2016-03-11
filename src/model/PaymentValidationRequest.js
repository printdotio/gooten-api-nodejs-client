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
  
  
  var PaymentValidationRequest = function PaymentValidationRequest(orderId, payPalKey) { 
    
    /**
     * datatype: String
     * required 
     **/
    this['OrderId'] = orderId;
    /**
     * datatype: String
     * required 
     **/
    this['PayPalKey'] = payPalKey;
  };

  PaymentValidationRequest.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new PaymentValidationRequest();
    
    if (data['OrderId']) {
      _this['OrderId'] = ApiClient.convertToType(data['OrderId'], 'String');
    }
    
    if (data['PayPalKey']) {
      _this['PayPalKey'] = ApiClient.convertToType(data['PayPalKey'], 'String');
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  PaymentValidationRequest.prototype.getOrderId = function() {
    return this['OrderId'];
  }

  /**
   * @param {String} orderId
   **/
  PaymentValidationRequest.prototype.setOrderId = function(orderId) {
    this['OrderId'] = orderId;
  }
  
  /**
   * @return {String}
   **/
  PaymentValidationRequest.prototype.getPayPalKey = function() {
    return this['PayPalKey'];
  }

  /**
   * @param {String} payPalKey
   **/
  PaymentValidationRequest.prototype.setPayPalKey = function(payPalKey) {
    this['PayPalKey'] = payPalKey;
  }
  
  

  

  if (module) {
    module.PaymentValidationRequest = PaymentValidationRequest;
  }

  return PaymentValidationRequest;
  
  
}));
