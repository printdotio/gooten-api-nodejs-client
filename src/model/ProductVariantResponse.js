(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ProductOptionList', './ProductVariant'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ProductOptionList'), require('./ProductVariant'));
  } else {
    // Browser globals (root is window)
    if (!root.GootenApiClient) {
      root.GootenApiClient = {};
    }
    root.GootenApiClient.ProductVariantResponse = factory(root.GootenApiClient.ApiClient, root.GootenApiClient.ProductOptionList, root.GootenApiClient.ProductVariant);
  }
}(this, function(ApiClient, ProductOptionList, ProductVariant) {
  'use strict';
  
  
  var ProductVariantResponse = function ProductVariantResponse(productVariants, options) { 
    
    /**
     * datatype: [ProductVariant]
     * required 
     **/
    this['ProductVariants'] = productVariants;
    /**
     * datatype: [ProductOptionList]
     * required 
     **/
    this['Options'] = options;
  };

  ProductVariantResponse.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new ProductVariantResponse();
    
    if (data['ProductVariants']) {
      _this['ProductVariants'] = ApiClient.convertToType(data['ProductVariants'], [ProductVariant]);
    }
    
    if (data['Options']) {
      _this['Options'] = ApiClient.convertToType(data['Options'], [ProductOptionList]);
    }
    
    return _this;
  }

  
  
  /**
   * @return {[ProductVariant]}
   **/
  ProductVariantResponse.prototype.getProductVariants = function() {
    return this['ProductVariants'];
  }

  /**
   * @param {[ProductVariant]} productVariants
   **/
  ProductVariantResponse.prototype.setProductVariants = function(productVariants) {
    this['ProductVariants'] = productVariants;
  }
  
  /**
   * @return {[ProductOptionList]}
   **/
  ProductVariantResponse.prototype.getOptions = function() {
    return this['Options'];
  }

  /**
   * @param {[ProductOptionList]} options
   **/
  ProductVariantResponse.prototype.setOptions = function(options) {
    this['Options'] = options;
  }
  
  

  

  return ProductVariantResponse;
  
  
}));
