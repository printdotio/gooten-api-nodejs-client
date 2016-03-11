(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './Image'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./Image'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    factory(root.SwaggerJsClient, root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.Image);
  }
}(this, function(module, ApiClient, Image) {
  'use strict';
  
  
  var FileResult = function FileResult(price) { 
    
    /**
     * datatype: [Image]
     * required 
     **/
    this['Price'] = price;
  };

  FileResult.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new FileResult();
    
    if (data['Price']) {
      _this['Price'] = ApiClient.convertToType(data['Price'], [Image]);
    }
    
    return _this;
  }

  
  
  /**
   * @return {[Image]}
   **/
  FileResult.prototype.getPrice = function() {
    return this['Price'];
  }

  /**
   * @param {[Image]} price
   **/
  FileResult.prototype.setPrice = function(price) {
    this['Price'] = price;
  }
  
  

  

  if (module) {
    module.FileResult = FileResult;
  }

  return FileResult;
  
  
}));
