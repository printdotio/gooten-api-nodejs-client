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
    root.GootenApiClient.Image = factory(root.GootenApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';
  
  
  var Image = function Image(url, index, thumbnailUrl, manipCommand, spaceId) { 
    
    /**
     * datatype: String
     * required 
     **/
    this['Url'] = url;
    /**
     * datatype: Integer
     * required 
     **/
    this['Index'] = index;
    /**
     * datatype: String
     * required 
     **/
    this['ThumbnailUrl'] = thumbnailUrl;
    /**
     * datatype: String
     * required 
     **/
    this['ManipCommand'] = manipCommand;
    /**
     * datatype: String
     * required 
     **/
    this['SpaceId'] = spaceId;
  };

  Image.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new Image();
    
    if (data['Url']) {
      _this['Url'] = ApiClient.convertToType(data['Url'], 'String');
    }
    
    if (data['Index']) {
      _this['Index'] = ApiClient.convertToType(data['Index'], 'Integer');
    }
    
    if (data['ThumbnailUrl']) {
      _this['ThumbnailUrl'] = ApiClient.convertToType(data['ThumbnailUrl'], 'String');
    }
    
    if (data['ManipCommand']) {
      _this['ManipCommand'] = ApiClient.convertToType(data['ManipCommand'], 'String');
    }
    
    if (data['SpaceId']) {
      _this['SpaceId'] = ApiClient.convertToType(data['SpaceId'], 'String');
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  Image.prototype.getUrl = function() {
    return this['Url'];
  }

  /**
   * @param {String} url
   **/
  Image.prototype.setUrl = function(url) {
    this['Url'] = url;
  }
  
  /**
   * @return {Integer}
   **/
  Image.prototype.getIndex = function() {
    return this['Index'];
  }

  /**
   * @param {Integer} index
   **/
  Image.prototype.setIndex = function(index) {
    this['Index'] = index;
  }
  
  /**
   * @return {String}
   **/
  Image.prototype.getThumbnailUrl = function() {
    return this['ThumbnailUrl'];
  }

  /**
   * @param {String} thumbnailUrl
   **/
  Image.prototype.setThumbnailUrl = function(thumbnailUrl) {
    this['ThumbnailUrl'] = thumbnailUrl;
  }
  
  /**
   * @return {String}
   **/
  Image.prototype.getManipCommand = function() {
    return this['ManipCommand'];
  }

  /**
   * @param {String} manipCommand
   **/
  Image.prototype.setManipCommand = function(manipCommand) {
    this['ManipCommand'] = manipCommand;
  }
  
  /**
   * @return {String}
   **/
  Image.prototype.getSpaceId = function() {
    return this['SpaceId'];
  }

  /**
   * @param {String} spaceId
   **/
  Image.prototype.setSpaceId = function(spaceId) {
    this['SpaceId'] = spaceId;
  }
  
  

  

  return Image;
  
  
}));
