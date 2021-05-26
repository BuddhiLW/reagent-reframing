goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_49381 = (function (this$){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4464__auto__.call(null,this$));
} else {
var m__4461__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4461__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_49381(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_49384 = (function (this$){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4464__auto__.call(null,this$));
} else {
var m__4461__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4461__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_49384(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__48517 = coll;
var G__48518 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__48517,G__48518) : shadow.dom.lazy_native_coll_seq.call(null,G__48517,G__48518));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4160__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__48548 = arguments.length;
switch (G__48548) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__48553 = arguments.length;
switch (G__48553) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__48556 = arguments.length;
switch (G__48556) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__48565 = arguments.length;
switch (G__48565) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__48578 = arguments.length;
switch (G__48578) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__48585 = arguments.length;
switch (G__48585) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4160__auto__ = (!((typeof document !== 'undefined')));
if(or__4160__auto__){
return or__4160__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e48599){if((e48599 instanceof Object)){
var e = e48599;
return console.log("didnt support attachEvent",el,e);
} else {
throw e48599;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4160__auto__ = (!((typeof document !== 'undefined')));
if(or__4160__auto__){
return or__4160__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__48614 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__48615 = null;
var count__48616 = (0);
var i__48617 = (0);
while(true){
if((i__48617 < count__48616)){
var el = chunk__48615.cljs$core$IIndexed$_nth$arity$2(null,i__48617);
var handler_49448__$1 = ((function (seq__48614,chunk__48615,count__48616,i__48617,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__48614,chunk__48615,count__48616,i__48617,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_49448__$1);


var G__49452 = seq__48614;
var G__49453 = chunk__48615;
var G__49454 = count__48616;
var G__49455 = (i__48617 + (1));
seq__48614 = G__49452;
chunk__48615 = G__49453;
count__48616 = G__49454;
i__48617 = G__49455;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48614);
if(temp__5735__auto__){
var seq__48614__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48614__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__48614__$1);
var G__49457 = cljs.core.chunk_rest(seq__48614__$1);
var G__49458 = c__4591__auto__;
var G__49459 = cljs.core.count(c__4591__auto__);
var G__49460 = (0);
seq__48614 = G__49457;
chunk__48615 = G__49458;
count__48616 = G__49459;
i__48617 = G__49460;
continue;
} else {
var el = cljs.core.first(seq__48614__$1);
var handler_49463__$1 = ((function (seq__48614,chunk__48615,count__48616,i__48617,el,seq__48614__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__48614,chunk__48615,count__48616,i__48617,el,seq__48614__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_49463__$1);


var G__49468 = cljs.core.next(seq__48614__$1);
var G__49469 = null;
var G__49470 = (0);
var G__49471 = (0);
seq__48614 = G__49468;
chunk__48615 = G__49469;
count__48616 = G__49470;
i__48617 = G__49471;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__48630 = arguments.length;
switch (G__48630) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__48641 = cljs.core.seq(events);
var chunk__48642 = null;
var count__48643 = (0);
var i__48644 = (0);
while(true){
if((i__48644 < count__48643)){
var vec__48658 = chunk__48642.cljs$core$IIndexed$_nth$arity$2(null,i__48644);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48658,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48658,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__49483 = seq__48641;
var G__49484 = chunk__48642;
var G__49485 = count__48643;
var G__49486 = (i__48644 + (1));
seq__48641 = G__49483;
chunk__48642 = G__49484;
count__48643 = G__49485;
i__48644 = G__49486;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48641);
if(temp__5735__auto__){
var seq__48641__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48641__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__48641__$1);
var G__49490 = cljs.core.chunk_rest(seq__48641__$1);
var G__49491 = c__4591__auto__;
var G__49492 = cljs.core.count(c__4591__auto__);
var G__49493 = (0);
seq__48641 = G__49490;
chunk__48642 = G__49491;
count__48643 = G__49492;
i__48644 = G__49493;
continue;
} else {
var vec__48664 = cljs.core.first(seq__48641__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48664,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48664,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__49495 = cljs.core.next(seq__48641__$1);
var G__49496 = null;
var G__49497 = (0);
var G__49498 = (0);
seq__48641 = G__49495;
chunk__48642 = G__49496;
count__48643 = G__49497;
i__48644 = G__49498;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__48673 = cljs.core.seq(styles);
var chunk__48675 = null;
var count__48676 = (0);
var i__48677 = (0);
while(true){
if((i__48677 < count__48676)){
var vec__48694 = chunk__48675.cljs$core$IIndexed$_nth$arity$2(null,i__48677);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48694,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48694,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__49503 = seq__48673;
var G__49504 = chunk__48675;
var G__49505 = count__48676;
var G__49506 = (i__48677 + (1));
seq__48673 = G__49503;
chunk__48675 = G__49504;
count__48676 = G__49505;
i__48677 = G__49506;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48673);
if(temp__5735__auto__){
var seq__48673__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48673__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__48673__$1);
var G__49514 = cljs.core.chunk_rest(seq__48673__$1);
var G__49515 = c__4591__auto__;
var G__49516 = cljs.core.count(c__4591__auto__);
var G__49517 = (0);
seq__48673 = G__49514;
chunk__48675 = G__49515;
count__48676 = G__49516;
i__48677 = G__49517;
continue;
} else {
var vec__48700 = cljs.core.first(seq__48673__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48700,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48700,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__49523 = cljs.core.next(seq__48673__$1);
var G__49524 = null;
var G__49525 = (0);
var G__49526 = (0);
seq__48673 = G__49523;
chunk__48675 = G__49524;
count__48676 = G__49525;
i__48677 = G__49526;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__48709_49530 = key;
var G__48709_49531__$1 = (((G__48709_49530 instanceof cljs.core.Keyword))?G__48709_49530.fqn:null);
switch (G__48709_49531__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_49543 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4160__auto__ = goog.string.startsWith(ks_49543,"data-");
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return goog.string.startsWith(ks_49543,"aria-");
}
})())){
el.setAttribute(ks_49543,value);
} else {
(el[ks_49543] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__48738){
var map__48739 = p__48738;
var map__48739__$1 = cljs.core.__destructure_map(map__48739);
var props = map__48739__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48739__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__48742 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48742,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48742,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48742,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__48745 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__48745,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__48745;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__48751 = arguments.length;
switch (G__48751) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__48760){
var vec__48762 = p__48760;
var seq__48763 = cljs.core.seq(vec__48762);
var first__48764 = cljs.core.first(seq__48763);
var seq__48763__$1 = cljs.core.next(seq__48763);
var nn = first__48764;
var first__48764__$1 = cljs.core.first(seq__48763__$1);
var seq__48763__$2 = cljs.core.next(seq__48763__$1);
var np = first__48764__$1;
var nc = seq__48763__$2;
var node = vec__48762;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48766 = nn;
var G__48767 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48766,G__48767) : create_fn.call(null,G__48766,G__48767));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48769 = nn;
var G__48770 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48769,G__48770) : create_fn.call(null,G__48769,G__48770));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__48774 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48774,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48774,(1),null);
var seq__48778_49607 = cljs.core.seq(node_children);
var chunk__48779_49608 = null;
var count__48780_49609 = (0);
var i__48781_49610 = (0);
while(true){
if((i__48781_49610 < count__48780_49609)){
var child_struct_49611 = chunk__48779_49608.cljs$core$IIndexed$_nth$arity$2(null,i__48781_49610);
var children_49613 = shadow.dom.dom_node(child_struct_49611);
if(cljs.core.seq_QMARK_(children_49613)){
var seq__48818_49615 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_49613));
var chunk__48820_49616 = null;
var count__48821_49617 = (0);
var i__48822_49618 = (0);
while(true){
if((i__48822_49618 < count__48821_49617)){
var child_49626 = chunk__48820_49616.cljs$core$IIndexed$_nth$arity$2(null,i__48822_49618);
if(cljs.core.truth_(child_49626)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49626);


var G__49627 = seq__48818_49615;
var G__49628 = chunk__48820_49616;
var G__49629 = count__48821_49617;
var G__49630 = (i__48822_49618 + (1));
seq__48818_49615 = G__49627;
chunk__48820_49616 = G__49628;
count__48821_49617 = G__49629;
i__48822_49618 = G__49630;
continue;
} else {
var G__49632 = seq__48818_49615;
var G__49633 = chunk__48820_49616;
var G__49634 = count__48821_49617;
var G__49635 = (i__48822_49618 + (1));
seq__48818_49615 = G__49632;
chunk__48820_49616 = G__49633;
count__48821_49617 = G__49634;
i__48822_49618 = G__49635;
continue;
}
} else {
var temp__5735__auto___49636 = cljs.core.seq(seq__48818_49615);
if(temp__5735__auto___49636){
var seq__48818_49638__$1 = temp__5735__auto___49636;
if(cljs.core.chunked_seq_QMARK_(seq__48818_49638__$1)){
var c__4591__auto___49642 = cljs.core.chunk_first(seq__48818_49638__$1);
var G__49644 = cljs.core.chunk_rest(seq__48818_49638__$1);
var G__49645 = c__4591__auto___49642;
var G__49646 = cljs.core.count(c__4591__auto___49642);
var G__49647 = (0);
seq__48818_49615 = G__49644;
chunk__48820_49616 = G__49645;
count__48821_49617 = G__49646;
i__48822_49618 = G__49647;
continue;
} else {
var child_49648 = cljs.core.first(seq__48818_49638__$1);
if(cljs.core.truth_(child_49648)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49648);


var G__49651 = cljs.core.next(seq__48818_49638__$1);
var G__49652 = null;
var G__49653 = (0);
var G__49654 = (0);
seq__48818_49615 = G__49651;
chunk__48820_49616 = G__49652;
count__48821_49617 = G__49653;
i__48822_49618 = G__49654;
continue;
} else {
var G__49655 = cljs.core.next(seq__48818_49638__$1);
var G__49656 = null;
var G__49657 = (0);
var G__49658 = (0);
seq__48818_49615 = G__49655;
chunk__48820_49616 = G__49656;
count__48821_49617 = G__49657;
i__48822_49618 = G__49658;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_49613);
}


var G__49663 = seq__48778_49607;
var G__49664 = chunk__48779_49608;
var G__49665 = count__48780_49609;
var G__49666 = (i__48781_49610 + (1));
seq__48778_49607 = G__49663;
chunk__48779_49608 = G__49664;
count__48780_49609 = G__49665;
i__48781_49610 = G__49666;
continue;
} else {
var temp__5735__auto___49668 = cljs.core.seq(seq__48778_49607);
if(temp__5735__auto___49668){
var seq__48778_49669__$1 = temp__5735__auto___49668;
if(cljs.core.chunked_seq_QMARK_(seq__48778_49669__$1)){
var c__4591__auto___49672 = cljs.core.chunk_first(seq__48778_49669__$1);
var G__49674 = cljs.core.chunk_rest(seq__48778_49669__$1);
var G__49675 = c__4591__auto___49672;
var G__49676 = cljs.core.count(c__4591__auto___49672);
var G__49677 = (0);
seq__48778_49607 = G__49674;
chunk__48779_49608 = G__49675;
count__48780_49609 = G__49676;
i__48781_49610 = G__49677;
continue;
} else {
var child_struct_49680 = cljs.core.first(seq__48778_49669__$1);
var children_49681 = shadow.dom.dom_node(child_struct_49680);
if(cljs.core.seq_QMARK_(children_49681)){
var seq__48835_49682 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_49681));
var chunk__48837_49683 = null;
var count__48838_49684 = (0);
var i__48839_49685 = (0);
while(true){
if((i__48839_49685 < count__48838_49684)){
var child_49686 = chunk__48837_49683.cljs$core$IIndexed$_nth$arity$2(null,i__48839_49685);
if(cljs.core.truth_(child_49686)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49686);


var G__49687 = seq__48835_49682;
var G__49688 = chunk__48837_49683;
var G__49689 = count__48838_49684;
var G__49690 = (i__48839_49685 + (1));
seq__48835_49682 = G__49687;
chunk__48837_49683 = G__49688;
count__48838_49684 = G__49689;
i__48839_49685 = G__49690;
continue;
} else {
var G__49691 = seq__48835_49682;
var G__49692 = chunk__48837_49683;
var G__49693 = count__48838_49684;
var G__49694 = (i__48839_49685 + (1));
seq__48835_49682 = G__49691;
chunk__48837_49683 = G__49692;
count__48838_49684 = G__49693;
i__48839_49685 = G__49694;
continue;
}
} else {
var temp__5735__auto___49695__$1 = cljs.core.seq(seq__48835_49682);
if(temp__5735__auto___49695__$1){
var seq__48835_49696__$1 = temp__5735__auto___49695__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48835_49696__$1)){
var c__4591__auto___49697 = cljs.core.chunk_first(seq__48835_49696__$1);
var G__49698 = cljs.core.chunk_rest(seq__48835_49696__$1);
var G__49699 = c__4591__auto___49697;
var G__49700 = cljs.core.count(c__4591__auto___49697);
var G__49701 = (0);
seq__48835_49682 = G__49698;
chunk__48837_49683 = G__49699;
count__48838_49684 = G__49700;
i__48839_49685 = G__49701;
continue;
} else {
var child_49702 = cljs.core.first(seq__48835_49696__$1);
if(cljs.core.truth_(child_49702)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49702);


var G__49703 = cljs.core.next(seq__48835_49696__$1);
var G__49704 = null;
var G__49705 = (0);
var G__49706 = (0);
seq__48835_49682 = G__49703;
chunk__48837_49683 = G__49704;
count__48838_49684 = G__49705;
i__48839_49685 = G__49706;
continue;
} else {
var G__49707 = cljs.core.next(seq__48835_49696__$1);
var G__49708 = null;
var G__49709 = (0);
var G__49710 = (0);
seq__48835_49682 = G__49707;
chunk__48837_49683 = G__49708;
count__48838_49684 = G__49709;
i__48839_49685 = G__49710;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_49681);
}


var G__49715 = cljs.core.next(seq__48778_49669__$1);
var G__49716 = null;
var G__49717 = (0);
var G__49718 = (0);
seq__48778_49607 = G__49715;
chunk__48779_49608 = G__49716;
count__48780_49609 = G__49717;
i__48781_49610 = G__49718;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__48852 = cljs.core.seq(node);
var chunk__48853 = null;
var count__48854 = (0);
var i__48855 = (0);
while(true){
if((i__48855 < count__48854)){
var n = chunk__48853.cljs$core$IIndexed$_nth$arity$2(null,i__48855);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__49725 = seq__48852;
var G__49726 = chunk__48853;
var G__49727 = count__48854;
var G__49728 = (i__48855 + (1));
seq__48852 = G__49725;
chunk__48853 = G__49726;
count__48854 = G__49727;
i__48855 = G__49728;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48852);
if(temp__5735__auto__){
var seq__48852__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48852__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__48852__$1);
var G__49729 = cljs.core.chunk_rest(seq__48852__$1);
var G__49730 = c__4591__auto__;
var G__49731 = cljs.core.count(c__4591__auto__);
var G__49732 = (0);
seq__48852 = G__49729;
chunk__48853 = G__49730;
count__48854 = G__49731;
i__48855 = G__49732;
continue;
} else {
var n = cljs.core.first(seq__48852__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__49733 = cljs.core.next(seq__48852__$1);
var G__49734 = null;
var G__49735 = (0);
var G__49736 = (0);
seq__48852 = G__49733;
chunk__48853 = G__49734;
count__48854 = G__49735;
i__48855 = G__49736;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__48859 = arguments.length;
switch (G__48859) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__48870 = arguments.length;
switch (G__48870) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__48884 = arguments.length;
switch (G__48884) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4160__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4777__auto__ = [];
var len__4771__auto___49755 = arguments.length;
var i__4772__auto___49756 = (0);
while(true){
if((i__4772__auto___49756 < len__4771__auto___49755)){
args__4777__auto__.push((arguments[i__4772__auto___49756]));

var G__49757 = (i__4772__auto___49756 + (1));
i__4772__auto___49756 = G__49757;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__48905_49765 = cljs.core.seq(nodes);
var chunk__48906_49766 = null;
var count__48907_49767 = (0);
var i__48908_49768 = (0);
while(true){
if((i__48908_49768 < count__48907_49767)){
var node_49769 = chunk__48906_49766.cljs$core$IIndexed$_nth$arity$2(null,i__48908_49768);
fragment.appendChild(shadow.dom._to_dom(node_49769));


var G__49771 = seq__48905_49765;
var G__49772 = chunk__48906_49766;
var G__49773 = count__48907_49767;
var G__49774 = (i__48908_49768 + (1));
seq__48905_49765 = G__49771;
chunk__48906_49766 = G__49772;
count__48907_49767 = G__49773;
i__48908_49768 = G__49774;
continue;
} else {
var temp__5735__auto___49778 = cljs.core.seq(seq__48905_49765);
if(temp__5735__auto___49778){
var seq__48905_49779__$1 = temp__5735__auto___49778;
if(cljs.core.chunked_seq_QMARK_(seq__48905_49779__$1)){
var c__4591__auto___49780 = cljs.core.chunk_first(seq__48905_49779__$1);
var G__49781 = cljs.core.chunk_rest(seq__48905_49779__$1);
var G__49782 = c__4591__auto___49780;
var G__49783 = cljs.core.count(c__4591__auto___49780);
var G__49784 = (0);
seq__48905_49765 = G__49781;
chunk__48906_49766 = G__49782;
count__48907_49767 = G__49783;
i__48908_49768 = G__49784;
continue;
} else {
var node_49785 = cljs.core.first(seq__48905_49779__$1);
fragment.appendChild(shadow.dom._to_dom(node_49785));


var G__49789 = cljs.core.next(seq__48905_49779__$1);
var G__49790 = null;
var G__49791 = (0);
var G__49792 = (0);
seq__48905_49765 = G__49789;
chunk__48906_49766 = G__49790;
count__48907_49767 = G__49791;
i__48908_49768 = G__49792;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq48897){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48897));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__48921_49801 = cljs.core.seq(scripts);
var chunk__48922_49802 = null;
var count__48923_49803 = (0);
var i__48924_49804 = (0);
while(true){
if((i__48924_49804 < count__48923_49803)){
var vec__48935_49805 = chunk__48922_49802.cljs$core$IIndexed$_nth$arity$2(null,i__48924_49804);
var script_tag_49806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48935_49805,(0),null);
var script_body_49807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48935_49805,(1),null);
eval(script_body_49807);


var G__49808 = seq__48921_49801;
var G__49809 = chunk__48922_49802;
var G__49810 = count__48923_49803;
var G__49811 = (i__48924_49804 + (1));
seq__48921_49801 = G__49808;
chunk__48922_49802 = G__49809;
count__48923_49803 = G__49810;
i__48924_49804 = G__49811;
continue;
} else {
var temp__5735__auto___49812 = cljs.core.seq(seq__48921_49801);
if(temp__5735__auto___49812){
var seq__48921_49816__$1 = temp__5735__auto___49812;
if(cljs.core.chunked_seq_QMARK_(seq__48921_49816__$1)){
var c__4591__auto___49817 = cljs.core.chunk_first(seq__48921_49816__$1);
var G__49818 = cljs.core.chunk_rest(seq__48921_49816__$1);
var G__49819 = c__4591__auto___49817;
var G__49820 = cljs.core.count(c__4591__auto___49817);
var G__49821 = (0);
seq__48921_49801 = G__49818;
chunk__48922_49802 = G__49819;
count__48923_49803 = G__49820;
i__48924_49804 = G__49821;
continue;
} else {
var vec__48942_49824 = cljs.core.first(seq__48921_49816__$1);
var script_tag_49825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48942_49824,(0),null);
var script_body_49826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48942_49824,(1),null);
eval(script_body_49826);


var G__49827 = cljs.core.next(seq__48921_49816__$1);
var G__49828 = null;
var G__49829 = (0);
var G__49830 = (0);
seq__48921_49801 = G__49827;
chunk__48922_49802 = G__49828;
count__48923_49803 = G__49829;
i__48924_49804 = G__49830;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__48947){
var vec__48948 = p__48947;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48948,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48948,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__48959 = arguments.length;
switch (G__48959) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__48974 = cljs.core.seq(style_keys);
var chunk__48975 = null;
var count__48976 = (0);
var i__48977 = (0);
while(true){
if((i__48977 < count__48976)){
var it = chunk__48975.cljs$core$IIndexed$_nth$arity$2(null,i__48977);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__49849 = seq__48974;
var G__49850 = chunk__48975;
var G__49851 = count__48976;
var G__49852 = (i__48977 + (1));
seq__48974 = G__49849;
chunk__48975 = G__49850;
count__48976 = G__49851;
i__48977 = G__49852;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48974);
if(temp__5735__auto__){
var seq__48974__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48974__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__48974__$1);
var G__49853 = cljs.core.chunk_rest(seq__48974__$1);
var G__49854 = c__4591__auto__;
var G__49855 = cljs.core.count(c__4591__auto__);
var G__49856 = (0);
seq__48974 = G__49853;
chunk__48975 = G__49854;
count__48976 = G__49855;
i__48977 = G__49856;
continue;
} else {
var it = cljs.core.first(seq__48974__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__49857 = cljs.core.next(seq__48974__$1);
var G__49858 = null;
var G__49859 = (0);
var G__49860 = (0);
seq__48974 = G__49857;
chunk__48975 = G__49858;
count__48976 = G__49859;
i__48977 = G__49860;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k48983,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__48992 = k48983;
var G__48992__$1 = (((G__48992 instanceof cljs.core.Keyword))?G__48992.fqn:null);
switch (G__48992__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48983,else__4418__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__48994){
var vec__48995 = p__48994;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48995,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48995,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48982){
var self__ = this;
var G__48982__$1 = this;
return (new cljs.core.RecordIter((0),G__48982__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (coll__4412__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
})(this__4411__auto____$1);
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48984,other48985){
var self__ = this;
var this48984__$1 = this;
return (((!((other48985 == null)))) && ((this48984__$1.constructor === other48985.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48984__$1.x,other48985.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48984__$1.y,other48985.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48984__$1.__extmap,other48985.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__48982){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__49012 = cljs.core.keyword_identical_QMARK_;
var expr__49013 = k__4423__auto__;
if(cljs.core.truth_((pred__49012.cljs$core$IFn$_invoke$arity$2 ? pred__49012.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__49013) : pred__49012.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__49013)))){
return (new shadow.dom.Coordinate(G__48982,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49012.cljs$core$IFn$_invoke$arity$2 ? pred__49012.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__49013) : pred__49012.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__49013)))){
return (new shadow.dom.Coordinate(self__.x,G__48982,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__48982),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__48982){
var self__ = this;
var this__4414__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__48982,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4421__auto__,(0)),cljs.core._nth(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__48987){
var extmap__4454__auto__ = (function (){var G__49015 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48987,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__48987)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49015);
} else {
return G__49015;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__48987),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__48987),null,cljs.core.not_empty(extmap__4454__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k49019,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__49025 = k49019;
var G__49025__$1 = (((G__49025 instanceof cljs.core.Keyword))?G__49025.fqn:null);
switch (G__49025__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49019,else__4418__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__49031){
var vec__49033 = p__49031;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49033,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49033,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#shadow.dom.Size{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49018){
var self__ = this;
var G__49018__$1 = this;
return (new cljs.core.RecordIter((0),G__49018__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (coll__4412__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
})(this__4411__auto____$1);
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49020,other49021){
var self__ = this;
var this49020__$1 = this;
return (((!((other49021 == null)))) && ((this49020__$1.constructor === other49021.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49020__$1.w,other49021.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49020__$1.h,other49021.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49020__$1.__extmap,other49021.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__49018){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__49055 = cljs.core.keyword_identical_QMARK_;
var expr__49056 = k__4423__auto__;
if(cljs.core.truth_((pred__49055.cljs$core$IFn$_invoke$arity$2 ? pred__49055.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__49056) : pred__49055.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__49056)))){
return (new shadow.dom.Size(G__49018,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49055.cljs$core$IFn$_invoke$arity$2 ? pred__49055.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__49056) : pred__49055.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__49056)))){
return (new shadow.dom.Size(self__.w,G__49018,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__49018),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__49018){
var self__ = this;
var this__4414__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__49018,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4421__auto__,(0)),cljs.core._nth(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__49023){
var extmap__4454__auto__ = (function (){var G__49069 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49023,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__49023)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49069);
} else {
return G__49069;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__49023),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__49023),null,cljs.core.not_empty(extmap__4454__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4645__auto__ = opts;
var l__4646__auto__ = a__4645__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4646__auto__)){
var G__49932 = (i + (1));
var G__49933 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__49932;
ret = G__49933;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49097){
var vec__49098 = p__49097;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49098,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49098,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__49102 = arguments.length;
switch (G__49102) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__49940 = ps;
var G__49941 = (i + (1));
el__$1 = G__49940;
i = G__49941;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__49135 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49135,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49135,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49135,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__49140_49944 = cljs.core.seq(props);
var chunk__49141_49945 = null;
var count__49142_49946 = (0);
var i__49143_49947 = (0);
while(true){
if((i__49143_49947 < count__49142_49946)){
var vec__49154_49948 = chunk__49141_49945.cljs$core$IIndexed$_nth$arity$2(null,i__49143_49947);
var k_49949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49154_49948,(0),null);
var v_49950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49154_49948,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_49949);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49949),v_49950);


var G__49952 = seq__49140_49944;
var G__49953 = chunk__49141_49945;
var G__49954 = count__49142_49946;
var G__49955 = (i__49143_49947 + (1));
seq__49140_49944 = G__49952;
chunk__49141_49945 = G__49953;
count__49142_49946 = G__49954;
i__49143_49947 = G__49955;
continue;
} else {
var temp__5735__auto___49956 = cljs.core.seq(seq__49140_49944);
if(temp__5735__auto___49956){
var seq__49140_49957__$1 = temp__5735__auto___49956;
if(cljs.core.chunked_seq_QMARK_(seq__49140_49957__$1)){
var c__4591__auto___49958 = cljs.core.chunk_first(seq__49140_49957__$1);
var G__49959 = cljs.core.chunk_rest(seq__49140_49957__$1);
var G__49960 = c__4591__auto___49958;
var G__49961 = cljs.core.count(c__4591__auto___49958);
var G__49962 = (0);
seq__49140_49944 = G__49959;
chunk__49141_49945 = G__49960;
count__49142_49946 = G__49961;
i__49143_49947 = G__49962;
continue;
} else {
var vec__49162_49963 = cljs.core.first(seq__49140_49957__$1);
var k_49965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49162_49963,(0),null);
var v_49966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49162_49963,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_49965);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49965),v_49966);


var G__49970 = cljs.core.next(seq__49140_49957__$1);
var G__49971 = null;
var G__49972 = (0);
var G__49973 = (0);
seq__49140_49944 = G__49970;
chunk__49141_49945 = G__49971;
count__49142_49946 = G__49972;
i__49143_49947 = G__49973;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__49179 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49179,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49179,(1),null);
var seq__49182_49974 = cljs.core.seq(node_children);
var chunk__49184_49975 = null;
var count__49185_49976 = (0);
var i__49186_49977 = (0);
while(true){
if((i__49186_49977 < count__49185_49976)){
var child_struct_49978 = chunk__49184_49975.cljs$core$IIndexed$_nth$arity$2(null,i__49186_49977);
if((!((child_struct_49978 == null)))){
if(typeof child_struct_49978 === 'string'){
var text_49979 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49979),child_struct_49978].join(''));
} else {
var children_49980 = shadow.dom.svg_node(child_struct_49978);
if(cljs.core.seq_QMARK_(children_49980)){
var seq__49253_49981 = cljs.core.seq(children_49980);
var chunk__49256_49982 = null;
var count__49257_49983 = (0);
var i__49258_49984 = (0);
while(true){
if((i__49258_49984 < count__49257_49983)){
var child_49985 = chunk__49256_49982.cljs$core$IIndexed$_nth$arity$2(null,i__49258_49984);
if(cljs.core.truth_(child_49985)){
node.appendChild(child_49985);


var G__49986 = seq__49253_49981;
var G__49987 = chunk__49256_49982;
var G__49988 = count__49257_49983;
var G__49989 = (i__49258_49984 + (1));
seq__49253_49981 = G__49986;
chunk__49256_49982 = G__49987;
count__49257_49983 = G__49988;
i__49258_49984 = G__49989;
continue;
} else {
var G__49990 = seq__49253_49981;
var G__49991 = chunk__49256_49982;
var G__49992 = count__49257_49983;
var G__49993 = (i__49258_49984 + (1));
seq__49253_49981 = G__49990;
chunk__49256_49982 = G__49991;
count__49257_49983 = G__49992;
i__49258_49984 = G__49993;
continue;
}
} else {
var temp__5735__auto___49994 = cljs.core.seq(seq__49253_49981);
if(temp__5735__auto___49994){
var seq__49253_49995__$1 = temp__5735__auto___49994;
if(cljs.core.chunked_seq_QMARK_(seq__49253_49995__$1)){
var c__4591__auto___49996 = cljs.core.chunk_first(seq__49253_49995__$1);
var G__49997 = cljs.core.chunk_rest(seq__49253_49995__$1);
var G__49998 = c__4591__auto___49996;
var G__49999 = cljs.core.count(c__4591__auto___49996);
var G__50000 = (0);
seq__49253_49981 = G__49997;
chunk__49256_49982 = G__49998;
count__49257_49983 = G__49999;
i__49258_49984 = G__50000;
continue;
} else {
var child_50001 = cljs.core.first(seq__49253_49995__$1);
if(cljs.core.truth_(child_50001)){
node.appendChild(child_50001);


var G__50002 = cljs.core.next(seq__49253_49995__$1);
var G__50003 = null;
var G__50004 = (0);
var G__50005 = (0);
seq__49253_49981 = G__50002;
chunk__49256_49982 = G__50003;
count__49257_49983 = G__50004;
i__49258_49984 = G__50005;
continue;
} else {
var G__50006 = cljs.core.next(seq__49253_49995__$1);
var G__50007 = null;
var G__50008 = (0);
var G__50009 = (0);
seq__49253_49981 = G__50006;
chunk__49256_49982 = G__50007;
count__49257_49983 = G__50008;
i__49258_49984 = G__50009;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49980);
}
}


var G__50010 = seq__49182_49974;
var G__50011 = chunk__49184_49975;
var G__50012 = count__49185_49976;
var G__50013 = (i__49186_49977 + (1));
seq__49182_49974 = G__50010;
chunk__49184_49975 = G__50011;
count__49185_49976 = G__50012;
i__49186_49977 = G__50013;
continue;
} else {
var G__50014 = seq__49182_49974;
var G__50015 = chunk__49184_49975;
var G__50016 = count__49185_49976;
var G__50017 = (i__49186_49977 + (1));
seq__49182_49974 = G__50014;
chunk__49184_49975 = G__50015;
count__49185_49976 = G__50016;
i__49186_49977 = G__50017;
continue;
}
} else {
var temp__5735__auto___50019 = cljs.core.seq(seq__49182_49974);
if(temp__5735__auto___50019){
var seq__49182_50023__$1 = temp__5735__auto___50019;
if(cljs.core.chunked_seq_QMARK_(seq__49182_50023__$1)){
var c__4591__auto___50024 = cljs.core.chunk_first(seq__49182_50023__$1);
var G__50025 = cljs.core.chunk_rest(seq__49182_50023__$1);
var G__50026 = c__4591__auto___50024;
var G__50027 = cljs.core.count(c__4591__auto___50024);
var G__50028 = (0);
seq__49182_49974 = G__50025;
chunk__49184_49975 = G__50026;
count__49185_49976 = G__50027;
i__49186_49977 = G__50028;
continue;
} else {
var child_struct_50029 = cljs.core.first(seq__49182_50023__$1);
if((!((child_struct_50029 == null)))){
if(typeof child_struct_50029 === 'string'){
var text_50030 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_50030),child_struct_50029].join(''));
} else {
var children_50031 = shadow.dom.svg_node(child_struct_50029);
if(cljs.core.seq_QMARK_(children_50031)){
var seq__49287_50033 = cljs.core.seq(children_50031);
var chunk__49289_50034 = null;
var count__49290_50035 = (0);
var i__49291_50036 = (0);
while(true){
if((i__49291_50036 < count__49290_50035)){
var child_50038 = chunk__49289_50034.cljs$core$IIndexed$_nth$arity$2(null,i__49291_50036);
if(cljs.core.truth_(child_50038)){
node.appendChild(child_50038);


var G__50040 = seq__49287_50033;
var G__50041 = chunk__49289_50034;
var G__50042 = count__49290_50035;
var G__50043 = (i__49291_50036 + (1));
seq__49287_50033 = G__50040;
chunk__49289_50034 = G__50041;
count__49290_50035 = G__50042;
i__49291_50036 = G__50043;
continue;
} else {
var G__50047 = seq__49287_50033;
var G__50048 = chunk__49289_50034;
var G__50049 = count__49290_50035;
var G__50050 = (i__49291_50036 + (1));
seq__49287_50033 = G__50047;
chunk__49289_50034 = G__50048;
count__49290_50035 = G__50049;
i__49291_50036 = G__50050;
continue;
}
} else {
var temp__5735__auto___50051__$1 = cljs.core.seq(seq__49287_50033);
if(temp__5735__auto___50051__$1){
var seq__49287_50052__$1 = temp__5735__auto___50051__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49287_50052__$1)){
var c__4591__auto___50053 = cljs.core.chunk_first(seq__49287_50052__$1);
var G__50054 = cljs.core.chunk_rest(seq__49287_50052__$1);
var G__50055 = c__4591__auto___50053;
var G__50056 = cljs.core.count(c__4591__auto___50053);
var G__50057 = (0);
seq__49287_50033 = G__50054;
chunk__49289_50034 = G__50055;
count__49290_50035 = G__50056;
i__49291_50036 = G__50057;
continue;
} else {
var child_50058 = cljs.core.first(seq__49287_50052__$1);
if(cljs.core.truth_(child_50058)){
node.appendChild(child_50058);


var G__50059 = cljs.core.next(seq__49287_50052__$1);
var G__50060 = null;
var G__50061 = (0);
var G__50062 = (0);
seq__49287_50033 = G__50059;
chunk__49289_50034 = G__50060;
count__49290_50035 = G__50061;
i__49291_50036 = G__50062;
continue;
} else {
var G__50063 = cljs.core.next(seq__49287_50052__$1);
var G__50064 = null;
var G__50065 = (0);
var G__50066 = (0);
seq__49287_50033 = G__50063;
chunk__49289_50034 = G__50064;
count__49290_50035 = G__50065;
i__49291_50036 = G__50066;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_50031);
}
}


var G__50068 = cljs.core.next(seq__49182_50023__$1);
var G__50069 = null;
var G__50070 = (0);
var G__50071 = (0);
seq__49182_49974 = G__50068;
chunk__49184_49975 = G__50069;
count__49185_49976 = G__50070;
i__49186_49977 = G__50071;
continue;
} else {
var G__50075 = cljs.core.next(seq__49182_50023__$1);
var G__50076 = null;
var G__50077 = (0);
var G__50078 = (0);
seq__49182_49974 = G__50075;
chunk__49184_49975 = G__50076;
count__49185_49976 = G__50077;
i__49186_49977 = G__50078;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4777__auto__ = [];
var len__4771__auto___50085 = arguments.length;
var i__4772__auto___50086 = (0);
while(true){
if((i__4772__auto___50086 < len__4771__auto___50085)){
args__4777__auto__.push((arguments[i__4772__auto___50086]));

var G__50088 = (i__4772__auto___50086 + (1));
i__4772__auto___50086 = G__50088;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq49328){
var G__49329 = cljs.core.first(seq49328);
var seq49328__$1 = cljs.core.next(seq49328);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49329,seq49328__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__49342 = arguments.length;
switch (G__49342) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4149__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4149__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4149__auto__;
}
})())){
var c__46243__auto___50101 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46245__auto__ = (function (){var switch__46076__auto__ = (function (state_49354){
var state_val_49355 = (state_49354[(1)]);
if((state_val_49355 === (1))){
var state_49354__$1 = state_49354;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49354__$1,(2),once_or_cleanup);
} else {
if((state_val_49355 === (2))){
var inst_49351 = (state_49354[(2)]);
var inst_49352 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_49354__$1 = (function (){var statearr_49360 = state_49354;
(statearr_49360[(7)] = inst_49351);

return statearr_49360;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49354__$1,inst_49352);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__46077__auto__ = null;
var shadow$dom$state_machine__46077__auto____0 = (function (){
var statearr_49361 = [null,null,null,null,null,null,null,null];
(statearr_49361[(0)] = shadow$dom$state_machine__46077__auto__);

(statearr_49361[(1)] = (1));

return statearr_49361;
});
var shadow$dom$state_machine__46077__auto____1 = (function (state_49354){
while(true){
var ret_value__46078__auto__ = (function (){try{while(true){
var result__46079__auto__ = switch__46076__auto__(state_49354);
if(cljs.core.keyword_identical_QMARK_(result__46079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46079__auto__;
}
break;
}
}catch (e49362){var ex__46080__auto__ = e49362;
var statearr_49363_50111 = state_49354;
(statearr_49363_50111[(2)] = ex__46080__auto__);


if(cljs.core.seq((state_49354[(4)]))){
var statearr_49364_50112 = state_49354;
(statearr_49364_50112[(1)] = cljs.core.first((state_49354[(4)])));

} else {
throw ex__46080__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50113 = state_49354;
state_49354 = G__50113;
continue;
} else {
return ret_value__46078__auto__;
}
break;
}
});
shadow$dom$state_machine__46077__auto__ = function(state_49354){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__46077__auto____0.call(this);
case 1:
return shadow$dom$state_machine__46077__auto____1.call(this,state_49354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__46077__auto____0;
shadow$dom$state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__46077__auto____1;
return shadow$dom$state_machine__46077__auto__;
})()
})();
var state__46246__auto__ = (function (){var statearr_49366 = f__46245__auto__();
(statearr_49366[(6)] = c__46243__auto___50101);

return statearr_49366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46246__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
