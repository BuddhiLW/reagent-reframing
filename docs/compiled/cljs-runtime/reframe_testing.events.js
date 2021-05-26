goog.provide('reframe_testing.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reframe-testing.events","initialize-db","reframe-testing.events/initialize-db",568658786),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null)));

var result__34332__auto__ = reframe_testing.db.default_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__34332__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__34332__auto__;
}catch (e37434){var e = e37434;
throw e;
}}):(function (_,___$1){
return reframe_testing.db.default_db;
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reframe-testing.events","update-name","reframe-testing.events/update-name",-1042674730),(function (db,p__37435){
var vec__37436 = p__37435;
var event_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37436,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37436,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"name","name",1843675177),val);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reframe-testing.events","fetch-users","reframe-testing.events/fetch-users",1220931677),(function (p__37439,_){
var map__37440 = p__37439;
var map__37440__$1 = cljs.core.__destructure_map(map__37440);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37440__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"https://reqres.in/api/users?page=2",new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reframe-testing.events","fetch-users-success","reframe-testing.events/fetch-users-success",-2012068506)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-http-result","bad-http-result",770783148)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reframe-testing.events","fetch-users-success","reframe-testing.events/fetch-users-success",-2012068506),(function (db,p__37441){
var vec__37442 = p__37441;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37442,(0),null);
var map__37445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37442,(1),null);
var map__37445__$1 = cljs.core.__destructure_map(map__37445);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37445__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),false),new cljs.core.Keyword(null,"users","users",-713552705),data);
}));

//# sourceMappingURL=reframe_testing.events.js.map
