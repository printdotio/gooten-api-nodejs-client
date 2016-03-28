(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Category', './ProductImage', './ProductInfo', './ProductPriceInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Category'), require('./ProductImage'), require('./ProductInfo'), require('./ProductPriceInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.GootenApiClient) {
      root.GootenApiClient = {};
    }
    root.GootenApiClient.Product = factory(root.GootenApiClient.ApiClient, root.GootenApiClient.Category, root.GootenApiClient.ProductImage, root.GootenApiClient.ProductInfo, root.GootenApiClient.ProductPriceInfo);
  }
}(this, function(ApiClient, Category, ProductImage, ProductInfo, ProductPriceInfo) {
  'use strict';
  
  
  var Product = function Product(id, uId, name, shortDescription, hasAvailableProductVariants, hasProductTemplates, featuredIndex, maxZoom, retailPrice, info, productImage, priceInfo, categories) { 
    
    /**
     * The product type id. Represents a type/class of products. Can later be passed into the productvariant service to get available product variations.
     * datatype: Integer
     * required 
     **/
    this['Id'] = id;
    /**
     * An id that syncs between printio's staging and live environments.
     * datatype: String
     * required 
     **/
    this['UId'] = uId;
    /**
     * datatype: String
     * required 
     **/
    this['Name'] = name;
    /**
     * datatype: String
     * required 
     **/
    this['ShortDescription'] = shortDescription;
    /**
     * Whether or not the item returned is a Product, or ProductVariant. Items with a Sku will not have other product variants
     * datatype: Boolean
     * required 
     **/
    this['HasAvailableProductVariants'] = hasAvailableProductVariants;
    /**
     * Whether or not the product has variants with templates.
     * datatype: Boolean
     * required 
     **/
    this['HasProductTemplates'] = hasProductTemplates;
    /**
     * A value to sort featured items by. Note that this is null if IsFeatured=false
     * datatype: Integer
     * required 
     **/
    this['FeaturedIndex'] = featuredIndex;
    /**
     * datatype: Integer
     * required 
     **/
    this['MaxZoom'] = maxZoom;
    /**
     * datatype: ProductPriceInfo
     * required 
     **/
    this['RetailPrice'] = retailPrice;
    /**
     * Content describing the product.
     * datatype: [ProductInfo]
     * required 
     **/
    this['Info'] = info;
    /**
     * Product images. Note that this contains large and small images for web, mobile, etc
     * datatype: [ProductImage]
     * required 
     **/
    this['ProductImage'] = productImage;
    /**
     * datatype: ProductPriceInfo
     * required 
     **/
    this['PriceInfo'] = priceInfo;
    /**
     * datatype: [Category]
     * required 
     **/
    this['Categories'] = categories;
  };

  Product.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new Product();
    
    if (data['Id']) {
      _this['Id'] = ApiClient.convertToType(data['Id'], 'Integer');
    }
    
    if (data['UId']) {
      _this['UId'] = ApiClient.convertToType(data['UId'], 'String');
    }
    
    if (data['Name']) {
      _this['Name'] = ApiClient.convertToType(data['Name'], 'String');
    }
    
    if (data['ShortDescription']) {
      _this['ShortDescription'] = ApiClient.convertToType(data['ShortDescription'], 'String');
    }
    
    if (data['HasAvailableProductVariants']) {
      _this['HasAvailableProductVariants'] = ApiClient.convertToType(data['HasAvailableProductVariants'], 'Boolean');
    }
    
    if (data['HasProductTemplates']) {
      _this['HasProductTemplates'] = ApiClient.convertToType(data['HasProductTemplates'], 'Boolean');
    }
    
    if (data['FeaturedIndex']) {
      _this['FeaturedIndex'] = ApiClient.convertToType(data['FeaturedIndex'], 'Integer');
    }
    
    if (data['MaxZoom']) {
      _this['MaxZoom'] = ApiClient.convertToType(data['MaxZoom'], 'Integer');
    }
    
    if (data['RetailPrice']) {
      _this['RetailPrice'] = ProductPriceInfo.constructFromObject(data['RetailPrice']);
    }
    
    if (data['Info']) {
      _this['Info'] = ApiClient.convertToType(data['Info'], [ProductInfo]);
    }
    
    if (data['ProductImage']) {
      _this['ProductImage'] = ApiClient.convertToType(data['ProductImage'], [ProductImage]);
    }
    
    if (data['PriceInfo']) {
      _this['PriceInfo'] = ProductPriceInfo.constructFromObject(data['PriceInfo']);
    }
    
    if (data['PartnerPriceInfo']) {
      _this['PartnerPriceInfo'] = ProductPriceInfo.constructFromObject(data['PartnerPriceInfo']);
    }
    
    if (data['Categories']) {
      _this['Categories'] = ApiClient.convertToType(data['Categories'], [Category]);
    }
    
    return _this;
  }

  
  
  /**
   * get The product type id. Represents a type/class of products. Can later be passed into the productvariant service to get available product variations.
   * @return {Integer}
   **/
  Product.prototype.getId = function() {
    return this['Id'];
  }

  /**
   * set The product type id. Represents a type/class of products. Can later be passed into the productvariant service to get available product variations.
   * @param {Integer} id
   **/
  Product.prototype.setId = function(id) {
    this['Id'] = id;
  }
  
  /**
   * get An id that syncs between printio's staging and live environments.
   * @return {String}
   **/
  Product.prototype.getUId = function() {
    return this['UId'];
  }

  /**
   * set An id that syncs between printio's staging and live environments.
   * @param {String} uId
   **/
  Product.prototype.setUId = function(uId) {
    this['UId'] = uId;
  }
  
  /**
   * @return {String}
   **/
  Product.prototype.getName = function() {
    return this['Name'];
  }

  /**
   * @param {String} name
   **/
  Product.prototype.setName = function(name) {
    this['Name'] = name;
  }
  
  /**
   * @return {String}
   **/
  Product.prototype.getShortDescription = function() {
    return this['ShortDescription'];
  }

  /**
   * @param {String} shortDescription
   **/
  Product.prototype.setShortDescription = function(shortDescription) {
    this['ShortDescription'] = shortDescription;
  }
  
  /**
   * get Whether or not the item returned is a Product, or ProductVariant. Items with a Sku will not have other product variants
   * @return {Boolean}
   **/
  Product.prototype.getHasAvailableProductVariants = function() {
    return this['HasAvailableProductVariants'];
  }

  /**
   * set Whether or not the item returned is a Product, or ProductVariant. Items with a Sku will not have other product variants
   * @param {Boolean} hasAvailableProductVariants
   **/
  Product.prototype.setHasAvailableProductVariants = function(hasAvailableProductVariants) {
    this['HasAvailableProductVariants'] = hasAvailableProductVariants;
  }
  
  /**
   * get Whether or not the product has variants with templates.
   * @return {Boolean}
   **/
  Product.prototype.getHasProductTemplates = function() {
    return this['HasProductTemplates'];
  }

  /**
   * set Whether or not the product has variants with templates.
   * @param {Boolean} hasProductTemplates
   **/
  Product.prototype.setHasProductTemplates = function(hasProductTemplates) {
    this['HasProductTemplates'] = hasProductTemplates;
  }
  
  /**
   * get A value to sort featured items by. Note that this is null if IsFeatured=false
   * @return {Integer}
   **/
  Product.prototype.getFeaturedIndex = function() {
    return this['FeaturedIndex'];
  }

  /**
   * set A value to sort featured items by. Note that this is null if IsFeatured=false
   * @param {Integer} featuredIndex
   **/
  Product.prototype.setFeaturedIndex = function(featuredIndex) {
    this['FeaturedIndex'] = featuredIndex;
  }
  
  /**
   * @return {Integer}
   **/
  Product.prototype.getMaxZoom = function() {
    return this['MaxZoom'];
  }

  /**
   * @param {Integer} maxZoom
   **/
  Product.prototype.setMaxZoom = function(maxZoom) {
    this['MaxZoom'] = maxZoom;
  }
  
  /**
   * @return {ProductPriceInfo}
   **/
  Product.prototype.getRetailPrice = function() {
    return this['RetailPrice'];
  }

  /**
   * @param {ProductPriceInfo} retailPrice
   **/
  Product.prototype.setRetailPrice = function(retailPrice) {
    this['RetailPrice'] = retailPrice;
  }
  
  /**
   * get Content describing the product.
   * @return {[ProductInfo]}
   **/
  Product.prototype.getInfo = function() {
    return this['Info'];
  }

  /**
   * set Content describing the product.
   * @param {[ProductInfo]} info
   **/
  Product.prototype.setInfo = function(info) {
    this['Info'] = info;
  }
  
  /**
   * get Product images. Note that this contains large and small images for web, mobile, etc
   * @return {[ProductImage]}
   **/
  Product.prototype.getProductImage = function() {
    return this['ProductImage'];
  }

  /**
   * set Product images. Note that this contains large and small images for web, mobile, etc
   * @param {[ProductImage]} productImage
   **/
  Product.prototype.setProductImage = function(productImage) {
    this['ProductImage'] = productImage;
  }
  
  /**
   * @return {ProductPriceInfo}
   **/
  Product.prototype.getPriceInfo = function() {
    return this['PriceInfo'];
  }

  /**
   * @param {ProductPriceInfo} priceInfo
   **/
  Product.prototype.setPriceInfo = function(priceInfo) {
    this['PriceInfo'] = priceInfo;
  }
  
  /**
   * @return {ProductPriceInfo}
   **/
  Product.prototype.getPartnerPriceInfo = function() {
    return this['PartnerPriceInfo'];
  }

  /**
   * @param {ProductPriceInfo} partnerPriceInfo
   **/
  Product.prototype.setPartnerPriceInfo = function(partnerPriceInfo) {
    this['PartnerPriceInfo'] = partnerPriceInfo;
  }
  
  /**
   * @return {[Category]}
   **/
  Product.prototype.getCategories = function() {
    return this['Categories'];
  }

  /**
   * @param {[Category]} categories
   **/
  Product.prototype.setCategories = function(categories) {
    this['Categories'] = categories;
  }
  
  

  

  return Product;
  
  
}));
