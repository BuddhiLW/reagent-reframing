goog.provide('cljs.stacktrace');
if((typeof cljs !== 'undefined') && (typeof cljs.stacktrace !== 'undefined') && (typeof cljs.stacktrace.parse_stacktrace !== 'undefined')){
} else {
/**
 * Parse a JavaScript stacktrace string into a canonical data form. The
 *   arguments:
 * 
 *   repl-env - the repl environment, an optional map with :host and :port keys
 *           if the stacktrace includes url, not file references
 *   st       - the original stacktrace string to parse
 *   err      - an error map. :ua-product key defines the type of stacktrace parser
 *           to use, for example :chrome
 *   opts     - additional options. :output-dir maybe given in this argument if
 *           :host and :port do not apply, for example, a file path
 * 
 *   The canonical stacktrace representation can easily be mapped to a
 *   ClojureScript one see mapped-stacktrace and mapped-stacktrace-str
 */
cljs.stacktrace.parse_stacktrace = (function (){var method_table__4654__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4655__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4656__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4657__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4658__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__30837 = cljs.core.get_global_hierarchy;
return (fexpr__30837.cljs$core$IFn$_invoke$arity$0 ? fexpr__30837.cljs$core$IFn$_invoke$arity$0() : fexpr__30837.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.stacktrace","parse-stacktrace"),(function (repl_env,st,err,opts){
return new cljs.core.Keyword(null,"ua-product","ua-product",938384227).cljs$core$IFn$_invoke$arity$1(err);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4658__auto__,method_table__4654__auto__,prefer_table__4655__auto__,method_cache__4656__auto__,cached_hierarchy__4657__auto__));
})();
}
cljs.stacktrace.parse_int = (function cljs$stacktrace$parse_int(s){
return parseInt(s,(10));
});
cljs.stacktrace.starts_with_QMARK_ = (function cljs$stacktrace$starts_with_QMARK_(s0,s1){
return goog.string.startsWith(s0,s1);
});
cljs.stacktrace.ends_with_QMARK_ = (function cljs$stacktrace$ends_with_QMARK_(s0,s1){
return goog.string.endsWith(s0,s1);
});
cljs.stacktrace.string__GT_regex = (function cljs$stacktrace$string__GT_regex(s){
return (new RegExp(s));
});
cljs.stacktrace.output_directory = (function cljs$stacktrace$output_directory(opts){
var or__4160__auto__ = new cljs.core.Keyword(null,"output-dir","output-dir",-290956991).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return "out";
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (repl_env,st,err,opts){
return st;
}));
cljs.stacktrace.parse_file_line_column = (function cljs$stacktrace$parse_file_line_column(flc){
if(cljs.core.not(cljs.core.re_find(/:/,flc))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [flc,null,null], null);
} else {
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(flc,/:/);
var vec__30851 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__30857,p__30858){
var vec__30859 = p__30857;
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30859,(0),null);
var post = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30859,(1),null);
var vec__30862 = p__30858;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30862,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30862,(1),null);
if((i <= (2))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(post,x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pre,x),post], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,cljs.core.range.cljs$core$IFn$_invoke$arity$3(cljs.core.count(xs),(0),(-1))));
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30851,(0),null);
var vec__30854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30851,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30854,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30854,(1),null);
var file = clojure.string.join.cljs$core$IFn$_invoke$arity$2(":",pre);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__30867 = file;
if(cljs.stacktrace.starts_with_QMARK_(file,"(")){
return clojure.string.replace(G__30867,"(","");
} else {
return G__30867;
}
})(),cljs.stacktrace.parse_int((function (){var G__30868 = line;
if(cljs.stacktrace.ends_with_QMARK_(line,")")){
return clojure.string.replace(G__30868,")","");
} else {
return G__30868;
}
})()),cljs.stacktrace.parse_int((function (){var G__30870 = column;
if(cljs.stacktrace.ends_with_QMARK_(column,")")){
return clojure.string.replace(G__30870,")","");
} else {
return G__30870;
}
})())], null);
}
});
/**
 * Given a browser file url convert it into a relative path that can be used
 * to locate the original source.
 */
cljs.stacktrace.parse_file = (function cljs$stacktrace$parse_file(p__30874,file,p__30875){
var map__30876 = p__30874;
var map__30876__$1 = cljs.core.__destructure_map(map__30876);
var repl_env = map__30876__$1;
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30876__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var host_port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30876__$1,new cljs.core.Keyword(null,"host-port","host-port",1956551772));
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30876__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var map__30877 = p__30875;
var map__30877__$1 = cljs.core.__destructure_map(map__30877);
var opts = map__30877__$1;
var asset_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30877__$1,new cljs.core.Keyword(null,"asset-path","asset-path",1500889617));
var urlpat = (cljs.core.truth_(host)?cljs.stacktrace.string__GT_regex(["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4160__auto__ = host_port;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return port;
}
})()),"/"].join('')):"");
var match = (cljs.core.truth_(host)?cljs.core.re_find(urlpat,file):cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991)));
if(cljs.core.truth_(match)){
return clojure.string.replace(clojure.string.replace(file,urlpat,""),cljs.stacktrace.string__GT_regex(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4160__auto__ = (function (){var and__4149__auto__ = asset_path;
if(cljs.core.truth_(and__4149__auto__)){
return clojure.string.replace(asset_path,/^\//,"");
} else {
return and__4149__auto__;
}
})();
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.stacktrace.output_directory(opts);
}
})()),"/"].join('')),"");
} else {
var temp__5733__auto__ = new cljs.core.Keyword(null,"asset-root","asset-root",1771735072).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5733__auto__)){
var asset_root = temp__5733__auto__;
return clojure.string.replace(file,asset_root,"");
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Could not relativize URL ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parse-stacktrace","parse-stacktrace",-38208461),new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword(null,"relativize-url","relativize-url",621482324)], null));
}
}
});
cljs.stacktrace.chrome_st_el__GT_frame = (function cljs$stacktrace$chrome_st_el__GT_frame(repl_env,st_el,opts){
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(st_el,/\s+at\s+/,""),/\s+/);
var vec__30882 = ((((1) === cljs.core.count(xs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first(xs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(xs),cljs.core.last(xs)], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30882,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30882,(1),null);
var vec__30885 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30885,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30885,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30885,(2),null);
if(cljs.core.truth_((function (){var and__4149__auto__ = file;
if(cljs.core.truth_(and__4149__auto__)){
var and__4149__auto____$1 = function$;
if(cljs.core.truth_(and__4149__auto____$1)){
var and__4149__auto____$2 = line;
if(cljs.core.truth_(and__4149__auto____$2)){
return column;
} else {
return and__4149__auto____$2;
}
} else {
return and__4149__auto____$1;
}
} else {
return and__4149__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file(repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.replace(function$,/Object\./,""),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_(function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.replace(function$,/Object\./,""),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"chrome","chrome",1718738387),(function (repl_env,st,err,opts){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30892_SHARP_){
return cljs.stacktrace.chrome_st_el__GT_frame(repl_env,p1__30892_SHARP_,opts);
}),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__30891_SHARP_){
return (!(cljs.stacktrace.starts_with_QMARK_(p1__30891_SHARP_,"    at eval")));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__30890_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__30890_SHARP_,"Error");
}),clojure.string.split_lines(st))))));
}));
cljs.stacktrace.safari_st_el__GT_frame = (function cljs$stacktrace$safari_st_el__GT_frame(repl_env,st_el,opts){
var vec__30905 = (cljs.core.truth_(cljs.core.re_find(/@/,st_el))?clojure.string.split.cljs$core$IFn$_invoke$arity$2(st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30905,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30905,(1),null);
var vec__30908 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30908,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30908,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30908,(2),null);
if(cljs.core.truth_((function (){var and__4149__auto__ = file;
if(cljs.core.truth_(and__4149__auto__)){
var and__4149__auto____$1 = function$;
if(cljs.core.truth_(and__4149__auto____$1)){
var and__4149__auto____$2 = line;
if(cljs.core.truth_(and__4149__auto____$2)){
return column;
} else {
return and__4149__auto____$2;
}
} else {
return and__4149__auto____$1;
}
} else {
return and__4149__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file(repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.trim(function$),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_(function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.trim(function$),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"safari","safari",497115653),(function (repl_env,st,err,opts){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30935_SHARP_){
return cljs.stacktrace.safari_st_el__GT_frame(repl_env,p1__30935_SHARP_,opts);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__30934_SHARP_){
return (!(cljs.stacktrace.starts_with_QMARK_(p1__30934_SHARP_,"eval code")));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__30932_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__30932_SHARP_,"Error");
}),clojure.string.split_lines(st)))))));
}));
cljs.stacktrace.firefox_clean_function = (function cljs$stacktrace$firefox_clean_function(f){
var f__$1 = f;
var f__$2 = ((clojure.string.blank_QMARK_(f__$1))?null:((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(f__$1.indexOf("</"),(-1)))?(function (){var idx = f__$1.indexOf("</");
return f__$1.substring((idx + (2)));
})():f__$1
));
return clojure.string.replace(clojure.string.replace(f__$2,/</,""),(new RegExp("\\/")),"");
});
cljs.stacktrace.firefox_st_el__GT_frame = (function cljs$stacktrace$firefox_st_el__GT_frame(repl_env,st_el,opts){
var vec__30949 = (cljs.core.truth_(cljs.core.re_find(/@/,st_el))?clojure.string.split.cljs$core$IFn$_invoke$arity$2(st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30949,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30949,(1),null);
var vec__30952 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30952,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30952,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30952,(2),null);
if(cljs.core.truth_((function (){var and__4149__auto__ = file;
if(cljs.core.truth_(and__4149__auto__)){
var and__4149__auto____$1 = function$;
if(cljs.core.truth_(and__4149__auto____$1)){
var and__4149__auto____$2 = line;
if(cljs.core.truth_(and__4149__auto____$2)){
return column;
} else {
return and__4149__auto____$2;
}
} else {
return and__4149__auto____$1;
}
} else {
return and__4149__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file(repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),cljs.stacktrace.firefox_clean_function(function$),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_(function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),cljs.stacktrace.firefox_clean_function(function$),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"firefox","firefox",1283768880),(function (repl_env,st,err,opts){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30966_SHARP_){
return cljs.stacktrace.firefox_st_el__GT_frame(repl_env,p1__30966_SHARP_,opts);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__30965_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__30965_SHARP_.indexOf("> eval"),(-1));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__30964_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__30964_SHARP_,"Error");
}),clojure.string.split_lines(st)))))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),(function (repl_env,st,err,p__30977){
var map__30980 = p__30977;
var map__30980__$1 = cljs.core.__destructure_map(map__30980);
var opts = map__30980__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30980__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var parse_source_loc_info = (function cljs$stacktrace$parse_source_loc_info(x){
if(cljs.core.truth_((function (){var and__4149__auto__ = x;
if(cljs.core.truth_(and__4149__auto__)){
return (!(clojure.string.blank_QMARK_(x)));
} else {
return and__4149__auto__;
}
})())){
return cljs.stacktrace.parse_int(x);
} else {
return null;
}
});
var process_frame = (function cljs$stacktrace$process_frame(frame_str){
if(((clojure.string.blank_QMARK_(frame_str)) || ((cljs.core.re_find(/^\s+at/,frame_str) == null)))){
return null;
} else {
var frame_str__$1 = clojure.string.replace(frame_str,/\s+at\s+/,"");
if(clojure.string.starts_with_QMARK_(frame_str__$1,"repl:")){
return null;
} else {
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str__$1,/\s+/);
var vec__31008 = ((((2) === cljs.core.count(parts)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(parts),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.second(parts),(1),(cljs.core.count(cljs.core.second(parts)) - (1)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first(parts)], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31008,(0),null);
var file_AMPERSAND_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31008,(1),null);
var vec__31011 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(file_AMPERSAND_line,/:/);
var file_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31011,(0),null);
var line_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31011,(1),null);
var col_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31011,(2),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),(cljs.core.truth_(function$)?(function (){var G__31016 = file_part;
if(cljs.core.truth_(output_dir)){
return clojure.string.replace(G__31016,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/"].join(''),"");
} else {
return G__31016;
}
})():file_part),new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"line","line",212345235),parse_source_loc_info(line_part),new cljs.core.Keyword(null,"column","column",2078222095),parse_source_loc_info(col_part)], null);
}
}
});
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(process_frame,clojure.string.split.cljs$core$IFn$_invoke$arity$2(st,/\n/))));
}));
cljs.stacktrace.remove_ext = (function cljs$stacktrace$remove_ext(file){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(file,/\.js$/,""),/\.cljs$/,""),/\.cljc$/,""),/\.clj$/,"");
});
/**
 * Given a cljs.source-map source map data structure map a generated line
 * and column back to the original line, column, and function called.
 */
cljs.stacktrace.mapped_line_column_call = (function cljs$stacktrace$mapped_line_column_call(sms,file,line,column){
var source_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sms,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.stacktrace.remove_ext(file),"/",".")));
var get_best_column = (function cljs$stacktrace$mapped_line_column_call_$_get_best_column(columns,column__$1){
return cljs.core.last((function (){var or__4160__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(columns,cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__31017_SHARP_){
return (p1__31017_SHARP_ <= (column__$1 - (1)));
}),cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(columns)))));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.second(cljs.core.first(columns));
}
})());
});
var adjust = (function cljs$stacktrace$mapped_line_column_call_$_adjust(mapped){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__31018_SHARP_,p2__31019_SHARP_){
return (p1__31018_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31018_SHARP_.cljs$core$IFn$_invoke$arity$1(p2__31019_SHARP_) : p1__31018_SHARP_.call(null,p2__31019_SHARP_));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.inc,cljs.core.inc,cljs.core.identity], null),mapped));
});
var default$ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null);
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(source_map,(line - (1)));
if(cljs.core.truth_(temp__5733__auto__)){
var columns = temp__5733__auto__;
return adjust(cljs.core.map.cljs$core$IFn$_invoke$arity$2(get_best_column(columns,column),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"name","name",1843675177)], null)));
} else {
return default$;
}
});
/**
 * Given opts and a canonicalized JavaScript stacktrace frame, return the
 *   ClojureScript frame.
 */
cljs.stacktrace.mapped_frame = (function cljs$stacktrace$mapped_frame(p__31042,sms,opts){
var map__31044 = p__31042;
var map__31044__$1 = cljs.core.__destructure_map(map__31044);
var function$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31044__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31044__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31044__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31044__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var no_source_file_QMARK_ = ((cljs.core.not(file))?true:cljs.stacktrace.starts_with_QMARK_(file,"<"));
var vec__31048 = ((no_source_file_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null):cljs.stacktrace.mapped_line_column_call(sms,file,line,column));
var line_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31048,(0),null);
var column_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31048,(1),null);
var call = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31048,(2),null);
var file_SINGLEQUOTE_ = ((no_source_file_QMARK_)?null:((cljs.stacktrace.ends_with_QMARK_(file,".js"))?[cljs.core.subs.cljs$core$IFn$_invoke$arity$3(file,(0),(cljs.core.count(file) - (3))),".cljs"].join(''):file));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"call","call",-519999866),call,new cljs.core.Keyword(null,"file","file",-1269645878),((no_source_file_QMARK_)?["NO_SOURCE_FILE",(cljs.core.truth_(file)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null)].join(''):file_SINGLEQUOTE_),new cljs.core.Keyword(null,"line","line",212345235),line_SINGLEQUOTE_,new cljs.core.Keyword(null,"column","column",2078222095),column_SINGLEQUOTE_], null);
});
/**
 * Given a vector representing the canonicalized JavaScript stacktrace
 * return the ClojureScript stacktrace. The canonical stacktrace must be
 * in the form:
 * 
 *  [{:file <string>
 *    :function <string>
 *    :line <integer>
 *    :column <integer>}*]
 * 
 * :file must be a URL path (without protocol) relative to :output-dir or a
 * identifier delimited by angle brackets. The returned mapped stacktrace will
 * also contain :url entries to the original sources if it can be determined
 * from the classpath.
 */
cljs.stacktrace.mapped_stacktrace = (function cljs$stacktrace$mapped_stacktrace(var_args){
var G__31061 = arguments.length;
switch (G__31061) {
case 2:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,null);
}));

(cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var call__GT_function = (function cljs$stacktrace$call__GT_function(x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"call","call",-519999866).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"function","function",-2127255473)],[new cljs.core.Keyword(null,"call","call",-519999866).cljs$core$IFn$_invoke$arity$1(x)]);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
var call_merge = (function cljs$stacktrace$call_merge(function$,call){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic((function (munged_fn_name,unmunged_call_name){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(munged_fn_name,clojure.string.replace(cljs.core.munge(unmunged_call_name),".","$"))){
return unmunged_call_name;
} else {
return munged_fn_name;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([function$,call], 0));
});
var mapped_frames = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.memoize((function (p1__31054_SHARP_){
return cljs.stacktrace.mapped_frame(p1__31054_SHARP_,sms,opts);
})),stacktrace);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(call_merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31055_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31055_SHARP_,new cljs.core.Keyword(null,"call","call",-519999866));
}),mapped_frames),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(cljs.core.map.cljs$core$IFn$_invoke$arity$2(call__GT_function,mapped_frames)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null))));
}));

(cljs.stacktrace.mapped_stacktrace.cljs$lang$maxFixedArity = 3);

/**
 * Given a vector representing the canonicalized JavaScript stacktrace and a map
 *   of library names to decoded source maps, print the ClojureScript stacktrace .
 *   See mapped-stacktrace.
 */
cljs.stacktrace.mapped_stacktrace_str = (function cljs$stacktrace$mapped_stacktrace_str(var_args){
var G__31080 = arguments.length;
switch (G__31080) {
case 2:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,null);
}));

(cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var sb__4702__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31085_31401 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31086_31402 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31087_31403 = true;
var _STAR_print_fn_STAR__temp_val__31088_31404 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31087_31403);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31088_31404);

try{var seq__31091_31408 = cljs.core.seq(cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,opts));
var chunk__31092_31409 = null;
var count__31093_31410 = (0);
var i__31094_31411 = (0);
while(true){
if((i__31094_31411 < count__31093_31410)){
var map__31109_31415 = chunk__31092_31409.cljs$core$IIndexed$_nth$arity$2(null,i__31094_31411);
var map__31109_31416__$1 = cljs.core.__destructure_map(map__31109_31415);
var function_31417 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31109_31416__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_31418 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31109_31416__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_31419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31109_31416__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_31420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31109_31416__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\t",[(cljs.core.truth_(function_31417)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(function_31417)," "].join(''):null),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_31418),(cljs.core.truth_(line_31419)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_31419)].join(''):null),(cljs.core.truth_(column_31420)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_31420)].join(''):null),")"].join('')], 0));


var G__31432 = seq__31091_31408;
var G__31433 = chunk__31092_31409;
var G__31434 = count__31093_31410;
var G__31435 = (i__31094_31411 + (1));
seq__31091_31408 = G__31432;
chunk__31092_31409 = G__31433;
count__31093_31410 = G__31434;
i__31094_31411 = G__31435;
continue;
} else {
var temp__5735__auto___31438 = cljs.core.seq(seq__31091_31408);
if(temp__5735__auto___31438){
var seq__31091_31440__$1 = temp__5735__auto___31438;
if(cljs.core.chunked_seq_QMARK_(seq__31091_31440__$1)){
var c__4591__auto___31442 = cljs.core.chunk_first(seq__31091_31440__$1);
var G__31443 = cljs.core.chunk_rest(seq__31091_31440__$1);
var G__31444 = c__4591__auto___31442;
var G__31445 = cljs.core.count(c__4591__auto___31442);
var G__31446 = (0);
seq__31091_31408 = G__31443;
chunk__31092_31409 = G__31444;
count__31093_31410 = G__31445;
i__31094_31411 = G__31446;
continue;
} else {
var map__31126_31448 = cljs.core.first(seq__31091_31440__$1);
var map__31126_31449__$1 = cljs.core.__destructure_map(map__31126_31448);
var function_31450 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31126_31449__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_31451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31126_31449__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_31452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31126_31449__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_31453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31126_31449__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\t",[(cljs.core.truth_(function_31450)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(function_31450)," "].join(''):null),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_31451),(cljs.core.truth_(line_31452)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_31452)].join(''):null),(cljs.core.truth_(column_31453)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_31453)].join(''):null),")"].join('')], 0));


var G__31461 = cljs.core.next(seq__31091_31440__$1);
var G__31462 = null;
var G__31463 = (0);
var G__31464 = (0);
seq__31091_31408 = G__31461;
chunk__31092_31409 = G__31462;
count__31093_31410 = G__31463;
i__31094_31411 = G__31464;
continue;
}
} else {
}
}
break;
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31086_31402);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31085_31401);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4702__auto__);
}));

(cljs.stacktrace.mapped_stacktrace_str.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.stacktrace.js.map
