goog.provide('day8.re_frame_10x.utils.localstorage');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__43381 = arguments.length;
switch (G__43381) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2(key,null);
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2);

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__43382 = cljs.core.seq(Object.keys(localStorage));
var chunk__43383 = null;
var count__43384 = (0);
var i__43385 = (0);
while(true){
if((i__43385 < count__43384)){
var k = chunk__43383.cljs$core$IIndexed$_nth$arity$2(null,i__43385);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__43401 = seq__43382;
var G__43402 = chunk__43383;
var G__43403 = count__43384;
var G__43404 = (i__43385 + (1));
seq__43382 = G__43401;
chunk__43383 = G__43402;
count__43384 = G__43403;
i__43385 = G__43404;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43382);
if(temp__5735__auto__){
var seq__43382__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43382__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__43382__$1);
var G__43405 = cljs.core.chunk_rest(seq__43382__$1);
var G__43406 = c__4591__auto__;
var G__43407 = cljs.core.count(c__4591__auto__);
var G__43408 = (0);
seq__43382 = G__43405;
chunk__43383 = G__43406;
count__43384 = G__43407;
i__43385 = G__43408;
continue;
} else {
var k = cljs.core.first(seq__43382__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__43409 = cljs.core.next(seq__43382__$1);
var G__43410 = null;
var G__43411 = (0);
var G__43412 = (0);
seq__43382 = G__43409;
chunk__43383 = G__43410;
count__43384 = G__43411;
i__43385 = G__43412;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=day8.re_frame_10x.utils.localstorage.js.map
