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
  
  
  var OrderResult = function OrderResult(id) { 
    
    /**
     * datatype: String
     * required 
     **/
    this['Id'] = id;
  };

  OrderResult.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new OrderResult();
    
    if (data['Id']) {
      _this['Id'] = ApiClient.convertToType(data['Id'], 'String');
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  OrderResult.prototype.getId = function() {
    return this['Id'];
  }

  /**
   * @param {String} id
   **/
  OrderResult.prototype.setId = function(id) {
    this['Id'] = id;
  }
  
  

  

  if (module) {
    module.OrderResult = OrderResult;
  }

  return OrderResult;
  
  
}));
