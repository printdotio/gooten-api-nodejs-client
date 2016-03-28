(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.GootenApiClient) {
      root.GootenApiClient = {};
    }
    root.GootenApiClient.ImageSizeVm = factory(root.GootenApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';
  
  
  var ImageSizeVm = function ImageSizeVm(spaceId, width, height) { 
    
    /**
     * datatype: String
     * required 
     **/
    this['SpaceId'] = spaceId;
    /**
     * datatype: Integer
     * required 
     **/
    this['Width'] = width;
    /**
     * datatype: Integer
     * required 
     **/
    this['Height'] = height;
  };

  ImageSizeVm.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new ImageSizeVm();
    
    if (data['SpaceId']) {
      _this['SpaceId'] = ApiClient.convertToType(data['SpaceId'], 'String');
    }
    
    if (data['Width']) {
      _this['Width'] = ApiClient.convertToType(data['Width'], 'Integer');
    }
    
    if (data['Height']) {
      _this['Height'] = ApiClient.convertToType(data['Height'], 'Integer');
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  ImageSizeVm.prototype.getSpaceId = function() {
    return this['SpaceId'];
  }

  /**
   * @param {String} spaceId
   **/
  ImageSizeVm.prototype.setSpaceId = function(spaceId) {
    this['SpaceId'] = spaceId;
  }
  
  /**
   * @return {Integer}
   **/
  ImageSizeVm.prototype.getWidth = function() {
    return this['Width'];
  }

  /**
   * @param {Integer} width
   **/
  ImageSizeVm.prototype.setWidth = function(width) {
    this['Width'] = width;
  }
  
  /**
   * @return {Integer}
   **/
  ImageSizeVm.prototype.getHeight = function() {
    return this['Height'];
  }

  /**
   * @param {Integer} height
   **/
  ImageSizeVm.prototype.setHeight = function(height) {
    this['Height'] = height;
  }
  
  

  

  return ImageSizeVm;
  
  
}));
