(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './PreconfiguredItem', './PreconfiguredProductImage', './ProductPriceInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PreconfiguredItem'), require('./PreconfiguredProductImage'), require('./ProductPriceInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.GootenApiClient) {
      root.GootenApiClient = {};
    }
    root.GootenApiClient.PreconfiguredProduct = factory(root.GootenApiClient.ApiClient, root.GootenApiClient.PreconfiguredItem, root.GootenApiClient.PreconfiguredProductImage, root.GootenApiClient.ProductPriceInfo);
  }
}(this, function(ApiClient, PreconfiguredItem, PreconfiguredProductImage, ProductPriceInfo) {
  'use strict';
  
  
  var PreconfiguredProduct = function PreconfiguredProduct(sku, name, description, price, items, images) { 
    
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
     * datatype: ProductPriceInfo
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

  PreconfiguredProduct.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new PreconfiguredProduct();
    
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
      _this['Price'] = ProductPriceInfo.constructFromObject(data['Price']);
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
  PreconfiguredProduct.prototype.getSku = function() {
    return this['Sku'];
  }

  /**
   * set A sku that uniquely identifies the preconfigured product.
   * @param {String} sku
   **/
  PreconfiguredProduct.prototype.setSku = function(sku) {
    this['Sku'] = sku;
  }
  
  /**
   * @return {String}
   **/
  PreconfiguredProduct.prototype.getName = function() {
    return this['Name'];
  }

  /**
   * @param {String} name
   **/
  PreconfiguredProduct.prototype.setName = function(name) {
    this['Name'] = name;
  }
  
  /**
   * @return {String}
   **/
  PreconfiguredProduct.prototype.getDescription = function() {
    return this['Description'];
  }

  /**
   * @param {String} description
   **/
  PreconfiguredProduct.prototype.setDescription = function(description) {
    this['Description'] = description;
  }
  
  /**
   * @return {ProductPriceInfo}
   **/
  PreconfiguredProduct.prototype.getPrice = function() {
    return this['Price'];
  }

  /**
   * @param {ProductPriceInfo} price
   **/
  PreconfiguredProduct.prototype.setPrice = function(price) {
    this['Price'] = price;
  }
  
  /**
   * get The item[s] that constitue the product.
   * @return {[PreconfiguredItem]}
   **/
  PreconfiguredProduct.prototype.getItems = function() {
    return this['Items'];
  }

  /**
   * set The item[s] that constitue the product.
   * @param {[PreconfiguredItem]} items
   **/
  PreconfiguredProduct.prototype.setItems = function(items) {
    this['Items'] = items;
  }
  
  /**
   * get Product images. Can contain large and small images for web, mobile, etc
   * @return {[PreconfiguredProductImage]}
   **/
  PreconfiguredProduct.prototype.getImages = function() {
    return this['Images'];
  }

  /**
   * set Product images. Can contain large and small images for web, mobile, etc
   * @param {[PreconfiguredProductImage]} images
   **/
  PreconfiguredProduct.prototype.setImages = function(images) {
    this['Images'] = images;
  }
  
  

  

  return PreconfiguredProduct;
  
  
}));
