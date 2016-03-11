(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './SearchSubmittedOrder'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./SearchSubmittedOrder'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    factory(root.SwaggerJsClient, root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.SearchSubmittedOrder);
  }
}(this, function(module, ApiClient, SearchSubmittedOrder) {
  'use strict';
  
  
  var SubmittedOrderList = function SubmittedOrderList(orders, totalPages, page, hadError) { 
    
    /**
     * datatype: [SearchSubmittedOrder]
     * required 
     **/
    this['Orders'] = orders;
    /**
     * datatype: Integer
     * required 
     **/
    this['TotalPages'] = totalPages;
    /**
     * datatype: Integer
     * required 
     **/
    this['Page'] = page;
    /**
     * datatype: Boolean
     * required 
     **/
    this['HadError'] = hadError;
  };

  SubmittedOrderList.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new SubmittedOrderList();
    
    if (data['Orders']) {
      _this['Orders'] = ApiClient.convertToType(data['Orders'], [SearchSubmittedOrder]);
    }
    
    if (data['TotalPages']) {
      _this['TotalPages'] = ApiClient.convertToType(data['TotalPages'], 'Integer');
    }
    
    if (data['Page']) {
      _this['Page'] = ApiClient.convertToType(data['Page'], 'Integer');
    }
    
    if (data['HadError']) {
      _this['HadError'] = ApiClient.convertToType(data['HadError'], 'Boolean');
    }
    
    return _this;
  }

  
  
  /**
   * @return {[SearchSubmittedOrder]}
   **/
  SubmittedOrderList.prototype.getOrders = function() {
    return this['Orders'];
  }

  /**
   * @param {[SearchSubmittedOrder]} orders
   **/
  SubmittedOrderList.prototype.setOrders = function(orders) {
    this['Orders'] = orders;
  }
  
  /**
   * @return {Integer}
   **/
  SubmittedOrderList.prototype.getTotalPages = function() {
    return this['TotalPages'];
  }

  /**
   * @param {Integer} totalPages
   **/
  SubmittedOrderList.prototype.setTotalPages = function(totalPages) {
    this['TotalPages'] = totalPages;
  }
  
  /**
   * @return {Integer}
   **/
  SubmittedOrderList.prototype.getPage = function() {
    return this['Page'];
  }

  /**
   * @param {Integer} page
   **/
  SubmittedOrderList.prototype.setPage = function(page) {
    this['Page'] = page;
  }
  
  /**
   * @return {Boolean}
   **/
  SubmittedOrderList.prototype.getHadError = function() {
    return this['HadError'];
  }

  /**
   * @param {Boolean} hadError
   **/
  SubmittedOrderList.prototype.setHadError = function(hadError) {
    this['HadError'] = hadError;
  }
  
  

  

  if (module) {
    module.SubmittedOrderList = SubmittedOrderList;
  }

  return SubmittedOrderList;
  
  
}));
