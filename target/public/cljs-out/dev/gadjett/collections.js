// Compiled by ClojureScript 0.0.668480191 {}
goog.provide('gadjett.collections');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('clojure.zip');
gadjett.collections.infinity = Infinity;
/**
 * Absolute value of a number
 * 
 * ~~~klipse
 *   (map abs (range -5 5))
 * ~~~
 */
gadjett.collections.abs = (function gadjett$collections$abs(x){
var x__18183__auto__ = x;
var y__18184__auto__ = (- x);
return ((x__18183__auto__ > y__18184__auto__) ? x__18183__auto__ : y__18184__auto__);
});
gadjett.collections.scale = (function gadjett$collections$scale(x,y){
if((((x === (0))) || ((y === (0))))){
return (1);
} else {
return gadjett.collections.abs.call(null,x);
}
});
gadjett.collections.almost_EQ_ = (function gadjett$collections$almost_EQ_(var_args){
var G__37930 = arguments.length;
switch (G__37930) {
case 2:
return gadjett.collections.almost_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return gadjett.collections.almost_EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

gadjett.collections.almost_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return gadjett.collections.almost_EQ_.call(null,x,y,1.0E-5);
});

gadjett.collections.almost_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,epsilon){
return ((cljs.core._EQ_.call(null,x,y)) || ((gadjett.collections.abs.call(null,(x - y)) <= (gadjett.collections.scale.call(null,x,y) * epsilon))));
});

gadjett.collections.almost_EQ_.cljs$lang$maxFixedArity = 3;

gadjett.collections._EQ_set = (function gadjett$collections$_EQ_set(a,b){
return cljs.core._EQ_.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,a),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,b));
});
/**
 * Compare two maps exclusing some keys
 * 
 * ~~~klipse
 *   (=without-keys? {:a 1 :b 2 :c 3} {:a 1 :b 5} #{:b :c})
 * ~~~
 *   
 */
gadjett.collections._EQ_without_keys_QMARK_ = (function gadjett$collections$_EQ_without_keys_QMARK_(obj_a,obj_b,keys_list){
return cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.map.call(null,(function (p1__37932_SHARP_){
return cljs.core.apply.call(null,cljs.core.dissoc,p1__37932_SHARP_,keys_list);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj_a,obj_b], null)));
});
/**
 * Converts a 2d vec to a hash-map.
 * 
 * ~~~klipse
 * (vec->map [[:a 1] [:b 2]])
 * ~~~
 * 
 */
gadjett.collections.vec__GT_map = (function gadjett$collections$vec__GT_map(vec){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,vec);
});
/**
 * Maps the values of a `2D` vector where each element of the vector is a key-value pair.
 * `f` is a `1-ary` function that receives the key.
 * 
 * ~~~klipse
 *   (map-2d-vec inc [[:a 1] [:b 2]])
 * ~~~
 */
gadjett.collections.map_2d_vec = (function gadjett$collections$map_2d_vec(f,m){
return cljs.core.map.call(null,(function (p__37933){
var vec__37934 = p__37933;
var k = cljs.core.nth.call(null,vec__37934,(0),null);
var id = cljs.core.nth.call(null,vec__37934,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,id)], null);
}),m);
});
/**
 * Maps the values of a `2D` vector where each element of the vector is a key-value pair.
 * `fk` is a `1-ary` function that receives the key.
 * `fv` is a `1-ary` function that receives the value.
 * 
 * ~~~klipse
 *  (map-2d-vec-kv name inc [[:a 1] [:b 2]])
 * ~~~
 */
gadjett.collections.map_2d_vec_kv = (function gadjett$collections$map_2d_vec_kv(fk,fv,m){
return cljs.core.map.call(null,(function (p__37937){
var vec__37938 = p__37937;
var k = cljs.core.nth.call(null,vec__37938,(0),null);
var id = cljs.core.nth.call(null,vec__37938,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fk.call(null,k),fv.call(null,id)], null);
}),m);
});
/**
 * Returns a map with the same keys as `m` and with the values transformed by `f`. `f` is a `1-ary` function that receives the key.
 * 
 * ~~~klipse
 *   (map-object inc {:a 1 :b 2 :c 3})
 * ~~~
 *   
 */
gadjett.collections.map_object = (function gadjett$collections$map_object(f,m){
return gadjett.collections.vec__GT_map.call(null,gadjett.collections.map_2d_vec.call(null,f,m));
});
/**
 * Returns a map with the same keys as `m` and with the values transformed by `f`. `f` must be a `2-ary` function that receives the key and the value as arguments.
 * 
 * ~~~klipse
 *   (map-object-with-key list {:a 1 :b 2 :c 3})
 * ~~~
 *   
 */
gadjett.collections.map_object_with_key = (function gadjett$collections$map_object_with_key(f,m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__37941){
var vec__37942 = p__37941;
var a = cljs.core.nth.call(null,vec__37942,(0),null);
var b = cljs.core.nth.call(null,vec__37942,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,f.call(null,a,b)], null);
}),m));
});
/**
 * Returns a map with the keys mapped by `fk` and the values mapped by `fv`.
 * 
 * ~~~klipse
 *  (map-object-kv name inc {:a 1 :b 2 :c 3})
 * ~~~
 */
gadjett.collections.map_object_kv = (function gadjett$collections$map_object_kv(fk,fv,m){
return gadjett.collections.vec__GT_map.call(null,gadjett.collections.map_2d_vec_kv.call(null,fk,fv,m));
});
/**
 * Turns a hash map inside out.
 *   See:  [here](http://stackoverflow.com/a/23653784/813665)
 * 
 * ~~~klipse
 *   (map-reverse-hierarchy {:monday {:banana 2 :apple 3} 
 *                        :tuesday {:banana 5 :orange 2}})
 * ~~~
 */
gadjett.collections.map_reverse_hierarchy = (function gadjett$collections$map_reverse_hierarchy(m){
var or__17825__auto__ = cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.conj,(function (){var iter__18733__auto__ = (function gadjett$collections$map_reverse_hierarchy_$_iter__37960(s__37961){
return (new cljs.core.LazySeq(null,(function (){
var s__37961__$1 = s__37961;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__37961__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var vec__37966 = cljs.core.first.call(null,xs__6012__auto__);
var k1 = cljs.core.nth.call(null,vec__37966,(0),null);
var v1 = cljs.core.nth.call(null,vec__37966,(1),null);
var iterys__18729__auto__ = ((function (s__37961__$1,vec__37966,k1,v1,xs__6012__auto__,temp__5457__auto__){
return (function gadjett$collections$map_reverse_hierarchy_$_iter__37960_$_iter__37962(s__37963){
return (new cljs.core.LazySeq(null,((function (s__37961__$1,vec__37966,k1,v1,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__37963__$1 = s__37963;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__37963__$1);
if(temp__5457__auto____$1){
var s__37963__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37963__$2)){
var c__18731__auto__ = cljs.core.chunk_first.call(null,s__37963__$2);
var size__18732__auto__ = cljs.core.count.call(null,c__18731__auto__);
var b__37965 = cljs.core.chunk_buffer.call(null,size__18732__auto__);
if((function (){var i__37964 = (0);
while(true){
if((i__37964 < size__18732__auto__)){
var vec__37969 = cljs.core._nth.call(null,c__18731__auto__,i__37964);
var k2 = cljs.core.nth.call(null,vec__37969,(0),null);
var v2 = cljs.core.nth.call(null,vec__37969,(1),null);
cljs.core.chunk_append.call(null,b__37965,cljs.core.PersistentArrayMap.createAsIfByAssoc([k2,cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v2])]));

var G__37975 = (i__37964 + (1));
i__37964 = G__37975;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37965),gadjett$collections$map_reverse_hierarchy_$_iter__37960_$_iter__37962.call(null,cljs.core.chunk_rest.call(null,s__37963__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37965),null);
}
} else {
var vec__37972 = cljs.core.first.call(null,s__37963__$2);
var k2 = cljs.core.nth.call(null,vec__37972,(0),null);
var v2 = cljs.core.nth.call(null,vec__37972,(1),null);
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([k2,cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v2])]),gadjett$collections$map_reverse_hierarchy_$_iter__37960_$_iter__37962.call(null,cljs.core.rest.call(null,s__37963__$2)));
}
} else {
return null;
}
break;
}
});})(s__37961__$1,vec__37966,k1,v1,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__37961__$1,vec__37966,k1,v1,xs__6012__auto__,temp__5457__auto__))
;
var fs__18730__auto__ = cljs.core.seq.call(null,iterys__18729__auto__.call(null,v1));
if(fs__18730__auto__){
return cljs.core.concat.call(null,fs__18730__auto__,gadjett$collections$map_reverse_hierarchy_$_iter__37960.call(null,cljs.core.rest.call(null,s__37961__$1)));
} else {
var G__37976 = cljs.core.rest.call(null,s__37961__$1);
s__37961__$1 = G__37976;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18733__auto__.call(null,m);
})());
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
 * Calculates the mean (a.k.a average) of a sequence of numbers.
 * 
 * ~~~klipse
 *   (mean [1 2 10 -1 12.3])
 * ~~~
 *   
 */
gadjett.collections.mean = (function gadjett$collections$mean(x){
if(cljs.core.empty_QMARK_.call(null,x)){
return (0);
} else {
return (cljs.core.apply.call(null,cljs.core._PLUS_,x) / cljs.core.count.call(null,x));
}
});
/**
 * Converts a sequence into a map where the keys are the indexes of the elements in the sequence.
 * 
 *   ~~~klipse
 *   (sequence->map [10 20 30])
 *   ~~~
 *   
 */
gadjett.collections.sequence__GT_map = (function gadjett$collections$sequence__GT_map(s){
return cljs.core.zipmap.call(null,cljs.core.range.call(null,cljs.core.count.call(null,s)),s);
});
/**
 * Converts a sequence of maps into a map where:
 * 
 *   - the keys are extracted from the maps using `key-fn`
 *   - the vals extracted from the maps using `val-fn`  
 *   
 *   ~~~klipse
 *   (sequence-of-maps->map [{:key :price :value 19}
 *                        {:key :quantity :value 100}]
 *                        :key :value)
 *   ~~~
 *   
 */
gadjett.collections.sequence_of_maps__GT_map = (function gadjett$collections$sequence_of_maps__GT_map(coll,key_fn,val_fn){
return cljs.core.reduce.call(null,(function (res,m){
return cljs.core.assoc.call(null,res,key_fn.call(null,m),val_fn.call(null,m));
}),cljs.core.PersistentArrayMap.EMPTY,coll);
});
gadjett.collections.range_with_end = (function gadjett$collections$range_with_end(var_args){
var G__37978 = arguments.length;
switch (G__37978) {
case 1:
return gadjett.collections.range_with_end.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return gadjett.collections.range_with_end.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return gadjett.collections.range_with_end.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

gadjett.collections.range_with_end.cljs$core$IFn$_invoke$arity$1 = (function (end){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [end,cljs.core.range.call(null,end)], null);
});

gadjett.collections.range_with_end.cljs$core$IFn$_invoke$arity$2 = (function (start,end){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [end,cljs.core.range.call(null,start,end)], null);
});

gadjett.collections.range_with_end.cljs$core$IFn$_invoke$arity$3 = (function (start,end,steps){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [end,cljs.core.range.call(null,start,end,steps)], null);
});

gadjett.collections.range_with_end.cljs$lang$maxFixedArity = 3;

/**
 * Like `range` but including the `end`.
 * 
 * ~~~klipse
 *   (range-till-end 10)
 * ~~~
 * 
 * ~~~klipse
 * (range-till-end 10 18)
 * ~~~
 * 
 * ~~~klipse
 * (range-till-end 10 100 5)
 * ~~~
 * 
 *   
 */
gadjett.collections.range_till_end = (function gadjett$collections$range_till_end(var_args){
var args__19144__auto__ = [];
var len__19134__auto___37984 = arguments.length;
var i__19135__auto___37985 = (0);
while(true){
if((i__19135__auto___37985 < len__19134__auto___37984)){
args__19144__auto__.push((arguments[i__19135__auto___37985]));

var G__37986 = (i__19135__auto___37985 + (1));
i__19135__auto___37985 = G__37986;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return gadjett.collections.range_till_end.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});

gadjett.collections.range_till_end.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__37981 = cljs.core.apply.call(null,gadjett.collections.range_with_end,args);
var end = cljs.core.nth.call(null,vec__37981,(0),null);
var lis = cljs.core.nth.call(null,vec__37981,(1),null);
return cljs.core.concat.call(null,lis,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [end], null));
});

gadjett.collections.range_till_end.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
gadjett.collections.range_till_end.cljs$lang$applyTo = (function (seq37980){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37980));
});

/**
 * Appends an element to a list popping out the first element.
 * 
 * ~~~klipse
 *   (-> (repeat 3 nil)
 *    (append-cyclic 1)
 *    (append-cyclic 2)
 *    (append-cyclic 3)
 *    (append-cyclic 4))
 * ~~~
 *   
 */
gadjett.collections.append_cyclic = (function gadjett$collections$append_cyclic(lst,a){
if(cljs.core.seq.call(null,lst)){
return cljs.core.concat.call(null,cljs.core.rest.call(null,lst),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null));
} else {
return lst;
}
});
/**
 * Assoc a key-value pair to a map popping out an element of the map.
 *   If the key already exists, no element is popped out.
 *   If `n` is supplied, no elmement is popped out if the map has less than `n` entries.
 * 
 * ~~~klipse
 *   (-> {:a 1 :b 2 :c 3}
 *    (assoc-cyclic :d 4)
 *    (assoc-cyclic :e 5)
 *    (assoc-cyclic :f 6)
 *    (assoc-cyclic :g 7))
 * ~~~
 *   
 */
gadjett.collections.assoc_cyclic = (function gadjett$collections$assoc_cyclic(var_args){
var G__37988 = arguments.length;
switch (G__37988) {
case 3:
return gadjett.collections.assoc_cyclic.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return gadjett.collections.assoc_cyclic.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

gadjett.collections.assoc_cyclic.cljs$core$IFn$_invoke$arity$3 = (function (coll,k,v){
if(cljs.core.contains_QMARK_.call(null,coll,k)){
return cljs.core.assoc.call(null,coll,k,v);
} else {
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,gadjett.collections.append_cyclic.call(null,coll,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
}
});

gadjett.collections.assoc_cyclic.cljs$core$IFn$_invoke$arity$4 = (function (coll,k,v,n){
if((cljs.core.count.call(null,coll) < n)){
return cljs.core.assoc.call(null,coll,k,v);
} else {
return gadjett.collections.assoc_cyclic.call(null,coll,k,v);
}
});

gadjett.collections.assoc_cyclic.cljs$lang$maxFixedArity = 4;

/**
 * Returns a couple of the `max` and the `min` of a sequence.
 * 
 * ~~~klipse
 *   (max-and-min (range 5))
 * ~~~
 *   
 */
gadjett.collections.max_and_min = (function gadjett$collections$max_and_min(x){
if(cljs.core.empty_QMARK_.call(null,x)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return cljs.core.juxt.call(null,(function (p1__37990_SHARP_){
return cljs.core.apply.call(null,cljs.core.max,p1__37990_SHARP_);
}),(function (p1__37991_SHARP_){
return cljs.core.apply.call(null,cljs.core.min,p1__37991_SHARP_);
})).call(null,x);
}
});
/**
 * Removes entries with `nil` values.
 * 
 * ~~~klipse
 *   (compactize-map {:a 1 :b nil :c 3})
 * ~~~
 *   
 */
gadjett.collections.compactize_map = (function gadjett$collections$compactize_map(m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,cljs.core.second),m));
});
/**
 * Remove from a map the entries whose values are `nil`.
 *   If all the values of a nested map are `nil` the entrie is removed.
 * ~~~klipse
 * 
 * (compactize-map-recursive {:x 1 :z {:a nil} :a {:b nil :c 2 :d {:e nil :f 2}}})
 * ~~~
 *   
 */
gadjett.collections.compactize_map_recursive = (function gadjett$collections$compactize_map_recursive(m){
var f = (function (x){
if(cljs.core.map_QMARK_.call(null,x)){
var kvs = cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.nil_QMARK_,cljs.core.second),x);
if(cljs.core.empty_QMARK_.call(null,kvs)){
return null;
} else {
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,kvs);
}
} else {
return x;
}
});
return clojure.walk.postwalk.call(null,f,m);
});
/**
 * Run a function on the values of a map and keep only the (key, value) pairs for which the function returns true
 *   
 * ~~~klipse
 *   (filter-map even? {:a 1 :b 2 :c 3})
 * ~~~
 *   
 */
gadjett.collections.filter_map = (function gadjett$collections$filter_map(f,m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,f,cljs.core.val),m));
});
/**
 * Returns the nearest number to `x` of a sorted set
 * 
 * ~~~klipse
 *   (nearest-of-ss (apply sorted-set (range 5)) 1.2)
 * ~~~
 *   
 */
gadjett.collections.nearest_of_ss = (function gadjett$collections$nearest_of_ss(ss,x){
var greater = cljs.core.first.call(null,cljs.core.subseq.call(null,ss,cljs.core._GT__EQ_,x));
var smaller = cljs.core.first.call(null,cljs.core.rsubseq.call(null,ss,cljs.core._LT__EQ_,x));
return cljs.core.apply.call(null,cljs.core.min_key,((function (greater,smaller){
return (function (p1__37992_SHARP_){
return gadjett.collections.abs.call(null,(p1__37992_SHARP_ - x));
});})(greater,smaller))
,cljs.core.remove.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [greater,smaller], null)));
});
/**
 * Maps each element of `b` to its nearest element in `a`.
 *   If `a` is empty, returns `b`.
 * 
 * ~~~klipse
 *   (nearest-of-seq (range 5) [1.2 3.4 4])
 * ~~~
 *   
 */
gadjett.collections.nearest_of_seq = (function gadjett$collections$nearest_of_seq(a,b){
if(cljs.core.empty_QMARK_.call(null,a)){
return b;
} else {
return cljs.core.map.call(null,cljs.core.partial.call(null,gadjett.collections.nearest_of_ss,cljs.core.apply.call(null,cljs.core.sorted_set,a)),b);
}
});
/**
 * Returns a map whose keys are the elements of `lst` and values are mapped by `f`.
 * 
 * ~~~klipse
 *   (map-to-object inc (range 5))
 * ~~~
 *   
 */
gadjett.collections.map_to_object = (function gadjett$collections$map_to_object(f,lst){
return cljs.core.zipmap.call(null,lst,cljs.core.map.call(null,f,lst));
});
/**
 * 
 *   Takes a seq, and returns a map where the keys are the result of applying f to the elements in the seq.
 *   The result of f should be unique for each element in the seq, otherwise you will loose some data.
 *   If it is not unique, consider using [group-by](https://clojuredocs.org/clojure.core/group-by).
 * 
 * ~~~klipse
 *   (mapify inc (range 5) )
 * ~~~
 *   
 */
gadjett.collections.mapify = (function gadjett$collections$mapify(f,s){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,f,s),s);
});
/**
 * Maps a sequence to a sequence of maps with index and value
 * 
 * ~~~klipse
 *    (map-with-index [10 20 30] :idx :val)
 * ~~~
 *   
 */
gadjett.collections.map_with_index = (function gadjett$collections$map_with_index(s,idx_key,val_key){
return cljs.core.map_indexed.call(null,(function (i,v){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([idx_key,i,val_key,v]);
}),s);
});
/**
 * Dissociates an entry from a nested associative structure returning a new nested structure. `keys` is a sequence of keys. Any empty maps that result will not be present in the new structure. See [assoc-in](https://clojuredocs.org/clojure.core/assoc-in)
 * 
 * ~~~klipse
 *   (dissoc-in {:a 1 :b 2} [:b])
 * ~~~
 * 
 * ~~~klipse
 *   (dissoc-in {:a {:b 2 :B 3} :c 3} [:a :b])
 * ~~~
 * 
 * ~~~klipse
 *   (dissoc-in {:a {:b 2} :c 3} [:a :b])
 * ~~~
 *   
 */
gadjett.collections.dissoc_in = (function gadjett$collections$dissoc_in(m,p__37993){
var vec__37994 = p__37993;
var seq__37995 = cljs.core.seq.call(null,vec__37994);
var first__37996 = cljs.core.first.call(null,seq__37995);
var seq__37995__$1 = cljs.core.next.call(null,seq__37995);
var k = first__37996;
var ks = seq__37995__$1;
var keys = vec__37994;
if(ks){
var temp__5455__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__5455__auto__)){
var nextmap = temp__5455__auto__;
var newmap = gadjett.collections.dissoc_in.call(null,nextmap,ks);
if(cljs.core.seq.call(null,newmap)){
return cljs.core.assoc.call(null,m,k,newmap);
} else {
return cljs.core.dissoc.call(null,m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.call(null,m,k);
}
});
/**
 * Receives a collection of lengths and returns a list of start and end positions. Options:
 *   * `max-val`: (default `infinity`) - max value for `end`
 *   * `first-val`: (default 0) - first value of `start`
 * 
 * ~~~klipse
 *   (positions '(10 10 20) :first-val 100 :max-val 137)
 * ~~~
 * 
 *   
 */
gadjett.collections.positions = (function gadjett$collections$positions(var_args){
var args__19144__auto__ = [];
var len__19134__auto___38004 = arguments.length;
var i__19135__auto___38005 = (0);
while(true){
if((i__19135__auto___38005 < len__19134__auto___38004)){
args__19144__auto__.push((arguments[i__19135__auto___38005]));

var G__38006 = (i__19135__auto___38005 + (1));
i__19135__auto___38005 = G__38006;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((1) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((1)),(0),null)):null);
return gadjett.collections.positions.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19145__auto__);
});

gadjett.collections.positions.cljs$core$IFn$_invoke$arity$variadic = (function (coll_of_lengths,p__38001){
var map__38002 = p__38001;
var map__38002__$1 = (((((!((map__38002 == null))))?(((((map__38002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38002):map__38002);
var max_val = cljs.core.get.call(null,map__38002__$1,new cljs.core.Keyword(null,"max-val","max-val",-1492247884),gadjett.collections.infinity);
var first_val = cljs.core.get.call(null,map__38002__$1,new cljs.core.Keyword(null,"first-val","first-val",1849924874),(0));
var end_pos = cljs.core.rest.call(null,cljs.core.reductions.call(null,cljs.core._PLUS_,first_val,coll_of_lengths));
var start_pos = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [first_val], null),end_pos);
return cljs.core.map.call(null,((function (end_pos,start_pos,map__38002,map__38002__$1,max_val,first_val){
return (function (p1__37997_SHARP_,p2__37998_SHARP_){
return (new cljs.core.List(null,(function (){var x__18190__auto__ = max_val;
var y__18191__auto__ = p1__37997_SHARP_;
return ((x__18190__auto__ < y__18191__auto__) ? x__18190__auto__ : y__18191__auto__);
})(),(new cljs.core.List(null,(function (){var x__18190__auto__ = max_val;
var y__18191__auto__ = p2__37998_SHARP_;
return ((x__18190__auto__ < y__18191__auto__) ? x__18190__auto__ : y__18191__auto__);
})(),null,(1),null)),(2),null));
});})(end_pos,start_pos,map__38002,map__38002__$1,max_val,first_val))
,start_pos,end_pos);
});

gadjett.collections.positions.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
gadjett.collections.positions.cljs$lang$applyTo = (function (seq37999){
var G__38000 = cljs.core.first.call(null,seq37999);
var seq37999__$1 = cljs.core.next.call(null,seq37999);
var self__19119__auto__ = this;
return self__19119__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38000,seq37999__$1);
});

/**
 * Splits a collection to items where the separator is a repetition of at least n elements that satisfy `pred`.
 * 
 *   Inspired by: [this question](http://stackoverflow.com/a/23555616/813665).
 * 
 * ~~~klipse
 *   (split-by-predicate (shuffle (range 30)) even? 2)
 * ~~~
 *   
 */
gadjett.collections.split_by_predicate = (function gadjett$collections$split_by_predicate(coll,pred,n){
var part = cljs.core.partition_by.call(null,pred,coll);
var ppart = cljs.core.partition_by.call(null,((function (part){
return (function (x){
return (((cljs.core.count.call(null,x) >= n)) && (cljs.core.every_QMARK_.call(null,pred,x)));
});})(part))
,part);
return cljs.core.map.call(null,((function (part,ppart){
return (function (p1__38007_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__38007_SHARP_);
});})(part,ppart))
,ppart);
});
/**
 * 
 *   Optimized version of `split-by-predicate` where we assume that the data is from a signal that we can sample.
 * 
 *   Instead of checking each element, we check 1 over `n` elements.
 * 
 *  We return the positions where the data splits.
 * 
 * ~~~klipse
 *   (let [data (map Math/sin (range 0 6.28 0.001))]
 *  (split-by-predicate-positions data #(<= -0.01 % 0.01) 2 10))
 * ~~~
 * 
 *   The following assertion holds:
 * 
 * ~~~clojure
 *   (= (split-by-predicate coll pred n)
 *   (map #(apply subsequence data %) (split-by-predicate-positions coll pred n 1)))
 * ~~~
 * 
 *   Here is an example:
 * 
 * ~~~klipse
 *   (let [data (map Math/sin (range 0 6.28 0.01))]
 *  (= (split-by-predicate data #(<= -0.01 % 0.01) 2)
 *     (map #(apply subsequence data %) (split-by-predicate-positions data #(<= -0.01 % 0.01) 2 1))))
 * ~~~
 *   
 */
gadjett.collections.split_by_predicate_positions = (function gadjett$collections$split_by_predicate_positions(coll,pred,n,d){
var lengths = cljs.core.map.call(null,(function (p1__38008_SHARP_){
return (d * p1__38008_SHARP_);
}),cljs.core.map.call(null,cljs.core.count,gadjett.collections.split_by_predicate.call(null,cljs.core.take_nth.call(null,d,coll),pred,(n / d))));
var pos = gadjett.collections.positions.call(null,lengths,new cljs.core.Keyword(null,"max-val","max-val",-1492247884),cljs.core.count.call(null,coll));
return pos;
});
/**
 * Checks if `m1` is a submap of `m2`.
 *   Map `m1` is a submap of `m2` if all key/value pairs in `m1` exist in `m2`.
 * 
 * ~~~klipse
 *   (submap? {:a 1} {:a 1 :b 2})
 * ~~~
 * 
 * ~~~klipse
 *   (submap? {:a 1} {:a 1 :b 2 :c nil})
 * ~~~
 *   
 */
gadjett.collections.submap_QMARK_ = (function gadjett$collections$submap_QMARK_(m1,m2){
return cljs.core._EQ_.call(null,m1,cljs.core.select_keys.call(null,m2,cljs.core.keys.call(null,m1)));
});
/**
 * 
 *   Returns a lazy subsequence of `coll`, starting at `start, ending at `end` (not included).
 * 
 * ~~~klipse
 *   (subsequence (range) 10 20)
 * ~~~
 *   
 */
gadjett.collections.subsequence = (function gadjett$collections$subsequence(coll,start,end){
return cljs.core.take.call(null,(end - start),cljs.core.drop.call(null,start,coll));
});
/**
 * Returns the index of an element in a sequence or `-1` if not present.
 * 
 *   ~~~klipse
 *   (index-of (range 100) 18)
 *   ~~~
 *   
 */
gadjett.collections.index_of = (function gadjett$collections$index_of(s,element){
var or__17825__auto__ = cljs.core.ffirst.call(null,cljs.core.filter.call(null,(function (p1__38009_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,p1__38009_SHARP_),element);
}),cljs.core.map_indexed.call(null,(function (p1__38010_SHARP_,p2__38011_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__38010_SHARP_,p2__38011_SHARP_],null));
}),s)));
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return (-1);
}
});
gadjett.collections.flatten_keys_STAR_ = (function gadjett$collections$flatten_keys_STAR_(a,ks,m){
if(cljs.core.map_QMARK_.call(null,m)){
if(cljs.core.seq.call(null,m)){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.map.call(null,(function (p__38012){
var vec__38013 = p__38012;
var k = cljs.core.nth.call(null,vec__38013,(0),null);
var v = cljs.core.nth.call(null,vec__38013,(1),null);
return gadjett.collections.flatten_keys_STAR_.call(null,a,cljs.core.conj.call(null,ks,k),v);
}),cljs.core.seq.call(null,m)));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
} else {
return cljs.core.assoc.call(null,a,ks,m);
}
});
/**
 * 
 * Flatten the keys of a nested map.
 * Thanks to [Jay Fields](http://blog.jayfields.com/2010/09/clojure-flatten-keys.html)
 * 
 * ~~~klipse
 * (flatten-keys {:a {:b 1} :c {:d 2 :e 4 :f {:g 8}}})
 * ~~~
 */
gadjett.collections.flatten_keys = (function gadjett$collections$flatten_keys(m){
return gadjett.collections.flatten_keys_STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,m);
});
/**
 * 
 *   Unflattend the keys of a map that has been `flatten-keys`ed.
 * 
 * ~~~klipse
 * (unflatten-keys {[:a :b] 1, [:c :d] 2, [:c :e] 4, [:c :f :g] 8})
 * ~~~
 */
gadjett.collections.unflatten_keys = (function gadjett$collections$unflatten_keys(m){
return cljs.core.reduce_kv.call(null,(function (a,b,c){
return cljs.core.assoc_in.call(null,a,b,c);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
 * Creates a map with n leaves which are nested values of m.
 *   The following assertion holds:
 * 
 * ~~~clojure
 *    (>= n (count (flatten-keys (take-from-map n m)))))))
 * ~~~
 * 
 * ~~~klipse
 *   (take-from-map 3 {:a {:b 1}, :c {:e 4, :d 2, :f {:g 8}}})
 * ~~~
 *   
 */
gadjett.collections.take_from_map = (function gadjett$collections$take_from_map(n,m){
return gadjett.collections.unflatten_keys.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.take.call(null,n,gadjett.collections.flatten_keys.call(null,m))));
});
gadjett.collections.deep_merge_STAR_ = (function gadjett$collections$deep_merge_STAR_(var_args){
var args__19144__auto__ = [];
var len__19134__auto___38017 = arguments.length;
var i__19135__auto___38018 = (0);
while(true){
if((i__19135__auto___38018 < len__19134__auto___38017)){
args__19144__auto__.push((arguments[i__19135__auto___38018]));

var G__38019 = (i__19135__auto___38018 + (1));
i__19135__auto___38018 = G__38019;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return gadjett.collections.deep_merge_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});

gadjett.collections.deep_merge_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
var f = (function (old,new$){
if(((cljs.core.map_QMARK_.call(null,old)) && (cljs.core.map_QMARK_.call(null,new$)))){
return cljs.core.merge_with.call(null,gadjett.collections.deep_merge_STAR_,old,new$);
} else {
return new$;
}
});
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,maps)){
return cljs.core.apply.call(null,cljs.core.merge_with,f,maps);
} else {
return cljs.core.last.call(null,maps);
}
});

gadjett.collections.deep_merge_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
gadjett.collections.deep_merge_STAR_.cljs$lang$applyTo = (function (seq38016){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38016));
});

/**
 *  Deep merges maps.
 * 
 * ~~~klipse
 * (deep-merge {} {:a {:b 1}, :c {:e 4, :d 2, :f {:g 8}}} {:a {:b 1}, :c {:e 4, :d 2000, :f {:g 9000}}})
 * ~~~
 */
gadjett.collections.deep_merge = (function gadjett$collections$deep_merge(var_args){
var args__19144__auto__ = [];
var len__19134__auto___38021 = arguments.length;
var i__19135__auto___38022 = (0);
while(true){
if((i__19135__auto___38022 < len__19134__auto___38021)){
args__19144__auto__.push((arguments[i__19135__auto___38022]));

var G__38023 = (i__19135__auto___38022 + (1));
i__19135__auto___38022 = G__38023;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return gadjett.collections.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});

gadjett.collections.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
var maps__$1 = cljs.core.filter.call(null,cljs.core.identity,maps);
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,maps__$1)){
} else {
throw (new Error("Assert failed: (every? map? maps)"));
}

return cljs.core.apply.call(null,cljs.core.merge_with,gadjett.collections.deep_merge_STAR_,maps__$1);
});

gadjett.collections.deep_merge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
gadjett.collections.deep_merge.cljs$lang$applyTo = (function (seq38020){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38020));
});

gadjett.collections.deep_merge_with_STAR_ = (function gadjett$collections$deep_merge_with_STAR_(var_args){
var args__19144__auto__ = [];
var len__19134__auto___38026 = arguments.length;
var i__19135__auto___38027 = (0);
while(true){
if((i__19135__auto___38027 < len__19134__auto___38026)){
args__19144__auto__.push((arguments[i__19135__auto___38027]));

var G__38028 = (i__19135__auto___38027 + (1));
i__19135__auto___38027 = G__38028;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((1) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((1)),(0),null)):null);
return gadjett.collections.deep_merge_with_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19145__auto__);
});

gadjett.collections.deep_merge_with_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (g,maps){
var f = (function (old,new$){
if(((cljs.core.map_QMARK_.call(null,old)) && (cljs.core.map_QMARK_.call(null,new$)))){
return cljs.core.merge_with.call(null,cljs.core.partial.call(null,gadjett.collections.deep_merge_with_STAR_,g),old,new$);
} else {
return g.call(null,old,new$);
}
});
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,maps)){
return cljs.core.apply.call(null,cljs.core.merge_with,f,maps);
} else {
return cljs.core.apply.call(null,g,maps);
}
});

gadjett.collections.deep_merge_with_STAR_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
gadjett.collections.deep_merge_with_STAR_.cljs$lang$applyTo = (function (seq38024){
var G__38025 = cljs.core.first.call(null,seq38024);
var seq38024__$1 = cljs.core.next.call(null,seq38024);
var self__19119__auto__ = this;
return self__19119__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38025,seq38024__$1);
});

/**
 * Like merge-with but deep.
 * ~~~klipse
 * (deep-merge-with concat
 *               {:x {:b [1]
 *                    :a [1]}}
 *               {:x {:a [3 4]}})
 * ~~~
 */
gadjett.collections.deep_merge_with = (function gadjett$collections$deep_merge_with(var_args){
var args__19144__auto__ = [];
var len__19134__auto___38031 = arguments.length;
var i__19135__auto___38032 = (0);
while(true){
if((i__19135__auto___38032 < len__19134__auto___38031)){
args__19144__auto__.push((arguments[i__19135__auto___38032]));

var G__38033 = (i__19135__auto___38032 + (1));
i__19135__auto___38032 = G__38033;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((1) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((1)),(0),null)):null);
return gadjett.collections.deep_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19145__auto__);
});

gadjett.collections.deep_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (g,maps){
var maps__$1 = cljs.core.filter.call(null,cljs.core.identity,maps);
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,maps__$1)){
} else {
throw (new Error("Assert failed: (every? map? maps)"));
}

return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.partial.call(null,gadjett.collections.deep_merge_with_STAR_,g),maps__$1);
});

gadjett.collections.deep_merge_with.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
gadjett.collections.deep_merge_with.cljs$lang$applyTo = (function (seq38029){
var G__38030 = cljs.core.first.call(null,seq38029);
var seq38029__$1 = cljs.core.next.call(null,seq38029);
var self__19119__auto__ = this;
return self__19119__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38030,seq38029__$1);
});

/**
 * Returns all branches and leaves off a nested map object.
 * 
 * ~~~klipse
 * (branches-and-leaves {:a {:b 1 :c {:d 2}} :e 3})
 * ~~~
 *   
 */
gadjett.collections.branches_and_leaves = (function gadjett$collections$branches_and_leaves(m){
var $ = cljs.core.tree_seq.call(null,cljs.core.coll_QMARK_,(function (p1__38034_SHARP_){
if(cljs.core.map_QMARK_.call(null,p1__38034_SHARP_)){
return cljs.core.vals.call(null,p1__38034_SHARP_);
} else {
return p1__38034_SHARP_;
}
}),m);
var $__$1 = cljs.core.group_by.call(null,cljs.core.coll_QMARK_,$);
var $__$2 = cljs.core.assoc.call(null,$__$1,true,(function (){var or__17825__auto__ = cljs.core.get.call(null,$__$1,true);
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
var $__$3 = cljs.core.assoc.call(null,$__$2,false,(function (){var or__17825__auto__ = cljs.core.get.call(null,$__$2,false);
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
return clojure.set.rename_keys.call(null,$__$3,new cljs.core.PersistentArrayMap(null, 2, [true,new cljs.core.Keyword(null,"branches","branches",-1240337268),false,new cljs.core.Keyword(null,"leaves","leaves",-2143630574)], null));
});
/**
 * Filters branches of a (nested) map `m` according to a predicate `m`.
 * 
 * ~~~klipse
 * (filter-branches {:x {:id 19 :b 1 :c {:id 2}} :e 3} :id)
 * ~~~
 *   
 */
gadjett.collections.filter_branches = (function gadjett$collections$filter_branches(m,p){
return cljs.core.filter.call(null,p,new cljs.core.Keyword(null,"branches","branches",-1240337268).cljs$core$IFn$_invoke$arity$1(gadjett.collections.branches_and_leaves.call(null,m)));
});
/**
 * Checks if index `idx` is in range of vector `v`. More efficient than `(get v idx)`
 * 
 * ~~~klipse
 *  (map #(out-of-bound? [1 2 3] %) [-1 0 1 2 3 4])
 * ~~~
 *   
 */
gadjett.collections.out_of_bound_QMARK_ = (function gadjett$collections$out_of_bound_QMARK_(v,idx){
return (((cljs.core.count.call(null,v) <= idx)) || (((0) > idx)));
});
/**
 * Splits a collection between two items according to predicate `pred` - which means split the sequence on breaking point.
 * 
 *   See: [here](http://stackoverflow.com/questions/23207490/partition-a-seq-by-a-windowing-predicate-in-clojure)
 * 
 *   For instance, split each time the series stop being ascending:
 * 
 * ~~~klipse
 * (partition-between > [1 2 4 9 8 7 6 5 1 2 4 5 11])
 * ~~~
 */
gadjett.collections.partition_between = (function gadjett$collections$partition_between(pred,coll){
var switch$ = cljs.core.reductions.call(null,cljs.core.not_EQ_,true,cljs.core.map.call(null,pred,coll,cljs.core.rest.call(null,coll)));
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core.first),cljs.core.partition_by.call(null,cljs.core.second,cljs.core.map.call(null,cljs.core.list,coll,switch$)));
});
/**
 * Ensure `s` is a collection: if `s` is a collection returns it; otherwise returns (s)
 * 
 * ~~~klipse
 * (collify 1)
 * ~~~
 * 
 * ~~~klipse
 * (collify [1 2 3])
 * ~~~
 *   
 */
gadjett.collections.collify = (function gadjett$collections$collify(s){
if(cljs.core.coll_QMARK_.call(null,s)){
return s;
} else {
return (new cljs.core.List(null,s,null,(1),null));
}
});
/**
 * A zipper for `edn`.
 * 
 * ~~~klipse
 *   (edn-zip {:a {:b 1}, :c {:e 4, :d 2, :f {:g 8}}})
 * ~~~
 *   
 */
gadjett.collections.edn_zip = (function gadjett$collections$edn_zip(root){
return clojure.zip.zipper.call(null,(function (p1__38035_SHARP_){
return ((cljs.core.vector_QMARK_.call(null,p1__38035_SHARP_)) || (cljs.core.map_QMARK_.call(null,p1__38035_SHARP_)) || (cljs.core.seq_QMARK_.call(null,p1__38035_SHARP_)));
}),(function (node){
if(cljs.core.vector_QMARK_.call(null,node)){
return cljs.core.vec.call(null,node);
} else {
if(cljs.core.map_QMARK_.call(null,node)){
return cljs.core.vec.call(null,node);
} else {
if(cljs.core.seq_QMARK_.call(null,node)){
return cljs.core.seq.call(null,node);
} else {
return null;
}
}
}
}),(function (node,children){
return cljs.core.with_meta.call(null,((cljs.core.vector_QMARK_.call(null,node))?cljs.core.vec.call(null,children):((cljs.core.map_QMARK_.call(null,node))?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,children):((cljs.core.seq_QMARK_.call(null,node))?children:null))),cljs.core.meta.call(null,node));
}),root);
});
gadjett.collections.loc_my_replace = (function gadjett$collections$loc_my_replace(smap,loc){
var temp__5455__auto__ = cljs.core.find.call(null,smap,clojure.zip.node.call(null,loc));
if(cljs.core.truth_(temp__5455__auto__)){
var vec__38036 = temp__5455__auto__;
var _ = cljs.core.nth.call(null,vec__38036,(0),null);
var vec__38039 = cljs.core.nth.call(null,vec__38036,(1),null);
var seq__38040 = cljs.core.seq.call(null,vec__38039);
var first__38041 = cljs.core.first.call(null,seq__38040);
var seq__38040__$1 = cljs.core.next.call(null,seq__38040);
var replacement = first__38041;
var values = seq__38040__$1;
var $ = loc;
var $__$1 = clojure.zip.replace.call(null,$,replacement);
return cljs.core.reduce.call(null,((function ($,$__$1,vec__38036,_,vec__38039,seq__38040,first__38041,seq__38040__$1,replacement,values,temp__5455__auto__){
return (function (agg,v){
return clojure.zip.insert_right.call(null,agg,v);
});})($,$__$1,vec__38036,_,vec__38039,seq__38040,first__38041,seq__38040__$1,replacement,values,temp__5455__auto__))
,$__$1,cljs.core.reverse.call(null,values));
} else {
return loc;
}
});
/**
 * Recursively transforms `form` by replacing keys in `smap` with their
 *   values, spliced. The values in `smap` must be sequences. Like clojure.walk/prewalk-replace but supports list in values.
 * 
 * ~~~klipse
 * (my-replace '{go (go gadjett)} '(go (<! (timeout 100)) (go (<! timeout 0))))
 * ~~~
 *   
 */
gadjett.collections.my_replace = (function gadjett$collections$my_replace(smap,form){
if(cljs.core.every_QMARK_.call(null,cljs.core.seq_QMARK_,cljs.core.vals.call(null,smap))){
} else {
throw (new Error("Assert failed: (every? seq? (vals smap))"));
}

var loc = gadjett.collections.edn_zip.call(null,form);
while(true){
if(clojure.zip.end_QMARK_.call(null,loc)){
return clojure.zip.root.call(null,loc);
} else {
var G__38042 = clojure.zip.next.call(null,gadjett.collections.loc_my_replace.call(null,smap,loc));
loc = G__38042;
continue;
}
break;
}
});
gadjett.collections.comment_QMARK_ = (function gadjett$collections$comment_QMARK_(s){
return cljs.core.re_matches.call(null,/\s*;.*/,s);
});
/**
 * Removes comment lines from the end.
 * 
 * ~~~klipse
 *   ; we use (char 10) for end-of-line due to technical issues with string manipulation with `codox`
 *   (let [lines (clojure.string/join (char 10) ["aa", "  ", "bb" "; this comment should not appear"])]
 *   (remove-ending-comments lines))
 * ~~~
 *   
 */
gadjett.collections.remove_ending_comments = (function gadjett$collections$remove_ending_comments(s){
return clojure.string.join.call(null,"\n",cljs.core.reverse.call(null,cljs.core.drop_while.call(null,gadjett.collections.comment_QMARK_,cljs.core.reverse.call(null,clojure.string.split_lines.call(null,s)))));
});
/**
 * Removes blank lines from the begining and from the end (not from the middle)
 * 
 * ~~~klipse
 *   ; we use (char 10) for end-of-line due to technical issues with string manipulation with `codox`
 *   (let [lines (clojure.string/join (char 10) ["  ", "aa", "  ", "bb", " 	  "])]
 *   (fix-blank-lines lines))
 * ~~~
 *   
 */
gadjett.collections.fix_blank_lines = (function gadjett$collections$fix_blank_lines(s){
return clojure.string.join.call(null,"\n",cljs.core.reverse.call(null,cljs.core.drop_while.call(null,clojure.string.blank_QMARK_,cljs.core.reverse.call(null,cljs.core.drop_while.call(null,clojure.string.blank_QMARK_,clojure.string.split_lines.call(null,s))))));
});
/**
 * Removes blank lines.
 * ~~~klipse
 *   ; we use (char 10) for end-of-line due to technical issues with string manipulation with `codox`
 *   (let [lines (clojure.string/join (char 10) ["  ", "aa", "  ", "bb", " 	  "])]
 *   (remove-blank-lines lines))
 * ~~~
 *   
 */
gadjett.collections.remove_blank_lines = (function gadjett$collections$remove_blank_lines(s){
return clojure.string.join.call(null,"\n",cljs.core.remove.call(null,clojure.string.blank_QMARK_,clojure.string.split_lines.call(null,s)));
});
/**
 * 
 * (clojurescript only)
 * 
 * Compacts an expression by taking only the first `max-elements-in-coll` from collections and first `max-chars-in-str` from strings. Functions are displayed as "lambda()".
 * 
 * It works recursively. It is useful for logging and reporting.
 * 
 * Default settings:
 * 
 * - `max-elements-in-coll` 10
 * - `max-chars-in-str` 20
 * 
 * ~~~klipse
 * (compact {:infinite-list (range)
 *        :long-str "a very very very very long string - too long to be true"
 *                                                    :long-map (zipmap (range 100) (range 100))
 *                                                      :function #(+ 1 2)})
 * ~~~
 *                
 */
gadjett.collections.compact = (function gadjett$collections$compact(var_args){
var args__19144__auto__ = [];
var len__19134__auto___38050 = arguments.length;
var i__19135__auto___38051 = (0);
while(true){
if((i__19135__auto___38051 < len__19134__auto___38050)){
args__19144__auto__.push((arguments[i__19135__auto___38051]));

var G__38052 = (i__19135__auto___38051 + (1));
i__19135__auto___38051 = G__38052;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((1) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((1)),(0),null)):null);
return gadjett.collections.compact.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19145__auto__);
});

gadjett.collections.compact.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__38047){
var map__38048 = p__38047;
var map__38048__$1 = (((((!((map__38048 == null))))?(((((map__38048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38048):map__38048);
var args = map__38048__$1;
var max_elements_in_coll = cljs.core.get.call(null,map__38048__$1,new cljs.core.Keyword(null,"max-elements-in-coll","max-elements-in-coll",-2076494525),(10));
var max_chars_in_str = cljs.core.get.call(null,map__38048__$1,new cljs.core.Keyword(null,"max-chars-in-str","max-chars-in-str",-182482200),(20));
if(cljs.core._EQ_.call(null,x,true)){
return x;
} else {
if(cljs.core._EQ_.call(null,x,false)){
return x;
} else {
if((x == null)){
return x;
} else {
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.subs.call(null,x,(0),max_chars_in_str);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return gadjett.collections.take_from_map.call(null,max_elements_in_coll,gadjett.collections.map_object.call(null,((function (map__38048,map__38048__$1,args,max_elements_in_coll,max_chars_in_str){
return (function (p1__38043_SHARP_){
return gadjett.collections.compact.call(null,p1__38043_SHARP_,args);
});})(map__38048,map__38048__$1,args,max_elements_in_coll,max_chars_in_str))
,x));
} else {
if(cljs.core.seqable_QMARK_.call(null,x)){
return cljs.core.take.call(null,max_elements_in_coll,cljs.core.map.call(null,((function (map__38048,map__38048__$1,args,max_elements_in_coll,max_chars_in_str){
return (function (p1__38044_SHARP_){
return gadjett.collections.compact.call(null,p1__38044_SHARP_,args);
});})(map__38048,map__38048__$1,args,max_elements_in_coll,max_chars_in_str))
,x));
} else {
if(cljs.core.array_QMARK_.call(null,x)){
return ["***[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,x)),"]***"].join('');
} else {
if(cljs.core._EQ_.call(null,Function,cljs.core.type.call(null,x))){
return "lambda()";
} else {
if((x instanceof Object)){
return ["***[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,x)),(0),(15))),"]***"].join('');
} else {
return ["***[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,x)),"]***"].join('');

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

gadjett.collections.compact.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
gadjett.collections.compact.cljs$lang$applyTo = (function (seq38045){
var G__38046 = cljs.core.first.call(null,seq38045);
var seq38045__$1 = cljs.core.next.call(null,seq38045);
var self__19119__auto__ = this;
return self__19119__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38046,seq38045__$1);
});

/**
 * Map the values of a nested map.
 * ~~~klipse
 *   (map-nested-vals first {:a [1 2 3]
 *                        :b {:c [4 5 6]}})
 * ~~~
 *   
 */
gadjett.collections.map_nested_vals = (function gadjett$collections$map_nested_vals(f,m){
return gadjett.collections.unflatten_keys.call(null,gadjett.collections.map_object.call(null,f,gadjett.collections.flatten_keys.call(null,m)));
});
/**
 * Join a sequence of collections `colls` according to function equality.
 * `fns` - a sequence of functions
 * `colls` - a sequence of collections
 * ~~~klipse
 * (let [a [{:id 1 :price 19} {:id 2 :price 3}]
 *      b [{:guid 1 :quantity 13}]]
 *   (join-them [:id :guid] [a b]))
 * ~~~
 */
gadjett.collections.join_them = (function gadjett$collections$join_them(fns,colls){
return cljs.core.vals.call(null,cljs.core.apply.call(null,gadjett.collections.deep_merge,cljs.core.map.call(null,gadjett.collections.mapify,fns,colls)));
});
/**
 * Like clojure.core/subs but prevents some exceptions when the `start` or `end` are out of bound.
 * ~~~klipse
 *   (subs "" -2)
 * ~~~
 * 
 *   
 */
gadjett.collections.substr = (function gadjett$collections$substr(var_args){
var G__38054 = arguments.length;
switch (G__38054) {
case 2:
return gadjett.collections.substr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return gadjett.collections.substr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

gadjett.collections.substr.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return cljs.core.subs.call(null,s,(function (){var x__18183__auto__ = (0);
var y__18184__auto__ = (function (){var x__18190__auto__ = start;
var y__18191__auto__ = cljs.core.count.call(null,s);
return ((x__18190__auto__ < y__18191__auto__) ? x__18190__auto__ : y__18191__auto__);
})();
return ((x__18183__auto__ > y__18184__auto__) ? x__18183__auto__ : y__18184__auto__);
})());
});

gadjett.collections.substr.cljs$core$IFn$_invoke$arity$3 = (function (s,start,end){
var start__$1 = (function (){var x__18183__auto__ = (0);
var y__18184__auto__ = (function (){var x__18190__auto__ = start;
var y__18191__auto__ = cljs.core.count.call(null,s);
return ((x__18190__auto__ < y__18191__auto__) ? x__18190__auto__ : y__18191__auto__);
})();
return ((x__18183__auto__ > y__18184__auto__) ? x__18183__auto__ : y__18184__auto__);
})();
var end__$1 = (function (){var x__18190__auto__ = cljs.core.count.call(null,s);
var y__18191__auto__ = end;
return ((x__18190__auto__ < y__18191__auto__) ? x__18190__auto__ : y__18191__auto__);
})();
return cljs.core.subs.call(null,s,start__$1,end__$1);
});

gadjett.collections.substr.cljs$lang$maxFixedArity = 3;

/**
 * Thanks [Jay Fields](http://blog.jayfields.com/2011/01/clojure-select-keys-select-values-and.html)
 */
gadjett.collections.select_keys_in_order = (function gadjett$collections$select_keys_in_order(m,keyseq){
return cljs.core.map.call(null,m,keyseq);
});
gadjett.collections.select_vals = (function gadjett$collections$select_vals(map,keyseq){
return cljs.core.vals.call(null,cljs.core.select_keys.call(null,map,keyseq));
});
/**
 * Thanks [Jay Fields](http://blog.jayfields.com/2011/01/clojure-select-keys-select-values-and.html)
 */
gadjett.collections.select_vals_in_order = (function gadjett$collections$select_vals_in_order(map,ks){
return cljs.core.reduce.call(null,(function (p1__38056_SHARP_,p2__38057_SHARP_){
return cljs.core.conj.call(null,p1__38056_SHARP_,map.call(null,p2__38057_SHARP_));
}),cljs.core.PersistentVector.EMPTY,ks);
});

//# sourceMappingURL=collections.js.map
