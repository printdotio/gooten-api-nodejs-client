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
  
  
  var OrderPayment = function OrderPayment(braintreeEncryptedCCNumber, braintreeEncryptedCCExpDate, braintreeEncryptedCCV, braintreePaymentNonce, partnerBillingKey, total, currencyCode) { 
    
    /**
     * datatype: String
     * required 
     **/
    this['BraintreeEncryptedCCNumber'] = braintreeEncryptedCCNumber;
    /**
     * datatype: String
     * required 
     **/
    this['BraintreeEncryptedCCExpDate'] = braintreeEncryptedCCExpDate;
    /**
     * datatype: String
     * required 
     **/
    this['BraintreeEncryptedCCV'] = braintreeEncryptedCCV;
    /**
     * datatype: String
     * required 
     **/
    this['BraintreePaymentNonce'] = braintreePaymentNonce;
    /**
     * A code that when passed allows the order to be submitted on credit.
     * datatype: String
     * required 
     **/
    this['PartnerBillingKey'] = partnerBillingKey;
    /**
     * datatype: Integer
     * required 
     **/
    this['Total'] = total;
    /**
     * datatype: String
     * required 
     **/
    this['CurrencyCode'] = currencyCode;
  };

  OrderPayment.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new OrderPayment();
    
    if (data['BraintreeEncryptedCCNumber']) {
      _this['BraintreeEncryptedCCNumber'] = ApiClient.convertToType(data['BraintreeEncryptedCCNumber'], 'String');
    }
    
    if (data['BraintreeEncryptedCCExpDate']) {
      _this['BraintreeEncryptedCCExpDate'] = ApiClient.convertToType(data['BraintreeEncryptedCCExpDate'], 'String');
    }
    
    if (data['BraintreeEncryptedCCV']) {
      _this['BraintreeEncryptedCCV'] = ApiClient.convertToType(data['BraintreeEncryptedCCV'], 'String');
    }
    
    if (data['BraintreePaymentNonce']) {
      _this['BraintreePaymentNonce'] = ApiClient.convertToType(data['BraintreePaymentNonce'], 'String');
    }
    
    if (data['PartnerBillingKey']) {
      _this['PartnerBillingKey'] = ApiClient.convertToType(data['PartnerBillingKey'], 'String');
    }
    
    if (data['Total']) {
      _this['Total'] = ApiClient.convertToType(data['Total'], 'Integer');
    }
    
    if (data['CurrencyCode']) {
      _this['CurrencyCode'] = ApiClient.convertToType(data['CurrencyCode'], 'String');
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  OrderPayment.prototype.getBraintreeEncryptedCCNumber = function() {
    return this['BraintreeEncryptedCCNumber'];
  }

  /**
   * @param {String} braintreeEncryptedCCNumber
   **/
  OrderPayment.prototype.setBraintreeEncryptedCCNumber = function(braintreeEncryptedCCNumber) {
    this['BraintreeEncryptedCCNumber'] = braintreeEncryptedCCNumber;
  }
  
  /**
   * @return {String}
   **/
  OrderPayment.prototype.getBraintreeEncryptedCCExpDate = function() {
    return this['BraintreeEncryptedCCExpDate'];
  }

  /**
   * @param {String} braintreeEncryptedCCExpDate
   **/
  OrderPayment.prototype.setBraintreeEncryptedCCExpDate = function(braintreeEncryptedCCExpDate) {
    this['BraintreeEncryptedCCExpDate'] = braintreeEncryptedCCExpDate;
  }
  
  /**
   * @return {String}
   **/
  OrderPayment.prototype.getBraintreeEncryptedCCV = function() {
    return this['BraintreeEncryptedCCV'];
  }

  /**
   * @param {String} braintreeEncryptedCCV
   **/
  OrderPayment.prototype.setBraintreeEncryptedCCV = function(braintreeEncryptedCCV) {
    this['BraintreeEncryptedCCV'] = braintreeEncryptedCCV;
  }
  
  /**
   * @return {String}
   **/
  OrderPayment.prototype.getBraintreePaymentNonce = function() {
    return this['BraintreePaymentNonce'];
  }

  /**
   * @param {String} braintreePaymentNonce
   **/
  OrderPayment.prototype.setBraintreePaymentNonce = function(braintreePaymentNonce) {
    this['BraintreePaymentNonce'] = braintreePaymentNonce;
  }
  
  /**
   * get A code that when passed allows the order to be submitted on credit.
   * @return {String}
   **/
  OrderPayment.prototype.getPartnerBillingKey = function() {
    return this['PartnerBillingKey'];
  }

  /**
   * set A code that when passed allows the order to be submitted on credit.
   * @param {String} partnerBillingKey
   **/
  OrderPayment.prototype.setPartnerBillingKey = function(partnerBillingKey) {
    this['PartnerBillingKey'] = partnerBillingKey;
  }
  
  /**
   * @return {Integer}
   **/
  OrderPayment.prototype.getTotal = function() {
    return this['Total'];
  }

  /**
   * @param {Integer} total
   **/
  OrderPayment.prototype.setTotal = function(total) {
    this['Total'] = total;
  }
  
  /**
   * @return {String}
   **/
  OrderPayment.prototype.getCurrencyCode = function() {
    return this['CurrencyCode'];
  }

  /**
   * @param {String} currencyCode
   **/
  OrderPayment.prototype.setCurrencyCode = function(currencyCode) {
    this['CurrencyCode'] = currencyCode;
  }
  
  

  

  if (module) {
    module.OrderPayment = OrderPayment;
  }

  return OrderPayment;
  
  
}));
