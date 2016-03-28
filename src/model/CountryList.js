(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Country'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Country'));
  } else {
    // Browser globals (root is window)
    if (!root.GootenApiClient) {
      root.GootenApiClient = {};
    }
    root.GootenApiClient.CountryList = factory(root.GootenApiClient.ApiClient, root.GootenApiClient.Country);
  }
}(this, function(ApiClient, Country) {
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
  
  

  

  return CountryList;
  
  
}));
