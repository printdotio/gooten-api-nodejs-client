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
  
  
  var UserInfo = function UserInfo(languageCode, countryCode, countryName, currencyName, currencyCode, currencyFormat) { 
    
    /**
     * datatype: String
     * required 
     **/
    this['LanguageCode'] = languageCode;
    /**
     * datatype: String
     * required 
     **/
    this['CountryCode'] = countryCode;
    /**
     * datatype: String
     * required 
     **/
    this['CountryName'] = countryName;
    /**
     * datatype: String
     * required 
     **/
    this['CurrencyName'] = currencyName;
    /**
     * datatype: String
     * required 
     **/
    this['CurrencyCode'] = currencyCode;
    /**
     * datatype: String
     * required 
     **/
    this['CurrencyFormat'] = currencyFormat;
  };

  UserInfo.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new UserInfo();
    
    if (data['LanguageCode']) {
      _this['LanguageCode'] = ApiClient.convertToType(data['LanguageCode'], 'String');
    }
    
    if (data['CountryCode']) {
      _this['CountryCode'] = ApiClient.convertToType(data['CountryCode'], 'String');
    }
    
    if (data['CountryName']) {
      _this['CountryName'] = ApiClient.convertToType(data['CountryName'], 'String');
    }
    
    if (data['CurrencyName']) {
      _this['CurrencyName'] = ApiClient.convertToType(data['CurrencyName'], 'String');
    }
    
    if (data['CurrencyCode']) {
      _this['CurrencyCode'] = ApiClient.convertToType(data['CurrencyCode'], 'String');
    }
    
    if (data['CurrencyFormat']) {
      _this['CurrencyFormat'] = ApiClient.convertToType(data['CurrencyFormat'], 'String');
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  UserInfo.prototype.getLanguageCode = function() {
    return this['LanguageCode'];
  }

  /**
   * @param {String} languageCode
   **/
  UserInfo.prototype.setLanguageCode = function(languageCode) {
    this['LanguageCode'] = languageCode;
  }
  
  /**
   * @return {String}
   **/
  UserInfo.prototype.getCountryCode = function() {
    return this['CountryCode'];
  }

  /**
   * @param {String} countryCode
   **/
  UserInfo.prototype.setCountryCode = function(countryCode) {
    this['CountryCode'] = countryCode;
  }
  
  /**
   * @return {String}
   **/
  UserInfo.prototype.getCountryName = function() {
    return this['CountryName'];
  }

  /**
   * @param {String} countryName
   **/
  UserInfo.prototype.setCountryName = function(countryName) {
    this['CountryName'] = countryName;
  }
  
  /**
   * @return {String}
   **/
  UserInfo.prototype.getCurrencyName = function() {
    return this['CurrencyName'];
  }

  /**
   * @param {String} currencyName
   **/
  UserInfo.prototype.setCurrencyName = function(currencyName) {
    this['CurrencyName'] = currencyName;
  }
  
  /**
   * @return {String}
   **/
  UserInfo.prototype.getCurrencyCode = function() {
    return this['CurrencyCode'];
  }

  /**
   * @param {String} currencyCode
   **/
  UserInfo.prototype.setCurrencyCode = function(currencyCode) {
    this['CurrencyCode'] = currencyCode;
  }
  
  /**
   * @return {String}
   **/
  UserInfo.prototype.getCurrencyFormat = function() {
    return this['CurrencyFormat'];
  }

  /**
   * @param {String} currencyFormat
   **/
  UserInfo.prototype.setCurrencyFormat = function(currencyFormat) {
    this['CurrencyFormat'] = currencyFormat;
  }
  
  

  

  if (module) {
    module.UserInfo = UserInfo;
  }

  return UserInfo;
  
  
}));
