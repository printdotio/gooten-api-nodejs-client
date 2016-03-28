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
    root.GootenApiClient.Meta = factory(root.GootenApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';
  
  
  var Meta = function Meta(key, value) { 
    
    /**
     * datatype: String
     * required 
     **/
    this['Key'] = key;
    /**
     * datatype: String
     * required 
     **/
    this['Value'] = value;
  };

  Meta.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new Meta();
    
    if (data['Key']) {
      _this['Key'] = ApiClient.convertToType(data['Key'], 'String');
    }
    
    if (data['Value']) {
      _this['Value'] = ApiClient.convertToType(data['Value'], 'String');
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  Meta.prototype.getKey = function() {
    return this['Key'];
  }

  /**
   * @param {String} key
   **/
  Meta.prototype.setKey = function(key) {
    this['Key'] = key;
  }
  
  /**
   * @return {String}
   **/
  Meta.prototype.getValue = function() {
    return this['Value'];
  }

  /**
   * @param {String} value
   **/
  Meta.prototype.setValue = function(value) {
    this['Value'] = value;
  }
  
  

  

  return Meta;
  
  
}));
