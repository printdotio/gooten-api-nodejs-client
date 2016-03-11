(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './Product'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./Product'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    factory(root.SwaggerJsClient, root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.Product);
  }
}(this, function(module, ApiClient, Product) {
  'use strict';
  
  
  var ProductList = function ProductList(products) { 
    
    /**
     * datatype: [Product]
     * required 
     **/
    this['Products'] = products;
  };

  ProductList.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new ProductList();
    
    if (data['Products']) {
      _this['Products'] = ApiClient.convertToType(data['Products'], [Product]);
    }
    
    return _this;
  }

  
  
  /**
   * @return {[Product]}
   **/
  ProductList.prototype.getProducts = function() {
    return this['Products'];
  }

  /**
   * @param {[Product]} products
   **/
  ProductList.prototype.setProducts = function(products) {
    this['Products'] = products;
  }
  
  

  

  if (module) {
    module.ProductList = ProductList;
  }

  return ProductList;
  
  
}));
