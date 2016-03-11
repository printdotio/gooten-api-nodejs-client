(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './ValidationFailure'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./ValidationFailure'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    factory(root.SwaggerJsClient, root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.ValidationFailure);
  }
}(this, function(module, ApiClient, ValidationFailure) {
  'use strict';
  
  
  var ImageValidatorResult = function ImageValidatorResult(hadError, issues) { 
    
    /**
     * datatype: Boolean
     * required 
     **/
    this['HadError'] = hadError;
    /**
     * datatype: [ValidationFailure]
     * required 
     **/
    this['Issues'] = issues;
  };

  ImageValidatorResult.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new ImageValidatorResult();
    
    if (data['HadError']) {
      _this['HadError'] = ApiClient.convertToType(data['HadError'], 'Boolean');
    }
    
    if (data['Issues']) {
      _this['Issues'] = ApiClient.convertToType(data['Issues'], [ValidationFailure]);
    }
    
    return _this;
  }

  
  
  /**
   * @return {Boolean}
   **/
  ImageValidatorResult.prototype.getHadError = function() {
    return this['HadError'];
  }

  /**
   * @param {Boolean} hadError
   **/
  ImageValidatorResult.prototype.setHadError = function(hadError) {
    this['HadError'] = hadError;
  }
  
  /**
   * @return {[ValidationFailure]}
   **/
  ImageValidatorResult.prototype.getIssues = function() {
    return this['Issues'];
  }

  /**
   * @param {[ValidationFailure]} issues
   **/
  ImageValidatorResult.prototype.setIssues = function(issues) {
    this['Issues'] = issues;
  }
  
  

  

  if (module) {
    module.ImageValidatorResult = ImageValidatorResult;
  }

  return ImageValidatorResult;
  
  
}));
