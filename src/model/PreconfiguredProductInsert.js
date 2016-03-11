(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './PreconfiguredItem', './PreconfiguredProductImage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./PreconfiguredItem'), require('./PreconfiguredProductImage'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    factory(root.SwaggerJsClient, root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.PreconfiguredItem, root.SwaggerJsClient.PreconfiguredProductImage);
  }
}(this, function(module, ApiClient, PreconfiguredItem, PreconfiguredProductImage) {
  'use strict';
  
  
  var PreconfiguredProductInsert = function PreconfiguredProductInsert(sku, name, description, price, items, images) { 
    
    /**
     * A sku that uniquely identifies the preconfigured product.
     * datatype: String
     * required 
     **/
    this['Sku'] = sku;
    /**
     * datatype: String
     * required 
     **/
    this['Name'] = name;
    /**
     * datatype: String
     * required 
     **/
    this['Description'] = description;
    /**
     * Optional price.
     * datatype: Integer
     * required 
     **/
    this['Price'] = price;
    /**
     * The item[s] that constitue the product.
     * datatype: [PreconfiguredItem]
     * required 
     **/
    this['Items'] = items;
    /**
     * Product images. Can contain large and small images for web, mobile, etc
     * datatype: [PreconfiguredProductImage]
     * required 
     **/
    this['Images'] = images;
  };

  PreconfiguredProductInsert.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new PreconfiguredProductInsert();
    
    if (data['Sku']) {
      _this['Sku'] = ApiClient.convertToType(data['Sku'], 'String');
    }
    
    if (data['Name']) {
      _this['Name'] = ApiClient.convertToType(data['Name'], 'String');
    }
    
    if (data['Description']) {
      _this['Description'] = ApiClient.convertToType(data['Description'], 'String');
    }
    
    if (data['Price']) {
      _this['Price'] = ApiClient.convertToType(data['Price'], 'Integer');
    }
    
    if (data['Items']) {
      _this['Items'] = ApiClient.convertToType(data['Items'], [PreconfiguredItem]);
    }
    
    if (data['Images']) {
      _this['Images'] = ApiClient.convertToType(data['Images'], [PreconfiguredProductImage]);
    }
    
    return _this;
  }

  
  
  /**
   * get A sku that uniquely identifies the preconfigured product.
   * @return {String}
   **/
  PreconfiguredProductInsert.prototype.getSku = function() {
    return this['Sku'];
  }

  /**
   * set A sku that uniquely identifies the preconfigured product.
   * @param {String} sku
   **/
  PreconfiguredProductInsert.prototype.setSku = function(sku) {
    this['Sku'] = sku;
  }
  
  /**
   * @return {String}
   **/
  PreconfiguredProductInsert.prototype.getName = function() {
    return this['Name'];
  }

  /**
   * @param {String} name
   **/
  PreconfiguredProductInsert.prototype.setName = function(name) {
    this['Name'] = name;
  }
  
  /**
   * @return {String}
   **/
  PreconfiguredProductInsert.prototype.getDescription = function() {
    return this['Description'];
  }

  /**
   * @param {String} description
   **/
  PreconfiguredProductInsert.prototype.setDescription = function(description) {
    this['Description'] = description;
  }
  
  /**
   * get Optional price.
   * @return {Integer}
   **/
  PreconfiguredProductInsert.prototype.getPrice = function() {
    return this['Price'];
  }

  /**
   * set Optional price.
   * @param {Integer} price
   **/
  PreconfiguredProductInsert.prototype.setPrice = function(price) {
    this['Price'] = price;
  }
  
  /**
   * get The item[s] that constitue the product.
   * @return {[PreconfiguredItem]}
   **/
  PreconfiguredProductInsert.prototype.getItems = function() {
    return this['Items'];
  }

  /**
   * set The item[s] that constitue the product.
   * @param {[PreconfiguredItem]} items
   **/
  PreconfiguredProductInsert.prototype.setItems = function(items) {
    this['Items'] = items;
  }
  
  /**
   * get Product images. Can contain large and small images for web, mobile, etc
   * @return {[PreconfiguredProductImage]}
   **/
  PreconfiguredProductInsert.prototype.getImages = function() {
    return this['Images'];
  }

  /**
   * set Product images. Can contain large and small images for web, mobile, etc
   * @param {[PreconfiguredProductImage]} images
   **/
  PreconfiguredProductInsert.prototype.setImages = function(images) {
    this['Images'] = images;
  }
  
  

  

  if (module) {
    module.PreconfiguredProductInsert = PreconfiguredProductInsert;
  }

  return PreconfiguredProductInsert;
  
  
}));
