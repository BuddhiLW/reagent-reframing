goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__46336,res){
var map__46341 = p__46336;
var map__46341__$1 = cljs.core.__destructure_map(map__46341);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46341__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46341__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__46344 = res;
var G__46344__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46344,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__46344);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46344__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__46344__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__46365 = arguments.length;
switch (G__46365) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__46366,msg,handlers,timeout_after_ms){
var map__46367 = p__46366;
var map__46367__$1 = cljs.core.__destructure_map(map__46367);
var runtime = map__46367__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46367__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___46520 = arguments.length;
var i__4772__auto___46521 = (0);
while(true){
if((i__4772__auto___46521 < len__4771__auto___46520)){
args__4777__auto__.push((arguments[i__4772__auto___46521]));

var G__46522 = (i__4772__auto___46521 + (1));
i__4772__auto___46521 = G__46522;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__46373,ev,args){
var map__46374 = p__46373;
var map__46374__$1 = cljs.core.__destructure_map(map__46374);
var runtime = map__46374__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46374__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__46376 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__46379 = null;
var count__46380 = (0);
var i__46381 = (0);
while(true){
if((i__46381 < count__46380)){
var ext = chunk__46379.cljs$core$IIndexed$_nth$arity$2(null,i__46381);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__46524 = seq__46376;
var G__46525 = chunk__46379;
var G__46526 = count__46380;
var G__46527 = (i__46381 + (1));
seq__46376 = G__46524;
chunk__46379 = G__46525;
count__46380 = G__46526;
i__46381 = G__46527;
continue;
} else {
var G__46528 = seq__46376;
var G__46529 = chunk__46379;
var G__46530 = count__46380;
var G__46531 = (i__46381 + (1));
seq__46376 = G__46528;
chunk__46379 = G__46529;
count__46380 = G__46530;
i__46381 = G__46531;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46376);
if(temp__5735__auto__){
var seq__46376__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46376__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__46376__$1);
var G__46534 = cljs.core.chunk_rest(seq__46376__$1);
var G__46535 = c__4591__auto__;
var G__46536 = cljs.core.count(c__4591__auto__);
var G__46537 = (0);
seq__46376 = G__46534;
chunk__46379 = G__46535;
count__46380 = G__46536;
i__46381 = G__46537;
continue;
} else {
var ext = cljs.core.first(seq__46376__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__46538 = cljs.core.next(seq__46376__$1);
var G__46539 = null;
var G__46540 = (0);
var G__46541 = (0);
seq__46376 = G__46538;
chunk__46379 = G__46539;
count__46380 = G__46540;
i__46381 = G__46541;
continue;
} else {
var G__46543 = cljs.core.next(seq__46376__$1);
var G__46544 = null;
var G__46545 = (0);
var G__46546 = (0);
seq__46376 = G__46543;
chunk__46379 = G__46544;
count__46380 = G__46545;
i__46381 = G__46546;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq46368){
var G__46369 = cljs.core.first(seq46368);
var seq46368__$1 = cljs.core.next(seq46368);
var G__46370 = cljs.core.first(seq46368__$1);
var seq46368__$2 = cljs.core.next(seq46368__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46369,G__46370,seq46368__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__46396,p__46397){
var map__46399 = p__46396;
var map__46399__$1 = cljs.core.__destructure_map(map__46399);
var runtime = map__46399__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46399__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__46401 = p__46397;
var map__46401__$1 = cljs.core.__destructure_map(map__46401);
var msg = map__46401__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46401__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__46409 = cljs.core.deref(state_ref);
var map__46409__$1 = cljs.core.__destructure_map(map__46409);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46409__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46409__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__46414){
var map__46415 = p__46414;
var map__46415__$1 = cljs.core.__destructure_map(map__46415);
var runtime = map__46415__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46415__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4160__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__46425,msg){
var map__46427 = p__46425;
var map__46427__$1 = cljs.core.__destructure_map(map__46427);
var runtime = map__46427__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46427__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__46452,key,p__46453){
var map__46455 = p__46452;
var map__46455__$1 = cljs.core.__destructure_map(map__46455);
var state = map__46455__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46455__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__46457 = p__46453;
var map__46457__$1 = cljs.core.__destructure_map(map__46457);
var spec = map__46457__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46457__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__46467,key,spec){
var map__46468 = p__46467;
var map__46468__$1 = cljs.core.__destructure_map(map__46468);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46468__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__46469_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__46469_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__46470_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__46470_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__46471_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__46471_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__46472_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__46472_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__46473_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__46473_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__46478,key){
var map__46479 = p__46478;
var map__46479__$1 = cljs.core.__destructure_map(map__46479);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46479__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__46480,msg){
var map__46481 = p__46480;
var map__46481__$1 = cljs.core.__destructure_map(map__46481);
var runtime = map__46481__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46481__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__46492,p__46493){
var map__46498 = p__46492;
var map__46498__$1 = cljs.core.__destructure_map(map__46498);
var runtime = map__46498__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46498__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__46499 = p__46493;
var map__46499__$1 = cljs.core.__destructure_map(map__46499);
var msg = map__46499__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46499__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46499__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__46505 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__46507 = null;
var count__46508 = (0);
var i__46509 = (0);
while(true){
if((i__46509 < count__46508)){
var map__46515 = chunk__46507.cljs$core$IIndexed$_nth$arity$2(null,i__46509);
var map__46515__$1 = cljs.core.__destructure_map(map__46515);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46515__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__46586 = seq__46505;
var G__46587 = chunk__46507;
var G__46588 = count__46508;
var G__46589 = (i__46509 + (1));
seq__46505 = G__46586;
chunk__46507 = G__46587;
count__46508 = G__46588;
i__46509 = G__46589;
continue;
} else {
var G__46591 = seq__46505;
var G__46592 = chunk__46507;
var G__46593 = count__46508;
var G__46594 = (i__46509 + (1));
seq__46505 = G__46591;
chunk__46507 = G__46592;
count__46508 = G__46593;
i__46509 = G__46594;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46505);
if(temp__5735__auto__){
var seq__46505__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46505__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__46505__$1);
var G__46595 = cljs.core.chunk_rest(seq__46505__$1);
var G__46596 = c__4591__auto__;
var G__46597 = cljs.core.count(c__4591__auto__);
var G__46598 = (0);
seq__46505 = G__46595;
chunk__46507 = G__46596;
count__46508 = G__46597;
i__46509 = G__46598;
continue;
} else {
var map__46516 = cljs.core.first(seq__46505__$1);
var map__46516__$1 = cljs.core.__destructure_map(map__46516);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46516__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__46600 = cljs.core.next(seq__46505__$1);
var G__46601 = null;
var G__46602 = (0);
var G__46603 = (0);
seq__46505 = G__46600;
chunk__46507 = G__46601;
count__46508 = G__46602;
i__46509 = G__46603;
continue;
} else {
var G__46604 = cljs.core.next(seq__46505__$1);
var G__46605 = null;
var G__46606 = (0);
var G__46607 = (0);
seq__46505 = G__46604;
chunk__46507 = G__46605;
count__46508 = G__46606;
i__46509 = G__46607;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
