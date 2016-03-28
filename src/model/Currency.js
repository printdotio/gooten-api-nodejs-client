(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.GootenApiClient) {
      root.GootenApiClient = {};
    }
    root.GootenApiClient.Currency = factory(root.GootenApiClient.ApiClient);
  }
}(this, function(ApiClient) {
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
  
  

  

  return Currency;
  
  
}));
