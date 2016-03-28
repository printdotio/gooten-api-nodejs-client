(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Meta', './PostSubmittedItem', './ProductPriceInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Meta'), require('./PostSubmittedItem'), require('./ProductPriceInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.GootenApiClient) {
      root.GootenApiClient = {};
    }
    root.GootenApiClient.SearchSubmittedOrder = factory(root.GootenApiClient.ApiClient, root.GootenApiClient.Meta, root.GootenApiClient.PostSubmittedItem, root.GootenApiClient.ProductPriceInfo);
  }
}(this, function(ApiClient, Meta, PostSubmittedItem, ProductPriceInfo) {
  'use strict';
  
  
  var SearchSubmittedOrder = function SearchSubmittedOrder(id, niceId, sourceId, items, total, shippingTotal, discountCode, discountAmount, meta) { 
    
    /**
     * datatype: String
     * required 
     **/
    this['Id'] = id;
    /**
     * datatype: String
     * required 
     **/
    this['NiceId'] = niceId;
    /**
     * Clients can submit an ID they use for the order here.
     * datatype: String
     * required 
     **/
    this['SourceId'] = sourceId;
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
     * datatype: String
     * required 
     **/
    this['DiscountCode'] = discountCode;
    /**
     * datatype: ProductPriceInfo
     * required 
     **/
    this['DiscountAmount'] = discountAmount;
    /**
     * An optional Map<string,string> of misc properties.
     * datatype: Meta
     * required 
     **/
    this['Meta'] = meta;
  };

  SearchSubmittedOrder.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new SearchSubmittedOrder();
    
    if (data['Id']) {
      _this['Id'] = ApiClient.convertToType(data['Id'], 'String');
    }
    
    if (data['NiceId']) {
      _this['NiceId'] = ApiClient.convertToType(data['NiceId'], 'String');
    }
    
    if (data['SourceId']) {
      _this['SourceId'] = ApiClient.convertToType(data['SourceId'], 'String');
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
    
    if (data['DiscountCode']) {
      _this['DiscountCode'] = ApiClient.convertToType(data['DiscountCode'], 'String');
    }
    
    if (data['DiscountAmount']) {
      _this['DiscountAmount'] = ProductPriceInfo.constructFromObject(data['DiscountAmount']);
    }
    
    if (data['Meta']) {
      _this['Meta'] = Meta.constructFromObject(data['Meta']);
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  SearchSubmittedOrder.prototype.getId = function() {
    return this['Id'];
  }

  /**
   * @param {String} id
   **/
  SearchSubmittedOrder.prototype.setId = function(id) {
    this['Id'] = id;
  }
  
  /**
   * @return {String}
   **/
  SearchSubmittedOrder.prototype.getNiceId = function() {
    return this['NiceId'];
  }

  /**
   * @param {String} niceId
   **/
  SearchSubmittedOrder.prototype.setNiceId = function(niceId) {
    this['NiceId'] = niceId;
  }
  
  /**
   * get Clients can submit an ID they use for the order here.
   * @return {String}
   **/
  SearchSubmittedOrder.prototype.getSourceId = function() {
    return this['SourceId'];
  }

  /**
   * set Clients can submit an ID they use for the order here.
   * @param {String} sourceId
   **/
  SearchSubmittedOrder.prototype.setSourceId = function(sourceId) {
    this['SourceId'] = sourceId;
  }
  
  /**
   * @return {[PostSubmittedItem]}
   **/
  SearchSubmittedOrder.prototype.getItems = function() {
    return this['Items'];
  }

  /**
   * @param {[PostSubmittedItem]} items
   **/
  SearchSubmittedOrder.prototype.setItems = function(items) {
    this['Items'] = items;
  }
  
  /**
   * @return {ProductPriceInfo}
   **/
  SearchSubmittedOrder.prototype.getTotal = function() {
    return this['Total'];
  }

  /**
   * @param {ProductPriceInfo} total
   **/
  SearchSubmittedOrder.prototype.setTotal = function(total) {
    this['Total'] = total;
  }
  
  /**
   * @return {ProductPriceInfo}
   **/
  SearchSubmittedOrder.prototype.getShippingTotal = function() {
    return this['ShippingTotal'];
  }

  /**
   * @param {ProductPriceInfo} shippingTotal
   **/
  SearchSubmittedOrder.prototype.setShippingTotal = function(shippingTotal) {
    this['ShippingTotal'] = shippingTotal;
  }
  
  /**
   * @return {String}
   **/
  SearchSubmittedOrder.prototype.getDiscountCode = function() {
    return this['DiscountCode'];
  }

  /**
   * @param {String} discountCode
   **/
  SearchSubmittedOrder.prototype.setDiscountCode = function(discountCode) {
    this['DiscountCode'] = discountCode;
  }
  
  /**
   * @return {ProductPriceInfo}
   **/
  SearchSubmittedOrder.prototype.getDiscountAmount = function() {
    return this['DiscountAmount'];
  }

  /**
   * @param {ProductPriceInfo} discountAmount
   **/
  SearchSubmittedOrder.prototype.setDiscountAmount = function(discountAmount) {
    this['DiscountAmount'] = discountAmount;
  }
  
  /**
   * get An optional Map<string,string> of misc properties.
   * @return {Meta}
   **/
  SearchSubmittedOrder.prototype.getMeta = function() {
    return this['Meta'];
  }

  /**
   * set An optional Map<string,string> of misc properties.
   * @param {Meta} meta
   **/
  SearchSubmittedOrder.prototype.setMeta = function(meta) {
    this['Meta'] = meta;
  }
  
  

  

  return SearchSubmittedOrder;
  
  
}));
