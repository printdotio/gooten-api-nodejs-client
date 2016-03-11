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
  
  
  var File = function File(name, url) { 
    
    /**
     * datatype: String
     * required 
     **/
    this['Name'] = name;
    /**
     * datatype: String
     * required 
     **/
    this['Url'] = url;
  };

  File.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new File();
    
    if (data['Name']) {
      _this['Name'] = ApiClient.convertToType(data['Name'], 'String');
    }
    
    if (data['Url']) {
      _this['Url'] = ApiClient.convertToType(data['Url'], 'String');
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  File.prototype.getName = function() {
    return this['Name'];
  }

  /**
   * @param {String} name
   **/
  File.prototype.setName = function(name) {
    this['Name'] = name;
  }
  
  /**
   * @return {String}
   **/
  File.prototype.getUrl = function() {
    return this['Url'];
  }

  /**
   * @param {String} url
   **/
  File.prototype.setUrl = function(url) {
    this['Url'] = url;
  }
  
  

  

  if (module) {
    module.File = File;
  }

  return File;
  
  
}));
