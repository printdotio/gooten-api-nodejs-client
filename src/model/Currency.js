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
  
  
  var Currency = function Currency(name, code, format) { 
    
    /**
     * datatype: String
     * required 
     **/
    this['Name'] = name;
    /**
     * datatype: String
     * required 
     **/
    this['Code'] = code;
    /**
     * datatype: String
     * required 
     **/
    this['Format'] = format;
  };

  Currency.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new Currency();
    
    if (data['Name']) {
      _this['Name'] = ApiClient.convertToType(data['Name'], 'String');
    }
    
    if (data['Code']) {
      _this['Code'] = ApiClient.convertToType(data['Code'], 'String');
    }
    
    if (data['Format']) {
      _this['Format'] = ApiClient.convertToType(data['Format'], 'String');
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  Currency.prototype.getName = function() {
    return this['Name'];
  }

  /**
   * @param {String} name
   **/
  Currency.prototype.setName = function(name) {
    this['Name'] = name;
  }
  
  /**
   * @return {String}
   **/
  Currency.prototype.getCode = function() {
    return this['Code'];
  }

  /**
   * @param {String} code
   **/
  Currency.prototype.setCode = function(code) {
    this['Code'] = code;
  }
  
  /**
   * @return {String}
   **/
  Currency.prototype.getFormat = function() {
    return this['Format'];
  }

  /**
   * @param {String} format
   **/
  Currency.prototype.setFormat = function(format) {
    this['Format'] = format;
  }
  
  

  

  if (module) {
    module.Currency = Currency;
  }

  return Currency;
  
  
}));
