(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './Meta', './ProductPriceInfo', './Shipment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./Meta'), require('./ProductPriceInfo'), require('./Shipment'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    factory(root.SwaggerJsClient, root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.Meta, root.SwaggerJsClient.ProductPriceInfo, root.SwaggerJsClient.Shipment);
  }
}(this, function(module, ApiClient, Meta, ProductPriceInfo, Shipment) {
  'use strict';
  
  
  var PostSubmittedItem = function PostSubmittedItem(sku, productId, product, quantity, status, trackingNumber, trackingUrl, shipCarrierName, price, discountAmount, sourceId, meta, shipments) { 
    
    /**
     * datatype: String
     * required 
     **/
    this['Sku'] = sku;
    /**
     * datatype: Integer
     * required 
     **/
    this['ProductId'] = productId;
    /**
     * The type of product that was bought
     * datatype: String
     * required 
     **/
    this['Product'] = product;
    /**
     * datatype: Integer
     * required 
     **/
    this['Quantity'] = quantity;
    /**
     * datatype: String
     * required 
     **/
    this['Status'] = status;
    /**
     * Deprecated. Use the Shipments array as this will be removed in a future release.
     * datatype: String
     * required 
     **/
    this['TrackingNumber'] = trackingNumber;
    /**
     * Deprecated. Use the Shipments array as this will be removed in a future release.
     * datatype: String
     * required 
     **/
    this['TrackingUrl'] = trackingUrl;
    /**
     * Deprecated. Use the Shipments array as this will be removed in a future release.
     * datatype: String
     * required 
     **/
    this['ShipCarrierName'] = shipCarrierName;
    /**
     * datatype: ProductPriceInfo
     * required 
     **/
    this['Price'] = price;
    /**
     * datatype: ProductPriceInfo
     * required 
     **/
    this['DiscountAmount'] = discountAmount;
    /**
     * Partner's internal ID-- entirely optional
     * datatype: String
     * required 
     **/
    this['SourceId'] = sourceId;
    /**
     * An optional Map<string,string> of misc properties.
     * datatype: Meta
     * required 
     **/
    this['Meta'] = meta;
    /**
     * datatype: [Shipment]
     * required 
     **/
    this['Shipments'] = shipments;
  };

  PostSubmittedItem.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new PostSubmittedItem();
    
    if (data['Sku']) {
      _this['Sku'] = ApiClient.convertToType(data['Sku'], 'String');
    }
    
    if (data['ProductId']) {
      _this['ProductId'] = ApiClient.convertToType(data['ProductId'], 'Integer');
    }
    
    if (data['Product']) {
      _this['Product'] = ApiClient.convertToType(data['Product'], 'String');
    }
    
    if (data['Quantity']) {
      _this['Quantity'] = ApiClient.convertToType(data['Quantity'], 'Integer');
    }
    
    if (data['Status']) {
      _this['Status'] = ApiClient.convertToType(data['Status'], 'String');
    }
    
    if (data['TrackingNumber']) {
      _this['TrackingNumber'] = ApiClient.convertToType(data['TrackingNumber'], 'String');
    }
    
    if (data['TrackingUrl']) {
      _this['TrackingUrl'] = ApiClient.convertToType(data['TrackingUrl'], 'String');
    }
    
    if (data['ShipCarrierName']) {
      _this['ShipCarrierName'] = ApiClient.convertToType(data['ShipCarrierName'], 'String');
    }
    
    if (data['Price']) {
      _this['Price'] = ProductPriceInfo.constructFromObject(data['Price']);
    }
    
    if (data['DiscountAmount']) {
      _this['DiscountAmount'] = ProductPriceInfo.constructFromObject(data['DiscountAmount']);
    }
    
    if (data['SourceId']) {
      _this['SourceId'] = ApiClient.convertToType(data['SourceId'], 'String');
    }
    
    if (data['Meta']) {
      _this['Meta'] = Meta.constructFromObject(data['Meta']);
    }
    
    if (data['Shipments']) {
      _this['Shipments'] = ApiClient.convertToType(data['Shipments'], [Shipment]);
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  PostSubmittedItem.prototype.getSku = function() {
    return this['Sku'];
  }

  /**
   * @param {String} sku
   **/
  PostSubmittedItem.prototype.setSku = function(sku) {
    this['Sku'] = sku;
  }
  
  /**
   * @return {Integer}
   **/
  PostSubmittedItem.prototype.getProductId = function() {
    return this['ProductId'];
  }

  /**
   * @param {Integer} productId
   **/
  PostSubmittedItem.prototype.setProductId = function(productId) {
    this['ProductId'] = productId;
  }
  
  /**
   * get The type of product that was bought
   * @return {String}
   **/
  PostSubmittedItem.prototype.getProduct = function() {
    return this['Product'];
  }

  /**
   * set The type of product that was bought
   * @param {String} product
   **/
  PostSubmittedItem.prototype.setProduct = function(product) {
    this['Product'] = product;
  }
  
  /**
   * @return {Integer}
   **/
  PostSubmittedItem.prototype.getQuantity = function() {
    return this['Quantity'];
  }

  /**
   * @param {Integer} quantity
   **/
  PostSubmittedItem.prototype.setQuantity = function(quantity) {
    this['Quantity'] = quantity;
  }
  
  /**
   * @return {String}
   **/
  PostSubmittedItem.prototype.getStatus = function() {
    return this['Status'];
  }

  /**
   * @param {String} status
   **/
  PostSubmittedItem.prototype.setStatus = function(status) {
    this['Status'] = status;
  }
  
  /**
   * get Deprecated. Use the Shipments array as this will be removed in a future release.
   * @return {String}
   **/
  PostSubmittedItem.prototype.getTrackingNumber = function() {
    return this['TrackingNumber'];
  }

  /**
   * set Deprecated. Use the Shipments array as this will be removed in a future release.
   * @param {String} trackingNumber
   **/
  PostSubmittedItem.prototype.setTrackingNumber = function(trackingNumber) {
    this['TrackingNumber'] = trackingNumber;
  }
  
  /**
   * get Deprecated. Use the Shipments array as this will be removed in a future release.
   * @return {String}
   **/
  PostSubmittedItem.prototype.getTrackingUrl = function() {
    return this['TrackingUrl'];
  }

  /**
   * set Deprecated. Use the Shipments array as this will be removed in a future release.
   * @param {String} trackingUrl
   **/
  PostSubmittedItem.prototype.setTrackingUrl = function(trackingUrl) {
    this['TrackingUrl'] = trackingUrl;
  }
  
  /**
   * get Deprecated. Use the Shipments array as this will be removed in a future release.
   * @return {String}
   **/
  PostSubmittedItem.prototype.getShipCarrierName = function() {
    return this['ShipCarrierName'];
  }

  /**
   * set Deprecated. Use the Shipments array as this will be removed in a future release.
   * @param {String} shipCarrierName
   **/
  PostSubmittedItem.prototype.setShipCarrierName = function(shipCarrierName) {
    this['ShipCarrierName'] = shipCarrierName;
  }
  
  /**
   * @return {ProductPriceInfo}
   **/
  PostSubmittedItem.prototype.getPrice = function() {
    return this['Price'];
  }

  /**
   * @param {ProductPriceInfo} price
   **/
  PostSubmittedItem.prototype.setPrice = function(price) {
    this['Price'] = price;
  }
  
  /**
   * @return {ProductPriceInfo}
   **/
  PostSubmittedItem.prototype.getDiscountAmount = function() {
    return this['DiscountAmount'];
  }

  /**
   * @param {ProductPriceInfo} discountAmount
   **/
  PostSubmittedItem.prototype.setDiscountAmount = function(discountAmount) {
    this['DiscountAmount'] = discountAmount;
  }
  
  /**
   * get Partner's internal ID-- entirely optional
   * @return {String}
   **/
  PostSubmittedItem.prototype.getSourceId = function() {
    return this['SourceId'];
  }

  /**
   * set Partner's internal ID-- entirely optional
   * @param {String} sourceId
   **/
  PostSubmittedItem.prototype.setSourceId = function(sourceId) {
    this['SourceId'] = sourceId;
  }
  
  /**
   * get An optional Map<string,string> of misc properties.
   * @return {Meta}
   **/
  PostSubmittedItem.prototype.getMeta = function() {
    return this['Meta'];
  }

  /**
   * set An optional Map<string,string> of misc properties.
   * @param {Meta} meta
   **/
  PostSubmittedItem.prototype.setMeta = function(meta) {
    this['Meta'] = meta;
  }
  
  /**
   * @return {[Shipment]}
   **/
  PostSubmittedItem.prototype.getShipments = function() {
    return this['Shipments'];
  }

  /**
   * @param {[Shipment]} shipments
   **/
  PostSubmittedItem.prototype.setShipments = function(shipments) {
    this['Shipments'] = shipments;
  }
  
  

  

  if (module) {
    module.PostSubmittedItem = PostSubmittedItem;
  }

  return PostSubmittedItem;
  
  
}));
