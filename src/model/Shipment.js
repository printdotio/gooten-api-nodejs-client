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
  
  
  var Shipment = function Shipment(trackingNumber, trackingUrl, shipCarrierName) { 
    
    /**
     * datatype: String
     * required 
     **/
    this['TrackingNumber'] = trackingNumber;
    /**
     * datatype: String
     * required 
     **/
    this['TrackingUrl'] = trackingUrl;
    /**
     * datatype: String
     * required 
     **/
    this['ShipCarrierName'] = shipCarrierName;
  };

  Shipment.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new Shipment();
    
    if (data['TrackingNumber']) {
      _this['TrackingNumber'] = ApiClient.convertToType(data['TrackingNumber'], 'String');
    }
    
    if (data['TrackingUrl']) {
      _this['TrackingUrl'] = ApiClient.convertToType(data['TrackingUrl'], 'String');
    }
    
    if (data['ShipCarrierName']) {
      _this['ShipCarrierName'] = ApiClient.convertToType(data['ShipCarrierName'], 'String');
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  Shipment.prototype.getTrackingNumber = function() {
    return this['TrackingNumber'];
  }

  /**
   * @param {String} trackingNumber
   **/
  Shipment.prototype.setTrackingNumber = function(trackingNumber) {
    this['TrackingNumber'] = trackingNumber;
  }
  
  /**
   * @return {String}
   **/
  Shipment.prototype.getTrackingUrl = function() {
    return this['TrackingUrl'];
  }

  /**
   * @param {String} trackingUrl
   **/
  Shipment.prototype.setTrackingUrl = function(trackingUrl) {
    this['TrackingUrl'] = trackingUrl;
  }
  
  /**
   * @return {String}
   **/
  Shipment.prototype.getShipCarrierName = function() {
    return this['ShipCarrierName'];
  }

  /**
   * @param {String} shipCarrierName
   **/
  Shipment.prototype.setShipCarrierName = function(shipCarrierName) {
    this['ShipCarrierName'] = shipCarrierName;
  }
  
  

  

  if (module) {
    module.Shipment = Shipment;
  }

  return Shipment;
  
  
}));
