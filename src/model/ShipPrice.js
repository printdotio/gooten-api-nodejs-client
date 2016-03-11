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
  
  
  var ShipPrice = function ShipPrice(price, currencyCode, formattedPrice) { 
    
    /**
     * datatype: Integer
     * required 
     **/
    this['Price'] = price;
    /**
     * datatype: String
     * required 
     **/
    this['CurrencyCode'] = currencyCode;
    /**
     * datatype: String
     * required 
     **/
    this['FormattedPrice'] = formattedPrice;
  };

  ShipPrice.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new ShipPrice();
    
    if (data['Price']) {
      _this['Price'] = ApiClient.convertToType(data['Price'], 'Integer');
    }
    
    if (data['CurrencyCode']) {
      _this['CurrencyCode'] = ApiClient.convertToType(data['CurrencyCode'], 'String');
    }
    
    if (data['FormattedPrice']) {
      _this['FormattedPrice'] = ApiClient.convertToType(data['FormattedPrice'], 'String');
    }
    
    return _this;
  }

  
  
  /**
   * @return {Integer}
   **/
  ShipPrice.prototype.getPrice = function() {
    return this['Price'];
  }

  /**
   * @param {Integer} price
   **/
  ShipPrice.prototype.setPrice = function(price) {
    this['Price'] = price;
  }
  
  /**
   * @return {String}
   **/
  ShipPrice.prototype.getCurrencyCode = function() {
    return this['CurrencyCode'];
  }

  /**
   * @param {String} currencyCode
   **/
  ShipPrice.prototype.setCurrencyCode = function(currencyCode) {
    this['CurrencyCode'] = currencyCode;
  }
  
  /**
   * @return {String}
   **/
  ShipPrice.prototype.getFormattedPrice = function() {
    return this['FormattedPrice'];
  }

  /**
   * @param {String} formattedPrice
   **/
  ShipPrice.prototype.setFormattedPrice = function(formattedPrice) {
    this['FormattedPrice'] = formattedPrice;
  }
  
  

  

  if (module) {
    module.ShipPrice = ShipPrice;
  }

  return ShipPrice;
  
  
}));
