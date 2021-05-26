goog.provide('reframe_testing.styles');
/**
 * @param {...*} var_args
 */
reframe_testing.styles.linear_gradient = (function() { 
var reframe_testing$styles$linear_gradient__delegate = function (args__54037__auto__){
return (new garden.types.CSSFunction("linear-gradient",cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function() {
var G__54065 = null;
var G__54065__4 = (function (c1,p1,c2,p2){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,p1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c2,p2], null)], null);
});
var G__54065__5 = (function (dir,c1,p1,c2,p2){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dir,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,p1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c2,p2], null)], null);
});
G__54065 = function(dir,c1,p1,c2,p2){
switch(arguments.length){
case 4:
return G__54065__4.call(this,dir,c1,p1,c2);
case 5:
return G__54065__5.call(this,dir,c1,p1,c2,p2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__54065.cljs$core$IFn$_invoke$arity$4 = G__54065__4;
G__54065.cljs$core$IFn$_invoke$arity$5 = G__54065__5;
return G__54065;
})()
,args__54037__auto__),null,null,null));
};
var reframe_testing$styles$linear_gradient = function (var_args){
var args__54037__auto__ = null;
if (arguments.length > 0) {
var G__54066__i = 0, G__54066__a = new Array(arguments.length -  0);
while (G__54066__i < G__54066__a.length) {G__54066__a[G__54066__i] = arguments[G__54066__i + 0]; ++G__54066__i;}
  args__54037__auto__ = new cljs.core.IndexedSeq(G__54066__a,0,null);
} 
return reframe_testing$styles$linear_gradient__delegate.call(this,args__54037__auto__);};
reframe_testing$styles$linear_gradient.cljs$lang$maxFixedArity = 0;
reframe_testing$styles$linear_gradient.cljs$lang$applyTo = (function (arglist__54067){
var args__54037__auto__ = cljs.core.seq(arglist__54067);
return reframe_testing$styles$linear_gradient__delegate(args__54037__auto__);
});
reframe_testing$styles$linear_gradient.cljs$core$IFn$_invoke$arity$variadic = reframe_testing$styles$linear_gradient__delegate;
return reframe_testing$styles$linear_gradient;
})()
;
reframe_testing.styles.defaults_factory$ = (function reframe_testing$styles$defaults_factory$(style_name54057,params54058){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),style_name54057,new cljs.core.Keyword(null,"css","css",1135045163),spade.runtime.compile_css(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"#ddd","#ddd",-1886570548),new cljs.core.Keyword(null,"background-image","background-image",-1142314704),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reframe_testing.styles.linear_gradient.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"white","white",-483998618),garden.units.px((2)),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),garden.units.px((2))], 0)),reframe_testing.styles.linear_gradient.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.units.deg((90)),new cljs.core.Keyword(null,"white","white",-483998618),garden.units.px((2)),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),garden.units.px((2))], 0)),reframe_testing.styles.linear_gradient.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.color.rgba.cljs$core$IFn$_invoke$arity$4((255),(255),(255),0.3),garden.units.px((1)),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),garden.units.px((1))], 0)),reframe_testing.styles.linear_gradient.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.units.deg((90)),garden.color.rgba.cljs$core$IFn$_invoke$arity$4((255),(255),(255),0.3),garden.units.px((1)),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),garden.units.px((1))], 0))], null),new cljs.core.Keyword(null,"background-size","background-size",-1248630243),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.units.px((100)),garden.units.px((100))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.units.px((100)),garden.units.px((100))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.units.px((20)),garden.units.px((20))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.units.px((20)),garden.units.px((20))], null)], null),new cljs.core.Keyword(null,"background-position","background-position",1112702746),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.units.px((-2)),garden.units.px((-2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.units.px((-2)),garden.units.px((-2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.units.px((-1)),garden.units.px((-1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.units.px((-1)),garden.units.px((-1))], null)], null)], null)], null)], null))], null);
});

var factory_name54059_54068 = spade.util.factory__GT_name(reframe_testing.styles.defaults_factory$);
reframe_testing.styles.defaults = spade.runtime.ensure_style_BANG_(new cljs.core.Keyword(null,"global","global",93595047),factory_name54059_54068,reframe_testing.styles.defaults_factory$,null);
reframe_testing.styles.level1_factory$ = (function reframe_testing$styles$level1_factory$(style_name54060,params54061){
var style54063 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_name54060)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"green","green",-945526839)], null)], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),spade.runtime.compile_css(style54063),new cljs.core.Keyword(null,"name","name",1843675177),style_name54060], null);
});

var factory_name54062_54069 = spade.util.factory__GT_name(reframe_testing.styles.level1_factory$);
reframe_testing.styles.level1 = (function reframe_testing$styles$level1(){
return spade.runtime.ensure_style_BANG_(new cljs.core.Keyword(null,"class","class",-2030961996),factory_name54062_54069,reframe_testing.styles.level1_factory$,cljs.core.PersistentVector.EMPTY);
});

//# sourceMappingURL=reframe_testing.styles.js.map
