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
    root.GootenApiClient.OrderStatusUpdateResult = factory(root.GootenApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';
  
  
  var OrderStatusUpdateResult = function OrderStatusUpdateResult(hadError) { 
    
    /**
     * datatype: Boolean
     * required 
     **/
    this['HadError'] = hadError;
  };

  OrderStatusUpdateResult.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new OrderStatusUpdateResult();
    
    if (data['HadError']) {
      _this['HadError'] = ApiClient.convertToType(data['HadError'], 'Boolean');
    }
    
    return _this;
  }

  
  
  /**
   * @return {Boolean}
   **/
  OrderStatusUpdateResult.prototype.getHadError = function() {
    return this['HadError'];
  }

  /**
   * @param {Boolean} hadError
   **/
  OrderStatusUpdateResult.prototype.setHadError = function(hadError) {
    this['HadError'] = hadError;
  }
  
  

  

  return OrderStatusUpdateResult;
  
  
}));
