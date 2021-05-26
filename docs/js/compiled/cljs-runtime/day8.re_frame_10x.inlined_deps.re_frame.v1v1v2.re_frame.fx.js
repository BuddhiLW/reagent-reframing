goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__38543 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__38544 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__38544);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___38661 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___38661)){
var new_db_38662 = temp__5735__auto___38661;
var fexpr__38554_38663 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__38554_38663.cljs$core$IFn$_invoke$arity$1 ? fexpr__38554_38663.cljs$core$IFn$_invoke$arity$1(new_db_38662) : fexpr__38554_38663.call(null,new_db_38662));
} else {
}

var seq__38556 = cljs.core.seq(effects_without_db);
var chunk__38557 = null;
var count__38558 = (0);
var i__38559 = (0);
while(true){
if((i__38559 < count__38558)){
var vec__38575 = chunk__38557.cljs$core$IIndexed$_nth$arity$2(null,i__38559);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38575,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38575,(1),null);
var temp__5733__auto___38664 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38664)){
var effect_fn_38665 = temp__5733__auto___38664;
(effect_fn_38665.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38665.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38665.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38666 = seq__38556;
var G__38667 = chunk__38557;
var G__38668 = count__38558;
var G__38669 = (i__38559 + (1));
seq__38556 = G__38666;
chunk__38557 = G__38667;
count__38558 = G__38668;
i__38559 = G__38669;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38556);
if(temp__5735__auto__){
var seq__38556__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38556__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__38556__$1);
var G__38670 = cljs.core.chunk_rest(seq__38556__$1);
var G__38671 = c__4591__auto__;
var G__38672 = cljs.core.count(c__4591__auto__);
var G__38673 = (0);
seq__38556 = G__38670;
chunk__38557 = G__38671;
count__38558 = G__38672;
i__38559 = G__38673;
continue;
} else {
var vec__38579 = cljs.core.first(seq__38556__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38579,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38579,(1),null);
var temp__5733__auto___38674 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38674)){
var effect_fn_38675 = temp__5733__auto___38674;
(effect_fn_38675.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38675.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38675.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38676 = cljs.core.next(seq__38556__$1);
var G__38677 = null;
var G__38678 = (0);
var G__38679 = (0);
seq__38556 = G__38676;
chunk__38557 = G__38677;
count__38558 = G__38678;
i__38559 = G__38679;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__38141__auto___38680 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__38142__auto___38681 = (end__38141__auto___38680 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38142__auto___38681,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__38141__auto___38680);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__38543);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___38682 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___38682)){
var new_db_38683 = temp__5735__auto___38682;
var fexpr__38582_38684 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__38582_38684.cljs$core$IFn$_invoke$arity$1 ? fexpr__38582_38684.cljs$core$IFn$_invoke$arity$1(new_db_38683) : fexpr__38582_38684.call(null,new_db_38683));
} else {
}

var seq__38583 = cljs.core.seq(effects_without_db);
var chunk__38584 = null;
var count__38585 = (0);
var i__38586 = (0);
while(true){
if((i__38586 < count__38585)){
var vec__38603 = chunk__38584.cljs$core$IIndexed$_nth$arity$2(null,i__38586);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38603,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38603,(1),null);
var temp__5733__auto___38685 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38685)){
var effect_fn_38686 = temp__5733__auto___38685;
(effect_fn_38686.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38686.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38686.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38687 = seq__38583;
var G__38688 = chunk__38584;
var G__38689 = count__38585;
var G__38690 = (i__38586 + (1));
seq__38583 = G__38687;
chunk__38584 = G__38688;
count__38585 = G__38689;
i__38586 = G__38690;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38583);
if(temp__5735__auto__){
var seq__38583__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38583__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__38583__$1);
var G__38691 = cljs.core.chunk_rest(seq__38583__$1);
var G__38692 = c__4591__auto__;
var G__38693 = cljs.core.count(c__4591__auto__);
var G__38694 = (0);
seq__38583 = G__38691;
chunk__38584 = G__38692;
count__38585 = G__38693;
i__38586 = G__38694;
continue;
} else {
var vec__38608 = cljs.core.first(seq__38583__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38608,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38608,(1),null);
var temp__5733__auto___38695 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38695)){
var effect_fn_38696 = temp__5733__auto___38695;
(effect_fn_38696.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38696.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38696.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38697 = cljs.core.next(seq__38583__$1);
var G__38698 = null;
var G__38699 = (0);
var G__38700 = (0);
seq__38583 = G__38697;
chunk__38584 = G__38698;
count__38585 = G__38699;
i__38586 = G__38700;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__38612){
var map__38613 = p__38612;
var map__38613__$1 = cljs.core.__destructure_map(map__38613);
var effect = map__38613__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38613__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38613__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(value);
} else {
var seq__38632 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__38633 = null;
var count__38634 = (0);
var i__38635 = (0);
while(true){
if((i__38635 < count__38634)){
var effect = chunk__38633.cljs$core$IIndexed$_nth$arity$2(null,i__38635);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__38701 = seq__38632;
var G__38702 = chunk__38633;
var G__38703 = count__38634;
var G__38704 = (i__38635 + (1));
seq__38632 = G__38701;
chunk__38633 = G__38702;
count__38634 = G__38703;
i__38635 = G__38704;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38632);
if(temp__5735__auto__){
var seq__38632__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38632__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__38632__$1);
var G__38705 = cljs.core.chunk_rest(seq__38632__$1);
var G__38706 = c__4591__auto__;
var G__38707 = cljs.core.count(c__4591__auto__);
var G__38708 = (0);
seq__38632 = G__38705;
chunk__38633 = G__38706;
count__38634 = G__38707;
i__38635 = G__38708;
continue;
} else {
var effect = cljs.core.first(seq__38632__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__38709 = cljs.core.next(seq__38632__$1);
var G__38710 = null;
var G__38711 = (0);
var G__38712 = (0);
seq__38632 = G__38709;
chunk__38633 = G__38710;
count__38634 = G__38711;
i__38635 = G__38712;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__38637 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__38638 = null;
var count__38639 = (0);
var i__38640 = (0);
while(true){
if((i__38640 < count__38639)){
var vec__38647 = chunk__38638.cljs$core$IIndexed$_nth$arity$2(null,i__38640);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38647,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38647,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___38715 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38715)){
var effect_fn_38716 = temp__5733__auto___38715;
(effect_fn_38716.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38716.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38716.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__38717 = seq__38637;
var G__38718 = chunk__38638;
var G__38719 = count__38639;
var G__38720 = (i__38640 + (1));
seq__38637 = G__38717;
chunk__38638 = G__38718;
count__38639 = G__38719;
i__38640 = G__38720;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38637);
if(temp__5735__auto__){
var seq__38637__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38637__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__38637__$1);
var G__38721 = cljs.core.chunk_rest(seq__38637__$1);
var G__38722 = c__4591__auto__;
var G__38723 = cljs.core.count(c__4591__auto__);
var G__38724 = (0);
seq__38637 = G__38721;
chunk__38638 = G__38722;
count__38639 = G__38723;
i__38640 = G__38724;
continue;
} else {
var vec__38650 = cljs.core.first(seq__38637__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38650,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38650,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___38725 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38725)){
var effect_fn_38726 = temp__5733__auto___38725;
(effect_fn_38726.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38726.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38726.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__38727 = cljs.core.next(seq__38637__$1);
var G__38728 = null;
var G__38729 = (0);
var G__38730 = (0);
seq__38637 = G__38727;
chunk__38638 = G__38728;
count__38639 = G__38729;
i__38640 = G__38730;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__38653 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__38654 = null;
var count__38655 = (0);
var i__38656 = (0);
while(true){
if((i__38656 < count__38655)){
var event = chunk__38654.cljs$core$IIndexed$_nth$arity$2(null,i__38656);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__38733 = seq__38653;
var G__38734 = chunk__38654;
var G__38735 = count__38655;
var G__38736 = (i__38656 + (1));
seq__38653 = G__38733;
chunk__38654 = G__38734;
count__38655 = G__38735;
i__38656 = G__38736;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38653);
if(temp__5735__auto__){
var seq__38653__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38653__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__38653__$1);
var G__38737 = cljs.core.chunk_rest(seq__38653__$1);
var G__38738 = c__4591__auto__;
var G__38739 = cljs.core.count(c__4591__auto__);
var G__38740 = (0);
seq__38653 = G__38737;
chunk__38654 = G__38738;
count__38655 = G__38739;
i__38656 = G__38740;
continue;
} else {
var event = cljs.core.first(seq__38653__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__38741 = cljs.core.next(seq__38653__$1);
var G__38742 = null;
var G__38743 = (0);
var G__38744 = (0);
seq__38653 = G__38741;
chunk__38654 = G__38742;
count__38655 = G__38743;
i__38656 = G__38744;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__38657 = cljs.core.seq(value);
var chunk__38658 = null;
var count__38659 = (0);
var i__38660 = (0);
while(true){
if((i__38660 < count__38659)){
var event = chunk__38658.cljs$core$IIndexed$_nth$arity$2(null,i__38660);
clear_event(event);


var G__38745 = seq__38657;
var G__38746 = chunk__38658;
var G__38747 = count__38659;
var G__38748 = (i__38660 + (1));
seq__38657 = G__38745;
chunk__38658 = G__38746;
count__38659 = G__38747;
i__38660 = G__38748;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38657);
if(temp__5735__auto__){
var seq__38657__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38657__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__38657__$1);
var G__38749 = cljs.core.chunk_rest(seq__38657__$1);
var G__38750 = c__4591__auto__;
var G__38751 = cljs.core.count(c__4591__auto__);
var G__38752 = (0);
seq__38657 = G__38749;
chunk__38658 = G__38750;
count__38659 = G__38751;
i__38660 = G__38752;
continue;
} else {
var event = cljs.core.first(seq__38657__$1);
clear_event(event);


var G__38754 = cljs.core.next(seq__38657__$1);
var G__38755 = null;
var G__38756 = (0);
var G__38757 = (0);
seq__38657 = G__38754;
chunk__38658 = G__38755;
count__38659 = G__38756;
i__38660 = G__38757;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.js.map
