goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__47445,p__47446){
var map__47447 = p__47445;
var map__47447__$1 = cljs.core.__destructure_map(map__47447);
var svc = map__47447__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47447__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47447__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47447__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__47448 = p__47446;
var map__47448__$1 = cljs.core.__destructure_map(map__47448);
var msg = map__47448__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47448__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47448__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47448__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47448__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__47454,p__47455){
var map__47457 = p__47454;
var map__47457__$1 = cljs.core.__destructure_map(map__47457);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47457__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__47458 = p__47455;
var map__47458__$1 = cljs.core.__destructure_map(map__47458);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47458__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__47462,p__47463){
var map__47464 = p__47462;
var map__47464__$1 = cljs.core.__destructure_map(map__47464);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47464__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47464__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__47465 = p__47463;
var map__47465__$1 = cljs.core.__destructure_map(map__47465);
var msg = map__47465__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47465__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__47468,tid){
var map__47469 = p__47468;
var map__47469__$1 = cljs.core.__destructure_map(map__47469);
var svc = map__47469__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47469__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__47479 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__47480 = null;
var count__47481 = (0);
var i__47482 = (0);
while(true){
if((i__47482 < count__47481)){
var vec__47497 = chunk__47480.cljs$core$IIndexed$_nth$arity$2(null,i__47482);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47497,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47497,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__47514 = seq__47479;
var G__47515 = chunk__47480;
var G__47516 = count__47481;
var G__47517 = (i__47482 + (1));
seq__47479 = G__47514;
chunk__47480 = G__47515;
count__47481 = G__47516;
i__47482 = G__47517;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47479);
if(temp__5735__auto__){
var seq__47479__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47479__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__47479__$1);
var G__47520 = cljs.core.chunk_rest(seq__47479__$1);
var G__47521 = c__4591__auto__;
var G__47522 = cljs.core.count(c__4591__auto__);
var G__47523 = (0);
seq__47479 = G__47520;
chunk__47480 = G__47521;
count__47481 = G__47522;
i__47482 = G__47523;
continue;
} else {
var vec__47504 = cljs.core.first(seq__47479__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47504,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47504,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__47541 = cljs.core.next(seq__47479__$1);
var G__47542 = null;
var G__47543 = (0);
var G__47544 = (0);
seq__47479 = G__47541;
chunk__47480 = G__47542;
count__47481 = G__47543;
i__47482 = G__47544;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__47470_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__47470_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__47471_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__47471_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__47472_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__47472_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__47473_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__47473_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__47509){
var map__47510 = p__47509;
var map__47510__$1 = cljs.core.__destructure_map(map__47510);
var svc = map__47510__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47510__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47510__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
