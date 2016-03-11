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
  
  
  var Address = function Address(city, countryCode, postalCode, stateOrProvinceCode, streetLines) { 
    
    /**
     * datatype: String
     * required 
     **/
    this['City'] = city;
    /**
     * datatype: String
     * required 
     **/
    this['CountryCode'] = countryCode;
    /**
     * datatype: String
     * required 
     **/
    this['PostalCode'] = postalCode;
    /**
     * datatype: String
     * required 
     **/
    this['StateOrProvinceCode'] = stateOrProvinceCode;
    /**
     * datatype: [String]
     * required 
     **/
    this['StreetLines'] = streetLines;
  };

  Address.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new Address();
    
    if (data['City']) {
      _this['City'] = ApiClient.convertToType(data['City'], 'String');
    }
    
    if (data['CountryCode']) {
      _this['CountryCode'] = ApiClient.convertToType(data['CountryCode'], 'String');
    }
    
    if (data['PostalCode']) {
      _this['PostalCode'] = ApiClient.convertToType(data['PostalCode'], 'String');
    }
    
    if (data['StateOrProvinceCode']) {
      _this['StateOrProvinceCode'] = ApiClient.convertToType(data['StateOrProvinceCode'], 'String');
    }
    
    if (data['StreetLines']) {
      _this['StreetLines'] = ApiClient.convertToType(data['StreetLines'], ['String']);
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  Address.prototype.getCity = function() {
    return this['City'];
  }

  /**
   * @param {String} city
   **/
  Address.prototype.setCity = function(city) {
    this['City'] = city;
  }
  
  /**
   * @return {String}
   **/
  Address.prototype.getCountryCode = function() {
    return this['CountryCode'];
  }

  /**
   * @param {String} countryCode
   **/
  Address.prototype.setCountryCode = function(countryCode) {
    this['CountryCode'] = countryCode;
  }
  
  /**
   * @return {String}
   **/
  Address.prototype.getPostalCode = function() {
    return this['PostalCode'];
  }

  /**
   * @param {String} postalCode
   **/
  Address.prototype.setPostalCode = function(postalCode) {
    this['PostalCode'] = postalCode;
  }
  
  /**
   * @return {String}
   **/
  Address.prototype.getStateOrProvinceCode = function() {
    return this['StateOrProvinceCode'];
  }

  /**
   * @param {String} stateOrProvinceCode
   **/
  Address.prototype.setStateOrProvinceCode = function(stateOrProvinceCode) {
    this['StateOrProvinceCode'] = stateOrProvinceCode;
  }
  
  /**
   * @return {[String]}
   **/
  Address.prototype.getStreetLines = function() {
    return this['StreetLines'];
  }

  /**
   * @param {[String]} streetLines
   **/
  Address.prototype.setStreetLines = function(streetLines) {
    this['StreetLines'] = streetLines;
  }
  
  

  

  if (module) {
    module.Address = Address;
  }

  return Address;
  
  
}));
