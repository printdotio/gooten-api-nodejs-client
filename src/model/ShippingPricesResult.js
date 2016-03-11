(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './ShipItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./ShipItem'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    factory(root.SwaggerJsClient, root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.ShipItem);
  }
}(this, function(module, ApiClient, ShipItem) {
  'use strict';
  
  
  var ShippingPricesResult = function ShippingPricesResult(result) { 
    
    /**
     * datatype: [ShipItem]
     * required 
     **/
    this['Result'] = result;
  };

  ShippingPricesResult.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new ShippingPricesResult();
    
    if (data['Result']) {
      _this['Result'] = ApiClient.convertToType(data['Result'], [ShipItem]);
    }
    
    return _this;
  }

  
  
  /**
   * @return {[ShipItem]}
   **/
  ShippingPricesResult.prototype.getResult = function() {
    return this['Result'];
  }

  /**
   * @param {[ShipItem]} result
   **/
  ShippingPricesResult.prototype.setResult = function(result) {
    this['Result'] = result;
  }
  
  

  

  if (module) {
    module.ShippingPricesResult = ShippingPricesResult;
  }

  return ShippingPricesResult;
  
  
}));
