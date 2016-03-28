(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Image', './Meta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Image'), require('./Meta'));
  } else {
    // Browser globals (root is window)
    if (!root.GootenApiClient) {
      root.GootenApiClient = {};
    }
    root.GootenApiClient.PostOrderItem = factory(root.GootenApiClient.ApiClient, root.GootenApiClient.Image, root.GootenApiClient.Meta);
  }
}(this, function(ApiClient, Image, Meta) {
  'use strict';
  
  
  var PostOrderItem = function PostOrderItem(quantity, SKU, shipCarrierMethodId, shipType, images, sourceId, meta) { 
    
    /**
     * datatype: Integer
     * required 
     **/
    this['Quantity'] = quantity;
    /**
     * datatype: String
     * required 
     **/
    this['SKU'] = SKU;
    /**
     * datatype: Integer
     * required 
     **/
    this['ShipCarrierMethodId'] = shipCarrierMethodId;
    /**
     * If one does not want to pass a ShipCarrierMethodId of a specific shipping method, one can instead pass 'Standard', 'Overnight', or 'Expedited' here.
     * datatype: String
     * required 
     **/
    this['ShipType'] = shipType;
    /**
     * datatype: [Image]
     * required 
     **/
    this['Images'] = images;
    /**
     * An optional place to pass in an ID for the OrderItem.
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
  };

  PostOrderItem.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new PostOrderItem();
    
    if (data['Quantity']) {
      _this['Quantity'] = ApiClient.convertToType(data['Quantity'], 'Integer');
    }
    
    if (data['SKU']) {
      _this['SKU'] = ApiClient.convertToType(data['SKU'], 'String');
    }
    
    if (data['ShipCarrierMethodId']) {
      _this['ShipCarrierMethodId'] = ApiClient.convertToType(data['ShipCarrierMethodId'], 'Integer');
    }
    
    if (data['ShipType']) {
      _this['ShipType'] = ApiClient.convertToType(data['ShipType'], 'String');
    }
    
    if (data['Images']) {
      _this['Images'] = ApiClient.convertToType(data['Images'], [Image]);
    }
    
    if (data['SourceId']) {
      _this['SourceId'] = ApiClient.convertToType(data['SourceId'], 'String');
    }
    
    if (data['Meta']) {
      _this['Meta'] = Meta.constructFromObject(data['Meta']);
    }
    
    return _this;
  }

  
  
  /**
   * @return {Integer}
   **/
  PostOrderItem.prototype.getQuantity = function() {
    return this['Quantity'];
  }

  /**
   * @param {Integer} quantity
   **/
  PostOrderItem.prototype.setQuantity = function(quantity) {
    this['Quantity'] = quantity;
  }
  
  /**
   * @return {String}
   **/
  PostOrderItem.prototype.getSKU = function() {
    return this['SKU'];
  }

  /**
   * @param {String} SKU
   **/
  PostOrderItem.prototype.setSKU = function(SKU) {
    this['SKU'] = SKU;
  }
  
  /**
   * @return {Integer}
   **/
  PostOrderItem.prototype.getShipCarrierMethodId = function() {
    return this['ShipCarrierMethodId'];
  }

  /**
   * @param {Integer} shipCarrierMethodId
   **/
  PostOrderItem.prototype.setShipCarrierMethodId = function(shipCarrierMethodId) {
    this['ShipCarrierMethodId'] = shipCarrierMethodId;
  }
  
  /**
   * get If one does not want to pass a ShipCarrierMethodId of a specific shipping method, one can instead pass 'Standard', 'Overnight', or 'Expedited' here.
   * @return {String}
   **/
  PostOrderItem.prototype.getShipType = function() {
    return this['ShipType'];
  }

  /**
   * set If one does not want to pass a ShipCarrierMethodId of a specific shipping method, one can instead pass 'Standard', 'Overnight', or 'Expedited' here.
   * @param {String} shipType
   **/
  PostOrderItem.prototype.setShipType = function(shipType) {
    this['ShipType'] = shipType;
  }
  
  /**
   * @return {[Image]}
   **/
  PostOrderItem.prototype.getImages = function() {
    return this['Images'];
  }

  /**
   * @param {[Image]} images
   **/
  PostOrderItem.prototype.setImages = function(images) {
    this['Images'] = images;
  }
  
  /**
   * get An optional place to pass in an ID for the OrderItem.
   * @return {String}
   **/
  PostOrderItem.prototype.getSourceId = function() {
    return this['SourceId'];
  }

  /**
   * set An optional place to pass in an ID for the OrderItem.
   * @param {String} sourceId
   **/
  PostOrderItem.prototype.setSourceId = function(sourceId) {
    this['SourceId'] = sourceId;
  }
  
  /**
   * get An optional Map<string,string> of misc properties.
   * @return {Meta}
   **/
  PostOrderItem.prototype.getMeta = function() {
    return this['Meta'];
  }

  /**
   * set An optional Map<string,string> of misc properties.
   * @param {Meta} meta
   **/
  PostOrderItem.prototype.setMeta = function(meta) {
    this['Meta'] = meta;
  }
  
  

  

  return PostOrderItem;
  
  
}));
