(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Meta', './OrderPayment', './PostOrderItem', './ShipToAddress'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Meta'), require('./OrderPayment'), require('./PostOrderItem'), require('./ShipToAddress'));
  } else {
    // Browser globals (root is window)
    if (!root.GootenApiClient) {
      root.GootenApiClient = {};
    }
    root.GootenApiClient.PostOrder = factory(root.GootenApiClient.ApiClient, root.GootenApiClient.Meta, root.GootenApiClient.OrderPayment, root.GootenApiClient.PostOrderItem, root.GootenApiClient.ShipToAddress);
  }
}(this, function(ApiClient, Meta, OrderPayment, PostOrderItem, ShipToAddress) {
  'use strict';
  
  
  var PostOrder = function PostOrder(shipToAddress, billingAddress, items, payment, sourceId, isPreSubmit, couponCode, meta) { 
    
    /**
     * datatype: ShipToAddress
     * required 
     **/
    this['ShipToAddress'] = shipToAddress;
    /**
     * datatype: ShipToAddress
     * required 
     **/
    this['BillingAddress'] = billingAddress;
    /**
     * datatype: [PostOrderItem]
     * required 
     **/
    this['Items'] = items;
    /**
     * datatype: OrderPayment
     * required 
     **/
    this['Payment'] = payment;
    /**
     * Clients can submit an ID they use for the order here.
     * datatype: String
     * required 
     **/
    this['SourceId'] = sourceId;
    /**
     * Submit the order into PrePayment status.
     * datatype: Boolean
     * required 
     **/
    this['IsPreSubmit'] = isPreSubmit;
    /**
     * datatype: String
     * required 
     **/
    this['CouponCode'] = couponCode;
    /**
     * An optional Map<string,string> of misc properties.
     * datatype: Meta
     * required 
     **/
    this['Meta'] = meta;
  };

  PostOrder.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new PostOrder();
    
    if (data['ShipToAddress']) {
      _this['ShipToAddress'] = ShipToAddress.constructFromObject(data['ShipToAddress']);
    }
    
    if (data['BillingAddress']) {
      _this['BillingAddress'] = ShipToAddress.constructFromObject(data['BillingAddress']);
    }
    
    if (data['Items']) {
      _this['Items'] = ApiClient.convertToType(data['Items'], [PostOrderItem]);
    }
    
    if (data['Payment']) {
      _this['Payment'] = OrderPayment.constructFromObject(data['Payment']);
    }
    
    if (data['SourceId']) {
      _this['SourceId'] = ApiClient.convertToType(data['SourceId'], 'String');
    }
    
    if (data['IsPreSubmit']) {
      _this['IsPreSubmit'] = ApiClient.convertToType(data['IsPreSubmit'], 'Boolean');
    }
    
    if (data['CouponCode']) {
      _this['CouponCode'] = ApiClient.convertToType(data['CouponCode'], 'String');
    }
    
    if (data['Meta']) {
      _this['Meta'] = Meta.constructFromObject(data['Meta']);
    }
    
    return _this;
  }

  
  
  /**
   * @return {ShipToAddress}
   **/
  PostOrder.prototype.getShipToAddress = function() {
    return this['ShipToAddress'];
  }

  /**
   * @param {ShipToAddress} shipToAddress
   **/
  PostOrder.prototype.setShipToAddress = function(shipToAddress) {
    this['ShipToAddress'] = shipToAddress;
  }
  
  /**
   * @return {ShipToAddress}
   **/
  PostOrder.prototype.getBillingAddress = function() {
    return this['BillingAddress'];
  }

  /**
   * @param {ShipToAddress} billingAddress
   **/
  PostOrder.prototype.setBillingAddress = function(billingAddress) {
    this['BillingAddress'] = billingAddress;
  }
  
  /**
   * @return {[PostOrderItem]}
   **/
  PostOrder.prototype.getItems = function() {
    return this['Items'];
  }

  /**
   * @param {[PostOrderItem]} items
   **/
  PostOrder.prototype.setItems = function(items) {
    this['Items'] = items;
  }
  
  /**
   * @return {OrderPayment}
   **/
  PostOrder.prototype.getPayment = function() {
    return this['Payment'];
  }

  /**
   * @param {OrderPayment} payment
   **/
  PostOrder.prototype.setPayment = function(payment) {
    this['Payment'] = payment;
  }
  
  /**
   * get Clients can submit an ID they use for the order here.
   * @return {String}
   **/
  PostOrder.prototype.getSourceId = function() {
    return this['SourceId'];
  }

  /**
   * set Clients can submit an ID they use for the order here.
   * @param {String} sourceId
   **/
  PostOrder.prototype.setSourceId = function(sourceId) {
    this['SourceId'] = sourceId;
  }
  
  /**
   * get Submit the order into PrePayment status.
   * @return {Boolean}
   **/
  PostOrder.prototype.getIsPreSubmit = function() {
    return this['IsPreSubmit'];
  }

  /**
   * set Submit the order into PrePayment status.
   * @param {Boolean} isPreSubmit
   **/
  PostOrder.prototype.setIsPreSubmit = function(isPreSubmit) {
    this['IsPreSubmit'] = isPreSubmit;
  }
  
  /**
   * @return {String}
   **/
  PostOrder.prototype.getCouponCode = function() {
    return this['CouponCode'];
  }

  /**
   * @param {String} couponCode
   **/
  PostOrder.prototype.setCouponCode = function(couponCode) {
    this['CouponCode'] = couponCode;
  }
  
  /**
   * get An optional Map<string,string> of misc properties.
   * @return {Meta}
   **/
  PostOrder.prototype.getMeta = function() {
    return this['Meta'];
  }

  /**
   * set An optional Map<string,string> of misc properties.
   * @param {Meta} meta
   **/
  PostOrder.prototype.setMeta = function(meta) {
    this['Meta'] = meta;
  }
  
  

  

  return PostOrder;
  
  
}));
