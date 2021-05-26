goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__46629){
var map__46631 = p__46629;
var map__46631__$1 = cljs.core.__destructure_map(map__46631);
var m = map__46631__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46631__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46631__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4160__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__46646_46883 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46647_46884 = null;
var count__46648_46885 = (0);
var i__46649_46886 = (0);
while(true){
if((i__46649_46886 < count__46648_46885)){
var f_46887 = chunk__46647_46884.cljs$core$IIndexed$_nth$arity$2(null,i__46649_46886);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_46887], 0));


var G__46888 = seq__46646_46883;
var G__46889 = chunk__46647_46884;
var G__46890 = count__46648_46885;
var G__46891 = (i__46649_46886 + (1));
seq__46646_46883 = G__46888;
chunk__46647_46884 = G__46889;
count__46648_46885 = G__46890;
i__46649_46886 = G__46891;
continue;
} else {
var temp__5735__auto___46892 = cljs.core.seq(seq__46646_46883);
if(temp__5735__auto___46892){
var seq__46646_46893__$1 = temp__5735__auto___46892;
if(cljs.core.chunked_seq_QMARK_(seq__46646_46893__$1)){
var c__4591__auto___46894 = cljs.core.chunk_first(seq__46646_46893__$1);
var G__46895 = cljs.core.chunk_rest(seq__46646_46893__$1);
var G__46896 = c__4591__auto___46894;
var G__46897 = cljs.core.count(c__4591__auto___46894);
var G__46898 = (0);
seq__46646_46883 = G__46895;
chunk__46647_46884 = G__46896;
count__46648_46885 = G__46897;
i__46649_46886 = G__46898;
continue;
} else {
var f_46899 = cljs.core.first(seq__46646_46893__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_46899], 0));


var G__46900 = cljs.core.next(seq__46646_46893__$1);
var G__46901 = null;
var G__46902 = (0);
var G__46903 = (0);
seq__46646_46883 = G__46900;
chunk__46647_46884 = G__46901;
count__46648_46885 = G__46902;
i__46649_46886 = G__46903;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_46904 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4160__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_46904], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_46904)))?cljs.core.second(arglists_46904):arglists_46904)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__46660_46912 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46661_46913 = null;
var count__46662_46914 = (0);
var i__46663_46915 = (0);
while(true){
if((i__46663_46915 < count__46662_46914)){
var vec__46688_46916 = chunk__46661_46913.cljs$core$IIndexed$_nth$arity$2(null,i__46663_46915);
var name_46917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46688_46916,(0),null);
var map__46691_46918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46688_46916,(1),null);
var map__46691_46919__$1 = cljs.core.__destructure_map(map__46691_46918);
var doc_46920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46691_46919__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46921 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46691_46919__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_46917], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_46921], 0));

if(cljs.core.truth_(doc_46920)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_46920], 0));
} else {
}


var G__46933 = seq__46660_46912;
var G__46935 = chunk__46661_46913;
var G__46936 = count__46662_46914;
var G__46937 = (i__46663_46915 + (1));
seq__46660_46912 = G__46933;
chunk__46661_46913 = G__46935;
count__46662_46914 = G__46936;
i__46663_46915 = G__46937;
continue;
} else {
var temp__5735__auto___46951 = cljs.core.seq(seq__46660_46912);
if(temp__5735__auto___46951){
var seq__46660_46952__$1 = temp__5735__auto___46951;
if(cljs.core.chunked_seq_QMARK_(seq__46660_46952__$1)){
var c__4591__auto___46955 = cljs.core.chunk_first(seq__46660_46952__$1);
var G__46957 = cljs.core.chunk_rest(seq__46660_46952__$1);
var G__46958 = c__4591__auto___46955;
var G__46959 = cljs.core.count(c__4591__auto___46955);
var G__46960 = (0);
seq__46660_46912 = G__46957;
chunk__46661_46913 = G__46958;
count__46662_46914 = G__46959;
i__46663_46915 = G__46960;
continue;
} else {
var vec__46697_46961 = cljs.core.first(seq__46660_46952__$1);
var name_46962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46697_46961,(0),null);
var map__46700_46963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46697_46961,(1),null);
var map__46700_46964__$1 = cljs.core.__destructure_map(map__46700_46963);
var doc_46965 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46700_46964__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46966 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46700_46964__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_46962], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_46966], 0));

if(cljs.core.truth_(doc_46965)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_46965], 0));
} else {
}


var G__46969 = cljs.core.next(seq__46660_46952__$1);
var G__46970 = null;
var G__46971 = (0);
var G__46972 = (0);
seq__46660_46912 = G__46969;
chunk__46661_46913 = G__46970;
count__46662_46914 = G__46971;
i__46663_46915 = G__46972;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__46705 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__46706 = null;
var count__46707 = (0);
var i__46708 = (0);
while(true){
if((i__46708 < count__46707)){
var role = chunk__46706.cljs$core$IIndexed$_nth$arity$2(null,i__46708);
var temp__5735__auto___46979__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___46979__$1)){
var spec_46981 = temp__5735__auto___46979__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_46981)], 0));
} else {
}


var G__46982 = seq__46705;
var G__46983 = chunk__46706;
var G__46984 = count__46707;
var G__46985 = (i__46708 + (1));
seq__46705 = G__46982;
chunk__46706 = G__46983;
count__46707 = G__46984;
i__46708 = G__46985;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__46705);
if(temp__5735__auto____$1){
var seq__46705__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__46705__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__46705__$1);
var G__46987 = cljs.core.chunk_rest(seq__46705__$1);
var G__46988 = c__4591__auto__;
var G__46989 = cljs.core.count(c__4591__auto__);
var G__46990 = (0);
seq__46705 = G__46987;
chunk__46706 = G__46988;
count__46707 = G__46989;
i__46708 = G__46990;
continue;
} else {
var role = cljs.core.first(seq__46705__$1);
var temp__5735__auto___46993__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___46993__$2)){
var spec_46994 = temp__5735__auto___46993__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_46994)], 0));
} else {
}


var G__46995 = cljs.core.next(seq__46705__$1);
var G__46996 = null;
var G__46997 = (0);
var G__46998 = (0);
seq__46705 = G__46995;
chunk__46706 = G__46996;
count__46707 = G__46997;
i__46708 = G__46998;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__47002 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__47003 = cljs.core.ex_cause(t);
via = G__47002;
t = G__47003;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__46749 = datafied_throwable;
var map__46749__$1 = cljs.core.__destructure_map(map__46749);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46749__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46749__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46749__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__46750 = cljs.core.last(via);
var map__46750__$1 = cljs.core.__destructure_map(map__46750);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46750__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46750__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46750__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__46751 = data;
var map__46751__$1 = cljs.core.__destructure_map(map__46751);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46751__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46751__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46751__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__46752 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__46752__$1 = cljs.core.__destructure_map(map__46752);
var top_data = map__46752__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46752__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__46755 = phase;
var G__46755__$1 = (((G__46755 instanceof cljs.core.Keyword))?G__46755.fqn:null);
switch (G__46755__$1) {
case "read-source":
var map__46761 = data;
var map__46761__$1 = cljs.core.__destructure_map(map__46761);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46761__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46761__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__46768 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__46768__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46768,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__46768);
var G__46768__$2 = (cljs.core.truth_((function (){var fexpr__46773 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__46773.cljs$core$IFn$_invoke$arity$1 ? fexpr__46773.cljs$core$IFn$_invoke$arity$1(source) : fexpr__46773.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__46768__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__46768__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46768__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__46768__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__46777 = top_data;
var G__46777__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46777,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__46777);
var G__46777__$2 = (cljs.core.truth_((function (){var fexpr__46794 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__46794.cljs$core$IFn$_invoke$arity$1 ? fexpr__46794.cljs$core$IFn$_invoke$arity$1(source) : fexpr__46794.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__46777__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__46777__$1);
var G__46777__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46777__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__46777__$2);
var G__46777__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46777__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__46777__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46777__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__46777__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__46799 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46799,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46799,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46799,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46799,(3),null);
var G__46802 = top_data;
var G__46802__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46802,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__46802);
var G__46802__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46802__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__46802__$1);
var G__46802__$3 = (cljs.core.truth_((function (){var and__4149__auto__ = source__$1;
if(cljs.core.truth_(and__4149__auto__)){
return method;
} else {
return and__4149__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46802__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__46802__$2);
var G__46802__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46802__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__46802__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46802__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__46802__$4;
}

break;
case "execution":
var vec__46807 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46807,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46807,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46807,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46807,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__46745_SHARP_){
var or__4160__auto__ = (p1__46745_SHARP_ == null);
if(or__4160__auto__){
return or__4160__auto__;
} else {
var fexpr__46813 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__46813.cljs$core$IFn$_invoke$arity$1 ? fexpr__46813.cljs$core$IFn$_invoke$arity$1(p1__46745_SHARP_) : fexpr__46813.call(null,p1__46745_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return line;
}
})();
var G__46815 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__46815__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46815,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__46815);
var G__46815__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46815__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__46815__$1);
var G__46815__$3 = (cljs.core.truth_((function (){var or__4160__auto__ = fn;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var and__4149__auto__ = source__$1;
if(cljs.core.truth_(and__4149__auto__)){
return method;
} else {
return and__4149__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46815__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4160__auto__ = fn;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__46815__$2);
var G__46815__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46815__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__46815__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46815__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__46815__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46755__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__46825){
var map__46827 = p__46825;
var map__46827__$1 = cljs.core.__destructure_map(map__46827);
var triage_data = map__46827__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46827__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46827__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46827__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46827__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46827__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46827__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46827__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46827__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4160__auto__ = source;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4160__auto__ = line;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4160__auto__ = class$;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__46834 = phase;
var G__46834__$1 = (((G__46834 instanceof cljs.core.Keyword))?G__46834.fqn:null);
switch (G__46834__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__46836 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__46837 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46838 = loc;
var G__46839 = (cljs.core.truth_(spec)?(function (){var sb__4702__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__46841_47069 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__46842_47070 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__46843_47071 = true;
var _STAR_print_fn_STAR__temp_val__46844_47072 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46843_47071);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46844_47072);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46821_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__46821_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46842_47070);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46841_47069);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4702__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__46836,G__46837,G__46838,G__46839) : format.call(null,G__46836,G__46837,G__46838,G__46839));

break;
case "macroexpansion":
var G__46848 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__46850 = cause_type;
var G__46851 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46852 = loc;
var G__46853 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46848,G__46850,G__46851,G__46852,G__46853) : format.call(null,G__46848,G__46850,G__46851,G__46852,G__46853));

break;
case "compile-syntax-check":
var G__46855 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__46856 = cause_type;
var G__46857 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46858 = loc;
var G__46859 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46855,G__46856,G__46857,G__46858,G__46859) : format.call(null,G__46855,G__46856,G__46857,G__46858,G__46859));

break;
case "compilation":
var G__46860 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__46861 = cause_type;
var G__46862 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46863 = loc;
var G__46864 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46860,G__46861,G__46862,G__46863,G__46864) : format.call(null,G__46860,G__46861,G__46862,G__46863,G__46864));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__46866 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__46867 = symbol;
var G__46868 = loc;
var G__46869 = (function (){var sb__4702__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__46870_47087 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__46871_47088 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__46872_47089 = true;
var _STAR_print_fn_STAR__temp_val__46873_47090 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46872_47089);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46873_47090);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46822_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__46822_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46871_47088);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46870_47087);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4702__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__46866,G__46867,G__46868,G__46869) : format.call(null,G__46866,G__46867,G__46868,G__46869));
} else {
var G__46876 = "Execution error%s at %s(%s).\n%s\n";
var G__46877 = cause_type;
var G__46878 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46879 = loc;
var G__46880 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46876,G__46877,G__46878,G__46879,G__46880) : format.call(null,G__46876,G__46877,G__46878,G__46879,G__46880));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46834__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
