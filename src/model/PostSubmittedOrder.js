(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Meta', './PostSubmittedItem', './ProductPriceInfo', './ShipToAddress'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Meta'), require('./PostSubmittedItem'), require('./ProductPriceInfo'), require('./ShipToAddress'));
  } else {
    // Browser globals (root is window)
    if (!root.GootenApiClient) {
      root.GootenApiClient = {};
    }
    root.GootenApiClient.PostSubmittedOrder = factory(root.GootenApiClient.ApiClient, root.GootenApiClient.Meta, root.GootenApiClient.PostSubmittedItem, root.GootenApiClient.ProductPriceInfo, root.GootenApiClient.ShipToAddress);
  }
}(this, function(ApiClient, Meta, PostSubmittedItem, ProductPriceInfo, ShipToAddress) {
  'use strict';
  
  
  var PostSubmittedOrder = function PostSubmittedOrder(id, niceId, souceId, items, total, shippingTotal, discountAmount, discountCode, billingAddress, shippingAddress, meta) { 
    
    /**
     * The unique ID we use within our system.
     * datatype: String
     * required 
     **/
    this['Id'] = id;
    /**
     * A short, non-unique ID that is optionally used for customer service.
     * datatype: String
     * required 
     **/
    this['NiceId'] = niceId;
    /**
     * Partner's internal ID-- entirely optional
     * datatype: String
     * required 
     **/
    this['SouceId'] = souceId;
    /**
     * datatype: [PostSubmittedItem]
     * required 
     **/
    this['Items'] = items;
    /**
     * datatype: ProductPriceInfo
     * required 
     **/
    this['Total'] = total;
    /**
     * datatype: ProductPriceInfo
     * required 
     **/
    this['ShippingTotal'] = shippingTotal;
    /**
     * datatype: ProductPriceInfo
     * required 
     **/
    this['DiscountAmount'] = discountAmount;
    /**
     * datatype: String
     * required 
     **/
    this['DiscountCode'] = discountCode;
    /**
     * datatype: ShipToAddress
     * required 
     **/
    this['BillingAddress'] = billingAddress;
    /**
     * datatype: ShipToAddress
     * required 
     **/
    this['ShippingAddress'] = shippingAddress;
    /**
     * An optional Map<string,string> of misc properties.
     * datatype: Meta
     * required 
     **/
    this['Meta'] = meta;
  };

  PostSubmittedOrder.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new PostSubmittedOrder();
    
    if (data['Id']) {
      _this['Id'] = ApiClient.convertToType(data['Id'], 'String');
    }
    
    if (data['NiceId']) {
      _this['NiceId'] = ApiClient.convertToType(data['NiceId'], 'String');
    }
    
    if (data['SouceId']) {
      _this['SouceId'] = ApiClient.convertToType(data['SouceId'], 'String');
    }
    
    if (data['Items']) {
      _this['Items'] = ApiClient.convertToType(data['Items'], [PostSubmittedItem]);
    }
    
    if (data['Total']) {
      _this['Total'] = ProductPriceInfo.constructFromObject(data['Total']);
    }
    
    if (data['ShippingTotal']) {
      _this['ShippingTotal'] = ProductPriceInfo.constructFromObject(data['ShippingTotal']);
    }
    
    if (data['DiscountAmount']) {
      _this['DiscountAmount'] = ProductPriceInfo.constructFromObject(data['DiscountAmount']);
    }
    
    if (data['DiscountCode']) {
      _this['DiscountCode'] = ApiClient.convertToType(data['DiscountCode'], 'String');
    }
    
    if (data['BillingAddress']) {
      _this['BillingAddress'] = ShipToAddress.constructFromObject(data['BillingAddress']);
    }
    
    if (data['ShippingAddress']) {
      _this['ShippingAddress'] = ShipToAddress.constructFromObject(data['ShippingAddress']);
    }
    
    if (data['Meta']) {
      _this['Meta'] = Meta.constructFromObject(data['Meta']);
    }
    
    return _this;
  }

  
  
  /**
   * get The unique ID we use within our system.
   * @return {String}
   **/
  PostSubmittedOrder.prototype.getId = function() {
    return this['Id'];
  }

  /**
   * set The unique ID we use within our system.
   * @param {String} id
   **/
  PostSubmittedOrder.prototype.setId = function(id) {
    this['Id'] = id;
  }
  
  /**
   * get A short, non-unique ID that is optionally used for customer service.
   * @return {String}
   **/
  PostSubmittedOrder.prototype.getNiceId = function() {
    return this['NiceId'];
  }

  /**
   * set A short, non-unique ID that is optionally used for customer service.
   * @param {String} niceId
   **/
  PostSubmittedOrder.prototype.setNiceId = function(niceId) {
    this['NiceId'] = niceId;
  }
  
  /**
   * get Partner's internal ID-- entirely optional
   * @return {String}
   **/
  PostSubmittedOrder.prototype.getSouceId = function() {
    return this['SouceId'];
  }

  /**
   * set Partner's internal ID-- entirely optional
   * @param {String} souceId
   **/
  PostSubmittedOrder.prototype.setSouceId = function(souceId) {
    this['SouceId'] = souceId;
  }
  
  /**
   * @return {[PostSubmittedItem]}
   **/
  PostSubmittedOrder.prototype.getItems = function() {
    return this['Items'];
  }

  /**
   * @param {[PostSubmittedItem]} items
   **/
  PostSubmittedOrder.prototype.setItems = function(items) {
    this['Items'] = items;
  }
  
  /**
   * @return {ProductPriceInfo}
   **/
  PostSubmittedOrder.prototype.getTotal = function() {
    return this['Total'];
  }

  /**
   * @param {ProductPriceInfo} total
   **/
  PostSubmittedOrder.prototype.setTotal = function(total) {
    this['Total'] = total;
  }
  
  /**
   * @return {ProductPriceInfo}
   **/
  PostSubmittedOrder.prototype.getShippingTotal = function() {
    return this['ShippingTotal'];
  }

  /**
   * @param {ProductPriceInfo} shippingTotal
   **/
  PostSubmittedOrder.prototype.setShippingTotal = function(shippingTotal) {
    this['ShippingTotal'] = shippingTotal;
  }
  
  /**
   * @return {ProductPriceInfo}
   **/
  PostSubmittedOrder.prototype.getDiscountAmount = function() {
    return this['DiscountAmount'];
  }

  /**
   * @param {ProductPriceInfo} discountAmount
   **/
  PostSubmittedOrder.prototype.setDiscountAmount = function(discountAmount) {
    this['DiscountAmount'] = discountAmount;
  }
  
  /**
   * @return {String}
   **/
  PostSubmittedOrder.prototype.getDiscountCode = function() {
    return this['DiscountCode'];
  }

  /**
   * @param {String} discountCode
   **/
  PostSubmittedOrder.prototype.setDiscountCode = function(discountCode) {
    this['DiscountCode'] = discountCode;
  }
  
  /**
   * @return {ShipToAddress}
   **/
  PostSubmittedOrder.prototype.getBillingAddress = function() {
    return this['BillingAddress'];
  }

  /**
   * @param {ShipToAddress} billingAddress
   **/
  PostSubmittedOrder.prototype.setBillingAddress = function(billingAddress) {
    this['BillingAddress'] = billingAddress;
  }
  
  /**
   * @return {ShipToAddress}
   **/
  PostSubmittedOrder.prototype.getShippingAddress = function() {
    return this['ShippingAddress'];
  }

  /**
   * @param {ShipToAddress} shippingAddress
   **/
  PostSubmittedOrder.prototype.setShippingAddress = function(shippingAddress) {
    this['ShippingAddress'] = shippingAddress;
  }
  
  /**
   * get An optional Map<string,string> of misc properties.
   * @return {Meta}
   **/
  PostSubmittedOrder.prototype.getMeta = function() {
    return this['Meta'];
  }

  /**
   * set An optional Map<string,string> of misc properties.
   * @param {Meta} meta
   **/
  PostSubmittedOrder.prototype.setMeta = function(meta) {
    this['Meta'] = meta;
  }
  
  

  

  return PostSubmittedOrder;
  
  
}));
