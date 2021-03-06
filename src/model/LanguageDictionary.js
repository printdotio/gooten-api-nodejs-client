(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './KeyValuePair'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./KeyValuePair'));
  } else {
    // Browser globals (root is window)
    if (!root.GootenApiClient) {
      root.GootenApiClient = {};
    }
    root.GootenApiClient.LanguageDictionary = factory(root.GootenApiClient.ApiClient, root.GootenApiClient.KeyValuePair);
  }
}(this, function(ApiClient, KeyValuePair) {
  'use strict';
  
  
  var LanguageDictionary = function LanguageDictionary(category, values) { 
    
    /**
     * datatype: String
     * required 
     **/
    this['category'] = category;
    /**
     * datatype: [KeyValuePair]
     * required 
     **/
    this['values'] = values;
  };

  LanguageDictionary.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new LanguageDictionary();
    
    if (data['category']) {
      _this['category'] = ApiClient.convertToType(data['category'], 'String');
    }
    
    if (data['values']) {
      _this['values'] = ApiClient.convertToType(data['values'], [KeyValuePair]);
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  LanguageDictionary.prototype.getCategory = function() {
    return this['category'];
  }

  /**
   * @param {String} category
   **/
  LanguageDictionary.prototype.setCategory = function(category) {
    this['category'] = category;
  }
  
  /**
   * @return {[KeyValuePair]}
   **/
  LanguageDictionary.prototype.getValues = function() {
    return this['values'];
  }

  /**
   * @param {[KeyValuePair]} values
   **/
  LanguageDictionary.prototype.setValues = function(values) {
    this['values'] = values;
  }
  
  

  

  return LanguageDictionary;
  
  
}));
