(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ProductBuildInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ProductBuildInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.GootenApiClient) {
      root.GootenApiClient = {};
    }
    root.GootenApiClient.ProductBuildInfoSpace = factory(root.GootenApiClient.ApiClient, root.GootenApiClient.ProductBuildInfo);
  }
}(this, function(ApiClient, ProductBuildInfo) {
  'use strict';
  
  
  var ProductBuildInfoSpace = function ProductBuildInfoSpace(id, description, index, defaultRotation, layers) { 
    
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
     * datatype: Integer
     * required 
     **/
    this['Index'] = index;
    /**
     * datatype: Integer
     * required 
     **/
    this['DefaultRotation'] = defaultRotation;
    /**
     * datatype: [ProductBuildInfo]
     * required 
     **/
    this['Layers'] = layers;
  };

  ProductBuildInfoSpace.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new ProductBuildInfoSpace();
    
    if (data['Id']) {
      _this['Id'] = ApiClient.convertToType(data['Id'], 'String');
    }
    
    if (data['Description']) {
      _this['Description'] = ApiClient.convertToType(data['Description'], 'String');
    }
    
    if (data['Index']) {
      _this['Index'] = ApiClient.convertToType(data['Index'], 'Integer');
    }
    
    if (data['DefaultRotation']) {
      _this['DefaultRotation'] = ApiClient.convertToType(data['DefaultRotation'], 'Integer');
    }
    
    if (data['Layers']) {
      _this['Layers'] = ApiClient.convertToType(data['Layers'], [ProductBuildInfo]);
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  ProductBuildInfoSpace.prototype.getId = function() {
    return this['Id'];
  }

  /**
   * @param {String} id
   **/
  ProductBuildInfoSpace.prototype.setId = function(id) {
    this['Id'] = id;
  }
  
  /**
   * @return {String}
   **/
  ProductBuildInfoSpace.prototype.getDescription = function() {
    return this['Description'];
  }

  /**
   * @param {String} description
   **/
  ProductBuildInfoSpace.prototype.setDescription = function(description) {
    this['Description'] = description;
  }
  
  /**
   * @return {Integer}
   **/
  ProductBuildInfoSpace.prototype.getIndex = function() {
    return this['Index'];
  }

  /**
   * @param {Integer} index
   **/
  ProductBuildInfoSpace.prototype.setIndex = function(index) {
    this['Index'] = index;
  }
  
  /**
   * @return {Integer}
   **/
  ProductBuildInfoSpace.prototype.getDefaultRotation = function() {
    return this['DefaultRotation'];
  }

  /**
   * @param {Integer} defaultRotation
   **/
  ProductBuildInfoSpace.prototype.setDefaultRotation = function(defaultRotation) {
    this['DefaultRotation'] = defaultRotation;
  }
  
  /**
   * @return {[ProductBuildInfo]}
   **/
  ProductBuildInfoSpace.prototype.getLayers = function() {
    return this['Layers'];
  }

  /**
   * @param {[ProductBuildInfo]} layers
   **/
  ProductBuildInfoSpace.prototype.setLayers = function(layers) {
    this['Layers'] = layers;
  }
  
  

  

  return ProductBuildInfoSpace;
  
  
}));
