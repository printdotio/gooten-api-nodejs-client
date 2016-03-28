(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.GootenApiClient) {
      root.GootenApiClient = {};
    }
    root.GootenApiClient.ShipToAddress = factory(root.GootenApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';
  
  
  var ShipToAddress = function ShipToAddress(firstName, lastName, line1, line2, city, state, countryCode, postalCode, isBusinessAddress, phone, email) { 
    
    /**
     * datatype: String
     * required 
     **/
    this['FirstName'] = firstName;
    /**
     * datatype: String
     * required 
     **/
    this['LastName'] = lastName;
    /**
     * datatype: String
     * required 
     **/
    this['Line1'] = line1;
    /**
     * datatype: String
     * required 
     **/
    this['Line2'] = line2;
    /**
     * datatype: String
     * required 
     **/
    this['City'] = city;
    /**
     * datatype: String
     * required 
     **/
    this['State'] = state;
    /**
     * datatype: String
     * required 
     **/
    this['CountryCode'] = countryCode;
    /**
     * datatype: String
     * required 
     **/
    this['PostalCode'] = postalCode;
    /**
     * datatype: Boolean
     * required 
     **/
    this['IsBusinessAddress'] = isBusinessAddress;
    /**
     * datatype: String
     * required 
     **/
    this['Phone'] = phone;
    /**
     * datatype: String
     * required 
     **/
    this['Email'] = email;
  };

  ShipToAddress.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new ShipToAddress();
    
    if (data['FirstName']) {
      _this['FirstName'] = ApiClient.convertToType(data['FirstName'], 'String');
    }
    
    if (data['LastName']) {
      _this['LastName'] = ApiClient.convertToType(data['LastName'], 'String');
    }
    
    if (data['Line1']) {
      _this['Line1'] = ApiClient.convertToType(data['Line1'], 'String');
    }
    
    if (data['Line2']) {
      _this['Line2'] = ApiClient.convertToType(data['Line2'], 'String');
    }
    
    if (data['City']) {
      _this['City'] = ApiClient.convertToType(data['City'], 'String');
    }
    
    if (data['State']) {
      _this['State'] = ApiClient.convertToType(data['State'], 'String');
    }
    
    if (data['CountryCode']) {
      _this['CountryCode'] = ApiClient.convertToType(data['CountryCode'], 'String');
    }
    
    if (data['PostalCode']) {
      _this['PostalCode'] = ApiClient.convertToType(data['PostalCode'], 'String');
    }
    
    if (data['IsBusinessAddress']) {
      _this['IsBusinessAddress'] = ApiClient.convertToType(data['IsBusinessAddress'], 'Boolean');
    }
    
    if (data['Phone']) {
      _this['Phone'] = ApiClient.convertToType(data['Phone'], 'String');
    }
    
    if (data['Email']) {
      _this['Email'] = ApiClient.convertToType(data['Email'], 'String');
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  ShipToAddress.prototype.getFirstName = function() {
    return this['FirstName'];
  }

  /**
   * @param {String} firstName
   **/
  ShipToAddress.prototype.setFirstName = function(firstName) {
    this['FirstName'] = firstName;
  }
  
  /**
   * @return {String}
   **/
  ShipToAddress.prototype.getLastName = function() {
    return this['LastName'];
  }

  /**
   * @param {String} lastName
   **/
  ShipToAddress.prototype.setLastName = function(lastName) {
    this['LastName'] = lastName;
  }
  
  /**
   * @return {String}
   **/
  ShipToAddress.prototype.getLine1 = function() {
    return this['Line1'];
  }

  /**
   * @param {String} line1
   **/
  ShipToAddress.prototype.setLine1 = function(line1) {
    this['Line1'] = line1;
  }
  
  /**
   * @return {String}
   **/
  ShipToAddress.prototype.getLine2 = function() {
    return this['Line2'];
  }

  /**
   * @param {String} line2
   **/
  ShipToAddress.prototype.setLine2 = function(line2) {
    this['Line2'] = line2;
  }
  
  /**
   * @return {String}
   **/
  ShipToAddress.prototype.getCity = function() {
    return this['City'];
  }

  /**
   * @param {String} city
   **/
  ShipToAddress.prototype.setCity = function(city) {
    this['City'] = city;
  }
  
  /**
   * @return {String}
   **/
  ShipToAddress.prototype.getState = function() {
    return this['State'];
  }

  /**
   * @param {String} state
   **/
  ShipToAddress.prototype.setState = function(state) {
    this['State'] = state;
  }
  
  /**
   * @return {String}
   **/
  ShipToAddress.prototype.getCountryCode = function() {
    return this['CountryCode'];
  }

  /**
   * @param {String} countryCode
   **/
  ShipToAddress.prototype.setCountryCode = function(countryCode) {
    this['CountryCode'] = countryCode;
  }
  
  /**
   * @return {String}
   **/
  ShipToAddress.prototype.getPostalCode = function() {
    return this['PostalCode'];
  }

  /**
   * @param {String} postalCode
   **/
  ShipToAddress.prototype.setPostalCode = function(postalCode) {
    this['PostalCode'] = postalCode;
  }
  
  /**
   * @return {Boolean}
   **/
  ShipToAddress.prototype.getIsBusinessAddress = function() {
    return this['IsBusinessAddress'];
  }

  /**
   * @param {Boolean} isBusinessAddress
   **/
  ShipToAddress.prototype.setIsBusinessAddress = function(isBusinessAddress) {
    this['IsBusinessAddress'] = isBusinessAddress;
  }
  
  /**
   * @return {String}
   **/
  ShipToAddress.prototype.getPhone = function() {
    return this['Phone'];
  }

  /**
   * @param {String} phone
   **/
  ShipToAddress.prototype.setPhone = function(phone) {
    this['Phone'] = phone;
  }
  
  /**
   * @return {String}
   **/
  ShipToAddress.prototype.getEmail = function() {
    return this['Email'];
  }

  /**
   * @param {String} email
   **/
  ShipToAddress.prototype.setEmail = function(email) {
    this['Email'] = email;
  }
  
  

  

  return ShipToAddress;
  
  
}));
