goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__42984 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__42985 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__42985);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___43087 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___43087)){
var new_db_43088 = temp__5735__auto___43087;
var fexpr__42987_43089 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__42987_43089.cljs$core$IFn$_invoke$arity$1 ? fexpr__42987_43089.cljs$core$IFn$_invoke$arity$1(new_db_43088) : fexpr__42987_43089.call(null,new_db_43088));
} else {
}

var seq__42988 = cljs.core.seq(effects_without_db);
var chunk__42989 = null;
var count__42990 = (0);
var i__42991 = (0);
while(true){
if((i__42991 < count__42990)){
var vec__42999 = chunk__42989.cljs$core$IIndexed$_nth$arity$2(null,i__42991);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42999,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42999,(1),null);
var temp__5733__auto___43093 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___43093)){
var effect_fn_43094 = temp__5733__auto___43093;
(effect_fn_43094.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43094.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43094.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__43096 = seq__42988;
var G__43097 = chunk__42989;
var G__43098 = count__42990;
var G__43099 = (i__42991 + (1));
seq__42988 = G__43096;
chunk__42989 = G__43097;
count__42990 = G__43098;
i__42991 = G__43099;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42988);
if(temp__5735__auto__){
var seq__42988__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42988__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__42988__$1);
var G__43103 = cljs.core.chunk_rest(seq__42988__$1);
var G__43104 = c__4591__auto__;
var G__43105 = cljs.core.count(c__4591__auto__);
var G__43106 = (0);
seq__42988 = G__43103;
chunk__42989 = G__43104;
count__42990 = G__43105;
i__42991 = G__43106;
continue;
} else {
var vec__43003 = cljs.core.first(seq__42988__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43003,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43003,(1),null);
var temp__5733__auto___43107 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___43107)){
var effect_fn_43108 = temp__5733__auto___43107;
(effect_fn_43108.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43108.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43108.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__43109 = cljs.core.next(seq__42988__$1);
var G__43110 = null;
var G__43111 = (0);
var G__43112 = (0);
seq__42988 = G__43109;
chunk__42989 = G__43110;
count__42990 = G__43111;
i__42991 = G__43112;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__42486__auto___43113 = re_frame.interop.now();
var duration__42487__auto___43114 = (end__42486__auto___43113 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__42487__auto___43114,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__42486__auto___43113);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__42984);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___43116 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___43116)){
var new_db_43117 = temp__5735__auto___43116;
var fexpr__43011_43119 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__43011_43119.cljs$core$IFn$_invoke$arity$1 ? fexpr__43011_43119.cljs$core$IFn$_invoke$arity$1(new_db_43117) : fexpr__43011_43119.call(null,new_db_43117));
} else {
}

var seq__43012 = cljs.core.seq(effects_without_db);
var chunk__43013 = null;
var count__43014 = (0);
var i__43015 = (0);
while(true){
if((i__43015 < count__43014)){
var vec__43023 = chunk__43013.cljs$core$IIndexed$_nth$arity$2(null,i__43015);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43023,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43023,(1),null);
var temp__5733__auto___43120 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___43120)){
var effect_fn_43121 = temp__5733__auto___43120;
(effect_fn_43121.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43121.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43121.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__43122 = seq__43012;
var G__43123 = chunk__43013;
var G__43124 = count__43014;
var G__43125 = (i__43015 + (1));
seq__43012 = G__43122;
chunk__43013 = G__43123;
count__43014 = G__43124;
i__43015 = G__43125;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43012);
if(temp__5735__auto__){
var seq__43012__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43012__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__43012__$1);
var G__43126 = cljs.core.chunk_rest(seq__43012__$1);
var G__43127 = c__4591__auto__;
var G__43128 = cljs.core.count(c__4591__auto__);
var G__43129 = (0);
seq__43012 = G__43126;
chunk__43013 = G__43127;
count__43014 = G__43128;
i__43015 = G__43129;
continue;
} else {
var vec__43027 = cljs.core.first(seq__43012__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43027,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43027,(1),null);
var temp__5733__auto___43134 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___43134)){
var effect_fn_43135 = temp__5733__auto___43134;
(effect_fn_43135.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43135.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43135.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__43136 = cljs.core.next(seq__43012__$1);
var G__43137 = null;
var G__43138 = (0);
var G__43139 = (0);
seq__43012 = G__43136;
chunk__43013 = G__43137;
count__43014 = G__43138;
i__43015 = G__43139;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__43031){
var map__43032 = p__43031;
var map__43032__$1 = cljs.core.__destructure_map(map__43032);
var effect = map__43032__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43032__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43032__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__43034 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__43035 = null;
var count__43036 = (0);
var i__43037 = (0);
while(true){
if((i__43037 < count__43036)){
var effect = chunk__43035.cljs$core$IIndexed$_nth$arity$2(null,i__43037);
re_frame.fx.dispatch_later(effect);


var G__43156 = seq__43034;
var G__43157 = chunk__43035;
var G__43158 = count__43036;
var G__43159 = (i__43037 + (1));
seq__43034 = G__43156;
chunk__43035 = G__43157;
count__43036 = G__43158;
i__43037 = G__43159;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43034);
if(temp__5735__auto__){
var seq__43034__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43034__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__43034__$1);
var G__43167 = cljs.core.chunk_rest(seq__43034__$1);
var G__43168 = c__4591__auto__;
var G__43169 = cljs.core.count(c__4591__auto__);
var G__43170 = (0);
seq__43034 = G__43167;
chunk__43035 = G__43168;
count__43036 = G__43169;
i__43037 = G__43170;
continue;
} else {
var effect = cljs.core.first(seq__43034__$1);
re_frame.fx.dispatch_later(effect);


var G__43171 = cljs.core.next(seq__43034__$1);
var G__43172 = null;
var G__43173 = (0);
var G__43174 = (0);
seq__43034 = G__43171;
chunk__43035 = G__43172;
count__43036 = G__43173;
i__43037 = G__43174;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__43041 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__43042 = null;
var count__43043 = (0);
var i__43044 = (0);
while(true){
if((i__43044 < count__43043)){
var vec__43061 = chunk__43042.cljs$core$IIndexed$_nth$arity$2(null,i__43044);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43061,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43061,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___43182 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___43182)){
var effect_fn_43183 = temp__5733__auto___43182;
(effect_fn_43183.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43183.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43183.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__43184 = seq__43041;
var G__43185 = chunk__43042;
var G__43186 = count__43043;
var G__43187 = (i__43044 + (1));
seq__43041 = G__43184;
chunk__43042 = G__43185;
count__43043 = G__43186;
i__43044 = G__43187;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43041);
if(temp__5735__auto__){
var seq__43041__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43041__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__43041__$1);
var G__43191 = cljs.core.chunk_rest(seq__43041__$1);
var G__43192 = c__4591__auto__;
var G__43193 = cljs.core.count(c__4591__auto__);
var G__43194 = (0);
seq__43041 = G__43191;
chunk__43042 = G__43192;
count__43043 = G__43193;
i__43044 = G__43194;
continue;
} else {
var vec__43064 = cljs.core.first(seq__43041__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43064,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43064,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___43198 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___43198)){
var effect_fn_43199 = temp__5733__auto___43198;
(effect_fn_43199.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43199.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43199.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__43200 = cljs.core.next(seq__43041__$1);
var G__43201 = null;
var G__43202 = (0);
var G__43203 = (0);
seq__43041 = G__43200;
chunk__43042 = G__43201;
count__43043 = G__43202;
i__43044 = G__43203;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__43067 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__43068 = null;
var count__43069 = (0);
var i__43070 = (0);
while(true){
if((i__43070 < count__43069)){
var event = chunk__43068.cljs$core$IIndexed$_nth$arity$2(null,i__43070);
re_frame.router.dispatch(event);


var G__43204 = seq__43067;
var G__43205 = chunk__43068;
var G__43206 = count__43069;
var G__43207 = (i__43070 + (1));
seq__43067 = G__43204;
chunk__43068 = G__43205;
count__43069 = G__43206;
i__43070 = G__43207;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43067);
if(temp__5735__auto__){
var seq__43067__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43067__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__43067__$1);
var G__43208 = cljs.core.chunk_rest(seq__43067__$1);
var G__43209 = c__4591__auto__;
var G__43210 = cljs.core.count(c__4591__auto__);
var G__43211 = (0);
seq__43067 = G__43208;
chunk__43068 = G__43209;
count__43069 = G__43210;
i__43070 = G__43211;
continue;
} else {
var event = cljs.core.first(seq__43067__$1);
re_frame.router.dispatch(event);


var G__43212 = cljs.core.next(seq__43067__$1);
var G__43213 = null;
var G__43214 = (0);
var G__43215 = (0);
seq__43067 = G__43212;
chunk__43068 = G__43213;
count__43069 = G__43214;
i__43070 = G__43215;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__43074 = cljs.core.seq(value);
var chunk__43075 = null;
var count__43076 = (0);
var i__43077 = (0);
while(true){
if((i__43077 < count__43076)){
var event = chunk__43075.cljs$core$IIndexed$_nth$arity$2(null,i__43077);
clear_event(event);


var G__43217 = seq__43074;
var G__43218 = chunk__43075;
var G__43219 = count__43076;
var G__43220 = (i__43077 + (1));
seq__43074 = G__43217;
chunk__43075 = G__43218;
count__43076 = G__43219;
i__43077 = G__43220;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43074);
if(temp__5735__auto__){
var seq__43074__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43074__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__43074__$1);
var G__43222 = cljs.core.chunk_rest(seq__43074__$1);
var G__43223 = c__4591__auto__;
var G__43224 = cljs.core.count(c__4591__auto__);
var G__43225 = (0);
seq__43074 = G__43222;
chunk__43075 = G__43223;
count__43076 = G__43224;
i__43077 = G__43225;
continue;
} else {
var event = cljs.core.first(seq__43074__$1);
clear_event(event);


var G__43229 = cljs.core.next(seq__43074__$1);
var G__43230 = null;
var G__43231 = (0);
var G__43232 = (0);
seq__43074 = G__43229;
chunk__43075 = G__43230;
count__43076 = G__43231;
i__43077 = G__43232;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
