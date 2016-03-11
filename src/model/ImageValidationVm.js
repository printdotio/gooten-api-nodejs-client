(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './ImageSizeVm'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./ImageSizeVm'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    factory(root.SwaggerJsClient, root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.ImageSizeVm);
  }
}(this, function(module, ApiClient, ImageSizeVm) {
  'use strict';
  
  
  var ImageValidationVm = function ImageValidationVm(sku, images) { 
    
    /**
     * datatype: String
     * required 
     **/
    this['Sku'] = sku;
    /**
     * datatype: [ImageSizeVm]
     * required 
     **/
    this['Images'] = images;
  };

  ImageValidationVm.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new ImageValidationVm();
    
    if (data['Sku']) {
      _this['Sku'] = ApiClient.convertToType(data['Sku'], 'String');
    }
    
    if (data['Images']) {
      _this['Images'] = ApiClient.convertToType(data['Images'], [ImageSizeVm]);
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  ImageValidationVm.prototype.getSku = function() {
    return this['Sku'];
  }

  /**
   * @param {String} sku
   **/
  ImageValidationVm.prototype.setSku = function(sku) {
    this['Sku'] = sku;
  }
  
  /**
   * @return {[ImageSizeVm]}
   **/
  ImageValidationVm.prototype.getImages = function() {
    return this['Images'];
  }

  /**
   * @param {[ImageSizeVm]} images
   **/
  ImageValidationVm.prototype.setImages = function(images) {
    this['Images'] = images;
  }
  
  

  

  if (module) {
    module.ImageValidationVm = ImageValidationVm;
  }

  return ImageValidationVm;
  
  
}));
