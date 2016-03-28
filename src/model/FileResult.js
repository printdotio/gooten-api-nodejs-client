(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Image'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Image'));
  } else {
    // Browser globals (root is window)
    if (!root.GootenApiClient) {
      root.GootenApiClient = {};
    }
    root.GootenApiClient.FileResult = factory(root.GootenApiClient.ApiClient, root.GootenApiClient.Image);
  }
}(this, function(ApiClient, Image) {
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
  
  

  

  return FileResult;
  
  
}));
