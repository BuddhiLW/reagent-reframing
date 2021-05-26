goog.provide('garden.stylesheet');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
garden.stylesheet.rule = (function garden$stylesheet$rule(var_args){
var args__4777__auto__ = [];
var len__4771__auto___53233 = arguments.length;
var i__4772__auto___53234 = (0);
while(true){
if((i__4772__auto___53234 < len__4771__auto___53233)){
args__4777__auto__.push((arguments[i__4772__auto___53234]));

var G__53235 = (i__4772__auto___53234 + (1));
i__4772__auto___53234 = G__53235;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__53239__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__53239 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__53240__i = 0, G__53240__a = new Array(arguments.length -  0);
while (G__53240__i < G__53240__a.length) {G__53240__a[G__53240__i] = arguments[G__53240__i + 0]; ++G__53240__i;}
  children = new cljs.core.IndexedSeq(G__53240__a,0,null);
} 
return G__53239__delegate.call(this,children);};
G__53239.cljs$lang$maxFixedArity = 0;
G__53239.cljs$lang$applyTo = (function (arglist__53241){
var children = cljs.core.seq(arglist__53241);
return G__53239__delegate(children);
});
G__53239.cljs$core$IFn$_invoke$arity$variadic = G__53239__delegate;
return G__53239;
})()
;
}
}));

(garden.stylesheet.rule.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.rule.cljs$lang$applyTo = (function (seq53192){
var G__53193 = cljs.core.first(seq53192);
var seq53192__$1 = cljs.core.next(seq53192);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53193,seq53192__$1);
}));

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__53242__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__53242 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53243__i = 0, G__53243__a = new Array(arguments.length -  0);
while (G__53243__i < G__53243__a.length) {G__53243__a[G__53243__i] = arguments[G__53243__i + 0]; ++G__53243__i;}
  args = new cljs.core.IndexedSeq(G__53243__a,0,null);
} 
return G__53242__delegate.call(this,args);};
G__53242.cljs$lang$maxFixedArity = 0;
G__53242.cljs$lang$applyTo = (function (arglist__53244){
var args = cljs.core.seq(arglist__53244);
return G__53242__delegate(args);
});
G__53242.cljs$core$IFn$_invoke$arity$variadic = G__53242__delegate;
return G__53242;
})()
;
});
garden.stylesheet.at_rule = (function garden$stylesheet$at_rule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
garden.stylesheet.at_font_face = (function garden$stylesheet$at_font_face(var_args){
var args__4777__auto__ = [];
var len__4771__auto___53245 = arguments.length;
var i__4772__auto___53246 = (0);
while(true){
if((i__4772__auto___53246 < len__4771__auto___53245)){
args__4777__auto__.push((arguments[i__4772__auto___53246]));

var G__53247 = (i__4772__auto___53246 + (1));
i__4772__auto___53246 = G__53247;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
}));

(garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq53202){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53202));
}));

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__53209 = arguments.length;
switch (G__53209) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4792__auto__ = [];
var len__4771__auto___53249 = arguments.length;
var i__4772__auto___53250 = (0);
while(true){
if((i__4772__auto___53250 < len__4771__auto___53249)){
args_arr__4792__auto__.push((arguments[i__4772__auto___53250]));

var G__53251 = (i__4772__auto___53250 + (1));
i__4772__auto___53250 = G__53251;
continue;
} else {
}
break;
}

var argseq__4793__auto__ = (new cljs.core.IndexedSeq(args_arr__4792__auto__.slice((1)),(0),null));
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4793__auto__);

}
});

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
}));

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
}));

/** @this {Function} */
(garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq53207){
var G__53208 = cljs.core.first(seq53207);
var seq53207__$1 = cljs.core.next(seq53207);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53208,seq53207__$1);
}));

(garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1));

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__4777__auto__ = [];
var len__4771__auto___53252 = arguments.length;
var i__4772__auto___53253 = (0);
while(true){
if((i__4772__auto___53253 < len__4771__auto___53252)){
args__4777__auto__.push((arguments[i__4772__auto___53253]));

var G__53254 = (i__4772__auto___53253 + (1));
i__4772__auto___53253 = G__53254;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq53213){
var G__53214 = cljs.core.first(seq53213);
var seq53213__$1 = cljs.core.next(seq53213);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53214,seq53213__$1);
}));

garden.stylesheet.at_supports = (function garden$stylesheet$at_supports(var_args){
var args__4777__auto__ = [];
var len__4771__auto___53256 = arguments.length;
var i__4772__auto___53257 = (0);
while(true){
if((i__4772__auto___53257 < len__4771__auto___53256)){
args__4777__auto__.push((arguments[i__4772__auto___53257]));

var G__53258 = (i__4772__auto___53257 + (1));
i__4772__auto___53257 = G__53258;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"feature","feature",27242652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408),feature_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq53223){
var G__53224 = cljs.core.first(seq53223);
var seq53223__$1 = cljs.core.next(seq53223);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53224,seq53223__$1);
}));

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__4777__auto__ = [];
var len__4771__auto___53259 = arguments.length;
var i__4772__auto___53260 = (0);
while(true){
if((i__4772__auto___53260 < len__4771__auto___53259)){
args__4777__auto__.push((arguments[i__4772__auto___53260]));

var G__53261 = (i__4772__auto___53260 + (1));
i__4772__auto___53260 = G__53261;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
}));

(garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq53231){
var G__53232 = cljs.core.first(seq53231);
var seq53231__$1 = cljs.core.next(seq53231);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53232,seq53231__$1);
}));

/**
 * Create a color from RGB values.
 */
garden.stylesheet.rgb = (function garden$stylesheet$rgb(r,g,b){
return garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
garden.stylesheet.hsl = (function garden$stylesheet$hsl(h,s,l){
return garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=garden.stylesheet.js.map
