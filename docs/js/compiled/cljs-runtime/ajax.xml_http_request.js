goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__37089 = e.target.readyState;
var fexpr__37088 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__37088.cljs$core$IFn$_invoke$arity$1 ? fexpr__37088.cljs$core$IFn$_invoke$arity$1(G__37089) : fexpr__37088.call(null,G__37089));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__37094,handler){
var map__37095 = p__37094;
var map__37095__$1 = cljs.core.__destructure_map(map__37095);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37095__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37095__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37095__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37095__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37095__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37095__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37095__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__37093_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__37093_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___37126 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___37126)){
var response_type_37127 = temp__5735__auto___37126;
(this$__$1.responseType = cljs.core.name(response_type_37127));
} else {
}

var seq__37097_37128 = cljs.core.seq(headers);
var chunk__37098_37129 = null;
var count__37099_37130 = (0);
var i__37100_37131 = (0);
while(true){
if((i__37100_37131 < count__37099_37130)){
var vec__37112_37132 = chunk__37098_37129.cljs$core$IIndexed$_nth$arity$2(null,i__37100_37131);
var k_37133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37112_37132,(0),null);
var v_37134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37112_37132,(1),null);
this$__$1.setRequestHeader(k_37133,v_37134);


var G__37135 = seq__37097_37128;
var G__37136 = chunk__37098_37129;
var G__37137 = count__37099_37130;
var G__37138 = (i__37100_37131 + (1));
seq__37097_37128 = G__37135;
chunk__37098_37129 = G__37136;
count__37099_37130 = G__37137;
i__37100_37131 = G__37138;
continue;
} else {
var temp__5735__auto___37139 = cljs.core.seq(seq__37097_37128);
if(temp__5735__auto___37139){
var seq__37097_37140__$1 = temp__5735__auto___37139;
if(cljs.core.chunked_seq_QMARK_(seq__37097_37140__$1)){
var c__4591__auto___37141 = cljs.core.chunk_first(seq__37097_37140__$1);
var G__37142 = cljs.core.chunk_rest(seq__37097_37140__$1);
var G__37143 = c__4591__auto___37141;
var G__37144 = cljs.core.count(c__4591__auto___37141);
var G__37145 = (0);
seq__37097_37128 = G__37142;
chunk__37098_37129 = G__37143;
count__37099_37130 = G__37144;
i__37100_37131 = G__37145;
continue;
} else {
var vec__37115_37146 = cljs.core.first(seq__37097_37140__$1);
var k_37147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37115_37146,(0),null);
var v_37148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37115_37146,(1),null);
this$__$1.setRequestHeader(k_37147,v_37148);


var G__37149 = cljs.core.next(seq__37097_37140__$1);
var G__37150 = null;
var G__37151 = (0);
var G__37152 = (0);
seq__37097_37128 = G__37149;
chunk__37098_37129 = G__37150;
count__37099_37130 = G__37151;
i__37100_37131 = G__37152;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4160__auto__ = body;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
