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
    root.GootenApiClient.ProductPreviewResponse = factory(root.GootenApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';
  
  
  var ProductPreviewResponse = function ProductPreviewResponse(url, hadError, errorMessage) { 
    
    /**
     * datatype: String
     * required 
     **/
    this['Url'] = url;
    /**
     * datatype: Boolean
     * required 
     **/
    this['HadError'] = hadError;
    /**
     * datatype: String
     * required 
     **/
    this['ErrorMessage'] = errorMessage;
  };

  ProductPreviewResponse.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new ProductPreviewResponse();
    
    if (data['Url']) {
      _this['Url'] = ApiClient.convertToType(data['Url'], 'String');
    }
    
    if (data['HadError']) {
      _this['HadError'] = ApiClient.convertToType(data['HadError'], 'Boolean');
    }
    
    if (data['ErrorMessage']) {
      _this['ErrorMessage'] = ApiClient.convertToType(data['ErrorMessage'], 'String');
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  ProductPreviewResponse.prototype.getUrl = function() {
    return this['Url'];
  }

  /**
   * @param {String} url
   **/
  ProductPreviewResponse.prototype.setUrl = function(url) {
    this['Url'] = url;
  }
  
  /**
   * @return {Boolean}
   **/
  ProductPreviewResponse.prototype.getHadError = function() {
    return this['HadError'];
  }

  /**
   * @param {Boolean} hadError
   **/
  ProductPreviewResponse.prototype.setHadError = function(hadError) {
    this['HadError'] = hadError;
  }
  
  /**
   * @return {String}
   **/
  ProductPreviewResponse.prototype.getErrorMessage = function() {
    return this['ErrorMessage'];
  }

  /**
   * @param {String} errorMessage
   **/
  ProductPreviewResponse.prototype.setErrorMessage = function(errorMessage) {
    this['ErrorMessage'] = errorMessage;
  }
  
  

  

  return ProductPreviewResponse;
  
  
}));
