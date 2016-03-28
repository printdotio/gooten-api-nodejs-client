(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ProductOption', './ProductPriceInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ProductOption'), require('./ProductPriceInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.GootenApiClient) {
      root.GootenApiClient = {};
    }
    root.GootenApiClient.ProductVariant = factory(root.GootenApiClient.ApiClient, root.GootenApiClient.ProductOption, root.GootenApiClient.ProductPriceInfo);
  }
}(this, function(ApiClient, ProductOption, ProductPriceInfo) {
  'use strict';
  
  
  var ProductVariant = function ProductVariant(sku, maxImages, hasTemplates, options, priceInfo) { 
    
    /**
     * datatype: String
     * required 
     **/
    this['Sku'] = sku;
    /**
     * datatype: Integer
     * required 
     **/
    this['MaxImages'] = maxImages;
    /**
     * datatype: Boolean
     * required 
     **/
    this['HasTemplates'] = hasTemplates;
    /**
     * datatype: [ProductOption]
     * required 
     **/
    this['Options'] = options;
    /**
     * datatype: ProductPriceInfo
     * required 
     **/
    this['PriceInfo'] = priceInfo;
  };

  ProductVariant.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new ProductVariant();
    
    if (data['Sku']) {
      _this['Sku'] = ApiClient.convertToType(data['Sku'], 'String');
    }
    
    if (data['MaxImages']) {
      _this['MaxImages'] = ApiClient.convertToType(data['MaxImages'], 'Integer');
    }
    
    if (data['HasTemplates']) {
      _this['HasTemplates'] = ApiClient.convertToType(data['HasTemplates'], 'Boolean');
    }
    
    if (data['Options']) {
      _this['Options'] = ApiClient.convertToType(data['Options'], [ProductOption]);
    }
    
    if (data['PriceInfo']) {
      _this['PriceInfo'] = ProductPriceInfo.constructFromObject(data['PriceInfo']);
    }
    
    if (data['PartnerPriceInfo']) {
      _this['PartnerPriceInfo'] = ProductPriceInfo.constructFromObject(data['PartnerPriceInfo']);
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  ProductVariant.prototype.getSku = function() {
    return this['Sku'];
  }

  /**
   * @param {String} sku
   **/
  ProductVariant.prototype.setSku = function(sku) {
    this['Sku'] = sku;
  }
  
  /**
   * @return {Integer}
   **/
  ProductVariant.prototype.getMaxImages = function() {
    return this['MaxImages'];
  }

  /**
   * @param {Integer} maxImages
   **/
  ProductVariant.prototype.setMaxImages = function(maxImages) {
    this['MaxImages'] = maxImages;
  }
  
  /**
   * @return {Boolean}
   **/
  ProductVariant.prototype.getHasTemplates = function() {
    return this['HasTemplates'];
  }

  /**
   * @param {Boolean} hasTemplates
   **/
  ProductVariant.prototype.setHasTemplates = function(hasTemplates) {
    this['HasTemplates'] = hasTemplates;
  }
  
  /**
   * @return {[ProductOption]}
   **/
  ProductVariant.prototype.getOptions = function() {
    return this['Options'];
  }

  /**
   * @param {[ProductOption]} options
   **/
  ProductVariant.prototype.setOptions = function(options) {
    this['Options'] = options;
  }
  
  /**
   * @return {ProductPriceInfo}
   **/
  ProductVariant.prototype.getPriceInfo = function() {
    return this['PriceInfo'];
  }

  /**
   * @param {ProductPriceInfo} priceInfo
   **/
  ProductVariant.prototype.setPriceInfo = function(priceInfo) {
    this['PriceInfo'] = priceInfo;
  }
  
  /**
   * @return {ProductPriceInfo}
   **/
  ProductVariant.prototype.getPartnerPriceInfo = function() {
    return this['PartnerPriceInfo'];
  }

  /**
   * @param {ProductPriceInfo} partnerPriceInfo
   **/
  ProductVariant.prototype.setPartnerPriceInfo = function(partnerPriceInfo) {
    this['PartnerPriceInfo'] = partnerPriceInfo;
  }
  
  

  

  return ProductVariant;
  
  
}));
