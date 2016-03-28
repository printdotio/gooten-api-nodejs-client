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
    root.GootenApiClient.Payment = factory(root.GootenApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';
  
  
  var Payment = function Payment(currencyCode) { 
    
    /**
     * datatype: String
     * required 
     **/
    this['CurrencyCode'] = currencyCode;
  };

  Payment.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new Payment();
    
    if (data['CurrencyCode']) {
      _this['CurrencyCode'] = ApiClient.convertToType(data['CurrencyCode'], 'String');
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  Payment.prototype.getCurrencyCode = function() {
    return this['CurrencyCode'];
  }

  /**
   * @param {String} currencyCode
   **/
  Payment.prototype.setCurrencyCode = function(currencyCode) {
    this['CurrencyCode'] = currencyCode;
  }
  
  

  

  return Payment;
  
  
}));
