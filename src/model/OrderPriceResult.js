(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './PriceInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./PriceInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    factory(root.SwaggerJsClient, root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.PriceInfo);
  }
}(this, function(module, ApiClient, PriceInfo) {
  'use strict';
  
  
  var OrderPriceResult = function OrderPriceResult(items, shipping, tax, couponCode, couponType, couponUsed, hadCouponApply, dollarsOff, percentOff, hadError) { 
    
    /**
     * datatype: PriceInfo
     * required 
     **/
    this['Items'] = items;
    /**
     * datatype: PriceInfo
     * required 
     **/
    this['Shipping'] = shipping;
    /**
     * datatype: PriceInfo
     * required 
     **/
    this['Tax'] = tax;
    /**
     * datatype: PriceInfo
     * required 
     **/
    this['CouponCode'] = couponCode;
    /**
     * datatype: String
     * required 
     **/
    this['CouponType'] = couponType;
    /**
     * datatype: String
     * required 
     **/
    this['CouponUsed'] = couponUsed;
    /**
     * datatype: Boolean
     * required 
     **/
    this['HadCouponApply'] = hadCouponApply;
    /**
     * datatype: Integer
     * required 
     **/
    this['DollarsOff'] = dollarsOff;
    /**
     * datatype: Integer
     * required 
     **/
    this['PercentOff'] = percentOff;
    /**
     * datatype: Boolean
     * required 
     **/
    this['HadError'] = hadError;
  };

  OrderPriceResult.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new OrderPriceResult();
    
    if (data['Items']) {
      _this['Items'] = PriceInfo.constructFromObject(data['Items']);
    }
    
    if (data['Shipping']) {
      _this['Shipping'] = PriceInfo.constructFromObject(data['Shipping']);
    }
    
    if (data['Tax']) {
      _this['Tax'] = PriceInfo.constructFromObject(data['Tax']);
    }
    
    if (data['CouponCode']) {
      _this['CouponCode'] = PriceInfo.constructFromObject(data['CouponCode']);
    }
    
    if (data['CouponType']) {
      _this['CouponType'] = ApiClient.convertToType(data['CouponType'], 'String');
    }
    
    if (data['CouponUsed']) {
      _this['CouponUsed'] = ApiClient.convertToType(data['CouponUsed'], 'String');
    }
    
    if (data['HadCouponApply']) {
      _this['HadCouponApply'] = ApiClient.convertToType(data['HadCouponApply'], 'Boolean');
    }
    
    if (data['DollarsOff']) {
      _this['DollarsOff'] = ApiClient.convertToType(data['DollarsOff'], 'Integer');
    }
    
    if (data['PercentOff']) {
      _this['PercentOff'] = ApiClient.convertToType(data['PercentOff'], 'Integer');
    }
    
    if (data['HadError']) {
      _this['HadError'] = ApiClient.convertToType(data['HadError'], 'Boolean');
    }
    
    return _this;
  }

  
  
  /**
   * @return {PriceInfo}
   **/
  OrderPriceResult.prototype.getItems = function() {
    return this['Items'];
  }

  /**
   * @param {PriceInfo} items
   **/
  OrderPriceResult.prototype.setItems = function(items) {
    this['Items'] = items;
  }
  
  /**
   * @return {PriceInfo}
   **/
  OrderPriceResult.prototype.getShipping = function() {
    return this['Shipping'];
  }

  /**
   * @param {PriceInfo} shipping
   **/
  OrderPriceResult.prototype.setShipping = function(shipping) {
    this['Shipping'] = shipping;
  }
  
  /**
   * @return {PriceInfo}
   **/
  OrderPriceResult.prototype.getTax = function() {
    return this['Tax'];
  }

  /**
   * @param {PriceInfo} tax
   **/
  OrderPriceResult.prototype.setTax = function(tax) {
    this['Tax'] = tax;
  }
  
  /**
   * @return {PriceInfo}
   **/
  OrderPriceResult.prototype.getCouponCode = function() {
    return this['CouponCode'];
  }

  /**
   * @param {PriceInfo} couponCode
   **/
  OrderPriceResult.prototype.setCouponCode = function(couponCode) {
    this['CouponCode'] = couponCode;
  }
  
  /**
   * @return {String}
   **/
  OrderPriceResult.prototype.getCouponType = function() {
    return this['CouponType'];
  }

  /**
   * @param {String} couponType
   **/
  OrderPriceResult.prototype.setCouponType = function(couponType) {
    this['CouponType'] = couponType;
  }
  
  /**
   * @return {String}
   **/
  OrderPriceResult.prototype.getCouponUsed = function() {
    return this['CouponUsed'];
  }

  /**
   * @param {String} couponUsed
   **/
  OrderPriceResult.prototype.setCouponUsed = function(couponUsed) {
    this['CouponUsed'] = couponUsed;
  }
  
  /**
   * @return {Boolean}
   **/
  OrderPriceResult.prototype.getHadCouponApply = function() {
    return this['HadCouponApply'];
  }

  /**
   * @param {Boolean} hadCouponApply
   **/
  OrderPriceResult.prototype.setHadCouponApply = function(hadCouponApply) {
    this['HadCouponApply'] = hadCouponApply;
  }
  
  /**
   * @return {Integer}
   **/
  OrderPriceResult.prototype.getDollarsOff = function() {
    return this['DollarsOff'];
  }

  /**
   * @param {Integer} dollarsOff
   **/
  OrderPriceResult.prototype.setDollarsOff = function(dollarsOff) {
    this['DollarsOff'] = dollarsOff;
  }
  
  /**
   * @return {Integer}
   **/
  OrderPriceResult.prototype.getPercentOff = function() {
    return this['PercentOff'];
  }

  /**
   * @param {Integer} percentOff
   **/
  OrderPriceResult.prototype.setPercentOff = function(percentOff) {
    this['PercentOff'] = percentOff;
  }
  
  /**
   * @return {Boolean}
   **/
  OrderPriceResult.prototype.getHadError = function() {
    return this['HadError'];
  }

  /**
   * @param {Boolean} hadError
   **/
  OrderPriceResult.prototype.setHadError = function(hadError) {
    this['HadError'] = hadError;
  }
  
  

  

  if (module) {
    module.OrderPriceResult = OrderPriceResult;
  }

  return OrderPriceResult;
  
  
}));
