(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ProductPreviewImage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ProductPreviewImage'));
  } else {
    // Browser globals (root is window)
    if (!root.GootenApiClient) {
      root.GootenApiClient = {};
    }
    root.GootenApiClient.ProductPreviewRequest = factory(root.GootenApiClient.ApiClient, root.GootenApiClient.ProductPreviewImage);
  }
}(this, function(ApiClient, ProductPreviewImage) {
  'use strict';
  
  
  var ProductPreviewRequest = function ProductPreviewRequest(sku, template, images, maxHeight, maxWidth) { 
    
    /**
     * datatype: String
     * required 
     **/
    this['Sku'] = sku;
    /**
     * datatype: String
     * required 
     **/
    this['Template'] = template;
    /**
     * datatype: [ProductPreviewImage]
     * required 
     **/
    this['Images'] = images;
    /**
     * Max height of the resultant image. Defaults to 500px
     * datatype: Integer
     * required 
     **/
    this['MaxHeight'] = maxHeight;
    /**
     * Max width of the resultant image. Defaults to 500px
     * datatype: Integer
     * required 
     **/
    this['MaxWidth'] = maxWidth;
  };

  ProductPreviewRequest.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new ProductPreviewRequest();
    
    if (data['Sku']) {
      _this['Sku'] = ApiClient.convertToType(data['Sku'], 'String');
    }
    
    if (data['Template']) {
      _this['Template'] = ApiClient.convertToType(data['Template'], 'String');
    }
    
    if (data['Images']) {
      _this['Images'] = ApiClient.convertToType(data['Images'], [ProductPreviewImage]);
    }
    
    if (data['MaxHeight']) {
      _this['MaxHeight'] = ApiClient.convertToType(data['MaxHeight'], 'Integer');
    }
    
    if (data['MaxWidth']) {
      _this['MaxWidth'] = ApiClient.convertToType(data['MaxWidth'], 'Integer');
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  ProductPreviewRequest.prototype.getSku = function() {
    return this['Sku'];
  }

  /**
   * @param {String} sku
   **/
  ProductPreviewRequest.prototype.setSku = function(sku) {
    this['Sku'] = sku;
  }
  
  /**
   * @return {String}
   **/
  ProductPreviewRequest.prototype.getTemplate = function() {
    return this['Template'];
  }

  /**
   * @param {String} template
   **/
  ProductPreviewRequest.prototype.setTemplate = function(template) {
    this['Template'] = template;
  }
  
  /**
   * @return {[ProductPreviewImage]}
   **/
  ProductPreviewRequest.prototype.getImages = function() {
    return this['Images'];
  }

  /**
   * @param {[ProductPreviewImage]} images
   **/
  ProductPreviewRequest.prototype.setImages = function(images) {
    this['Images'] = images;
  }
  
  /**
   * get Max height of the resultant image. Defaults to 500px
   * @return {Integer}
   **/
  ProductPreviewRequest.prototype.getMaxHeight = function() {
    return this['MaxHeight'];
  }

  /**
   * set Max height of the resultant image. Defaults to 500px
   * @param {Integer} maxHeight
   **/
  ProductPreviewRequest.prototype.setMaxHeight = function(maxHeight) {
    this['MaxHeight'] = maxHeight;
  }
  
  /**
   * get Max width of the resultant image. Defaults to 500px
   * @return {Integer}
   **/
  ProductPreviewRequest.prototype.getMaxWidth = function() {
    return this['MaxWidth'];
  }

  /**
   * set Max width of the resultant image. Defaults to 500px
   * @param {Integer} maxWidth
   **/
  ProductPreviewRequest.prototype.setMaxWidth = function(maxWidth) {
    this['MaxWidth'] = maxWidth;
  }
  
  

  

  return ProductPreviewRequest;
  
  
}));
