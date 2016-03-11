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
  
  
  var ValidationFailure = function ValidationFailure(propertyName, errorMessage, attemptedValue) { 
    
    /**
     * datatype: String
     * required 
     **/
    this['PropertyName'] = propertyName;
    /**
     * datatype: String
     * required 
     **/
    this['ErrorMessage'] = errorMessage;
    /**
     * datatype: String
     * required 
     **/
    this['AttemptedValue'] = attemptedValue;
  };

  ValidationFailure.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new ValidationFailure();
    
    if (data['PropertyName']) {
      _this['PropertyName'] = ApiClient.convertToType(data['PropertyName'], 'String');
    }
    
    if (data['ErrorMessage']) {
      _this['ErrorMessage'] = ApiClient.convertToType(data['ErrorMessage'], 'String');
    }
    
    if (data['AttemptedValue']) {
      _this['AttemptedValue'] = ApiClient.convertToType(data['AttemptedValue'], 'String');
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  ValidationFailure.prototype.getPropertyName = function() {
    return this['PropertyName'];
  }

  /**
   * @param {String} propertyName
   **/
  ValidationFailure.prototype.setPropertyName = function(propertyName) {
    this['PropertyName'] = propertyName;
  }
  
  /**
   * @return {String}
   **/
  ValidationFailure.prototype.getErrorMessage = function() {
    return this['ErrorMessage'];
  }

  /**
   * @param {String} errorMessage
   **/
  ValidationFailure.prototype.setErrorMessage = function(errorMessage) {
    this['ErrorMessage'] = errorMessage;
  }
  
  /**
   * @return {String}
   **/
  ValidationFailure.prototype.getAttemptedValue = function() {
    return this['AttemptedValue'];
  }

  /**
   * @param {String} attemptedValue
   **/
  ValidationFailure.prototype.setAttemptedValue = function(attemptedValue) {
    this['AttemptedValue'] = attemptedValue;
  }
  
  

  

  if (module) {
    module.ValidationFailure = ValidationFailure;
  }

  return ValidationFailure;
  
  
}));
