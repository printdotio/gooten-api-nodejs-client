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
  
  
  var PaymentValidationResponse = function PaymentValidationResponse(isValid) { 
    
    /**
     * datatype: Boolean
     * required 
     **/
    this['IsValid'] = isValid;
  };

  PaymentValidationResponse.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new PaymentValidationResponse();
    
    if (data['IsValid']) {
      _this['IsValid'] = ApiClient.convertToType(data['IsValid'], 'Boolean');
    }
    
    return _this;
  }

  
  
  /**
   * @return {Boolean}
   **/
  PaymentValidationResponse.prototype.getIsValid = function() {
    return this['IsValid'];
  }

  /**
   * @param {Boolean} isValid
   **/
  PaymentValidationResponse.prototype.setIsValid = function(isValid) {
    this['IsValid'] = isValid;
  }
  
  

  

  if (module) {
    module.PaymentValidationResponse = PaymentValidationResponse;
  }

  return PaymentValidationResponse;
  
  
}));
