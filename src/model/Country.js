(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Currency'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Currency'));
  } else {
    // Browser globals (root is window)
    if (!root.GootenApiClient) {
      root.GootenApiClient = {};
    }
    root.GootenApiClient.Country = factory(root.GootenApiClient.ApiClient, root.GootenApiClient.Currency);
  }
}(this, function(ApiClient, Currency) {
  'use strict';
  
  
  var Country = function Country(name, code, isSupported, measurementCode, flagUrl, defaultCurrency) { 
    
    /**
     * datatype: String
     * required 
     **/
    this['Name'] = name;
    /**
     * datatype: String
     * required 
     **/
    this['Code'] = code;
    /**
     * datatype: Boolean
     * required 
     **/
    this['IsSupported'] = isSupported;
    /**
     * datatype: String
     * required 
     **/
    this['MeasurementCode'] = measurementCode;
    /**
     * datatype: String
     * required 
     **/
    this['FlagUrl'] = flagUrl;
    /**
     * datatype: Currency
     * required 
     **/
    this['DefaultCurrency'] = defaultCurrency;
  };

  Country.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new Country();
    
    if (data['Name']) {
      _this['Name'] = ApiClient.convertToType(data['Name'], 'String');
    }
    
    if (data['Code']) {
      _this['Code'] = ApiClient.convertToType(data['Code'], 'String');
    }
    
    if (data['IsSupported']) {
      _this['IsSupported'] = ApiClient.convertToType(data['IsSupported'], 'Boolean');
    }
    
    if (data['MeasurementCode']) {
      _this['MeasurementCode'] = ApiClient.convertToType(data['MeasurementCode'], 'String');
    }
    
    if (data['FlagUrl']) {
      _this['FlagUrl'] = ApiClient.convertToType(data['FlagUrl'], 'String');
    }
    
    if (data['DefaultCurrency']) {
      _this['DefaultCurrency'] = Currency.constructFromObject(data['DefaultCurrency']);
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  Country.prototype.getName = function() {
    return this['Name'];
  }

  /**
   * @param {String} name
   **/
  Country.prototype.setName = function(name) {
    this['Name'] = name;
  }
  
  /**
   * @return {String}
   **/
  Country.prototype.getCode = function() {
    return this['Code'];
  }

  /**
   * @param {String} code
   **/
  Country.prototype.setCode = function(code) {
    this['Code'] = code;
  }
  
  /**
   * @return {Boolean}
   **/
  Country.prototype.getIsSupported = function() {
    return this['IsSupported'];
  }

  /**
   * @param {Boolean} isSupported
   **/
  Country.prototype.setIsSupported = function(isSupported) {
    this['IsSupported'] = isSupported;
  }
  
  /**
   * @return {String}
   **/
  Country.prototype.getMeasurementCode = function() {
    return this['MeasurementCode'];
  }

  /**
   * @param {String} measurementCode
   **/
  Country.prototype.setMeasurementCode = function(measurementCode) {
    this['MeasurementCode'] = measurementCode;
  }
  
  /**
   * @return {String}
   **/
  Country.prototype.getFlagUrl = function() {
    return this['FlagUrl'];
  }

  /**
   * @param {String} flagUrl
   **/
  Country.prototype.setFlagUrl = function(flagUrl) {
    this['FlagUrl'] = flagUrl;
  }
  
  /**
   * @return {Currency}
   **/
  Country.prototype.getDefaultCurrency = function() {
    return this['DefaultCurrency'];
  }

  /**
   * @param {Currency} defaultCurrency
   **/
  Country.prototype.setDefaultCurrency = function(defaultCurrency) {
    this['DefaultCurrency'] = defaultCurrency;
  }
  
  

  

  return Country;
  
  
}));
