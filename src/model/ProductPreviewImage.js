(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './ProductPreviewImageSpec'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./ProductPreviewImageSpec'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    factory(root.SwaggerJsClient, root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.ProductPreviewImageSpec);
  }
}(this, function(module, ApiClient, ProductPreviewImageSpec) {
  'use strict';
  
  
  var ProductPreviewImage = function ProductPreviewImage(layerId, image) { 
    
    /**
     * datatype: String
     * required 
     **/
    this['LayerId'] = layerId;
    /**
     * datatype: ProductPreviewImageSpec
     * required 
     **/
    this['Image'] = image;
  };

  ProductPreviewImage.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new ProductPreviewImage();
    
    if (data['LayerId']) {
      _this['LayerId'] = ApiClient.convertToType(data['LayerId'], 'String');
    }
    
    if (data['Image']) {
      _this['Image'] = ProductPreviewImageSpec.constructFromObject(data['Image']);
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  ProductPreviewImage.prototype.getLayerId = function() {
    return this['LayerId'];
  }

  /**
   * @param {String} layerId
   **/
  ProductPreviewImage.prototype.setLayerId = function(layerId) {
    this['LayerId'] = layerId;
  }
  
  /**
   * @return {ProductPreviewImageSpec}
   **/
  ProductPreviewImage.prototype.getImage = function() {
    return this['Image'];
  }

  /**
   * @param {ProductPreviewImageSpec} image
   **/
  ProductPreviewImage.prototype.setImage = function(image) {
    this['Image'] = image;
  }
  
  

  

  if (module) {
    module.ProductPreviewImage = ProductPreviewImage;
  }

  return ProductPreviewImage;
  
  
}));
