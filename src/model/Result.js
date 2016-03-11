(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './Address'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./Address'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    factory(root.SwaggerJsClient, root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.Address);
  }
}(this, function(module, ApiClient, Address) {
  'use strict';
  
  
  var Result = function Result(isValid, reason, score, proposedAddress) { 
    
    /**
     * datatype: Boolean
     * required 
     **/
    this['IsValid'] = isValid;
    /**
     * datatype: String
     * required 
     **/
    this['Reason'] = reason;
    /**
     * datatype: Integer
     * required 
     **/
    this['Score'] = score;
    /**
     * datatype: Address
     * required 
     **/
    this['ProposedAddress'] = proposedAddress;
  };

  Result.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new Result();
    
    if (data['IsValid']) {
      _this['IsValid'] = ApiClient.convertToType(data['IsValid'], 'Boolean');
    }
    
    if (data['Reason']) {
      _this['Reason'] = ApiClient.convertToType(data['Reason'], 'String');
    }
    
    if (data['Score']) {
      _this['Score'] = ApiClient.convertToType(data['Score'], 'Integer');
    }
    
    if (data['ProposedAddress']) {
      _this['ProposedAddress'] = Address.constructFromObject(data['ProposedAddress']);
    }
    
    return _this;
  }

  
  
  /**
   * @return {Boolean}
   **/
  Result.prototype.getIsValid = function() {
    return this['IsValid'];
  }

  /**
   * @param {Boolean} isValid
   **/
  Result.prototype.setIsValid = function(isValid) {
    this['IsValid'] = isValid;
  }
  
  /**
   * @return {String}
   **/
  Result.prototype.getReason = function() {
    return this['Reason'];
  }

  /**
   * @param {String} reason
   **/
  Result.prototype.setReason = function(reason) {
    this['Reason'] = reason;
  }
  
  /**
   * @return {Integer}
   **/
  Result.prototype.getScore = function() {
    return this['Score'];
  }

  /**
   * @param {Integer} score
   **/
  Result.prototype.setScore = function(score) {
    this['Score'] = score;
  }
  
  /**
   * @return {Address}
   **/
  Result.prototype.getProposedAddress = function() {
    return this['ProposedAddress'];
  }

  /**
   * @param {Address} proposedAddress
   **/
  Result.prototype.setProposedAddress = function(proposedAddress) {
    this['ProposedAddress'] = proposedAddress;
  }
  
  

  

  if (module) {
    module.Result = Result;
  }

  return Result;
  
  
}));
