// Compiled by ClojureScript 0.0.668480191 {}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.impl !== 'undefined') && (typeof cljs.core.async.impl.channels !== 'undefined') && (typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels29702 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels29702 = (function (val,meta29703){
this.val = val;
this.meta29703 = meta29703;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels29702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29704,meta29703__$1){
var self__ = this;
var _29704__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels29702(self__.val,meta29703__$1));
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels29702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29704){
var self__ = this;
var _29704__$1 = this;
return self__.meta29703;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels29702.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels29702.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta29703","meta29703",1373601453,null)], null);
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels29702.cljs$lang$type = true;

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels29702.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels29702";

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels29702.cljs$lang$ctorPrWriter = (function (this__18502__auto__,writer__18503__auto__,opt__18504__auto__){
return cljs.core._write.call(null,writer__18503__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels29702");
});

/**
 * Positional factory function for cljs.core.async.impl.channels/t_cljs$core$async$impl$channels29702.
 */
cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels29702 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels29702(val__$1,meta29703){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels29702(val__$1,meta29703));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels29702(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
});

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__18502__auto__,writer__18503__auto__,opt__18504__auto__){
return cljs.core._write.call(null,writer__18503__auto__,"cljs.core.async.impl.channels/PutBox");
});

/**
 * Positional factory function for cljs.core.async.impl.channels/PutBox.
 */
cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((((!((this$ == null)))) && ((!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__18573__auto__ = (((this$ == null))?null:this$);
var m__18574__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__18573__auto__)]);
if((!((m__18574__auto__ == null)))){
return m__18574__auto__.call(null,this$);
} else {
var m__18571__auto__ = (cljs.core.async.impl.channels.abort["_"]);
if((!((m__18571__auto__ == null)))){
return m__18571__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_29716 = self__.puts.pop();
if((putter_29716 == null)){
} else {
var put_handler_29717 = putter_29716.handler;
var val_29718 = putter_29716.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_29717)){
var put_cb_29719 = cljs.core.async.impl.protocols.commit.call(null,put_handler_29717);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_29719,put_handler_29717,val_29718,putter_29716,this$__$1){
return (function (){
return put_cb_29719.call(null,true);
});})(put_cb_29719,put_handler_29717,val_29718,putter_29716,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly.call(null,false));

return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if((!((val == null)))){
} else {
throw (new Error(["Assert failed: ","Can't put nil on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if(((closed__$1) || ((!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))))){
return cljs.core.async.impl.channels.box.call(null,(!(closed__$1)));
} else {
if(cljs.core.truth_((function (){var and__17810__auto__ = self__.buf;
if(cljs.core.truth_(and__17810__auto__)){
return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else {
return and__17810__auto__;
}
})())){
cljs.core.async.impl.protocols.commit.call(null,handler);

var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if((((self__.takes.length > (0))) && ((cljs.core.count.call(null,self__.buf) > (0))))){
var taker = self__.takes.pop();
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker)){
var ret = cljs.core.async.impl.protocols.commit.call(null,taker);
var val__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var G__29720 = cljs.core.conj.call(null,takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return ret.call(null,val__$1);
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__29720;
continue;
} else {
var G__29721 = takers;
takers = G__29721;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

if(cljs.core.seq.call(null,take_cbs)){
var seq__29705_29722 = cljs.core.seq.call(null,take_cbs);
var chunk__29706_29723 = null;
var count__29707_29724 = (0);
var i__29708_29725 = (0);
while(true){
if((i__29708_29725 < count__29707_29724)){
var f_29726 = cljs.core._nth.call(null,chunk__29706_29723,i__29708_29725);
cljs.core.async.impl.dispatch.run.call(null,f_29726);


var G__29727 = seq__29705_29722;
var G__29728 = chunk__29706_29723;
var G__29729 = count__29707_29724;
var G__29730 = (i__29708_29725 + (1));
seq__29705_29722 = G__29727;
chunk__29706_29723 = G__29728;
count__29707_29724 = G__29729;
i__29708_29725 = G__29730;
continue;
} else {
var temp__5457__auto___29731 = cljs.core.seq.call(null,seq__29705_29722);
if(temp__5457__auto___29731){
var seq__29705_29732__$1 = temp__5457__auto___29731;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29705_29732__$1)){
var c__18782__auto___29733 = cljs.core.chunk_first.call(null,seq__29705_29732__$1);
var G__29734 = cljs.core.chunk_rest.call(null,seq__29705_29732__$1);
var G__29735 = c__18782__auto___29733;
var G__29736 = cljs.core.count.call(null,c__18782__auto___29733);
var G__29737 = (0);
seq__29705_29722 = G__29734;
chunk__29706_29723 = G__29735;
count__29707_29724 = G__29736;
i__29708_29725 = G__29737;
continue;
} else {
var f_29738 = cljs.core.first.call(null,seq__29705_29732__$1);
cljs.core.async.impl.dispatch.run.call(null,f_29738);


var G__29739 = cljs.core.next.call(null,seq__29705_29732__$1);
var G__29740 = null;
var G__29741 = (0);
var G__29742 = (0);
seq__29705_29722 = G__29739;
chunk__29706_29723 = G__29740;
count__29707_29724 = G__29741;
i__29708_29725 = G__29742;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box.call(null,true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
return take_cb.call(null,val);
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,true);
} else {
if((self__.dirty_puts > (64))){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join(''),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if((!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))){
return null;
} else {
if((((!((self__.buf == null)))) && ((cljs.core.count.call(null,self__.buf) > (0))))){
var temp__5455__auto__ = cljs.core.async.impl.protocols.commit.call(null,handler);
if(cljs.core.truth_(temp__5455__auto__)){
var take_cb = temp__5455__auto__;
var val = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var vec__29709 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__17810__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler);
if(and__17810__auto__){
return cljs.core.async.impl.protocols.commit.call(null,put_handler);
} else {
return and__17810__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.call(null,cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val__$1)):null);
if(((cljs.core.not.call(null,done_QMARK_)) && (cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))) && ((self__.puts.length > (0))))){
var G__29743 = cbs__$1;
cbs = G__29743;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.call(null,vec__29709,(0),null);
var cbs = cljs.core.nth.call(null,vec__29709,(1),null);
if(cljs.core.truth_(done_QMARK_)){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

var seq__29712_29744 = cljs.core.seq.call(null,cbs);
var chunk__29713_29745 = null;
var count__29714_29746 = (0);
var i__29715_29747 = (0);
while(true){
if((i__29715_29747 < count__29714_29746)){
var cb_29748 = cljs.core._nth.call(null,chunk__29713_29745,i__29715_29747);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__29712_29744,chunk__29713_29745,count__29714_29746,i__29715_29747,cb_29748,val,vec__29709,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1){
return (function (){
return cb_29748.call(null,true);
});})(seq__29712_29744,chunk__29713_29745,count__29714_29746,i__29715_29747,cb_29748,val,vec__29709,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1))
);


var G__29749 = seq__29712_29744;
var G__29750 = chunk__29713_29745;
var G__29751 = count__29714_29746;
var G__29752 = (i__29715_29747 + (1));
seq__29712_29744 = G__29749;
chunk__29713_29745 = G__29750;
count__29714_29746 = G__29751;
i__29715_29747 = G__29752;
continue;
} else {
var temp__5457__auto___29753 = cljs.core.seq.call(null,seq__29712_29744);
if(temp__5457__auto___29753){
var seq__29712_29754__$1 = temp__5457__auto___29753;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29712_29754__$1)){
var c__18782__auto___29755 = cljs.core.chunk_first.call(null,seq__29712_29754__$1);
var G__29756 = cljs.core.chunk_rest.call(null,seq__29712_29754__$1);
var G__29757 = c__18782__auto___29755;
var G__29758 = cljs.core.count.call(null,c__18782__auto___29755);
var G__29759 = (0);
seq__29712_29744 = G__29756;
chunk__29713_29745 = G__29757;
count__29714_29746 = G__29758;
i__29715_29747 = G__29759;
continue;
} else {
var cb_29760 = cljs.core.first.call(null,seq__29712_29754__$1);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__29712_29744,chunk__29713_29745,count__29714_29746,i__29715_29747,cb_29760,seq__29712_29754__$1,temp__5457__auto___29753,val,vec__29709,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1){
return (function (){
return cb_29760.call(null,true);
});})(seq__29712_29744,chunk__29713_29745,count__29714_29746,i__29715_29747,cb_29760,seq__29712_29754__$1,temp__5457__auto___29753,val,vec__29709,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1))
);


var G__29761 = cljs.core.next.call(null,seq__29712_29754__$1);
var G__29762 = null;
var G__29763 = (0);
var G__29764 = (0);
seq__29712_29744 = G__29761;
chunk__29713_29745 = G__29762;
count__29714_29746 = G__29763;
i__29715_29747 = G__29764;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (put_cb,putter,this$__$1){
return (function (){
return put_cb.call(null,true);
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
self__.add_BANG_.call(null,self__.buf);
} else {
}

if(cljs.core.truth_((function (){var and__17810__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__17810__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,handler);
} else {
return and__17810__auto__;
}
})())){
var has_val = (function (){var and__17810__auto__ = self__.buf;
if(cljs.core.truth_(and__17810__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__17810__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join(''),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__17810__auto__ = self__.buf;
if(cljs.core.truth_(and__17810__auto__)){
return (self__.puts.length === (0));
} else {
return and__17810__auto__;
}
})())){
self__.add_BANG_.call(null,self__.buf);
} else {
}

while(true){
var taker_29765 = self__.takes.pop();
if((taker_29765 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_29765)){
var take_cb_29766 = cljs.core.async.impl.protocols.commit.call(null,taker_29765);
var val_29767 = (cljs.core.truth_((function (){var and__17810__auto__ = self__.buf;
if(cljs.core.truth_(and__17810__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__17810__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_29766,val_29767,taker_29765,this$__$1){
return (function (){
return take_cb_29766.call(null,val_29767);
});})(take_cb_29766,val_29767,taker_29765,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
cljs.core.async.impl.protocols.close_buf_BANG_.call(null,self__.buf);
} else {
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__18502__auto__,writer__18503__auto__,opt__18504__auto__){
return cljs.core._write.call(null,writer__18503__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

/**
 * Positional factory function for cljs.core.async.impl.channels/ManyToManyChannel.
 */
cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__17825__auto__ = exh;
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__29769 = arguments.length;
switch (G__29769) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.call(null,buf,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.call(null,buf,xform,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__29773 = null;
var G__29773__1 = (function (buf__$1){
try{return add_BANG_.call(null,buf__$1);
}catch (e29770){var t = e29770;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__29773__2 = (function (buf__$1,val){
try{return add_BANG_.call(null,buf__$1,val);
}catch (e29771){var t = e29771;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__29773 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__29773__1.call(this,buf__$1);
case 2:
return G__29773__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29773.cljs$core$IFn$_invoke$arity$1 = G__29773__1;
G__29773.cljs$core$IFn$_invoke$arity$2 = G__29773__2;
return G__29773;
})()
;})(add_BANG_))
})()));
});

cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=channels.js.map
