(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ShipOption'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ShipOption'));
  } else {
    // Browser globals (root is window)
    if (!root.GootenApiClient) {
      root.GootenApiClient = {};
    }
    root.GootenApiClient.ShipItem = factory(root.GootenApiClient.ApiClient, root.GootenApiClient.ShipOption);
  }
}(this, function(ApiClient, ShipOption) {
  'use strict';
  
  
  var ShipItem = function ShipItem(sKUs, shipOptions) { 
    
    /**
     * datatype: [String]
     * required 
     **/
    this['SKUs'] = sKUs;
    /**
     * datatype: [ShipOption]
     * required 
     **/
    this['ShipOptions'] = shipOptions;
  };

  ShipItem.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new ShipItem();
    
    if (data['SKUs']) {
      _this['SKUs'] = ApiClient.convertToType(data['SKUs'], ['String']);
    }
    
    if (data['ShipOptions']) {
      _this['ShipOptions'] = ApiClient.convertToType(data['ShipOptions'], [ShipOption]);
    }
    
    return _this;
  }

  
  
  /**
   * @return {[String]}
   **/
  ShipItem.prototype.getSKUs = function() {
    return this['SKUs'];
  }

  /**
   * @param {[String]} sKUs
   **/
  ShipItem.prototype.setSKUs = function(sKUs) {
    this['SKUs'] = sKUs;
  }
  
  /**
   * @return {[ShipOption]}
   **/
  ShipItem.prototype.getShipOptions = function() {
    return this['ShipOptions'];
  }

  /**
   * @param {[ShipOption]} shipOptions
   **/
  ShipItem.prototype.setShipOptions = function(shipOptions) {
    this['ShipOptions'] = shipOptions;
  }
  
  

  

  return ShipItem;
  
  
}));
