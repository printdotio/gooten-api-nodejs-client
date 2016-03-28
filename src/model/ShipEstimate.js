(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ShipPrice'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ShipPrice'));
  } else {
    // Browser globals (root is window)
    if (!root.GootenApiClient) {
      root.GootenApiClient = {};
    }
    root.GootenApiClient.ShipEstimate = factory(root.GootenApiClient.ApiClient, root.GootenApiClient.ShipPrice);
  }
}(this, function(ApiClient, ShipPrice) {
  'use strict';
  
  
  var ShipEstimate = function ShipEstimate(minPrice, maxPrice, vendorCountryCode, canShipExpedited, estShipDays) { 
    
    /**
     * datatype: ShipPrice
     * required 
     **/
    this['MinPrice'] = minPrice;
    /**
     * datatype: ShipPrice
     * required 
     **/
    this['MaxPrice'] = maxPrice;
    /**
     * datatype: String
     * required 
     **/
    this['VendorCountryCode'] = vendorCountryCode;
    /**
     * datatype: Boolean
     * required 
     **/
    this['CanShipExpedited'] = canShipExpedited;
    /**
     * datatype: Integer
     * required 
     **/
    this['EstShipDays'] = estShipDays;
  };

  ShipEstimate.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new ShipEstimate();
    
    if (data['MinPrice']) {
      _this['MinPrice'] = ShipPrice.constructFromObject(data['MinPrice']);
    }
    
    if (data['MaxPrice']) {
      _this['MaxPrice'] = ShipPrice.constructFromObject(data['MaxPrice']);
    }
    
    if (data['VendorCountryCode']) {
      _this['VendorCountryCode'] = ApiClient.convertToType(data['VendorCountryCode'], 'String');
    }
    
    if (data['CanShipExpedited']) {
      _this['CanShipExpedited'] = ApiClient.convertToType(data['CanShipExpedited'], 'Boolean');
    }
    
    if (data['EstShipDays']) {
      _this['EstShipDays'] = ApiClient.convertToType(data['EstShipDays'], 'Integer');
    }
    
    return _this;
  }

  
  
  /**
   * @return {ShipPrice}
   **/
  ShipEstimate.prototype.getMinPrice = function() {
    return this['MinPrice'];
  }

  /**
   * @param {ShipPrice} minPrice
   **/
  ShipEstimate.prototype.setMinPrice = function(minPrice) {
    this['MinPrice'] = minPrice;
  }
  
  /**
   * @return {ShipPrice}
   **/
  ShipEstimate.prototype.getMaxPrice = function() {
    return this['MaxPrice'];
  }

  /**
   * @param {ShipPrice} maxPrice
   **/
  ShipEstimate.prototype.setMaxPrice = function(maxPrice) {
    this['MaxPrice'] = maxPrice;
  }
  
  /**
   * @return {String}
   **/
  ShipEstimate.prototype.getVendorCountryCode = function() {
    return this['VendorCountryCode'];
  }

  /**
   * @param {String} vendorCountryCode
   **/
  ShipEstimate.prototype.setVendorCountryCode = function(vendorCountryCode) {
    this['VendorCountryCode'] = vendorCountryCode;
  }
  
  /**
   * @return {Boolean}
   **/
  ShipEstimate.prototype.getCanShipExpedited = function() {
    return this['CanShipExpedited'];
  }

  /**
   * @param {Boolean} canShipExpedited
   **/
  ShipEstimate.prototype.setCanShipExpedited = function(canShipExpedited) {
    this['CanShipExpedited'] = canShipExpedited;
  }
  
  /**
   * @return {Integer}
   **/
  ShipEstimate.prototype.getEstShipDays = function() {
    return this['EstShipDays'];
  }

  /**
   * @param {Integer} estShipDays
   **/
  ShipEstimate.prototype.setEstShipDays = function(estShipDays) {
    this['EstShipDays'] = estShipDays;
  }
  
  

  

  return ShipEstimate;
  
  
}));
