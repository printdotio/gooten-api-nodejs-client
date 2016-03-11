(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './Country'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./Country'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    factory(root.SwaggerJsClient, root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.Country);
  }
}(this, function(module, ApiClient, Country) {
  'use strict';
  
  
  var CountryList = function CountryList(countries) { 
    
    /**
     * datatype: [Country]
     * required 
     **/
    this['Countries'] = countries;
  };

  CountryList.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new CountryList();
    
    if (data['Countries']) {
      _this['Countries'] = ApiClient.convertToType(data['Countries'], [Country]);
    }
    
    return _this;
  }

  
  
  /**
   * @return {[Country]}
   **/
  CountryList.prototype.getCountries = function() {
    return this['Countries'];
  }

  /**
   * @param {[Country]} countries
   **/
  CountryList.prototype.setCountries = function(countries) {
    this['Countries'] = countries;
  }
  
  

  

  if (module) {
    module.CountryList = CountryList;
  }

  return CountryList;
  
  
}));
