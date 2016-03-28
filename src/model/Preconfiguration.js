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
    root.GootenApiClient.Preconfiguration = factory(root.GootenApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';
  
  
  var Preconfiguration = function Preconfiguration(spaceId, url) { 
    
    /**
     * Required only for multi-image items. The ID of the space where an image is to be placed. One can attain the SpaceId via inspecting the template data.
     * datatype: String
     * required 
     **/
    this['SpaceId'] = spaceId;
    /**
     * The url of the image to be placed in the referenced layer.
     * datatype: String
     * required 
     **/
    this['Url'] = url;
  };

  Preconfiguration.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new Preconfiguration();
    
    if (data['SpaceId']) {
      _this['SpaceId'] = ApiClient.convertToType(data['SpaceId'], 'String');
    }
    
    if (data['Url']) {
      _this['Url'] = ApiClient.convertToType(data['Url'], 'String');
    }
    
    return _this;
  }

  
  
  /**
   * get Required only for multi-image items. The ID of the space where an image is to be placed. One can attain the SpaceId via inspecting the template data.
   * @return {String}
   **/
  Preconfiguration.prototype.getSpaceId = function() {
    return this['SpaceId'];
  }

  /**
   * set Required only for multi-image items. The ID of the space where an image is to be placed. One can attain the SpaceId via inspecting the template data.
   * @param {String} spaceId
   **/
  Preconfiguration.prototype.setSpaceId = function(spaceId) {
    this['SpaceId'] = spaceId;
  }
  
  /**
   * get The url of the image to be placed in the referenced layer.
   * @return {String}
   **/
  Preconfiguration.prototype.getUrl = function() {
    return this['Url'];
  }

  /**
   * set The url of the image to be placed in the referenced layer.
   * @param {String} url
   **/
  Preconfiguration.prototype.setUrl = function(url) {
    this['Url'] = url;
  }
  
  

  

  return Preconfiguration;
  
  
}));
