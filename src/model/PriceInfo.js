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
  
  
  var PriceInfo = function PriceInfo(price, currencyCode, formattedPrice, currencyFormat, currencyDigits) { 
    
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
    /**
     * datatype: String
     * required 
     **/
    this['CurrencyFormat'] = currencyFormat;
    /**
     * datatype: Integer
     * required 
     **/
    this['CurrencyDigits'] = currencyDigits;
  };

  PriceInfo.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new PriceInfo();
    
    if (data['Price']) {
      _this['Price'] = ApiClient.convertToType(data['Price'], 'Integer');
    }
    
    if (data['CurrencyCode']) {
      _this['CurrencyCode'] = ApiClient.convertToType(data['CurrencyCode'], 'String');
    }
    
    if (data['FormattedPrice']) {
      _this['FormattedPrice'] = ApiClient.convertToType(data['FormattedPrice'], 'String');
    }
    
    if (data['CurrencyFormat']) {
      _this['CurrencyFormat'] = ApiClient.convertToType(data['CurrencyFormat'], 'String');
    }
    
    if (data['CurrencyDigits']) {
      _this['CurrencyDigits'] = ApiClient.convertToType(data['CurrencyDigits'], 'Integer');
    }
    
    return _this;
  }

  
  
  /**
   * @return {Integer}
   **/
  PriceInfo.prototype.getPrice = function() {
    return this['Price'];
  }

  /**
   * @param {Integer} price
   **/
  PriceInfo.prototype.setPrice = function(price) {
    this['Price'] = price;
  }
  
  /**
   * @return {String}
   **/
  PriceInfo.prototype.getCurrencyCode = function() {
    return this['CurrencyCode'];
  }

  /**
   * @param {String} currencyCode
   **/
  PriceInfo.prototype.setCurrencyCode = function(currencyCode) {
    this['CurrencyCode'] = currencyCode;
  }
  
  /**
   * @return {String}
   **/
  PriceInfo.prototype.getFormattedPrice = function() {
    return this['FormattedPrice'];
  }

  /**
   * @param {String} formattedPrice
   **/
  PriceInfo.prototype.setFormattedPrice = function(formattedPrice) {
    this['FormattedPrice'] = formattedPrice;
  }
  
  /**
   * @return {String}
   **/
  PriceInfo.prototype.getCurrencyFormat = function() {
    return this['CurrencyFormat'];
  }

  /**
   * @param {String} currencyFormat
   **/
  PriceInfo.prototype.setCurrencyFormat = function(currencyFormat) {
    this['CurrencyFormat'] = currencyFormat;
  }
  
  /**
   * @return {Integer}
   **/
  PriceInfo.prototype.getCurrencyDigits = function() {
    return this['CurrencyDigits'];
  }

  /**
   * @param {Integer} currencyDigits
   **/
  PriceInfo.prototype.setCurrencyDigits = function(currencyDigits) {
    this['CurrencyDigits'] = currencyDigits;
  }
  
  

  

  if (module) {
    module.PriceInfo = PriceInfo;
  }

  return PriceInfo;
  
  
}));
