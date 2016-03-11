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
  
  
  var Category = function Category(id, name) { 
    
    /**
     * datatype: Integer
     * required 
     **/
    this['Id'] = id;
    /**
     * datatype: String
     * required 
     **/
    this['Name'] = name;
  };

  Category.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new Category();
    
    if (data['Id']) {
      _this['Id'] = ApiClient.convertToType(data['Id'], 'Integer');
    }
    
    if (data['Name']) {
      _this['Name'] = ApiClient.convertToType(data['Name'], 'String');
    }
    
    return _this;
  }

  
  
  /**
   * @return {Integer}
   **/
  Category.prototype.getId = function() {
    return this['Id'];
  }

  /**
   * @param {Integer} id
   **/
  Category.prototype.setId = function(id) {
    this['Id'] = id;
  }
  
  /**
   * @return {String}
   **/
  Category.prototype.getName = function() {
    return this['Name'];
  }

  /**
   * @param {String} name
   **/
  Category.prototype.setName = function(name) {
    this['Name'] = name;
  }
  
  

  

  if (module) {
    module.Category = Category;
  }

  return Category;
  
  
}));
