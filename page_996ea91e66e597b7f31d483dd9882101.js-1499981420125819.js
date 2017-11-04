
; /* Start:"a:4:{s:4:"full";s:120:"script.min.js-149703835454111.js"/*tpa=http://atrspb.com/local/templates/atrspb/components/bitrix/catalog/presents/bitrix/catalog.element/.default/script.min.js?149703835454111*/;s:6:"source";s:100:"script-5.js"/*tpa=http://atrspb.com/local/templates/atrspb/components/bitrix/catalog/presents/bitrix/catalog.element/.default/script.js*/;s:3:"min";s:104:"script.min-3.js"/*tpa=http://atrspb.com/local/templates/atrspb/components/bitrix/catalog/presents/bitrix/catalog.element/.default/script.min.js*/;s:3:"map";s:104:"script.map-3.js"/*tpa=http://atrspb.com/local/templates/atrspb/components/bitrix/catalog/presents/bitrix/catalog.element/.default/script.map.js*/;}"*/
(function(t){if(!!t.JCCatalogElement){return}var i=function(t){i.superclass.constructor.apply(this,arguments);this.nameNode=BX.create("span",{props:{className:"bx_medium bx_bt_button",id:this.id},style:typeof t.style==="object"?t.style:{},text:t.text});this.buttonNode=BX.create("span",{attrs:{className:t.ownerClass},children:[this.nameNode],events:this.contextEvents});if(BX.browser.IsIE()){this.buttonNode.setAttribute("hideFocus","hidefocus")}};BX.extend(i,BX.PopupWindowButton);t.JCCatalogElement=function(t){this.productType=0;this.config={useCatalog:true,showQuantity:true,showPrice:true,showAbsent:true,showOldPrice:false,showPercent:false,showSkuProps:false,showOfferGroup:false,useCompare:false,useStickers:false,mainPictureMode:"IMG",showBasisPrice:false,basketAction:["BUY"],showClosePopup:false};this.checkQuantity=false;this.maxQuantity=0;this.stepQuantity=1;this.isDblQuantity=false;this.canBuy=true;this.isGift=false;this.currentBasisPrice={};this.canSubscription=true;this.currentIsSet=false;this.updateViewedCount=false;this.precision=6;this.precisionFactor=Math.pow(10,this.precision);this.listID={main:["PICT_ID","BIG_SLIDER_ID","BIG_IMG_CONT_ID"],stickers:["STICKER_ID"],productSlider:["SLIDER_CONT","SLIDER_LIST","SLIDER_LEFT","SLIDER_RIGHT"],offerSlider:["SLIDER_CONT_OF_ID","SLIDER_LIST_OF_ID","SLIDER_LEFT_OF_ID","SLIDER_RIGHT_OF_ID"],offers:["TREE_ID","TREE_ITEM_ID","DISPLAY_PROP_DIV","OFFER_GROUP"],quantity:["QUANTITY_ID","QUANTITY_UP_ID","QUANTITY_DOWN_ID","QUANTITY_MEASURE","QUANTITY_LIMIT","BASIS_PRICE"],price:["PRICE_ID"],oldPrice:["OLD_PRICE_ID","DISCOUNT_VALUE_ID"],discountPerc:["DISCOUNT_PERC_ID"],basket:["BASKET_PROP_DIV","BUY_ID","ADD_BASKET_ID","BASKET_ACTIONS_ID","NOT_AVAILABLE_MESS"],magnifier:["MAGNIFIER_ID","MAGNIFIER_AREA_ID"],compare:["COMPARE_LINK_ID"]};this.visualPostfix={PICT_ID:"_pict",BIG_SLIDER_ID:"_big_slider",BIG_IMG_CONT_ID:"_bigimg_cont",STICKER_ID:"_sticker",SLIDER_CONT:"_slider_cont",SLIDER_LIST:"_slider_list",SLIDER_LEFT:"_slider_left",SLIDER_RIGHT:"_slider_right",SLIDER_CONT_OF_ID:"_slider_cont_",SLIDER_LIST_OF_ID:"_slider_list_",SLIDER_LEFT_OF_ID:"_slider_left_",SLIDER_RIGHT_OF_ID:"_slider_right_",TREE_ID:"_skudiv",TREE_ITEM_ID:"_prop_",DISPLAY_PROP_DIV:"_sku_prop",QUANTITY_ID:"_quantity",QUANTITY_UP_ID:"_quant_up",QUANTITY_DOWN_ID:"_quant_down",QUANTITY_MEASURE:"_quant_measure",QUANTITY_LIMIT:"_quant_limit",BASIS_PRICE:"_basis_price",PRICE_ID:"_price",OLD_PRICE_ID:"_old_price",DISCOUNT_VALUE_ID:"_price_discount",DISCOUNT_PERC_ID:"_dsc_pict",BASKET_PROP_DIV:"_basket_prop",BUY_ID:"_buy_link",ADD_BASKET_ID:"_add_basket_link",BASKET_ACTIONS_ID:"_basket_actions",NOT_AVAILABLE_MESS:"_not_avail",MAGNIFIER_ID:"_magnifier",MAGNIFIER_AREA_ID:"_magnifier_area",OFFER_GROUP:"_set_group_",COMPARE_LINK_ID:"_compare_link"};this.visual={};this.basketMode="";this.product={checkQuantity:false,maxQuantity:0,stepQuantity:1,startQuantity:1,isDblQuantity:false,canBuy:true,canSubscription:true,name:"",pict:{},id:0,addUrl:"",buyUrl:"",slider:{},sliderCount:0,useSlider:false,sliderPict:[]};this.mess={};this.basketData={useProps:false,emptyProps:false,quantity:"quantity",props:"prop",basketUrl:"",sku_props:"",sku_props_var:"basket_props",add_url:"",buy_url:""};this.compareData={compareUrl:"",comparePath:""};this.defaultPict={preview:null,detail:null};this.offers=[];this.offerNum=0;this.treeProps=[];this.obTreeRows=[];this.showCount=[];this.showStart=[];this.selectedValues={};this.sliders=[];this.obProduct=null;this.obQuantity=null;this.obQuantityUp=null;this.obQuantityDown=null;this.obBasisPrice=null;this.obPict=null;this.obPictAligner=null;this.obPrice={price:null,full:null,discount:null,percent:null};this.obTree=null;this.obBuyBtn=null;this.obAddToBasketBtn=null;this.obBasketActions=null;this.obNotAvail=null;this.obSkuProps=null;this.obSlider=null;this.obMeasure=null;this.obQuantityLimit={all:null,value:null};this.obCompare=null;this.viewedCounter={path:"http://atrspb.com/bitrix/components/bitrix/catalog.element/ajax.php",params:{AJAX:"Y",SITE_ID:"",PRODUCT_ID:0,PARENT_ID:0}};this.currentImg={src:"",width:0,height:0,screenWidth:0,screenHeight:0,screenOffsetX:0,screenOffsetY:0,scale:1};this.obPopupWin=null;this.basketUrl="";this.basketParams={};this.obPopupPict=null;this.magnify={obMagnifier:null,obMagnifyPict:null,obMagnifyArea:null,obBigImg:null,obBigSlider:null,magnifyShow:false,areaParams:{width:100,height:130,left:0,top:0,scaleFactor:1,globalLeft:0,globalTop:0,globalRight:0,globalBottom:0},magnifierParams:{top:0,left:0,width:0,height:0,ratioX:10,ratioY:13,defaultScale:1},magnifyPictParams:{marginTop:0,marginLeft:0,width:0,height:0}};this.treeRowShowSize=5;this.treeEnableArrow={display:"",cursor:"pointer",opacity:1};this.treeDisableArrow={display:"",cursor:"default",opacity:.2};this.sliderRowShowSize=5;this.sliderEnableArrow={display:"",cursor:"pointer",opacity:1};this.sliderDisableArrow={display:"",cursor:"default",opacity:.2};this.errorCode=0;if(typeof t==="object"){this.params=t;this.initConfig();if(!!this.params.MESS){this.mess=this.params.MESS}switch(this.productType){case 0:case 1:case 2:this.initProductData();break;case 3:this.initOffersData();break;default:this.errorCode=-1}this.initBasketData();this.initCompareData()}if(0===this.errorCode){BX.ready(BX.delegate(this.Init,this))}this.params={};BX.addCustomEvent("onSaleProductIsGift",BX.delegate(this.onSaleProductIsGift,this));BX.addCustomEvent("onSaleProductIsNotGift",BX.delegate(this.onSaleProductIsNotGift,this))};t.JCCatalogElement.prototype.onSaleProductIsGift=function(t,i){var s=function(t,i){for(var s=0;s<t.length;s++){if(t[s]&&t[s].ID==i){return t[s]}}return null};if(!!i&&this.offers&&this.offers[this.offerNum].ID==i){this.setGift()}};t.JCCatalogElement.prototype.onSaleProductIsNotGift=function(t,i){if(!!i&&this.offers&&this.offers[this.offerNum].ID==i){this.restoreSticker();this.isGift=false;this.setPrice(BX.clone(this.offers[this.offerNum].PRICE,true))}};t.JCCatalogElement.prototype.reloadGiftInfo=function(){if(this.productType===3){this.checkQuantity=true;this.maxQuantity=1;this.setPrice(BX.clone(this.offers[this.offerNum].PRICE,true));BX.hide(this.obBasisPrice);this.redrawSticker({text:BX.message("PRODUCT_GIFT_LABEL")})}};t.JCCatalogElement.prototype.setGift=function(){if(this.productType===3){this.isGift=true}if(this.productType===1||this.productType===2){this.isGift=true}if(this.productType===0){this.isGift=false}this.reloadGiftInfo()};t.JCCatalogElement.prototype.Init=function(){var t=0,i=0,s="",e=null,a=null;this.obProduct=BX(this.visual.ID);if(!this.obProduct){this.errorCode=-1}this.obPict=BX(this.visual.PICT_ID);if(!this.obPict){this.errorCode=-2}else{this.obPictAligner=this.obPict.parentNode}if(this.config.showPrice){this.obPrice.price=BX(this.visual.PRICE_ID);if(!this.obPrice.price&&this.config.useCatalog){this.errorCode=-16}else{if(this.config.showOldPrice){this.obPrice.full=BX(this.visual.OLD_PRICE_ID);this.obPrice.discount=BX(this.visual.DISCOUNT_VALUE_ID);if(!this.obPrice.full||!this.obPrice.discount){this.config.showOldPrice=false}}if(this.config.showPercent){this.obPrice.percent=BX(this.visual.DISCOUNT_PERC_ID);if(!this.obPrice.percent){this.config.showPercent=false}}}this.obBasketActions=BX(this.visual.BASKET_ACTIONS_ID);if(!!this.obBasketActions){if(BX.util.in_array("BUY",this.config.basketAction)){this.obBuyBtn=BX(this.visual.BUY_ID)}if(BX.util.in_array("ADD",this.config.basketAction)){this.obAddToBasketBtn=BX(this.visual.ADD_BASKET_ID)}}this.obNotAvail=BX(this.visual.NOT_AVAILABLE_MESS)}if(this.config.showQuantity){this.obQuantity=BX(this.visual.QUANTITY_ID);if(!!this.visual.QUANTITY_UP_ID){this.obQuantityUp=BX(this.visual.QUANTITY_UP_ID)}if(!!this.visual.QUANTITY_DOWN_ID){this.obQuantityDown=BX(this.visual.QUANTITY_DOWN_ID)}if(this.config.showBasisPrice){this.obBasisPrice=BX(this.visual.BASIS_PRICE)}}if(3===this.productType){if(!!this.visual.TREE_ID){this.obTree=BX(this.visual.TREE_ID);if(!this.obTree){this.errorCode=-256}s=this.visual.TREE_ITEM_ID;for(t=0;t<this.treeProps.length;t++){this.obTreeRows[t]={LEFT:BX(s+this.treeProps[t].ID+"_left"),RIGHT:BX(s+this.treeProps[t].ID+"_right"),LIST:BX(s+this.treeProps[t].ID+"_list"),CONT:BX(s+this.treeProps[t].ID+"_cont")};if(!this.obTreeRows[t].LEFT||!this.obTreeRows[t].RIGHT||!this.obTreeRows[t].LIST||!this.obTreeRows[t].CONT){this.errorCode=-512;break}}}if(!!this.visual.QUANTITY_MEASURE){this.obMeasure=BX(this.visual.QUANTITY_MEASURE)}if(!!this.visual.QUANTITY_LIMIT){this.obQuantityLimit.all=BX(this.visual.QUANTITY_LIMIT);if(!!this.obQuantityLimit.all){this.obQuantityLimit.value=BX.findChild(this.obQuantityLimit.all,{tagName:"span"},false,false);if(!this.obQuantityLimit.value){this.obQuantityLimit.all=null}}}}if(this.config.showSkuProps){if(!!this.visual.DISPLAY_PROP_DIV){this.obSkuProps=BX(this.visual.DISPLAY_PROP_DIV)}}if(this.config.useCompare){this.obCompare=BX(this.visual.COMPARE_LINK_ID)}if(0===this.errorCode){if(this.config.showQuantity){if(!!this.obQuantityUp){BX.bind(this.obQuantityUp,"click",BX.delegate(this.QuantityUp,this))}if(!!this.obQuantityDown){BX.bind(this.obQuantityDown,"click",BX.delegate(this.QuantityDown,this))}if(!!this.obQuantity){BX.bind(this.obQuantity,"change",BX.delegate(this.QuantityChange,this))}}switch(this.productType){case 0:case 1:case 2:if(this.product.useSlider){this.product.slider={COUNT:this.product.sliderCount,ID:this.visual.SLIDER_CONT,CONT:BX(this.visual.SLIDER_CONT),LIST:BX(this.visual.SLIDER_LIST),LEFT:BX(this.visual.SLIDER_LEFT),RIGHT:BX(this.visual.SLIDER_RIGHT),START:0};e=BX.findChildren(this.product.slider.LIST,{tagName:"li"},true);if(!!e&&0<e.length){for(i=0;i<e.length;i++){BX.bind(e[i],"click",BX.delegate(this.ProductSelectSliderImg,this))}}if(!!this.product.slider.LEFT){BX.bind(this.product.slider.LEFT,"click",BX.delegate(this.ProductSliderRowLeft,this));BX.adjust(this.product.slider.LEFT,{style:this.sliderDisableArrow})}if(!!this.product.slider.RIGHT){BX.bind(this.product.slider.RIGHT,"click",BX.delegate(this.ProductSliderRowRight,this));BX.adjust(this.product.slider.RIGHT,{style:this.sliderEnableArrow})}this.setCurrentImg(this.product.sliderPict[0],true)}break;case 3:a=BX.findChildren(this.obTree,{tagName:"li"},true);if(!!a&&0<a.length){for(t=0;t<a.length;t++){BX.bind(a[t],"click",BX.delegate(this.SelectOfferProp,this))}}for(t=0;t<this.obTreeRows.length;t++){BX.bind(this.obTreeRows[t].LEFT,"click",BX.delegate(this.RowLeft,this));BX.bind(this.obTreeRows[t].RIGHT,"click",BX.delegate(this.RowRight,this))}for(t=0;t<this.offers.length;t++){this.offers[t].SLIDER_COUNT=parseInt(this.offers[t].SLIDER_COUNT,10);if(isNaN(this.offers[t].SLIDER_COUNT)){this.offers[t].SLIDER_COUNT=0}if(0===this.offers[t].SLIDER_COUNT){this.sliders[t]={COUNT:this.offers[t].SLIDER_COUNT,ID:""}}else{for(i=0;i<this.offers[t].SLIDER.length;i++){this.offers[t].SLIDER[i].WIDTH=parseInt(this.offers[t].SLIDER[i].WIDTH,10);this.offers[t].SLIDER[i].HEIGHT=parseInt(this.offers[t].SLIDER[i].HEIGHT,10)}this.sliders[t]={COUNT:this.offers[t].SLIDER_COUNT,OFFER_ID:this.offers[t].ID,ID:this.visual.SLIDER_CONT_OF_ID+this.offers[t].ID,CONT:BX(this.visual.SLIDER_CONT_OF_ID+this.offers[t].ID),LIST:BX(this.visual.SLIDER_LIST_OF_ID+this.offers[t].ID),LEFT:BX(this.visual.SLIDER_LEFT_OF_ID+this.offers[t].ID),RIGHT:BX(this.visual.SLIDER_RIGHT_OF_ID+this.offers[t].ID),START:0};e=BX.findChildren(this.sliders[t].LIST,{tagName:"li"},true);if(!!e&&0<e.length){for(i=0;i<e.length;i++){BX.bind(e[i],"click",BX.delegate(this.SelectSliderImg,this))}}if(!!this.sliders[t].LEFT){BX.bind(this.sliders[t].LEFT,"click",BX.delegate(this.SliderRowLeft,this))}if(!!this.sliders[t].RIGHT){BX.bind(this.sliders[t].RIGHT,"click",BX.delegate(this.SliderRowRight,this))}}}this.SetCurrent();break}if(!!this.obBuyBtn){BX.bind(this.obBuyBtn,"click",BX.proxy(this.BuyBasket,this))}if(!!this.obAddToBasketBtn){BX.bind(this.obAddToBasketBtn,"click",BX.proxy(this.Add2Basket,this))}if(!!this.obCompare){BX.bind(this.obCompare,"click",BX.proxy(this.Compare,this))}this.setMainPictHandler()}};t.JCCatalogElement.prototype.initConfig=function(){this.productType=parseInt(this.params.PRODUCT_TYPE,10);if(!!this.params.CONFIG&&typeof this.params.CONFIG==="object"){if(this.params.CONFIG.USE_CATALOG!=="undefined"&&BX.type.isBoolean(this.params.CONFIG.USE_CATALOG)){this.config.useCatalog=this.params.CONFIG.USE_CATALOG}this.config.showQuantity=!!this.params.CONFIG.SHOW_QUANTITY;this.config.showPrice=!!this.params.CONFIG.SHOW_PRICE;this.config.showPercent=!!this.params.CONFIG.SHOW_DISCOUNT_PERCENT;this.config.showOldPrice=!!this.params.CONFIG.SHOW_OLD_PRICE;this.config.showSkuProps=!!this.params.CONFIG.SHOW_SKU_PROPS;this.config.showOfferGroup=!!this.params.CONFIG.OFFER_GROUP;this.config.useCompare=!!this.params.CONFIG.DISPLAY_COMPARE;this.config.useStickers=!!this.params.CONFIG.USE_STICKERS;if(!!this.params.CONFIG.MAIN_PICTURE_MODE){this.config.mainPictureMode=this.params.CONFIG.MAIN_PICTURE_MODE}this.config.showBasisPrice=!!this.params.CONFIG.SHOW_BASIS_PRICE;if(!!this.params.CONFIG.ADD_TO_BASKET_ACTION){this.config.basketAction=this.params.CONFIG.ADD_TO_BASKET_ACTION}this.config.showClosePopup=!!this.params.CONFIG.SHOW_CLOSE_POPUP}else{if(this.params.USE_CATALOG!=="undefined"&&BX.type.isBoolean(this.params.USE_CATALOG)){this.config.useCatalog=this.params.USE_CATALOG}this.config.showQuantity=!!this.params.SHOW_QUANTITY;this.config.showPrice=!!this.params.SHOW_PRICE;this.config.showPercent=!!this.params.SHOW_DISCOUNT_PERCENT;this.config.showOldPrice=!!this.params.SHOW_OLD_PRICE;this.config.showSkuProps=!!this.params.SHOW_SKU_PROPS;this.config.showOfferGroup=!!this.params.OFFER_GROUP;this.config.useCompare=!!this.params.DISPLAY_COMPARE;if(!!this.params.MAIN_PICTURE_MODE){this.config.mainPictureMode=this.params.MAIN_PICTURE_MODE}this.config.showBasisPrice=!!this.params.SHOW_BASIS_PRICE;if(!!this.params.ADD_TO_BASKET_ACTION){this.config.basketAction=this.params.ADD_TO_BASKET_ACTION}this.config.showClosePopup=!!this.params.SHOW_CLOSE_POPUP}if(!this.params.VISUAL||typeof this.params.VISUAL!=="object"||!this.params.VISUAL.ID){this.errorCode=-1;return}this.visual.ID=this.params.VISUAL.ID;this.initVisualParams("main");if(this.config.showQuantity){this.initVisualParams("quantity")}if(this.config.showPrice){this.initVisualParams("price")}if(this.config.showOldPrice){this.initVisualParams("oldPrice")}if(this.config.showPercent){this.initVisualParams("discountPerc")}this.initVisualParams("basket");if(this.config.mainPictureMode==="MAGNIFIER"){this.initVisualParams("magnifier")}if(this.config.useCompare){this.initVisualParams("compare")}if(this.config.useStickers){this.initVisualParams("stickers")}};t.JCCatalogElement.prototype.initVisualParams=function(t){var i=0,s="";if(!this.listID[t]){this.errorCode=-1;return}for(i=0;i<this.listID[t].length;i++){s=this.listID[t][i];this.visual[s]=!!this.params.VISUAL[s]?this.params.VISUAL[s]:this.visual.ID+this.visualPostfix[s]}};t.JCCatalogElement.prototype.initProductData=function(){var t=0;this.initVisualParams("productSlider");if(!!this.params.PRODUCT&&"object"===typeof this.params.PRODUCT){if(this.config.showQuantity){this.product.checkQuantity=this.params.PRODUCT.CHECK_QUANTITY;this.product.isDblQuantity=this.params.PRODUCT.QUANTITY_FLOAT;if(this.product.checkQuantity){this.product.maxQuantity=this.product.isDblQuantity?parseFloat(this.params.PRODUCT.MAX_QUANTITY):parseInt(this.params.PRODUCT.MAX_QUANTITY,10)}this.product.stepQuantity=this.product.isDblQuantity?parseFloat(this.params.PRODUCT.STEP_QUANTITY):parseInt(this.params.PRODUCT.STEP_QUANTITY,10);this.checkQuantity=this.product.checkQuantity;this.isDblQuantity=this.product.isDblQuantity;this.maxQuantity=this.product.maxQuantity;this.stepQuantity=this.product.stepQuantity;if(this.isDblQuantity){this.stepQuantity=Math.round(this.stepQuantity*this.precisionFactor)/this.precisionFactor}}this.product.canBuy=this.params.PRODUCT.CAN_BUY;this.product.canSubscription=this.params.PRODUCT.SUBSCRIPTION;if(this.config.showPrice){this.currentBasisPrice=this.params.PRODUCT.BASIS_PRICE}this.canBuy=this.product.canBuy;this.canSubscription=this.product.canSubscription;this.product.name=this.params.PRODUCT.NAME;this.product.pict=this.params.PRODUCT.PICT;this.product.id=this.params.PRODUCT.ID;if(!!this.params.PRODUCT.ADD_URL){this.product.addUrl=this.params.PRODUCT.ADD_URL}if(!!this.params.PRODUCT.BUY_URL){this.product.buyUrl=this.params.PRODUCT.BUY_URL}if(!!this.params.PRODUCT.SLIDER_COUNT){this.product.sliderCount=parseInt(this.params.PRODUCT.SLIDER_COUNT,10);if(isNaN(this.product.sliderCount)){this.product.sliderCount=0}if(0<this.product.sliderCount&&!!this.params.PRODUCT.SLIDER.length&&0<this.params.PRODUCT.SLIDER.length){for(t=0;t<this.params.PRODUCT.SLIDER.length;t++){this.product.useSlider=true;this.params.PRODUCT.SLIDER[t].WIDTH=parseInt(this.params.PRODUCT.SLIDER[t].WIDTH,10);this.params.PRODUCT.SLIDER[t].HEIGHT=parseInt(this.params.PRODUCT.SLIDER[t].HEIGHT,10)}this.product.sliderPict=this.params.PRODUCT.SLIDER;this.setCurrentImg(this.product.sliderPict[0],false)}}this.currentIsSet=true}else{this.errorCode=-1}};t.JCCatalogElement.prototype.initOffersData=function(){this.initVisualParams("offerSlider");this.initVisualParams("offers");if(!!this.params.OFFERS&&BX.type.isArray(this.params.OFFERS)){this.offers=this.params.OFFERS;this.offerNum=0;if(!!this.params.OFFER_SELECTED){this.offerNum=parseInt(this.params.OFFER_SELECTED,10)}if(isNaN(this.offerNum)){this.offerNum=0}if(!!this.params.TREE_PROPS){this.treeProps=this.params.TREE_PROPS}if(!!this.params.DEFAULT_PICTURE){this.defaultPict.preview=this.params.DEFAULT_PICTURE.PREVIEW_PICTIRE;this.defaultPict.detail=this.params.DEFAULT_PICTURE.DETAIL_PICTURE}if(!!this.params.PRODUCT&&typeof this.params.PRODUCT==="object"){this.product.id=parseInt(this.params.PRODUCT.ID,10);this.product.name=this.params.PRODUCT.NAME}}else{this.errorCode=-1}};t.JCCatalogElement.prototype.initBasketData=function(){if(!!this.params.BASKET&&"object"===typeof this.params.BASKET){if(1===this.productType||2===this.productType){this.basketData.useProps=!!this.params.BASKET.ADD_PROPS;this.basketData.emptyProps=!!this.params.BASKET.EMPTY_PROPS}if(!!this.params.BASKET.QUANTITY){this.basketData.quantity=this.params.BASKET.QUANTITY}if(!!this.params.BASKET.PROPS){this.basketData.props=this.params.BASKET.PROPS}if(!!this.params.BASKET.BASKET_URL){this.basketData.basketUrl=this.params.BASKET.BASKET_URL}if(3===this.productType){if(!!this.params.BASKET.SKU_PROPS){this.basketData.sku_props=this.params.BASKET.SKU_PROPS}}if(!!this.params.BASKET.ADD_URL_TEMPLATE){this.basketData.add_url=this.params.BASKET.ADD_URL_TEMPLATE}if(!!this.params.BASKET.BUY_URL_TEMPLATE){this.basketData.buy_url=this.params.BASKET.BUY_URL_TEMPLATE}if(this.basketData.add_url===""&&this.basketData.buy_url===""){this.errorCode=-1024}}};t.JCCatalogElement.prototype.initCompareData=function(){if(this.config.useCompare){if(!!this.params.COMPARE&&typeof this.params.COMPARE==="object"){if(!!this.params.COMPARE.COMPARE_PATH){this.compareData.comparePath=this.params.COMPARE.COMPARE_PATH}if(!!this.params.COMPARE.COMPARE_URL_TEMPLATE){this.compareData.compareUrl=this.params.COMPARE.COMPARE_URL_TEMPLATE}else{this.config.useCompare=false}}else{this.config.useCompare=false}}};t.JCCatalogElement.prototype.setMainPictHandler=function(){switch(this.config.mainPictureMode){case"GALLERY":break;case"MAGNIFIER":this.magnify.obBigImg=BX(this.visual.BIG_IMG_CONT_ID);this.magnify.obBigSlider=BX(this.visual.BIG_SLIDER_ID);if(!!this.magnify.obBigImg&&!!this.magnify.obBigSlider){this.magnify.obMagnifyArea=this.obPictAligner.appendChild(BX.create("DIV",{props:{id:this.visual.MAGNIFIER_AREA_ID,className:"bx_item_slider_lupe_small"},style:{display:"none",top:0,left:0,width:"100px",height:"130px"},events:{mouseover:BX.delegate(this.onMagnifierArea,this),mouseout:BX.delegate(function(){this.outMagnifierArea();this.hideMagnifier()},this)}}));this.magnify.obMagnifier=this.magnify.obBigSlider.appendChild(BX.create("DIV",{props:{id:this.visual.MAGNIFIER_ID,className:"bx_item_slider_lupe"},style:{display:"none"}}));this.magnify.obMagnifyPict=this.magnify.obMagnifier.appendChild(BX.create("IMG",{props:{src:this.currentImg.src}}));BX.bind(this.obPict,"mouseover",BX.delegate(this.showMagnifier,this))}break;case"POPUP":this.obPopupPict=new BX.PopupWindow("CatalogElementPopup_"+this.visual.ID,null,{autoHide:false,offsetLeft:0,offsetTop:0,overlay:false,closeByEsc:true,titleBar:true,closeIcon:{top:"10px",right:"10px"}});BX.bind(this.obPict,"click",BX.delegate(this.showMainPictPopup,this));BX.adjust(this.obPict,{style:{cursor:"pointer"}});BX.addCustomEvent(this.obPopupPict,"onAfterPopupShow",BX.proxy(this.onPopupWindowShow,this));BX.addCustomEvent(this.obPopupPict,"onPopupClose",BX.proxy(this.onPopupWindowClose,this));break;default:break}};t.JCCatalogElement.prototype.setCurrentImg=function(t,i){i=!!i;this.currentImg.src=t.SRC;this.currentImg.width=t.WIDTH;this.currentImg.height=t.HEIGHT;if(i&&!!this.obPict){if(this.config.mainPictureMode==="MAGNIFIER"){this.outMagnifierArea();this.hideMagnifier()}BX.adjust(this.obPict,{props:{src:this.currentImg.src}});var s={width:parseInt(this.obPictAligner.offsetWidth,10),height:parseInt(this.obPictAligner.offsetHeight,10)},e,a;e=this.scaleImg(this.currentImg,s);a=e.height<s.height?s.height-e.height>>>1:0;if(a!==this.currentImg.screenOffsetY){BX.style(this.obPictAligner,"marginTop",a+"px");this.currentImg.screenOffsetY=a}this.currentImg.screenOffsetX=e.width<s.width?s.width-e.width>>>1:0;this.currentImg.screenWidth=e.width;this.currentImg.screenHeight=e.height}};t.JCCatalogElement.prototype.scaleImg=function(t,i){var s,e,a,r={};if(i.width>=t.width&&i.height>=t.height){r.width=t.width;r.height=t.height}else{s=i.width/t.width;e=i.height/t.height;a=Math.min(s,e);r.width=Math.max(1,parseInt(a*t.width,10));r.height=Math.max(1,parseInt(a*t.height,10))}return r};t.JCCatalogElement.prototype.showMagnifier=function(t){if(!this.magnify.magnifyShow){this.calcMagnifierParams();this.calcMagnifyAreaSize();this.calcMagnifyAreaPos(t);this.calcMagnifyPictSize();this.calcMagnifyPictPos();this.setMagnifyAreaParams(true);this.setMagnifyPictParams(true);this.setMagnifierParams(true);BX.bind(document,"mousemove",BX.proxy(this.moveMagnifierArea,this))}};t.JCCatalogElement.prototype.hideMagnifier=function(){if(!this.magnify.magnifyShow){if(!!this.magnify.obMagnifier){BX.adjust(this.magnify.obMagnifier,{style:{display:"none"}})}if(!!this.magnify.obMagnifyArea){BX.adjust(this.magnify.obMagnifyArea,{style:{display:"none"}})}BX.unbind(document,"mousemove",BX.proxy(this.moveMagnifierArea,this))}};t.JCCatalogElement.prototype.moveMagnifierArea=function(t){var i,s=BX.pos(this.obPict),e={},a={},r={};i=this.inRect(t,s);if(this.inBound(s,i)){e=this.intersectArea(i,s);switch(e.X){case-1:this.magnify.areaParams.left=this.currentImg.screenOffsetX;break;case 0:this.magnify.areaParams.left=this.currentImg.screenOffsetX+i.X-(this.magnify.areaParams.width>>>1);break;case 1:this.magnify.areaParams.left=this.currentImg.screenOffsetX+s.width-this.magnify.areaParams.width;break}switch(e.Y){case-1:this.magnify.areaParams.top=0;break;case 0:this.magnify.areaParams.top=i.Y-(this.magnify.areaParams.height>>>1);break;case 1:this.magnify.areaParams.top=s.height-this.magnify.areaParams.height;break}this.magnify.magnifyPictParams.marginLeft=-parseInt((this.magnify.areaParams.left-this.currentImg.screenOffsetX)*this.currentImg.scale,10);this.magnify.magnifyPictParams.marginTop=-parseInt(this.magnify.areaParams.top*this.currentImg.scale,10);a.left=this.magnify.areaParams.left+"px";a.top=this.magnify.areaParams.top+"px";BX.adjust(this.magnify.obMagnifyArea,{style:a});r.marginLeft=this.magnify.magnifyPictParams.marginLeft+"px";r.marginTop=this.magnify.magnifyPictParams.marginTop+"px";BX.adjust(this.magnify.obMagnifyPict,{style:r})}else{this.outMagnifierArea();this.hideMagnifier()}};t.JCCatalogElement.prototype.onMagnifierArea=function(){this.magnify.magnifyShow=true};t.JCCatalogElement.prototype.outMagnifierArea=function(){this.magnify.magnifyShow=false};t.JCCatalogElement.prototype.calcMagnifierParams=function(){if(!!this.magnify.obBigImg){var t=BX.pos(this.magnify.obBigImg,true);this.magnify.magnifierParams.width=t.width;this.magnify.magnifierParams.height=t.height;this.magnify.magnifierParams.top=t.top;this.magnify.magnifierParams.left=t.left+t.width+2}};t.JCCatalogElement.prototype.setMagnifierParams=function(t){if(!!this.magnify.obMagnifier){t=!!t;var i={top:this.magnify.magnifierParams.top+"px",left:this.magnify.magnifierParams.left+"px",width:this.magnify.magnifierParams.width+"px",height:this.magnify.magnifierParams.height+"px"};if(t){i.display=""}BX.adjust(this.magnify.obMagnifier,{style:i})}};t.JCCatalogElement.prototype.setMagnifyAreaParams=function(t){if(!!this.magnify.obMagnifier){t=!!t;var i={top:this.magnify.areaParams.top+"px",left:this.magnify.areaParams.left+"px",width:this.magnify.areaParams.width+"px",height:this.magnify.areaParams.height+"px"};if(t){i.display=""}BX.adjust(this.magnify.obMagnifyArea,{style:i})}};t.JCCatalogElement.prototype.calcMagnifyAreaPos=function(t){var i,s,e;s=BX.pos(this.obPict);i=this.inRect(t,s);if(this.inBound(s,i)){e=this.intersectArea(i,s);switch(e.X){case-1:this.magnify.areaParams.left=this.currentImg.screenOffsetX;break;case 0:this.magnify.areaParams.left=this.currentImg.screenOffsetX+i.X-(this.magnify.areaParams.width>>>1);break;case 1:this.magnify.areaParams.left=this.currentImg.screenOffsetX+s.width-this.magnify.areaParams.width;break}switch(e.Y){case-1:this.magnify.areaParams.top=0;break;case 0:this.magnify.areaParams.top=i.Y-(this.magnify.areaParams.height>>>1);break;case 1:this.magnify.areaParams.top=s.height-this.magnify.areaParams.height;break}}};t.JCCatalogElement.prototype.inBound=function(t,i){return 0<=i.Y&&t.height>=i.Y&&(0<=i.X&&t.width>=i.X)};t.JCCatalogElement.prototype.inRect=function(t,i){var s=BX.GetWindowSize(),e={X:0,Y:0,globalX:0,globalY:0};e.globalX=t.clientX+s.scrollLeft;if(t.offsetX&&t.offsetX<0)e.globalX-=t.offsetX;e.X=e.globalX-i.left;e.globalY=t.clientY+s.scrollTop;if(t.offsetY&&t.offsetY<0)e.globalY-=t.offsetY;e.Y=e.globalY-i.top;return e};t.JCCatalogElement.prototype.intersectArea=function(t,i){var s={X:0,Y:0},e=this.magnify.areaParams.width>>>1,a=this.magnify.areaParams.height>>>1;if(t.X<=e){s.X=-1}else if(t.X>=i.width-e){s.X=1}else{s.X=0}if(t.Y<=a){s.Y=-1}else if(t.Y>=i.height-a){s.Y=1}else{s.Y=0}return s};t.JCCatalogElement.prototype.calcMagnifyAreaSize=function(){var t,i,s;if(this.magnify.magnifierParams.width<this.currentImg.width&&this.magnify.magnifierParams.height<this.currentImg.height){t=this.magnify.obBigImg.offsetWidth/this.currentImg.width;i=this.magnify.obBigImg.offsetHeight/this.currentImg.height;s=Math.min(t,i);this.currentImg.scale=1/s;this.magnify.areaParams.width=Math.max(1,parseInt(s*this.magnify.magnifierParams.width,10));this.magnify.areaParams.height=Math.max(1,parseInt(s*this.magnify.magnifierParams.height,10));this.magnify.areaParams.scaleFactor=this.magnify.magnifierParams.defaultScale}else{t=this.obPict.offsetWidth/this.magnify.obBigImg.offsetWidth;i=this.obPict.offsetHeight/this.magnify.obBigImg.offsetHeight;s=Math.min(t,i);this.currentImg.scale=1/s;this.magnify.areaParams.width=Math.max(1,parseInt(s*this.magnify.magnifierParams.width,10));this.magnify.areaParams.height=Math.max(1,parseInt(s*this.magnify.magnifierParams.height,10));t=this.magnify.magnifierParams.width/this.currentImg.width;i=this.magnify.magnifierParams.height/this.currentImg.height;s=Math.max(t,i);this.magnify.areaParams.scaleFactor=s}};t.JCCatalogElement.prototype.calcMagnifyPictSize=function(){this.magnify.magnifyPictParams.width=this.currentImg.width*this.magnify.areaParams.scaleFactor;this.magnify.magnifyPictParams.height=this.currentImg.height*this.magnify.areaParams.scaleFactor};t.JCCatalogElement.prototype.calcMagnifyPictPos=function(){this.magnify.magnifyPictParams.marginLeft=-parseInt((this.magnify.areaParams.left-this.currentImg.screenOffsetX)*this.currentImg.scale,10);this.magnify.magnifyPictParams.marginTop=-parseInt(this.magnify.areaParams.top*this.currentImg.scale,10)};t.JCCatalogElement.prototype.setMagnifyPictParams=function(t){if(!!this.magnify.obMagnifier){t=!!t;var i={width:this.magnify.magnifyPictParams.width+"px",height:this.magnify.magnifyPictParams.height+"px",marginTop:this.magnify.magnifyPictParams.marginTop+"px",marginLeft:this.magnify.magnifyPictParams.marginLeft+"px"};if(t){i.display=""}BX.adjust(this.magnify.obMagnifyPict,{style:i,props:{src:this.currentImg.src}})}};t.JCCatalogElement.prototype.ProductSliderRowLeft=function(){var t=BX.proxy_context;if(!!t){if(this.sliderRowShowSize<this.product.slider.COUNT){if(0>this.product.slider.START){this.product.slider.START++;BX.adjust(this.product.slider.LIST,{style:{marginLeft:this.product.slider.START*20+"%"}});BX.adjust(this.product.slider.RIGHT,{style:this.sliderEnableArrow})}if(0<=this.product.slider.START){BX.adjust(this.product.slider.LEFT,{style:this.sliderDisableArrow})}}}};t.JCCatalogElement.prototype.ProductSliderRowRight=function(){var t=BX.proxy_context;if(!!t){if(this.sliderRowShowSize<this.product.slider.COUNT){if(this.sliderRowShowSize-this.product.slider.START<this.product.slider.COUNT){this.product.slider.START--;BX.adjust(this.product.slider.LIST,{style:{marginLeft:this.product.slider.START*20+"%"}});BX.adjust(this.product.slider.LEFT,{style:this.sliderEnableArrow})}if(this.sliderRowShowSize-this.product.slider.START>=this.product.slider.COUNT){BX.adjust(this.product.slider.RIGHT,{style:this.sliderDisableArrow})}}}};t.JCCatalogElement.prototype.ProductSelectSliderImg=function(){var t="",i=BX.proxy_context;if(!!i&&i.hasAttribute("data-value")){t=i.getAttribute("data-value");this.SetProductMainPict(t)}};t.JCCatalogElement.prototype.SetProductMainPict=function(t){var i=-1,s=0,e=0,a="",r="",o=null;if(0<this.product.sliderCount){for(e=0;e<this.product.sliderPict.length;e++){if(t===this.product.sliderPict[e].ID){i=e;break}}if(-1<i){if(!!this.product.sliderPict[i]){this.setCurrentImg(this.product.sliderPict[i],true)}o=BX.findChildren(this.product.slider.LIST,{tagName:"li"},false);if(!!o&&0<o.length){r=t;for(s=0;s<o.length;s++){a=o[s].getAttribute("data-value");if(a===r){BX.addClass(o[s],"bx_active")}else{BX.removeClass(o[s],"bx_active")}}}}}};t.JCCatalogElement.prototype.SliderRowLeft=function(){var t="",i=-1,s,e=BX.proxy_context;if(!!e&&e.hasAttribute("data-value")){t=e.getAttribute("data-value");for(s=0;s<this.sliders.length;s++){if(this.sliders[s].OFFER_ID===t){i=s;break}}if(-1<i&&this.sliderRowShowSize<this.sliders[i].COUNT){if(0>this.sliders[i].START){this.sliders[i].START++;BX.adjust(this.sliders[i].LIST,{style:{marginLeft:this.sliders[i].START*20+"%"}});BX.adjust(this.sliders[i].RIGHT,{style:this.sliderEnableArrow})}if(0<=this.sliders[i].START){BX.adjust(this.sliders[i].LEFT,{style:this.sliderDisableArrow})}}}};t.JCCatalogElement.prototype.SliderRowRight=function(){var t="",i=-1,s,e=BX.proxy_context;if(!!e&&e.hasAttribute("data-value")){t=e.getAttribute("data-value");for(s=0;s<this.sliders.length;s++){if(this.sliders[s].OFFER_ID===t){i=s;break}}if(-1<i&&this.sliderRowShowSize<this.sliders[i].COUNT){if(this.sliderRowShowSize-this.sliders[i].START<this.sliders[i].COUNT){this.sliders[i].START--;BX.adjust(this.sliders[i].LIST,{style:{marginLeft:this.sliders[i].START*20+"%"}});BX.adjust(this.sliders[i].LEFT,{style:this.sliderEnableArrow})}if(this.sliderRowShowSize-this.sliders[i].START>=this.sliders[i].COUNT){BX.adjust(this.sliders[i].RIGHT,{style:this.sliderDisableArrow})}}}};t.JCCatalogElement.prototype.SelectSliderImg=function(){var t="",i=[],s=BX.proxy_context;if(!!s&&s.hasAttribute("data-value")){t=s.getAttribute("data-value");i=t.split("_");this.SetMainPict(i[0],i[1])}};t.JCCatalogElement.prototype.SetMainPict=function(t,i){var s=-1,e=-1,a,r,o="",h=null,n="";for(a=0;a<this.offers.length;a++){if(t===this.offers[a].ID){s=a;break}}if(-1<s){if(0<this.offers[s].SLIDER_COUNT){
for(r=0;r<this.offers[s].SLIDER.length;r++){if(i===this.offers[s].SLIDER[r].ID){e=r;break}}if(-1<e){if(!!this.offers[s].SLIDER[e]){this.setCurrentImg(this.offers[s].SLIDER[e],true)}h=BX.findChildren(this.sliders[s].LIST,{tagName:"li"},false);if(!!h&&0<h.length){n=t+"_"+i;for(a=0;a<h.length;a++){o=h[a].getAttribute("data-value");if(o===n){BX.addClass(h[a],"bx_active")}else{BX.removeClass(h[a],"bx_active")}}}}}}};t.JCCatalogElement.prototype.SetMainPictFromItem=function(t){if(!!this.obPict){var i=false,s={};if(!!this.offers[t]){if(!!this.offers[t].DETAIL_PICTURE){s=this.offers[t].DETAIL_PICTURE;i=true}else if(!!this.offers[t].PREVIEW_PICTURE){s=this.offers[t].PREVIEW_PICTURE;i=true}}if(!i){if(!!this.defaultPict.detail){s=this.defaultPict.detail;i=true}else if(!!this.defaultPict.preview){s=this.defaultPict.preview;i=true}}if(i){this.setCurrentImg(s,true)}}};t.JCCatalogElement.prototype.showMainPictPopup=function(t){var i="";i='<div style="text-align: center;"><img src="'+this.currentImg.src+'" width="'+this.currentImg.width+'" height="'+this.currentImg.height+'" name=""></div>';this.obPopupPict.setContent(i);this.obPopupPict.show();return BX.PreventDefault(t)};t.JCCatalogElement.prototype.QuantityUp=function(){var t=0,i=true,s;if(0===this.errorCode&&this.config.showQuantity&&this.canBuy&&!this.isGift){t=this.isDblQuantity?parseFloat(this.obQuantity.value):parseInt(this.obQuantity.value,10);if(!isNaN(t)){t+=this.stepQuantity;if(this.checkQuantity){if(t>this.maxQuantity){i=false}}if(i){if(this.isDblQuantity){t=Math.round(t*this.precisionFactor)/this.precisionFactor}this.obQuantity.value=t;s={DISCOUNT_VALUE:this.currentBasisPrice.DISCOUNT_VALUE*t,VALUE:this.currentBasisPrice.VALUE*t,DISCOUNT_DIFF:this.currentBasisPrice.DISCOUNT_DIFF*t,DISCOUNT_DIFF_PERCENT:this.currentBasisPrice.DISCOUNT_DIFF_PERCENT,CURRENCY:this.currentBasisPrice.CURRENCY};this.setPrice(s)}}}};t.JCCatalogElement.prototype.QuantityDown=function(){var t=0,i=true,s;if(0===this.errorCode&&this.config.showQuantity&&this.canBuy&&!this.isGift){t=this.isDblQuantity?parseFloat(this.obQuantity.value):parseInt(this.obQuantity.value,10);if(!isNaN(t)){t-=this.stepQuantity;if(t<this.stepQuantity){i=false}if(i){if(this.isDblQuantity){t=Math.round(t*this.precisionFactor)/this.precisionFactor}this.obQuantity.value=t;s={DISCOUNT_VALUE:this.currentBasisPrice.DISCOUNT_VALUE*t,VALUE:this.currentBasisPrice.VALUE*t,DISCOUNT_DIFF:this.currentBasisPrice.DISCOUNT_DIFF*t,DISCOUNT_DIFF_PERCENT:this.currentBasisPrice.DISCOUNT_DIFF_PERCENT,CURRENCY:this.currentBasisPrice.CURRENCY};this.setPrice(s)}}}};t.JCCatalogElement.prototype.QuantityChange=function(){var t=0,i,s,e;if(0===this.errorCode&&this.config.showQuantity){if(this.canBuy){t=this.isDblQuantity?parseFloat(this.obQuantity.value):parseInt(this.obQuantity.value,10);if(!isNaN(t)){if(this.checkQuantity){if(t>this.maxQuantity){t=this.maxQuantity}}if(t<this.stepQuantity){t=this.stepQuantity}else{e=Math.round(t*this.precisionFactor/this.stepQuantity)/this.precisionFactor;s=parseInt(e,10);if(isNaN(s)){s=1;e=1.1}if(e>s){t=s<=1?this.stepQuantity:s*this.stepQuantity;t=Math.round(t*this.precisionFactor)/this.precisionFactor}}this.obQuantity.value=t}else{this.obQuantity.value=this.stepQuantity}}else{this.obQuantity.value=this.stepQuantity}i={DISCOUNT_VALUE:this.currentBasisPrice.DISCOUNT_VALUE*this.obQuantity.value,VALUE:this.currentBasisPrice.VALUE*this.obQuantity.value,DISCOUNT_DIFF:this.currentBasisPrice.DISCOUNT_DIFF*this.obQuantity.value,DISCOUNT_DIFF_PERCENT:this.currentBasisPrice.DISCOUNT_DIFF_PERCENT,CURRENCY:this.currentBasisPrice.CURRENCY};this.setPrice(i)}};t.JCCatalogElement.prototype.QuantitySet=function(t){var i="",s;if(this.errorCode===0){this.canBuy=this.offers[t].CAN_BUY;if(this.canBuy){if(!!this.obBasketActions){BX.style(this.obBasketActions,"display","")}if(!!this.obNotAvail){BX.style(this.obNotAvail,"display","none")}}else{if(!!this.obBasketActions){BX.style(this.obBasketActions,"display","none")}if(!!this.obNotAvail){BX.style(this.obNotAvail,"display","")}}if(this.config.showQuantity){this.isDblQuantity=this.offers[t].QUANTITY_FLOAT;this.checkQuantity=this.offers[t].CHECK_QUANTITY;if(this.isDblQuantity){this.maxQuantity=parseFloat(this.offers[t].MAX_QUANTITY);this.stepQuantity=Math.round(parseFloat(this.offers[t].STEP_QUANTITY)*this.precisionFactor)/this.precisionFactor}else{this.maxQuantity=parseInt(this.offers[t].MAX_QUANTITY,10);this.stepQuantity=parseInt(this.offers[t].STEP_QUANTITY,10)}this.obQuantity.value=this.stepQuantity;this.obQuantity.disabled=!this.canBuy;if(!!this.obMeasure){if(!!this.offers[t].MEASURE){BX.adjust(this.obMeasure,{html:this.offers[t].MEASURE})}else{BX.adjust(this.obMeasure,{html:""})}}if(!!this.obQuantityLimit.all){if(!this.checkQuantity){BX.adjust(this.obQuantityLimit.value,{html:""});BX.adjust(this.obQuantityLimit.all,{style:{display:"none"}})}else{s=this.offers[t].MAX_QUANTITY;if(!!this.offers[t].MEASURE){s+=" "+this.offers[t].MEASURE}BX.adjust(this.obQuantityLimit.value,{html:s});BX.adjust(this.obQuantityLimit.all,{style:{display:""}})}}if(!!this.obBasisPrice){if(!!this.offers[t].BASIS_PRICE){i=BX.message("BASIS_PRICE_MESSAGE");i=i.replace("#PRICE#",BX.Currency.currencyFormat(this.offers[t].BASIS_PRICE.DISCOUNT_VALUE,this.offers[t].BASIS_PRICE.CURRENCY,true));i=i.replace("#MEASURE#",this.offers[t].MEASURE);BX.adjust(this.obBasisPrice,{style:{display:""},html:i})}else{BX.adjust(this.obBasisPrice,{style:{display:"none"},html:""})}}}this.currentBasisPrice=this.offers[t].BASIS_PRICE}};t.JCCatalogElement.prototype.SelectOfferProp=function(){var t=0,i="",s=[],e=null,a=BX.proxy_context;if(!!a&&a.hasAttribute("data-treevalue")){if(typeof document.activeElement==="object")document.activeElement.blur();i=a.getAttribute("data-treevalue");s=i.split("_");this.SearchOfferPropIndex(s[0],s[1]);e=BX.findChildren(a.parentNode,{tagName:"li"},false);if(!!e&&0<e.length){for(t=0;t<e.length;t++){BX.removeClass(e[t],"bx_active")}}BX.addClass(a,"bx_active")}};t.JCCatalogElement.prototype.SearchOfferPropIndex=function(t,i){var s="",e=false,a=[],r=[],o=-1,h,n,l={},f=[];for(h=0;h<this.treeProps.length;h++){if(this.treeProps[h].ID===t){o=h;break}}if(-1<o){for(h=0;h<o;h++){s="PROP_"+this.treeProps[h].ID;l[s]=this.selectedValues[s]}s="PROP_"+this.treeProps[o].ID;l[s]=i;for(h=o+1;h<this.treeProps.length;h++){s="PROP_"+this.treeProps[h].ID;e=this.GetRowValues(l,s);if(!e){break}r=[];if(this.config.showAbsent){a=[];f=[];f=BX.clone(l,true);for(n=0;n<e.length;n++){f[s]=e[n];r[r.length]=e[n];if(this.GetCanBuy(f))a[a.length]=e[n]}}else{a=e}if(!!this.selectedValues[s]&&BX.util.in_array(this.selectedValues[s],a)){l[s]=this.selectedValues[s]}else{if(this.config.showAbsent)l[s]=a.length>0?a[0]:r[0];else l[s]=a[0]}this.UpdateRow(h,l[s],e,a)}this.selectedValues=l;this.ChangeInfo()}};t.JCCatalogElement.prototype.RowLeft=function(){var t="",i=-1,s,e=BX.proxy_context;if(!!e&&e.hasAttribute("data-treevalue")){t=e.getAttribute("data-treevalue");for(s=0;s<this.treeProps.length;s++){if(this.treeProps[s].ID===t){i=s;break}}if(-1<i&&this.treeRowShowSize<this.showCount[i]){if(0>this.showStart[i]){this.showStart[i]++;BX.adjust(this.obTreeRows[i].LIST,{style:{marginLeft:this.showStart[i]*20+"%"}});BX.adjust(this.obTreeRows[i].RIGHT,{style:this.treeEnableArrow})}if(0<=this.showStart[i]){BX.adjust(this.obTreeRows[i].LEFT,{style:this.treeDisableArrow})}}}};t.JCCatalogElement.prototype.RowRight=function(){var t="",i=-1,s,e=BX.proxy_context;if(!!e&&e.hasAttribute("data-treevalue")){t=e.getAttribute("data-treevalue");for(s=0;s<this.treeProps.length;s++){if(this.treeProps[s].ID===t){i=s;break}}if(-1<i&&this.treeRowShowSize<this.showCount[i]){if(this.treeRowShowSize-this.showStart[i]<this.showCount[i]){this.showStart[i]--;BX.adjust(this.obTreeRows[i].LIST,{style:{marginLeft:this.showStart[i]*20+"%"}});BX.adjust(this.obTreeRows[i].LEFT,{style:this.treeEnableArrow})}if(this.treeRowShowSize-this.showStart[i]>=this.showCount[i]){BX.adjust(this.obTreeRows[i].RIGHT,{style:this.treeDisableArrow})}}}};t.JCCatalogElement.prototype.UpdateRow=function(t,i,s,e){var a=0,r=0,o="",h=0,n="",l={},f=null,u=false,c=false,p=false,d=0,m=this.treeEnableArrow,g=this.treeEnableArrow,I=0;if(-1<t&&t<this.obTreeRows.length){f=BX.findChildren(this.obTreeRows[t].LIST,{tagName:"li"},false);if(!!f&&0<f.length){u="PICT"===this.treeProps[t].SHOW_MODE;h=s.length;c=this.treeRowShowSize<h;n=this.treeRowShowSize<h?100/h+"%":"20%";l={props:{className:""},style:{width:n}};if(u){l.style.paddingTop=n}for(a=0;a<f.length;a++){o=f[a].getAttribute("data-onevalue");p=o===i;if(BX.util.in_array(o,e)){l.props.className=p?"bx_active":""}else{l.props.className=p?"bx_active bx_missing":"bx_missing"}l.style.display="none";if(BX.util.in_array(o,s)){l.style.display="";if(p){d=r}r++}BX.adjust(f[a],l)}l={style:{width:(c?20*h:100)+"%",marginLeft:"0%"}};if(u){BX.adjust(this.obTreeRows[t].CONT,{props:{className:c?"bx_item_detail_scu full":"bx_item_detail_scu"}})}else{BX.adjust(this.obTreeRows[t].CONT,{props:{className:c<h?"bx_item_detail_size full":"bx_item_detail_size"}})}if(c){if(d+1===h){g=this.treeDisableArrow}if(this.treeRowShowSize<=d){I=this.treeRowShowSize-d-1;l.style.marginLeft=I*20+"%"}if(0===I){m=this.treeDisableArrow}BX.adjust(this.obTreeRows[t].LEFT,{style:m});BX.adjust(this.obTreeRows[t].RIGHT,{style:g})}else{BX.adjust(this.obTreeRows[t].LEFT,{style:{display:"none"}});BX.adjust(this.obTreeRows[t].RIGHT,{style:{display:"none"}})}BX.adjust(this.obTreeRows[t].LIST,l);this.showCount[t]=h;this.showStart[t]=I}}};t.JCCatalogElement.prototype.GetRowValues=function(t,i){var s=[],e=0,a=0,r=false,o=true;if(0===t.length){for(e=0;e<this.offers.length;e++){if(!BX.util.in_array(this.offers[e].TREE[i],s)){s[s.length]=this.offers[e].TREE[i]}}r=true}else{for(e=0;e<this.offers.length;e++){o=true;for(a in t){if(t[a]!==this.offers[e].TREE[a]){o=false;break}}if(o){if(!BX.util.in_array(this.offers[e].TREE[i],s)){s[s.length]=this.offers[e].TREE[i]}r=true}}}return r?s:false};t.JCCatalogElement.prototype.GetCanBuy=function(t){var i=0,s=0,e=true,a=false;for(i=0;i<this.offers.length;i++){e=true;for(s in t){if(t[s]!==this.offers[i].TREE[s]){e=false;break}}if(e){if(this.offers[i].CAN_BUY){a=true;break}}}return a};t.JCCatalogElement.prototype.SetCurrent=function(){var t=0,i=0,s="",e=false,a=[],r={},o=[],h=this.offers[this.offerNum].TREE;for(t=0;t<this.treeProps.length;t++){s="PROP_"+this.treeProps[t].ID;e=this.GetRowValues(r,s);if(!e){break}if(BX.util.in_array(h[s],e)){r[s]=h[s]}else{r[s]=e[0];this.offerNum=0}if(this.config.showAbsent){a=[];o=[];o=BX.clone(r,true);for(i=0;i<e.length;i++){o[s]=e[i];if(this.GetCanBuy(o)){a[a.length]=e[i]}}}else{a=e}this.UpdateRow(t,r[s],e,a)}this.selectedValues=r;this.ChangeInfo()};t.JCCatalogElement.prototype.ChangeInfo=function(){var t=-1,i,s=0,e=true,a={currentId:this.offerNum>-1?this.offers[this.offerNum].ID:0,newId:0};for(i=0;i<this.offers.length;i++){e=true;for(s in this.selectedValues){if(this.selectedValues[s]!==this.offers[i].TREE[s]){e=false;break}}if(e){t=i;break}}if(-1<t){if(t!=this.offerNum){this.isGift=false}this.setPrice(this.offers[t].PRICE);for(i=0;i<this.offers.length;i++){if(this.config.showOfferGroup&&this.offers[i].OFFER_GROUP){if(i!==t){BX.adjust(BX(this.visual.OFFER_GROUP+this.offers[i].ID),{style:{display:"none"}})}}if(!!this.sliders[i].ID){if(i===t){this.sliders[i].START=0;BX.adjust(this.sliders[i].LIST,{style:{marginLeft:"0%"}});BX.adjust(this.sliders[i].CONT,{style:{display:""}});BX.adjust(this.sliders[i].LEFT,{style:this.sliderDisableArrow});BX.adjust(this.sliders[i].RIGHT,{style:this.sliderEnableArrow})}else{BX.adjust(this.sliders[i].CONT,{style:{display:"none"}})}}}if(this.config.showOfferGroup&&this.offers[t].OFFER_GROUP){BX.adjust(BX(this.visual.OFFER_GROUP+this.offers[t].ID),{style:{display:""}})}if(0<this.offers[t].SLIDER_COUNT){this.SetMainPict(this.offers[t].ID,this.offers[t].SLIDER[0].ID)}else{this.SetMainPictFromItem(t)}if(this.config.showSkuProps&&!!this.obSkuProps){if(!this.offers[t].DISPLAY_PROPERTIES||this.offers[t].DISPLAY_PROPERTIES.length===0){BX.adjust(this.obSkuProps,{style:{display:"none"},html:""})}else{BX.adjust(this.obSkuProps,{style:{display:""},html:this.offers[t].DISPLAY_PROPERTIES})}}this.offerNum=t;this.QuantitySet(this.offerNum);this.incViewedCounter();a.newId=this.offers[this.offerNum].ID;if(a.currentId!=a.newId){BX.onCustomEvent("onCatalogStoreProductChange",[this.offers[this.offerNum].ID]);BX.onCustomEvent("onCatalogElementChangeOffer",a)}a=null}};t.JCCatalogElement.prototype.restoreSticker=function(){if(this.previousStickerText){this.redrawSticker({text:this.previousStickerText})}else{this.hideSticker()}};t.JCCatalogElement.prototype.hideSticker=function(){BX.hide(BX(this.visual.STICKER_ID))};t.JCCatalogElement.prototype.redrawSticker=function(t){t=t||{};var i=t.text||"";var s=BX(this.visual.STICKER_ID);if(!s){return}BX.show(BX(this.visual.STICKER_ID),"block");var e=s.getAttribute("title");if(e&&e!=i){this.previousStickerText=e}BX.adjust(s,{text:i,attrs:{title:i}})};t.JCCatalogElement.prototype.setPrice=function(t){var i="";if(this.isGift){t.DISCOUNT_VALUE=0;t.DISCOUNT_DIFF=t.VALUE;t.DISCOUNT_DIFF_PERCENT=-100}if(!!this.obPrice.price){BX.adjust(this.obPrice.price,{html:BX.Currency.currencyFormat(t.DISCOUNT_VALUE,t.CURRENCY,true)});if(t.DISCOUNT_VALUE!==t.VALUE){if(this.config.showOldPrice){if(!!this.obPrice.full){BX.adjust(this.obPrice.full,{style:{display:""},html:BX.Currency.currencyFormat(t.VALUE,t.CURRENCY,true)})}if(!!this.obPrice.discount){i=BX.message("ECONOMY_INFO_MESSAGE");i=i.replace("#ECONOMY#",BX.Currency.currencyFormat(t.DISCOUNT_DIFF,t.CURRENCY,true));BX.adjust(this.obPrice.discount,{style:{display:""},html:i})}}if(this.config.showPercent){if(!!this.obPrice.percent){BX.adjust(this.obPrice.percent,{style:{display:""},html:t.DISCOUNT_DIFF_PERCENT+"%"})}}}else{if(this.config.showOldPrice){if(!!this.obPrice.full){BX.adjust(this.obPrice.full,{style:{display:"none"},html:""})}if(!!this.obPrice.discount){BX.adjust(this.obPrice.discount,{style:{display:"none"},html:""})}}if(this.config.showPercent){if(!!this.obPrice.percent){BX.adjust(this.obPrice.percent,{style:{display:"none"},html:""})}}}}};t.JCCatalogElement.prototype.Compare=function(){var t,i;if(!!this.compareData.compareUrl){switch(this.productType){case 0:case 1:case 2:i=this.compareData.compareUrl.replace("#ID#",this.product.id.toString());break;case 3:i=this.compareData.compareUrl.replace("#ID#",this.offers[this.offerNum].ID);break}t={ajax_action:"Y"};BX.ajax.loadJSON(i,t,BX.proxy(this.CompareResult,this))}};t.JCCatalogElement.prototype.CompareResult=function(t){var s,e,a;if(!!this.obPopupWin)this.obPopupWin.close();if(typeof t!=="object")return false;this.InitPopupWindow();a={content:BX.create("div",{style:{marginRight:"30px",whiteSpace:"nowrap"},text:BX.message("COMPARE_TITLE")})};if(t.STATUS==="OK"){BX.onCustomEvent("OnCompareChange");s='<div style="width: 96%; margin: 10px 2%; text-align: center;"><p>'+BX.message("COMPARE_MESSAGE_OK")+"</p></div>";if(this.config.showClosePopup){e=[new i({ownerClass:this.obProduct.className,text:BX.message("BTN_MESSAGE_COMPARE_REDIRECT"),events:{click:BX.delegate(this.CompareRedirect,this)},style:{marginRight:"10px"}}),new i({ownerClass:this.obProduct.className,text:BX.message("BTN_MESSAGE_CLOSE_POPUP"),events:{click:BX.delegate(this.obPopupWin.close,this.obPopupWin)}})]}else{e=[new i({ownerClass:this.obProduct.className,text:BX.message("BTN_MESSAGE_COMPARE_REDIRECT"),events:{click:BX.delegate(this.CompareRedirect,this)}})]}}else{s='<div style="width: 96%; margin: 10px 2%; text-align: center;"><p>'+(!!t.MESSAGE?t.MESSAGE:BX.message("COMPARE_UNKNOWN_ERROR"))+"</p></div>";e=[new i({ownerClass:this.obProduct.className,text:BX.message("BTN_MESSAGE_CLOSE"),events:{click:BX.delegate(this.obPopupWin.close,this.obPopupWin)}})]}this.obPopupWin.setTitleBar(a);this.obPopupWin.setContent(s);this.obPopupWin.setButtons(e);this.obPopupWin.show();return false};t.JCCatalogElement.prototype.CompareRedirect=function(){if(!!this.compareData.comparePath)location.href=this.compareData.comparePath;else this.obPopupWin.close()};t.JCCatalogElement.prototype.InitBasketUrl=function(){this.basketUrl=this.basketMode==="ADD"?this.basketData.add_url:this.basketData.buy_url;switch(this.productType){case 1:case 2:this.basketUrl=this.basketUrl.replace("#ID#",this.product.id.toString());break;case 3:this.basketUrl=this.basketUrl.replace("#ID#",this.offers[this.offerNum].ID);break}this.basketParams={ajax_basket:"Y"};if(this.config.showQuantity){this.basketParams[this.basketData.quantity]=this.obQuantity.value}if(!!this.basketData.sku_props){this.basketParams[this.basketData.sku_props_var]=this.basketData.sku_props}};t.JCCatalogElement.prototype.FillBasketProps=function(){if(!this.visual.BASKET_PROP_DIV)return;var t=0,i=null,s=false,e=null;if(this.basketData.useProps&&!this.basketData.emptyProps){if(!!this.obPopupWin&&!!this.obPopupWin.contentContainer)e=this.obPopupWin.contentContainer}else{e=BX(this.visual.BASKET_PROP_DIV)}if(!!e){i=e.getElementsByTagName("select");if(!!i&&!!i.length){for(t=0;t<i.length;t++){if(!i[t].disabled){switch(i[t].type.toLowerCase()){case"select-one":this.basketParams[i[t].name]=i[t].value;s=true;break;default:break}}}}i=e.getElementsByTagName("input");if(!!i&&!!i.length){for(t=0;t<i.length;t++){if(!i[t].disabled){switch(i[t].type.toLowerCase()){case"hidden":this.basketParams[i[t].name]=i[t].value;s=true;break;case"radio":if(i[t].checked){this.basketParams[i[t].name]=i[t].value;s=true}break;default:break}}}}}if(!s){this.basketParams[this.basketData.props]=[];this.basketParams[this.basketData.props][0]=0}};t.JCCatalogElement.prototype.SendToBasket=function(){if(!this.canBuy)return;this.InitBasketUrl();this.FillBasketProps();BX.ajax.loadJSON(this.basketUrl,this.basketParams,BX.proxy(this.BasketResult,this))};t.JCCatalogElement.prototype.Add2Basket=function(){this.basketMode="ADD";this.Basket()};t.JCCatalogElement.prototype.BuyBasket=function(){this.basketMode="BUY";this.Basket()};t.JCCatalogElement.prototype.Basket=function(){var t="";if(!this.canBuy)return;switch(this.productType){case 1:case 2:if(this.basketData.useProps&&!this.basketData.emptyProps){this.InitPopupWindow();this.obPopupWin.setTitleBar({content:BX.create("div",{style:{marginRight:"30px",whiteSpace:"nowrap"},text:BX.message("TITLE_BASKET_PROPS")})});if(BX(this.visual.BASKET_PROP_DIV)){t=BX(this.visual.BASKET_PROP_DIV).innerHTML}this.obPopupWin.setContent(t);this.obPopupWin.setButtons([new i({ownerClass:this.obProduct.className,text:BX.message("BTN_SEND_PROPS"),events:{click:BX.delegate(this.SendToBasket,this)}})]);this.obPopupWin.show()}else{this.SendToBasket()}break;case 3:this.SendToBasket();break}};t.JCCatalogElement.prototype.BasketResult=function(t){var s,e,a,r;if(!!this.obPopupWin)this.obPopupWin.close();if(typeof t!=="object")return false;if(t.STATUS==="OK"&&this.basketMode==="BUY"){this.BasketRedirect()}else{this.InitPopupWindow();a={content:BX.create("div",{style:{marginRight:"30px",whiteSpace:"nowrap"},text:t.STATUS==="OK"?BX.message("TITLE_SUCCESSFUL"):BX.message("TITLE_ERROR")})};if(t.STATUS==="OK"){BX.onCustomEvent("OnBasketChange");switch(this.productType){case 1:case 2:r=this.product.pict.SRC;break;case 3:r=!!this.offers[this.offerNum].PREVIEW_PICTURE?this.offers[this.offerNum].PREVIEW_PICTURE.SRC:this.defaultPict.pict.SRC;break}s='<div style="width: 96%; margin: 10px 2%; text-align: center;"><img src="'+r+'" height="130" style="max-height:130px"><p>'+this.product.name+"</p></div>";if(this.config.showClosePopup){e=[new i({ownerClass:this.obProduct.className,text:BX.message("BTN_MESSAGE_BASKET_REDIRECT"),events:{click:BX.delegate(this.BasketRedirect,this)},style:{marginRight:"10px"}}),new i({ownerClass:this.obProduct.className,text:BX.message("BTN_MESSAGE_CLOSE_POPUP"),events:{click:BX.delegate(this.obPopupWin.close,this.obPopupWin)}})]}else{e=[new i({ownerClass:this.obProduct.className,text:BX.message("BTN_MESSAGE_BASKET_REDIRECT"),events:{click:BX.delegate(this.BasketRedirect,this)}})]}}else{s='<div style="width: 96%; margin: 10px 2%; text-align: center;"><p>'+(!!t.MESSAGE?t.MESSAGE:BX.message("BASKET_UNKNOWN_ERROR"))+"</p></div>";e=[new i({ownerClass:this.obProduct.className,text:BX.message("BTN_MESSAGE_CLOSE"),events:{click:BX.delegate(this.obPopupWin.close,this.obPopupWin)}})]}this.obPopupWin.setTitleBar(a);this.obPopupWin.setContent(s);this.obPopupWin.setButtons(e);this.obPopupWin.show()}return false};t.JCCatalogElement.prototype.BasketRedirect=function(){location.href=!!this.basketData.basketUrl?this.basketData.basketUrl:BX.message("BASKET_URL")};t.JCCatalogElement.prototype.InitPopupWindow=function(){if(!!this.obPopupWin)return;this.obPopupWin=BX.PopupWindowManager.create("CatalogElementBasket_"+this.visual.ID,null,{autoHide:false,offsetLeft:0,offsetTop:0,overlay:true,closeByEsc:true,titleBar:true,closeIcon:{top:"10px",right:"10px"}})};t.JCCatalogElement.prototype.onPopupWindowShow=function(t){BX.bind(document,"click",BX.proxy(this.popupWindowClick,this))};t.JCCatalogElement.prototype.onPopupWindowClose=function(t,i){BX.unbind(document,"click",BX.proxy(this.popupWindowClick,this))};t.JCCatalogElement.prototype.popupWindowClick=function(){if(!!this.obPopupPict&&typeof this.obPopupPict==="object"){if(this.obPopupPict.isShown())this.obPopupPict.close()}};t.JCCatalogElement.prototype.incViewedCounter=function(){if(this.currentIsSet&&!this.updateViewedCount){switch(this.productType){case 1:case 2:this.viewedCounter.params.PRODUCT_ID=this.product.id;this.viewedCounter.params.PARENT_ID=this.product.id;break;case 3:this.viewedCounter.params.PARENT_ID=this.product.id;this.viewedCounter.params.PRODUCT_ID=this.offers[this.offerNum].ID;break;default:return}this.viewedCounter.params.SITE_ID=BX.message("SITE_ID");this.updateViewedCount=true;BX.ajax.post(this.viewedCounter.path,this.viewedCounter.params,BX.delegate(function(){this.updateViewedCount=false},this))}};t.JCCatalogElement.prototype.allowViewedCount=function(t){t=!!t;this.currentIsSet=true;if(t)this.incViewedCounter()}})(window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:70:"jquery.fancybox.js-149703835548706.js"/*tpa=http://atrspb.com/local/templates/atrspb/js/fancybox/jquery.fancybox.js?149703835548706*/;s:6:"source";s:54:"jquery.fancybox.js"/*tpa=http://atrspb.com/local/templates/atrspb/js/fancybox/jquery.fancybox.js*/;s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.5 (Fri, 14 Jun 2013)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */

(function (window, document, $, undefined) {
	"use strict";

	var H = $("html"),
		W = $(window),
		D = $(document),
		F = $.fancybox = function () {
			F.open.apply( this, arguments );
		},
		IE =  navigator.userAgent.match(/msie/i),
		didUpdate	= null,
		isTouch		= document.createTouch !== undefined,

		isQuery	= function(obj) {
			return obj && obj.hasOwnProperty && obj instanceof $;
		},
		isString = function(str) {
			return str && $.type(str) === "string";
		},
		isPercentage = function(str) {
			return isString(str) && str.indexOf('%') > 0;
		},
		isScrollable = function(el) {
			return (el && !(el.style.overflow && el.style.overflow === 'hidden') && ((el.clientWidth && el.scrollWidth > el.clientWidth) || (el.clientHeight && el.scrollHeight > el.clientHeight)));
		},
		getScalar = function(orig, dim) {
			var value = parseInt(orig, 10) || 0;

			if (dim && isPercentage(orig)) {
				value = F.getViewport()[ dim ] / 100 * value;
			}

			return Math.ceil(value);
		},
		getValue = function(value, dim) {
			return getScalar(value, dim) + 'px';
		};

	$.extend(F, {
		// The current version of fancyBox
		version: '2.1.5',

		defaults: {
			padding : 15,
			margin  : 20,

			width     : 800,
			height    : 600,
			minWidth  : 100,
			minHeight : 100,
			maxWidth  : 9999,
			maxHeight : 9999,
			pixelRatio: 1, // Set to 2 for retina display support

			autoSize   : true,
			autoHeight : false,
			autoWidth  : false,

			autoResize  : true,
			autoCenter  : !isTouch,
			fitToView   : true,
			aspectRatio : false,
			topRatio    : 0.5,
			leftRatio   : 0.5,

			scrolling : 'auto', // 'auto', 'yes' or 'no'
			wrapCSS   : '',

			arrows     : true,
			closeBtn   : true,
			closeClick : false,
			nextClick  : false,
			mouseWheel : true,
			autoPlay   : false,
			playSpeed  : 3000,
			preload    : 3,
			modal      : false,
			loop       : true,

			ajax  : {
				dataType : 'html',
				headers  : { 'X-fancyBox': true }
			},
			iframe : {
				scrolling : 'auto',
				preload   : true
			},
			swf : {
				wmode: 'transparent',
				allowfullscreen   : 'true',
				allowscriptaccess : 'always'
			},

			keys  : {
				next : {
					13 : 'left', // enter
					34 : 'up',   // page down
					39 : 'left', // right arrow
					40 : 'up'    // down arrow
				},
				prev : {
					8  : 'right',  // backspace
					33 : 'down',   // page up
					37 : 'right',  // left arrow
					38 : 'down'    // up arrow
				},
				close  : [27], // escape key
				play   : [32], // space - start/stop slideshow
				toggle : [70]  // letter "f" - toggle fullscreen
			},

			direction : {
				next : 'left',
				prev : 'right'
			},

			scrollOutside  : true,

			// Override some properties
			index   : 0,
			type    : null,
			href    : null,
			content : null,
			title   : null,

			// HTML templates
			tpl: {
				wrap     : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
				image    : '<img class="fancybox-image" src="{href}" alt="" />',
				iframe   : '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : '') + '></iframe>',
				error    : '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
				closeBtn : '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
				next     : '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
				prev     : '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
			},

			// Properties for each animation type
			// Opening fancyBox
			openEffect  : 'fade', // 'elastic', 'fade' or 'none'
			openSpeed   : 250,
			openEasing  : 'swing',
			openOpacity : true,
			openMethod  : 'zoomIn',

			// Closing fancyBox
			closeEffect  : 'fade', // 'elastic', 'fade' or 'none'
			closeSpeed   : 250,
			closeEasing  : 'swing',
			closeOpacity : true,
			closeMethod  : 'zoomOut',

			// Changing next gallery item
			nextEffect : 'elastic', // 'elastic', 'fade' or 'none'
			nextSpeed  : 250,
			nextEasing : 'swing',
			nextMethod : 'changeIn',

			// Changing previous gallery item
			prevEffect : 'elastic', // 'elastic', 'fade' or 'none'
			prevSpeed  : 250,
			prevEasing : 'swing',
			prevMethod : 'changeOut',

			// Enable default helpers
			helpers : {
				overlay : true,
				title   : true
			},

			// Callbacks
			onCancel     : $.noop, // If canceling
			beforeLoad   : $.noop, // Before loading
			afterLoad    : $.noop, // After loading
			beforeShow   : $.noop, // Before changing in current item
			afterShow    : $.noop, // After opening
			beforeChange : $.noop, // Before changing gallery item
			beforeClose  : $.noop, // Before closing
			afterClose   : $.noop  // After closing
		},

		//Current state
		group    : {}, // Selected group
		opts     : {}, // Group options
		previous : null,  // Previous element
		coming   : null,  // Element being loaded
		current  : null,  // Currently loaded element
		isActive : false, // Is activated
		isOpen   : false, // Is currently open
		isOpened : false, // Have been fully opened at least once

		wrap  : null,
		skin  : null,
		outer : null,
		inner : null,

		player : {
			timer    : null,
			isActive : false
		},

		// Loaders
		ajaxLoad   : null,
		imgPreload : null,

		// Some collections
		transitions : {},
		helpers     : {},

		/*
		 *	Static methods
		 */

		open: function (group, opts) {
			if (!group) {
				return;
			}

			if (!$.isPlainObject(opts)) {
				opts = {};
			}

			// Close if already active
			if (false === F.close(true)) {
				return;
			}

			// Normalize group
			if (!$.isArray(group)) {
				group = isQuery(group) ? $(group).get() : [group];
			}

			// Recheck if the type of each element is `object` and set content type (image, ajax, etc)
			$.each(group, function(i, element) {
				var obj = {},
					href,
					title,
					content,
					type,
					rez,
					hrefParts,
					selector;

				if ($.type(element) === "object") {
					// Check if is DOM element
					if (element.nodeType) {
						element = $(element);
					}

					if (isQuery(element)) {
						obj = {
							href    : element.data('fancybox-href') || element.attr('href'),
							title   : element.data('fancybox-title') || element.attr('title'),
							isDom   : true,
							element : element
						};

						if ($.metadata) {
							$.extend(true, obj, element.metadata());
						}

					} else {
						obj = element;
					}
				}

				href  = opts.href  || obj.href || (isString(element) ? element : null);
				title = opts.title !== undefined ? opts.title : obj.title || '';

				content = opts.content || obj.content;
				type    = content ? 'html' : (opts.type  || obj.type);

				if (!type && obj.isDom) {
					type = element.data('fancybox-type');

					if (!type) {
						rez  = element.prop('class').match(/fancybox\.(\w+)/);
						type = rez ? rez[1] : null;
					}
				}

				if (isString(href)) {
					// Try to guess the content type
					if (!type) {
						if (F.isImage(href)) {
							type = 'image';

						} else if (F.isSWF(href)) {
							type = 'swf';

						} else if (href.charAt(0) === '#') {
							type = 'inline';

						} else if (isString(element)) {
							type    = 'html';
							content = element;
						}
					}

					// Split url into two pieces with source url and content selector, e.g,
					// "/mypage.html #my_id" will load "http://atrspb.com/mypage.html" and display element having id "my_id"
					if (type === 'ajax') {
						hrefParts = href.split(/\s+/, 2);
						href      = hrefParts.shift();
						selector  = hrefParts.shift();
					}
				}

				if (!content) {
					if (type === 'inline') {
						if (href) {
							content = $( isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href ); //strip for ie7

						} else if (obj.isDom) {
							content = element;
						}

					} else if (type === 'html') {
						content = href;

					} else if (!type && !href && obj.isDom) {
						type    = 'inline';
						content = element;
					}
				}

				$.extend(obj, {
					href     : href,
					type     : type,
					content  : content,
					title    : title,
					selector : selector
				});

				group[ i ] = obj;
			});

			// Extend the defaults
			F.opts = $.extend(true, {}, F.defaults, opts);

			// All options are merged recursive except keys
			if (opts.keys !== undefined) {
				F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
			}

			F.group = group;

			return F._start(F.opts.index);
		},

		// Cancel image loading or abort ajax request
		cancel: function () {
			var coming = F.coming;

			if (!coming || false === F.trigger('onCancel')) {
				return;
			}

			F.hideLoading();

			if (F.ajaxLoad) {
				F.ajaxLoad.abort();
			}

			F.ajaxLoad = null;

			if (F.imgPreload) {
				F.imgPreload.onload = F.imgPreload.onerror = null;
			}

			if (coming.wrap) {
				coming.wrap.stop(true, true).trigger('onReset').remove();
			}

			F.coming = null;

			// If the first item has been canceled, then clear everything
			if (!F.current) {
				F._afterZoomOut( coming );
			}
		},

		// Start closing animation if is open; remove immediately if opening/closing
		close: function (event) {
			F.cancel();

			if (false === F.trigger('beforeClose')) {
				return;
			}

			F.unbindEvents();

			if (!F.isActive) {
				return;
			}

			if (!F.isOpen || event === true) {
				$('.fancybox-wrap').stop(true).trigger('onReset').remove();

				F._afterZoomOut();

			} else {
				F.isOpen = F.isOpened = false;
				F.isClosing = true;

				$('.fancybox-item, .fancybox-nav').remove();

				F.wrap.stop(true, true).removeClass('fancybox-opened');

				F.transitions[ F.current.closeMethod ]();
			}
		},

		// Manage slideshow:
		//   $.fancybox.play(); - toggle slideshow
		//   $.fancybox.play( true ); - start
		//   $.fancybox.play( false ); - stop
		play: function ( action ) {
			var clear = function () {
					clearTimeout(F.player.timer);
				},
				set = function () {
					clear();

					if (F.current && F.player.isActive) {
						F.player.timer = setTimeout(F.next, F.current.playSpeed);
					}
				},
				stop = function () {
					clear();

					D.unbind('.player');

					F.player.isActive = false;

					F.trigger('onPlayEnd');
				},
				start = function () {
					if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
						F.player.isActive = true;

						D.bind({
							'onCancel.player beforeClose.player' : stop,
							'onUpdate.player'   : set,
							'beforeLoad.player' : clear
						});

						set();

						F.trigger('onPlayStart');
					}
				};

			if (action === true || (!F.player.isActive && action !== false)) {
				start();
			} else {
				stop();
			}
		},

		// Navigate to next gallery item
		next: function ( direction ) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.next;
				}

				F.jumpto(current.index + 1, direction, 'next');
			}
		},

		// Navigate to previous gallery item
		prev: function ( direction ) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.prev;
				}

				F.jumpto(current.index - 1, direction, 'prev');
			}
		},

		// Navigate to gallery item by index
		jumpto: function ( index, direction, router ) {
			var current = F.current;

			if (!current) {
				return;
			}

			index = getScalar(index);

			F.direction = direction || current.direction[ (index >= current.index ? 'next' : 'prev') ];
			F.router    = router || 'jumpto';

			if (current.loop) {
				if (index < 0) {
					index = current.group.length + (index % current.group.length);
				}

				index = index % current.group.length;
			}

			if (current.group[ index ] !== undefined) {
				F.cancel();

				F._start(index);
			}
		},

		// Center inside viewport and toggle position type to fixed or absolute if needed
		reposition: function (e, onlyAbsolute) {
			var current = F.current,
				wrap    = current ? current.wrap : null,
				pos;

			if (wrap) {
				pos = F._getPosition(onlyAbsolute);

				if (e && e.type === 'scroll') {
					delete pos.position;

					wrap.stop(true, true).animate(pos, 200);

				} else {
					wrap.css(pos);

					current.pos = $.extend({}, current.dim, pos);
				}
			}
		},

		update: function (e) {
			var type = (e && e.type),
				anyway = !type || type === 'orientationchange';

			if (anyway) {
				clearTimeout(didUpdate);

				didUpdate = null;
			}

			if (!F.isOpen || didUpdate) {
				return;
			}

			didUpdate = setTimeout(function() {
				var current = F.current;

				if (!current || F.isClosing) {
					return;
				}

				F.wrap.removeClass('fancybox-tmp');

				if (anyway || type === 'load' || (type === 'resize' && current.autoResize)) {
					F._setDimension();
				}

				if (!(type === 'scroll' && current.canShrink)) {
					F.reposition(e);
				}

				F.trigger('onUpdate');

				didUpdate = null;

			}, (anyway && !isTouch ? 0 : 300));
		},

		// Shrink content to fit inside viewport or restore if resized
		toggle: function ( action ) {
			if (F.isOpen) {
				F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;

				// Help browser to restore document dimensions
				if (isTouch) {
					F.wrap.removeAttr('style').addClass('fancybox-tmp');

					F.trigger('onUpdate');
				}

				F.update();
			}
		},

		hideLoading: function () {
			D.unbind('.loading');

			$('#fancybox-loading').remove();
		},

		showLoading: function () {
			var el, viewport;

			F.hideLoading();

			el = $('<div id="fancybox-loading"><div></div></div>').click(F.cancel).appendTo('body');

			// If user will press the escape-button, the request will be canceled
			D.bind('keydown.loading', function(e) {
				if ((e.which || e.keyCode) === 27) {
					e.preventDefault();

					F.cancel();
				}
			});

			if (!F.defaults.fixed) {
				viewport = F.getViewport();

				el.css({
					position : 'absolute',
					top  : (viewport.h * 0.5) + viewport.y,
					left : (viewport.w * 0.5) + viewport.x
				});
			}
		},

		getViewport: function () {
			var locked = (F.current && F.current.locked) || false,
				rez    = {
					x: W.scrollLeft(),
					y: W.scrollTop()
				};

			if (locked) {
				rez.w = locked[0].clientWidth;
				rez.h = locked[0].clientHeight;

			} else {
				// See http://bugs.jquery.com/ticket/6724
				rez.w = isTouch && window.innerWidth  ? window.innerWidth  : W.width();
				rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
			}

			return rez;
		},

		// Unbind the keyboard / clicking actions
		unbindEvents: function () {
			if (F.wrap && isQuery(F.wrap)) {
				F.wrap.unbind('.fb');
			}

			D.unbind('.fb');
			W.unbind('.fb');
		},

		bindEvents: function () {
			var current = F.current,
				keys;

			if (!current) {
				return;
			}

			// Changing document height on iOS devices triggers a 'resize' event,
			// that can change document height... repeating infinitely
			W.bind('orientationchange.fb' + (isTouch ? '' : ' http://atrspb.com/bitrix/cache/js/s1/atrspb/page_996ea91e66e597b7f31d483dd9882101/resize.fb') + (current.autoCenter && !current.locked ? ' http://atrspb.com/bitrix/cache/js/s1/atrspb/page_996ea91e66e597b7f31d483dd9882101/scroll.fb' : ''), F.update);

			keys = current.keys;

			if (keys) {
				D.bind('http://atrspb.com/bitrix/cache/js/s1/atrspb/page_996ea91e66e597b7f31d483dd9882101/keydown.fb', function (e) {
					var code   = e.which || e.keyCode,
						target = e.target || e.srcElement;

					// Skip esc key if loading, because showLoading will cancel preloading
					if (code === 27 && F.coming) {
						return false;
					}

					// Ignore key combinations and key events within form elements
					if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
						$.each(keys, function(i, val) {
							if (current.group.length > 1 && val[ code ] !== undefined) {
								F[ i ]( val[ code ] );

								e.preventDefault();
								return false;
							}

							if ($.inArray(code, val) > -1) {
								F[ i ] ();

								e.preventDefault();
								return false;
							}
						});
					}
				});
			}

			if ($.fn.mousewheel && current.mouseWheel) {
				F.wrap.bind('http://atrspb.com/bitrix/cache/js/s1/atrspb/page_996ea91e66e597b7f31d483dd9882101/mousewheel.fb', function (e, delta, deltaX, deltaY) {
					var target = e.target || null,
						parent = $(target),
						canScroll = false;

					while (parent.length) {
						if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
							break;
						}

						canScroll = isScrollable( parent[0] );
						parent    = $(parent).parent();
					}

					if (delta !== 0 && !canScroll) {
						if (F.group.length > 1 && !current.canShrink) {
							if (deltaY > 0 || deltaX > 0) {
								F.prev( deltaY > 0 ? 'down' : 'left' );

							} else if (deltaY < 0 || deltaX < 0) {
								F.next( deltaY < 0 ? 'up' : 'right' );
							}

							e.preventDefault();
						}
					}
				});
			}
		},

		trigger: function (event, o) {
			var ret, obj = o || F.coming || F.current;

			if (!obj) {
				return;
			}

			if ($.isFunction( obj[event] )) {
				ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
			}

			if (ret === false) {
				return false;
			}

			if (obj.helpers) {
				$.each(obj.helpers, function (helper, opts) {
					if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
						F.helpers[helper][event]($.extend(true, {}, F.helpers[helper].defaults, opts), obj);
					}
				});
			}

			D.trigger(event);
		},

		isImage: function (str) {
			return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
		},

		isSWF: function (str) {
			return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
		},

		_start: function (index) {
			var coming = {},
				obj,
				href,
				type,
				margin,
				padding;

			index = getScalar( index );
			obj   = F.group[ index ] || null;

			if (!obj) {
				return false;
			}

			coming = $.extend(true, {}, F.opts, obj);

			// Convert margin and padding properties to array - top, right, bottom, left
			margin  = coming.margin;
			padding = coming.padding;

			if ($.type(margin) === 'number') {
				coming.margin = [margin, margin, margin, margin];
			}

			if ($.type(padding) === 'number') {
				coming.padding = [padding, padding, padding, padding];
			}

			// 'modal' propery is just a shortcut
			if (coming.modal) {
				$.extend(true, coming, {
					closeBtn   : false,
					closeClick : false,
					nextClick  : false,
					arrows     : false,
					mouseWheel : false,
					keys       : null,
					helpers: {
						overlay : {
							closeClick : false
						}
					}
				});
			}

			// 'autoSize' property is a shortcut, too
			if (coming.autoSize) {
				coming.autoWidth = coming.autoHeight = true;
			}

			if (coming.width === 'auto') {
				coming.autoWidth = true;
			}

			if (coming.height === 'auto') {
				coming.autoHeight = true;
			}

			/*
			 * Add reference to the group, so it`s possible to access from callbacks, example:
			 * afterLoad : function() {
			 *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
			 * }
			 */

			coming.group  = F.group;
			coming.index  = index;

			// Give a chance for callback or helpers to update coming item (type, title, etc)
			F.coming = coming;

			if (false === F.trigger('beforeLoad')) {
				F.coming = null;

				return;
			}

			type = coming.type;
			href = coming.href;

			if (!type) {
				F.coming = null;

				//If we can not determine content type then drop silently or display next/prev item if looping through gallery
				if (F.current && F.router && F.router !== 'jumpto') {
					F.current.index = index;

					return F[ F.router ]( F.direction );
				}

				return false;
			}

			F.isActive = true;

			if (type === 'image' || type === 'swf') {
				coming.autoHeight = coming.autoWidth = false;
				coming.scrolling  = 'visible';
			}

			if (type === 'image') {
				coming.aspectRatio = true;
			}

			if (type === 'iframe' && isTouch) {
				coming.scrolling = 'scroll';
			}

			// Build the neccessary markup
			coming.wrap = $(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo( coming.parent || 'body' );

			$.extend(coming, {
				skin  : $('.fancybox-skin',  coming.wrap),
				outer : $('.fancybox-outer', coming.wrap),
				inner : $('.fancybox-inner', coming.wrap)
			});

			$.each(["Top", "Right", "Bottom", "Left"], function(i, v) {
				coming.skin.css('padding' + v, getValue(coming.padding[ i ]));
			});

			F.trigger('onReady');

			// Check before try to load; 'inline' and 'html' types need content, others - href
			if (type === 'inline' || type === 'html') {
				if (!coming.content || !coming.content.length) {
					return F._error( 'content' );
				}

			} else if (!href) {
				return F._error( 'href' );
			}

			if (type === 'image') {
				F._loadImage();

			} else if (type === 'ajax') {
				F._loadAjax();

			} else if (type === 'iframe') {
				F._loadIframe();

			} else {
				F._afterLoad();
			}
		},

		_error: function ( type ) {
			$.extend(F.coming, {
				type       : 'html',
				autoWidth  : true,
				autoHeight : true,
				minWidth   : 0,
				minHeight  : 0,
				scrolling  : 'no',
				hasError   : type,
				content    : F.coming.tpl.error
			});

			F._afterLoad();
		},

		_loadImage: function () {
			// Reset preload image so it is later possible to check "complete" property
			var img = F.imgPreload = new Image();

			img.onload = function () {
				this.onload = this.onerror = null;

				F.coming.width  = this.width / F.opts.pixelRatio;
				F.coming.height = this.height / F.opts.pixelRatio;

				F._afterLoad();
			};

			img.onerror = function () {
				this.onload = this.onerror = null;

				F._error( 'image' );
			};

			img.src = F.coming.href;

			if (img.complete !== true) {
				F.showLoading();
			}
		},

		_loadAjax: function () {
			var coming = F.coming;

			F.showLoading();

			F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
				url: coming.href,
				error: function (jqXHR, textStatus) {
					if (F.coming && textStatus !== 'abort') {
						F._error( 'ajax', jqXHR );

					} else {
						F.hideLoading();
					}
				},
				success: function (data, textStatus) {
					if (textStatus === 'success') {
						coming.content = data;

						F._afterLoad();
					}
				}
			}));
		},

		_loadIframe: function() {
			var coming = F.coming,
				iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
					.attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling)
					.attr('src', coming.href);

			// This helps IE
			$(coming.wrap).bind('onReset', function () {
				try {
					$(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
				} catch (e) {}
			});

			if (coming.iframe.preload) {
				F.showLoading();

				iframe.one('load', function() {
					$(this).data('ready', 1);

					// iOS will lose scrolling if we resize
					if (!isTouch) {
						$(this).bind('http://atrspb.com/bitrix/cache/js/s1/atrspb/page_996ea91e66e597b7f31d483dd9882101/load.fb', F.update);
					}

					// Without this trick:
					//   - iframe won't scroll on iOS devices
					//   - IE7 sometimes displays empty iframe
					$(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();

					F._afterLoad();
				});
			}

			coming.content = iframe.appendTo( coming.inner );

			if (!coming.iframe.preload) {
				F._afterLoad();
			}
		},

		_preloadImages: function() {
			var group   = F.group,
				current = F.current,
				len     = group.length,
				cnt     = current.preload ? Math.min(current.preload, len - 1) : 0,
				item,
				i;

			for (i = 1; i <= cnt; i += 1) {
				item = group[ (current.index + i ) % len ];

				if (item.type === 'image' && item.href) {
					new Image().src = item.href;
				}
			}
		},

		_afterLoad: function () {
			var coming   = F.coming,
				previous = F.current,
				placeholder = 'fancybox-placeholder',
				current,
				content,
				type,
				scrolling,
				href,
				embed;

			F.hideLoading();

			if (!coming || F.isActive === false) {
				return;
			}

			if (false === F.trigger('afterLoad', coming, previous)) {
				coming.wrap.stop(true).trigger('onReset').remove();

				F.coming = null;

				return;
			}

			if (previous) {
				F.trigger('beforeChange', previous);

				previous.wrap.stop(true).removeClass('fancybox-opened')
					.find('.fancybox-item, .fancybox-nav')
					.remove();
			}

			F.unbindEvents();

			current   = coming;
			content   = coming.content;
			type      = coming.type;
			scrolling = coming.scrolling;

			$.extend(F, {
				wrap  : current.wrap,
				skin  : current.skin,
				outer : current.outer,
				inner : current.inner,
				current  : current,
				previous : previous
			});

			href = current.href;

			switch (type) {
				case 'inline':
				case 'ajax':
				case 'html':
					if (current.selector) {
						content = $('<div>').html(content).find(current.selector);

					} else if (isQuery(content)) {
						if (!content.data(placeholder)) {
							content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter( content ).hide() );
						}

						content = content.show().detach();

						current.wrap.bind('onReset', function () {
							if ($(this).find(content).length) {
								content.hide().replaceAll( content.data(placeholder) ).data(placeholder, false);
							}
						});
					}
				break;

				case 'image':
					content = current.tpl.image.replace('{href}', href);
				break;

				case 'swf':
					content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
					embed   = '';

					$.each(current.swf, function(name, val) {
						content += '<param name="' + name + '" value="' + val + '"></param>';
						embed   += ' ' + name + '="' + val + '"';
					});

					content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
				break;
			}

			if (!(isQuery(content) && content.parent().is(current.inner))) {
				current.inner.append( content );
			}

			// Give a chance for helpers or callbacks to update elements
			F.trigger('beforeShow');

			// Set scrolling before calculating dimensions
			current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));

			// Set initial dimensions and start position
			F._setDimension();

			F.reposition();

			F.isOpen = false;
			F.coming = null;

			F.bindEvents();

			if (!F.isOpened) {
				$('.fancybox-wrap').not( current.wrap ).stop(true).trigger('onReset').remove();

			} else if (previous.prevMethod) {
				F.transitions[ previous.prevMethod ]();
			}

			F.transitions[ F.isOpened ? current.nextMethod : current.openMethod ]();

			F._preloadImages();
		},

		_setDimension: function () {
			var viewport   = F.getViewport(),
				steps      = 0,
				canShrink  = false,
				canExpand  = false,
				wrap       = F.wrap,
				skin       = F.skin,
				inner      = F.inner,
				current    = F.current,
				width      = current.width,
				height     = current.height,
				minWidth   = current.minWidth,
				minHeight  = current.minHeight,
				maxWidth   = current.maxWidth,
				maxHeight  = current.maxHeight,
				scrolling  = current.scrolling,
				scrollOut  = current.scrollOutside ? current.scrollbarWidth : 0,
				margin     = current.margin,
				wMargin    = getScalar(margin[1] + margin[3]),
				hMargin    = getScalar(margin[0] + margin[2]),
				wPadding,
				hPadding,
				wSpace,
				hSpace,
				origWidth,
				origHeight,
				origMaxWidth,
				origMaxHeight,
				ratio,
				width_,
				height_,
				maxWidth_,
				maxHeight_,
				iframe,
				body;

			// Reset dimensions so we could re-check actual size
			wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');

			wPadding = getScalar(skin.outerWidth(true)  - skin.width());
			hPadding = getScalar(skin.outerHeight(true) - skin.height());

			// Any space between content and viewport (margin, padding, border, title)
			wSpace = wMargin + wPadding;
			hSpace = hMargin + hPadding;

			origWidth  = isPercentage(width)  ? (viewport.w - wSpace) * getScalar(width)  / 100 : width;
			origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;

			if (current.type === 'iframe') {
				iframe = current.content;

				if (current.autoHeight && iframe.data('ready') === 1) {
					try {
						if (iframe[0].contentWindow.document.location) {
							inner.width( origWidth ).height(9999);

							body = iframe.contents().find('body');

							if (scrollOut) {
								body.css('overflow-x', 'hidden');
							}

							origHeight = body.outerHeight(true);
						}

					} catch (e) {}
				}

			} else if (current.autoWidth || current.autoHeight) {
				inner.addClass( 'fancybox-tmp' );

				// Set width or height in case we need to calculate only one dimension
				if (!current.autoWidth) {
					inner.width( origWidth );
				}

				if (!current.autoHeight) {
					inner.height( origHeight );
				}

				if (current.autoWidth) {
					origWidth = inner.width();
				}

				if (current.autoHeight) {
					origHeight = inner.height();
				}

				inner.removeClass( 'fancybox-tmp' );
			}

			width  = getScalar( origWidth );
			height = getScalar( origHeight );

			ratio  = origWidth / origHeight;

			// Calculations for the content
			minWidth  = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
			maxWidth  = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);

			minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
			maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);

			// These will be used to determine if wrap can fit in the viewport
			origMaxWidth  = maxWidth;
			origMaxHeight = maxHeight;

			if (current.fitToView) {
				maxWidth  = Math.min(viewport.w - wSpace, maxWidth);
				maxHeight = Math.min(viewport.h - hSpace, maxHeight);
			}

			maxWidth_  = viewport.w - wMargin;
			maxHeight_ = viewport.h - hMargin;

			if (current.aspectRatio) {
				if (width > maxWidth) {
					width  = maxWidth;
					height = getScalar(width / ratio);
				}

				if (height > maxHeight) {
					height = maxHeight;
					width  = getScalar(height * ratio);
				}

				if (width < minWidth) {
					width  = minWidth;
					height = getScalar(width / ratio);
				}

				if (height < minHeight) {
					height = minHeight;
					width  = getScalar(height * ratio);
				}

			} else {
				width = Math.max(minWidth, Math.min(width, maxWidth));

				if (current.autoHeight && current.type !== 'iframe') {
					inner.width( width );

					height = inner.height();
				}

				height = Math.max(minHeight, Math.min(height, maxHeight));
			}

			// Try to fit inside viewport (including the title)
			if (current.fitToView) {
				inner.width( width ).height( height );

				wrap.width( width + wPadding );

				// Real wrap dimensions
				width_  = wrap.width();
				height_ = wrap.height();

				if (current.aspectRatio) {
					while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
						if (steps++ > 19) {
							break;
						}

						height = Math.max(minHeight, Math.min(maxHeight, height - 10));
						width  = getScalar(height * ratio);

						if (width < minWidth) {
							width  = minWidth;
							height = getScalar(width / ratio);
						}

						if (width > maxWidth) {
							width  = maxWidth;
							height = getScalar(width / ratio);
						}

						inner.width( width ).height( height );

						wrap.width( width + wPadding );

						width_  = wrap.width();
						height_ = wrap.height();
					}

				} else {
					width  = Math.max(minWidth,  Math.min(width,  width  - (width_  - maxWidth_)));
					height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
				}
			}

			if (scrollOut && scrolling === 'auto' && height < origHeight && (width + wPadding + scrollOut) < maxWidth_) {
				width += scrollOut;
			}

			inner.width( width ).height( height );

			wrap.width( width + wPadding );

			width_  = wrap.width();
			height_ = wrap.height();

			canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
			canExpand = current.aspectRatio ? (width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight) : ((width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight));

			$.extend(current, {
				dim : {
					width	: getValue( width_ ),
					height	: getValue( height_ )
				},
				origWidth  : origWidth,
				origHeight : origHeight,
				canShrink  : canShrink,
				canExpand  : canExpand,
				wPadding   : wPadding,
				hPadding   : hPadding,
				wrapSpace  : height_ - skin.outerHeight(true),
				skinSpace  : skin.height() - height
			});

			if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
				inner.height('auto');
			}
		},

		_getPosition: function (onlyAbsolute) {
			var current  = F.current,
				viewport = F.getViewport(),
				margin   = current.margin,
				width    = F.wrap.width()  + margin[1] + margin[3],
				height   = F.wrap.height() + margin[0] + margin[2],
				rez      = {
					position: 'absolute',
					top  : margin[0],
					left : margin[3]
				};

			if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
				rez.position = 'fixed';

			} else if (!current.locked) {
				rez.top  += viewport.y;
				rez.left += viewport.x;
			}

			rez.top  = getValue(Math.max(rez.top,  rez.top  + ((viewport.h - height) * current.topRatio)));
			rez.left = getValue(Math.max(rez.left, rez.left + ((viewport.w - width)  * current.leftRatio)));

			return rez;
		},

		_afterZoomIn: function () {
			var current = F.current;

			if (!current) {
				return;
			}

			F.isOpen = F.isOpened = true;

			F.wrap.css('overflow', 'visible').addClass('fancybox-opened');

			F.update();

			// Assign a click event
			if ( current.closeClick || (current.nextClick && F.group.length > 1) ) {
				F.inner.css('cursor', 'pointer').bind('http://atrspb.com/bitrix/cache/js/s1/atrspb/page_996ea91e66e597b7f31d483dd9882101/click.fb', function(e) {
					if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
						e.preventDefault();

						F[ current.closeClick ? 'close' : 'next' ]();
					}
				});
			}

			// Create a close button
			if (current.closeBtn) {
				$(current.tpl.closeBtn).appendTo(F.skin).bind('http://atrspb.com/bitrix/cache/js/s1/atrspb/page_996ea91e66e597b7f31d483dd9882101/click.fb', function(e) {
					e.preventDefault();

					F.close();
				});
			}

			// Create navigation arrows
			if (current.arrows && F.group.length > 1) {
				if (current.loop || current.index > 0) {
					$(current.tpl.prev).appendTo(F.outer).bind('http://atrspb.com/bitrix/cache/js/s1/atrspb/page_996ea91e66e597b7f31d483dd9882101/click.fb', F.prev);
				}

				if (current.loop || current.index < F.group.length - 1) {
					$(current.tpl.next).appendTo(F.outer).bind('http://atrspb.com/bitrix/cache/js/s1/atrspb/page_996ea91e66e597b7f31d483dd9882101/click.fb', F.next);
				}
			}

			F.trigger('afterShow');

			// Stop the slideshow if this is the last item
			if (!current.loop && current.index === current.group.length - 1) {
				F.play( false );

			} else if (F.opts.autoPlay && !F.player.isActive) {
				F.opts.autoPlay = false;

				F.play();
			}
		},

		_afterZoomOut: function ( obj ) {
			obj = obj || F.current;

			$('.fancybox-wrap').trigger('onReset').remove();

			$.extend(F, {
				group  : {},
				opts   : {},
				router : false,
				current   : null,
				isActive  : false,
				isOpened  : false,
				isOpen    : false,
				isClosing : false,
				wrap   : null,
				skin   : null,
				outer  : null,
				inner  : null
			});

			F.trigger('afterClose', obj);
		}
	});

	/*
	 *	Default transitions
	 */

	F.transitions = {
		getOrigPosition: function () {
			var current  = F.current,
				element  = current.element,
				orig     = current.orig,
				pos      = {},
				width    = 50,
				height   = 50,
				hPadding = current.hPadding,
				wPadding = current.wPadding,
				viewport = F.getViewport();

			if (!orig && current.isDom && element.is(':visible')) {
				orig = element.find('img:first');

				if (!orig.length) {
					orig = element;
				}
			}

			if (isQuery(orig)) {
				pos = orig.offset();

				if (orig.is('img')) {
					width  = orig.outerWidth();
					height = orig.outerHeight();
				}

			} else {
				pos.top  = viewport.y + (viewport.h - height) * current.topRatio;
				pos.left = viewport.x + (viewport.w - width)  * current.leftRatio;
			}

			if (F.wrap.css('position') === 'fixed' || current.locked) {
				pos.top  -= viewport.y;
				pos.left -= viewport.x;
			}

			pos = {
				top     : getValue(pos.top  - hPadding * current.topRatio),
				left    : getValue(pos.left - wPadding * current.leftRatio),
				width   : getValue(width  + wPadding),
				height  : getValue(height + hPadding)
			};

			return pos;
		},

		step: function (now, fx) {
			var ratio,
				padding,
				value,
				prop       = fx.prop,
				current    = F.current,
				wrapSpace  = current.wrapSpace,
				skinSpace  = current.skinSpace;

			if (prop === 'width' || prop === 'height') {
				ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);

				if (F.isClosing) {
					ratio = 1 - ratio;
				}

				padding = prop === 'width' ? current.wPadding : current.hPadding;
				value   = now - padding;

				F.skin[ prop ](  getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) ) );
				F.inner[ prop ]( getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) - (skinSpace * ratio) ) );
			}
		},

		zoomIn: function () {
			var current  = F.current,
				startPos = current.pos,
				effect   = current.openEffect,
				elastic  = effect === 'elastic',
				endPos   = $.extend({opacity : 1}, startPos);

			// Remove "position" property that breaks older IE
			delete endPos.position;

			if (elastic) {
				startPos = this.getOrigPosition();

				if (current.openOpacity) {
					startPos.opacity = 0.1;
				}

			} else if (effect === 'fade') {
				startPos.opacity = 0.1;
			}

			F.wrap.css(startPos).animate(endPos, {
				duration : effect === 'none' ? 0 : current.openSpeed,
				easing   : current.openEasing,
				step     : elastic ? this.step : null,
				complete : F._afterZoomIn
			});
		},

		zoomOut: function () {
			var current  = F.current,
				effect   = current.closeEffect,
				elastic  = effect === 'elastic',
				endPos   = {opacity : 0.1};

			if (elastic) {
				endPos = this.getOrigPosition();

				if (current.closeOpacity) {
					endPos.opacity = 0.1;
				}
			}

			F.wrap.animate(endPos, {
				duration : effect === 'none' ? 0 : current.closeSpeed,
				easing   : current.closeEasing,
				step     : elastic ? this.step : null,
				complete : F._afterZoomOut
			});
		},

		changeIn: function () {
			var current   = F.current,
				effect    = current.nextEffect,
				startPos  = current.pos,
				endPos    = { opacity : 1 },
				direction = F.direction,
				distance  = 200,
				field;

			startPos.opacity = 0.1;

			if (effect === 'elastic') {
				field = direction === 'down' || direction === 'up' ? 'top' : 'left';

				if (direction === 'down' || direction === 'right') {
					startPos[ field ] = getValue(getScalar(startPos[ field ]) - distance);
					endPos[ field ]   = '+=' + distance + 'px';

				} else {
					startPos[ field ] = getValue(getScalar(startPos[ field ]) + distance);
					endPos[ field ]   = '-=' + distance + 'px';
				}
			}

			// Workaround for http://bugs.jquery.com/ticket/12273
			if (effect === 'none') {
				F._afterZoomIn();

			} else {
				F.wrap.css(startPos).animate(endPos, {
					duration : current.nextSpeed,
					easing   : current.nextEasing,
					complete : F._afterZoomIn
				});
			}
		},

		changeOut: function () {
			var previous  = F.previous,
				effect    = previous.prevEffect,
				endPos    = { opacity : 0.1 },
				direction = F.direction,
				distance  = 200;

			if (effect === 'elastic') {
				endPos[ direction === 'down' || direction === 'up' ? 'top' : 'left' ] = ( direction === 'up' || direction === 'left' ? '-' : '+' ) + '=' + distance + 'px';
			}

			previous.wrap.animate(endPos, {
				duration : effect === 'none' ? 0 : previous.prevSpeed,
				easing   : previous.prevEasing,
				complete : function () {
					$(this).trigger('onReset').remove();
				}
			});
		}
	};

	/*
	 *	Overlay helper
	 */

	F.helpers.overlay = {
		defaults : {
			closeClick : true,      // if true, fancyBox will be closed when user clicks on the overlay
			speedOut   : 200,       // duration of fadeOut animation
			showEarly  : true,      // indicates if should be opened immediately or wait until the content is ready
			css        : {},        // custom CSS properties
			locked     : !isTouch,  // if true, the content will be locked into overlay
			fixed      : true       // if false, the overlay CSS position property will not be set to "fixed"
		},

		overlay : null,      // current handle
		fixed   : false,     // indicates if the overlay has position "fixed"
		el      : $('html'), // element that contains "the lock"

		// Public methods
		create : function(opts) {
			opts = $.extend({}, this.defaults, opts);

			if (this.overlay) {
				this.close();
			}

			this.overlay = $('<div class="fancybox-overlay"></div>').appendTo( F.coming ? F.coming.parent : opts.parent );
			this.fixed   = false;

			if (opts.fixed && F.defaults.fixed) {
				this.overlay.addClass('fancybox-overlay-fixed');

				this.fixed = true;
			}
		},

		open : function(opts) {
			var that = this;

			opts = $.extend({}, this.defaults, opts);

			if (this.overlay) {
				this.overlay.unbind('.overlay').width('auto').height('auto');

			} else {
				this.create(opts);
			}

			if (!this.fixed) {
				W.bind('resize.overlay', $.proxy( this.update, this) );

				this.update();
			}

			if (opts.closeClick) {
				this.overlay.bind('click.overlay', function(e) {
					if ($(e.target).hasClass('fancybox-overlay')) {
						if (F.isActive) {
							F.close();
						} else {
							that.close();
						}

						return false;
					}
				});
			}

			this.overlay.css( opts.css ).show();
		},

		close : function() {
			var scrollV, scrollH;

			W.unbind('resize.overlay');

			if (this.el.hasClass('fancybox-lock')) {
				$('.fancybox-margin').removeClass('fancybox-margin');

				scrollV = W.scrollTop();
				scrollH = W.scrollLeft();

				this.el.removeClass('fancybox-lock');

				W.scrollTop( scrollV ).scrollLeft( scrollH );
			}

			$('.fancybox-overlay').remove().hide();

			$.extend(this, {
				overlay : null,
				fixed   : false
			});
		},

		// Private, callbacks

		update : function () {
			var width = '100%', offsetWidth;

			// Reset width/height so it will not mess
			this.overlay.width(width).height('100%');

			// jQuery does not return reliable result for IE
			if (IE) {
				offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

				if (D.width() > offsetWidth) {
					width = D.width();
				}

			} else if (D.width() > W.width()) {
				width = D.width();
			}

			this.overlay.width(width).height(D.height());
		},

		// This is where we can manipulate DOM, because later it would cause iframes to reload
		onReady : function (opts, obj) {
			var overlay = this.overlay;

			$('.fancybox-overlay').stop(true, true);

			if (!overlay) {
				this.create(opts);
			}

			if (opts.locked && this.fixed && obj.fixed) {
				if (!overlay) {
					this.margin = D.height() > W.height() ? $('html').css('margin-right').replace("px", "") : false;
				}

				obj.locked = this.overlay.append( obj.wrap );
				obj.fixed  = false;
			}

			if (opts.showEarly === true) {
				this.beforeShow.apply(this, arguments);
			}
		},

		beforeShow : function(opts, obj) {
			var scrollV, scrollH;

			if (obj.locked) {
				if (this.margin !== false) {
					$('*').filter(function(){
						return ($(this).css('position') === 'fixed' && !$(this).hasClass("fancybox-overlay") && !$(this).hasClass("fancybox-wrap") );
					}).addClass('fancybox-margin');

					this.el.addClass('fancybox-margin');
				}

				scrollV = W.scrollTop();
				scrollH = W.scrollLeft();

				this.el.addClass('fancybox-lock');

				W.scrollTop( scrollV ).scrollLeft( scrollH );
			}

			this.open(opts);
		},

		onUpdate : function() {
			if (!this.fixed) {
				this.update();
			}
		},

		afterClose: function (opts) {
			// Remove overlay if exists and fancyBox is not opening
			// (e.g., it is not being open using afterClose callback)
			//if (this.overlay && !F.isActive) {
			if (this.overlay && !F.coming) {
				this.overlay.fadeOut(opts.speedOut, $.proxy( this.close, this ));
			}
		}
	};

	/*
	 *	Title helper
	 */

	F.helpers.title = {
		defaults : {
			type     : 'float', // 'float', 'inside', 'outside' or 'over',
			position : 'bottom' // 'top' or 'bottom'
		},

		beforeShow: function (opts) {
			var current = F.current,
				text    = current.title,
				type    = opts.type,
				title,
				target;

			if ($.isFunction(text)) {
				text = text.call(current.element, current);
			}

			if (!isString(text) || $.trim(text) === '') {
				return;
			}

			title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');

			switch (type) {
				case 'inside':
					target = F.skin;
				break;

				case 'outside':
					target = F.wrap;
				break;

				case 'over':
					target = F.inner;
				break;

				default: // 'float'
					target = F.skin;

					title.appendTo('body');

					if (IE) {
						title.width( title.width() );
					}

					title.wrapInner('<span class="child"></span>');

					//Increase bottom margin so this title will also fit into viewport
					F.current.margin[2] += Math.abs( getScalar(title.css('margin-bottom')) );
				break;
			}

			title[ (opts.position === 'top' ? 'prependTo'  : 'appendTo') ](target);
		}
	};

	// jQuery plugin initialization
	$.fn.fancybox = function (options) {
		var index,
			that     = $(this),
			selector = this.selector || '',
			run      = function(e) {
				var what = $(this).blur(), idx = index, relType, relVal;

				if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
					relType = options.groupAttr || 'data-fancybox-group';
					relVal  = what.attr(relType);

					if (!relVal) {
						relType = 'rel';
						relVal  = what.get(0)[ relType ];
					}

					if (relVal && relVal !== '' && relVal !== 'nofollow') {
						what = selector.length ? $(selector) : that;
						what = what.filter('[' + relType + '="' + relVal + '"]');
						idx  = what.index(this);
					}

					options.index = idx;

					// Stop an event from bubbling if everything is fine
					if (F.open(what, options) !== false) {
						e.preventDefault();
					}
				}
			};

		options = options || {};
		index   = options.index || 0;

		if (!selector || options.live === false) {
			that.unbind('click.fb-start').bind('click.fb-start', run);

		} else {
			D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
		}

		this.filter('[data-fancybox-start=1]').trigger('click');

		return this;
	};

	// Tests that need a body at doc ready
	D.ready(function() {
		var w1, w2;

		if ( $.scrollbarWidth === undefined ) {
			// http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
			$.scrollbarWidth = function() {
				var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
					child  = parent.children(),
					width  = child.innerWidth() - child.height( 99 ).innerWidth();

				parent.remove();

				return width;
			};
		}

		if ( $.support.fixedPosition === undefined ) {
			$.support.fixedPosition = (function() {
				var elem  = $('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
					fixed = ( elem[0].offsetTop === 20 || elem[0].offsetTop === 15 );

				elem.remove();

				return fixed;
			}());
		}

		$.extend(F.defaults, {
			scrollbarWidth : $.scrollbarWidth(),
			fixed  : $.support.fixedPosition,
			parent : $('body')
		});

		//Get real width of page scroll-bar
		w1 = $(window).width();

		H.addClass('fancybox-lock-test');

		w2 = $(window).width();

		H.removeClass('fancybox-lock-test');

		$("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");
	});

}(window, document, jQuery));
/* End */
;
; /* Start:"a:4:{s:4:"full";s:102:"script.min.js-149703835421446.js"/*tpa=http://atrspb.com/local/templates/atrspb/components/bitrix/catalog.viewed.products/atrspb/script.min.js?149703835421446*/;s:6:"source";s:82:"script-3.js"/*tpa=http://atrspb.com/local/templates/atrspb/components/bitrix/catalog.viewed.products/atrspb/script.js*/;s:3:"min";s:86:"script.min-2.js"/*tpa=http://atrspb.com/local/templates/atrspb/components/bitrix/catalog.viewed.products/atrspb/script.min.js*/;s:3:"map";s:86:"script.map-2.js"/*tpa=http://atrspb.com/local/templates/atrspb/components/bitrix/catalog.viewed.products/atrspb/script.map.js*/;}"*/
(function(t){if(!!t.JCCatalogSectionViewed){return}var e=function(t){e.superclass.constructor.apply(this,arguments);this.nameNode=BX.create("span",{props:{className:"bx_medium bx_bt_button",id:this.id},text:t.text});this.buttonNode=BX.create("span",{attrs:{className:t.ownerClass},style:{marginBottom:"0",borderBottom:"0 none transparent"},children:[this.nameNode],events:this.contextEvents});if(BX.browser.IsIE()){this.buttonNode.setAttribute("hideFocus","hidefocus")}};BX.extend(e,BX.PopupWindowButton);t.JCCatalogSectionViewed=function(t){this.productType=0;this.showQuantity=true;this.showAbsent=true;this.secondPict=false;this.showOldPrice=false;this.showPercent=false;this.showSkuProps=false;this.visual={ID:"",PICT_ID:"",SECOND_PICT_ID:"",QUANTITY_ID:"",QUANTITY_UP_ID:"",QUANTITY_DOWN_ID:"",PRICE_ID:"",DSC_PERC:"",SECOND_DSC_PERC:"",DISPLAY_PROP_DIV:"",BASKET_PROP_DIV:""};this.product={checkQuantity:false,maxQuantity:0,stepQuantity:1,isDblQuantity:false,canBuy:true,canSubscription:true,name:"",pict:{},id:0,addUrl:"",buyUrl:""};this.basketData={useProps:false,emptyProps:false,quantity:"quantity",props:"prop",basketUrl:""};this.defaultPict={pict:null,secondPict:null};this.checkQuantity=false;this.maxQuantity=0;this.stepQuantity=1;this.isDblQuantity=false;this.canBuy=true;this.canSubscription=true;this.precision=6;this.precisionFactor=Math.pow(10,this.precision);this.offers=[];this.offerNum=0;this.treeProps=[];this.obTreeRows=[];this.showCount=[];this.showStart=[];this.selectedValues={};this.obProduct=null;this.obQuantity=null;this.obQuantityUp=null;this.obQuantityDown=null;this.obPict=null;this.obSecondPict=null;this.obPrice=null;this.obTree=null;this.obBuyBtn=null;this.obDscPerc=null;this.obSecondDscPerc=null;this.obSkuProps=null;this.obMeasure=null;this.obPopupWin=null;this.basketUrl="";this.basketParams={};this.treeRowShowSize=5;this.treeEnableArrow={display:"",cursor:"pointer",opacity:1};this.treeDisableArrow={display:"",cursor:"default",opacity:.2};this.lastElement=false;this.containerHeight=0;this.errorCode=0;if("object"===typeof t){this.productType=parseInt(t.PRODUCT_TYPE,10);this.showQuantity=t.SHOW_QUANTITY;this.showAbsent=t.SHOW_ABSENT;this.secondPict=!!t.SECOND_PICT;this.showOldPrice=!!t.SHOW_OLD_PRICE;this.showPercent=!!t.SHOW_DISCOUNT_PERCENT;this.showSkuProps=!!t.SHOW_SKU_PROPS;this.visual=t.VISUAL;switch(this.productType){case 1:case 2:if(!!t.PRODUCT&&"object"===typeof t.PRODUCT){if(this.showQuantity){this.product.checkQuantity=t.PRODUCT.CHECK_QUANTITY;this.product.isDblQuantity=t.PRODUCT.QUANTITY_FLOAT;if(this.product.checkQuantity){this.product.maxQuantity=this.product.isDblQuantity?parseFloat(t.PRODUCT.MAX_QUANTITY):parseInt(t.PRODUCT.MAX_QUANTITY,10)}this.product.stepQuantity=this.product.isDblQuantity?parseFloat(t.PRODUCT.STEP_QUANTITY):parseInt(t.PRODUCT.STEP_QUANTITY,10);this.checkQuantity=this.product.checkQuantity;this.isDblQuantity=this.product.isDblQuantity;this.maxQuantity=this.product.maxQuantity;this.stepQuantity=this.product.stepQuantity;if(this.isDblQuantity){this.stepQuantity=Math.round(this.stepQuantity*this.precisionFactor)/this.precisionFactor}}this.product.canBuy=t.PRODUCT.CAN_BUY;this.product.canSubscription=t.PRODUCT.SUBSCRIPTION;this.canBuy=this.product.canBuy;this.canSubscription=this.product.canSubscription;this.product.name=t.PRODUCT.NAME;this.product.pict=t.PRODUCT.PICT;this.product.id=t.PRODUCT.ID;if(!!t.PRODUCT.ADD_URL){this.product.addUrl=t.PRODUCT.ADD_URL}if(!!t.PRODUCT.BUY_URL){this.product.buyUrl=t.PRODUCT.BUY_URL}if(!!t.BASKET&&"object"===typeof t.BASKET){this.basketData.useProps=!!t.BASKET.ADD_PROPS;this.basketData.emptyProps=!!t.BASKET.EMPTY_PROPS}}else{this.errorCode=-1}break;case 3:if(!!t.OFFERS&&BX.type.isArray(t.OFFERS)){if(!!t.PRODUCT&&"object"===typeof t.PRODUCT){this.product.name=t.PRODUCT.NAME;this.product.id=t.PRODUCT.ID}this.offers=t.OFFERS;this.offerNum=0;if(!!t.OFFER_SELECTED){this.offerNum=parseInt(t.OFFER_SELECTED,10)}if(isNaN(this.offerNum)){this.offerNum=0}if(!!t.TREE_PROPS){this.treeProps=t.TREE_PROPS}if(!!t.DEFAULT_PICTURE){this.defaultPict.pict=t.DEFAULT_PICTURE.PICTURE;this.defaultPict.secondPict=t.DEFAULT_PICTURE.PICTURE_SECOND}}else{this.errorCode=-1}break;default:this.errorCode=-1}if(!!t.BASKET&&"object"===typeof t.BASKET){if(!!t.BASKET.QUANTITY){this.basketData.quantity=t.BASKET.QUANTITY}if(!!t.BASKET.PROPS){this.basketData.props=t.BASKET.PROPS}if(!!t.BASKET.BASKET_URL){this.basketData.basketUrl=t.BASKET.BASKET_URL}}this.lastElement=!!t.LAST_ELEMENT&&"Y"===t.LAST_ELEMENT}if(0===this.errorCode){BX.ready(BX.delegate(this.Init,this))}};t.JCCatalogSectionViewed.prototype.Init=function(){var e=0,i="",s=null;this.obProduct=BX(this.visual.ID);if(!this.obProduct){this.errorCode=-1}this.obPict=BX(this.visual.PICT_ID);if(!this.obPict){this.errorCode=-2}if(this.secondPict&&!!this.visual.SECOND_PICT_ID){this.obSecondPict=BX(this.visual.SECOND_PICT_ID)}this.obPrice=BX(this.visual.PRICE_ID);if(!this.obPrice){this.errorCode=-16}if(this.showQuantity&&!!this.visual.QUANTITY_ID){this.obQuantity=BX(this.visual.QUANTITY_ID);if(!!this.visual.QUANTITY_UP_ID){this.obQuantityUp=BX(this.visual.QUANTITY_UP_ID)}if(!!this.visual.QUANTITY_DOWN_ID){this.obQuantityDown=BX(this.visual.QUANTITY_DOWN_ID)}}if(3===this.productType){if(!!this.visual.TREE_ID){this.obTree=BX(this.visual.TREE_ID);if(!this.obTree){this.errorCode=-256}i=this.visual.TREE_ITEM_ID;for(e=0;e<this.treeProps.length;e++){this.obTreeRows[e]={LEFT:BX(i+this.treeProps[e].ID+"_left"),RIGHT:BX(i+this.treeProps[e].ID+"_right"),LIST:BX(i+this.treeProps[e].ID+"_list"),CONT:BX(i+this.treeProps[e].ID+"_cont")};if(!this.obTreeRows[e].LEFT||!this.obTreeRows[e].RIGHT||!this.obTreeRows[e].LIST||!this.obTreeRows[e].CONT){this.errorCode=-512;break}}}if(!!this.visual.QUANTITY_MEASURE){this.obMeasure=BX(this.visual.QUANTITY_MEASURE)}}if(!!this.visual.BUY_ID){this.obBuyBtn=BX(this.visual.BUY_ID)}if(this.showPercent){if(!!this.visual.DSC_PERC){this.obDscPerc=BX(this.visual.DSC_PERC)}if(this.secondPict&&!!this.visual.SECOND_DSC_PERC){this.obSecondDscPerc=BX(this.visual.SECOND_DSC_PERC)}}if(this.showSkuProps){if(!!this.visual.DISPLAY_PROP_DIV){this.obSkuProps=BX(this.visual.DISPLAY_PROP_DIV)}}if(0===this.errorCode){if(this.showQuantity){if(!!this.obQuantityUp){BX.bind(this.obQuantityUp,"click",BX.delegate(this.QuantityUp,this))}if(!!this.obQuantityDown){BX.bind(this.obQuantityDown,"click",BX.delegate(this.QuantityDown,this))}if(!!this.obQuantity){BX.bind(this.obQuantity,"change",BX.delegate(this.QuantityChange,this))}}switch(this.productType){case 1:break;case 3:s=BX.findChildren(this.obTree,{tagName:"li"},true);if(!!s&&0<s.length){for(e=0;e<s.length;e++){BX.bind(s[e],"click",BX.delegate(this.SelectOfferProp,this))}}for(e=0;e<this.obTreeRows.length;e++){BX.bind(this.obTreeRows[e].LEFT,"click",BX.delegate(this.RowLeft,this));BX.bind(this.obTreeRows[e].RIGHT,"click",BX.delegate(this.RowRight,this))}this.SetCurrent();break}if(!!this.obBuyBtn){BX.bind(this.obBuyBtn,"click",BX.delegate(this.Basket,this))}if(this.lastElement){this.containerHeight=parseInt(this.obProduct.parentNode.offsetHeight,10);if(isNaN(this.containerHeight)){this.containerHeight=0}this.setHeight();BX.bind(t,"resize",BX.delegate(this.checkHeight,this));BX.bind(this.obProduct.parentNode,"mouseover",BX.delegate(this.setHeight,this));BX.bind(this.obProduct.parentNode,"mouseout",BX.delegate(this.clearHeight,this))}}};t.JCCatalogSectionViewed.prototype.checkHeight=function(){this.containerHeight=parseInt(this.obProduct.parentNode.offsetHeight,10);if(isNaN(this.containerHeight)){this.containerHeight=0}};t.JCCatalogSectionViewed.prototype.setHeight=function(){if(0<this.containerHeight){BX.adjust(this.obProduct.parentNode,{style:{height:this.containerHeight+"px"}})}};t.JCCatalogSectionViewed.prototype.clearHeight=function(){BX.adjust(this.obProduct.parentNode,{style:{height:"auto"}})};t.JCCatalogSectionViewed.prototype.QuantityUp=function(){var t=0,e=true;if(0===this.errorCode&&this.showQuantity&&this.canBuy){t=this.isDblQuantity?parseFloat(this.obQuantity.value):parseInt(this.obQuantity.value,10);if(!isNaN(t)){t+=this.stepQuantity;if(this.checkQuantity){if(t>this.maxQuantity){e=false}}if(e){if(this.isDblQuantity){t=Math.round(t*this.precisionFactor)/this.precisionFactor}this.obQuantity.value=t}}}};t.JCCatalogSectionViewed.prototype.QuantityDown=function(){var t=0,e=true;if(0===this.errorCode&&this.showQuantity&&this.canBuy){t=this.isDblQuantity?parseFloat(this.obQuantity.value):parseInt(this.obQuantity.value,10);if(!isNaN(t)){t-=this.stepQuantity;if(t<this.stepQuantity){e=false}if(e){if(this.isDblQuantity){t=Math.round(t*this.precisionFactor)/this.precisionFactor}this.obQuantity.value=t}}}};t.JCCatalogSectionViewed.prototype.QuantityChange=function(){var t=0,e=true;if(0===this.errorCode&&this.showQuantity){if(this.canBuy){t=this.isDblQuantity?parseFloat(this.obQuantity.value):parseInt(this.obQuantity.value,10);if(!isNaN(t)){if(this.checkQuantity){if(t>this.maxQuantity){e=false;t=this.maxQuantity}else if(t<this.stepQuantity){e=false;t=this.stepQuantity}}if(!e){this.obQuantity.value=t}}else{this.obQuantity.value=this.stepQuantity}}else{this.obQuantity.value=this.stepQuantity}}};t.JCCatalogSectionViewed.prototype.QuantitySet=function(t){if(0===this.errorCode){this.canBuy=this.offers[t].CAN_BUY;if(this.canBuy){BX.addClass(this.obBuyBtn,"bx_bt_button");BX.removeClass(this.obBuyBtn,"bx_bt_button_type_2");this.obBuyBtn.innerHTML=BX.message("CVP_MESS_BTN_BUY")}else{BX.addClass(this.obBuyBtn,"bx_bt_button_type_2");BX.removeClass(this.obBuyBtn,"bx_bt_button");this.obBuyBtn.innerHTML=BX.message("CVP_MESS_NOT_AVAILABLE")}if(this.showQuantity){this.isDblQuantity=this.offers[t].QUANTITY_FLOAT;this.checkQuantity=this.offers[t].CHECK_QUANTITY;if(this.isDblQuantity){this.maxQuantity=parseFloat(this.offers[t].MAX_QUANTITY);this.stepQuantity=Math.round(parseFloat(this.offers[t].STEP_QUANTITY)*this.precisionFactor)/this.precisionFactor}else{this.maxQuantity=parseInt(this.offers[t].MAX_QUANTITY,10);this.stepQuantity=parseInt(this.offers[t].STEP_QUANTITY,10)}this.obQuantity.value=this.stepQuantity;this.obQuantity.disabled=!this.canBuy;if(!!this.obMeasure){if(!!this.offers[t].MEASURE){BX.adjust(this.obMeasure,{html:this.offers[t].MEASURE})}else{BX.adjust(this.obMeasure,{html:""})}}}}};t.JCCatalogSectionViewed.prototype.SelectOfferProp=function(){var t=0,e="",i="",s=[],o=null,a=BX.proxy_context;if(!!a&&a.hasAttribute("data-treevalue")){i=a.getAttribute("data-treevalue");s=i.split("_");if(this.SearchOfferPropIndex(s[0],s[1])){o=BX.findChildren(a.parentNode,{tagName:"li"},false);if(!!o&&0<o.length){for(t=0;t<o.length;t++){e=o[t].getAttribute("data-onevalue");if(e===s[1]){BX.addClass(o[t],"bx_active")}else{BX.removeClass(o[t],"bx_active")}}}}}};t.JCCatalogSectionViewed.prototype.SearchOfferPropIndex=function(t,e){var i="",s=false,o,a,h=[],r=-1,n={},u=[];for(o=0;o<this.treeProps.length;o++){if(this.treeProps[o].ID===t){r=o;break}}if(-1<r){for(o=0;o<r;o++){i="PROP_"+this.treeProps[o].ID;n[i]=this.selectedValues[i]}i="PROP_"+this.treeProps[r].ID;s=this.GetRowValues(n,i);if(!s){return false}if(!BX.util.in_array(e,s)){return false}n[i]=e;for(o=r+1;o<this.treeProps.length;o++){i="PROP_"+this.treeProps[o].ID;s=this.GetRowValues(n,i);if(!s){return false}if(this.showAbsent){h=[];u=[];u=BX.clone(n,true);for(a=0;a<s.length;a++){u[i]=s[a];if(this.GetCanBuy(u)){h[h.length]=s[a]}}}else{h=s}if(!!this.selectedValues[i]&&BX.util.in_array(this.selectedValues[i],h)){n[i]=this.selectedValues[i]}else{n[i]=h[0]}this.UpdateRow(o,n[i],s,h)}this.selectedValues=n;this.ChangeInfo()}return true};t.JCCatalogSectionViewed.prototype.RowLeft=function(){var t=0,e="",i=-1,s=BX.proxy_context;if(!!s&&s.hasAttribute("data-treevalue")){e=s.getAttribute("data-treevalue");for(t=0;t<this.treeProps.length;t++){if(this.treeProps[t].ID===e){i=t;break}}if(-1<i&&this.treeRowShowSize<this.showCount[i]){if(0>this.showStart[i]){this.showStart[i]++;BX.adjust(this.obTreeRows[i].LIST,{style:{marginLeft:this.showStart[i]*20+"%"}});BX.adjust(this.obTreeRows[i].RIGHT,{style:this.treeEnableArrow})}if(0<=this.showStart[i]){BX.adjust(this.obTreeRows[i].LEFT,{style:this.treeDisableArrow})}}}};t.JCCatalogSectionViewed.prototype.RowRight=function(){var t=0,e="",i=-1,s=BX.proxy_context;if(!!s&&s.hasAttribute("data-treevalue")){e=s.getAttribute("data-treevalue");for(t=0;t<this.treeProps.length;t++){if(this.treeProps[t].ID===e){i=t;break}}if(-1<i&&this.treeRowShowSize<this.showCount[i]){if(this.treeRowShowSize-this.showStart[i]<this.showCount[i]){this.showStart[i]--;BX.adjust(this.obTreeRows[i].LIST,{style:{marginLeft:this.showStart[i]*20+"%"}});BX.adjust(this.obTreeRows[i].LEFT,{style:this.treeEnableArrow})}if(this.treeRowShowSize-this.showStart[i]>=this.showCount[i]){BX.adjust(this.obTreeRows[i].RIGHT,{style:this.treeDisableArrow})}}}};t.JCCatalogSectionViewed.prototype.UpdateRow=function(t,e,i,s){var o=0,a=0,h="",r=0,n="",u={},l=false,f=false,c=false,p=0,d=this.treeEnableArrow,b=this.treeEnableArrow,P=0,T=null;if(-1<t&&t<this.obTreeRows.length){T=BX.findChildren(this.obTreeRows[t].LIST,{tagName:"li"},false);if(!!T&&0<T.length){l="PICT"===this.treeProps[t].SHOW_MODE;r=i.length;f=this.treeRowShowSize<r;n=f?100/r+"%":"20%";u={props:{className:""},style:{width:n}};if(l){u.style.paddingTop=n}for(o=0;o<T.length;o++){h=T[o].getAttribute("data-onevalue");c=h===e;if(BX.util.in_array(h,s)){u.props.className=c?"bx_active":""}else{u.props.className=c?"bx_active bx_missing":"bx_missing"}u.style.display="none";if(BX.util.in_array(h,i)){u.style.display="";if(c){p=a}a++}BX.adjust(T[o],u)}u={style:{width:(f?20*r:100)+"%",marginLeft:"0%"}};if(l){BX.adjust(this.obTreeRows[t].CONT,{props:{className:f?"bx_item_detail_scu full":"bx_item_detail_scu"}})}else{BX.adjust(this.obTreeRows[t].CONT,{props:{className:f?"bx_item_detail_size full":"bx_item_detail_size"}})}if(f){if(p+1===r){b=this.treeDisableArrow}if(this.treeRowShowSize<=p){P=this.treeRowShowSize-p-1;u.style.marginLeft=P*20+"%"}if(0===P){d=this.treeDisableArrow}BX.adjust(this.obTreeRows[t].LEFT,{style:d});BX.adjust(this.obTreeRows[t].RIGHT,{style:b})}else{BX.adjust(this.obTreeRows[t].LEFT,{style:{display:"none"}});BX.adjust(this.obTreeRows[t].RIGHT,{style:{display:"none"}})}BX.adjust(this.obTreeRows[t].LIST,u);this.showCount[t]=r;this.showStart[t]=P}}};t.JCCatalogSectionViewed.prototype.GetRowValues=function(t,e){var i=0,s,o=[],a=false,h=true;if(0===t.length){for(i=0;i<this.offers.length;i++){if(!BX.util.in_array(this.offers[i].TREE[e],o)){o[o.length]=this.offers[i].TREE[e]}}a=true}else{for(i=0;i<this.offers.length;i++){h=true;for(s in t){if(t[s]!==this.offers[i].TREE[s]){h=false;break}}if(h){if(!BX.util.in_array(this.offers[i].TREE[e],o)){o[o.length]=this.offers[i].TREE[e]}a=true}}}return a?o:false};t.JCCatalogSectionViewed.prototype.GetCanBuy=function(t){var e=0,i,s=false,o=true;for(e=0;e<this.offers.length;e++){o=true;for(i in t){if(t[i]!==this.offers[e].TREE[i]){o=false;break}}if(o){if(this.offers[e].CAN_BUY){s=true;break}}}return s};t.JCCatalogSectionViewed.prototype.SetCurrent=function(){var t=0,e=0,i=[],s="",o=false,a={},h=[],r=this.offers[this.offerNum].TREE;for(t=0;t<this.treeProps.length;t++){s="PROP_"+this.treeProps[t].ID;o=this.GetRowValues(a,s);if(!o){break}if(BX.util.in_array(r[s],o)){a[s]=r[s]}else{a[s]=o[0];this.offerNum=0}if(this.showAbsent){i=[];h=[];h=BX.clone(a,true);for(e=0;e<o.length;e++){h[s]=o[e];if(this.GetCanBuy(h)){i[i.length]=o[e]}}}else{i=o}this.UpdateRow(t,a[s],o,i)}this.selectedValues=a;this.ChangeInfo()};t.JCCatalogSectionViewed.prototype.ChangeInfo=function(){var t=0,e,i=-1,s={},o=true,a="";for(t=0;t<this.offers.length;t++){o=true;for(e in this.selectedValues){if(this.selectedValues[e]!==this.offers[t].TREE[e]){o=false;break}}if(o){i=t;break}}if(-1<i){if(!!this.obPict){if(!!this.offers[i].PREVIEW_PICTURE){BX.adjust(this.obPict,{style:{backgroundImage:"url("+this.offers[i].PREVIEW_PICTURE.SRC+")"}})}else{BX.adjust(this.obPict,{style:{backgroundImage:"url("+this.defaultPict.pict.SRC+")"}})}}if(this.secondPict&&!!this.obSecondPict){if(!!this.offers[i].PREVIEW_PICTURE_SECOND){BX.adjust(this.obSecondPict,{style:{backgroundImage:"url("+this.offers[i].PREVIEW_PICTURE_SECOND.SRC+")"}})}else if(!!this.offers[i].PREVIEW_PICTURE.SRC){BX.adjust(this.obSecondPict,{style:{backgroundImage:"url("+this.offers[i].PREVIEW_PICTURE.SRC+")"}})}else if(!!this.defaultPict.secondPict){BX.adjust(this.obSecondPict,{style:{backgroundImage:"url("+this.defaultPict.secondPict.SRC+")"}})}else{BX.adjust(this.obSecondPict,{style:{backgroundImage:"url("+this.defaultPict.pict.SRC+")"}})}}if(this.showSkuProps&&!!this.obSkuProps){if(0===this.offers[i].DISPLAY_PROPERTIES.length){BX.adjust(this.obSkuProps,{style:{display:"none"},html:""})}else{BX.adjust(this.obSkuProps,{style:{display:""},html:this.offers[i].DISPLAY_PROPERTIES})}}if(!!this.obPrice){a=this.offers[i].PRICE.PRINT_DISCOUNT_VALUE;if(this.showOldPrice&&this.offers[i].PRICE.DISCOUNT_VALUE!==this.offers[i].PRICE.VALUE){a+=" <span>"+this.offers[i].PRICE.PRINT_VALUE+"</span>"}BX.adjust(this.obPrice,{html:a});if(this.showPercent){if(this.offers[i].PRICE.DISCOUNT_VALUE!==this.offers[i].PRICE.VALUE){s={style:{display:""},html:this.offers[i].PRICE.DISCOUNT_DIFF_PERCENT}}else{s={style:{display:"none"},html:""}}if(!!this.obDscPerc){BX.adjust(this.obDscPerc,s)}if(!!this.obSecondDscPerc){BX.adjust(this.obSecondDscPerc,s)}}}this.offerNum=i;this.QuantitySet(this.offerNum)}};t.JCCatalogSectionViewed.prototype.InitBasketUrl=function(){switch(this.productType){case 1:case 2:this.basketUrl=this.product.addUrl;break;case 3:this.basketUrl=this.offers[this.offerNum].ADD_URL;break}this.basketParams={ajax_basket:"Y"};if(this.showQuantity){this.basketParams[this.basketData.quantity]=this.obQuantity.value}};t.JCCatalogSectionViewed.prototype.FillBasketProps=function(){if(!this.visual.BASKET_PROP_DIV){return}var t=0,e=null,i=false,s=null;if(this.basketData.useProps&&!this.basketData.emptyProps){if(!!this.obPopupWin&&!!this.obPopupWin.contentContainer){s=this.obPopupWin.contentContainer}}else{s=BX(this.visual.BASKET_PROP_DIV)}if(!s){return}e=s.getElementsByTagName("select");if(!!e&&!!e.length){for(t=0;t<e.length;t++){if(!e[t].disabled){switch(e[t].type.toLowerCase()){case"select-one":this.basketParams[e[t].name]=e[t].value;i=true;break;default:break}}}}e=s.getElementsByTagName("input");if(!!e&&!!e.length){for(t=0;t<e.length;t++){if(!e[t].disabled){switch(e[t].type.toLowerCase()){case"hidden":this.basketParams[e[t].name]=e[t].value;i=true;break;case"radio":if(e[t].checked){this.basketParams[e[t].name]=e[t].value;i=true}break;default:break}}}}if(!i){this.basketParams[this.basketData.props]=[];this.basketParams[this.basketData.props][0]=0}};t.JCCatalogSectionViewed.prototype.SendToBasket=function(){if(!this.canBuy){return}this.InitBasketUrl();this.FillBasketProps();BX.ajax.loadJSON(this.basketUrl,this.basketParams,BX.delegate(this.BasketResult,this))};t.JCCatalogSectionViewed.prototype.Basket=function(){var t="";if(!this.canBuy){return}switch(this.productType){case 1:case 2:if(this.basketData.useProps&&!this.basketData.emptyProps){this.InitPopupWindow();this.obPopupWin.setTitleBar({content:BX.create("div",{style:{marginRight:"30px",whiteSpace:"nowrap"},text:BX.message("CVP_TITLE_BASKET_PROPS")})});if(BX(this.visual.BASKET_PROP_DIV)){t=BX(this.visual.BASKET_PROP_DIV).innerHTML}this.obPopupWin.setContent(t);this.obPopupWin.setButtons([new e({ownerClass:this.obProduct.parentNode.parentNode.parentNode.className,text:BX.message("CVP_BTN_MESSAGE_SEND_PROPS"),events:{click:BX.delegate(this.SendToBasket,this)}})]);this.obPopupWin.show()}else{this.SendToBasket()}break;case 3:this.SendToBasket();break}};t.JCCatalogSectionViewed.prototype.BasketResult=function(t){var i="",s="",o="",a=true,h=[];if(!!this.obPopupWin){this.obPopupWin.close()}if("object"!==typeof t){return false}a="OK"===t.STATUS;if(a){BX.onCustomEvent("OnBasketChange");s=this.product.name;switch(this.productType){case 1:case 2:o=this.product.pict.SRC;break;case 3:o=!!this.offers[this.offerNum].PREVIEW_PICTURE?this.offers[this.offerNum].PREVIEW_PICTURE.SRC:this.defaultPict.pict.SRC;break}i='<div style="width: 96%; margin: 10px 2%; text-align: center;"><img src="'+o+'" height="130" style="max-height:130px"><p>'+s+"</p></div>";h=[new e({ownerClass:this.obProduct.parentNode.parentNode.parentNode.className,text:BX.message("CVP_BTN_MESSAGE_BASKET_REDIRECT"),events:{click:BX.delegate(function(){location.href=!!this.basketData.basketUrl?this.basketData.basketUrl:BX.message("CVP_BASKET_URL")},this)}})]}else{i=!!t.MESSAGE?t.MESSAGE:BX.message("CVP_BASKET_UNKNOWN_ERROR");h=[new e({ownerClass:this.obProduct.parentNode.parentNode.parentNode.className,text:BX.message("CVP_BTN_MESSAGE_CLOSE"),events:{click:BX.delegate(this.obPopupWin.close,this.obPopupWin)}})]}this.InitPopupWindow();this.obPopupWin.setTitleBar({content:BX.create("div",{style:{marginRight:"30px",whiteSpace:"nowrap"},text:a?BX.message("CVP_TITLE_SUCCESSFUL"):BX.message("CVP_TITLE_ERROR")})});this.obPopupWin.setContent(i);this.obPopupWin.setButtons(h);this.obPopupWin.show()};t.JCCatalogSectionViewed.prototype.InitPopupWindow=function(){if(!!this.obPopupWin){return}this.obPopupWin=BX.PopupWindowManager.create("CatalogSectionBasket_"+this.visual.ID,null,{autoHide:false,offsetLeft:0,offsetTop:0,overlay:true,closeByEsc:true,titleBar:true,closeIcon:{top:"10px",right:"10px"}})}})(window);
/* End */
;; /* /local/templates/atrspb/components/bitrix/catalog/presents/bitrix/catalog.element/.default/script.min.js?149703835454111*/
; /* /local/templates/atrspb/js/fancybox/jquery.fancybox.js?149703835548706*/
; /* /local/templates/atrspb/components/bitrix/catalog.viewed.products/atrspb/script.min.js?149703835421446*/

//# sourceMappingURL=page_996ea91e66e597b7f31d483dd9882101.map.js