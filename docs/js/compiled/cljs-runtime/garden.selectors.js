goog.provide('garden.selectors');

/**
 * @interface
 */
garden.selectors.ICSSSelector = function(){};

var garden$selectors$ICSSSelector$css_selector$dyn_53295 = (function (this$){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (garden.selectors.css_selector[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4464__auto__.call(null,this$));
} else {
var m__4461__auto__ = (garden.selectors.css_selector["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4461__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ICSSSelector.css-selector",this$);
}
}
});
garden.selectors.css_selector = (function garden$selectors$css_selector(this$){
if((((!((this$ == null)))) && ((!((this$.garden$selectors$ICSSSelector$css_selector$arity$1 == null)))))){
return this$.garden$selectors$ICSSSelector$css_selector$arity$1(this$);
} else {
return garden$selectors$ICSSSelector$css_selector$dyn_53295(this$);
}
});

garden.selectors.selector_QMARK_ = (function garden$selectors$selector_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.garden$selectors$ICSSSelector$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(garden.selectors.ICSSSelector,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(garden.selectors.ICSSSelector,x);
}
});
goog.object.set(garden.selectors.ICSSSelector,"string",true);

goog.object.set(garden.selectors.css_selector,"string",(function (this$){
return this$;
}));

(cljs.core.Keyword.prototype.garden$selectors$ICSSSelector$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.garden$selectors$ICSSSelector$css_selector$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name(this$__$1);
}));

(cljs.core.Symbol.prototype.garden$selectors$ICSSSelector$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.garden$selectors$ICSSSelector$css_selector$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name(this$__$1);
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {garden.selectors.ICSSSelector}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
garden.selectors.CSSSelector = (function (selector,__meta,__extmap,__hash){
this.selector = selector;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716171;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(garden.selectors.CSSSelector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(garden.selectors.CSSSelector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k53216,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__53226 = k53216;
var G__53226__$1 = (((G__53226 instanceof cljs.core.Keyword))?G__53226.fqn:null);
switch (G__53226__$1) {
case "selector":
return self__.selector;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53216,else__4418__auto__);

}
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__53227){
var vec__53228 = p__53227;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53228,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53228,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#garden.selectors.CSSSelector{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selector","selector",762528866),self__.selector],null))], null),self__.__extmap));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53215){
var self__ = this;
var G__53215__$1 = this;
return (new cljs.core.RecordIter((0),G__53215__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selector","selector",762528866)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(garden.selectors.CSSSelector.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new garden.selectors.CSSSelector(self__.selector,self__.__meta,self__.__extmap,self__.__hash));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (coll__4412__auto__){
return (-1534393016 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
})(this__4411__auto____$1);
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53217,other53218){
var self__ = this;
var this53217__$1 = this;
return (((!((other53218 == null)))) && ((this53217__$1.constructor === other53218.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53217__$1.selector,other53218.selector)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53217__$1.__extmap,other53218.__extmap)));
}));

(garden.selectors.CSSSelector.prototype.garden$selectors$ICSSSelector$ = cljs.core.PROTOCOL_SENTINEL);

(garden.selectors.CSSSelector.prototype.garden$selectors$ICSSSelector$css_selector$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return garden.selectors.css_selector(new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(this$__$1));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selector","selector",762528866),null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new garden.selectors.CSSSelector(self__.selector,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__53215){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__53236 = cljs.core.keyword_identical_QMARK_;
var expr__53237 = k__4423__auto__;
if(cljs.core.truth_((pred__53236.cljs$core$IFn$_invoke$arity$2 ? pred__53236.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"selector","selector",762528866),expr__53237) : pred__53236.call(null,new cljs.core.Keyword(null,"selector","selector",762528866),expr__53237)))){
return (new garden.selectors.CSSSelector(G__53215,self__.__meta,self__.__extmap,null));
} else {
return (new garden.selectors.CSSSelector(self__.selector,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__53215),null));
}
}));

(garden.selectors.CSSSelector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"selector","selector",762528866),self__.selector,null))], null),self__.__extmap));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__53215){
var self__ = this;
var this__4414__auto____$1 = this;
return (new garden.selectors.CSSSelector(self__.selector,G__53215,self__.__extmap,self__.__hash));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4421__auto__,(0)),cljs.core._nth(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(garden.selectors.CSSSelector.prototype.call = (function() {
var G__53302 = null;
var G__53302__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$;
});
var G__53302__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a))].join(''),null,null,null));
});
var G__53302__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b))].join(''),null,null,null));
});
var G__53302__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c))].join(''),null,null,null));
});
var G__53302__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d))].join(''),null,null,null));
});
var G__53302__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e))].join(''),null,null,null));
});
var G__53302__7 = (function (self__,a,b,c,d,e,f){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f))].join(''),null,null,null));
});
var G__53302__8 = (function (self__,a,b,c,d,e,f,g){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g))].join(''),null,null,null));
});
var G__53302__9 = (function (self__,a,b,c,d,e,f,g,h){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h))].join(''),null,null,null));
});
var G__53302__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i))].join(''),null,null,null));
});
var G__53302__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j))].join(''),null,null,null));
});
var G__53302__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(k))].join(''),null,null,null));
});
var G__53302__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(l))].join(''),null,null,null));
});
var G__53302__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(m))].join(''),null,null,null));
});
var G__53302__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(n))].join(''),null,null,null));
});
var G__53302__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(o))].join(''),null,null,null));
});
var G__53302__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(p))].join(''),null,null,null));
});
var G__53302__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(p)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(q))].join(''),null,null,null));
});
var G__53302__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(p)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(q)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(r))].join(''),null,null,null));
});
var G__53302__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(p)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(q)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(r)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(s))].join(''),null,null,null));
});
var G__53302__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(p)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(q)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(r)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(s)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(t))].join(''),null,null,null));
});
G__53302 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
switch(arguments.length){
case 1:
return G__53302__1.call(this,self__);
case 2:
return G__53302__2.call(this,self__,a);
case 3:
return G__53302__3.call(this,self__,a,b);
case 4:
return G__53302__4.call(this,self__,a,b,c);
case 5:
return G__53302__5.call(this,self__,a,b,c,d);
case 6:
return G__53302__6.call(this,self__,a,b,c,d,e);
case 7:
return G__53302__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__53302__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__53302__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__53302__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__53302__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__53302__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__53302__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__53302__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__53302__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__53302__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__53302__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__53302__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__53302__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__53302__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__53302__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__53302.cljs$core$IFn$_invoke$arity$1 = G__53302__1;
G__53302.cljs$core$IFn$_invoke$arity$2 = G__53302__2;
G__53302.cljs$core$IFn$_invoke$arity$3 = G__53302__3;
G__53302.cljs$core$IFn$_invoke$arity$4 = G__53302__4;
G__53302.cljs$core$IFn$_invoke$arity$5 = G__53302__5;
G__53302.cljs$core$IFn$_invoke$arity$6 = G__53302__6;
G__53302.cljs$core$IFn$_invoke$arity$7 = G__53302__7;
G__53302.cljs$core$IFn$_invoke$arity$8 = G__53302__8;
G__53302.cljs$core$IFn$_invoke$arity$9 = G__53302__9;
G__53302.cljs$core$IFn$_invoke$arity$10 = G__53302__10;
G__53302.cljs$core$IFn$_invoke$arity$11 = G__53302__11;
G__53302.cljs$core$IFn$_invoke$arity$12 = G__53302__12;
G__53302.cljs$core$IFn$_invoke$arity$13 = G__53302__13;
G__53302.cljs$core$IFn$_invoke$arity$14 = G__53302__14;
G__53302.cljs$core$IFn$_invoke$arity$15 = G__53302__15;
G__53302.cljs$core$IFn$_invoke$arity$16 = G__53302__16;
G__53302.cljs$core$IFn$_invoke$arity$17 = G__53302__17;
G__53302.cljs$core$IFn$_invoke$arity$18 = G__53302__18;
G__53302.cljs$core$IFn$_invoke$arity$19 = G__53302__19;
G__53302.cljs$core$IFn$_invoke$arity$20 = G__53302__20;
G__53302.cljs$core$IFn$_invoke$arity$21 = G__53302__21;
return G__53302;
})()
);

(garden.selectors.CSSSelector.prototype.apply = (function (self__,args53225){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args53225)));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
return this$;
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a))].join(''),null,null,null));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b))].join(''),null,null,null));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c))].join(''),null,null,null));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d))].join(''),null,null,null));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e))].join(''),null,null,null));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f))].join(''),null,null,null));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g))].join(''),null,null,null));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h))].join(''),null,null,null));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i))].join(''),null,null,null));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j))].join(''),null,null,null));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(k))].join(''),null,null,null));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(l))].join(''),null,null,null));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(m))].join(''),null,null,null));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(n))].join(''),null,null,null));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(o))].join(''),null,null,null));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(p))].join(''),null,null,null));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(p)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(q))].join(''),null,null,null));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(p)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(q)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(r))].join(''),null,null,null));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(p)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(q)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(r)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(s))].join(''),null,null,null));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(p)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(q)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(r)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(s)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(t))].join(''),null,null,null));
}));

(garden.selectors.CSSSelector.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selector","selector",-1891906903,null)], null);
}));

(garden.selectors.CSSSelector.cljs$lang$type = true);

(garden.selectors.CSSSelector.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"garden.selectors/CSSSelector",null,(1),null));
}));

(garden.selectors.CSSSelector.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"garden.selectors/CSSSelector");
}));

/**
 * Positional factory function for garden.selectors/CSSSelector.
 */
garden.selectors.__GT_CSSSelector = (function garden$selectors$__GT_CSSSelector(selector){
return (new garden.selectors.CSSSelector(selector,null,null,null));
});

/**
 * Factory function for garden.selectors/CSSSelector, taking a map of keywords to field values.
 */
garden.selectors.map__GT_CSSSelector = (function garden$selectors$map__GT_CSSSelector(G__53221){
var extmap__4454__auto__ = (function (){var G__53262 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53221,new cljs.core.Keyword(null,"selector","selector",762528866));
if(cljs.core.record_QMARK_(G__53221)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__53262);
} else {
return G__53262;
}
})();
return (new garden.selectors.CSSSelector(new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(G__53221),null,cljs.core.not_empty(extmap__4454__auto__),null));
});

garden.selectors.selector = (function garden$selectors$selector(x){
return (new garden.selectors.CSSSelector(x,null,null,null));
});
garden.selectors.html_tags = cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"abbr","abbr",-565843885,null),new cljs.core.Symbol(null,"address","address",-2094936343,null),new cljs.core.Symbol(null,"area","area",2112538783,null),new cljs.core.Symbol(null,"article","article",1618846482,null),new cljs.core.Symbol(null,"aside","aside",-1240038232,null),new cljs.core.Symbol(null,"audio","audio",-835308448,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"bdi","bdi",317505641,null),new cljs.core.Symbol(null,"bdo","bdo",-490616675,null),new cljs.core.Symbol(null,"blockquote","blockquote",2012795717,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"br","br",-1720330977,null),new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.Symbol(null,"canvas","canvas",-158285962,null),new cljs.core.Symbol(null,"caption","caption",785147625,null),new cljs.core.Symbol(null,"cite","cite",-744995773,null),new cljs.core.Symbol(null,"code","code",-1068142627,null),new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.Symbol(null,"colgroup","colgroup",-2003317124,null),new cljs.core.Symbol(null,"command","command",745990803,null),new cljs.core.Symbol(null,"datalist","datalist",405488053,null),new cljs.core.Symbol(null,"dd","dd",300093898,null),new cljs.core.Symbol(null,"del","del",-2079460185,null),new cljs.core.Symbol(null,"details","details",-697640358,null),new cljs.core.Symbol(null,"dfn","dfn",1882439694,null),new cljs.core.Symbol(null,"div","div",-1597244137,null),new cljs.core.Symbol(null,"dl","dl",-499620186,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null),new cljs.core.Symbol(null,"em","em",-1946622734,null),new cljs.core.Symbol(null,"embed","embed",285618178,null),new cljs.core.Symbol(null,"fieldset","fieldset",-309239289,null),new cljs.core.Symbol(null,"figcaption","figcaption",-149590520,null),new cljs.core.Symbol(null,"figure","figure",1079137448,null),new cljs.core.Symbol(null,"footer","footer",-1047990379,null),new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"h1","h1",-256355935,null),new cljs.core.Symbol(null,"h2","h2",1267868799,null),new cljs.core.Symbol(null,"h3","h3",-586824606,null),new cljs.core.Symbol(null,"h4","h4",-649572776,null),new cljs.core.Symbol(null,"h5","h5",-188625098,null),new cljs.core.Symbol(null,"h6","h6",-2097141989,null),new cljs.core.Symbol(null,"head","head",869147608,null),new cljs.core.Symbol(null,"header","header",1759972661,null),new cljs.core.Symbol(null,"hgroup","hgroup",-1525585280,null),new cljs.core.Symbol(null,"hr","hr",-1276695702,null),new cljs.core.Symbol(null,"html","html",641734630,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"iframe","iframe",-1770013743,null),new cljs.core.Symbol(null,"img","img",-1211748411,null),new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.Symbol(null,"ins","ins",618547957,null),new cljs.core.Symbol(null,"kbd","kbd",1956688402,null),new cljs.core.Symbol(null,"keygen","keygen",1068838274,null),new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.Symbol(null,"legend","legend",613339282,null),new cljs.core.Symbol(null,"li","li",-1930876848,null),new cljs.core.Symbol(null,"link","link",-128631941,null),new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol(null,"mark","mark",1266715182,null),new cljs.core.Symbol(null,"math","math",-386381276,null),new cljs.core.Symbol(null,"menu","menu",1992786725,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"meter","meter",1452889916,null),new cljs.core.Symbol(null,"nav","nav",-1934895292,null),new cljs.core.Symbol(null,"noscript","noscript",935754238,null),new cljs.core.Symbol(null,"object","object",-1179821820,null),new cljs.core.Symbol(null,"ol","ol",-1721911718,null),new cljs.core.Symbol(null,"optgroup","optgroup",-916153551,null),new cljs.core.Symbol(null,"option","option",1705663799,null),new cljs.core.Symbol(null,"output","output",534662484,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"param","param",-640803946,null),new cljs.core.Symbol(null,"pre","pre",-535978900,null),new cljs.core.Symbol(null,"progress","progress",1884855074,null),new cljs.core.Symbol(null,"q","q",-1965434072,null),new cljs.core.Symbol(null,"rp","rp",-647737686,null),new cljs.core.Symbol(null,"rt","rt",-2030955077,null),new cljs.core.Symbol(null,"ruby","ruby",-653698108,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"samp","samp",-1148294633,null),new cljs.core.Symbol(null,"script","script",336087726,null),new cljs.core.Symbol(null,"section","section",1340390001,null),new cljs.core.Symbol(null,"select","select",-1506602266,null),new cljs.core.Symbol(null,"small","small",-520957065,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"span","span",-1259562778,null),new cljs.core.Symbol(null,"strong","strong",1910060527,null),new cljs.core.Symbol(null,"style","style",1143888791,null),new cljs.core.Symbol(null,"sub","sub",-453228498,null),new cljs.core.Symbol(null,"summary","summary",2021379479,null),new cljs.core.Symbol(null,"sup","sup",-398960819,null),new cljs.core.Symbol(null,"svg","svg",-1797646627,null),new cljs.core.Symbol(null,"table","table",1075588491,null),new cljs.core.Symbol(null,"tbody","tbody",1559853227,null),new cljs.core.Symbol(null,"td","td",-1174502416,null),new cljs.core.Symbol(null,"textarea","textarea",990155703,null),new cljs.core.Symbol(null,"tfoot","tfoot",938931637,null),new cljs.core.Symbol(null,"th","th",1094922961,null),new cljs.core.Symbol(null,"thead","thead",1348656231,null),new cljs.core.Symbol(null,"time","time",-1268547887,null),new cljs.core.Symbol(null,"title","title",-2017930186,null),new cljs.core.Symbol(null,"tr","tr",215756881,null),new cljs.core.Symbol(null,"track","track",1836319014,null),new cljs.core.Symbol(null,"u","u",483896742,null),new cljs.core.Symbol(null,"ul","ul",291010124,null),new cljs.core.Symbol(null,"var","var",870848730,null),new cljs.core.Symbol(null,"video","video",1797419657,null),new cljs.core.Symbol(null,"wbr","wbr",1869193327,null)], true);
/**
 * CSS a type selector.
 */
garden.selectors.a = garden.selectors.selector("a");

/**
 * CSS abbr type selector.
 */
garden.selectors.abbr = garden.selectors.selector("abbr");

/**
 * CSS address type selector.
 */
garden.selectors.address = garden.selectors.selector("address");

/**
 * CSS area type selector.
 */
garden.selectors.area = garden.selectors.selector("area");

/**
 * CSS article type selector.
 */
garden.selectors.article = garden.selectors.selector("article");

/**
 * CSS aside type selector.
 */
garden.selectors.aside = garden.selectors.selector("aside");

/**
 * CSS audio type selector.
 */
garden.selectors.audio = garden.selectors.selector("audio");

/**
 * CSS b type selector.
 */
garden.selectors.b = garden.selectors.selector("b");

/**
 * CSS base type selector.
 */
garden.selectors.base = garden.selectors.selector("base");

/**
 * CSS bdi type selector.
 */
garden.selectors.bdi = garden.selectors.selector("bdi");

/**
 * CSS bdo type selector.
 */
garden.selectors.bdo = garden.selectors.selector("bdo");

/**
 * CSS blockquote type selector.
 */
garden.selectors.blockquote = garden.selectors.selector("blockquote");

/**
 * CSS body type selector.
 */
garden.selectors.body = garden.selectors.selector("body");

/**
 * CSS br type selector.
 */
garden.selectors.br = garden.selectors.selector("br");

/**
 * CSS button type selector.
 */
garden.selectors.button = garden.selectors.selector("button");

/**
 * CSS canvas type selector.
 */
garden.selectors.canvas = garden.selectors.selector("canvas");

/**
 * CSS caption type selector.
 */
garden.selectors.caption = garden.selectors.selector("caption");

/**
 * CSS cite type selector.
 */
garden.selectors.cite = garden.selectors.selector("cite");

/**
 * CSS code type selector.
 */
garden.selectors.code = garden.selectors.selector("code");

/**
 * CSS col type selector.
 */
garden.selectors.col = garden.selectors.selector("col");

/**
 * CSS colgroup type selector.
 */
garden.selectors.colgroup = garden.selectors.selector("colgroup");

/**
 * CSS command type selector.
 */
garden.selectors.command = garden.selectors.selector("command");

/**
 * CSS datalist type selector.
 */
garden.selectors.datalist = garden.selectors.selector("datalist");

/**
 * CSS dd type selector.
 */
garden.selectors.dd = garden.selectors.selector("dd");

/**
 * CSS del type selector.
 */
garden.selectors.del = garden.selectors.selector("del");

/**
 * CSS details type selector.
 */
garden.selectors.details = garden.selectors.selector("details");

/**
 * CSS dfn type selector.
 */
garden.selectors.dfn = garden.selectors.selector("dfn");

/**
 * CSS div type selector.
 */
garden.selectors.div = garden.selectors.selector("div");

/**
 * CSS dl type selector.
 */
garden.selectors.dl = garden.selectors.selector("dl");

/**
 * CSS dt type selector.
 */
garden.selectors.dt = garden.selectors.selector("dt");

/**
 * CSS em type selector.
 */
garden.selectors.em = garden.selectors.selector("em");

/**
 * CSS embed type selector.
 */
garden.selectors.embed = garden.selectors.selector("embed");

/**
 * CSS fieldset type selector.
 */
garden.selectors.fieldset = garden.selectors.selector("fieldset");

/**
 * CSS figcaption type selector.
 */
garden.selectors.figcaption = garden.selectors.selector("figcaption");

/**
 * CSS figure type selector.
 */
garden.selectors.figure = garden.selectors.selector("figure");

/**
 * CSS footer type selector.
 */
garden.selectors.footer = garden.selectors.selector("footer");

/**
 * CSS form type selector.
 */
garden.selectors.form = garden.selectors.selector("form");

/**
 * CSS h1 type selector.
 */
garden.selectors.h1 = garden.selectors.selector("h1");

/**
 * CSS h2 type selector.
 */
garden.selectors.h2 = garden.selectors.selector("h2");

/**
 * CSS h3 type selector.
 */
garden.selectors.h3 = garden.selectors.selector("h3");

/**
 * CSS h4 type selector.
 */
garden.selectors.h4 = garden.selectors.selector("h4");

/**
 * CSS h5 type selector.
 */
garden.selectors.h5 = garden.selectors.selector("h5");

/**
 * CSS h6 type selector.
 */
garden.selectors.h6 = garden.selectors.selector("h6");

/**
 * CSS head type selector.
 */
garden.selectors.head = garden.selectors.selector("head");

/**
 * CSS header type selector.
 */
garden.selectors.header = garden.selectors.selector("header");

/**
 * CSS hgroup type selector.
 */
garden.selectors.hgroup = garden.selectors.selector("hgroup");

/**
 * CSS hr type selector.
 */
garden.selectors.hr = garden.selectors.selector("hr");

/**
 * CSS html type selector.
 */
garden.selectors.html = garden.selectors.selector("html");

/**
 * CSS i type selector.
 */
garden.selectors.i = garden.selectors.selector("i");

/**
 * CSS iframe type selector.
 */
garden.selectors.iframe = garden.selectors.selector("iframe");

/**
 * CSS img type selector.
 */
garden.selectors.img = garden.selectors.selector("img");

/**
 * CSS input type selector.
 */
garden.selectors.input = garden.selectors.selector("input");

/**
 * CSS ins type selector.
 */
garden.selectors.ins = garden.selectors.selector("ins");

/**
 * CSS kbd type selector.
 */
garden.selectors.kbd = garden.selectors.selector("kbd");

/**
 * CSS keygen type selector.
 */
garden.selectors.keygen = garden.selectors.selector("keygen");

/**
 * CSS label type selector.
 */
garden.selectors.label = garden.selectors.selector("label");

/**
 * CSS legend type selector.
 */
garden.selectors.legend = garden.selectors.selector("legend");

/**
 * CSS li type selector.
 */
garden.selectors.li = garden.selectors.selector("li");

/**
 * CSS link type selector.
 */
garden.selectors.link = garden.selectors.selector("link");

/**
 * CSS map type selector.
 */
garden.selectors.map = garden.selectors.selector("map");

/**
 * CSS mark type selector.
 */
garden.selectors.mark = garden.selectors.selector("mark");

/**
 * CSS math type selector.
 */
garden.selectors.math = garden.selectors.selector("math");

/**
 * CSS menu type selector.
 */
garden.selectors.menu = garden.selectors.selector("menu");

/**
 * CSS meta type selector.
 */
garden.selectors.meta = garden.selectors.selector("meta");

/**
 * CSS meter type selector.
 */
garden.selectors.meter = garden.selectors.selector("meter");

/**
 * CSS nav type selector.
 */
garden.selectors.nav = garden.selectors.selector("nav");

/**
 * CSS noscript type selector.
 */
garden.selectors.noscript = garden.selectors.selector("noscript");

/**
 * CSS object type selector.
 */
garden.selectors.object = garden.selectors.selector("object");

/**
 * CSS ol type selector.
 */
garden.selectors.ol = garden.selectors.selector("ol");

/**
 * CSS optgroup type selector.
 */
garden.selectors.optgroup = garden.selectors.selector("optgroup");

/**
 * CSS option type selector.
 */
garden.selectors.option = garden.selectors.selector("option");

/**
 * CSS output type selector.
 */
garden.selectors.output = garden.selectors.selector("output");

/**
 * CSS p type selector.
 */
garden.selectors.p = garden.selectors.selector("p");

/**
 * CSS param type selector.
 */
garden.selectors.param = garden.selectors.selector("param");

/**
 * CSS pre type selector.
 */
garden.selectors.pre = garden.selectors.selector("pre");

/**
 * CSS progress type selector.
 */
garden.selectors.progress = garden.selectors.selector("progress");

/**
 * CSS q type selector.
 */
garden.selectors.q = garden.selectors.selector("q");

/**
 * CSS rp type selector.
 */
garden.selectors.rp = garden.selectors.selector("rp");

/**
 * CSS rt type selector.
 */
garden.selectors.rt = garden.selectors.selector("rt");

/**
 * CSS ruby type selector.
 */
garden.selectors.ruby = garden.selectors.selector("ruby");

/**
 * CSS s type selector.
 */
garden.selectors.s = garden.selectors.selector("s");

/**
 * CSS samp type selector.
 */
garden.selectors.samp = garden.selectors.selector("samp");

/**
 * CSS script type selector.
 */
garden.selectors.script = garden.selectors.selector("script");

/**
 * CSS section type selector.
 */
garden.selectors.section = garden.selectors.selector("section");

/**
 * CSS select type selector.
 */
garden.selectors.select = garden.selectors.selector("select");

/**
 * CSS small type selector.
 */
garden.selectors.small = garden.selectors.selector("small");

/**
 * CSS source type selector.
 */
garden.selectors.source = garden.selectors.selector("source");

/**
 * CSS span type selector.
 */
garden.selectors.span = garden.selectors.selector("span");

/**
 * CSS strong type selector.
 */
garden.selectors.strong = garden.selectors.selector("strong");

/**
 * CSS style type selector.
 */
garden.selectors.style = garden.selectors.selector("style");

/**
 * CSS sub type selector.
 */
garden.selectors.sub = garden.selectors.selector("sub");

/**
 * CSS summary type selector.
 */
garden.selectors.summary = garden.selectors.selector("summary");

/**
 * CSS sup type selector.
 */
garden.selectors.sup = garden.selectors.selector("sup");

/**
 * CSS svg type selector.
 */
garden.selectors.svg = garden.selectors.selector("svg");

/**
 * CSS table type selector.
 */
garden.selectors.table = garden.selectors.selector("table");

/**
 * CSS tbody type selector.
 */
garden.selectors.tbody = garden.selectors.selector("tbody");

/**
 * CSS td type selector.
 */
garden.selectors.td = garden.selectors.selector("td");

/**
 * CSS textarea type selector.
 */
garden.selectors.textarea = garden.selectors.selector("textarea");

/**
 * CSS tfoot type selector.
 */
garden.selectors.tfoot = garden.selectors.selector("tfoot");

/**
 * CSS th type selector.
 */
garden.selectors.th = garden.selectors.selector("th");

/**
 * CSS thead type selector.
 */
garden.selectors.thead = garden.selectors.selector("thead");

/**
 * CSS time type selector.
 */
garden.selectors.time = garden.selectors.selector("time");

/**
 * CSS title type selector.
 */
garden.selectors.title = garden.selectors.selector("title");

/**
 * CSS tr type selector.
 */
garden.selectors.tr = garden.selectors.selector("tr");

/**
 * CSS track type selector.
 */
garden.selectors.track = garden.selectors.selector("track");

/**
 * CSS u type selector.
 */
garden.selectors.u = garden.selectors.selector("u");

/**
 * CSS ul type selector.
 */
garden.selectors.ul = garden.selectors.selector("ul");

/**
 * CSS var type selector.
 */
garden.selectors.var$ = garden.selectors.selector("var");

/**
 * CSS video type selector.
 */
garden.selectors.video = garden.selectors.selector("video");

/**
 * CSS wbr type selector.
 */
garden.selectors.wbr = garden.selectors.selector("wbr");
garden.selectors.pseudo_classes = cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"active","active",-758473701,null),new cljs.core.Symbol(null,"checked","checked",1589575708,null),new cljs.core.Symbol(null,"default","default",-347290801,null),new cljs.core.Symbol(null,"disabled","disabled",110747309,null),new cljs.core.Symbol(null,"empty","empty",-1886564811,null),new cljs.core.Symbol(null,"enabled","enabled",-1458526013,null),new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"first-child","first-child",-540335927,null),new cljs.core.Symbol(null,"first-of-type","first-of-type",900311874,null),new cljs.core.Symbol(null,"fullscreen","fullscreen",1636160473,null),new cljs.core.Symbol(null,"focus","focus",1875209438,null),new cljs.core.Symbol(null,"hover","hover",1299389816,null),new cljs.core.Symbol(null,"indeterminate","indeterminate",1127490551,null),new cljs.core.Symbol(null,"in-range","in-range",-1297863944,null),new cljs.core.Symbol(null,"invalid","invalid",2053401043,null),new cljs.core.Symbol(null,"last-child","last-child",-1323765444,null),new cljs.core.Symbol(null,"last-of-type","last-of-type",986453331,null),new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.Symbol(null,"links","links",986024133,null),new cljs.core.Symbol(null,"only-child","only-child",220029032,null),new cljs.core.Symbol(null,"only-of-type","only-of-type",-1960460626,null),new cljs.core.Symbol(null,"optional","optional",-600484260,null),new cljs.core.Symbol(null,"out-of-range","out-of-range",-1962117180,null),new cljs.core.Symbol(null,"read-only","read-only",1448824641,null),new cljs.core.Symbol(null,"read-write","read-write",1818554410,null),new cljs.core.Symbol(null,"required","required",-846788763,null),new cljs.core.Symbol(null,"right","right",1187949694,null),new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.Symbol(null,"scope","scope",1201173109,null),new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.Symbol(null,"valid","valid",1796145767,null),new cljs.core.Symbol(null,"visited","visited",29677652,null)], true);
/**
 * CSS :active pseudo-class selector.
 */
garden.selectors.active = garden.selectors.selector(":active");

/**
 * CSS :checked pseudo-class selector.
 */
garden.selectors.checked = garden.selectors.selector(":checked");

/**
 * CSS :default pseudo-class selector.
 */
garden.selectors.default$ = garden.selectors.selector(":default");

/**
 * CSS :disabled pseudo-class selector.
 */
garden.selectors.disabled = garden.selectors.selector(":disabled");

/**
 * CSS :empty pseudo-class selector.
 */
garden.selectors.empty = garden.selectors.selector(":empty");

/**
 * CSS :enabled pseudo-class selector.
 */
garden.selectors.enabled = garden.selectors.selector(":enabled");

/**
 * CSS :first pseudo-class selector.
 */
garden.selectors.first = garden.selectors.selector(":first");

/**
 * CSS :first-child pseudo-class selector.
 */
garden.selectors.first_child = garden.selectors.selector(":first-child");

/**
 * CSS :first-of-type pseudo-class selector.
 */
garden.selectors.first_of_type = garden.selectors.selector(":first-of-type");

/**
 * CSS :fullscreen pseudo-class selector.
 */
garden.selectors.fullscreen = garden.selectors.selector(":fullscreen");

/**
 * CSS :focus pseudo-class selector.
 */
garden.selectors.focus = garden.selectors.selector(":focus");

/**
 * CSS :hover pseudo-class selector.
 */
garden.selectors.hover = garden.selectors.selector(":hover");

/**
 * CSS :indeterminate pseudo-class selector.
 */
garden.selectors.indeterminate = garden.selectors.selector(":indeterminate");

/**
 * CSS :in-range pseudo-class selector.
 */
garden.selectors.in_range = garden.selectors.selector(":in-range");

/**
 * CSS :invalid pseudo-class selector.
 */
garden.selectors.invalid = garden.selectors.selector(":invalid");

/**
 * CSS :last-child pseudo-class selector.
 */
garden.selectors.last_child = garden.selectors.selector(":last-child");

/**
 * CSS :last-of-type pseudo-class selector.
 */
garden.selectors.last_of_type = garden.selectors.selector(":last-of-type");

/**
 * CSS :left pseudo-class selector.
 */
garden.selectors.left = garden.selectors.selector(":left");

/**
 * CSS :links pseudo-class selector.
 */
garden.selectors.links = garden.selectors.selector(":links");

/**
 * CSS :only-child pseudo-class selector.
 */
garden.selectors.only_child = garden.selectors.selector(":only-child");

/**
 * CSS :only-of-type pseudo-class selector.
 */
garden.selectors.only_of_type = garden.selectors.selector(":only-of-type");

/**
 * CSS :optional pseudo-class selector.
 */
garden.selectors.optional = garden.selectors.selector(":optional");

/**
 * CSS :out-of-range pseudo-class selector.
 */
garden.selectors.out_of_range = garden.selectors.selector(":out-of-range");

/**
 * CSS :read-only pseudo-class selector.
 */
garden.selectors.read_only = garden.selectors.selector(":read-only");

/**
 * CSS :read-write pseudo-class selector.
 */
garden.selectors.read_write = garden.selectors.selector(":read-write");

/**
 * CSS :required pseudo-class selector.
 */
garden.selectors.required = garden.selectors.selector(":required");

/**
 * CSS :right pseudo-class selector.
 */
garden.selectors.right = garden.selectors.selector(":right");

/**
 * CSS :root pseudo-class selector.
 */
garden.selectors.root = garden.selectors.selector(":root");

/**
 * CSS :scope pseudo-class selector.
 */
garden.selectors.scope = garden.selectors.selector(":scope");

/**
 * CSS :target pseudo-class selector.
 */
garden.selectors.target = garden.selectors.selector(":target");

/**
 * CSS :valid pseudo-class selector.
 */
garden.selectors.valid = garden.selectors.selector(":valid");

/**
 * CSS :visited pseudo-class selector.
 */
garden.selectors.visited = garden.selectors.selector(":visited");
garden.selectors.lang = cljs.core.with_meta((function() { 
var garden$selectors$lang__delegate = function (args__53054__auto__){
var v__53055__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (language){
return cljs.core.name(language);
}),args__53054__auto__);
var v__53055__auto____$1 = ((garden.selectors.selector_QMARK_(v__53055__auto__))?garden.selectors.css_selector(v__53055__auto__):v__53055__auto__);
return garden.selectors.selector([":","lang","(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__53055__auto____$1),")"].join(''));
};
var garden$selectors$lang = function (var_args){
var args__53054__auto__ = null;
if (arguments.length > 0) {
var G__53493__i = 0, G__53493__a = new Array(arguments.length -  0);
while (G__53493__i < G__53493__a.length) {G__53493__a[G__53493__i] = arguments[G__53493__i + 0]; ++G__53493__i;}
  args__53054__auto__ = new cljs.core.IndexedSeq(G__53493__a,0,null);
} 
return garden$selectors$lang__delegate.call(this,args__53054__auto__);};
garden$selectors$lang.cljs$lang$maxFixedArity = 0;
garden$selectors$lang.cljs$lang$applyTo = (function (arglist__53495){
var args__53054__auto__ = cljs.core.seq(arglist__53495);
return garden$selectors$lang__delegate(args__53054__auto__);
});
garden$selectors$lang.cljs$core$IFn$_invoke$arity$variadic = garden$selectors$lang__delegate;
return garden$selectors$lang;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rettag","rettag",-602973235),null], null));
garden.selectors.not = cljs.core.with_meta((function() { 
var garden$selectors$not__delegate = function (args__53054__auto__){
var v__53055__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (selector){
return garden.selectors.css_selector(selector);
}),args__53054__auto__);
var v__53055__auto____$1 = ((garden.selectors.selector_QMARK_(v__53055__auto__))?garden.selectors.css_selector(v__53055__auto__):v__53055__auto__);
return garden.selectors.selector([":","not","(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__53055__auto____$1),")"].join(''));
};
var garden$selectors$not = function (var_args){
var args__53054__auto__ = null;
if (arguments.length > 0) {
var G__53507__i = 0, G__53507__a = new Array(arguments.length -  0);
while (G__53507__i < G__53507__a.length) {G__53507__a[G__53507__i] = arguments[G__53507__i + 0]; ++G__53507__i;}
  args__53054__auto__ = new cljs.core.IndexedSeq(G__53507__a,0,null);
} 
return garden$selectors$not__delegate.call(this,args__53054__auto__);};
garden$selectors$not.cljs$lang$maxFixedArity = 0;
garden$selectors$not.cljs$lang$applyTo = (function (arglist__53509){
var args__53054__auto__ = cljs.core.seq(arglist__53509);
return garden$selectors$not__delegate(args__53054__auto__);
});
garden$selectors$not.cljs$core$IFn$_invoke$arity$variadic = garden$selectors$not__delegate;
return garden$selectors$not;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rettag","rettag",-602973235),null], null));
garden.selectors.nth_child_re = (new RegExp("\\s*(?:[-+]?\\d+n\\s*(?:[-+]\\s*\\d+)?|[-+]?\\d+|odd|even)\\s*","i"));
/**
 * nth-child helper.
 */
garden.selectors.nth_x = (function garden$selectors$nth_x(x){
if(((typeof x === 'string') || ((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)))){
} else {
throw (new Error(["Assert failed: ","Argument must be a string, keyword, or symbol","\n","(or (string? x) (keyword? x) (symbol? x))"].join('')));
}

var s = cljs.core.name(x);
var temp__5733__auto__ = cljs.core.re_matches(garden.selectors.nth_child_re,s);
if(cljs.core.truth_(temp__5733__auto__)){
var m = temp__5733__auto__;
return m;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",["Invalid value ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0))].join(''));
}
});
/**
 * CSS :nth-child pseudo class selector.
 */
garden.selectors.nth_child = cljs.core.with_meta((function() { 
var garden$selectors$nth_child__delegate = function (args__53054__auto__){
var v__53055__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (x){
if(typeof x === 'number'){
return garden.selectors.nth_x([cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"n"].join(''));
} else {
return garden.selectors.nth_x(x);
}
}),args__53054__auto__);
var v__53055__auto____$1 = ((garden.selectors.selector_QMARK_(v__53055__auto__))?garden.selectors.css_selector(v__53055__auto__):v__53055__auto__);
return garden.selectors.selector([":","nth-child","(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__53055__auto____$1),")"].join(''));
};
var garden$selectors$nth_child = function (var_args){
var args__53054__auto__ = null;
if (arguments.length > 0) {
var G__53514__i = 0, G__53514__a = new Array(arguments.length -  0);
while (G__53514__i < G__53514__a.length) {G__53514__a[G__53514__i] = arguments[G__53514__i + 0]; ++G__53514__i;}
  args__53054__auto__ = new cljs.core.IndexedSeq(G__53514__a,0,null);
} 
return garden$selectors$nth_child__delegate.call(this,args__53054__auto__);};
garden$selectors$nth_child.cljs$lang$maxFixedArity = 0;
garden$selectors$nth_child.cljs$lang$applyTo = (function (arglist__53515){
var args__53054__auto__ = cljs.core.seq(arglist__53515);
return garden$selectors$nth_child__delegate(args__53054__auto__);
});
garden$selectors$nth_child.cljs$core$IFn$_invoke$arity$variadic = garden$selectors$nth_child__delegate;
return garden$selectors$nth_child;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rettag","rettag",-602973235),null], null));
/**
 * CSS :nth-last-child pseudo class selector.
 */
garden.selectors.nth_last_child = cljs.core.with_meta((function() { 
var garden$selectors$nth_last_child__delegate = function (args__53054__auto__){
var v__53055__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (x){
return garden.selectors.nth_x(x);
}),args__53054__auto__);
var v__53055__auto____$1 = ((garden.selectors.selector_QMARK_(v__53055__auto__))?garden.selectors.css_selector(v__53055__auto__):v__53055__auto__);
return garden.selectors.selector([":","nth-last-child","(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__53055__auto____$1),")"].join(''));
};
var garden$selectors$nth_last_child = function (var_args){
var args__53054__auto__ = null;
if (arguments.length > 0) {
var G__53517__i = 0, G__53517__a = new Array(arguments.length -  0);
while (G__53517__i < G__53517__a.length) {G__53517__a[G__53517__i] = arguments[G__53517__i + 0]; ++G__53517__i;}
  args__53054__auto__ = new cljs.core.IndexedSeq(G__53517__a,0,null);
} 
return garden$selectors$nth_last_child__delegate.call(this,args__53054__auto__);};
garden$selectors$nth_last_child.cljs$lang$maxFixedArity = 0;
garden$selectors$nth_last_child.cljs$lang$applyTo = (function (arglist__53518){
var args__53054__auto__ = cljs.core.seq(arglist__53518);
return garden$selectors$nth_last_child__delegate(args__53054__auto__);
});
garden$selectors$nth_last_child.cljs$core$IFn$_invoke$arity$variadic = garden$selectors$nth_last_child__delegate;
return garden$selectors$nth_last_child;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rettag","rettag",-602973235),null], null));
/**
 * CSS :nth-of-type pseudo class selector.
 */
garden.selectors.nth_of_type = cljs.core.with_meta((function() { 
var garden$selectors$nth_of_type__delegate = function (args__53054__auto__){
var v__53055__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (x){
return garden.selectors.nth_x(x);
}),args__53054__auto__);
var v__53055__auto____$1 = ((garden.selectors.selector_QMARK_(v__53055__auto__))?garden.selectors.css_selector(v__53055__auto__):v__53055__auto__);
return garden.selectors.selector([":","nth-of-type","(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__53055__auto____$1),")"].join(''));
};
var garden$selectors$nth_of_type = function (var_args){
var args__53054__auto__ = null;
if (arguments.length > 0) {
var G__53519__i = 0, G__53519__a = new Array(arguments.length -  0);
while (G__53519__i < G__53519__a.length) {G__53519__a[G__53519__i] = arguments[G__53519__i + 0]; ++G__53519__i;}
  args__53054__auto__ = new cljs.core.IndexedSeq(G__53519__a,0,null);
} 
return garden$selectors$nth_of_type__delegate.call(this,args__53054__auto__);};
garden$selectors$nth_of_type.cljs$lang$maxFixedArity = 0;
garden$selectors$nth_of_type.cljs$lang$applyTo = (function (arglist__53524){
var args__53054__auto__ = cljs.core.seq(arglist__53524);
return garden$selectors$nth_of_type__delegate(args__53054__auto__);
});
garden$selectors$nth_of_type.cljs$core$IFn$_invoke$arity$variadic = garden$selectors$nth_of_type__delegate;
return garden$selectors$nth_of_type;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rettag","rettag",-602973235),null], null));
/**
 * CSS :nth-last-of-type pseudo class selector.
 */
garden.selectors.nth_last_of_type = cljs.core.with_meta((function() { 
var garden$selectors$nth_last_of_type__delegate = function (args__53054__auto__){
var v__53055__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (x){
return garden.selectors.nth_x(x);
}),args__53054__auto__);
var v__53055__auto____$1 = ((garden.selectors.selector_QMARK_(v__53055__auto__))?garden.selectors.css_selector(v__53055__auto__):v__53055__auto__);
return garden.selectors.selector([":","nth-last-of-type","(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__53055__auto____$1),")"].join(''));
};
var garden$selectors$nth_last_of_type = function (var_args){
var args__53054__auto__ = null;
if (arguments.length > 0) {
var G__53528__i = 0, G__53528__a = new Array(arguments.length -  0);
while (G__53528__i < G__53528__a.length) {G__53528__a[G__53528__i] = arguments[G__53528__i + 0]; ++G__53528__i;}
  args__53054__auto__ = new cljs.core.IndexedSeq(G__53528__a,0,null);
} 
return garden$selectors$nth_last_of_type__delegate.call(this,args__53054__auto__);};
garden$selectors$nth_last_of_type.cljs$lang$maxFixedArity = 0;
garden$selectors$nth_last_of_type.cljs$lang$applyTo = (function (arglist__53529){
var args__53054__auto__ = cljs.core.seq(arglist__53529);
return garden$selectors$nth_last_of_type__delegate(args__53054__auto__);
});
garden$selectors$nth_last_of_type.cljs$core$IFn$_invoke$arity$variadic = garden$selectors$nth_last_of_type__delegate;
return garden$selectors$nth_last_of_type;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rettag","rettag",-602973235),null], null));
/**
 * CSS ::after pseudo element selector.
 */
garden.selectors.after = garden.selectors.selector("::after");
/**
 * CSS ::before pseudo element selector.
 */
garden.selectors.before = garden.selectors.selector("::before");
/**
 * CSS ::first-letter pseudo element selector.
 */
garden.selectors.first_letter = garden.selectors.selector("::first-letter");
/**
 * CSS ::first-line pseudo element selector.
 */
garden.selectors.first_line = garden.selectors.selector("::first-line");
garden.selectors.attr = (function garden$selectors$attr(var_args){
var G__53266 = arguments.length;
switch (G__53266) {
case 1:
return garden.selectors.attr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return garden.selectors.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(garden.selectors.attr.cljs$core$IFn$_invoke$arity$1 = (function (attr_name){
return garden.selectors.selector(["[",cljs.core.name(attr_name),"]"].join(''));
}));

(garden.selectors.attr.cljs$core$IFn$_invoke$arity$3 = (function (attr_name,op,attr_value){
var v = cljs.core.name(attr_value);
var v__$1 = (cljs.core.truth_(cljs.core.re_matches(/\"(\\|[^\"])*\"|'(\\|[^\'])*'/,v))?v:cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)));
return garden.selectors.selector(["[",cljs.core.name(attr_name),cljs.core.name(op),v__$1,"]"].join(''));
}));

(garden.selectors.attr.cljs$lang$maxFixedArity = 3);

garden.selectors.attr_EQ_ = (function garden$selectors$attr_EQ_(attr_name,attr_value){
return garden.selectors.attr.cljs$core$IFn$_invoke$arity$3(attr_name,"=",attr_value);
});
garden.selectors.attr_contains = (function garden$selectors$attr_contains(attr_name,attr_value){
return garden.selectors.attr.cljs$core$IFn$_invoke$arity$3(attr_name,"~=",attr_value);
});
garden.selectors.attr_starts_with = (function garden$selectors$attr_starts_with(attr_name,attr_value){
return garden.selectors.attr.cljs$core$IFn$_invoke$arity$3(attr_name,"^=",attr_value);
});
garden.selectors.attr_starts_with_STAR_ = (function garden$selectors$attr_starts_with_STAR_(attr_name,attr_value){
return garden.selectors.attr.cljs$core$IFn$_invoke$arity$3(attr_name,"|=",attr_value);
});
garden.selectors.attr_ends_with = (function garden$selectors$attr_ends_with(attr_name,attr_value){
return garden.selectors.attr.cljs$core$IFn$_invoke$arity$3(attr_name,"$=",attr_value);
});
garden.selectors.attr_matches = (function garden$selectors$attr_matches(attr_name,attr_value){
return garden.selectors.attr.cljs$core$IFn$_invoke$arity$3(attr_name,"*=",attr_value);
});
/**
 * Descendant combinator.
 */
garden.selectors.descendant = (function garden$selectors$descendant(var_args){
var G__53271 = arguments.length;
switch (G__53271) {
case 2:
return garden.selectors.descendant.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4792__auto__ = [];
var len__4771__auto___53542 = arguments.length;
var i__4772__auto___53543 = (0);
while(true){
if((i__4772__auto___53543 < len__4771__auto___53542)){
args_arr__4792__auto__.push((arguments[i__4772__auto___53543]));

var G__53545 = (i__4772__auto___53543 + (1));
i__4772__auto___53543 = G__53545;
continue;
} else {
}
break;
}

var argseq__4793__auto__ = (new cljs.core.IndexedSeq(args_arr__4792__auto__.slice((2)),(0),null));
return garden.selectors.descendant.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4793__auto__);

}
});

(garden.selectors.descendant.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return garden.selectors.selector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b))].join(''));
}));

(garden.selectors.descendant.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return garden.selectors.selector(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.selectors.css_selector,cljs.core.cons(garden.selectors.descendant.cljs$core$IFn$_invoke$arity$2(a,b),more))));
}));

/** @this {Function} */
(garden.selectors.descendant.cljs$lang$applyTo = (function (seq53268){
var G__53269 = cljs.core.first(seq53268);
var seq53268__$1 = cljs.core.next(seq53268);
var G__53270 = cljs.core.first(seq53268__$1);
var seq53268__$2 = cljs.core.next(seq53268__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53269,G__53270,seq53268__$2);
}));

(garden.selectors.descendant.cljs$lang$maxFixedArity = (2));

/**
 * Adjacent sibling combinator.
 */
garden.selectors._PLUS_ = (function garden$selectors$_PLUS_(a,b){
return garden.selectors.selector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a))," + ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b))].join(''));
});
/**
 * General sibling combinator.
 */
garden.selectors._ = (function garden$selectors$_(a,b){
return garden.selectors.selector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a))," ~ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b))].join(''));
});
/**
 * Child combinator.
 */
garden.selectors._GT_ = (function garden$selectors$_GT_(var_args){
var G__53276 = arguments.length;
switch (G__53276) {
case 1:
return garden.selectors._GT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return garden.selectors._GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4792__auto__ = [];
var len__4771__auto___53553 = arguments.length;
var i__4772__auto___53554 = (0);
while(true){
if((i__4772__auto___53554 < len__4771__auto___53553)){
args_arr__4792__auto__.push((arguments[i__4772__auto___53554]));

var G__53555 = (i__4772__auto___53554 + (1));
i__4772__auto___53554 = G__53555;
continue;
} else {
}
break;
}

var argseq__4793__auto__ = (new cljs.core.IndexedSeq(args_arr__4792__auto__.slice((2)),(0),null));
return garden.selectors._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4793__auto__);

}
});

(garden.selectors._GT_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return garden.selectors.selector(a);
}));

(garden.selectors._GT_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return garden.selectors.selector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a))," > ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b))].join(''));
}));

(garden.selectors._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return garden.selectors.selector(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" > ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.selectors.css_selector,cljs.core.cons(garden.selectors._GT_.cljs$core$IFn$_invoke$arity$2(a,b),more))));
}));

/** @this {Function} */
(garden.selectors._GT_.cljs$lang$applyTo = (function (seq53273){
var G__53274 = cljs.core.first(seq53273);
var seq53273__$1 = cljs.core.next(seq53273);
var G__53275 = cljs.core.first(seq53273__$1);
var seq53273__$2 = cljs.core.next(seq53273__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53274,G__53275,seq53273__$2);
}));

(garden.selectors._GT_.cljs$lang$maxFixedArity = (2));

/**
 * Parent selector.
 */
garden.selectors._AMPERSAND_ = garden.selectors.selector("&");
garden.selectors.lex_specificity = (function garden$selectors$lex_specificity(s){
var id_selector_re = /^\#[a-zA-Z][\w-]*/;
var class_selector_re = /^\.[a-zA-Z][\w-]*/;
var attribute_selector_re = /^\[[^\]]*\]/;
var type_selector_re = /^[a-zA-Z][\w-]/;
var pseudo_class_re = /^:[a-zA-Z][\w-]*(?:\([^\)]+\))?/;
var pseudo_element_re = /^::[a-zA-Z][\w-]*/;
return cljs.core.some((function (p__53277){
var vec__53278 = p__53277;
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53278,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53278,(1),null);
var temp__5733__auto__ = cljs.core.re_find(re,s);
if(cljs.core.truth_(temp__5733__auto__)){
var m = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,k], null);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_selector_re,new cljs.core.Keyword(null,"a","a",-2123407586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_selector_re,new cljs.core.Keyword(null,"b","b",1482224470)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attribute_selector_re,new cljs.core.Keyword(null,"b","b",1482224470)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pseudo_class_re,new cljs.core.Keyword(null,"b","b",1482224470)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_selector_re,new cljs.core.Keyword(null,"c","c",-1763192079)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pseudo_element_re,new cljs.core.Keyword(null,"c","c",-1763192079)], null)], null));
});
garden.selectors.specificity_STAR_ = (function garden$selectors$specificity_STAR_(selector){
var s = garden.selectors.css_selector(selector);
var score = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),(0),new cljs.core.Keyword(null,"b","b",1482224470),(0),new cljs.core.Keyword(null,"c","c",-1763192079),(0)], null);
var s__$1 = s;
var score__$1 = score;
while(true){
if(cljs.core.empty_QMARK_(s__$1)){
return score__$1;
} else {
var temp__5733__auto__ = garden.selectors.lex_specificity(s__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__53287 = temp__5733__auto__;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53287,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53287,(1),null);
var temp__5733__auto____$1 = cljs.core.re_find(/^:not\(([^\)]*)\)/,m);
if(cljs.core.truth_(temp__5733__auto____$1)){
var vec__53290 = temp__5733__auto____$1;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53290,(0),null);
var inner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53290,(1),null);
var G__53578 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,cljs.core.count(m));
var G__53579 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([score__$1,(garden.selectors.specificity_STAR_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors.specificity_STAR_.cljs$core$IFn$_invoke$arity$1(inner) : garden.selectors.specificity_STAR_.call(null,inner))], 0));
s__$1 = G__53578;
score__$1 = G__53579;
continue;
} else {
var G__53580 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,cljs.core.count(m));
var G__53581 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(score__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.inc);
s__$1 = G__53580;
score__$1 = G__53581;
continue;
}
} else {
var G__53583 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,(1));
var G__53584 = score__$1;
s__$1 = G__53583;
score__$1 = G__53584;
continue;
}
}
break;
}
});
/**
 * Calculate a CSS3 selector's specificity.
 *   
 *   Example:
 * 
 *  (specificity "#s12:not(FOO)")
 *  ;; => 101
 *  (specificity (a hover))
 *  ;; => 10
 *   
 */
garden.selectors.specificity = (function garden$selectors$specificity(selector){
if((((!((selector == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === selector.garden$selectors$ICSSSelector$))))?true:(((!selector.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(garden.selectors.ICSSSelector,selector):false)):cljs.core.native_satisfies_QMARK_(garden.selectors.ICSSSelector,selector))){
} else {
throw (new Error("Assert failed: (satisfies? ICSSSelector selector)"));
}

var map__53294 = garden.selectors.specificity_STAR_(selector);
var map__53294__$1 = cljs.core.__destructure_map(map__53294);
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53294__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53294__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53294__$1,new cljs.core.Keyword(null,"c","c",-1763192079));
var sv = clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''),/^0*/,"");
if(cljs.core.empty_QMARK_(sv)){
return (0);
} else {
return parseInt(sv);
}
});

//# sourceMappingURL=garden.selectors.js.map
