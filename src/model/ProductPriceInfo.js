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
  
  
  var ProductPriceInfo = function ProductPriceInfo(price, currencyCode, formattedPrice, currencyFormat, currencyDigits) { 
    
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

  ProductPriceInfo.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new ProductPriceInfo();
    
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
  ProductPriceInfo.prototype.getPrice = function() {
    return this['Price'];
  }

  /**
   * @param {Integer} price
   **/
  ProductPriceInfo.prototype.setPrice = function(price) {
    this['Price'] = price;
  }
  
  /**
   * @return {String}
   **/
  ProductPriceInfo.prototype.getCurrencyCode = function() {
    return this['CurrencyCode'];
  }

  /**
   * @param {String} currencyCode
   **/
  ProductPriceInfo.prototype.setCurrencyCode = function(currencyCode) {
    this['CurrencyCode'] = currencyCode;
  }
  
  /**
   * @return {String}
   **/
  ProductPriceInfo.prototype.getFormattedPrice = function() {
    return this['FormattedPrice'];
  }

  /**
   * @param {String} formattedPrice
   **/
  ProductPriceInfo.prototype.setFormattedPrice = function(formattedPrice) {
    this['FormattedPrice'] = formattedPrice;
  }
  
  /**
   * @return {String}
   **/
  ProductPriceInfo.prototype.getCurrencyFormat = function() {
    return this['CurrencyFormat'];
  }

  /**
   * @param {String} currencyFormat
   **/
  ProductPriceInfo.prototype.setCurrencyFormat = function(currencyFormat) {
    this['CurrencyFormat'] = currencyFormat;
  }
  
  /**
   * @return {Integer}
   **/
  ProductPriceInfo.prototype.getCurrencyDigits = function() {
    return this['CurrencyDigits'];
  }

  /**
   * @param {Integer} currencyDigits
   **/
  ProductPriceInfo.prototype.setCurrencyDigits = function(currencyDigits) {
    this['CurrencyDigits'] = currencyDigits;
  }
  
  

  

  if (module) {
    module.ProductPriceInfo = ProductPriceInfo;
  }

  return ProductPriceInfo;
  
  
}));
