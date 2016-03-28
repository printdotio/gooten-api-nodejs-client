(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Item'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Item'));
  } else {
    // Browser globals (root is window)
    if (!root.GootenApiClient) {
      root.GootenApiClient = {};
    }
    root.GootenApiClient.SubmittedOrder = factory(root.GootenApiClient.ApiClient, root.GootenApiClient.Item);
  }
}(this, function(ApiClient, Item) {
  'use strict';
  
  
  var SubmittedOrder = function SubmittedOrder(id, items) { 
    
    /**
     * datatype: String
     * required 
     **/
    this['Id'] = id;
    /**
     * datatype: [Item]
     * required 
     **/
    this['Items'] = items;
  };

  SubmittedOrder.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new SubmittedOrder();
    
    if (data['Id']) {
      _this['Id'] = ApiClient.convertToType(data['Id'], 'String');
    }
    
    if (data['Items']) {
      _this['Items'] = ApiClient.convertToType(data['Items'], [Item]);
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  SubmittedOrder.prototype.getId = function() {
    return this['Id'];
  }

  /**
   * @param {String} id
   **/
  SubmittedOrder.prototype.setId = function(id) {
    this['Id'] = id;
  }
  
  /**
   * @return {[Item]}
   **/
  SubmittedOrder.prototype.getItems = function() {
    return this['Items'];
  }

  /**
   * @param {[Item]} items
   **/
  SubmittedOrder.prototype.setItems = function(items) {
    this['Items'] = items;
  }
  
  

  

  return SubmittedOrder;
  
  
}));
