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
    root.GootenApiClient.ProductBuildInfo = factory(root.GootenApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';
  
  
  var ProductBuildInfo = function ProductBuildInfo(id, description, type, zIndex, x1, x2, y1, y2, color, backgroundImageUrl, overlayImageUrl, fontName, fontSize, fontHAlignment, fontVAlighment, defaultText) { 
    
    /**
     * datatype: String
     * required 
     **/
    this['Id'] = id;
    /**
     * datatype: String
     * required 
     **/
    this['Description'] = description;
    /**
     * datatype: String
     * required 
     **/
    this['Type'] = type;
    /**
     * datatype: Integer
     * required 
     **/
    this['ZIndex'] = zIndex;
    /**
     * datatype: Integer
     * required 
     **/
    this['X1'] = x1;
    /**
     * datatype: Integer
     * required 
     **/
    this['X2'] = x2;
    /**
     * datatype: Integer
     * required 
     **/
    this['Y1'] = y1;
    /**
     * datatype: Integer
     * required 
     **/
    this['Y2'] = y2;
    /**
     * datatype: String
     * required 
     **/
    this['Color'] = color;
    /**
     * datatype: String
     * required 
     **/
    this['BackgroundImageUrl'] = backgroundImageUrl;
    /**
     * datatype: String
     * required 
     **/
    this['OverlayImageUrl'] = overlayImageUrl;
    /**
     * datatype: String
     * required 
     **/
    this['FontName'] = fontName;
    /**
     * datatype: String
     * required 
     **/
    this['FontSize'] = fontSize;
    /**
     * datatype: String
     * required 
     **/
    this['FontHAlignment'] = fontHAlignment;
    /**
     * datatype: String
     * required 
     **/
    this['FontVAlighment'] = fontVAlighment;
    /**
     * datatype: String
     * required 
     **/
    this['DefaultText'] = defaultText;
  };

  ProductBuildInfo.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new ProductBuildInfo();
    
    if (data['Id']) {
      _this['Id'] = ApiClient.convertToType(data['Id'], 'String');
    }
    
    if (data['Description']) {
      _this['Description'] = ApiClient.convertToType(data['Description'], 'String');
    }
    
    if (data['Type']) {
      _this['Type'] = ApiClient.convertToType(data['Type'], 'String');
    }
    
    if (data['ZIndex']) {
      _this['ZIndex'] = ApiClient.convertToType(data['ZIndex'], 'Integer');
    }
    
    if (data['X1']) {
      _this['X1'] = ApiClient.convertToType(data['X1'], 'Integer');
    }
    
    if (data['X2']) {
      _this['X2'] = ApiClient.convertToType(data['X2'], 'Integer');
    }
    
    if (data['Y1']) {
      _this['Y1'] = ApiClient.convertToType(data['Y1'], 'Integer');
    }
    
    if (data['Y2']) {
      _this['Y2'] = ApiClient.convertToType(data['Y2'], 'Integer');
    }
    
    if (data['Color']) {
      _this['Color'] = ApiClient.convertToType(data['Color'], 'String');
    }
    
    if (data['BackgroundImageUrl']) {
      _this['BackgroundImageUrl'] = ApiClient.convertToType(data['BackgroundImageUrl'], 'String');
    }
    
    if (data['OverlayImageUrl']) {
      _this['OverlayImageUrl'] = ApiClient.convertToType(data['OverlayImageUrl'], 'String');
    }
    
    if (data['FontName']) {
      _this['FontName'] = ApiClient.convertToType(data['FontName'], 'String');
    }
    
    if (data['FontSize']) {
      _this['FontSize'] = ApiClient.convertToType(data['FontSize'], 'String');
    }
    
    if (data['FontHAlignment']) {
      _this['FontHAlignment'] = ApiClient.convertToType(data['FontHAlignment'], 'String');
    }
    
    if (data['FontVAlighment']) {
      _this['FontVAlighment'] = ApiClient.convertToType(data['FontVAlighment'], 'String');
    }
    
    if (data['DefaultText']) {
      _this['DefaultText'] = ApiClient.convertToType(data['DefaultText'], 'String');
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  ProductBuildInfo.prototype.getId = function() {
    return this['Id'];
  }

  /**
   * @param {String} id
   **/
  ProductBuildInfo.prototype.setId = function(id) {
    this['Id'] = id;
  }
  
  /**
   * @return {String}
   **/
  ProductBuildInfo.prototype.getDescription = function() {
    return this['Description'];
  }

  /**
   * @param {String} description
   **/
  ProductBuildInfo.prototype.setDescription = function(description) {
    this['Description'] = description;
  }
  
  /**
   * @return {String}
   **/
  ProductBuildInfo.prototype.getType = function() {
    return this['Type'];
  }

  /**
   * @param {String} type
   **/
  ProductBuildInfo.prototype.setType = function(type) {
    this['Type'] = type;
  }
  
  /**
   * @return {Integer}
   **/
  ProductBuildInfo.prototype.getZIndex = function() {
    return this['ZIndex'];
  }

  /**
   * @param {Integer} zIndex
   **/
  ProductBuildInfo.prototype.setZIndex = function(zIndex) {
    this['ZIndex'] = zIndex;
  }
  
  /**
   * @return {Integer}
   **/
  ProductBuildInfo.prototype.getX1 = function() {
    return this['X1'];
  }

  /**
   * @param {Integer} x1
   **/
  ProductBuildInfo.prototype.setX1 = function(x1) {
    this['X1'] = x1;
  }
  
  /**
   * @return {Integer}
   **/
  ProductBuildInfo.prototype.getX2 = function() {
    return this['X2'];
  }

  /**
   * @param {Integer} x2
   **/
  ProductBuildInfo.prototype.setX2 = function(x2) {
    this['X2'] = x2;
  }
  
  /**
   * @return {Integer}
   **/
  ProductBuildInfo.prototype.getY1 = function() {
    return this['Y1'];
  }

  /**
   * @param {Integer} y1
   **/
  ProductBuildInfo.prototype.setY1 = function(y1) {
    this['Y1'] = y1;
  }
  
  /**
   * @return {Integer}
   **/
  ProductBuildInfo.prototype.getY2 = function() {
    return this['Y2'];
  }

  /**
   * @param {Integer} y2
   **/
  ProductBuildInfo.prototype.setY2 = function(y2) {
    this['Y2'] = y2;
  }
  
  /**
   * @return {String}
   **/
  ProductBuildInfo.prototype.getColor = function() {
    return this['Color'];
  }

  /**
   * @param {String} color
   **/
  ProductBuildInfo.prototype.setColor = function(color) {
    this['Color'] = color;
  }
  
  /**
   * @return {String}
   **/
  ProductBuildInfo.prototype.getBackgroundImageUrl = function() {
    return this['BackgroundImageUrl'];
  }

  /**
   * @param {String} backgroundImageUrl
   **/
  ProductBuildInfo.prototype.setBackgroundImageUrl = function(backgroundImageUrl) {
    this['BackgroundImageUrl'] = backgroundImageUrl;
  }
  
  /**
   * @return {String}
   **/
  ProductBuildInfo.prototype.getOverlayImageUrl = function() {
    return this['OverlayImageUrl'];
  }

  /**
   * @param {String} overlayImageUrl
   **/
  ProductBuildInfo.prototype.setOverlayImageUrl = function(overlayImageUrl) {
    this['OverlayImageUrl'] = overlayImageUrl;
  }
  
  /**
   * @return {String}
   **/
  ProductBuildInfo.prototype.getFontName = function() {
    return this['FontName'];
  }

  /**
   * @param {String} fontName
   **/
  ProductBuildInfo.prototype.setFontName = function(fontName) {
    this['FontName'] = fontName;
  }
  
  /**
   * @return {String}
   **/
  ProductBuildInfo.prototype.getFontSize = function() {
    return this['FontSize'];
  }

  /**
   * @param {String} fontSize
   **/
  ProductBuildInfo.prototype.setFontSize = function(fontSize) {
    this['FontSize'] = fontSize;
  }
  
  /**
   * @return {String}
   **/
  ProductBuildInfo.prototype.getFontHAlignment = function() {
    return this['FontHAlignment'];
  }

  /**
   * @param {String} fontHAlignment
   **/
  ProductBuildInfo.prototype.setFontHAlignment = function(fontHAlignment) {
    this['FontHAlignment'] = fontHAlignment;
  }
  
  /**
   * @return {String}
   **/
  ProductBuildInfo.prototype.getFontVAlighment = function() {
    return this['FontVAlighment'];
  }

  /**
   * @param {String} fontVAlighment
   **/
  ProductBuildInfo.prototype.setFontVAlighment = function(fontVAlighment) {
    this['FontVAlighment'] = fontVAlighment;
  }
  
  /**
   * @return {String}
   **/
  ProductBuildInfo.prototype.getDefaultText = function() {
    return this['DefaultText'];
  }

  /**
   * @param {String} defaultText
   **/
  ProductBuildInfo.prototype.setDefaultText = function(defaultText) {
    this['DefaultText'] = defaultText;
  }
  
  

  

  return ProductBuildInfo;
  
  
}));
