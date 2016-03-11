(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './ProductOptionList', './ProductVariant'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./ProductOptionList'), require('./ProductVariant'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    factory(root.SwaggerJsClient, root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.ProductOptionList, root.SwaggerJsClient.ProductVariant);
  }
}(this, function(module, ApiClient, ProductOptionList, ProductVariant) {
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
  
  

  

  if (module) {
    module.ProductVariantResponse = ProductVariantResponse;
  }

  return ProductVariantResponse;
  
  
}));
