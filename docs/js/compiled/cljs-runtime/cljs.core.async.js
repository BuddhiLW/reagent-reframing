goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__46327 = arguments.length;
switch (G__46327) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46328 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46328 = (function (f,blockable,meta46329){
this.f = f;
this.blockable = blockable;
this.meta46329 = meta46329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46330,meta46329__$1){
var self__ = this;
var _46330__$1 = this;
return (new cljs.core.async.t_cljs$core$async46328(self__.f,self__.blockable,meta46329__$1));
}));

(cljs.core.async.t_cljs$core$async46328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46330){
var self__ = this;
var _46330__$1 = this;
return self__.meta46329;
}));

(cljs.core.async.t_cljs$core$async46328.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46328.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46328.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async46328.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async46328.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46329","meta46329",-1257970251,null)], null);
}));

(cljs.core.async.t_cljs$core$async46328.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46328.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46328");

(cljs.core.async.t_cljs$core$async46328.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async46328");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46328.
 */
cljs.core.async.__GT_t_cljs$core$async46328 = (function cljs$core$async$__GT_t_cljs$core$async46328(f__$1,blockable__$1,meta46329){
return (new cljs.core.async.t_cljs$core$async46328(f__$1,blockable__$1,meta46329));
});

}

return (new cljs.core.async.t_cljs$core$async46328(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__46335 = arguments.length;
switch (G__46335) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__46359 = arguments.length;
switch (G__46359) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__46375 = arguments.length;
switch (G__46375) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_48469 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_48469) : fn1.call(null,val_48469));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_48469) : fn1.call(null,val_48469));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__46398 = arguments.length;
switch (G__46398) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4648__auto___48478 = n;
var x_48479 = (0);
while(true){
if((x_48479 < n__4648__auto___48478)){
(a[x_48479] = x_48479);

var G__48481 = (x_48479 + (1));
x_48479 = G__48481;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46439 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46439 = (function (flag,meta46440){
this.flag = flag;
this.meta46440 = meta46440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46441,meta46440__$1){
var self__ = this;
var _46441__$1 = this;
return (new cljs.core.async.t_cljs$core$async46439(self__.flag,meta46440__$1));
}));

(cljs.core.async.t_cljs$core$async46439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46441){
var self__ = this;
var _46441__$1 = this;
return self__.meta46440;
}));

(cljs.core.async.t_cljs$core$async46439.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46439.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46439.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46439.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async46439.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46440","meta46440",-1720194752,null)], null);
}));

(cljs.core.async.t_cljs$core$async46439.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46439.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46439");

(cljs.core.async.t_cljs$core$async46439.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async46439");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46439.
 */
cljs.core.async.__GT_t_cljs$core$async46439 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46439(flag__$1,meta46440){
return (new cljs.core.async.t_cljs$core$async46439(flag__$1,meta46440));
});

}

return (new cljs.core.async.t_cljs$core$async46439(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46474 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46474 = (function (flag,cb,meta46475){
this.flag = flag;
this.cb = cb;
this.meta46475 = meta46475;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46476,meta46475__$1){
var self__ = this;
var _46476__$1 = this;
return (new cljs.core.async.t_cljs$core$async46474(self__.flag,self__.cb,meta46475__$1));
}));

(cljs.core.async.t_cljs$core$async46474.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46476){
var self__ = this;
var _46476__$1 = this;
return self__.meta46475;
}));

(cljs.core.async.t_cljs$core$async46474.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46474.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46474.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46474.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async46474.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46475","meta46475",-1482171553,null)], null);
}));

(cljs.core.async.t_cljs$core$async46474.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46474.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46474");

(cljs.core.async.t_cljs$core$async46474.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async46474");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46474.
 */
cljs.core.async.__GT_t_cljs$core$async46474 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46474(flag__$1,cb__$1,meta46475){
return (new cljs.core.async.t_cljs$core$async46474(flag__$1,cb__$1,meta46475));
});

}

return (new cljs.core.async.t_cljs$core$async46474(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46482_SHARP_){
var G__46500 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46482_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46500) : fret.call(null,G__46500));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46483_SHARP_){
var G__46501 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46483_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46501) : fret.call(null,G__46501));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4160__auto__ = wport;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return port;
}
})()], null));
} else {
var G__48503 = (i + (1));
i = G__48503;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4160__auto__ = ret;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4149__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4149__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4149__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___48504 = arguments.length;
var i__4772__auto___48505 = (0);
while(true){
if((i__4772__auto___48505 < len__4771__auto___48504)){
args__4777__auto__.push((arguments[i__4772__auto___48505]));

var G__48506 = (i__4772__auto___48505 + (1));
i__4772__auto___48505 = G__48506;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46512){
var map__46513 = p__46512;
var map__46513__$1 = cljs.core.__destructure_map(map__46513);
var opts = map__46513__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46503){
var G__46504 = cljs.core.first(seq46503);
var seq46503__$1 = cljs.core.next(seq46503);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46504,seq46503__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__46518 = arguments.length;
switch (G__46518) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__46243__auto___48526 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46245__auto__ = (function (){var switch__46076__auto__ = (function (state_46566){
var state_val_46567 = (state_46566[(1)]);
if((state_val_46567 === (7))){
var inst_46562 = (state_46566[(2)]);
var state_46566__$1 = state_46566;
var statearr_46568_48527 = state_46566__$1;
(statearr_46568_48527[(2)] = inst_46562);

(statearr_46568_48527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46567 === (1))){
var state_46566__$1 = state_46566;
var statearr_46569_48528 = state_46566__$1;
(statearr_46569_48528[(2)] = null);

(statearr_46569_48528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46567 === (4))){
var inst_46533 = (state_46566[(7)]);
var inst_46533__$1 = (state_46566[(2)]);
var inst_46542 = (inst_46533__$1 == null);
var state_46566__$1 = (function (){var statearr_46570 = state_46566;
(statearr_46570[(7)] = inst_46533__$1);

return statearr_46570;
})();
if(cljs.core.truth_(inst_46542)){
var statearr_46571_48530 = state_46566__$1;
(statearr_46571_48530[(1)] = (5));

} else {
var statearr_46572_48531 = state_46566__$1;
(statearr_46572_48531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46567 === (13))){
var state_46566__$1 = state_46566;
var statearr_46573_48532 = state_46566__$1;
(statearr_46573_48532[(2)] = null);

(statearr_46573_48532[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46567 === (6))){
var inst_46533 = (state_46566[(7)]);
var state_46566__$1 = state_46566;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46566__$1,(11),to,inst_46533);
} else {
if((state_val_46567 === (3))){
var inst_46564 = (state_46566[(2)]);
var state_46566__$1 = state_46566;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46566__$1,inst_46564);
} else {
if((state_val_46567 === (12))){
var state_46566__$1 = state_46566;
var statearr_46574_48533 = state_46566__$1;
(statearr_46574_48533[(2)] = null);

(statearr_46574_48533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46567 === (2))){
var state_46566__$1 = state_46566;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46566__$1,(4),from);
} else {
if((state_val_46567 === (11))){
var inst_46555 = (state_46566[(2)]);
var state_46566__$1 = state_46566;
if(cljs.core.truth_(inst_46555)){
var statearr_46575_48534 = state_46566__$1;
(statearr_46575_48534[(1)] = (12));

} else {
var statearr_46576_48535 = state_46566__$1;
(statearr_46576_48535[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46567 === (9))){
var state_46566__$1 = state_46566;
var statearr_46577_48538 = state_46566__$1;
(statearr_46577_48538[(2)] = null);

(statearr_46577_48538[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46567 === (5))){
var state_46566__$1 = state_46566;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46578_48539 = state_46566__$1;
(statearr_46578_48539[(1)] = (8));

} else {
var statearr_46579_48540 = state_46566__$1;
(statearr_46579_48540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46567 === (14))){
var inst_46560 = (state_46566[(2)]);
var state_46566__$1 = state_46566;
var statearr_46580_48541 = state_46566__$1;
(statearr_46580_48541[(2)] = inst_46560);

(statearr_46580_48541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46567 === (10))){
var inst_46552 = (state_46566[(2)]);
var state_46566__$1 = state_46566;
var statearr_46581_48545 = state_46566__$1;
(statearr_46581_48545[(2)] = inst_46552);

(statearr_46581_48545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46567 === (8))){
var inst_46549 = cljs.core.async.close_BANG_(to);
var state_46566__$1 = state_46566;
var statearr_46582_48546 = state_46566__$1;
(statearr_46582_48546[(2)] = inst_46549);

(statearr_46582_48546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46077__auto__ = null;
var cljs$core$async$state_machine__46077__auto____0 = (function (){
var statearr_46583 = [null,null,null,null,null,null,null,null];
(statearr_46583[(0)] = cljs$core$async$state_machine__46077__auto__);

(statearr_46583[(1)] = (1));

return statearr_46583;
});
var cljs$core$async$state_machine__46077__auto____1 = (function (state_46566){
while(true){
var ret_value__46078__auto__ = (function (){try{while(true){
var result__46079__auto__ = switch__46076__auto__(state_46566);
if(cljs.core.keyword_identical_QMARK_(result__46079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46079__auto__;
}
break;
}
}catch (e46584){var ex__46080__auto__ = e46584;
var statearr_46585_48549 = state_46566;
(statearr_46585_48549[(2)] = ex__46080__auto__);


if(cljs.core.seq((state_46566[(4)]))){
var statearr_46590_48550 = state_46566;
(statearr_46590_48550[(1)] = cljs.core.first((state_46566[(4)])));

} else {
throw ex__46080__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48551 = state_46566;
state_46566 = G__48551;
continue;
} else {
return ret_value__46078__auto__;
}
break;
}
});
cljs$core$async$state_machine__46077__auto__ = function(state_46566){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46077__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46077__auto____1.call(this,state_46566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46077__auto____0;
cljs$core$async$state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46077__auto____1;
return cljs$core$async$state_machine__46077__auto__;
})()
})();
var state__46246__auto__ = (function (){var statearr_46599 = f__46245__auto__();
(statearr_46599[(6)] = c__46243__auto___48526);

return statearr_46599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46246__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__46608){
var vec__46609 = p__46608;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46609,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46609,(1),null);
var job = vec__46609;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__46243__auto___48554 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46245__auto__ = (function (){var switch__46076__auto__ = (function (state_46616){
var state_val_46617 = (state_46616[(1)]);
if((state_val_46617 === (1))){
var state_46616__$1 = state_46616;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46616__$1,(2),res,v);
} else {
if((state_val_46617 === (2))){
var inst_46613 = (state_46616[(2)]);
var inst_46614 = cljs.core.async.close_BANG_(res);
var state_46616__$1 = (function (){var statearr_46618 = state_46616;
(statearr_46618[(7)] = inst_46613);

return statearr_46618;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46616__$1,inst_46614);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46077__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46077__auto____0 = (function (){
var statearr_46619 = [null,null,null,null,null,null,null,null];
(statearr_46619[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46077__auto__);

(statearr_46619[(1)] = (1));

return statearr_46619;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46077__auto____1 = (function (state_46616){
while(true){
var ret_value__46078__auto__ = (function (){try{while(true){
var result__46079__auto__ = switch__46076__auto__(state_46616);
if(cljs.core.keyword_identical_QMARK_(result__46079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46079__auto__;
}
break;
}
}catch (e46620){var ex__46080__auto__ = e46620;
var statearr_46621_48557 = state_46616;
(statearr_46621_48557[(2)] = ex__46080__auto__);


if(cljs.core.seq((state_46616[(4)]))){
var statearr_46622_48558 = state_46616;
(statearr_46622_48558[(1)] = cljs.core.first((state_46616[(4)])));

} else {
throw ex__46080__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48559 = state_46616;
state_46616 = G__48559;
continue;
} else {
return ret_value__46078__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46077__auto__ = function(state_46616){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46077__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46077__auto____1.call(this,state_46616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46077__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46077__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46077__auto__;
})()
})();
var state__46246__auto__ = (function (){var statearr_46624 = f__46245__auto__();
(statearr_46624[(6)] = c__46243__auto___48554);

return statearr_46624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46246__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__46625){
var vec__46626 = p__46625;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46626,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46626,(1),null);
var job = vec__46626;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4648__auto___48561 = n;
var __48562 = (0);
while(true){
if((__48562 < n__4648__auto___48561)){
var G__46630_48563 = type;
var G__46630_48564__$1 = (((G__46630_48563 instanceof cljs.core.Keyword))?G__46630_48563.fqn:null);
switch (G__46630_48564__$1) {
case "compute":
var c__46243__auto___48567 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48562,c__46243__auto___48567,G__46630_48563,G__46630_48564__$1,n__4648__auto___48561,jobs,results,process,async){
return (function (){
var f__46245__auto__ = (function (){var switch__46076__auto__ = ((function (__48562,c__46243__auto___48567,G__46630_48563,G__46630_48564__$1,n__4648__auto___48561,jobs,results,process,async){
return (function (state_46644){
var state_val_46645 = (state_46644[(1)]);
if((state_val_46645 === (1))){
var state_46644__$1 = state_46644;
var statearr_46650_48568 = state_46644__$1;
(statearr_46650_48568[(2)] = null);

(statearr_46650_48568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46645 === (2))){
var state_46644__$1 = state_46644;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46644__$1,(4),jobs);
} else {
if((state_val_46645 === (3))){
var inst_46642 = (state_46644[(2)]);
var state_46644__$1 = state_46644;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46644__$1,inst_46642);
} else {
if((state_val_46645 === (4))){
var inst_46634 = (state_46644[(2)]);
var inst_46635 = process(inst_46634);
var state_46644__$1 = state_46644;
if(cljs.core.truth_(inst_46635)){
var statearr_46651_48569 = state_46644__$1;
(statearr_46651_48569[(1)] = (5));

} else {
var statearr_46652_48570 = state_46644__$1;
(statearr_46652_48570[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46645 === (5))){
var state_46644__$1 = state_46644;
var statearr_46653_48571 = state_46644__$1;
(statearr_46653_48571[(2)] = null);

(statearr_46653_48571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46645 === (6))){
var state_46644__$1 = state_46644;
var statearr_46654_48572 = state_46644__$1;
(statearr_46654_48572[(2)] = null);

(statearr_46654_48572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46645 === (7))){
var inst_46640 = (state_46644[(2)]);
var state_46644__$1 = state_46644;
var statearr_46655_48577 = state_46644__$1;
(statearr_46655_48577[(2)] = inst_46640);

(statearr_46655_48577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__48562,c__46243__auto___48567,G__46630_48563,G__46630_48564__$1,n__4648__auto___48561,jobs,results,process,async))
;
return ((function (__48562,switch__46076__auto__,c__46243__auto___48567,G__46630_48563,G__46630_48564__$1,n__4648__auto___48561,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46077__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46077__auto____0 = (function (){
var statearr_46656 = [null,null,null,null,null,null,null];
(statearr_46656[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46077__auto__);

(statearr_46656[(1)] = (1));

return statearr_46656;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46077__auto____1 = (function (state_46644){
while(true){
var ret_value__46078__auto__ = (function (){try{while(true){
var result__46079__auto__ = switch__46076__auto__(state_46644);
if(cljs.core.keyword_identical_QMARK_(result__46079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46079__auto__;
}
break;
}
}catch (e46657){var ex__46080__auto__ = e46657;
var statearr_46658_48579 = state_46644;
(statearr_46658_48579[(2)] = ex__46080__auto__);


if(cljs.core.seq((state_46644[(4)]))){
var statearr_46659_48580 = state_46644;
(statearr_46659_48580[(1)] = cljs.core.first((state_46644[(4)])));

} else {
throw ex__46080__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48581 = state_46644;
state_46644 = G__48581;
continue;
} else {
return ret_value__46078__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46077__auto__ = function(state_46644){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46077__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46077__auto____1.call(this,state_46644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46077__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46077__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46077__auto__;
})()
;})(__48562,switch__46076__auto__,c__46243__auto___48567,G__46630_48563,G__46630_48564__$1,n__4648__auto___48561,jobs,results,process,async))
})();
var state__46246__auto__ = (function (){var statearr_46664 = f__46245__auto__();
(statearr_46664[(6)] = c__46243__auto___48567);

return statearr_46664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46246__auto__);
});})(__48562,c__46243__auto___48567,G__46630_48563,G__46630_48564__$1,n__4648__auto___48561,jobs,results,process,async))
);


break;
case "async":
var c__46243__auto___48582 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48562,c__46243__auto___48582,G__46630_48563,G__46630_48564__$1,n__4648__auto___48561,jobs,results,process,async){
return (function (){
var f__46245__auto__ = (function (){var switch__46076__auto__ = ((function (__48562,c__46243__auto___48582,G__46630_48563,G__46630_48564__$1,n__4648__auto___48561,jobs,results,process,async){
return (function (state_46681){
var state_val_46682 = (state_46681[(1)]);
if((state_val_46682 === (1))){
var state_46681__$1 = state_46681;
var statearr_46687_48584 = state_46681__$1;
(statearr_46687_48584[(2)] = null);

(statearr_46687_48584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46682 === (2))){
var state_46681__$1 = state_46681;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46681__$1,(4),jobs);
} else {
if((state_val_46682 === (3))){
var inst_46679 = (state_46681[(2)]);
var state_46681__$1 = state_46681;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46681__$1,inst_46679);
} else {
if((state_val_46682 === (4))){
var inst_46671 = (state_46681[(2)]);
var inst_46672 = async(inst_46671);
var state_46681__$1 = state_46681;
if(cljs.core.truth_(inst_46672)){
var statearr_46692_48589 = state_46681__$1;
(statearr_46692_48589[(1)] = (5));

} else {
var statearr_46693_48592 = state_46681__$1;
(statearr_46693_48592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46682 === (5))){
var state_46681__$1 = state_46681;
var statearr_46694_48595 = state_46681__$1;
(statearr_46694_48595[(2)] = null);

(statearr_46694_48595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46682 === (6))){
var state_46681__$1 = state_46681;
var statearr_46695_48596 = state_46681__$1;
(statearr_46695_48596[(2)] = null);

(statearr_46695_48596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46682 === (7))){
var inst_46677 = (state_46681[(2)]);
var state_46681__$1 = state_46681;
var statearr_46696_48600 = state_46681__$1;
(statearr_46696_48600[(2)] = inst_46677);

(statearr_46696_48600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__48562,c__46243__auto___48582,G__46630_48563,G__46630_48564__$1,n__4648__auto___48561,jobs,results,process,async))
;
return ((function (__48562,switch__46076__auto__,c__46243__auto___48582,G__46630_48563,G__46630_48564__$1,n__4648__auto___48561,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46077__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46077__auto____0 = (function (){
var statearr_46701 = [null,null,null,null,null,null,null];
(statearr_46701[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46077__auto__);

(statearr_46701[(1)] = (1));

return statearr_46701;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46077__auto____1 = (function (state_46681){
while(true){
var ret_value__46078__auto__ = (function (){try{while(true){
var result__46079__auto__ = switch__46076__auto__(state_46681);
if(cljs.core.keyword_identical_QMARK_(result__46079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46079__auto__;
}
break;
}
}catch (e46702){var ex__46080__auto__ = e46702;
var statearr_46703_48605 = state_46681;
(statearr_46703_48605[(2)] = ex__46080__auto__);


if(cljs.core.seq((state_46681[(4)]))){
var statearr_46704_48608 = state_46681;
(statearr_46704_48608[(1)] = cljs.core.first((state_46681[(4)])));

} else {
throw ex__46080__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48609 = state_46681;
state_46681 = G__48609;
continue;
} else {
return ret_value__46078__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46077__auto__ = function(state_46681){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46077__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46077__auto____1.call(this,state_46681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46077__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46077__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46077__auto__;
})()
;})(__48562,switch__46076__auto__,c__46243__auto___48582,G__46630_48563,G__46630_48564__$1,n__4648__auto___48561,jobs,results,process,async))
})();
var state__46246__auto__ = (function (){var statearr_46709 = f__46245__auto__();
(statearr_46709[(6)] = c__46243__auto___48582);

return statearr_46709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46246__auto__);
});})(__48562,c__46243__auto___48582,G__46630_48563,G__46630_48564__$1,n__4648__auto___48561,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46630_48564__$1)].join('')));

}

var G__48613 = (__48562 + (1));
__48562 = G__48613;
continue;
} else {
}
break;
}

var c__46243__auto___48618 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46245__auto__ = (function (){var switch__46076__auto__ = (function (state_46731){
var state_val_46732 = (state_46731[(1)]);
if((state_val_46732 === (7))){
var inst_46727 = (state_46731[(2)]);
var state_46731__$1 = state_46731;
var statearr_46733_48619 = state_46731__$1;
(statearr_46733_48619[(2)] = inst_46727);

(statearr_46733_48619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46732 === (1))){
var state_46731__$1 = state_46731;
var statearr_46734_48620 = state_46731__$1;
(statearr_46734_48620[(2)] = null);

(statearr_46734_48620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46732 === (4))){
var inst_46712 = (state_46731[(7)]);
var inst_46712__$1 = (state_46731[(2)]);
var inst_46713 = (inst_46712__$1 == null);
var state_46731__$1 = (function (){var statearr_46735 = state_46731;
(statearr_46735[(7)] = inst_46712__$1);

return statearr_46735;
})();
if(cljs.core.truth_(inst_46713)){
var statearr_46736_48625 = state_46731__$1;
(statearr_46736_48625[(1)] = (5));

} else {
var statearr_46737_48626 = state_46731__$1;
(statearr_46737_48626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46732 === (6))){
var inst_46712 = (state_46731[(7)]);
var inst_46717 = (state_46731[(8)]);
var inst_46717__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_46718 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46719 = [inst_46712,inst_46717__$1];
var inst_46720 = (new cljs.core.PersistentVector(null,2,(5),inst_46718,inst_46719,null));
var state_46731__$1 = (function (){var statearr_46738 = state_46731;
(statearr_46738[(8)] = inst_46717__$1);

return statearr_46738;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46731__$1,(8),jobs,inst_46720);
} else {
if((state_val_46732 === (3))){
var inst_46729 = (state_46731[(2)]);
var state_46731__$1 = state_46731;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46731__$1,inst_46729);
} else {
if((state_val_46732 === (2))){
var state_46731__$1 = state_46731;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46731__$1,(4),from);
} else {
if((state_val_46732 === (9))){
var inst_46724 = (state_46731[(2)]);
var state_46731__$1 = (function (){var statearr_46739 = state_46731;
(statearr_46739[(9)] = inst_46724);

return statearr_46739;
})();
var statearr_46740_48627 = state_46731__$1;
(statearr_46740_48627[(2)] = null);

(statearr_46740_48627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46732 === (5))){
var inst_46715 = cljs.core.async.close_BANG_(jobs);
var state_46731__$1 = state_46731;
var statearr_46741_48628 = state_46731__$1;
(statearr_46741_48628[(2)] = inst_46715);

(statearr_46741_48628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46732 === (8))){
var inst_46717 = (state_46731[(8)]);
var inst_46722 = (state_46731[(2)]);
var state_46731__$1 = (function (){var statearr_46742 = state_46731;
(statearr_46742[(10)] = inst_46722);

return statearr_46742;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46731__$1,(9),results,inst_46717);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46077__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46077__auto____0 = (function (){
var statearr_46744 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46744[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46077__auto__);

(statearr_46744[(1)] = (1));

return statearr_46744;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46077__auto____1 = (function (state_46731){
while(true){
var ret_value__46078__auto__ = (function (){try{while(true){
var result__46079__auto__ = switch__46076__auto__(state_46731);
if(cljs.core.keyword_identical_QMARK_(result__46079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46079__auto__;
}
break;
}
}catch (e46746){var ex__46080__auto__ = e46746;
var statearr_46747_48632 = state_46731;
(statearr_46747_48632[(2)] = ex__46080__auto__);


if(cljs.core.seq((state_46731[(4)]))){
var statearr_46748_48633 = state_46731;
(statearr_46748_48633[(1)] = cljs.core.first((state_46731[(4)])));

} else {
throw ex__46080__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48634 = state_46731;
state_46731 = G__48634;
continue;
} else {
return ret_value__46078__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46077__auto__ = function(state_46731){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46077__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46077__auto____1.call(this,state_46731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46077__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46077__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46077__auto__;
})()
})();
var state__46246__auto__ = (function (){var statearr_46753 = f__46245__auto__();
(statearr_46753[(6)] = c__46243__auto___48618);

return statearr_46753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46246__auto__);
}));


var c__46243__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46245__auto__ = (function (){var switch__46076__auto__ = (function (state_46797){
var state_val_46798 = (state_46797[(1)]);
if((state_val_46798 === (7))){
var inst_46792 = (state_46797[(2)]);
var state_46797__$1 = state_46797;
var statearr_46803_48635 = state_46797__$1;
(statearr_46803_48635[(2)] = inst_46792);

(statearr_46803_48635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46798 === (20))){
var state_46797__$1 = state_46797;
var statearr_46804_48636 = state_46797__$1;
(statearr_46804_48636[(2)] = null);

(statearr_46804_48636[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46798 === (1))){
var state_46797__$1 = state_46797;
var statearr_46805_48637 = state_46797__$1;
(statearr_46805_48637[(2)] = null);

(statearr_46805_48637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46798 === (4))){
var inst_46757 = (state_46797[(7)]);
var inst_46757__$1 = (state_46797[(2)]);
var inst_46758 = (inst_46757__$1 == null);
var state_46797__$1 = (function (){var statearr_46806 = state_46797;
(statearr_46806[(7)] = inst_46757__$1);

return statearr_46806;
})();
if(cljs.core.truth_(inst_46758)){
var statearr_46810_48640 = state_46797__$1;
(statearr_46810_48640[(1)] = (5));

} else {
var statearr_46811_48645 = state_46797__$1;
(statearr_46811_48645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46798 === (15))){
var inst_46772 = (state_46797[(8)]);
var state_46797__$1 = state_46797;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46797__$1,(18),to,inst_46772);
} else {
if((state_val_46798 === (21))){
var inst_46787 = (state_46797[(2)]);
var state_46797__$1 = state_46797;
var statearr_46814_48649 = state_46797__$1;
(statearr_46814_48649[(2)] = inst_46787);

(statearr_46814_48649[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46798 === (13))){
var inst_46789 = (state_46797[(2)]);
var state_46797__$1 = (function (){var statearr_46816 = state_46797;
(statearr_46816[(9)] = inst_46789);

return statearr_46816;
})();
var statearr_46817_48651 = state_46797__$1;
(statearr_46817_48651[(2)] = null);

(statearr_46817_48651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46798 === (6))){
var inst_46757 = (state_46797[(7)]);
var state_46797__$1 = state_46797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46797__$1,(11),inst_46757);
} else {
if((state_val_46798 === (17))){
var inst_46782 = (state_46797[(2)]);
var state_46797__$1 = state_46797;
if(cljs.core.truth_(inst_46782)){
var statearr_46818_48655 = state_46797__$1;
(statearr_46818_48655[(1)] = (19));

} else {
var statearr_46819_48657 = state_46797__$1;
(statearr_46819_48657[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46798 === (3))){
var inst_46795 = (state_46797[(2)]);
var state_46797__$1 = state_46797;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46797__$1,inst_46795);
} else {
if((state_val_46798 === (12))){
var inst_46769 = (state_46797[(10)]);
var state_46797__$1 = state_46797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46797__$1,(14),inst_46769);
} else {
if((state_val_46798 === (2))){
var state_46797__$1 = state_46797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46797__$1,(4),results);
} else {
if((state_val_46798 === (19))){
var state_46797__$1 = state_46797;
var statearr_46820_48663 = state_46797__$1;
(statearr_46820_48663[(2)] = null);

(statearr_46820_48663[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46798 === (11))){
var inst_46769 = (state_46797[(2)]);
var state_46797__$1 = (function (){var statearr_46823 = state_46797;
(statearr_46823[(10)] = inst_46769);

return statearr_46823;
})();
var statearr_46824_48670 = state_46797__$1;
(statearr_46824_48670[(2)] = null);

(statearr_46824_48670[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46798 === (9))){
var state_46797__$1 = state_46797;
var statearr_46826_48671 = state_46797__$1;
(statearr_46826_48671[(2)] = null);

(statearr_46826_48671[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46798 === (5))){
var state_46797__$1 = state_46797;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46828_48672 = state_46797__$1;
(statearr_46828_48672[(1)] = (8));

} else {
var statearr_46829_48674 = state_46797__$1;
(statearr_46829_48674[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46798 === (14))){
var inst_46772 = (state_46797[(8)]);
var inst_46772__$1 = (state_46797[(2)]);
var inst_46774 = (inst_46772__$1 == null);
var inst_46775 = cljs.core.not(inst_46774);
var state_46797__$1 = (function (){var statearr_46830 = state_46797;
(statearr_46830[(8)] = inst_46772__$1);

return statearr_46830;
})();
if(inst_46775){
var statearr_46831_48678 = state_46797__$1;
(statearr_46831_48678[(1)] = (15));

} else {
var statearr_46832_48679 = state_46797__$1;
(statearr_46832_48679[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46798 === (16))){
var state_46797__$1 = state_46797;
var statearr_46833_48680 = state_46797__$1;
(statearr_46833_48680[(2)] = false);

(statearr_46833_48680[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46798 === (10))){
var inst_46765 = (state_46797[(2)]);
var state_46797__$1 = state_46797;
var statearr_46835_48681 = state_46797__$1;
(statearr_46835_48681[(2)] = inst_46765);

(statearr_46835_48681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46798 === (18))){
var inst_46779 = (state_46797[(2)]);
var state_46797__$1 = state_46797;
var statearr_46840_48684 = state_46797__$1;
(statearr_46840_48684[(2)] = inst_46779);

(statearr_46840_48684[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46798 === (8))){
var inst_46762 = cljs.core.async.close_BANG_(to);
var state_46797__$1 = state_46797;
var statearr_46845_48688 = state_46797__$1;
(statearr_46845_48688[(2)] = inst_46762);

(statearr_46845_48688[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46077__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46077__auto____0 = (function (){
var statearr_46846 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46846[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46077__auto__);

(statearr_46846[(1)] = (1));

return statearr_46846;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46077__auto____1 = (function (state_46797){
while(true){
var ret_value__46078__auto__ = (function (){try{while(true){
var result__46079__auto__ = switch__46076__auto__(state_46797);
if(cljs.core.keyword_identical_QMARK_(result__46079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46079__auto__;
}
break;
}
}catch (e46847){var ex__46080__auto__ = e46847;
var statearr_46849_48692 = state_46797;
(statearr_46849_48692[(2)] = ex__46080__auto__);


if(cljs.core.seq((state_46797[(4)]))){
var statearr_46854_48693 = state_46797;
(statearr_46854_48693[(1)] = cljs.core.first((state_46797[(4)])));

} else {
throw ex__46080__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48697 = state_46797;
state_46797 = G__48697;
continue;
} else {
return ret_value__46078__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46077__auto__ = function(state_46797){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46077__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46077__auto____1.call(this,state_46797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46077__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46077__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46077__auto__;
})()
})();
var state__46246__auto__ = (function (){var statearr_46865 = f__46245__auto__();
(statearr_46865[(6)] = c__46243__auto__);

return statearr_46865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46246__auto__);
}));

return c__46243__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__46875 = arguments.length;
switch (G__46875) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__46882 = arguments.length;
switch (G__46882) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__46906 = arguments.length;
switch (G__46906) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__46243__auto___48716 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46245__auto__ = (function (){var switch__46076__auto__ = (function (state_46953){
var state_val_46954 = (state_46953[(1)]);
if((state_val_46954 === (7))){
var inst_46947 = (state_46953[(2)]);
var state_46953__$1 = state_46953;
var statearr_46967_48717 = state_46953__$1;
(statearr_46967_48717[(2)] = inst_46947);

(statearr_46967_48717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46954 === (1))){
var state_46953__$1 = state_46953;
var statearr_46976_48718 = state_46953__$1;
(statearr_46976_48718[(2)] = null);

(statearr_46976_48718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46954 === (4))){
var inst_46924 = (state_46953[(7)]);
var inst_46924__$1 = (state_46953[(2)]);
var inst_46925 = (inst_46924__$1 == null);
var state_46953__$1 = (function (){var statearr_46977 = state_46953;
(statearr_46977[(7)] = inst_46924__$1);

return statearr_46977;
})();
if(cljs.core.truth_(inst_46925)){
var statearr_46978_48721 = state_46953__$1;
(statearr_46978_48721[(1)] = (5));

} else {
var statearr_46980_48722 = state_46953__$1;
(statearr_46980_48722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46954 === (13))){
var state_46953__$1 = state_46953;
var statearr_46986_48724 = state_46953__$1;
(statearr_46986_48724[(2)] = null);

(statearr_46986_48724[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46954 === (6))){
var inst_46924 = (state_46953[(7)]);
var inst_46930 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46924) : p.call(null,inst_46924));
var state_46953__$1 = state_46953;
if(cljs.core.truth_(inst_46930)){
var statearr_46991_48726 = state_46953__$1;
(statearr_46991_48726[(1)] = (9));

} else {
var statearr_46992_48727 = state_46953__$1;
(statearr_46992_48727[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46954 === (3))){
var inst_46949 = (state_46953[(2)]);
var state_46953__$1 = state_46953;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46953__$1,inst_46949);
} else {
if((state_val_46954 === (12))){
var state_46953__$1 = state_46953;
var statearr_46999_48729 = state_46953__$1;
(statearr_46999_48729[(2)] = null);

(statearr_46999_48729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46954 === (2))){
var state_46953__$1 = state_46953;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46953__$1,(4),ch);
} else {
if((state_val_46954 === (11))){
var inst_46924 = (state_46953[(7)]);
var inst_46938 = (state_46953[(2)]);
var state_46953__$1 = state_46953;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46953__$1,(8),inst_46938,inst_46924);
} else {
if((state_val_46954 === (9))){
var state_46953__$1 = state_46953;
var statearr_47000_48730 = state_46953__$1;
(statearr_47000_48730[(2)] = tc);

(statearr_47000_48730[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46954 === (5))){
var inst_46927 = cljs.core.async.close_BANG_(tc);
var inst_46928 = cljs.core.async.close_BANG_(fc);
var state_46953__$1 = (function (){var statearr_47001 = state_46953;
(statearr_47001[(8)] = inst_46927);

return statearr_47001;
})();
var statearr_47004_48735 = state_46953__$1;
(statearr_47004_48735[(2)] = inst_46928);

(statearr_47004_48735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46954 === (14))){
var inst_46945 = (state_46953[(2)]);
var state_46953__$1 = state_46953;
var statearr_47005_48736 = state_46953__$1;
(statearr_47005_48736[(2)] = inst_46945);

(statearr_47005_48736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46954 === (10))){
var state_46953__$1 = state_46953;
var statearr_47006_48737 = state_46953__$1;
(statearr_47006_48737[(2)] = fc);

(statearr_47006_48737[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46954 === (8))){
var inst_46940 = (state_46953[(2)]);
var state_46953__$1 = state_46953;
if(cljs.core.truth_(inst_46940)){
var statearr_47007_48740 = state_46953__$1;
(statearr_47007_48740[(1)] = (12));

} else {
var statearr_47008_48741 = state_46953__$1;
(statearr_47008_48741[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46077__auto__ = null;
var cljs$core$async$state_machine__46077__auto____0 = (function (){
var statearr_47009 = [null,null,null,null,null,null,null,null,null];
(statearr_47009[(0)] = cljs$core$async$state_machine__46077__auto__);

(statearr_47009[(1)] = (1));

return statearr_47009;
});
var cljs$core$async$state_machine__46077__auto____1 = (function (state_46953){
while(true){
var ret_value__46078__auto__ = (function (){try{while(true){
var result__46079__auto__ = switch__46076__auto__(state_46953);
if(cljs.core.keyword_identical_QMARK_(result__46079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46079__auto__;
}
break;
}
}catch (e47013){var ex__46080__auto__ = e47013;
var statearr_47014_48747 = state_46953;
(statearr_47014_48747[(2)] = ex__46080__auto__);


if(cljs.core.seq((state_46953[(4)]))){
var statearr_47015_48748 = state_46953;
(statearr_47015_48748[(1)] = cljs.core.first((state_46953[(4)])));

} else {
throw ex__46080__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48750 = state_46953;
state_46953 = G__48750;
continue;
} else {
return ret_value__46078__auto__;
}
break;
}
});
cljs$core$async$state_machine__46077__auto__ = function(state_46953){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46077__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46077__auto____1.call(this,state_46953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46077__auto____0;
cljs$core$async$state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46077__auto____1;
return cljs$core$async$state_machine__46077__auto__;
})()
})();
var state__46246__auto__ = (function (){var statearr_47016 = f__46245__auto__();
(statearr_47016[(6)] = c__46243__auto___48716);

return statearr_47016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46246__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__46243__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46245__auto__ = (function (){var switch__46076__auto__ = (function (state_47040){
var state_val_47041 = (state_47040[(1)]);
if((state_val_47041 === (7))){
var inst_47035 = (state_47040[(2)]);
var state_47040__$1 = state_47040;
var statearr_47042_48754 = state_47040__$1;
(statearr_47042_48754[(2)] = inst_47035);

(statearr_47042_48754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47041 === (1))){
var inst_47018 = init;
var inst_47019 = inst_47018;
var state_47040__$1 = (function (){var statearr_47043 = state_47040;
(statearr_47043[(7)] = inst_47019);

return statearr_47043;
})();
var statearr_47044_48755 = state_47040__$1;
(statearr_47044_48755[(2)] = null);

(statearr_47044_48755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47041 === (4))){
var inst_47022 = (state_47040[(8)]);
var inst_47022__$1 = (state_47040[(2)]);
var inst_47023 = (inst_47022__$1 == null);
var state_47040__$1 = (function (){var statearr_47045 = state_47040;
(statearr_47045[(8)] = inst_47022__$1);

return statearr_47045;
})();
if(cljs.core.truth_(inst_47023)){
var statearr_47046_48756 = state_47040__$1;
(statearr_47046_48756[(1)] = (5));

} else {
var statearr_47047_48757 = state_47040__$1;
(statearr_47047_48757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47041 === (6))){
var inst_47022 = (state_47040[(8)]);
var inst_47026 = (state_47040[(9)]);
var inst_47019 = (state_47040[(7)]);
var inst_47026__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_47019,inst_47022) : f.call(null,inst_47019,inst_47022));
var inst_47027 = cljs.core.reduced_QMARK_(inst_47026__$1);
var state_47040__$1 = (function (){var statearr_47048 = state_47040;
(statearr_47048[(9)] = inst_47026__$1);

return statearr_47048;
})();
if(inst_47027){
var statearr_47049_48761 = state_47040__$1;
(statearr_47049_48761[(1)] = (8));

} else {
var statearr_47050_48765 = state_47040__$1;
(statearr_47050_48765[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47041 === (3))){
var inst_47038 = (state_47040[(2)]);
var state_47040__$1 = state_47040;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47040__$1,inst_47038);
} else {
if((state_val_47041 === (2))){
var state_47040__$1 = state_47040;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47040__$1,(4),ch);
} else {
if((state_val_47041 === (9))){
var inst_47026 = (state_47040[(9)]);
var inst_47019 = inst_47026;
var state_47040__$1 = (function (){var statearr_47051 = state_47040;
(statearr_47051[(7)] = inst_47019);

return statearr_47051;
})();
var statearr_47052_48768 = state_47040__$1;
(statearr_47052_48768[(2)] = null);

(statearr_47052_48768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47041 === (5))){
var inst_47019 = (state_47040[(7)]);
var state_47040__$1 = state_47040;
var statearr_47053_48771 = state_47040__$1;
(statearr_47053_48771[(2)] = inst_47019);

(statearr_47053_48771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47041 === (10))){
var inst_47033 = (state_47040[(2)]);
var state_47040__$1 = state_47040;
var statearr_47055_48772 = state_47040__$1;
(statearr_47055_48772[(2)] = inst_47033);

(statearr_47055_48772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47041 === (8))){
var inst_47026 = (state_47040[(9)]);
var inst_47029 = cljs.core.deref(inst_47026);
var state_47040__$1 = state_47040;
var statearr_47058_48777 = state_47040__$1;
(statearr_47058_48777[(2)] = inst_47029);

(statearr_47058_48777[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__46077__auto__ = null;
var cljs$core$async$reduce_$_state_machine__46077__auto____0 = (function (){
var statearr_47059 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47059[(0)] = cljs$core$async$reduce_$_state_machine__46077__auto__);

(statearr_47059[(1)] = (1));

return statearr_47059;
});
var cljs$core$async$reduce_$_state_machine__46077__auto____1 = (function (state_47040){
while(true){
var ret_value__46078__auto__ = (function (){try{while(true){
var result__46079__auto__ = switch__46076__auto__(state_47040);
if(cljs.core.keyword_identical_QMARK_(result__46079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46079__auto__;
}
break;
}
}catch (e47062){var ex__46080__auto__ = e47062;
var statearr_47063_48788 = state_47040;
(statearr_47063_48788[(2)] = ex__46080__auto__);


if(cljs.core.seq((state_47040[(4)]))){
var statearr_47064_48791 = state_47040;
(statearr_47064_48791[(1)] = cljs.core.first((state_47040[(4)])));

} else {
throw ex__46080__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48792 = state_47040;
state_47040 = G__48792;
continue;
} else {
return ret_value__46078__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__46077__auto__ = function(state_47040){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__46077__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__46077__auto____1.call(this,state_47040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__46077__auto____0;
cljs$core$async$reduce_$_state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__46077__auto____1;
return cljs$core$async$reduce_$_state_machine__46077__auto__;
})()
})();
var state__46246__auto__ = (function (){var statearr_47067 = f__46245__auto__();
(statearr_47067[(6)] = c__46243__auto__);

return statearr_47067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46246__auto__);
}));

return c__46243__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__46243__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46245__auto__ = (function (){var switch__46076__auto__ = (function (state_47080){
var state_val_47081 = (state_47080[(1)]);
if((state_val_47081 === (1))){
var inst_47075 = cljs.core.async.reduce(f__$1,init,ch);
var state_47080__$1 = state_47080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47080__$1,(2),inst_47075);
} else {
if((state_val_47081 === (2))){
var inst_47077 = (state_47080[(2)]);
var inst_47078 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_47077) : f__$1.call(null,inst_47077));
var state_47080__$1 = state_47080;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47080__$1,inst_47078);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__46077__auto__ = null;
var cljs$core$async$transduce_$_state_machine__46077__auto____0 = (function (){
var statearr_47082 = [null,null,null,null,null,null,null];
(statearr_47082[(0)] = cljs$core$async$transduce_$_state_machine__46077__auto__);

(statearr_47082[(1)] = (1));

return statearr_47082;
});
var cljs$core$async$transduce_$_state_machine__46077__auto____1 = (function (state_47080){
while(true){
var ret_value__46078__auto__ = (function (){try{while(true){
var result__46079__auto__ = switch__46076__auto__(state_47080);
if(cljs.core.keyword_identical_QMARK_(result__46079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46079__auto__;
}
break;
}
}catch (e47083){var ex__46080__auto__ = e47083;
var statearr_47084_48793 = state_47080;
(statearr_47084_48793[(2)] = ex__46080__auto__);


if(cljs.core.seq((state_47080[(4)]))){
var statearr_47085_48795 = state_47080;
(statearr_47085_48795[(1)] = cljs.core.first((state_47080[(4)])));

} else {
throw ex__46080__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48799 = state_47080;
state_47080 = G__48799;
continue;
} else {
return ret_value__46078__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__46077__auto__ = function(state_47080){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__46077__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__46077__auto____1.call(this,state_47080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__46077__auto____0;
cljs$core$async$transduce_$_state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__46077__auto____1;
return cljs$core$async$transduce_$_state_machine__46077__auto__;
})()
})();
var state__46246__auto__ = (function (){var statearr_47091 = f__46245__auto__();
(statearr_47091[(6)] = c__46243__auto__);

return statearr_47091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46246__auto__);
}));

return c__46243__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__47095 = arguments.length;
switch (G__47095) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__46243__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46245__auto__ = (function (){var switch__46076__auto__ = (function (state_47124){
var state_val_47125 = (state_47124[(1)]);
if((state_val_47125 === (7))){
var inst_47106 = (state_47124[(2)]);
var state_47124__$1 = state_47124;
var statearr_47126_48808 = state_47124__$1;
(statearr_47126_48808[(2)] = inst_47106);

(statearr_47126_48808[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47125 === (1))){
var inst_47098 = cljs.core.seq(coll);
var inst_47099 = inst_47098;
var state_47124__$1 = (function (){var statearr_47127 = state_47124;
(statearr_47127[(7)] = inst_47099);

return statearr_47127;
})();
var statearr_47129_48812 = state_47124__$1;
(statearr_47129_48812[(2)] = null);

(statearr_47129_48812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47125 === (4))){
var inst_47099 = (state_47124[(7)]);
var inst_47104 = cljs.core.first(inst_47099);
var state_47124__$1 = state_47124;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47124__$1,(7),ch,inst_47104);
} else {
if((state_val_47125 === (13))){
var inst_47118 = (state_47124[(2)]);
var state_47124__$1 = state_47124;
var statearr_47131_48813 = state_47124__$1;
(statearr_47131_48813[(2)] = inst_47118);

(statearr_47131_48813[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47125 === (6))){
var inst_47109 = (state_47124[(2)]);
var state_47124__$1 = state_47124;
if(cljs.core.truth_(inst_47109)){
var statearr_47132_48816 = state_47124__$1;
(statearr_47132_48816[(1)] = (8));

} else {
var statearr_47133_48817 = state_47124__$1;
(statearr_47133_48817[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47125 === (3))){
var inst_47122 = (state_47124[(2)]);
var state_47124__$1 = state_47124;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47124__$1,inst_47122);
} else {
if((state_val_47125 === (12))){
var state_47124__$1 = state_47124;
var statearr_47135_48824 = state_47124__$1;
(statearr_47135_48824[(2)] = null);

(statearr_47135_48824[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47125 === (2))){
var inst_47099 = (state_47124[(7)]);
var state_47124__$1 = state_47124;
if(cljs.core.truth_(inst_47099)){
var statearr_47137_48825 = state_47124__$1;
(statearr_47137_48825[(1)] = (4));

} else {
var statearr_47138_48826 = state_47124__$1;
(statearr_47138_48826[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47125 === (11))){
var inst_47115 = cljs.core.async.close_BANG_(ch);
var state_47124__$1 = state_47124;
var statearr_47141_48827 = state_47124__$1;
(statearr_47141_48827[(2)] = inst_47115);

(statearr_47141_48827[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47125 === (9))){
var state_47124__$1 = state_47124;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47142_48828 = state_47124__$1;
(statearr_47142_48828[(1)] = (11));

} else {
var statearr_47143_48829 = state_47124__$1;
(statearr_47143_48829[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47125 === (5))){
var inst_47099 = (state_47124[(7)]);
var state_47124__$1 = state_47124;
var statearr_47146_48830 = state_47124__$1;
(statearr_47146_48830[(2)] = inst_47099);

(statearr_47146_48830[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47125 === (10))){
var inst_47120 = (state_47124[(2)]);
var state_47124__$1 = state_47124;
var statearr_47147_48831 = state_47124__$1;
(statearr_47147_48831[(2)] = inst_47120);

(statearr_47147_48831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47125 === (8))){
var inst_47099 = (state_47124[(7)]);
var inst_47111 = cljs.core.next(inst_47099);
var inst_47099__$1 = inst_47111;
var state_47124__$1 = (function (){var statearr_47148 = state_47124;
(statearr_47148[(7)] = inst_47099__$1);

return statearr_47148;
})();
var statearr_47149_48832 = state_47124__$1;
(statearr_47149_48832[(2)] = null);

(statearr_47149_48832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46077__auto__ = null;
var cljs$core$async$state_machine__46077__auto____0 = (function (){
var statearr_47150 = [null,null,null,null,null,null,null,null];
(statearr_47150[(0)] = cljs$core$async$state_machine__46077__auto__);

(statearr_47150[(1)] = (1));

return statearr_47150;
});
var cljs$core$async$state_machine__46077__auto____1 = (function (state_47124){
while(true){
var ret_value__46078__auto__ = (function (){try{while(true){
var result__46079__auto__ = switch__46076__auto__(state_47124);
if(cljs.core.keyword_identical_QMARK_(result__46079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46079__auto__;
}
break;
}
}catch (e47151){var ex__46080__auto__ = e47151;
var statearr_47152_48841 = state_47124;
(statearr_47152_48841[(2)] = ex__46080__auto__);


if(cljs.core.seq((state_47124[(4)]))){
var statearr_47153_48842 = state_47124;
(statearr_47153_48842[(1)] = cljs.core.first((state_47124[(4)])));

} else {
throw ex__46080__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48843 = state_47124;
state_47124 = G__48843;
continue;
} else {
return ret_value__46078__auto__;
}
break;
}
});
cljs$core$async$state_machine__46077__auto__ = function(state_47124){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46077__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46077__auto____1.call(this,state_47124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46077__auto____0;
cljs$core$async$state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46077__auto____1;
return cljs$core$async$state_machine__46077__auto__;
})()
})();
var state__46246__auto__ = (function (){var statearr_47154 = f__46245__auto__();
(statearr_47154[(6)] = c__46243__auto__);

return statearr_47154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46246__auto__);
}));

return c__46243__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__47161 = arguments.length;
switch (G__47161) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_48847 = (function (_){
var x__4463__auto__ = (((_ == null))?null:_);
var m__4464__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4464__auto__.call(null,_));
} else {
var m__4461__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4461__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_48847(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_48848 = (function (m,ch,close_QMARK_){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4464__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4461__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4461__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_48848(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_48849 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4464__auto__.call(null,m,ch));
} else {
var m__4461__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4461__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_48849(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_48850 = (function (m){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4464__auto__.call(null,m));
} else {
var m__4461__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4461__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_48850(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47173 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47173 = (function (ch,cs,meta47174){
this.ch = ch;
this.cs = cs;
this.meta47174 = meta47174;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47175,meta47174__$1){
var self__ = this;
var _47175__$1 = this;
return (new cljs.core.async.t_cljs$core$async47173(self__.ch,self__.cs,meta47174__$1));
}));

(cljs.core.async.t_cljs$core$async47173.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47175){
var self__ = this;
var _47175__$1 = this;
return self__.meta47174;
}));

(cljs.core.async.t_cljs$core$async47173.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47173.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async47173.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47173.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async47173.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async47173.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async47173.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta47174","meta47174",-1260583450,null)], null);
}));

(cljs.core.async.t_cljs$core$async47173.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47173.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47173");

(cljs.core.async.t_cljs$core$async47173.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async47173");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47173.
 */
cljs.core.async.__GT_t_cljs$core$async47173 = (function cljs$core$async$mult_$___GT_t_cljs$core$async47173(ch__$1,cs__$1,meta47174){
return (new cljs.core.async.t_cljs$core$async47173(ch__$1,cs__$1,meta47174));
});

}

return (new cljs.core.async.t_cljs$core$async47173(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__46243__auto___48856 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46245__auto__ = (function (){var switch__46076__auto__ = (function (state_47319){
var state_val_47320 = (state_47319[(1)]);
if((state_val_47320 === (7))){
var inst_47315 = (state_47319[(2)]);
var state_47319__$1 = state_47319;
var statearr_47322_48858 = state_47319__$1;
(statearr_47322_48858[(2)] = inst_47315);

(statearr_47322_48858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (20))){
var inst_47212 = (state_47319[(7)]);
var inst_47224 = cljs.core.first(inst_47212);
var inst_47225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47224,(0),null);
var inst_47226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47224,(1),null);
var state_47319__$1 = (function (){var statearr_47324 = state_47319;
(statearr_47324[(8)] = inst_47225);

return statearr_47324;
})();
if(cljs.core.truth_(inst_47226)){
var statearr_47325_48865 = state_47319__$1;
(statearr_47325_48865[(1)] = (22));

} else {
var statearr_47327_48866 = state_47319__$1;
(statearr_47327_48866[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (27))){
var inst_47181 = (state_47319[(9)]);
var inst_47258 = (state_47319[(10)]);
var inst_47256 = (state_47319[(11)]);
var inst_47263 = (state_47319[(12)]);
var inst_47263__$1 = cljs.core._nth(inst_47256,inst_47258);
var inst_47264 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_47263__$1,inst_47181,done);
var state_47319__$1 = (function (){var statearr_47331 = state_47319;
(statearr_47331[(12)] = inst_47263__$1);

return statearr_47331;
})();
if(cljs.core.truth_(inst_47264)){
var statearr_47332_48867 = state_47319__$1;
(statearr_47332_48867[(1)] = (30));

} else {
var statearr_47333_48869 = state_47319__$1;
(statearr_47333_48869[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (1))){
var state_47319__$1 = state_47319;
var statearr_47335_48871 = state_47319__$1;
(statearr_47335_48871[(2)] = null);

(statearr_47335_48871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (24))){
var inst_47212 = (state_47319[(7)]);
var inst_47231 = (state_47319[(2)]);
var inst_47232 = cljs.core.next(inst_47212);
var inst_47190 = inst_47232;
var inst_47191 = null;
var inst_47192 = (0);
var inst_47193 = (0);
var state_47319__$1 = (function (){var statearr_47337 = state_47319;
(statearr_47337[(13)] = inst_47190);

(statearr_47337[(14)] = inst_47231);

(statearr_47337[(15)] = inst_47192);

(statearr_47337[(16)] = inst_47193);

(statearr_47337[(17)] = inst_47191);

return statearr_47337;
})();
var statearr_47338_48872 = state_47319__$1;
(statearr_47338_48872[(2)] = null);

(statearr_47338_48872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (39))){
var state_47319__$1 = state_47319;
var statearr_47342_48873 = state_47319__$1;
(statearr_47342_48873[(2)] = null);

(statearr_47342_48873[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (4))){
var inst_47181 = (state_47319[(9)]);
var inst_47181__$1 = (state_47319[(2)]);
var inst_47182 = (inst_47181__$1 == null);
var state_47319__$1 = (function (){var statearr_47345 = state_47319;
(statearr_47345[(9)] = inst_47181__$1);

return statearr_47345;
})();
if(cljs.core.truth_(inst_47182)){
var statearr_47346_48876 = state_47319__$1;
(statearr_47346_48876[(1)] = (5));

} else {
var statearr_47347_48877 = state_47319__$1;
(statearr_47347_48877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (15))){
var inst_47190 = (state_47319[(13)]);
var inst_47192 = (state_47319[(15)]);
var inst_47193 = (state_47319[(16)]);
var inst_47191 = (state_47319[(17)]);
var inst_47208 = (state_47319[(2)]);
var inst_47209 = (inst_47193 + (1));
var tmp47339 = inst_47190;
var tmp47340 = inst_47192;
var tmp47341 = inst_47191;
var inst_47190__$1 = tmp47339;
var inst_47191__$1 = tmp47341;
var inst_47192__$1 = tmp47340;
var inst_47193__$1 = inst_47209;
var state_47319__$1 = (function (){var statearr_47348 = state_47319;
(statearr_47348[(13)] = inst_47190__$1);

(statearr_47348[(18)] = inst_47208);

(statearr_47348[(15)] = inst_47192__$1);

(statearr_47348[(16)] = inst_47193__$1);

(statearr_47348[(17)] = inst_47191__$1);

return statearr_47348;
})();
var statearr_47349_48878 = state_47319__$1;
(statearr_47349_48878[(2)] = null);

(statearr_47349_48878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (21))){
var inst_47235 = (state_47319[(2)]);
var state_47319__$1 = state_47319;
var statearr_47355_48882 = state_47319__$1;
(statearr_47355_48882[(2)] = inst_47235);

(statearr_47355_48882[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (31))){
var inst_47263 = (state_47319[(12)]);
var inst_47267 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_47263);
var state_47319__$1 = state_47319;
var statearr_47358_48885 = state_47319__$1;
(statearr_47358_48885[(2)] = inst_47267);

(statearr_47358_48885[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (32))){
var inst_47258 = (state_47319[(10)]);
var inst_47257 = (state_47319[(19)]);
var inst_47256 = (state_47319[(11)]);
var inst_47255 = (state_47319[(20)]);
var inst_47269 = (state_47319[(2)]);
var inst_47273 = (inst_47258 + (1));
var tmp47350 = inst_47257;
var tmp47351 = inst_47256;
var tmp47352 = inst_47255;
var inst_47255__$1 = tmp47352;
var inst_47256__$1 = tmp47351;
var inst_47257__$1 = tmp47350;
var inst_47258__$1 = inst_47273;
var state_47319__$1 = (function (){var statearr_47359 = state_47319;
(statearr_47359[(10)] = inst_47258__$1);

(statearr_47359[(19)] = inst_47257__$1);

(statearr_47359[(11)] = inst_47256__$1);

(statearr_47359[(20)] = inst_47255__$1);

(statearr_47359[(21)] = inst_47269);

return statearr_47359;
})();
var statearr_47360_48888 = state_47319__$1;
(statearr_47360_48888[(2)] = null);

(statearr_47360_48888[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (40))){
var inst_47288 = (state_47319[(22)]);
var inst_47292 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_47288);
var state_47319__$1 = state_47319;
var statearr_47361_48889 = state_47319__$1;
(statearr_47361_48889[(2)] = inst_47292);

(statearr_47361_48889[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (33))){
var inst_47278 = (state_47319[(23)]);
var inst_47280 = cljs.core.chunked_seq_QMARK_(inst_47278);
var state_47319__$1 = state_47319;
if(inst_47280){
var statearr_47364_48890 = state_47319__$1;
(statearr_47364_48890[(1)] = (36));

} else {
var statearr_47367_48891 = state_47319__$1;
(statearr_47367_48891[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (13))){
var inst_47202 = (state_47319[(24)]);
var inst_47205 = cljs.core.async.close_BANG_(inst_47202);
var state_47319__$1 = state_47319;
var statearr_47368_48892 = state_47319__$1;
(statearr_47368_48892[(2)] = inst_47205);

(statearr_47368_48892[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (22))){
var inst_47225 = (state_47319[(8)]);
var inst_47228 = cljs.core.async.close_BANG_(inst_47225);
var state_47319__$1 = state_47319;
var statearr_47369_48894 = state_47319__$1;
(statearr_47369_48894[(2)] = inst_47228);

(statearr_47369_48894[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (36))){
var inst_47278 = (state_47319[(23)]);
var inst_47282 = cljs.core.chunk_first(inst_47278);
var inst_47283 = cljs.core.chunk_rest(inst_47278);
var inst_47284 = cljs.core.count(inst_47282);
var inst_47255 = inst_47283;
var inst_47256 = inst_47282;
var inst_47257 = inst_47284;
var inst_47258 = (0);
var state_47319__$1 = (function (){var statearr_47370 = state_47319;
(statearr_47370[(10)] = inst_47258);

(statearr_47370[(19)] = inst_47257);

(statearr_47370[(11)] = inst_47256);

(statearr_47370[(20)] = inst_47255);

return statearr_47370;
})();
var statearr_47372_48896 = state_47319__$1;
(statearr_47372_48896[(2)] = null);

(statearr_47372_48896[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (41))){
var inst_47278 = (state_47319[(23)]);
var inst_47294 = (state_47319[(2)]);
var inst_47295 = cljs.core.next(inst_47278);
var inst_47255 = inst_47295;
var inst_47256 = null;
var inst_47257 = (0);
var inst_47258 = (0);
var state_47319__$1 = (function (){var statearr_47376 = state_47319;
(statearr_47376[(25)] = inst_47294);

(statearr_47376[(10)] = inst_47258);

(statearr_47376[(19)] = inst_47257);

(statearr_47376[(11)] = inst_47256);

(statearr_47376[(20)] = inst_47255);

return statearr_47376;
})();
var statearr_47377_48901 = state_47319__$1;
(statearr_47377_48901[(2)] = null);

(statearr_47377_48901[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (43))){
var state_47319__$1 = state_47319;
var statearr_47378_48903 = state_47319__$1;
(statearr_47378_48903[(2)] = null);

(statearr_47378_48903[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (29))){
var inst_47303 = (state_47319[(2)]);
var state_47319__$1 = state_47319;
var statearr_47380_48904 = state_47319__$1;
(statearr_47380_48904[(2)] = inst_47303);

(statearr_47380_48904[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (44))){
var inst_47312 = (state_47319[(2)]);
var state_47319__$1 = (function (){var statearr_47381 = state_47319;
(statearr_47381[(26)] = inst_47312);

return statearr_47381;
})();
var statearr_47382_48909 = state_47319__$1;
(statearr_47382_48909[(2)] = null);

(statearr_47382_48909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (6))){
var inst_47246 = (state_47319[(27)]);
var inst_47245 = cljs.core.deref(cs);
var inst_47246__$1 = cljs.core.keys(inst_47245);
var inst_47248 = cljs.core.count(inst_47246__$1);
var inst_47249 = cljs.core.reset_BANG_(dctr,inst_47248);
var inst_47254 = cljs.core.seq(inst_47246__$1);
var inst_47255 = inst_47254;
var inst_47256 = null;
var inst_47257 = (0);
var inst_47258 = (0);
var state_47319__$1 = (function (){var statearr_47387 = state_47319;
(statearr_47387[(27)] = inst_47246__$1);

(statearr_47387[(10)] = inst_47258);

(statearr_47387[(19)] = inst_47257);

(statearr_47387[(28)] = inst_47249);

(statearr_47387[(11)] = inst_47256);

(statearr_47387[(20)] = inst_47255);

return statearr_47387;
})();
var statearr_47388_48910 = state_47319__$1;
(statearr_47388_48910[(2)] = null);

(statearr_47388_48910[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (28))){
var inst_47278 = (state_47319[(23)]);
var inst_47255 = (state_47319[(20)]);
var inst_47278__$1 = cljs.core.seq(inst_47255);
var state_47319__$1 = (function (){var statearr_47389 = state_47319;
(statearr_47389[(23)] = inst_47278__$1);

return statearr_47389;
})();
if(inst_47278__$1){
var statearr_47390_48911 = state_47319__$1;
(statearr_47390_48911[(1)] = (33));

} else {
var statearr_47391_48912 = state_47319__$1;
(statearr_47391_48912[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (25))){
var inst_47258 = (state_47319[(10)]);
var inst_47257 = (state_47319[(19)]);
var inst_47260 = (inst_47258 < inst_47257);
var inst_47261 = inst_47260;
var state_47319__$1 = state_47319;
if(cljs.core.truth_(inst_47261)){
var statearr_47394_48916 = state_47319__$1;
(statearr_47394_48916[(1)] = (27));

} else {
var statearr_47395_48918 = state_47319__$1;
(statearr_47395_48918[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (34))){
var state_47319__$1 = state_47319;
var statearr_47396_48919 = state_47319__$1;
(statearr_47396_48919[(2)] = null);

(statearr_47396_48919[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (17))){
var state_47319__$1 = state_47319;
var statearr_47397_48920 = state_47319__$1;
(statearr_47397_48920[(2)] = null);

(statearr_47397_48920[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (3))){
var inst_47317 = (state_47319[(2)]);
var state_47319__$1 = state_47319;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47319__$1,inst_47317);
} else {
if((state_val_47320 === (12))){
var inst_47240 = (state_47319[(2)]);
var state_47319__$1 = state_47319;
var statearr_47398_48925 = state_47319__$1;
(statearr_47398_48925[(2)] = inst_47240);

(statearr_47398_48925[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (2))){
var state_47319__$1 = state_47319;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47319__$1,(4),ch);
} else {
if((state_val_47320 === (23))){
var state_47319__$1 = state_47319;
var statearr_47403_48930 = state_47319__$1;
(statearr_47403_48930[(2)] = null);

(statearr_47403_48930[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (35))){
var inst_47301 = (state_47319[(2)]);
var state_47319__$1 = state_47319;
var statearr_47404_48931 = state_47319__$1;
(statearr_47404_48931[(2)] = inst_47301);

(statearr_47404_48931[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (19))){
var inst_47212 = (state_47319[(7)]);
var inst_47216 = cljs.core.chunk_first(inst_47212);
var inst_47217 = cljs.core.chunk_rest(inst_47212);
var inst_47218 = cljs.core.count(inst_47216);
var inst_47190 = inst_47217;
var inst_47191 = inst_47216;
var inst_47192 = inst_47218;
var inst_47193 = (0);
var state_47319__$1 = (function (){var statearr_47405 = state_47319;
(statearr_47405[(13)] = inst_47190);

(statearr_47405[(15)] = inst_47192);

(statearr_47405[(16)] = inst_47193);

(statearr_47405[(17)] = inst_47191);

return statearr_47405;
})();
var statearr_47406_48938 = state_47319__$1;
(statearr_47406_48938[(2)] = null);

(statearr_47406_48938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (11))){
var inst_47190 = (state_47319[(13)]);
var inst_47212 = (state_47319[(7)]);
var inst_47212__$1 = cljs.core.seq(inst_47190);
var state_47319__$1 = (function (){var statearr_47407 = state_47319;
(statearr_47407[(7)] = inst_47212__$1);

return statearr_47407;
})();
if(inst_47212__$1){
var statearr_47408_48941 = state_47319__$1;
(statearr_47408_48941[(1)] = (16));

} else {
var statearr_47410_48945 = state_47319__$1;
(statearr_47410_48945[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (9))){
var inst_47242 = (state_47319[(2)]);
var state_47319__$1 = state_47319;
var statearr_47412_48946 = state_47319__$1;
(statearr_47412_48946[(2)] = inst_47242);

(statearr_47412_48946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (5))){
var inst_47188 = cljs.core.deref(cs);
var inst_47189 = cljs.core.seq(inst_47188);
var inst_47190 = inst_47189;
var inst_47191 = null;
var inst_47192 = (0);
var inst_47193 = (0);
var state_47319__$1 = (function (){var statearr_47413 = state_47319;
(statearr_47413[(13)] = inst_47190);

(statearr_47413[(15)] = inst_47192);

(statearr_47413[(16)] = inst_47193);

(statearr_47413[(17)] = inst_47191);

return statearr_47413;
})();
var statearr_47414_48951 = state_47319__$1;
(statearr_47414_48951[(2)] = null);

(statearr_47414_48951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (14))){
var state_47319__$1 = state_47319;
var statearr_47415_48952 = state_47319__$1;
(statearr_47415_48952[(2)] = null);

(statearr_47415_48952[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (45))){
var inst_47309 = (state_47319[(2)]);
var state_47319__$1 = state_47319;
var statearr_47416_48953 = state_47319__$1;
(statearr_47416_48953[(2)] = inst_47309);

(statearr_47416_48953[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (26))){
var inst_47246 = (state_47319[(27)]);
var inst_47305 = (state_47319[(2)]);
var inst_47306 = cljs.core.seq(inst_47246);
var state_47319__$1 = (function (){var statearr_47417 = state_47319;
(statearr_47417[(29)] = inst_47305);

return statearr_47417;
})();
if(inst_47306){
var statearr_47419_48954 = state_47319__$1;
(statearr_47419_48954[(1)] = (42));

} else {
var statearr_47421_48955 = state_47319__$1;
(statearr_47421_48955[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (16))){
var inst_47212 = (state_47319[(7)]);
var inst_47214 = cljs.core.chunked_seq_QMARK_(inst_47212);
var state_47319__$1 = state_47319;
if(inst_47214){
var statearr_47422_48956 = state_47319__$1;
(statearr_47422_48956[(1)] = (19));

} else {
var statearr_47423_48957 = state_47319__$1;
(statearr_47423_48957[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (38))){
var inst_47298 = (state_47319[(2)]);
var state_47319__$1 = state_47319;
var statearr_47424_48960 = state_47319__$1;
(statearr_47424_48960[(2)] = inst_47298);

(statearr_47424_48960[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (30))){
var state_47319__$1 = state_47319;
var statearr_47427_48961 = state_47319__$1;
(statearr_47427_48961[(2)] = null);

(statearr_47427_48961[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (10))){
var inst_47193 = (state_47319[(16)]);
var inst_47191 = (state_47319[(17)]);
var inst_47201 = cljs.core._nth(inst_47191,inst_47193);
var inst_47202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47201,(0),null);
var inst_47203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47201,(1),null);
var state_47319__$1 = (function (){var statearr_47428 = state_47319;
(statearr_47428[(24)] = inst_47202);

return statearr_47428;
})();
if(cljs.core.truth_(inst_47203)){
var statearr_47429_48962 = state_47319__$1;
(statearr_47429_48962[(1)] = (13));

} else {
var statearr_47430_48963 = state_47319__$1;
(statearr_47430_48963[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (18))){
var inst_47238 = (state_47319[(2)]);
var state_47319__$1 = state_47319;
var statearr_47431_48964 = state_47319__$1;
(statearr_47431_48964[(2)] = inst_47238);

(statearr_47431_48964[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (42))){
var state_47319__$1 = state_47319;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47319__$1,(45),dchan);
} else {
if((state_val_47320 === (37))){
var inst_47181 = (state_47319[(9)]);
var inst_47278 = (state_47319[(23)]);
var inst_47288 = (state_47319[(22)]);
var inst_47288__$1 = cljs.core.first(inst_47278);
var inst_47289 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_47288__$1,inst_47181,done);
var state_47319__$1 = (function (){var statearr_47432 = state_47319;
(statearr_47432[(22)] = inst_47288__$1);

return statearr_47432;
})();
if(cljs.core.truth_(inst_47289)){
var statearr_47433_48965 = state_47319__$1;
(statearr_47433_48965[(1)] = (39));

} else {
var statearr_47434_48966 = state_47319__$1;
(statearr_47434_48966[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47320 === (8))){
var inst_47192 = (state_47319[(15)]);
var inst_47193 = (state_47319[(16)]);
var inst_47195 = (inst_47193 < inst_47192);
var inst_47196 = inst_47195;
var state_47319__$1 = state_47319;
if(cljs.core.truth_(inst_47196)){
var statearr_47435_48968 = state_47319__$1;
(statearr_47435_48968[(1)] = (10));

} else {
var statearr_47436_48969 = state_47319__$1;
(statearr_47436_48969[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__46077__auto__ = null;
var cljs$core$async$mult_$_state_machine__46077__auto____0 = (function (){
var statearr_47437 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47437[(0)] = cljs$core$async$mult_$_state_machine__46077__auto__);

(statearr_47437[(1)] = (1));

return statearr_47437;
});
var cljs$core$async$mult_$_state_machine__46077__auto____1 = (function (state_47319){
while(true){
var ret_value__46078__auto__ = (function (){try{while(true){
var result__46079__auto__ = switch__46076__auto__(state_47319);
if(cljs.core.keyword_identical_QMARK_(result__46079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46079__auto__;
}
break;
}
}catch (e47439){var ex__46080__auto__ = e47439;
var statearr_47440_48970 = state_47319;
(statearr_47440_48970[(2)] = ex__46080__auto__);


if(cljs.core.seq((state_47319[(4)]))){
var statearr_47441_48971 = state_47319;
(statearr_47441_48971[(1)] = cljs.core.first((state_47319[(4)])));

} else {
throw ex__46080__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48973 = state_47319;
state_47319 = G__48973;
continue;
} else {
return ret_value__46078__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__46077__auto__ = function(state_47319){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__46077__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__46077__auto____1.call(this,state_47319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__46077__auto____0;
cljs$core$async$mult_$_state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__46077__auto____1;
return cljs$core$async$mult_$_state_machine__46077__auto__;
})()
})();
var state__46246__auto__ = (function (){var statearr_47442 = f__46245__auto__();
(statearr_47442[(6)] = c__46243__auto___48856);

return statearr_47442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46246__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__47444 = arguments.length;
switch (G__47444) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_48981 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4464__auto__.call(null,m,ch));
} else {
var m__4461__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4461__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_48981(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_48986 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4464__auto__.call(null,m,ch));
} else {
var m__4461__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4461__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_48986(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_48988 = (function (m){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4464__auto__.call(null,m));
} else {
var m__4461__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4461__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_48988(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_48993 = (function (m,state_map){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4464__auto__.call(null,m,state_map));
} else {
var m__4461__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4461__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_48993(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_48998 = (function (m,mode){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4464__auto__.call(null,m,mode));
} else {
var m__4461__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4461__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_48998(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___49002 = arguments.length;
var i__4772__auto___49003 = (0);
while(true){
if((i__4772__auto___49003 < len__4771__auto___49002)){
args__4777__auto__.push((arguments[i__4772__auto___49003]));

var G__49004 = (i__4772__auto___49003 + (1));
i__4772__auto___49003 = G__49004;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__47500){
var map__47501 = p__47500;
var map__47501__$1 = cljs.core.__destructure_map(map__47501);
var opts = map__47501__$1;
var statearr_47502_49005 = state;
(statearr_47502_49005[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_47503_49006 = state;
(statearr_47503_49006[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_47507_49011 = state;
(statearr_47507_49011[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq47491){
var G__47492 = cljs.core.first(seq47491);
var seq47491__$1 = cljs.core.next(seq47491);
var G__47493 = cljs.core.first(seq47491__$1);
var seq47491__$2 = cljs.core.next(seq47491__$1);
var G__47494 = cljs.core.first(seq47491__$2);
var seq47491__$3 = cljs.core.next(seq47491__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47492,G__47493,G__47494,seq47491__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47511 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47511 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta47512){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta47512 = meta47512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47513,meta47512__$1){
var self__ = this;
var _47513__$1 = this;
return (new cljs.core.async.t_cljs$core$async47511(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta47512__$1));
}));

(cljs.core.async.t_cljs$core$async47511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47513){
var self__ = this;
var _47513__$1 = this;
return self__.meta47512;
}));

(cljs.core.async.t_cljs$core$async47511.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47511.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async47511.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47511.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47511.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47511.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47511.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47511.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47511.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta47512","meta47512",-356057021,null)], null);
}));

(cljs.core.async.t_cljs$core$async47511.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47511.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47511");

(cljs.core.async.t_cljs$core$async47511.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async47511");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47511.
 */
cljs.core.async.__GT_t_cljs$core$async47511 = (function cljs$core$async$mix_$___GT_t_cljs$core$async47511(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47512){
return (new cljs.core.async.t_cljs$core$async47511(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47512));
});

}

return (new cljs.core.async.t_cljs$core$async47511(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46243__auto___49016 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46245__auto__ = (function (){var switch__46076__auto__ = (function (state_47590){
var state_val_47591 = (state_47590[(1)]);
if((state_val_47591 === (7))){
var inst_47586 = (state_47590[(2)]);
var state_47590__$1 = state_47590;
var statearr_47592_49017 = state_47590__$1;
(statearr_47592_49017[(2)] = inst_47586);

(statearr_47592_49017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (20))){
var inst_47580 = (state_47590[(2)]);
var state_47590__$1 = state_47590;
var statearr_47593_49022 = state_47590__$1;
(statearr_47593_49022[(2)] = inst_47580);

(statearr_47593_49022[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (1))){
var inst_47525 = calc_state();
var inst_47526 = cljs.core.__destructure_map(inst_47525);
var inst_47527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47526,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47526,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47529 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47526,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_47530 = inst_47525;
var state_47590__$1 = (function (){var statearr_47594 = state_47590;
(statearr_47594[(7)] = inst_47530);

(statearr_47594[(8)] = inst_47527);

(statearr_47594[(9)] = inst_47529);

(statearr_47594[(10)] = inst_47528);

return statearr_47594;
})();
var statearr_47595_49024 = state_47590__$1;
(statearr_47595_49024[(2)] = null);

(statearr_47595_49024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (4))){
var inst_47547 = (state_47590[(11)]);
var inst_47546 = (state_47590[(12)]);
var inst_47545 = (state_47590[(2)]);
var inst_47546__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47545,(0),null);
var inst_47547__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47545,(1),null);
var inst_47548 = (inst_47546__$1 == null);
var inst_47549 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47547__$1,change);
var inst_47550 = ((inst_47548) || (inst_47549));
var state_47590__$1 = (function (){var statearr_47596 = state_47590;
(statearr_47596[(11)] = inst_47547__$1);

(statearr_47596[(12)] = inst_47546__$1);

return statearr_47596;
})();
if(cljs.core.truth_(inst_47550)){
var statearr_47597_49026 = state_47590__$1;
(statearr_47597_49026[(1)] = (5));

} else {
var statearr_47598_49027 = state_47590__$1;
(statearr_47598_49027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (15))){
var inst_47533 = (state_47590[(13)]);
var inst_47530 = inst_47533;
var state_47590__$1 = (function (){var statearr_47599 = state_47590;
(statearr_47599[(7)] = inst_47530);

return statearr_47599;
})();
var statearr_47600_49028 = state_47590__$1;
(statearr_47600_49028[(2)] = null);

(statearr_47600_49028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (13))){
var inst_47572 = (state_47590[(2)]);
var state_47590__$1 = state_47590;
if(cljs.core.truth_(inst_47572)){
var statearr_47601_49029 = state_47590__$1;
(statearr_47601_49029[(1)] = (14));

} else {
var statearr_47602_49030 = state_47590__$1;
(statearr_47602_49030[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (6))){
var inst_47547 = (state_47590[(11)]);
var inst_47561 = (state_47590[(14)]);
var inst_47534 = (state_47590[(15)]);
var inst_47561__$1 = (inst_47534.cljs$core$IFn$_invoke$arity$1 ? inst_47534.cljs$core$IFn$_invoke$arity$1(inst_47547) : inst_47534.call(null,inst_47547));
var state_47590__$1 = (function (){var statearr_47603 = state_47590;
(statearr_47603[(14)] = inst_47561__$1);

return statearr_47603;
})();
if(cljs.core.truth_(inst_47561__$1)){
var statearr_47604_49037 = state_47590__$1;
(statearr_47604_49037[(1)] = (11));

} else {
var statearr_47605_49038 = state_47590__$1;
(statearr_47605_49038[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (17))){
var inst_47575 = (state_47590[(2)]);
var state_47590__$1 = state_47590;
if(cljs.core.truth_(inst_47575)){
var statearr_47606_49039 = state_47590__$1;
(statearr_47606_49039[(1)] = (18));

} else {
var statearr_47607_49040 = state_47590__$1;
(statearr_47607_49040[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (3))){
var inst_47588 = (state_47590[(2)]);
var state_47590__$1 = state_47590;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47590__$1,inst_47588);
} else {
if((state_val_47591 === (12))){
var inst_47547 = (state_47590[(11)]);
var inst_47535 = (state_47590[(16)]);
var inst_47534 = (state_47590[(15)]);
var inst_47564 = cljs.core.empty_QMARK_(inst_47534);
var inst_47565 = (inst_47535.cljs$core$IFn$_invoke$arity$1 ? inst_47535.cljs$core$IFn$_invoke$arity$1(inst_47547) : inst_47535.call(null,inst_47547));
var inst_47566 = cljs.core.not(inst_47565);
var inst_47570 = ((inst_47564) && (inst_47566));
var state_47590__$1 = state_47590;
var statearr_47608_49044 = state_47590__$1;
(statearr_47608_49044[(2)] = inst_47570);

(statearr_47608_49044[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (2))){
var inst_47530 = (state_47590[(7)]);
var inst_47533 = (state_47590[(13)]);
var inst_47533__$1 = cljs.core.__destructure_map(inst_47530);
var inst_47534 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47533__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47535 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47533__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47536 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47533__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_47590__$1 = (function (){var statearr_47609 = state_47590;
(statearr_47609[(16)] = inst_47535);

(statearr_47609[(13)] = inst_47533__$1);

(statearr_47609[(15)] = inst_47534);

return statearr_47609;
})();
return cljs.core.async.ioc_alts_BANG_(state_47590__$1,(4),inst_47536);
} else {
if((state_val_47591 === (19))){
var state_47590__$1 = state_47590;
var statearr_47610_49047 = state_47590__$1;
(statearr_47610_49047[(2)] = null);

(statearr_47610_49047[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (11))){
var inst_47561 = (state_47590[(14)]);
var state_47590__$1 = state_47590;
var statearr_47611_49048 = state_47590__$1;
(statearr_47611_49048[(2)] = inst_47561);

(statearr_47611_49048[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (9))){
var state_47590__$1 = state_47590;
var statearr_47612_49049 = state_47590__$1;
(statearr_47612_49049[(2)] = null);

(statearr_47612_49049[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (5))){
var inst_47546 = (state_47590[(12)]);
var inst_47552 = (inst_47546 == null);
var state_47590__$1 = state_47590;
if(cljs.core.truth_(inst_47552)){
var statearr_47613_49050 = state_47590__$1;
(statearr_47613_49050[(1)] = (8));

} else {
var statearr_47614_49051 = state_47590__$1;
(statearr_47614_49051[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (14))){
var inst_47546 = (state_47590[(12)]);
var state_47590__$1 = state_47590;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47590__$1,(17),out,inst_47546);
} else {
if((state_val_47591 === (16))){
var inst_47584 = (state_47590[(2)]);
var state_47590__$1 = state_47590;
var statearr_47615_49052 = state_47590__$1;
(statearr_47615_49052[(2)] = inst_47584);

(statearr_47615_49052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (10))){
var inst_47557 = (state_47590[(2)]);
var inst_47558 = calc_state();
var inst_47530 = inst_47558;
var state_47590__$1 = (function (){var statearr_47616 = state_47590;
(statearr_47616[(7)] = inst_47530);

(statearr_47616[(17)] = inst_47557);

return statearr_47616;
})();
var statearr_47617_49053 = state_47590__$1;
(statearr_47617_49053[(2)] = null);

(statearr_47617_49053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (18))){
var inst_47533 = (state_47590[(13)]);
var inst_47530 = inst_47533;
var state_47590__$1 = (function (){var statearr_47618 = state_47590;
(statearr_47618[(7)] = inst_47530);

return statearr_47618;
})();
var statearr_47619_49054 = state_47590__$1;
(statearr_47619_49054[(2)] = null);

(statearr_47619_49054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (8))){
var inst_47547 = (state_47590[(11)]);
var inst_47554 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_47547);
var state_47590__$1 = state_47590;
var statearr_47620_49058 = state_47590__$1;
(statearr_47620_49058[(2)] = inst_47554);

(statearr_47620_49058[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__46077__auto__ = null;
var cljs$core$async$mix_$_state_machine__46077__auto____0 = (function (){
var statearr_47621 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47621[(0)] = cljs$core$async$mix_$_state_machine__46077__auto__);

(statearr_47621[(1)] = (1));

return statearr_47621;
});
var cljs$core$async$mix_$_state_machine__46077__auto____1 = (function (state_47590){
while(true){
var ret_value__46078__auto__ = (function (){try{while(true){
var result__46079__auto__ = switch__46076__auto__(state_47590);
if(cljs.core.keyword_identical_QMARK_(result__46079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46079__auto__;
}
break;
}
}catch (e47622){var ex__46080__auto__ = e47622;
var statearr_47623_49062 = state_47590;
(statearr_47623_49062[(2)] = ex__46080__auto__);


if(cljs.core.seq((state_47590[(4)]))){
var statearr_47624_49063 = state_47590;
(statearr_47624_49063[(1)] = cljs.core.first((state_47590[(4)])));

} else {
throw ex__46080__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49064 = state_47590;
state_47590 = G__49064;
continue;
} else {
return ret_value__46078__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__46077__auto__ = function(state_47590){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__46077__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__46077__auto____1.call(this,state_47590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__46077__auto____0;
cljs$core$async$mix_$_state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__46077__auto____1;
return cljs$core$async$mix_$_state_machine__46077__auto__;
})()
})();
var state__46246__auto__ = (function (){var statearr_47625 = f__46245__auto__();
(statearr_47625[(6)] = c__46243__auto___49016);

return statearr_47625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46246__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_49066 = (function (p,v,ch,close_QMARK_){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4464__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4461__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4461__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_49066(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_49078 = (function (p,v,ch){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4464__auto__.call(null,p,v,ch));
} else {
var m__4461__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4461__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_49078(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_49084 = (function() {
var G__49085 = null;
var G__49085__1 = (function (p){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4464__auto__.call(null,p));
} else {
var m__4461__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4461__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__49085__2 = (function (p,v){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4464__auto__.call(null,p,v));
} else {
var m__4461__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4461__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__49085 = function(p,v){
switch(arguments.length){
case 1:
return G__49085__1.call(this,p);
case 2:
return G__49085__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__49085.cljs$core$IFn$_invoke$arity$1 = G__49085__1;
G__49085.cljs$core$IFn$_invoke$arity$2 = G__49085__2;
return G__49085;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__47634 = arguments.length;
switch (G__47634) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_49084(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_49084(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__47640 = arguments.length;
switch (G__47640) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4160__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__47636_SHARP_){
if(cljs.core.truth_((p1__47636_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__47636_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__47636_SHARP_.call(null,topic)))){
return p1__47636_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47636_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47642 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47642 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta47643){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta47643 = meta47643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47644,meta47643__$1){
var self__ = this;
var _47644__$1 = this;
return (new cljs.core.async.t_cljs$core$async47642(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta47643__$1));
}));

(cljs.core.async.t_cljs$core$async47642.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47644){
var self__ = this;
var _47644__$1 = this;
return self__.meta47643;
}));

(cljs.core.async.t_cljs$core$async47642.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47642.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async47642.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47642.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async47642.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async47642.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async47642.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async47642.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta47643","meta47643",425181952,null)], null);
}));

(cljs.core.async.t_cljs$core$async47642.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47642.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47642");

(cljs.core.async.t_cljs$core$async47642.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async47642");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47642.
 */
cljs.core.async.__GT_t_cljs$core$async47642 = (function cljs$core$async$__GT_t_cljs$core$async47642(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47643){
return (new cljs.core.async.t_cljs$core$async47642(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47643));
});

}

return (new cljs.core.async.t_cljs$core$async47642(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46243__auto___49107 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46245__auto__ = (function (){var switch__46076__auto__ = (function (state_47734){
var state_val_47735 = (state_47734[(1)]);
if((state_val_47735 === (7))){
var inst_47730 = (state_47734[(2)]);
var state_47734__$1 = state_47734;
var statearr_47740_49108 = state_47734__$1;
(statearr_47740_49108[(2)] = inst_47730);

(statearr_47740_49108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47735 === (20))){
var state_47734__$1 = state_47734;
var statearr_47741_49109 = state_47734__$1;
(statearr_47741_49109[(2)] = null);

(statearr_47741_49109[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47735 === (1))){
var state_47734__$1 = state_47734;
var statearr_47743_49110 = state_47734__$1;
(statearr_47743_49110[(2)] = null);

(statearr_47743_49110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47735 === (24))){
var inst_47712 = (state_47734[(7)]);
var inst_47722 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_47712);
var state_47734__$1 = state_47734;
var statearr_47744_49112 = state_47734__$1;
(statearr_47744_49112[(2)] = inst_47722);

(statearr_47744_49112[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47735 === (4))){
var inst_47660 = (state_47734[(8)]);
var inst_47660__$1 = (state_47734[(2)]);
var inst_47662 = (inst_47660__$1 == null);
var state_47734__$1 = (function (){var statearr_47746 = state_47734;
(statearr_47746[(8)] = inst_47660__$1);

return statearr_47746;
})();
if(cljs.core.truth_(inst_47662)){
var statearr_47747_49116 = state_47734__$1;
(statearr_47747_49116[(1)] = (5));

} else {
var statearr_47748_49117 = state_47734__$1;
(statearr_47748_49117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47735 === (15))){
var inst_47705 = (state_47734[(2)]);
var state_47734__$1 = state_47734;
var statearr_47749_49118 = state_47734__$1;
(statearr_47749_49118[(2)] = inst_47705);

(statearr_47749_49118[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47735 === (21))){
var inst_47727 = (state_47734[(2)]);
var state_47734__$1 = (function (){var statearr_47750 = state_47734;
(statearr_47750[(9)] = inst_47727);

return statearr_47750;
})();
var statearr_47751_49119 = state_47734__$1;
(statearr_47751_49119[(2)] = null);

(statearr_47751_49119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47735 === (13))){
var inst_47687 = (state_47734[(10)]);
var inst_47689 = cljs.core.chunked_seq_QMARK_(inst_47687);
var state_47734__$1 = state_47734;
if(inst_47689){
var statearr_47753_49120 = state_47734__$1;
(statearr_47753_49120[(1)] = (16));

} else {
var statearr_47754_49121 = state_47734__$1;
(statearr_47754_49121[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47735 === (22))){
var inst_47719 = (state_47734[(2)]);
var state_47734__$1 = state_47734;
if(cljs.core.truth_(inst_47719)){
var statearr_47755_49122 = state_47734__$1;
(statearr_47755_49122[(1)] = (23));

} else {
var statearr_47756_49123 = state_47734__$1;
(statearr_47756_49123[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47735 === (6))){
var inst_47715 = (state_47734[(11)]);
var inst_47660 = (state_47734[(8)]);
var inst_47712 = (state_47734[(7)]);
var inst_47712__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_47660) : topic_fn.call(null,inst_47660));
var inst_47714 = cljs.core.deref(mults);
var inst_47715__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47714,inst_47712__$1);
var state_47734__$1 = (function (){var statearr_47757 = state_47734;
(statearr_47757[(11)] = inst_47715__$1);

(statearr_47757[(7)] = inst_47712__$1);

return statearr_47757;
})();
if(cljs.core.truth_(inst_47715__$1)){
var statearr_47759_49124 = state_47734__$1;
(statearr_47759_49124[(1)] = (19));

} else {
var statearr_47760_49125 = state_47734__$1;
(statearr_47760_49125[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47735 === (25))){
var inst_47724 = (state_47734[(2)]);
var state_47734__$1 = state_47734;
var statearr_47761_49126 = state_47734__$1;
(statearr_47761_49126[(2)] = inst_47724);

(statearr_47761_49126[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47735 === (17))){
var inst_47687 = (state_47734[(10)]);
var inst_47696 = cljs.core.first(inst_47687);
var inst_47697 = cljs.core.async.muxch_STAR_(inst_47696);
var inst_47698 = cljs.core.async.close_BANG_(inst_47697);
var inst_47699 = cljs.core.next(inst_47687);
var inst_47671 = inst_47699;
var inst_47672 = null;
var inst_47673 = (0);
var inst_47674 = (0);
var state_47734__$1 = (function (){var statearr_47766 = state_47734;
(statearr_47766[(12)] = inst_47674);

(statearr_47766[(13)] = inst_47698);

(statearr_47766[(14)] = inst_47671);

(statearr_47766[(15)] = inst_47672);

(statearr_47766[(16)] = inst_47673);

return statearr_47766;
})();
var statearr_47767_49127 = state_47734__$1;
(statearr_47767_49127[(2)] = null);

(statearr_47767_49127[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47735 === (3))){
var inst_47732 = (state_47734[(2)]);
var state_47734__$1 = state_47734;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47734__$1,inst_47732);
} else {
if((state_val_47735 === (12))){
var inst_47707 = (state_47734[(2)]);
var state_47734__$1 = state_47734;
var statearr_47768_49130 = state_47734__$1;
(statearr_47768_49130[(2)] = inst_47707);

(statearr_47768_49130[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47735 === (2))){
var state_47734__$1 = state_47734;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47734__$1,(4),ch);
} else {
if((state_val_47735 === (23))){
var state_47734__$1 = state_47734;
var statearr_47769_49133 = state_47734__$1;
(statearr_47769_49133[(2)] = null);

(statearr_47769_49133[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47735 === (19))){
var inst_47715 = (state_47734[(11)]);
var inst_47660 = (state_47734[(8)]);
var inst_47717 = cljs.core.async.muxch_STAR_(inst_47715);
var state_47734__$1 = state_47734;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47734__$1,(22),inst_47717,inst_47660);
} else {
if((state_val_47735 === (11))){
var inst_47687 = (state_47734[(10)]);
var inst_47671 = (state_47734[(14)]);
var inst_47687__$1 = cljs.core.seq(inst_47671);
var state_47734__$1 = (function (){var statearr_47770 = state_47734;
(statearr_47770[(10)] = inst_47687__$1);

return statearr_47770;
})();
if(inst_47687__$1){
var statearr_47771_49138 = state_47734__$1;
(statearr_47771_49138[(1)] = (13));

} else {
var statearr_47772_49139 = state_47734__$1;
(statearr_47772_49139[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47735 === (9))){
var inst_47709 = (state_47734[(2)]);
var state_47734__$1 = state_47734;
var statearr_47773_49144 = state_47734__$1;
(statearr_47773_49144[(2)] = inst_47709);

(statearr_47773_49144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47735 === (5))){
var inst_47668 = cljs.core.deref(mults);
var inst_47669 = cljs.core.vals(inst_47668);
var inst_47670 = cljs.core.seq(inst_47669);
var inst_47671 = inst_47670;
var inst_47672 = null;
var inst_47673 = (0);
var inst_47674 = (0);
var state_47734__$1 = (function (){var statearr_47774 = state_47734;
(statearr_47774[(12)] = inst_47674);

(statearr_47774[(14)] = inst_47671);

(statearr_47774[(15)] = inst_47672);

(statearr_47774[(16)] = inst_47673);

return statearr_47774;
})();
var statearr_47777_49148 = state_47734__$1;
(statearr_47777_49148[(2)] = null);

(statearr_47777_49148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47735 === (14))){
var state_47734__$1 = state_47734;
var statearr_47782_49149 = state_47734__$1;
(statearr_47782_49149[(2)] = null);

(statearr_47782_49149[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47735 === (16))){
var inst_47687 = (state_47734[(10)]);
var inst_47691 = cljs.core.chunk_first(inst_47687);
var inst_47692 = cljs.core.chunk_rest(inst_47687);
var inst_47693 = cljs.core.count(inst_47691);
var inst_47671 = inst_47692;
var inst_47672 = inst_47691;
var inst_47673 = inst_47693;
var inst_47674 = (0);
var state_47734__$1 = (function (){var statearr_47784 = state_47734;
(statearr_47784[(12)] = inst_47674);

(statearr_47784[(14)] = inst_47671);

(statearr_47784[(15)] = inst_47672);

(statearr_47784[(16)] = inst_47673);

return statearr_47784;
})();
var statearr_47785_49153 = state_47734__$1;
(statearr_47785_49153[(2)] = null);

(statearr_47785_49153[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47735 === (10))){
var inst_47674 = (state_47734[(12)]);
var inst_47671 = (state_47734[(14)]);
var inst_47672 = (state_47734[(15)]);
var inst_47673 = (state_47734[(16)]);
var inst_47680 = cljs.core._nth(inst_47672,inst_47674);
var inst_47682 = cljs.core.async.muxch_STAR_(inst_47680);
var inst_47683 = cljs.core.async.close_BANG_(inst_47682);
var inst_47684 = (inst_47674 + (1));
var tmp47779 = inst_47671;
var tmp47780 = inst_47672;
var tmp47781 = inst_47673;
var inst_47671__$1 = tmp47779;
var inst_47672__$1 = tmp47780;
var inst_47673__$1 = tmp47781;
var inst_47674__$1 = inst_47684;
var state_47734__$1 = (function (){var statearr_47786 = state_47734;
(statearr_47786[(12)] = inst_47674__$1);

(statearr_47786[(14)] = inst_47671__$1);

(statearr_47786[(15)] = inst_47672__$1);

(statearr_47786[(16)] = inst_47673__$1);

(statearr_47786[(17)] = inst_47683);

return statearr_47786;
})();
var statearr_47787_49161 = state_47734__$1;
(statearr_47787_49161[(2)] = null);

(statearr_47787_49161[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47735 === (18))){
var inst_47702 = (state_47734[(2)]);
var state_47734__$1 = state_47734;
var statearr_47788_49165 = state_47734__$1;
(statearr_47788_49165[(2)] = inst_47702);

(statearr_47788_49165[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47735 === (8))){
var inst_47674 = (state_47734[(12)]);
var inst_47673 = (state_47734[(16)]);
var inst_47676 = (inst_47674 < inst_47673);
var inst_47677 = inst_47676;
var state_47734__$1 = state_47734;
if(cljs.core.truth_(inst_47677)){
var statearr_47789_49168 = state_47734__$1;
(statearr_47789_49168[(1)] = (10));

} else {
var statearr_47790_49171 = state_47734__$1;
(statearr_47790_49171[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46077__auto__ = null;
var cljs$core$async$state_machine__46077__auto____0 = (function (){
var statearr_47793 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47793[(0)] = cljs$core$async$state_machine__46077__auto__);

(statearr_47793[(1)] = (1));

return statearr_47793;
});
var cljs$core$async$state_machine__46077__auto____1 = (function (state_47734){
while(true){
var ret_value__46078__auto__ = (function (){try{while(true){
var result__46079__auto__ = switch__46076__auto__(state_47734);
if(cljs.core.keyword_identical_QMARK_(result__46079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46079__auto__;
}
break;
}
}catch (e47794){var ex__46080__auto__ = e47794;
var statearr_47795_49174 = state_47734;
(statearr_47795_49174[(2)] = ex__46080__auto__);


if(cljs.core.seq((state_47734[(4)]))){
var statearr_47796_49175 = state_47734;
(statearr_47796_49175[(1)] = cljs.core.first((state_47734[(4)])));

} else {
throw ex__46080__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49177 = state_47734;
state_47734 = G__49177;
continue;
} else {
return ret_value__46078__auto__;
}
break;
}
});
cljs$core$async$state_machine__46077__auto__ = function(state_47734){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46077__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46077__auto____1.call(this,state_47734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46077__auto____0;
cljs$core$async$state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46077__auto____1;
return cljs$core$async$state_machine__46077__auto__;
})()
})();
var state__46246__auto__ = (function (){var statearr_47800 = f__46245__auto__();
(statearr_47800[(6)] = c__46243__auto___49107);

return statearr_47800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46246__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__47802 = arguments.length;
switch (G__47802) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__47808 = arguments.length;
switch (G__47808) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__47812 = arguments.length;
switch (G__47812) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__46243__auto___49203 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46245__auto__ = (function (){var switch__46076__auto__ = (function (state_47861){
var state_val_47862 = (state_47861[(1)]);
if((state_val_47862 === (7))){
var state_47861__$1 = state_47861;
var statearr_47865_49204 = state_47861__$1;
(statearr_47865_49204[(2)] = null);

(statearr_47865_49204[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47862 === (1))){
var state_47861__$1 = state_47861;
var statearr_47867_49206 = state_47861__$1;
(statearr_47867_49206[(2)] = null);

(statearr_47867_49206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47862 === (4))){
var inst_47820 = (state_47861[(7)]);
var inst_47819 = (state_47861[(8)]);
var inst_47822 = (inst_47820 < inst_47819);
var state_47861__$1 = state_47861;
if(cljs.core.truth_(inst_47822)){
var statearr_47868_49207 = state_47861__$1;
(statearr_47868_49207[(1)] = (6));

} else {
var statearr_47871_49208 = state_47861__$1;
(statearr_47871_49208[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47862 === (15))){
var inst_47847 = (state_47861[(9)]);
var inst_47852 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_47847);
var state_47861__$1 = state_47861;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47861__$1,(17),out,inst_47852);
} else {
if((state_val_47862 === (13))){
var inst_47847 = (state_47861[(9)]);
var inst_47847__$1 = (state_47861[(2)]);
var inst_47848 = cljs.core.some(cljs.core.nil_QMARK_,inst_47847__$1);
var state_47861__$1 = (function (){var statearr_47874 = state_47861;
(statearr_47874[(9)] = inst_47847__$1);

return statearr_47874;
})();
if(cljs.core.truth_(inst_47848)){
var statearr_47875_49213 = state_47861__$1;
(statearr_47875_49213[(1)] = (14));

} else {
var statearr_47878_49214 = state_47861__$1;
(statearr_47878_49214[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47862 === (6))){
var state_47861__$1 = state_47861;
var statearr_47879_49215 = state_47861__$1;
(statearr_47879_49215[(2)] = null);

(statearr_47879_49215[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47862 === (17))){
var inst_47854 = (state_47861[(2)]);
var state_47861__$1 = (function (){var statearr_47883 = state_47861;
(statearr_47883[(10)] = inst_47854);

return statearr_47883;
})();
var statearr_47884_49216 = state_47861__$1;
(statearr_47884_49216[(2)] = null);

(statearr_47884_49216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47862 === (3))){
var inst_47859 = (state_47861[(2)]);
var state_47861__$1 = state_47861;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47861__$1,inst_47859);
} else {
if((state_val_47862 === (12))){
var _ = (function (){var statearr_47885 = state_47861;
(statearr_47885[(4)] = cljs.core.rest((state_47861[(4)])));

return statearr_47885;
})();
var state_47861__$1 = state_47861;
var ex47882 = (state_47861__$1[(2)]);
var statearr_47886_49221 = state_47861__$1;
(statearr_47886_49221[(5)] = ex47882);


if((ex47882 instanceof Object)){
var statearr_47887_49222 = state_47861__$1;
(statearr_47887_49222[(1)] = (11));

(statearr_47887_49222[(5)] = null);

} else {
throw ex47882;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47862 === (2))){
var inst_47818 = cljs.core.reset_BANG_(dctr,cnt);
var inst_47819 = cnt;
var inst_47820 = (0);
var state_47861__$1 = (function (){var statearr_47889 = state_47861;
(statearr_47889[(7)] = inst_47820);

(statearr_47889[(11)] = inst_47818);

(statearr_47889[(8)] = inst_47819);

return statearr_47889;
})();
var statearr_47890_49229 = state_47861__$1;
(statearr_47890_49229[(2)] = null);

(statearr_47890_49229[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47862 === (11))){
var inst_47826 = (state_47861[(2)]);
var inst_47827 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_47861__$1 = (function (){var statearr_47892 = state_47861;
(statearr_47892[(12)] = inst_47826);

return statearr_47892;
})();
var statearr_47893_49236 = state_47861__$1;
(statearr_47893_49236[(2)] = inst_47827);

(statearr_47893_49236[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47862 === (9))){
var inst_47820 = (state_47861[(7)]);
var _ = (function (){var statearr_47894 = state_47861;
(statearr_47894[(4)] = cljs.core.cons((12),(state_47861[(4)])));

return statearr_47894;
})();
var inst_47833 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_47820) : chs__$1.call(null,inst_47820));
var inst_47834 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_47820) : done.call(null,inst_47820));
var inst_47835 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_47833,inst_47834);
var ___$1 = (function (){var statearr_47895 = state_47861;
(statearr_47895[(4)] = cljs.core.rest((state_47861[(4)])));

return statearr_47895;
})();
var state_47861__$1 = state_47861;
var statearr_47896_49240 = state_47861__$1;
(statearr_47896_49240[(2)] = inst_47835);

(statearr_47896_49240[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47862 === (5))){
var inst_47845 = (state_47861[(2)]);
var state_47861__$1 = (function (){var statearr_47898 = state_47861;
(statearr_47898[(13)] = inst_47845);

return statearr_47898;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47861__$1,(13),dchan);
} else {
if((state_val_47862 === (14))){
var inst_47850 = cljs.core.async.close_BANG_(out);
var state_47861__$1 = state_47861;
var statearr_47899_49244 = state_47861__$1;
(statearr_47899_49244[(2)] = inst_47850);

(statearr_47899_49244[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47862 === (16))){
var inst_47857 = (state_47861[(2)]);
var state_47861__$1 = state_47861;
var statearr_47900_49245 = state_47861__$1;
(statearr_47900_49245[(2)] = inst_47857);

(statearr_47900_49245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47862 === (10))){
var inst_47820 = (state_47861[(7)]);
var inst_47838 = (state_47861[(2)]);
var inst_47839 = (inst_47820 + (1));
var inst_47820__$1 = inst_47839;
var state_47861__$1 = (function (){var statearr_47901 = state_47861;
(statearr_47901[(7)] = inst_47820__$1);

(statearr_47901[(14)] = inst_47838);

return statearr_47901;
})();
var statearr_47902_49248 = state_47861__$1;
(statearr_47902_49248[(2)] = null);

(statearr_47902_49248[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47862 === (8))){
var inst_47843 = (state_47861[(2)]);
var state_47861__$1 = state_47861;
var statearr_47904_49249 = state_47861__$1;
(statearr_47904_49249[(2)] = inst_47843);

(statearr_47904_49249[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46077__auto__ = null;
var cljs$core$async$state_machine__46077__auto____0 = (function (){
var statearr_47905 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47905[(0)] = cljs$core$async$state_machine__46077__auto__);

(statearr_47905[(1)] = (1));

return statearr_47905;
});
var cljs$core$async$state_machine__46077__auto____1 = (function (state_47861){
while(true){
var ret_value__46078__auto__ = (function (){try{while(true){
var result__46079__auto__ = switch__46076__auto__(state_47861);
if(cljs.core.keyword_identical_QMARK_(result__46079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46079__auto__;
}
break;
}
}catch (e47906){var ex__46080__auto__ = e47906;
var statearr_47907_49250 = state_47861;
(statearr_47907_49250[(2)] = ex__46080__auto__);


if(cljs.core.seq((state_47861[(4)]))){
var statearr_47908_49251 = state_47861;
(statearr_47908_49251[(1)] = cljs.core.first((state_47861[(4)])));

} else {
throw ex__46080__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49252 = state_47861;
state_47861 = G__49252;
continue;
} else {
return ret_value__46078__auto__;
}
break;
}
});
cljs$core$async$state_machine__46077__auto__ = function(state_47861){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46077__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46077__auto____1.call(this,state_47861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46077__auto____0;
cljs$core$async$state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46077__auto____1;
return cljs$core$async$state_machine__46077__auto__;
})()
})();
var state__46246__auto__ = (function (){var statearr_47910 = f__46245__auto__();
(statearr_47910[(6)] = c__46243__auto___49203);

return statearr_47910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46246__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__47913 = arguments.length;
switch (G__47913) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46243__auto___49260 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46245__auto__ = (function (){var switch__46076__auto__ = (function (state_47947){
var state_val_47948 = (state_47947[(1)]);
if((state_val_47948 === (7))){
var inst_47926 = (state_47947[(7)]);
var inst_47927 = (state_47947[(8)]);
var inst_47926__$1 = (state_47947[(2)]);
var inst_47927__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47926__$1,(0),null);
var inst_47928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47926__$1,(1),null);
var inst_47929 = (inst_47927__$1 == null);
var state_47947__$1 = (function (){var statearr_47949 = state_47947;
(statearr_47949[(7)] = inst_47926__$1);

(statearr_47949[(8)] = inst_47927__$1);

(statearr_47949[(9)] = inst_47928);

return statearr_47949;
})();
if(cljs.core.truth_(inst_47929)){
var statearr_47950_49265 = state_47947__$1;
(statearr_47950_49265[(1)] = (8));

} else {
var statearr_47951_49268 = state_47947__$1;
(statearr_47951_49268[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47948 === (1))){
var inst_47915 = cljs.core.vec(chs);
var inst_47916 = inst_47915;
var state_47947__$1 = (function (){var statearr_47953 = state_47947;
(statearr_47953[(10)] = inst_47916);

return statearr_47953;
})();
var statearr_47954_49271 = state_47947__$1;
(statearr_47954_49271[(2)] = null);

(statearr_47954_49271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47948 === (4))){
var inst_47916 = (state_47947[(10)]);
var state_47947__$1 = state_47947;
return cljs.core.async.ioc_alts_BANG_(state_47947__$1,(7),inst_47916);
} else {
if((state_val_47948 === (6))){
var inst_47943 = (state_47947[(2)]);
var state_47947__$1 = state_47947;
var statearr_47955_49276 = state_47947__$1;
(statearr_47955_49276[(2)] = inst_47943);

(statearr_47955_49276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47948 === (3))){
var inst_47945 = (state_47947[(2)]);
var state_47947__$1 = state_47947;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47947__$1,inst_47945);
} else {
if((state_val_47948 === (2))){
var inst_47916 = (state_47947[(10)]);
var inst_47918 = cljs.core.count(inst_47916);
var inst_47919 = (inst_47918 > (0));
var state_47947__$1 = state_47947;
if(cljs.core.truth_(inst_47919)){
var statearr_47957_49277 = state_47947__$1;
(statearr_47957_49277[(1)] = (4));

} else {
var statearr_47959_49278 = state_47947__$1;
(statearr_47959_49278[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47948 === (11))){
var inst_47916 = (state_47947[(10)]);
var inst_47936 = (state_47947[(2)]);
var tmp47956 = inst_47916;
var inst_47916__$1 = tmp47956;
var state_47947__$1 = (function (){var statearr_47967 = state_47947;
(statearr_47967[(11)] = inst_47936);

(statearr_47967[(10)] = inst_47916__$1);

return statearr_47967;
})();
var statearr_47968_49279 = state_47947__$1;
(statearr_47968_49279[(2)] = null);

(statearr_47968_49279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47948 === (9))){
var inst_47927 = (state_47947[(8)]);
var state_47947__$1 = state_47947;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47947__$1,(11),out,inst_47927);
} else {
if((state_val_47948 === (5))){
var inst_47941 = cljs.core.async.close_BANG_(out);
var state_47947__$1 = state_47947;
var statearr_47969_49284 = state_47947__$1;
(statearr_47969_49284[(2)] = inst_47941);

(statearr_47969_49284[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47948 === (10))){
var inst_47939 = (state_47947[(2)]);
var state_47947__$1 = state_47947;
var statearr_47970_49286 = state_47947__$1;
(statearr_47970_49286[(2)] = inst_47939);

(statearr_47970_49286[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47948 === (8))){
var inst_47926 = (state_47947[(7)]);
var inst_47927 = (state_47947[(8)]);
var inst_47916 = (state_47947[(10)]);
var inst_47928 = (state_47947[(9)]);
var inst_47931 = (function (){var cs = inst_47916;
var vec__47921 = inst_47926;
var v = inst_47927;
var c = inst_47928;
return (function (p1__47911_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__47911_SHARP_);
});
})();
var inst_47932 = cljs.core.filterv(inst_47931,inst_47916);
var inst_47916__$1 = inst_47932;
var state_47947__$1 = (function (){var statearr_47971 = state_47947;
(statearr_47971[(10)] = inst_47916__$1);

return statearr_47971;
})();
var statearr_47972_49293 = state_47947__$1;
(statearr_47972_49293[(2)] = null);

(statearr_47972_49293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46077__auto__ = null;
var cljs$core$async$state_machine__46077__auto____0 = (function (){
var statearr_47973 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47973[(0)] = cljs$core$async$state_machine__46077__auto__);

(statearr_47973[(1)] = (1));

return statearr_47973;
});
var cljs$core$async$state_machine__46077__auto____1 = (function (state_47947){
while(true){
var ret_value__46078__auto__ = (function (){try{while(true){
var result__46079__auto__ = switch__46076__auto__(state_47947);
if(cljs.core.keyword_identical_QMARK_(result__46079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46079__auto__;
}
break;
}
}catch (e47974){var ex__46080__auto__ = e47974;
var statearr_47976_49298 = state_47947;
(statearr_47976_49298[(2)] = ex__46080__auto__);


if(cljs.core.seq((state_47947[(4)]))){
var statearr_47977_49299 = state_47947;
(statearr_47977_49299[(1)] = cljs.core.first((state_47947[(4)])));

} else {
throw ex__46080__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49300 = state_47947;
state_47947 = G__49300;
continue;
} else {
return ret_value__46078__auto__;
}
break;
}
});
cljs$core$async$state_machine__46077__auto__ = function(state_47947){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46077__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46077__auto____1.call(this,state_47947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46077__auto____0;
cljs$core$async$state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46077__auto____1;
return cljs$core$async$state_machine__46077__auto__;
})()
})();
var state__46246__auto__ = (function (){var statearr_47978 = f__46245__auto__();
(statearr_47978[(6)] = c__46243__auto___49260);

return statearr_47978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46246__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__47980 = arguments.length;
switch (G__47980) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46243__auto___49306 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46245__auto__ = (function (){var switch__46076__auto__ = (function (state_48004){
var state_val_48005 = (state_48004[(1)]);
if((state_val_48005 === (7))){
var inst_47986 = (state_48004[(7)]);
var inst_47986__$1 = (state_48004[(2)]);
var inst_47987 = (inst_47986__$1 == null);
var inst_47988 = cljs.core.not(inst_47987);
var state_48004__$1 = (function (){var statearr_48006 = state_48004;
(statearr_48006[(7)] = inst_47986__$1);

return statearr_48006;
})();
if(inst_47988){
var statearr_48007_49307 = state_48004__$1;
(statearr_48007_49307[(1)] = (8));

} else {
var statearr_48008_49308 = state_48004__$1;
(statearr_48008_49308[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48005 === (1))){
var inst_47981 = (0);
var state_48004__$1 = (function (){var statearr_48009 = state_48004;
(statearr_48009[(8)] = inst_47981);

return statearr_48009;
})();
var statearr_48010_49311 = state_48004__$1;
(statearr_48010_49311[(2)] = null);

(statearr_48010_49311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48005 === (4))){
var state_48004__$1 = state_48004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48004__$1,(7),ch);
} else {
if((state_val_48005 === (6))){
var inst_47999 = (state_48004[(2)]);
var state_48004__$1 = state_48004;
var statearr_48011_49314 = state_48004__$1;
(statearr_48011_49314[(2)] = inst_47999);

(statearr_48011_49314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48005 === (3))){
var inst_48001 = (state_48004[(2)]);
var inst_48002 = cljs.core.async.close_BANG_(out);
var state_48004__$1 = (function (){var statearr_48012 = state_48004;
(statearr_48012[(9)] = inst_48001);

return statearr_48012;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48004__$1,inst_48002);
} else {
if((state_val_48005 === (2))){
var inst_47981 = (state_48004[(8)]);
var inst_47983 = (inst_47981 < n);
var state_48004__$1 = state_48004;
if(cljs.core.truth_(inst_47983)){
var statearr_48013_49315 = state_48004__$1;
(statearr_48013_49315[(1)] = (4));

} else {
var statearr_48014_49316 = state_48004__$1;
(statearr_48014_49316[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48005 === (11))){
var inst_47981 = (state_48004[(8)]);
var inst_47991 = (state_48004[(2)]);
var inst_47992 = (inst_47981 + (1));
var inst_47981__$1 = inst_47992;
var state_48004__$1 = (function (){var statearr_48016 = state_48004;
(statearr_48016[(8)] = inst_47981__$1);

(statearr_48016[(10)] = inst_47991);

return statearr_48016;
})();
var statearr_48017_49320 = state_48004__$1;
(statearr_48017_49320[(2)] = null);

(statearr_48017_49320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48005 === (9))){
var state_48004__$1 = state_48004;
var statearr_48018_49321 = state_48004__$1;
(statearr_48018_49321[(2)] = null);

(statearr_48018_49321[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48005 === (5))){
var state_48004__$1 = state_48004;
var statearr_48019_49322 = state_48004__$1;
(statearr_48019_49322[(2)] = null);

(statearr_48019_49322[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48005 === (10))){
var inst_47996 = (state_48004[(2)]);
var state_48004__$1 = state_48004;
var statearr_48020_49323 = state_48004__$1;
(statearr_48020_49323[(2)] = inst_47996);

(statearr_48020_49323[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48005 === (8))){
var inst_47986 = (state_48004[(7)]);
var state_48004__$1 = state_48004;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48004__$1,(11),out,inst_47986);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46077__auto__ = null;
var cljs$core$async$state_machine__46077__auto____0 = (function (){
var statearr_48021 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48021[(0)] = cljs$core$async$state_machine__46077__auto__);

(statearr_48021[(1)] = (1));

return statearr_48021;
});
var cljs$core$async$state_machine__46077__auto____1 = (function (state_48004){
while(true){
var ret_value__46078__auto__ = (function (){try{while(true){
var result__46079__auto__ = switch__46076__auto__(state_48004);
if(cljs.core.keyword_identical_QMARK_(result__46079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46079__auto__;
}
break;
}
}catch (e48022){var ex__46080__auto__ = e48022;
var statearr_48023_49330 = state_48004;
(statearr_48023_49330[(2)] = ex__46080__auto__);


if(cljs.core.seq((state_48004[(4)]))){
var statearr_48024_49331 = state_48004;
(statearr_48024_49331[(1)] = cljs.core.first((state_48004[(4)])));

} else {
throw ex__46080__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49332 = state_48004;
state_48004 = G__49332;
continue;
} else {
return ret_value__46078__auto__;
}
break;
}
});
cljs$core$async$state_machine__46077__auto__ = function(state_48004){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46077__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46077__auto____1.call(this,state_48004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46077__auto____0;
cljs$core$async$state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46077__auto____1;
return cljs$core$async$state_machine__46077__auto__;
})()
})();
var state__46246__auto__ = (function (){var statearr_48025 = f__46245__auto__();
(statearr_48025[(6)] = c__46243__auto___49306);

return statearr_48025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46246__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48027 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48027 = (function (f,ch,meta48028){
this.f = f;
this.ch = ch;
this.meta48028 = meta48028;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48029,meta48028__$1){
var self__ = this;
var _48029__$1 = this;
return (new cljs.core.async.t_cljs$core$async48027(self__.f,self__.ch,meta48028__$1));
}));

(cljs.core.async.t_cljs$core$async48027.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48029){
var self__ = this;
var _48029__$1 = this;
return self__.meta48028;
}));

(cljs.core.async.t_cljs$core$async48027.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48027.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48027.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48027.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48027.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48030 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48030 = (function (f,ch,meta48028,_,fn1,meta48031){
this.f = f;
this.ch = ch;
this.meta48028 = meta48028;
this._ = _;
this.fn1 = fn1;
this.meta48031 = meta48031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48032,meta48031__$1){
var self__ = this;
var _48032__$1 = this;
return (new cljs.core.async.t_cljs$core$async48030(self__.f,self__.ch,self__.meta48028,self__._,self__.fn1,meta48031__$1));
}));

(cljs.core.async.t_cljs$core$async48030.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48032){
var self__ = this;
var _48032__$1 = this;
return self__.meta48031;
}));

(cljs.core.async.t_cljs$core$async48030.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48030.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async48030.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48030.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__48026_SHARP_){
var G__48033 = (((p1__48026_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__48026_SHARP_) : self__.f.call(null,p1__48026_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__48033) : f1.call(null,G__48033));
});
}));

(cljs.core.async.t_cljs$core$async48030.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48028","meta48028",474780202,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48027","cljs.core.async/t_cljs$core$async48027",-635048374,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48031","meta48031",549339950,null)], null);
}));

(cljs.core.async.t_cljs$core$async48030.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48030.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48030");

(cljs.core.async.t_cljs$core$async48030.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async48030");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48030.
 */
cljs.core.async.__GT_t_cljs$core$async48030 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48030(f__$1,ch__$1,meta48028__$1,___$2,fn1__$1,meta48031){
return (new cljs.core.async.t_cljs$core$async48030(f__$1,ch__$1,meta48028__$1,___$2,fn1__$1,meta48031));
});

}

return (new cljs.core.async.t_cljs$core$async48030(self__.f,self__.ch,self__.meta48028,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4149__auto__ = ret;
if(cljs.core.truth_(and__4149__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4149__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__48034 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__48034) : self__.f.call(null,G__48034));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async48027.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48027.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async48027.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48028","meta48028",474780202,null)], null);
}));

(cljs.core.async.t_cljs$core$async48027.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48027.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48027");

(cljs.core.async.t_cljs$core$async48027.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async48027");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48027.
 */
cljs.core.async.__GT_t_cljs$core$async48027 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48027(f__$1,ch__$1,meta48028){
return (new cljs.core.async.t_cljs$core$async48027(f__$1,ch__$1,meta48028));
});

}

return (new cljs.core.async.t_cljs$core$async48027(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48037 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48037 = (function (f,ch,meta48038){
this.f = f;
this.ch = ch;
this.meta48038 = meta48038;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48039,meta48038__$1){
var self__ = this;
var _48039__$1 = this;
return (new cljs.core.async.t_cljs$core$async48037(self__.f,self__.ch,meta48038__$1));
}));

(cljs.core.async.t_cljs$core$async48037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48039){
var self__ = this;
var _48039__$1 = this;
return self__.meta48038;
}));

(cljs.core.async.t_cljs$core$async48037.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48037.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48037.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48037.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async48037.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48037.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async48037.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48038","meta48038",-230786645,null)], null);
}));

(cljs.core.async.t_cljs$core$async48037.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48037.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48037");

(cljs.core.async.t_cljs$core$async48037.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async48037");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48037.
 */
cljs.core.async.__GT_t_cljs$core$async48037 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async48037(f__$1,ch__$1,meta48038){
return (new cljs.core.async.t_cljs$core$async48037(f__$1,ch__$1,meta48038));
});

}

return (new cljs.core.async.t_cljs$core$async48037(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48040 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48040 = (function (p,ch,meta48041){
this.p = p;
this.ch = ch;
this.meta48041 = meta48041;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48042,meta48041__$1){
var self__ = this;
var _48042__$1 = this;
return (new cljs.core.async.t_cljs$core$async48040(self__.p,self__.ch,meta48041__$1));
}));

(cljs.core.async.t_cljs$core$async48040.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48042){
var self__ = this;
var _48042__$1 = this;
return self__.meta48041;
}));

(cljs.core.async.t_cljs$core$async48040.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48040.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48040.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48040.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48040.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async48040.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48040.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async48040.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48041","meta48041",1360873128,null)], null);
}));

(cljs.core.async.t_cljs$core$async48040.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48040.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48040");

(cljs.core.async.t_cljs$core$async48040.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async48040");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48040.
 */
cljs.core.async.__GT_t_cljs$core$async48040 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async48040(p__$1,ch__$1,meta48041){
return (new cljs.core.async.t_cljs$core$async48040(p__$1,ch__$1,meta48041));
});

}

return (new cljs.core.async.t_cljs$core$async48040(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__48047 = arguments.length;
switch (G__48047) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46243__auto___49367 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46245__auto__ = (function (){var switch__46076__auto__ = (function (state_48069){
var state_val_48070 = (state_48069[(1)]);
if((state_val_48070 === (7))){
var inst_48065 = (state_48069[(2)]);
var state_48069__$1 = state_48069;
var statearr_48071_49368 = state_48069__$1;
(statearr_48071_49368[(2)] = inst_48065);

(statearr_48071_49368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48070 === (1))){
var state_48069__$1 = state_48069;
var statearr_48072_49369 = state_48069__$1;
(statearr_48072_49369[(2)] = null);

(statearr_48072_49369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48070 === (4))){
var inst_48051 = (state_48069[(7)]);
var inst_48051__$1 = (state_48069[(2)]);
var inst_48052 = (inst_48051__$1 == null);
var state_48069__$1 = (function (){var statearr_48073 = state_48069;
(statearr_48073[(7)] = inst_48051__$1);

return statearr_48073;
})();
if(cljs.core.truth_(inst_48052)){
var statearr_48074_49371 = state_48069__$1;
(statearr_48074_49371[(1)] = (5));

} else {
var statearr_48075_49372 = state_48069__$1;
(statearr_48075_49372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48070 === (6))){
var inst_48051 = (state_48069[(7)]);
var inst_48056 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_48051) : p.call(null,inst_48051));
var state_48069__$1 = state_48069;
if(cljs.core.truth_(inst_48056)){
var statearr_48076_49373 = state_48069__$1;
(statearr_48076_49373[(1)] = (8));

} else {
var statearr_48077_49374 = state_48069__$1;
(statearr_48077_49374[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48070 === (3))){
var inst_48067 = (state_48069[(2)]);
var state_48069__$1 = state_48069;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48069__$1,inst_48067);
} else {
if((state_val_48070 === (2))){
var state_48069__$1 = state_48069;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48069__$1,(4),ch);
} else {
if((state_val_48070 === (11))){
var inst_48059 = (state_48069[(2)]);
var state_48069__$1 = state_48069;
var statearr_48078_49375 = state_48069__$1;
(statearr_48078_49375[(2)] = inst_48059);

(statearr_48078_49375[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48070 === (9))){
var state_48069__$1 = state_48069;
var statearr_48079_49376 = state_48069__$1;
(statearr_48079_49376[(2)] = null);

(statearr_48079_49376[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48070 === (5))){
var inst_48054 = cljs.core.async.close_BANG_(out);
var state_48069__$1 = state_48069;
var statearr_48080_49377 = state_48069__$1;
(statearr_48080_49377[(2)] = inst_48054);

(statearr_48080_49377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48070 === (10))){
var inst_48062 = (state_48069[(2)]);
var state_48069__$1 = (function (){var statearr_48081 = state_48069;
(statearr_48081[(8)] = inst_48062);

return statearr_48081;
})();
var statearr_48082_49378 = state_48069__$1;
(statearr_48082_49378[(2)] = null);

(statearr_48082_49378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48070 === (8))){
var inst_48051 = (state_48069[(7)]);
var state_48069__$1 = state_48069;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48069__$1,(11),out,inst_48051);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46077__auto__ = null;
var cljs$core$async$state_machine__46077__auto____0 = (function (){
var statearr_48083 = [null,null,null,null,null,null,null,null,null];
(statearr_48083[(0)] = cljs$core$async$state_machine__46077__auto__);

(statearr_48083[(1)] = (1));

return statearr_48083;
});
var cljs$core$async$state_machine__46077__auto____1 = (function (state_48069){
while(true){
var ret_value__46078__auto__ = (function (){try{while(true){
var result__46079__auto__ = switch__46076__auto__(state_48069);
if(cljs.core.keyword_identical_QMARK_(result__46079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46079__auto__;
}
break;
}
}catch (e48084){var ex__46080__auto__ = e48084;
var statearr_48085_49379 = state_48069;
(statearr_48085_49379[(2)] = ex__46080__auto__);


if(cljs.core.seq((state_48069[(4)]))){
var statearr_48086_49380 = state_48069;
(statearr_48086_49380[(1)] = cljs.core.first((state_48069[(4)])));

} else {
throw ex__46080__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49382 = state_48069;
state_48069 = G__49382;
continue;
} else {
return ret_value__46078__auto__;
}
break;
}
});
cljs$core$async$state_machine__46077__auto__ = function(state_48069){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46077__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46077__auto____1.call(this,state_48069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46077__auto____0;
cljs$core$async$state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46077__auto____1;
return cljs$core$async$state_machine__46077__auto__;
})()
})();
var state__46246__auto__ = (function (){var statearr_48087 = f__46245__auto__();
(statearr_48087[(6)] = c__46243__auto___49367);

return statearr_48087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46246__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__48089 = arguments.length;
switch (G__48089) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__46243__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46245__auto__ = (function (){var switch__46076__auto__ = (function (state_48151){
var state_val_48152 = (state_48151[(1)]);
if((state_val_48152 === (7))){
var inst_48147 = (state_48151[(2)]);
var state_48151__$1 = state_48151;
var statearr_48153_49385 = state_48151__$1;
(statearr_48153_49385[(2)] = inst_48147);

(statearr_48153_49385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48152 === (20))){
var inst_48117 = (state_48151[(7)]);
var inst_48128 = (state_48151[(2)]);
var inst_48129 = cljs.core.next(inst_48117);
var inst_48103 = inst_48129;
var inst_48104 = null;
var inst_48105 = (0);
var inst_48106 = (0);
var state_48151__$1 = (function (){var statearr_48154 = state_48151;
(statearr_48154[(8)] = inst_48105);

(statearr_48154[(9)] = inst_48104);

(statearr_48154[(10)] = inst_48106);

(statearr_48154[(11)] = inst_48128);

(statearr_48154[(12)] = inst_48103);

return statearr_48154;
})();
var statearr_48155_49386 = state_48151__$1;
(statearr_48155_49386[(2)] = null);

(statearr_48155_49386[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48152 === (1))){
var state_48151__$1 = state_48151;
var statearr_48156_49387 = state_48151__$1;
(statearr_48156_49387[(2)] = null);

(statearr_48156_49387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48152 === (4))){
var inst_48092 = (state_48151[(13)]);
var inst_48092__$1 = (state_48151[(2)]);
var inst_48093 = (inst_48092__$1 == null);
var state_48151__$1 = (function (){var statearr_48157 = state_48151;
(statearr_48157[(13)] = inst_48092__$1);

return statearr_48157;
})();
if(cljs.core.truth_(inst_48093)){
var statearr_48158_49388 = state_48151__$1;
(statearr_48158_49388[(1)] = (5));

} else {
var statearr_48159_49389 = state_48151__$1;
(statearr_48159_49389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48152 === (15))){
var state_48151__$1 = state_48151;
var statearr_48163_49390 = state_48151__$1;
(statearr_48163_49390[(2)] = null);

(statearr_48163_49390[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48152 === (21))){
var state_48151__$1 = state_48151;
var statearr_48164_49391 = state_48151__$1;
(statearr_48164_49391[(2)] = null);

(statearr_48164_49391[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48152 === (13))){
var inst_48105 = (state_48151[(8)]);
var inst_48104 = (state_48151[(9)]);
var inst_48106 = (state_48151[(10)]);
var inst_48103 = (state_48151[(12)]);
var inst_48113 = (state_48151[(2)]);
var inst_48114 = (inst_48106 + (1));
var tmp48160 = inst_48105;
var tmp48161 = inst_48104;
var tmp48162 = inst_48103;
var inst_48103__$1 = tmp48162;
var inst_48104__$1 = tmp48161;
var inst_48105__$1 = tmp48160;
var inst_48106__$1 = inst_48114;
var state_48151__$1 = (function (){var statearr_48165 = state_48151;
(statearr_48165[(8)] = inst_48105__$1);

(statearr_48165[(9)] = inst_48104__$1);

(statearr_48165[(10)] = inst_48106__$1);

(statearr_48165[(14)] = inst_48113);

(statearr_48165[(12)] = inst_48103__$1);

return statearr_48165;
})();
var statearr_48166_49399 = state_48151__$1;
(statearr_48166_49399[(2)] = null);

(statearr_48166_49399[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48152 === (22))){
var state_48151__$1 = state_48151;
var statearr_48167_49400 = state_48151__$1;
(statearr_48167_49400[(2)] = null);

(statearr_48167_49400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48152 === (6))){
var inst_48092 = (state_48151[(13)]);
var inst_48101 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_48092) : f.call(null,inst_48092));
var inst_48102 = cljs.core.seq(inst_48101);
var inst_48103 = inst_48102;
var inst_48104 = null;
var inst_48105 = (0);
var inst_48106 = (0);
var state_48151__$1 = (function (){var statearr_48169 = state_48151;
(statearr_48169[(8)] = inst_48105);

(statearr_48169[(9)] = inst_48104);

(statearr_48169[(10)] = inst_48106);

(statearr_48169[(12)] = inst_48103);

return statearr_48169;
})();
var statearr_48171_49402 = state_48151__$1;
(statearr_48171_49402[(2)] = null);

(statearr_48171_49402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48152 === (17))){
var inst_48117 = (state_48151[(7)]);
var inst_48121 = cljs.core.chunk_first(inst_48117);
var inst_48122 = cljs.core.chunk_rest(inst_48117);
var inst_48123 = cljs.core.count(inst_48121);
var inst_48103 = inst_48122;
var inst_48104 = inst_48121;
var inst_48105 = inst_48123;
var inst_48106 = (0);
var state_48151__$1 = (function (){var statearr_48172 = state_48151;
(statearr_48172[(8)] = inst_48105);

(statearr_48172[(9)] = inst_48104);

(statearr_48172[(10)] = inst_48106);

(statearr_48172[(12)] = inst_48103);

return statearr_48172;
})();
var statearr_48173_49403 = state_48151__$1;
(statearr_48173_49403[(2)] = null);

(statearr_48173_49403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48152 === (3))){
var inst_48149 = (state_48151[(2)]);
var state_48151__$1 = state_48151;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48151__$1,inst_48149);
} else {
if((state_val_48152 === (12))){
var inst_48137 = (state_48151[(2)]);
var state_48151__$1 = state_48151;
var statearr_48174_49405 = state_48151__$1;
(statearr_48174_49405[(2)] = inst_48137);

(statearr_48174_49405[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48152 === (2))){
var state_48151__$1 = state_48151;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48151__$1,(4),in$);
} else {
if((state_val_48152 === (23))){
var inst_48145 = (state_48151[(2)]);
var state_48151__$1 = state_48151;
var statearr_48176_49406 = state_48151__$1;
(statearr_48176_49406[(2)] = inst_48145);

(statearr_48176_49406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48152 === (19))){
var inst_48132 = (state_48151[(2)]);
var state_48151__$1 = state_48151;
var statearr_48178_49409 = state_48151__$1;
(statearr_48178_49409[(2)] = inst_48132);

(statearr_48178_49409[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48152 === (11))){
var inst_48117 = (state_48151[(7)]);
var inst_48103 = (state_48151[(12)]);
var inst_48117__$1 = cljs.core.seq(inst_48103);
var state_48151__$1 = (function (){var statearr_48179 = state_48151;
(statearr_48179[(7)] = inst_48117__$1);

return statearr_48179;
})();
if(inst_48117__$1){
var statearr_48180_49410 = state_48151__$1;
(statearr_48180_49410[(1)] = (14));

} else {
var statearr_48181_49413 = state_48151__$1;
(statearr_48181_49413[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48152 === (9))){
var inst_48139 = (state_48151[(2)]);
var inst_48140 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_48151__$1 = (function (){var statearr_48182 = state_48151;
(statearr_48182[(15)] = inst_48139);

return statearr_48182;
})();
if(cljs.core.truth_(inst_48140)){
var statearr_48183_49417 = state_48151__$1;
(statearr_48183_49417[(1)] = (21));

} else {
var statearr_48185_49418 = state_48151__$1;
(statearr_48185_49418[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48152 === (5))){
var inst_48095 = cljs.core.async.close_BANG_(out);
var state_48151__$1 = state_48151;
var statearr_48186_49419 = state_48151__$1;
(statearr_48186_49419[(2)] = inst_48095);

(statearr_48186_49419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48152 === (14))){
var inst_48117 = (state_48151[(7)]);
var inst_48119 = cljs.core.chunked_seq_QMARK_(inst_48117);
var state_48151__$1 = state_48151;
if(inst_48119){
var statearr_48187_49420 = state_48151__$1;
(statearr_48187_49420[(1)] = (17));

} else {
var statearr_48188_49421 = state_48151__$1;
(statearr_48188_49421[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48152 === (16))){
var inst_48135 = (state_48151[(2)]);
var state_48151__$1 = state_48151;
var statearr_48189_49422 = state_48151__$1;
(statearr_48189_49422[(2)] = inst_48135);

(statearr_48189_49422[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48152 === (10))){
var inst_48104 = (state_48151[(9)]);
var inst_48106 = (state_48151[(10)]);
var inst_48111 = cljs.core._nth(inst_48104,inst_48106);
var state_48151__$1 = state_48151;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48151__$1,(13),out,inst_48111);
} else {
if((state_val_48152 === (18))){
var inst_48117 = (state_48151[(7)]);
var inst_48126 = cljs.core.first(inst_48117);
var state_48151__$1 = state_48151;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48151__$1,(20),out,inst_48126);
} else {
if((state_val_48152 === (8))){
var inst_48105 = (state_48151[(8)]);
var inst_48106 = (state_48151[(10)]);
var inst_48108 = (inst_48106 < inst_48105);
var inst_48109 = inst_48108;
var state_48151__$1 = state_48151;
if(cljs.core.truth_(inst_48109)){
var statearr_48190_49424 = state_48151__$1;
(statearr_48190_49424[(1)] = (10));

} else {
var statearr_48191_49425 = state_48151__$1;
(statearr_48191_49425[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__46077__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__46077__auto____0 = (function (){
var statearr_48192 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48192[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__46077__auto__);

(statearr_48192[(1)] = (1));

return statearr_48192;
});
var cljs$core$async$mapcat_STAR__$_state_machine__46077__auto____1 = (function (state_48151){
while(true){
var ret_value__46078__auto__ = (function (){try{while(true){
var result__46079__auto__ = switch__46076__auto__(state_48151);
if(cljs.core.keyword_identical_QMARK_(result__46079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46079__auto__;
}
break;
}
}catch (e48193){var ex__46080__auto__ = e48193;
var statearr_48194_49428 = state_48151;
(statearr_48194_49428[(2)] = ex__46080__auto__);


if(cljs.core.seq((state_48151[(4)]))){
var statearr_48195_49432 = state_48151;
(statearr_48195_49432[(1)] = cljs.core.first((state_48151[(4)])));

} else {
throw ex__46080__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49433 = state_48151;
state_48151 = G__49433;
continue;
} else {
return ret_value__46078__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__46077__auto__ = function(state_48151){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__46077__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__46077__auto____1.call(this,state_48151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__46077__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__46077__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__46077__auto__;
})()
})();
var state__46246__auto__ = (function (){var statearr_48196 = f__46245__auto__();
(statearr_48196[(6)] = c__46243__auto__);

return statearr_48196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46246__auto__);
}));

return c__46243__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__48198 = arguments.length;
switch (G__48198) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__48200 = arguments.length;
switch (G__48200) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__48202 = arguments.length;
switch (G__48202) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46243__auto___49447 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46245__auto__ = (function (){var switch__46076__auto__ = (function (state_48226){
var state_val_48227 = (state_48226[(1)]);
if((state_val_48227 === (7))){
var inst_48221 = (state_48226[(2)]);
var state_48226__$1 = state_48226;
var statearr_48228_49449 = state_48226__$1;
(statearr_48228_49449[(2)] = inst_48221);

(statearr_48228_49449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (1))){
var inst_48203 = null;
var state_48226__$1 = (function (){var statearr_48229 = state_48226;
(statearr_48229[(7)] = inst_48203);

return statearr_48229;
})();
var statearr_48230_49456 = state_48226__$1;
(statearr_48230_49456[(2)] = null);

(statearr_48230_49456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (4))){
var inst_48206 = (state_48226[(8)]);
var inst_48206__$1 = (state_48226[(2)]);
var inst_48207 = (inst_48206__$1 == null);
var inst_48208 = cljs.core.not(inst_48207);
var state_48226__$1 = (function (){var statearr_48232 = state_48226;
(statearr_48232[(8)] = inst_48206__$1);

return statearr_48232;
})();
if(inst_48208){
var statearr_48233_49461 = state_48226__$1;
(statearr_48233_49461[(1)] = (5));

} else {
var statearr_48234_49462 = state_48226__$1;
(statearr_48234_49462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (6))){
var state_48226__$1 = state_48226;
var statearr_48235_49464 = state_48226__$1;
(statearr_48235_49464[(2)] = null);

(statearr_48235_49464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (3))){
var inst_48223 = (state_48226[(2)]);
var inst_48224 = cljs.core.async.close_BANG_(out);
var state_48226__$1 = (function (){var statearr_48236 = state_48226;
(statearr_48236[(9)] = inst_48223);

return statearr_48236;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48226__$1,inst_48224);
} else {
if((state_val_48227 === (2))){
var state_48226__$1 = state_48226;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48226__$1,(4),ch);
} else {
if((state_val_48227 === (11))){
var inst_48206 = (state_48226[(8)]);
var inst_48215 = (state_48226[(2)]);
var inst_48203 = inst_48206;
var state_48226__$1 = (function (){var statearr_48238 = state_48226;
(statearr_48238[(7)] = inst_48203);

(statearr_48238[(10)] = inst_48215);

return statearr_48238;
})();
var statearr_48239_49473 = state_48226__$1;
(statearr_48239_49473[(2)] = null);

(statearr_48239_49473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (9))){
var inst_48206 = (state_48226[(8)]);
var state_48226__$1 = state_48226;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48226__$1,(11),out,inst_48206);
} else {
if((state_val_48227 === (5))){
var inst_48206 = (state_48226[(8)]);
var inst_48203 = (state_48226[(7)]);
var inst_48210 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48206,inst_48203);
var state_48226__$1 = state_48226;
if(inst_48210){
var statearr_48242_49474 = state_48226__$1;
(statearr_48242_49474[(1)] = (8));

} else {
var statearr_48243_49476 = state_48226__$1;
(statearr_48243_49476[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (10))){
var inst_48218 = (state_48226[(2)]);
var state_48226__$1 = state_48226;
var statearr_48244_49477 = state_48226__$1;
(statearr_48244_49477[(2)] = inst_48218);

(statearr_48244_49477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (8))){
var inst_48203 = (state_48226[(7)]);
var tmp48241 = inst_48203;
var inst_48203__$1 = tmp48241;
var state_48226__$1 = (function (){var statearr_48245 = state_48226;
(statearr_48245[(7)] = inst_48203__$1);

return statearr_48245;
})();
var statearr_48246_49479 = state_48226__$1;
(statearr_48246_49479[(2)] = null);

(statearr_48246_49479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46077__auto__ = null;
var cljs$core$async$state_machine__46077__auto____0 = (function (){
var statearr_48247 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48247[(0)] = cljs$core$async$state_machine__46077__auto__);

(statearr_48247[(1)] = (1));

return statearr_48247;
});
var cljs$core$async$state_machine__46077__auto____1 = (function (state_48226){
while(true){
var ret_value__46078__auto__ = (function (){try{while(true){
var result__46079__auto__ = switch__46076__auto__(state_48226);
if(cljs.core.keyword_identical_QMARK_(result__46079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46079__auto__;
}
break;
}
}catch (e48248){var ex__46080__auto__ = e48248;
var statearr_48249_49481 = state_48226;
(statearr_48249_49481[(2)] = ex__46080__auto__);


if(cljs.core.seq((state_48226[(4)]))){
var statearr_48250_49482 = state_48226;
(statearr_48250_49482[(1)] = cljs.core.first((state_48226[(4)])));

} else {
throw ex__46080__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49488 = state_48226;
state_48226 = G__49488;
continue;
} else {
return ret_value__46078__auto__;
}
break;
}
});
cljs$core$async$state_machine__46077__auto__ = function(state_48226){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46077__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46077__auto____1.call(this,state_48226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46077__auto____0;
cljs$core$async$state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46077__auto____1;
return cljs$core$async$state_machine__46077__auto__;
})()
})();
var state__46246__auto__ = (function (){var statearr_48251 = f__46245__auto__();
(statearr_48251[(6)] = c__46243__auto___49447);

return statearr_48251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46246__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__48253 = arguments.length;
switch (G__48253) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46243__auto___49499 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46245__auto__ = (function (){var switch__46076__auto__ = (function (state_48291){
var state_val_48292 = (state_48291[(1)]);
if((state_val_48292 === (7))){
var inst_48287 = (state_48291[(2)]);
var state_48291__$1 = state_48291;
var statearr_48293_49501 = state_48291__$1;
(statearr_48293_49501[(2)] = inst_48287);

(statearr_48293_49501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48292 === (1))){
var inst_48254 = (new Array(n));
var inst_48255 = inst_48254;
var inst_48256 = (0);
var state_48291__$1 = (function (){var statearr_48294 = state_48291;
(statearr_48294[(7)] = inst_48256);

(statearr_48294[(8)] = inst_48255);

return statearr_48294;
})();
var statearr_48295_49502 = state_48291__$1;
(statearr_48295_49502[(2)] = null);

(statearr_48295_49502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48292 === (4))){
var inst_48259 = (state_48291[(9)]);
var inst_48259__$1 = (state_48291[(2)]);
var inst_48260 = (inst_48259__$1 == null);
var inst_48261 = cljs.core.not(inst_48260);
var state_48291__$1 = (function (){var statearr_48296 = state_48291;
(statearr_48296[(9)] = inst_48259__$1);

return statearr_48296;
})();
if(inst_48261){
var statearr_48297_49511 = state_48291__$1;
(statearr_48297_49511[(1)] = (5));

} else {
var statearr_48298_49513 = state_48291__$1;
(statearr_48298_49513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48292 === (15))){
var inst_48281 = (state_48291[(2)]);
var state_48291__$1 = state_48291;
var statearr_48299_49521 = state_48291__$1;
(statearr_48299_49521[(2)] = inst_48281);

(statearr_48299_49521[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48292 === (13))){
var state_48291__$1 = state_48291;
var statearr_48300_49522 = state_48291__$1;
(statearr_48300_49522[(2)] = null);

(statearr_48300_49522[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48292 === (6))){
var inst_48256 = (state_48291[(7)]);
var inst_48277 = (inst_48256 > (0));
var state_48291__$1 = state_48291;
if(cljs.core.truth_(inst_48277)){
var statearr_48301_49527 = state_48291__$1;
(statearr_48301_49527[(1)] = (12));

} else {
var statearr_48302_49528 = state_48291__$1;
(statearr_48302_49528[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48292 === (3))){
var inst_48289 = (state_48291[(2)]);
var state_48291__$1 = state_48291;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48291__$1,inst_48289);
} else {
if((state_val_48292 === (12))){
var inst_48255 = (state_48291[(8)]);
var inst_48279 = cljs.core.vec(inst_48255);
var state_48291__$1 = state_48291;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48291__$1,(15),out,inst_48279);
} else {
if((state_val_48292 === (2))){
var state_48291__$1 = state_48291;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48291__$1,(4),ch);
} else {
if((state_val_48292 === (11))){
var inst_48271 = (state_48291[(2)]);
var inst_48272 = (new Array(n));
var inst_48255 = inst_48272;
var inst_48256 = (0);
var state_48291__$1 = (function (){var statearr_48303 = state_48291;
(statearr_48303[(7)] = inst_48256);

(statearr_48303[(8)] = inst_48255);

(statearr_48303[(10)] = inst_48271);

return statearr_48303;
})();
var statearr_48304_49537 = state_48291__$1;
(statearr_48304_49537[(2)] = null);

(statearr_48304_49537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48292 === (9))){
var inst_48255 = (state_48291[(8)]);
var inst_48269 = cljs.core.vec(inst_48255);
var state_48291__$1 = state_48291;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48291__$1,(11),out,inst_48269);
} else {
if((state_val_48292 === (5))){
var inst_48264 = (state_48291[(11)]);
var inst_48256 = (state_48291[(7)]);
var inst_48255 = (state_48291[(8)]);
var inst_48259 = (state_48291[(9)]);
var inst_48263 = (inst_48255[inst_48256] = inst_48259);
var inst_48264__$1 = (inst_48256 + (1));
var inst_48265 = (inst_48264__$1 < n);
var state_48291__$1 = (function (){var statearr_48305 = state_48291;
(statearr_48305[(11)] = inst_48264__$1);

(statearr_48305[(12)] = inst_48263);

return statearr_48305;
})();
if(cljs.core.truth_(inst_48265)){
var statearr_48306_49541 = state_48291__$1;
(statearr_48306_49541[(1)] = (8));

} else {
var statearr_48307_49542 = state_48291__$1;
(statearr_48307_49542[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48292 === (14))){
var inst_48284 = (state_48291[(2)]);
var inst_48285 = cljs.core.async.close_BANG_(out);
var state_48291__$1 = (function (){var statearr_48309 = state_48291;
(statearr_48309[(13)] = inst_48284);

return statearr_48309;
})();
var statearr_48310_49544 = state_48291__$1;
(statearr_48310_49544[(2)] = inst_48285);

(statearr_48310_49544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48292 === (10))){
var inst_48275 = (state_48291[(2)]);
var state_48291__$1 = state_48291;
var statearr_48313_49545 = state_48291__$1;
(statearr_48313_49545[(2)] = inst_48275);

(statearr_48313_49545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48292 === (8))){
var inst_48264 = (state_48291[(11)]);
var inst_48255 = (state_48291[(8)]);
var tmp48308 = inst_48255;
var inst_48255__$1 = tmp48308;
var inst_48256 = inst_48264;
var state_48291__$1 = (function (){var statearr_48314 = state_48291;
(statearr_48314[(7)] = inst_48256);

(statearr_48314[(8)] = inst_48255__$1);

return statearr_48314;
})();
var statearr_48316_49548 = state_48291__$1;
(statearr_48316_49548[(2)] = null);

(statearr_48316_49548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46077__auto__ = null;
var cljs$core$async$state_machine__46077__auto____0 = (function (){
var statearr_48319 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48319[(0)] = cljs$core$async$state_machine__46077__auto__);

(statearr_48319[(1)] = (1));

return statearr_48319;
});
var cljs$core$async$state_machine__46077__auto____1 = (function (state_48291){
while(true){
var ret_value__46078__auto__ = (function (){try{while(true){
var result__46079__auto__ = switch__46076__auto__(state_48291);
if(cljs.core.keyword_identical_QMARK_(result__46079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46079__auto__;
}
break;
}
}catch (e48321){var ex__46080__auto__ = e48321;
var statearr_48322_49552 = state_48291;
(statearr_48322_49552[(2)] = ex__46080__auto__);


if(cljs.core.seq((state_48291[(4)]))){
var statearr_48323_49553 = state_48291;
(statearr_48323_49553[(1)] = cljs.core.first((state_48291[(4)])));

} else {
throw ex__46080__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49554 = state_48291;
state_48291 = G__49554;
continue;
} else {
return ret_value__46078__auto__;
}
break;
}
});
cljs$core$async$state_machine__46077__auto__ = function(state_48291){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46077__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46077__auto____1.call(this,state_48291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46077__auto____0;
cljs$core$async$state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46077__auto____1;
return cljs$core$async$state_machine__46077__auto__;
})()
})();
var state__46246__auto__ = (function (){var statearr_48325 = f__46245__auto__();
(statearr_48325[(6)] = c__46243__auto___49499);

return statearr_48325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46246__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__48331 = arguments.length;
switch (G__48331) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46243__auto___49560 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46245__auto__ = (function (){var switch__46076__auto__ = (function (state_48380){
var state_val_48381 = (state_48380[(1)]);
if((state_val_48381 === (7))){
var inst_48375 = (state_48380[(2)]);
var state_48380__$1 = state_48380;
var statearr_48386_49567 = state_48380__$1;
(statearr_48386_49567[(2)] = inst_48375);

(statearr_48386_49567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48381 === (1))){
var inst_48333 = [];
var inst_48334 = inst_48333;
var inst_48335 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_48380__$1 = (function (){var statearr_48387 = state_48380;
(statearr_48387[(7)] = inst_48334);

(statearr_48387[(8)] = inst_48335);

return statearr_48387;
})();
var statearr_48388_49569 = state_48380__$1;
(statearr_48388_49569[(2)] = null);

(statearr_48388_49569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48381 === (4))){
var inst_48339 = (state_48380[(9)]);
var inst_48339__$1 = (state_48380[(2)]);
var inst_48341 = (inst_48339__$1 == null);
var inst_48342 = cljs.core.not(inst_48341);
var state_48380__$1 = (function (){var statearr_48391 = state_48380;
(statearr_48391[(9)] = inst_48339__$1);

return statearr_48391;
})();
if(inst_48342){
var statearr_48392_49580 = state_48380__$1;
(statearr_48392_49580[(1)] = (5));

} else {
var statearr_48394_49581 = state_48380__$1;
(statearr_48394_49581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48381 === (15))){
var inst_48369 = (state_48380[(2)]);
var state_48380__$1 = state_48380;
var statearr_48397_49584 = state_48380__$1;
(statearr_48397_49584[(2)] = inst_48369);

(statearr_48397_49584[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48381 === (13))){
var state_48380__$1 = state_48380;
var statearr_48399_49586 = state_48380__$1;
(statearr_48399_49586[(2)] = null);

(statearr_48399_49586[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48381 === (6))){
var inst_48334 = (state_48380[(7)]);
var inst_48364 = inst_48334.length;
var inst_48365 = (inst_48364 > (0));
var state_48380__$1 = state_48380;
if(cljs.core.truth_(inst_48365)){
var statearr_48400_49587 = state_48380__$1;
(statearr_48400_49587[(1)] = (12));

} else {
var statearr_48401_49592 = state_48380__$1;
(statearr_48401_49592[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48381 === (3))){
var inst_48377 = (state_48380[(2)]);
var state_48380__$1 = state_48380;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48380__$1,inst_48377);
} else {
if((state_val_48381 === (12))){
var inst_48334 = (state_48380[(7)]);
var inst_48367 = cljs.core.vec(inst_48334);
var state_48380__$1 = state_48380;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48380__$1,(15),out,inst_48367);
} else {
if((state_val_48381 === (2))){
var state_48380__$1 = state_48380;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48380__$1,(4),ch);
} else {
if((state_val_48381 === (11))){
var inst_48344 = (state_48380[(10)]);
var inst_48339 = (state_48380[(9)]);
var inst_48357 = (state_48380[(2)]);
var inst_48358 = [];
var inst_48359 = inst_48358.push(inst_48339);
var inst_48334 = inst_48358;
var inst_48335 = inst_48344;
var state_48380__$1 = (function (){var statearr_48406 = state_48380;
(statearr_48406[(11)] = inst_48357);

(statearr_48406[(7)] = inst_48334);

(statearr_48406[(8)] = inst_48335);

(statearr_48406[(12)] = inst_48359);

return statearr_48406;
})();
var statearr_48407_49603 = state_48380__$1;
(statearr_48407_49603[(2)] = null);

(statearr_48407_49603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48381 === (9))){
var inst_48334 = (state_48380[(7)]);
var inst_48355 = cljs.core.vec(inst_48334);
var state_48380__$1 = state_48380;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48380__$1,(11),out,inst_48355);
} else {
if((state_val_48381 === (5))){
var inst_48344 = (state_48380[(10)]);
var inst_48335 = (state_48380[(8)]);
var inst_48339 = (state_48380[(9)]);
var inst_48344__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_48339) : f.call(null,inst_48339));
var inst_48347 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48344__$1,inst_48335);
var inst_48348 = cljs.core.keyword_identical_QMARK_(inst_48335,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_48349 = ((inst_48347) || (inst_48348));
var state_48380__$1 = (function (){var statearr_48410 = state_48380;
(statearr_48410[(10)] = inst_48344__$1);

return statearr_48410;
})();
if(cljs.core.truth_(inst_48349)){
var statearr_48412_49612 = state_48380__$1;
(statearr_48412_49612[(1)] = (8));

} else {
var statearr_48413_49614 = state_48380__$1;
(statearr_48413_49614[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48381 === (14))){
var inst_48372 = (state_48380[(2)]);
var inst_48373 = cljs.core.async.close_BANG_(out);
var state_48380__$1 = (function (){var statearr_48417 = state_48380;
(statearr_48417[(13)] = inst_48372);

return statearr_48417;
})();
var statearr_48418_49621 = state_48380__$1;
(statearr_48418_49621[(2)] = inst_48373);

(statearr_48418_49621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48381 === (10))){
var inst_48362 = (state_48380[(2)]);
var state_48380__$1 = state_48380;
var statearr_48419_49631 = state_48380__$1;
(statearr_48419_49631[(2)] = inst_48362);

(statearr_48419_49631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48381 === (8))){
var inst_48334 = (state_48380[(7)]);
var inst_48344 = (state_48380[(10)]);
var inst_48339 = (state_48380[(9)]);
var inst_48351 = inst_48334.push(inst_48339);
var tmp48416 = inst_48334;
var inst_48334__$1 = tmp48416;
var inst_48335 = inst_48344;
var state_48380__$1 = (function (){var statearr_48421 = state_48380;
(statearr_48421[(7)] = inst_48334__$1);

(statearr_48421[(14)] = inst_48351);

(statearr_48421[(8)] = inst_48335);

return statearr_48421;
})();
var statearr_48424_49643 = state_48380__$1;
(statearr_48424_49643[(2)] = null);

(statearr_48424_49643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46077__auto__ = null;
var cljs$core$async$state_machine__46077__auto____0 = (function (){
var statearr_48427 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48427[(0)] = cljs$core$async$state_machine__46077__auto__);

(statearr_48427[(1)] = (1));

return statearr_48427;
});
var cljs$core$async$state_machine__46077__auto____1 = (function (state_48380){
while(true){
var ret_value__46078__auto__ = (function (){try{while(true){
var result__46079__auto__ = switch__46076__auto__(state_48380);
if(cljs.core.keyword_identical_QMARK_(result__46079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46079__auto__;
}
break;
}
}catch (e48428){var ex__46080__auto__ = e48428;
var statearr_48429_49659 = state_48380;
(statearr_48429_49659[(2)] = ex__46080__auto__);


if(cljs.core.seq((state_48380[(4)]))){
var statearr_48431_49662 = state_48380;
(statearr_48431_49662[(1)] = cljs.core.first((state_48380[(4)])));

} else {
throw ex__46080__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49667 = state_48380;
state_48380 = G__49667;
continue;
} else {
return ret_value__46078__auto__;
}
break;
}
});
cljs$core$async$state_machine__46077__auto__ = function(state_48380){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46077__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46077__auto____1.call(this,state_48380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46077__auto____0;
cljs$core$async$state_machine__46077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46077__auto____1;
return cljs$core$async$state_machine__46077__auto__;
})()
})();
var state__46246__auto__ = (function (){var statearr_48433 = f__46245__auto__();
(statearr_48433[(6)] = c__46243__auto___49560);

return statearr_48433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46246__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
