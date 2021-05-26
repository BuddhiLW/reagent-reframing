goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4777__auto__ = [];
var len__4771__auto___51179 = arguments.length;
var i__4772__auto___51180 = (0);
while(true){
if((i__4772__auto___51180 < len__4771__auto___51179)){
args__4777__auto__.push((arguments[i__4772__auto___51180]));

var G__51181 = (i__4772__auto___51180 + (1));
i__4772__auto___51180 = G__51181;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq50943){
var G__50944 = cljs.core.first(seq50943);
var seq50943__$1 = cljs.core.next(seq50943);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50944,seq50943__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__50957 = cljs.core.seq(sources);
var chunk__50958 = null;
var count__50959 = (0);
var i__50960 = (0);
while(true){
if((i__50960 < count__50959)){
var map__50975 = chunk__50958.cljs$core$IIndexed$_nth$arity$2(null,i__50960);
var map__50975__$1 = cljs.core.__destructure_map(map__50975);
var src = map__50975__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50975__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50975__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50975__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50975__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e50976){var e_51188 = e50976;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51188);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51188.message)].join('')));
}

var G__51189 = seq__50957;
var G__51190 = chunk__50958;
var G__51191 = count__50959;
var G__51192 = (i__50960 + (1));
seq__50957 = G__51189;
chunk__50958 = G__51190;
count__50959 = G__51191;
i__50960 = G__51192;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50957);
if(temp__5735__auto__){
var seq__50957__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50957__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__50957__$1);
var G__51195 = cljs.core.chunk_rest(seq__50957__$1);
var G__51196 = c__4591__auto__;
var G__51197 = cljs.core.count(c__4591__auto__);
var G__51198 = (0);
seq__50957 = G__51195;
chunk__50958 = G__51196;
count__50959 = G__51197;
i__50960 = G__51198;
continue;
} else {
var map__50977 = cljs.core.first(seq__50957__$1);
var map__50977__$1 = cljs.core.__destructure_map(map__50977);
var src = map__50977__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50977__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50977__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50977__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50977__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e50979){var e_51203 = e50979;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51203);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51203.message)].join('')));
}

var G__51205 = cljs.core.next(seq__50957__$1);
var G__51206 = null;
var G__51207 = (0);
var G__51208 = (0);
seq__50957 = G__51205;
chunk__50958 = G__51206;
count__50959 = G__51207;
i__50960 = G__51208;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__50982 = cljs.core.seq(js_requires);
var chunk__50983 = null;
var count__50984 = (0);
var i__50985 = (0);
while(true){
if((i__50985 < count__50984)){
var js_ns = chunk__50983.cljs$core$IIndexed$_nth$arity$2(null,i__50985);
var require_str_51214 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51214);


var G__51215 = seq__50982;
var G__51216 = chunk__50983;
var G__51217 = count__50984;
var G__51218 = (i__50985 + (1));
seq__50982 = G__51215;
chunk__50983 = G__51216;
count__50984 = G__51217;
i__50985 = G__51218;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50982);
if(temp__5735__auto__){
var seq__50982__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50982__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__50982__$1);
var G__51221 = cljs.core.chunk_rest(seq__50982__$1);
var G__51223 = c__4591__auto__;
var G__51225 = cljs.core.count(c__4591__auto__);
var G__51226 = (0);
seq__50982 = G__51221;
chunk__50983 = G__51223;
count__50984 = G__51225;
i__50985 = G__51226;
continue;
} else {
var js_ns = cljs.core.first(seq__50982__$1);
var require_str_51227 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51227);


var G__51228 = cljs.core.next(seq__50982__$1);
var G__51229 = null;
var G__51230 = (0);
var G__51231 = (0);
seq__50982 = G__51228;
chunk__50983 = G__51229;
count__50984 = G__51230;
i__50985 = G__51231;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__50991){
var map__50992 = p__50991;
var map__50992__$1 = cljs.core.__destructure_map(map__50992);
var msg = map__50992__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50992__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50992__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4564__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50993(s__50994){
return (new cljs.core.LazySeq(null,(function (){
var s__50994__$1 = s__50994;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50994__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__50999 = cljs.core.first(xs__6292__auto__);
var map__50999__$1 = cljs.core.__destructure_map(map__50999);
var src = map__50999__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50999__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50999__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4560__auto__ = ((function (s__50994__$1,map__50999,map__50999__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50992,map__50992__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50993_$_iter__50995(s__50996){
return (new cljs.core.LazySeq(null,((function (s__50994__$1,map__50999,map__50999__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50992,map__50992__$1,msg,info,reload_info){
return (function (){
var s__50996__$1 = s__50996;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__50996__$1);
if(temp__5735__auto____$1){
var s__50996__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50996__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__50996__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__50998 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__50997 = (0);
while(true){
if((i__50997 < size__4563__auto__)){
var warning = cljs.core._nth(c__4562__auto__,i__50997);
cljs.core.chunk_append(b__50998,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__51236 = (i__50997 + (1));
i__50997 = G__51236;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50998),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50993_$_iter__50995(cljs.core.chunk_rest(s__50996__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50998),null);
}
} else {
var warning = cljs.core.first(s__50996__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50993_$_iter__50995(cljs.core.rest(s__50996__$2)));
}
} else {
return null;
}
break;
}
});})(s__50994__$1,map__50999,map__50999__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50992,map__50992__$1,msg,info,reload_info))
,null,null));
});})(s__50994__$1,map__50999,map__50999__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50992,map__50992__$1,msg,info,reload_info))
;
var fs__4561__auto__ = cljs.core.seq(iterys__4560__auto__(warnings));
if(fs__4561__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4561__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50993(cljs.core.rest(s__50994__$1)));
} else {
var G__51238 = cljs.core.rest(s__50994__$1);
s__50994__$1 = G__51238;
continue;
}
} else {
var G__51239 = cljs.core.rest(s__50994__$1);
s__50994__$1 = G__51239;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__51006_51241 = cljs.core.seq(warnings);
var chunk__51007_51242 = null;
var count__51008_51243 = (0);
var i__51009_51244 = (0);
while(true){
if((i__51009_51244 < count__51008_51243)){
var map__51012_51250 = chunk__51007_51242.cljs$core$IIndexed$_nth$arity$2(null,i__51009_51244);
var map__51012_51251__$1 = cljs.core.__destructure_map(map__51012_51250);
var w_51252 = map__51012_51251__$1;
var msg_51253__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51012_51251__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51012_51251__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51255 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51012_51251__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51012_51251__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51256)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51254),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51255),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51253__$1)].join(''));


var G__51262 = seq__51006_51241;
var G__51263 = chunk__51007_51242;
var G__51264 = count__51008_51243;
var G__51265 = (i__51009_51244 + (1));
seq__51006_51241 = G__51262;
chunk__51007_51242 = G__51263;
count__51008_51243 = G__51264;
i__51009_51244 = G__51265;
continue;
} else {
var temp__5735__auto___51267 = cljs.core.seq(seq__51006_51241);
if(temp__5735__auto___51267){
var seq__51006_51269__$1 = temp__5735__auto___51267;
if(cljs.core.chunked_seq_QMARK_(seq__51006_51269__$1)){
var c__4591__auto___51271 = cljs.core.chunk_first(seq__51006_51269__$1);
var G__51272 = cljs.core.chunk_rest(seq__51006_51269__$1);
var G__51273 = c__4591__auto___51271;
var G__51274 = cljs.core.count(c__4591__auto___51271);
var G__51275 = (0);
seq__51006_51241 = G__51272;
chunk__51007_51242 = G__51273;
count__51008_51243 = G__51274;
i__51009_51244 = G__51275;
continue;
} else {
var map__51013_51280 = cljs.core.first(seq__51006_51269__$1);
var map__51013_51281__$1 = cljs.core.__destructure_map(map__51013_51280);
var w_51282 = map__51013_51281__$1;
var msg_51283__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51013_51281__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51284 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51013_51281__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51285 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51013_51281__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51013_51281__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51286)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51284),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51285),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51283__$1)].join(''));


var G__51292 = cljs.core.next(seq__51006_51269__$1);
var G__51293 = null;
var G__51294 = (0);
var G__51295 = (0);
seq__51006_51241 = G__51292;
chunk__51007_51242 = G__51293;
count__51008_51243 = G__51294;
i__51009_51244 = G__51295;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__50990_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__50990_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__51021){
var map__51022 = p__51021;
var map__51022__$1 = cljs.core.__destructure_map(map__51022);
var msg = map__51022__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51022__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__51023 = cljs.core.seq(updates);
var chunk__51026 = null;
var count__51027 = (0);
var i__51028 = (0);
while(true){
if((i__51028 < count__51027)){
var path = chunk__51026.cljs$core$IIndexed$_nth$arity$2(null,i__51028);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51084_51319 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51088_51320 = null;
var count__51089_51321 = (0);
var i__51090_51322 = (0);
while(true){
if((i__51090_51322 < count__51089_51321)){
var node_51327 = chunk__51088_51320.cljs$core$IIndexed$_nth$arity$2(null,i__51090_51322);
if(cljs.core.not(node_51327.shadow$old)){
var path_match_51328 = shadow.cljs.devtools.client.browser.match_paths(node_51327.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51328)){
var new_link_51329 = (function (){var G__51100 = node_51327.cloneNode(true);
G__51100.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51328),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51100;
})();
(node_51327.shadow$old = true);

(new_link_51329.onload = ((function (seq__51084_51319,chunk__51088_51320,count__51089_51321,i__51090_51322,seq__51023,chunk__51026,count__51027,i__51028,new_link_51329,path_match_51328,node_51327,path,map__51022,map__51022__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51327);
});})(seq__51084_51319,chunk__51088_51320,count__51089_51321,i__51090_51322,seq__51023,chunk__51026,count__51027,i__51028,new_link_51329,path_match_51328,node_51327,path,map__51022,map__51022__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51328], 0));

goog.dom.insertSiblingAfter(new_link_51329,node_51327);


var G__51334 = seq__51084_51319;
var G__51335 = chunk__51088_51320;
var G__51336 = count__51089_51321;
var G__51337 = (i__51090_51322 + (1));
seq__51084_51319 = G__51334;
chunk__51088_51320 = G__51335;
count__51089_51321 = G__51336;
i__51090_51322 = G__51337;
continue;
} else {
var G__51338 = seq__51084_51319;
var G__51339 = chunk__51088_51320;
var G__51340 = count__51089_51321;
var G__51341 = (i__51090_51322 + (1));
seq__51084_51319 = G__51338;
chunk__51088_51320 = G__51339;
count__51089_51321 = G__51340;
i__51090_51322 = G__51341;
continue;
}
} else {
var G__51342 = seq__51084_51319;
var G__51343 = chunk__51088_51320;
var G__51344 = count__51089_51321;
var G__51345 = (i__51090_51322 + (1));
seq__51084_51319 = G__51342;
chunk__51088_51320 = G__51343;
count__51089_51321 = G__51344;
i__51090_51322 = G__51345;
continue;
}
} else {
var temp__5735__auto___51346 = cljs.core.seq(seq__51084_51319);
if(temp__5735__auto___51346){
var seq__51084_51347__$1 = temp__5735__auto___51346;
if(cljs.core.chunked_seq_QMARK_(seq__51084_51347__$1)){
var c__4591__auto___51349 = cljs.core.chunk_first(seq__51084_51347__$1);
var G__51350 = cljs.core.chunk_rest(seq__51084_51347__$1);
var G__51351 = c__4591__auto___51349;
var G__51352 = cljs.core.count(c__4591__auto___51349);
var G__51353 = (0);
seq__51084_51319 = G__51350;
chunk__51088_51320 = G__51351;
count__51089_51321 = G__51352;
i__51090_51322 = G__51353;
continue;
} else {
var node_51355 = cljs.core.first(seq__51084_51347__$1);
if(cljs.core.not(node_51355.shadow$old)){
var path_match_51357 = shadow.cljs.devtools.client.browser.match_paths(node_51355.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51357)){
var new_link_51359 = (function (){var G__51104 = node_51355.cloneNode(true);
G__51104.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51357),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51104;
})();
(node_51355.shadow$old = true);

(new_link_51359.onload = ((function (seq__51084_51319,chunk__51088_51320,count__51089_51321,i__51090_51322,seq__51023,chunk__51026,count__51027,i__51028,new_link_51359,path_match_51357,node_51355,seq__51084_51347__$1,temp__5735__auto___51346,path,map__51022,map__51022__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51355);
});})(seq__51084_51319,chunk__51088_51320,count__51089_51321,i__51090_51322,seq__51023,chunk__51026,count__51027,i__51028,new_link_51359,path_match_51357,node_51355,seq__51084_51347__$1,temp__5735__auto___51346,path,map__51022,map__51022__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51357], 0));

goog.dom.insertSiblingAfter(new_link_51359,node_51355);


var G__51361 = cljs.core.next(seq__51084_51347__$1);
var G__51362 = null;
var G__51363 = (0);
var G__51364 = (0);
seq__51084_51319 = G__51361;
chunk__51088_51320 = G__51362;
count__51089_51321 = G__51363;
i__51090_51322 = G__51364;
continue;
} else {
var G__51365 = cljs.core.next(seq__51084_51347__$1);
var G__51366 = null;
var G__51367 = (0);
var G__51368 = (0);
seq__51084_51319 = G__51365;
chunk__51088_51320 = G__51366;
count__51089_51321 = G__51367;
i__51090_51322 = G__51368;
continue;
}
} else {
var G__51369 = cljs.core.next(seq__51084_51347__$1);
var G__51370 = null;
var G__51371 = (0);
var G__51372 = (0);
seq__51084_51319 = G__51369;
chunk__51088_51320 = G__51370;
count__51089_51321 = G__51371;
i__51090_51322 = G__51372;
continue;
}
}
} else {
}
}
break;
}


var G__51373 = seq__51023;
var G__51374 = chunk__51026;
var G__51375 = count__51027;
var G__51376 = (i__51028 + (1));
seq__51023 = G__51373;
chunk__51026 = G__51374;
count__51027 = G__51375;
i__51028 = G__51376;
continue;
} else {
var G__51377 = seq__51023;
var G__51378 = chunk__51026;
var G__51379 = count__51027;
var G__51380 = (i__51028 + (1));
seq__51023 = G__51377;
chunk__51026 = G__51378;
count__51027 = G__51379;
i__51028 = G__51380;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51023);
if(temp__5735__auto__){
var seq__51023__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51023__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__51023__$1);
var G__51381 = cljs.core.chunk_rest(seq__51023__$1);
var G__51382 = c__4591__auto__;
var G__51383 = cljs.core.count(c__4591__auto__);
var G__51384 = (0);
seq__51023 = G__51381;
chunk__51026 = G__51382;
count__51027 = G__51383;
i__51028 = G__51384;
continue;
} else {
var path = cljs.core.first(seq__51023__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51106_51385 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51110_51386 = null;
var count__51111_51387 = (0);
var i__51112_51388 = (0);
while(true){
if((i__51112_51388 < count__51111_51387)){
var node_51389 = chunk__51110_51386.cljs$core$IIndexed$_nth$arity$2(null,i__51112_51388);
if(cljs.core.not(node_51389.shadow$old)){
var path_match_51390 = shadow.cljs.devtools.client.browser.match_paths(node_51389.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51390)){
var new_link_51391 = (function (){var G__51131 = node_51389.cloneNode(true);
G__51131.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51390),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51131;
})();
(node_51389.shadow$old = true);

(new_link_51391.onload = ((function (seq__51106_51385,chunk__51110_51386,count__51111_51387,i__51112_51388,seq__51023,chunk__51026,count__51027,i__51028,new_link_51391,path_match_51390,node_51389,path,seq__51023__$1,temp__5735__auto__,map__51022,map__51022__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51389);
});})(seq__51106_51385,chunk__51110_51386,count__51111_51387,i__51112_51388,seq__51023,chunk__51026,count__51027,i__51028,new_link_51391,path_match_51390,node_51389,path,seq__51023__$1,temp__5735__auto__,map__51022,map__51022__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51390], 0));

goog.dom.insertSiblingAfter(new_link_51391,node_51389);


var G__51393 = seq__51106_51385;
var G__51394 = chunk__51110_51386;
var G__51395 = count__51111_51387;
var G__51396 = (i__51112_51388 + (1));
seq__51106_51385 = G__51393;
chunk__51110_51386 = G__51394;
count__51111_51387 = G__51395;
i__51112_51388 = G__51396;
continue;
} else {
var G__51397 = seq__51106_51385;
var G__51398 = chunk__51110_51386;
var G__51399 = count__51111_51387;
var G__51400 = (i__51112_51388 + (1));
seq__51106_51385 = G__51397;
chunk__51110_51386 = G__51398;
count__51111_51387 = G__51399;
i__51112_51388 = G__51400;
continue;
}
} else {
var G__51402 = seq__51106_51385;
var G__51403 = chunk__51110_51386;
var G__51404 = count__51111_51387;
var G__51405 = (i__51112_51388 + (1));
seq__51106_51385 = G__51402;
chunk__51110_51386 = G__51403;
count__51111_51387 = G__51404;
i__51112_51388 = G__51405;
continue;
}
} else {
var temp__5735__auto___51406__$1 = cljs.core.seq(seq__51106_51385);
if(temp__5735__auto___51406__$1){
var seq__51106_51407__$1 = temp__5735__auto___51406__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51106_51407__$1)){
var c__4591__auto___51408 = cljs.core.chunk_first(seq__51106_51407__$1);
var G__51409 = cljs.core.chunk_rest(seq__51106_51407__$1);
var G__51410 = c__4591__auto___51408;
var G__51411 = cljs.core.count(c__4591__auto___51408);
var G__51412 = (0);
seq__51106_51385 = G__51409;
chunk__51110_51386 = G__51410;
count__51111_51387 = G__51411;
i__51112_51388 = G__51412;
continue;
} else {
var node_51413 = cljs.core.first(seq__51106_51407__$1);
if(cljs.core.not(node_51413.shadow$old)){
var path_match_51414 = shadow.cljs.devtools.client.browser.match_paths(node_51413.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51414)){
var new_link_51415 = (function (){var G__51140 = node_51413.cloneNode(true);
G__51140.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51414),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51140;
})();
(node_51413.shadow$old = true);

(new_link_51415.onload = ((function (seq__51106_51385,chunk__51110_51386,count__51111_51387,i__51112_51388,seq__51023,chunk__51026,count__51027,i__51028,new_link_51415,path_match_51414,node_51413,seq__51106_51407__$1,temp__5735__auto___51406__$1,path,seq__51023__$1,temp__5735__auto__,map__51022,map__51022__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51413);
});})(seq__51106_51385,chunk__51110_51386,count__51111_51387,i__51112_51388,seq__51023,chunk__51026,count__51027,i__51028,new_link_51415,path_match_51414,node_51413,seq__51106_51407__$1,temp__5735__auto___51406__$1,path,seq__51023__$1,temp__5735__auto__,map__51022,map__51022__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51414], 0));

goog.dom.insertSiblingAfter(new_link_51415,node_51413);


var G__51419 = cljs.core.next(seq__51106_51407__$1);
var G__51420 = null;
var G__51421 = (0);
var G__51422 = (0);
seq__51106_51385 = G__51419;
chunk__51110_51386 = G__51420;
count__51111_51387 = G__51421;
i__51112_51388 = G__51422;
continue;
} else {
var G__51423 = cljs.core.next(seq__51106_51407__$1);
var G__51424 = null;
var G__51425 = (0);
var G__51426 = (0);
seq__51106_51385 = G__51423;
chunk__51110_51386 = G__51424;
count__51111_51387 = G__51425;
i__51112_51388 = G__51426;
continue;
}
} else {
var G__51427 = cljs.core.next(seq__51106_51407__$1);
var G__51428 = null;
var G__51429 = (0);
var G__51430 = (0);
seq__51106_51385 = G__51427;
chunk__51110_51386 = G__51428;
count__51111_51387 = G__51429;
i__51112_51388 = G__51430;
continue;
}
}
} else {
}
}
break;
}


var G__51431 = cljs.core.next(seq__51023__$1);
var G__51432 = null;
var G__51433 = (0);
var G__51434 = (0);
seq__51023 = G__51431;
chunk__51026 = G__51432;
count__51027 = G__51433;
i__51028 = G__51434;
continue;
} else {
var G__51437 = cljs.core.next(seq__51023__$1);
var G__51438 = null;
var G__51439 = (0);
var G__51440 = (0);
seq__51023 = G__51437;
chunk__51026 = G__51438;
count__51027 = G__51439;
i__51028 = G__51440;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__51142){
var map__51143 = p__51142;
var map__51143__$1 = cljs.core.__destructure_map(map__51143);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51143__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__51148){
var map__51149 = p__51148;
var map__51149__$1 = cljs.core.__destructure_map(map__51149);
var _ = map__51149__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51149__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__51152,done,error){
var map__51153 = p__51152;
var map__51153__$1 = cljs.core.__destructure_map(map__51153);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51153__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__51154,done,error){
var map__51155 = p__51154;
var map__51155__$1 = cljs.core.__destructure_map(map__51155);
var msg = map__51155__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51155__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51155__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51155__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__51159){
var map__51160 = p__51159;
var map__51160__$1 = cljs.core.__destructure_map(map__51160);
var src = map__51160__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51160__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4149__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4149__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__51161 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__51161) : done.call(null,G__51161));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__51162){
var map__51163 = p__51162;
var map__51163__$1 = cljs.core.__destructure_map(map__51163);
var msg__$1 = map__51163__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51163__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e51164){var ex = e51164;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__51165){
var map__51166 = p__51165;
var map__51166__$1 = cljs.core.__destructure_map(map__51166);
var env = map__51166__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51166__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__51167){
var map__51168 = p__51167;
var map__51168__$1 = cljs.core.__destructure_map(map__51168);
var msg = map__51168__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51168__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__51171){
var map__51172 = p__51171;
var map__51172__$1 = cljs.core.__destructure_map(map__51172);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51172__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51172__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__51174){
var map__51175 = p__51174;
var map__51175__$1 = cljs.core.__destructure_map(map__51175);
var svc = map__51175__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51175__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
