(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './SkuQuantityPair'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SkuQuantityPair'));
  } else {
    // Browser globals (root is window)
    if (!root.GootenApiClient) {
      root.GootenApiClient = {};
    }
    root.GootenApiClient.ShippingPricesRequest = factory(root.GootenApiClient.ApiClient, root.GootenApiClient.SkuQuantityPair);
  }
}(this, function(ApiClient, SkuQuantityPair) {
  'use strict';
  
  
  var ShippingPricesRequest = function ShippingPricesRequest(shipToPostalCode, shipToCountry, shipToState, currencyCode, languageCode, items) { 
    
    /**
     * datatype: String
     * required 
     **/
    this['ShipToPostalCode'] = shipToPostalCode;
    /**
     * datatype: String
     * required 
     **/
    this['ShipToCountry'] = shipToCountry;
    /**
     * datatype: String
     * required 
     **/
    this['ShipToState'] = shipToState;
    /**
     * datatype: String
     * required 
     **/
    this['CurrencyCode'] = currencyCode;
    /**
     * datatype: String
     * required 
     **/
    this['LanguageCode'] = languageCode;
    /**
     * datatype: [SkuQuantityPair]
     * required 
     **/
    this['Items'] = items;
  };

  ShippingPricesRequest.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new ShippingPricesRequest();
    
    if (data['ShipToPostalCode']) {
      _this['ShipToPostalCode'] = ApiClient.convertToType(data['ShipToPostalCode'], 'String');
    }
    
    if (data['ShipToCountry']) {
      _this['ShipToCountry'] = ApiClient.convertToType(data['ShipToCountry'], 'String');
    }
    
    if (data['ShipToState']) {
      _this['ShipToState'] = ApiClient.convertToType(data['ShipToState'], 'String');
    }
    
    if (data['CurrencyCode']) {
      _this['CurrencyCode'] = ApiClient.convertToType(data['CurrencyCode'], 'String');
    }
    
    if (data['LanguageCode']) {
      _this['LanguageCode'] = ApiClient.convertToType(data['LanguageCode'], 'String');
    }
    
    if (data['Items']) {
      _this['Items'] = ApiClient.convertToType(data['Items'], [SkuQuantityPair]);
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  ShippingPricesRequest.prototype.getShipToPostalCode = function() {
    return this['ShipToPostalCode'];
  }

  /**
   * @param {String} shipToPostalCode
   **/
  ShippingPricesRequest.prototype.setShipToPostalCode = function(shipToPostalCode) {
    this['ShipToPostalCode'] = shipToPostalCode;
  }
  
  /**
   * @return {String}
   **/
  ShippingPricesRequest.prototype.getShipToCountry = function() {
    return this['ShipToCountry'];
  }

  /**
   * @param {String} shipToCountry
   **/
  ShippingPricesRequest.prototype.setShipToCountry = function(shipToCountry) {
    this['ShipToCountry'] = shipToCountry;
  }
  
  /**
   * @return {String}
   **/
  ShippingPricesRequest.prototype.getShipToState = function() {
    return this['ShipToState'];
  }

  /**
   * @param {String} shipToState
   **/
  ShippingPricesRequest.prototype.setShipToState = function(shipToState) {
    this['ShipToState'] = shipToState;
  }
  
  /**
   * @return {String}
   **/
  ShippingPricesRequest.prototype.getCurrencyCode = function() {
    return this['CurrencyCode'];
  }

  /**
   * @param {String} currencyCode
   **/
  ShippingPricesRequest.prototype.setCurrencyCode = function(currencyCode) {
    this['CurrencyCode'] = currencyCode;
  }
  
  /**
   * @return {String}
   **/
  ShippingPricesRequest.prototype.getLanguageCode = function() {
    return this['LanguageCode'];
  }

  /**
   * @param {String} languageCode
   **/
  ShippingPricesRequest.prototype.setLanguageCode = function(languageCode) {
    this['LanguageCode'] = languageCode;
  }
  
  /**
   * @return {[SkuQuantityPair]}
   **/
  ShippingPricesRequest.prototype.getItems = function() {
    return this['Items'];
  }

  /**
   * @param {[SkuQuantityPair]} items
   **/
  ShippingPricesRequest.prototype.setItems = function(items) {
    this['Items'] = items;
  }
  
  

  

  return ShippingPricesRequest;
  
  
}));
