(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./ApiClient', './model/Address', './model/Category', './model/Country', './model/CountryList', './model/Currency', './model/File', './model/FileResult', './model/Image', './model/ImageSizeVm', './model/ImageValidationVm', './model/ImageValidatorResult', './model/Item', './model/KeyValuePair', './model/LanguageDictionary', './model/Meta', './model/Order', './model/OrderItem', './model/OrderItemImage', './model/OrderPayment', './model/OrderPriceResult', './model/OrderResult', './model/OrderStatusUpdateResult', './model/Payment', './model/PaymentValidationRequest', './model/PaymentValidationResponse', './model/PostOrder', './model/PostOrderItem', './model/PostSubmittedItem', './model/PostSubmittedOrder', './model/Preconfiguration', './model/PreconfiguredItem', './model/PreconfiguredProduct', './model/PreconfiguredProductImage', './model/PreconfiguredProductInsert', './model/PreconfiguredProductsInsertResponse', './model/PreconfiguredProductsResponse', './model/PriceInfo', './model/Product', './model/ProductBuildInfo', './model/ProductBuildInfoResponse', './model/ProductBuildInfoSpace', './model/ProductBuildOption', './model/ProductImage', './model/ProductInfo', './model/ProductList', './model/ProductOption', './model/ProductOptionList', './model/ProductOptionValueSettings', './model/ProductPreviewImage', './model/ProductPreviewImageSpec', './model/ProductPreviewRequest', './model/ProductPreviewResponse', './model/ProductPriceInfo', './model/ProductVariant', './model/ProductVariantResponse', './model/Result', './model/SearchSubmittedOrder', './model/ShipEstimate', './model/ShipItem', './model/ShipOption', './model/ShipPrice', './model/ShipToAddress', './model/Shipment', './model/ShippingPricesRequest', './model/ShippingPricesResult', './model/SkuQuantityPair', './model/SubmittedOrder', './model/SubmittedOrderList', './model/UserInfo', './model/ValidationFailure', './api/AddressvalidationApi', './api/CountriesApi', './api/ImagesApi', './api/ImagevalidationApi', './api/LanguagesApi', './api/OrdersApi', './api/OrdersearchApi', './api/OrderstatusApi', './api/PaymentvalidationApi', './api/PreconfiguredproductsApi', './api/PriceestimateApi', './api/ProductpreviewApi', './api/ProductsApi', './api/ProducttemplatesApi', './api/ProductvariantsApi', './api/ShippingpricesApi', './api/ShippriceestimateApi', './api/UserinfoApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Address'), require('./model/Category'), require('./model/Country'), require('./model/CountryList'), require('./model/Currency'), require('./model/File'), require('./model/FileResult'), require('./model/Image'), require('./model/ImageSizeVm'), require('./model/ImageValidationVm'), require('./model/ImageValidatorResult'), require('./model/Item'), require('./model/KeyValuePair'), require('./model/LanguageDictionary'), require('./model/Meta'), require('./model/Order'), require('./model/OrderItem'), require('./model/OrderItemImage'), require('./model/OrderPayment'), require('./model/OrderPriceResult'), require('./model/OrderResult'), require('./model/OrderStatusUpdateResult'), require('./model/Payment'), require('./model/PaymentValidationRequest'), require('./model/PaymentValidationResponse'), require('./model/PostOrder'), require('./model/PostOrderItem'), require('./model/PostSubmittedItem'), require('./model/PostSubmittedOrder'), require('./model/Preconfiguration'), require('./model/PreconfiguredItem'), require('./model/PreconfiguredProduct'), require('./model/PreconfiguredProductImage'), require('./model/PreconfiguredProductInsert'), require('./model/PreconfiguredProductsInsertResponse'), require('./model/PreconfiguredProductsResponse'), require('./model/PriceInfo'), require('./model/Product'), require('./model/ProductBuildInfo'), require('./model/ProductBuildInfoResponse'), require('./model/ProductBuildInfoSpace'), require('./model/ProductBuildOption'), require('./model/ProductImage'), require('./model/ProductInfo'), require('./model/ProductList'), require('./model/ProductOption'), require('./model/ProductOptionList'), require('./model/ProductOptionValueSettings'), require('./model/ProductPreviewImage'), require('./model/ProductPreviewImageSpec'), require('./model/ProductPreviewRequest'), require('./model/ProductPreviewResponse'), require('./model/ProductPriceInfo'), require('./model/ProductVariant'), require('./model/ProductVariantResponse'), require('./model/Result'), require('./model/SearchSubmittedOrder'), require('./model/ShipEstimate'), require('./model/ShipItem'), require('./model/ShipOption'), require('./model/ShipPrice'), require('./model/ShipToAddress'), require('./model/Shipment'), require('./model/ShippingPricesRequest'), require('./model/ShippingPricesResult'), require('./model/SkuQuantityPair'), require('./model/SubmittedOrder'), require('./model/SubmittedOrderList'), require('./model/UserInfo'), require('./model/ValidationFailure'), require('./api/AddressvalidationApi'), require('./api/CountriesApi'), require('./api/ImagesApi'), require('./api/ImagevalidationApi'), require('./api/LanguagesApi'), require('./api/OrdersApi'), require('./api/OrdersearchApi'), require('./api/OrderstatusApi'), require('./api/PaymentvalidationApi'), require('./api/PreconfiguredproductsApi'), require('./api/PriceestimateApi'), require('./api/ProductpreviewApi'), require('./api/ProductsApi'), require('./api/ProducttemplatesApi'), require('./api/ProductvariantsApi'), require('./api/ShippingpricesApi'), require('./api/ShippriceestimateApi'), require('./api/UserinfoApi'));
  }
}(function(ApiClient, Address, Category, Country, CountryList, Currency, File, FileResult, Image, ImageSizeVm, ImageValidationVm, ImageValidatorResult, Item, KeyValuePair, LanguageDictionary, Meta, Order, OrderItem, OrderItemImage, OrderPayment, OrderPriceResult, OrderResult, OrderStatusUpdateResult, Payment, PaymentValidationRequest, PaymentValidationResponse, PostOrder, PostOrderItem, PostSubmittedItem, PostSubmittedOrder, Preconfiguration, PreconfiguredItem, PreconfiguredProduct, PreconfiguredProductImage, PreconfiguredProductInsert, PreconfiguredProductsInsertResponse, PreconfiguredProductsResponse, PriceInfo, Product, ProductBuildInfo, ProductBuildInfoResponse, ProductBuildInfoSpace, ProductBuildOption, ProductImage, ProductInfo, ProductList, ProductOption, ProductOptionList, ProductOptionValueSettings, ProductPreviewImage, ProductPreviewImageSpec, ProductPreviewRequest, ProductPreviewResponse, ProductPriceInfo, ProductVariant, ProductVariantResponse, Result, SearchSubmittedOrder, ShipEstimate, ShipItem, ShipOption, ShipPrice, ShipToAddress, Shipment, ShippingPricesRequest, ShippingPricesResult, SkuQuantityPair, SubmittedOrder, SubmittedOrderList, UserInfo, ValidationFailure, AddressvalidationApi, CountriesApi, ImagesApi, ImagevalidationApi, LanguagesApi, OrdersApi, OrdersearchApi, OrderstatusApi, PaymentvalidationApi, PreconfiguredproductsApi, PriceestimateApi, ProductpreviewApi, ProductsApi, ProducttemplatesApi, ProductvariantsApi, ShippingpricesApi, ShippriceestimateApi, UserinfoApi) {
  'use strict';

  return {
    ApiClient: ApiClient,
    Address: Address,
    Category: Category,
    Country: Country,
    CountryList: CountryList,
    Currency: Currency,
    File: File,
    FileResult: FileResult,
    Image: Image,
    ImageSizeVm: ImageSizeVm,
    ImageValidationVm: ImageValidationVm,
    ImageValidatorResult: ImageValidatorResult,
    Item: Item,
    KeyValuePair: KeyValuePair,
    LanguageDictionary: LanguageDictionary,
    Meta: Meta,
    Order: Order,
    OrderItem: OrderItem,
    OrderItemImage: OrderItemImage,
    OrderPayment: OrderPayment,
    OrderPriceResult: OrderPriceResult,
    OrderResult: OrderResult,
    OrderStatusUpdateResult: OrderStatusUpdateResult,
    Payment: Payment,
    PaymentValidationRequest: PaymentValidationRequest,
    PaymentValidationResponse: PaymentValidationResponse,
    PostOrder: PostOrder,
    PostOrderItem: PostOrderItem,
    PostSubmittedItem: PostSubmittedItem,
    PostSubmittedOrder: PostSubmittedOrder,
    Preconfiguration: Preconfiguration,
    PreconfiguredItem: PreconfiguredItem,
    PreconfiguredProduct: PreconfiguredProduct,
    PreconfiguredProductImage: PreconfiguredProductImage,
    PreconfiguredProductInsert: PreconfiguredProductInsert,
    PreconfiguredProductsInsertResponse: PreconfiguredProductsInsertResponse,
    PreconfiguredProductsResponse: PreconfiguredProductsResponse,
    PriceInfo: PriceInfo,
    Product: Product,
    ProductBuildInfo: ProductBuildInfo,
    ProductBuildInfoResponse: ProductBuildInfoResponse,
    ProductBuildInfoSpace: ProductBuildInfoSpace,
    ProductBuildOption: ProductBuildOption,
    ProductImage: ProductImage,
    ProductInfo: ProductInfo,
    ProductList: ProductList,
    ProductOption: ProductOption,
    ProductOptionList: ProductOptionList,
    ProductOptionValueSettings: ProductOptionValueSettings,
    ProductPreviewImage: ProductPreviewImage,
    ProductPreviewImageSpec: ProductPreviewImageSpec,
    ProductPreviewRequest: ProductPreviewRequest,
    ProductPreviewResponse: ProductPreviewResponse,
    ProductPriceInfo: ProductPriceInfo,
    ProductVariant: ProductVariant,
    ProductVariantResponse: ProductVariantResponse,
    Result: Result,
    SearchSubmittedOrder: SearchSubmittedOrder,
    ShipEstimate: ShipEstimate,
    ShipItem: ShipItem,
    ShipOption: ShipOption,
    ShipPrice: ShipPrice,
    ShipToAddress: ShipToAddress,
    Shipment: Shipment,
    ShippingPricesRequest: ShippingPricesRequest,
    ShippingPricesResult: ShippingPricesResult,
    SkuQuantityPair: SkuQuantityPair,
    SubmittedOrder: SubmittedOrder,
    SubmittedOrderList: SubmittedOrderList,
    UserInfo: UserInfo,
    ValidationFailure: ValidationFailure,
    AddressvalidationApi: AddressvalidationApi,
    CountriesApi: CountriesApi,
    ImagesApi: ImagesApi,
    ImagevalidationApi: ImagevalidationApi,
    LanguagesApi: LanguagesApi,
    OrdersApi: OrdersApi,
    OrdersearchApi: OrdersearchApi,
    OrderstatusApi: OrderstatusApi,
    PaymentvalidationApi: PaymentvalidationApi,
    PreconfiguredproductsApi: PreconfiguredproductsApi,
    PriceestimateApi: PriceestimateApi,
    ProductpreviewApi: ProductpreviewApi,
    ProductsApi: ProductsApi,
    ProducttemplatesApi: ProducttemplatesApi,
    ProductvariantsApi: ProductvariantsApi,
    ShippingpricesApi: ShippingpricesApi,
    ShippriceestimateApi: ShippriceestimateApi,
    UserinfoApi: UserinfoApi
  };
}));
