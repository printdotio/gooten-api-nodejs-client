(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ShipPrice'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ShipPrice'));
  } else {
    // Browser globals (root is window)
    if (!root.GootenApiClient) {
      root.GootenApiClient = {};
    }
    root.GootenApiClient.ShipOption = factory(root.GootenApiClient.ApiClient, root.GootenApiClient.ShipPrice);
  }
}(this, function(ApiClient, ShipPrice) {
  'use strict';
  
  
  var ShipOption = function ShipOption(id, methodType, methodId, name, carrierName, carrierLogoUrl, price, estBusinessDaysTilDelivery) { 
    
    /**
     * The ID that can be passed into the /orders POST endpoing as ShipCarrierMethodId to specify an item's shipping method.
     * datatype: Integer
     * required 
     **/
    this['Id'] = id;
    /**
     * datatype: String
     * required 
     **/
    this['MethodType'] = methodType;
    /**
     * datatype: Integer
     * required 
     **/
    this['MethodId'] = methodId;
    /**
     * datatype: String
     * required 
     **/
    this['Name'] = name;
    /**
     * datatype: String
     * required 
     **/
    this['CarrierName'] = carrierName;
    /**
     * datatype: String
     * required 
     **/
    this['CarrierLogoUrl'] = carrierLogoUrl;
    /**
     * datatype: ShipPrice
     * required 
     **/
    this['Price'] = price;
    /**
     * datatype: Integer
     * required 
     **/
    this['EstBusinessDaysTilDelivery'] = estBusinessDaysTilDelivery;
  };

  ShipOption.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new ShipOption();
    
    if (data['Id']) {
      _this['Id'] = ApiClient.convertToType(data['Id'], 'Integer');
    }
    
    if (data['MethodType']) {
      _this['MethodType'] = ApiClient.convertToType(data['MethodType'], 'String');
    }
    
    if (data['MethodId']) {
      _this['MethodId'] = ApiClient.convertToType(data['MethodId'], 'Integer');
    }
    
    if (data['Name']) {
      _this['Name'] = ApiClient.convertToType(data['Name'], 'String');
    }
    
    if (data['CarrierName']) {
      _this['CarrierName'] = ApiClient.convertToType(data['CarrierName'], 'String');
    }
    
    if (data['CarrierLogoUrl']) {
      _this['CarrierLogoUrl'] = ApiClient.convertToType(data['CarrierLogoUrl'], 'String');
    }
    
    if (data['Price']) {
      _this['Price'] = ShipPrice.constructFromObject(data['Price']);
    }
    
    if (data['PartnerPrice']) {
      _this['PartnerPrice'] = ShipPrice.constructFromObject(data['PartnerPrice']);
    }
    
    if (data['EstBusinessDaysTilDelivery']) {
      _this['EstBusinessDaysTilDelivery'] = ApiClient.convertToType(data['EstBusinessDaysTilDelivery'], 'Integer');
    }
    
    return _this;
  }

  
  
  /**
   * get The ID that can be passed into the /orders POST endpoing as ShipCarrierMethodId to specify an item's shipping method.
   * @return {Integer}
   **/
  ShipOption.prototype.getId = function() {
    return this['Id'];
  }

  /**
   * set The ID that can be passed into the /orders POST endpoing as ShipCarrierMethodId to specify an item's shipping method.
   * @param {Integer} id
   **/
  ShipOption.prototype.setId = function(id) {
    this['Id'] = id;
  }
  
  /**
   * @return {String}
   **/
  ShipOption.prototype.getMethodType = function() {
    return this['MethodType'];
  }

  /**
   * @param {String} methodType
   **/
  ShipOption.prototype.setMethodType = function(methodType) {
    this['MethodType'] = methodType;
  }
  
  /**
   * @return {Integer}
   **/
  ShipOption.prototype.getMethodId = function() {
    return this['MethodId'];
  }

  /**
   * @param {Integer} methodId
   **/
  ShipOption.prototype.setMethodId = function(methodId) {
    this['MethodId'] = methodId;
  }
  
  /**
   * @return {String}
   **/
  ShipOption.prototype.getName = function() {
    return this['Name'];
  }

  /**
   * @param {String} name
   **/
  ShipOption.prototype.setName = function(name) {
    this['Name'] = name;
  }
  
  /**
   * @return {String}
   **/
  ShipOption.prototype.getCarrierName = function() {
    return this['CarrierName'];
  }

  /**
   * @param {String} carrierName
   **/
  ShipOption.prototype.setCarrierName = function(carrierName) {
    this['CarrierName'] = carrierName;
  }
  
  /**
   * @return {String}
   **/
  ShipOption.prototype.getCarrierLogoUrl = function() {
    return this['CarrierLogoUrl'];
  }

  /**
   * @param {String} carrierLogoUrl
   **/
  ShipOption.prototype.setCarrierLogoUrl = function(carrierLogoUrl) {
    this['CarrierLogoUrl'] = carrierLogoUrl;
  }
  
  /**
   * @return {ShipPrice}
   **/
  ShipOption.prototype.getPrice = function() {
    return this['Price'];
  }

  /**
   * @param {ShipPrice} price
   **/
  ShipOption.prototype.setPrice = function(price) {
    this['Price'] = price;
  }
  
  /**
   * @return {ShipPrice}
   **/
  ShipOption.prototype.getPartnerPrice = function() {
    return this['PartnerPrice'];
  }

  /**
   * @param {ShipPrice} partnerPrice
   **/
  ShipOption.prototype.setPartnerPrice = function(partnerPrice) {
    this['PartnerPrice'] = partnerPrice;
  }
  
  /**
   * @return {Integer}
   **/
  ShipOption.prototype.getEstBusinessDaysTilDelivery = function() {
    return this['EstBusinessDaysTilDelivery'];
  }

  /**
   * @param {Integer} estBusinessDaysTilDelivery
   **/
  ShipOption.prototype.setEstBusinessDaysTilDelivery = function(estBusinessDaysTilDelivery) {
    this['EstBusinessDaysTilDelivery'] = estBusinessDaysTilDelivery;
  }
  
  

  

  return ShipOption;
  
  
}));
