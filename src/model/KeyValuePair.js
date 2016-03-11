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
  
  
  var KeyValuePair = function KeyValuePair(key, value) { 
    
    /**
     * datatype: String
     * required 
     **/
    this['key'] = key;
    /**
     * datatype: String
     * required 
     **/
    this['value'] = value;
  };

  KeyValuePair.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new KeyValuePair();
    
    if (data['key']) {
      _this['key'] = ApiClient.convertToType(data['key'], 'String');
    }
    
    if (data['value']) {
      _this['value'] = ApiClient.convertToType(data['value'], 'String');
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  KeyValuePair.prototype.getKey = function() {
    return this['key'];
  }

  /**
   * @param {String} key
   **/
  KeyValuePair.prototype.setKey = function(key) {
    this['key'] = key;
  }
  
  /**
   * @return {String}
   **/
  KeyValuePair.prototype.getValue = function() {
    return this['value'];
  }

  /**
   * @param {String} value
   **/
  KeyValuePair.prototype.setValue = function(value) {
    this['value'] = value;
  }
  
  

  

  if (module) {
    module.KeyValuePair = KeyValuePair;
  }

  return KeyValuePair;
  
  
}));
