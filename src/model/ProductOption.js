(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    factory(root.SwaggerJsClient, root.SwaggerJsClient.ApiClient);
  }
}(this, function(module, ApiClient) {
  'use strict';
  
  
  var ProductOption = function ProductOption(optionId, valueId, name, value, imageUrl, imageType, rgbaColor, cmValue, sortValue) { 
    
    /**
     * datatype: String
     * required 
     **/
    this['OptionId'] = optionId;
    /**
     * datatype: String
     * required 
     **/
    this['ValueId'] = valueId;
    /**
     * datatype: String
     * required 
     **/
    this['Name'] = name;
    /**
     * datatype: String
     * required 
     **/
    this['Value'] = value;
    /**
     * datatype: String
     * required 
     **/
    this['ImageUrl'] = imageUrl;
    /**
     * datatype: String
     * required 
     **/
    this['ImageType'] = imageType;
    /**
     * datatype: String
     * required 
     **/
    this['RgbaColor'] = rgbaColor;
    /**
     * datatype: String
     * required 
     **/
    this['CmValue'] = cmValue;
    /**
     * datatype: String
     * required 
     **/
    this['SortValue'] = sortValue;
  };

  ProductOption.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new ProductOption();
    
    if (data['OptionId']) {
      _this['OptionId'] = ApiClient.convertToType(data['OptionId'], 'String');
    }
    
    if (data['ValueId']) {
      _this['ValueId'] = ApiClient.convertToType(data['ValueId'], 'String');
    }
    
    if (data['Name']) {
      _this['Name'] = ApiClient.convertToType(data['Name'], 'String');
    }
    
    if (data['Value']) {
      _this['Value'] = ApiClient.convertToType(data['Value'], 'String');
    }
    
    if (data['ImageUrl']) {
      _this['ImageUrl'] = ApiClient.convertToType(data['ImageUrl'], 'String');
    }
    
    if (data['ImageType']) {
      _this['ImageType'] = ApiClient.convertToType(data['ImageType'], 'String');
    }
    
    if (data['RgbaColor']) {
      _this['RgbaColor'] = ApiClient.convertToType(data['RgbaColor'], 'String');
    }
    
    if (data['CmValue']) {
      _this['CmValue'] = ApiClient.convertToType(data['CmValue'], 'String');
    }
    
    if (data['SortValue']) {
      _this['SortValue'] = ApiClient.convertToType(data['SortValue'], 'String');
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  ProductOption.prototype.getOptionId = function() {
    return this['OptionId'];
  }

  /**
   * @param {String} optionId
   **/
  ProductOption.prototype.setOptionId = function(optionId) {
    this['OptionId'] = optionId;
  }
  
  /**
   * @return {String}
   **/
  ProductOption.prototype.getValueId = function() {
    return this['ValueId'];
  }

  /**
   * @param {String} valueId
   **/
  ProductOption.prototype.setValueId = function(valueId) {
    this['ValueId'] = valueId;
  }
  
  /**
   * @return {String}
   **/
  ProductOption.prototype.getName = function() {
    return this['Name'];
  }

  /**
   * @param {String} name
   **/
  ProductOption.prototype.setName = function(name) {
    this['Name'] = name;
  }
  
  /**
   * @return {String}
   **/
  ProductOption.prototype.getValue = function() {
    return this['Value'];
  }

  /**
   * @param {String} value
   **/
  ProductOption.prototype.setValue = function(value) {
    this['Value'] = value;
  }
  
  /**
   * @return {String}
   **/
  ProductOption.prototype.getImageUrl = function() {
    return this['ImageUrl'];
  }

  /**
   * @param {String} imageUrl
   **/
  ProductOption.prototype.setImageUrl = function(imageUrl) {
    this['ImageUrl'] = imageUrl;
  }
  
  /**
   * @return {String}
   **/
  ProductOption.prototype.getImageType = function() {
    return this['ImageType'];
  }

  /**
   * @param {String} imageType
   **/
  ProductOption.prototype.setImageType = function(imageType) {
    this['ImageType'] = imageType;
  }
  
  /**
   * @return {String}
   **/
  ProductOption.prototype.getRgbaColor = function() {
    return this['RgbaColor'];
  }

  /**
   * @param {String} rgbaColor
   **/
  ProductOption.prototype.setRgbaColor = function(rgbaColor) {
    this['RgbaColor'] = rgbaColor;
  }
  
  /**
   * @return {String}
   **/
  ProductOption.prototype.getCmValue = function() {
    return this['CmValue'];
  }

  /**
   * @param {String} cmValue
   **/
  ProductOption.prototype.setCmValue = function(cmValue) {
    this['CmValue'] = cmValue;
  }
  
  /**
   * @return {String}
   **/
  ProductOption.prototype.getSortValue = function() {
    return this['SortValue'];
  }

  /**
   * @param {String} sortValue
   **/
  ProductOption.prototype.setSortValue = function(sortValue) {
    this['SortValue'] = sortValue;
  }
  
  

  

  if (module) {
    module.ProductOption = ProductOption;
  }

  return ProductOption;
  
  
}));
