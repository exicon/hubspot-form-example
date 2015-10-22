// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('clojure.set');
goog.require('javelin.core');
goog.require('cljs.reader');
goog.require('clojure.string');



cljs.core.enable_console_print_BANG_();
/**
 * Is the application running in a prerendering container (eg. PhantomJS via
 * the prerender task)?
 */
hoplon.core.prerendering_QMARK_ = (new goog.Uri(window.location.href)).getParameterValue("prerendering");
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__8672_SHARP_,p2__8673_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__8672_SHARP_,p2__8673_SHARP_.getAttribute("static-id"),p2__8673_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,jQuery("[static-id]").get());
hoplon.core.do_watch = (function hoplon$core$do_watch(){
var args8674 = [];
var len__6092__auto___8679 = arguments.length;
var i__6093__auto___8680 = (0);
while(true){
if((i__6093__auto___8680 < len__6092__auto___8679)){
args8674.push((arguments[i__6093__auto___8680]));

var G__8681 = (i__6093__auto___8680 + (1));
i__6093__auto___8680 = G__8681;
continue;
} else {
}
break;
}

var G__8676 = args8674.length;
switch (G__8676) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8674.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(atom,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (atom,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__8677_8683 = init;
var G__8678_8684 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__8677_8683,G__8678_8684) : f.call(null,G__8677_8683,G__8678_8684));

cljs.core.add_watch(atom,k,((function (k){
return (function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;
hoplon.core.bust_cache = (function hoplon$core$bust_cache(path){
var vec__8687 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8687,(0),null);
var more = cljs.core.nthnext(vec__8687,(1));
var vec__8688 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8688,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8688,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(f1),cljs.core.str("."),cljs.core.str("69d0c34574f846378da24b8d6d4fe653")].join(''),f2], null)))));
});
hoplon.core.child_vec = (function hoplon$core$child_vec(this$){
var x = this$.childNodes;
var l = x.length;
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var or__5053__auto__ = (function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l);
if(and__5041__auto__){
return cljs.core.persistent_BANG_(ret);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5053__auto__)){
return or__5053__auto__;
} else {
var G__8689 = (i + (1));
var G__8690 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__8689;
ret = G__8690;
continue;
}
break;
}
});
hoplon.core.__GT_node = (function hoplon$core$__GT_node(x){
if(typeof x === 'string'){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(x) : hoplon.core.$text.call(null,x));
} else {
if(typeof x === 'number'){
var G__8692 = [cljs.core.str(x)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__8692) : hoplon.core.$text.call(null,G__8692));
} else {
return x;

}
}
});
hoplon.core.removeChild = Element.prototype.removeChild;
hoplon.core.appendChild = Element.prototype.appendChild;
hoplon.core.insertBefore = Element.prototype.insertBefore;
hoplon.core.replaceChild = Element.prototype.replaceChild;
hoplon.core.setAttribute = Element.prototype.setAttribute;
hoplon.core.merge_kids = (function hoplon$core$merge_kids(this$,old,new$){
var new$__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(new$));
var new_QMARK_ = cljs.core.set(new$__$1);
var G__8703 = new$__$1;
var vec__8705 = G__8703;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8705,(0),null);
var xs = cljs.core.nthnext(vec__8705,(1));
var G__8704 = hoplon.core.child_vec(this$);
var vec__8706 = G__8704;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8706,(0),null);
var ks = cljs.core.nthnext(vec__8706,(1));
var kids = vec__8706;
var G__8703__$1 = G__8703;
var G__8704__$1 = G__8704;
while(true){
var vec__8707 = G__8703__$1;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8707,(0),null);
var xs__$1 = cljs.core.nthnext(vec__8707,(1));
var vec__8708 = G__8704__$1;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8708,(0),null);
var ks__$1 = cljs.core.nthnext(vec__8708,(1));
var kids__$1 = vec__8708;
if(cljs.core.truth_((function (){var or__5053__auto__ = x__$1;
if(cljs.core.truth_(or__5053__auto__)){
return or__5053__auto__;
} else {
return k__$1;
}
})())){
var G__8709 = xs__$1;
var G__8710 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
hoplon.core.appendChild.call(this$,hoplon.core.__GT_node(x__$1));

return ks__$2;
})():((cljs.core.not(x__$1))?(function (){var ks__$2 = ks__$1;
if(cljs.core.truth_((new_QMARK_.cljs$core$IFn$_invoke$arity$1 ? new_QMARK_.cljs$core$IFn$_invoke$arity$1(k__$1) : new_QMARK_.call(null,k__$1)))){
} else {
hoplon.core.removeChild.call(this$,hoplon.core.__GT_node(k__$1));
}

return ks__$2;
})():(function (){var kids__$2 = kids__$1;
hoplon.core.insertBefore.call(this$,hoplon.core.__GT_node(x__$1),hoplon.core.__GT_node(k__$1));

return kids__$2;
})()
)));
G__8703__$1 = G__8709;
G__8704__$1 = G__8710;
continue;
} else {
return null;
}
break;
}
});
hoplon.core.ensure_kids_BANG_ = (function hoplon$core$ensure_kids_BANG_(this$){
var this$__$1 = this$;
if(cljs.core.truth_(this$__$1.hoplonKids)){
} else {
var kids_8713 = (function (){var G__8712 = hoplon.core.child_vec(this$__$1);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8712) : cljs.core.atom.call(null,G__8712));
})();
this$__$1.hoplonKids = kids_8713;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_8713,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.set_appendChild_BANG_ = (function hoplon$core$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

var kids_8716 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1));
var i_8717 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(kids_8716) : cljs.core.deref.call(null,kids_8716)));
if(cljs.core.truth_(javelin.core.cell_QMARK_(x__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(x__$1,((function (kids_8716,i_8717,x__$1,this$__$1){
return (function (p1__8715_SHARP_,p2__8714_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_8716,cljs.core.assoc,i_8717,p2__8714_SHARP_);
});})(kids_8716,i_8717,x__$1,this$__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_8716,cljs.core.assoc,i_8717,x__$1);
}

return x__$1;
});
});
hoplon.core.set_removeChild_BANG_ = (function hoplon$core$set_removeChild_BANG_(this$,kidfn){
return this$.removeChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (x__$1,this$__$1){
return (function (p1__8718_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__8718_SHARP_));
});})(x__$1,this$__$1))
);

return x__$1;
});
});
hoplon.core.set_insertBefore_BANG_ = (function hoplon$core$set_insertBefore_BANG_(this$,kidfn){
return this$.insertBefore = (function (x,y){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (x__$1,this$__$1){
return (function (p1__8719_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.array_seq([p1__8719_SHARP_], 0)));
});})(x__$1,this$__$1))
);

return x__$1;
});
});
hoplon.core.set_replaceChild_BANG_ = (function hoplon$core$set_replaceChild_BANG_(this$,kidfn){
return this$.replaceChild = (function (x,y){
var this$__$1 = this;
var y__$1 = y;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (y__$1,this$__$1){
return (function (p1__8720_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__8720_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_8721 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_8722 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__8723 = (function (){var and__5041__auto__ = attr_8722;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(attr_8722) : cljs.core.deref.call(null,attr_8722)),kk_8721);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__8723)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_8722,cljs.core.assoc,kk_8721,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__8724_SHARP_){
return p1__8724_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__8725_SHARP_){
return p1__8725_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__8726_SHARP_){
return p1__8726_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__8727_SHARP_){
return p1__8727_SHARP_.hoplonKids;
}));

hoplon.core.ICustomElement = {};

hoplon.core._set_attribute_BANG_ = (function hoplon$core$_set_attribute_BANG_(this$,k,v){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_attribute_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_set_attribute_BANG_$arity$3(this$,k,v);
} else {
var x__5689__auto__ = (((this$ == null))?null:this$);
var m__5690__auto__ = (hoplon.core._set_attribute_BANG_[goog.typeOf(x__5689__auto__)]);
if(!((m__5690__auto__ == null))){
return (m__5690__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5690__auto__.cljs$core$IFn$_invoke$arity$3(this$,k,v) : m__5690__auto__.call(null,this$,k,v));
} else {
var m__5690__auto____$1 = (hoplon.core._set_attribute_BANG_["_"]);
if(!((m__5690__auto____$1 == null))){
return (m__5690__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5690__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,k,v) : m__5690__auto____$1.call(null,this$,k,v));
} else {
throw cljs.core.missing_protocol("ICustomElement.-set-attribute!",this$);
}
}
}
});

hoplon.core._append_child_BANG_ = (function hoplon$core$_append_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2(this$,child);
} else {
var x__5689__auto__ = (((this$ == null))?null:this$);
var m__5690__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__5689__auto__)]);
if(!((m__5690__auto__ == null))){
return (m__5690__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5690__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__5690__auto__.call(null,this$,child));
} else {
var m__5690__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__5690__auto____$1 == null))){
return (m__5690__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5690__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__5690__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("ICustomElement.-append-child!",this$);
}
}
}
});

hoplon.core._remove_child_BANG_ = (function hoplon$core$_remove_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2(this$,child);
} else {
var x__5689__auto__ = (((this$ == null))?null:this$);
var m__5690__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__5689__auto__)]);
if(!((m__5690__auto__ == null))){
return (m__5690__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5690__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__5690__auto__.call(null,this$,child));
} else {
var m__5690__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__5690__auto____$1 == null))){
return (m__5690__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5690__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__5690__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("ICustomElement.-remove-child!",this$);
}
}
}
});

hoplon.core._replace_child_BANG_ = (function hoplon$core$_replace_child_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3(this$,new$,existing);
} else {
var x__5689__auto__ = (((this$ == null))?null:this$);
var m__5690__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__5689__auto__)]);
if(!((m__5690__auto__ == null))){
return (m__5690__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5690__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__5690__auto__.call(null,this$,new$,existing));
} else {
var m__5690__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__5690__auto____$1 == null))){
return (m__5690__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5690__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__5690__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("ICustomElement.-replace-child!",this$);
}
}
}
});

hoplon.core._insert_before_BANG_ = (function hoplon$core$_insert_before_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3(this$,new$,existing);
} else {
var x__5689__auto__ = (((this$ == null))?null:this$);
var m__5690__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__5689__auto__)]);
if(!((m__5690__auto__ == null))){
return (m__5690__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5690__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__5690__auto__.call(null,this$,new$,existing));
} else {
var m__5690__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__5690__auto____$1 == null))){
return (m__5690__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5690__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__5690__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("ICustomElement.-insert-before!",this$);
}
}
}
});

hoplon.core.append_child_BANG_ = (function hoplon$core$append_child_BANG_(this$,child){
return hoplon.core._append_child_BANG_(this$,child);
});
hoplon.core.set_attribute_BANG_ = (function hoplon$core$set_attribute_BANG_(this$,k,v){
return hoplon.core._set_attribute_BANG_(this$,k,v);
});
hoplon.core.remove_child_BANG_ = (function hoplon$core$remove_child_BANG_(this$,child){
return hoplon.core._remove_child_BANG_(this$,child);
});
hoplon.core.replace_child_BANG_ = (function hoplon$core$replace_child_BANG_(this$,new$,existing){
return hoplon.core._replace_child_BANG_(this$,new$,existing);
});
hoplon.core.insert_before_BANG_ = (function hoplon$core$insert_before_BANG_(this$,new$,existing){
return hoplon.core._insert_before_BANG_(this$,new$,existing);
});
hoplon.core.is_ie8 = cljs.core.not((window["Node"]));
hoplon.core.node_QMARK_ = ((cljs.core.not(hoplon.core.is_ie8))?(function (p1__8730_SHARP_){
return (p1__8730_SHARP_ instanceof Node);
}):(function (p1__8731_SHARP_){
try{return p1__8731_SHARP_.nodeType;
}catch (e8732){if((e8732 instanceof Error)){
var _ = e8732;
return null;
} else {
throw e8732;

}
}}));
hoplon.core.vector_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__8733_SHARP_){
try{return cljs.core.vector_QMARK_(p1__8733_SHARP_);
}catch (e8734){if((e8734 instanceof Error)){
var _ = e8734;
return null;
} else {
throw e8734;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__8735_SHARP_){
try{return cljs.core.seq_QMARK_(p1__8735_SHARP_);
}catch (e8736){if((e8736 instanceof Error)){
var _ = e8736;
return null;
} else {
throw e8736;

}
}}));
hoplon.core.safe_nth = (function hoplon$core$safe_nth(){
var args8737 = [];
var len__6092__auto___8741 = arguments.length;
var i__6093__auto___8742 = (0);
while(true){
if((i__6093__auto___8742 < len__6092__auto___8741)){
args8737.push((arguments[i__6093__auto___8742]));

var G__8743 = (i__6093__auto___8742 + (1));
i__6093__auto___8742 = G__8743;
continue;
} else {
}
break;
}

var G__8739 = args8737.length;
switch (G__8739) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8737.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e8740){if((e8740 instanceof Error)){
var _ = e8740;
return not_found;
} else {
throw e8740;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;
hoplon.core.timeout = (function hoplon$core$timeout(){
var args8745 = [];
var len__6092__auto___8748 = arguments.length;
var i__6093__auto___8749 = (0);
while(true){
if((i__6093__auto___8749 < len__6092__auto___8748)){
args8745.push((arguments[i__6093__auto___8749]));

var G__8750 = (i__6093__auto___8749 + (1));
i__6093__auto___8749 = G__8750;
continue;
} else {
}
break;
}

var G__8747 = args8745.length;
switch (G__8747) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8745.length)].join('')));

}
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2(f,(0));
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

hoplon.core.timeout.cljs$lang$maxFixedArity = 2;
hoplon.core.when_dom = (function hoplon$core$when_dom(this$,f){
if(!((this$ instanceof Element))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((function hoplon$core$when_dom_$_doit(){
if(cljs.core.truth_(document.documentElement.contains(this$))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2(hoplon$core$when_dom_$_doit,(20));
}
}));
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__8760 = args;
var vec__8761 = G__8760;
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8761,(0),null);
var args__$1 = cljs.core.nthnext(vec__8761,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__8760__$1 = G__8760;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__8762 = G__8760__$1;
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8762,(0),null);
var args__$2 = cljs.core.nthnext(vec__8762,(1));
if(cljs.core.not(arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__8763 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__8760__$1,attr__$2,kids__$2,vec__8762,arg__$1,args__$2,attr,kids,G__8760,vec__8761,arg,args__$1){
return (function (p1__8752_SHARP_,p2__8753_SHARP_,p3__8754_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__8752_SHARP_,p2__8753_SHARP_,p3__8754_SHARP_);
});})(attr__$1,kids__$1,G__8760__$1,attr__$2,kids__$2,vec__8762,arg__$1,args__$2,attr,kids,G__8760,vec__8761,arg,args__$1))
,attr__$2,arg__$1);
var G__8764 = kids__$2;
var G__8765 = args__$2;
attr__$1 = G__8763;
kids__$1 = G__8764;
G__8760__$1 = G__8765;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__8766 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__8767 = kids__$2;
var G__8768 = cljs.core.rest(args__$2);
attr__$1 = G__8766;
kids__$1 = G__8767;
G__8760__$1 = G__8768;
continue;
} else {
if(cljs.core.truth_((hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__8769 = attr__$2;
var G__8770 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__8771 = args__$2;
attr__$1 = G__8769;
kids__$1 = G__8770;
G__8760__$1 = G__8771;
continue;
} else {
if(cljs.core.truth_((hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__8772 = attr__$2;
var G__8773 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__8774 = args__$2;
attr__$1 = G__8772;
kids__$1 = G__8773;
G__8760__$1 = G__8774;
continue;
} else {
var G__8775 = attr__$2;
var G__8776 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__8777 = args__$2;
attr__$1 = G__8775;
kids__$1 = G__8776;
G__8760__$1 = G__8777;
continue;

}
}
}
}
}
break;
}
});
hoplon.core.add_attributes_BANG_ = (function hoplon$core$add_attributes_BANG_(this$,attr){
var this$__$1 = this$;
cljs.core.reduce_kv(((function (this$__$1){
return (function (this$__$2,k,v){
var this$__$3 = this$__$2;
if(cljs.core.truth_(javelin.core.cell_QMARK_(v))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(v,((function (this$__$3,this$__$1){
return (function (p1__8779_SHARP_,p2__8778_SHARP_){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$3,k,p2__8778_SHARP_) : hoplon.core.do_BANG_.call(null,this$__$3,k,p2__8778_SHARP_));
});})(this$__$3,this$__$1))
);
} else {
if(cljs.core.fn_QMARK_(v)){
(hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$3,k,v) : hoplon.core.on_BANG_.call(null,this$__$3,k,v));
} else {
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$3,k,v) : hoplon.core.do_BANG_.call(null,this$__$3,k,v));

}
}

return this$__$3;
});})(this$__$1))
,this$__$1,attr);

return this$__$1;
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__8781){
var vec__8788 = p__8781;
var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8788,(0),null);
var _ = cljs.core.nthnext(vec__8788,(1));
var kids = vec__8788;
var this$__$1 = this$;
var node_8794 = ((function (this$__$1,vec__8788,child_cell,_,kids){
return (function (p1__8780_SHARP_){
if(typeof p1__8780_SHARP_ === 'string'){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(p1__8780_SHARP_) : hoplon.core.$text.call(null,p1__8780_SHARP_));
} else {
if(typeof p1__8780_SHARP_ === 'number'){
var G__8789 = [cljs.core.str(p1__8780_SHARP_)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__8789) : hoplon.core.$text.call(null,G__8789));
} else {
return p1__8780_SHARP_;

}
}
});})(this$__$1,vec__8788,child_cell,_,kids))
;
var seq__8790_8795 = cljs.core.seq(cljs.core.flatten(kids));
var chunk__8791_8796 = null;
var count__8792_8797 = (0);
var i__8793_8798 = (0);
while(true){
if((i__8793_8798 < count__8792_8797)){
var x_8799 = chunk__8791_8796.cljs$core$IIndexed$_nth$arity$2(null,i__8793_8798);
var temp__4425__auto___8800 = node_8794(x_8799);
if(cljs.core.truth_(temp__4425__auto___8800)){
var x_8801__$1 = temp__4425__auto___8800;
hoplon.core.append_child_BANG_(this$__$1,x_8801__$1);
} else {
}

var G__8802 = seq__8790_8795;
var G__8803 = chunk__8791_8796;
var G__8804 = count__8792_8797;
var G__8805 = (i__8793_8798 + (1));
seq__8790_8795 = G__8802;
chunk__8791_8796 = G__8803;
count__8792_8797 = G__8804;
i__8793_8798 = G__8805;
continue;
} else {
var temp__4425__auto___8806 = cljs.core.seq(seq__8790_8795);
if(temp__4425__auto___8806){
var seq__8790_8807__$1 = temp__4425__auto___8806;
if(cljs.core.chunked_seq_QMARK_(seq__8790_8807__$1)){
var c__5837__auto___8808 = cljs.core.chunk_first(seq__8790_8807__$1);
var G__8809 = cljs.core.chunk_rest(seq__8790_8807__$1);
var G__8810 = c__5837__auto___8808;
var G__8811 = cljs.core.count(c__5837__auto___8808);
var G__8812 = (0);
seq__8790_8795 = G__8809;
chunk__8791_8796 = G__8810;
count__8792_8797 = G__8811;
i__8793_8798 = G__8812;
continue;
} else {
var x_8813 = cljs.core.first(seq__8790_8807__$1);
var temp__4425__auto___8814__$1 = node_8794(x_8813);
if(cljs.core.truth_(temp__4425__auto___8814__$1)){
var x_8815__$1 = temp__4425__auto___8814__$1;
hoplon.core.append_child_BANG_(this$__$1,x_8815__$1);
} else {
}

var G__8816 = cljs.core.next(seq__8790_8807__$1);
var G__8817 = null;
var G__8818 = (0);
var G__8819 = (0);
seq__8790_8795 = G__8816;
chunk__8791_8796 = G__8817;
count__8792_8797 = G__8818;
i__8793_8798 = G__8819;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});
Element.prototype.cljs$core$IPrintWithWriter$ = true;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<Element: ",this$__$1.tagName,">"], 0));
});

Element.prototype.cljs$core$IFn$ = true;

Element.prototype.call = (function() { 
var G__8826__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__8821 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8821,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8821,(1),null);
var G__8822 = this$;
hoplon.core.add_attributes_BANG_(G__8822,attr);

hoplon.core.add_children_BANG_(G__8822,kids);

return G__8822;
};
var G__8826 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__8827__i = 0, G__8827__a = new Array(arguments.length -  1);
while (G__8827__i < G__8827__a.length) {G__8827__a[G__8827__i] = arguments[G__8827__i + 1]; ++G__8827__i;}
  args = new cljs.core.IndexedSeq(G__8827__a,0);
} 
return G__8826__delegate.call(this,self__,args);};
G__8826.cljs$lang$maxFixedArity = 1;
G__8826.cljs$lang$applyTo = (function (arglist__8828){
var self__ = cljs.core.first(arglist__8828);
var args = cljs.core.rest(arglist__8828);
return G__8826__delegate(self__,args);
});
G__8826.cljs$core$IFn$_invoke$arity$variadic = G__8826__delegate;
return G__8826;
})()
;

Element.prototype.apply = (function (self__,args8820){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args8820)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__8829__delegate = function (args){
var this$ = this;
var vec__8823 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8823,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8823,(1),null);
var G__8824 = this$;
hoplon.core.add_attributes_BANG_(G__8824,attr);

hoplon.core.add_children_BANG_(G__8824,kids);

return G__8824;
};
var G__8829 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8830__i = 0, G__8830__a = new Array(arguments.length -  0);
while (G__8830__i < G__8830__a.length) {G__8830__a[G__8830__i] = arguments[G__8830__i + 0]; ++G__8830__i;}
  args = new cljs.core.IndexedSeq(G__8830__a,0);
} 
return G__8829__delegate.call(this,args);};
G__8829.cljs$lang$maxFixedArity = 0;
G__8829.cljs$lang$applyTo = (function (arglist__8831){
var args = cljs.core.seq(arglist__8831);
return G__8829__delegate(args);
});
G__8829.cljs$core$IFn$_invoke$arity$variadic = G__8829__delegate;
return G__8829;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = true;

Element.prototype.hoplon$core$ICustomElement$_set_attribute_BANG_$arity$3 = (function (this$,k,v){
var this$__$1 = this;
var _ = null;
var k_8832__$1 = cljs.core.name(k);
var e_8833 = jQuery(this$__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e_8833.removeAttr(k_8832__$1);
} else {
e_8833.attr(k_8832__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_8832__$1:v));
}

return _;
});

Element.prototype.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
if(cljs.core.not(hoplon.core.is_ie8)){
return this$__$1.appendChild(child);
} else {
try{return this$__$1.appendChild(child);
}catch (e8825){if((e8825 instanceof Error)){
var _ = e8825;
return null;
} else {
throw e8825;

}
}}
});

Element.prototype.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
return this$__$1.removeChild(child);
});

Element.prototype.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.replaceChild(new$,existing);
});

Element.prototype.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.insertBefore(new$,existing);
});
hoplon.core.make_singleton_ctor = (function hoplon$core$make_singleton_ctor(tag){
return (function() { 
var G__8840__delegate = function (args){
var vec__8837 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8837,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8837,(1),null);
var elem = hoplon.core.ensure_kids_BANG_((document.getElementsByTagName(tag)[(0)]));
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
var G__8838 = elem.hoplonKids;
var G__8839 = cljs.core.vec(kids);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__8838,G__8839) : cljs.core.reset_BANG_.call(null,G__8838,G__8839));
} else {
return null;
}
};
var G__8840 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8841__i = 0, G__8841__a = new Array(arguments.length -  0);
while (G__8841__i < G__8841__a.length) {G__8841__a[G__8841__i] = arguments[G__8841__i + 0]; ++G__8841__i;}
  args = new cljs.core.IndexedSeq(G__8841__a,0);
} 
return G__8840__delegate.call(this,args);};
G__8840.cljs$lang$maxFixedArity = 0;
G__8840.cljs$lang$applyTo = (function (arglist__8842){
var args = cljs.core.seq(arglist__8842);
return G__8840__delegate(args);
});
G__8840.cljs$core$IFn$_invoke$arity$variadic = G__8840__delegate;
return G__8840;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
return (function() { 
var G__8843__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hoplon.core.ensure_kids_BANG_(document.createElement(tag)),args);
};
var G__8843 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8844__i = 0, G__8844__a = new Array(arguments.length -  0);
while (G__8844__i < G__8844__a.length) {G__8844__a[G__8844__i] = arguments[G__8844__i + 0]; ++G__8844__i;}
  args = new cljs.core.IndexedSeq(G__8844__a,0);
} 
return G__8843__delegate.call(this,args);};
G__8843.cljs$lang$maxFixedArity = 0;
G__8843.cljs$lang$applyTo = (function (arglist__8845){
var args = cljs.core.seq(arglist__8845);
return G__8843__delegate(args);
});
G__8843.cljs$core$IFn$_invoke$arity$variadic = G__8843__delegate;
return G__8843;
})()
;
});
hoplon.core.html = (function hoplon$core$html(){
var args__6099__auto__ = [];
var len__6092__auto___8848 = arguments.length;
var i__6093__auto___8849 = (0);
while(true){
if((i__6093__auto___8849 < len__6092__auto___8848)){
args__6099__auto__.push((arguments[i__6093__auto___8849]));

var G__8850 = (i__6093__auto___8849 + (1));
i__6093__auto___8849 = G__8850;
continue;
} else {
}
break;
}

var argseq__6100__auto__ = ((((0) < args__6099__auto__.length))?(new cljs.core.IndexedSeq(args__6099__auto__.slice((0)),(0))):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__6100__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__8847 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8847,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8847,(1),null);
return hoplon.core.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq8846){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq8846));
});
hoplon.core.body = hoplon.core.make_singleton_ctor("body");
hoplon.core.head = hoplon.core.make_singleton_ctor("head");
hoplon.core.a = hoplon.core.make_elem_ctor("a");
hoplon.core.abbr = hoplon.core.make_elem_ctor("abbr");
hoplon.core.acronym = hoplon.core.make_elem_ctor("acronym");
hoplon.core.address = hoplon.core.make_elem_ctor("address");
hoplon.core.applet = hoplon.core.make_elem_ctor("applet");
hoplon.core.area = hoplon.core.make_elem_ctor("area");
hoplon.core.article = hoplon.core.make_elem_ctor("article");
hoplon.core.aside = hoplon.core.make_elem_ctor("aside");
hoplon.core.audio = hoplon.core.make_elem_ctor("audio");
hoplon.core.b = hoplon.core.make_elem_ctor("b");
hoplon.core.base = hoplon.core.make_elem_ctor("base");
hoplon.core.basefont = hoplon.core.make_elem_ctor("basefont");
hoplon.core.bdi = hoplon.core.make_elem_ctor("bdi");
hoplon.core.bdo = hoplon.core.make_elem_ctor("bdo");
hoplon.core.big = hoplon.core.make_elem_ctor("big");
hoplon.core.blockquote = hoplon.core.make_elem_ctor("blockquote");
hoplon.core.br = hoplon.core.make_elem_ctor("br");
hoplon.core.button = hoplon.core.make_elem_ctor("button");
hoplon.core.canvas = hoplon.core.make_elem_ctor("canvas");
hoplon.core.caption = hoplon.core.make_elem_ctor("caption");
hoplon.core.center = hoplon.core.make_elem_ctor("center");
hoplon.core.cite = hoplon.core.make_elem_ctor("cite");
hoplon.core.code = hoplon.core.make_elem_ctor("code");
hoplon.core.col = hoplon.core.make_elem_ctor("col");
hoplon.core.colgroup = hoplon.core.make_elem_ctor("colgroup");
hoplon.core.command = hoplon.core.make_elem_ctor("command");
hoplon.core.data = hoplon.core.make_elem_ctor("data");
hoplon.core.datalist = hoplon.core.make_elem_ctor("datalist");
hoplon.core.dd = hoplon.core.make_elem_ctor("dd");
hoplon.core.del = hoplon.core.make_elem_ctor("del");
hoplon.core.details = hoplon.core.make_elem_ctor("details");
hoplon.core.dfn = hoplon.core.make_elem_ctor("dfn");
hoplon.core.dir = hoplon.core.make_elem_ctor("dir");
hoplon.core.div = hoplon.core.make_elem_ctor("div");
hoplon.core.dl = hoplon.core.make_elem_ctor("dl");
hoplon.core.dt = hoplon.core.make_elem_ctor("dt");
hoplon.core.em = hoplon.core.make_elem_ctor("em");
hoplon.core.embed = hoplon.core.make_elem_ctor("embed");
hoplon.core.eventsource = hoplon.core.make_elem_ctor("eventsource");
hoplon.core.fieldset = hoplon.core.make_elem_ctor("fieldset");
hoplon.core.figcaption = hoplon.core.make_elem_ctor("figcaption");
hoplon.core.figure = hoplon.core.make_elem_ctor("figure");
hoplon.core.font = hoplon.core.make_elem_ctor("font");
hoplon.core.footer = hoplon.core.make_elem_ctor("footer");
hoplon.core.form = hoplon.core.make_elem_ctor("form");
hoplon.core.frame = hoplon.core.make_elem_ctor("frame");
hoplon.core.frameset = hoplon.core.make_elem_ctor("frameset");
hoplon.core.h1 = hoplon.core.make_elem_ctor("h1");
hoplon.core.h2 = hoplon.core.make_elem_ctor("h2");
hoplon.core.h3 = hoplon.core.make_elem_ctor("h3");
hoplon.core.h4 = hoplon.core.make_elem_ctor("h4");
hoplon.core.h5 = hoplon.core.make_elem_ctor("h5");
hoplon.core.h6 = hoplon.core.make_elem_ctor("h6");
hoplon.core.header = hoplon.core.make_elem_ctor("header");
hoplon.core.hgroup = hoplon.core.make_elem_ctor("hgroup");
hoplon.core.hr = hoplon.core.make_elem_ctor("hr");
hoplon.core.i = hoplon.core.make_elem_ctor("i");
hoplon.core.iframe = hoplon.core.make_elem_ctor("iframe");
hoplon.core.img = hoplon.core.make_elem_ctor("img");
hoplon.core.input = hoplon.core.make_elem_ctor("input");
hoplon.core.ins = hoplon.core.make_elem_ctor("ins");
hoplon.core.isindex = hoplon.core.make_elem_ctor("isindex");
hoplon.core.kbd = hoplon.core.make_elem_ctor("kbd");
hoplon.core.keygen = hoplon.core.make_elem_ctor("keygen");
hoplon.core.label = hoplon.core.make_elem_ctor("label");
hoplon.core.legend = hoplon.core.make_elem_ctor("legend");
hoplon.core.li = hoplon.core.make_elem_ctor("li");
hoplon.core.link = hoplon.core.make_elem_ctor("link");
hoplon.core.html_map = hoplon.core.make_elem_ctor("map");
hoplon.core.main = hoplon.core.make_elem_ctor("main");
hoplon.core.mark = hoplon.core.make_elem_ctor("mark");
hoplon.core.menu = hoplon.core.make_elem_ctor("menu");
hoplon.core.html_meta = hoplon.core.make_elem_ctor("meta");
hoplon.core.meter = hoplon.core.make_elem_ctor("meter");
hoplon.core.nav = hoplon.core.make_elem_ctor("nav");
hoplon.core.noframes = hoplon.core.make_elem_ctor("noframes");
hoplon.core.noscript = hoplon.core.make_elem_ctor("noscript");
hoplon.core.object = hoplon.core.make_elem_ctor("object");
hoplon.core.ol = hoplon.core.make_elem_ctor("ol");
hoplon.core.optgroup = hoplon.core.make_elem_ctor("optgroup");
hoplon.core.option = hoplon.core.make_elem_ctor("option");
hoplon.core.output = hoplon.core.make_elem_ctor("output");
hoplon.core.p = hoplon.core.make_elem_ctor("p");
hoplon.core.param = hoplon.core.make_elem_ctor("param");
hoplon.core.pre = hoplon.core.make_elem_ctor("pre");
hoplon.core.progress = hoplon.core.make_elem_ctor("progress");
hoplon.core.q = hoplon.core.make_elem_ctor("q");
hoplon.core.rp = hoplon.core.make_elem_ctor("rp");
hoplon.core.rt = hoplon.core.make_elem_ctor("rt");
hoplon.core.ruby = hoplon.core.make_elem_ctor("ruby");
hoplon.core.s = hoplon.core.make_elem_ctor("s");
hoplon.core.samp = hoplon.core.make_elem_ctor("samp");
hoplon.core.script = hoplon.core.make_elem_ctor("script");
hoplon.core.section = hoplon.core.make_elem_ctor("section");
hoplon.core.select = hoplon.core.make_elem_ctor("select");
hoplon.core.small = hoplon.core.make_elem_ctor("small");
hoplon.core.source = hoplon.core.make_elem_ctor("source");
hoplon.core.span = hoplon.core.make_elem_ctor("span");
hoplon.core.strike = hoplon.core.make_elem_ctor("strike");
hoplon.core.strong = hoplon.core.make_elem_ctor("strong");
hoplon.core.style = hoplon.core.make_elem_ctor("style");
hoplon.core.sub = hoplon.core.make_elem_ctor("sub");
hoplon.core.summary = hoplon.core.make_elem_ctor("summary");
hoplon.core.sup = hoplon.core.make_elem_ctor("sup");
hoplon.core.table = hoplon.core.make_elem_ctor("table");
hoplon.core.tbody = hoplon.core.make_elem_ctor("tbody");
hoplon.core.td = hoplon.core.make_elem_ctor("td");
hoplon.core.textarea = hoplon.core.make_elem_ctor("textarea");
hoplon.core.tfoot = hoplon.core.make_elem_ctor("tfoot");
hoplon.core.th = hoplon.core.make_elem_ctor("th");
hoplon.core.thead = hoplon.core.make_elem_ctor("thead");
hoplon.core.html_time = hoplon.core.make_elem_ctor("time");
hoplon.core.title = hoplon.core.make_elem_ctor("title");
hoplon.core.tr = hoplon.core.make_elem_ctor("tr");
hoplon.core.track = hoplon.core.make_elem_ctor("track");
hoplon.core.tt = hoplon.core.make_elem_ctor("tt");
hoplon.core.u = hoplon.core.make_elem_ctor("u");
hoplon.core.ul = hoplon.core.make_elem_ctor("ul");
hoplon.core.html_var = hoplon.core.make_elem_ctor("var");
hoplon.core.video = hoplon.core.make_elem_ctor("video");
hoplon.core.wbr = hoplon.core.make_elem_ctor("wbr");
hoplon.core.spliced = cljs.core.vector;
hoplon.core.$text = (function hoplon$core$$text(p1__8851_SHARP_){
return document.createTextNode(p1__8851_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__8852_SHARP_){
return document.createComment(p1__8852_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return jQuery(f);
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return jQuery(document).trigger("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return jQuery(document).on("page-load",f);
});
hoplon.core.add_initfn_BANG_((function (){
return jQuery("body").on("submit",(function (p1__8853_SHARP_){
var e = (function (){var G__8854 = p1__8853_SHARP_.target;
return jQuery(G__8854);
})();
if(cljs.core.truth_((function (){var or__5053__auto__ = e.attr("action");
if(cljs.core.truth_(or__5053__auto__)){
return or__5053__auto__;
} else {
return e.attr("method");
}
})())){
return null;
} else {
return p1__8853_SHARP_.preventDefault();
}
}));
}));
hoplon.core.text_val_BANG_ = (function hoplon$core$text_val_BANG_(){
var args8855 = [];
var len__6092__auto___8858 = arguments.length;
var i__6093__auto___8859 = (0);
while(true){
if((i__6093__auto___8859 < len__6092__auto___8858)){
args8855.push((arguments[i__6093__auto___8859]));

var G__8860 = (i__6093__auto___8859 + (1));
i__6093__auto___8859 = G__8860;
continue;
} else {
}
break;
}

var G__8857 = args8855.length;
switch (G__8857) {
case 1:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8855.length)].join('')));

}
});

hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.val();
});

hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
var v__$1 = [cljs.core.str(v)].join('');
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v__$1,hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1(e))){
return e.val(v__$1);
} else {
return null;
}
});

hoplon.core.text_val_BANG_.cljs$lang$maxFixedArity = 2;
hoplon.core.check_val_BANG_ = (function hoplon$core$check_val_BANG_(){
var args8862 = [];
var len__6092__auto___8865 = arguments.length;
var i__6093__auto___8866 = (0);
while(true){
if((i__6093__auto___8866 < len__6092__auto___8865)){
args8862.push((arguments[i__6093__auto___8866]));

var G__8867 = (i__6093__auto___8866 + (1));
i__6093__auto___8866 = G__8867;
continue;
} else {
}
break;
}

var G__8864 = args8862.length;
switch (G__8864) {
case 1:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8862.length)].join('')));

}
});

hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.is(":checked");
});

hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
return e.prop("checked",cljs.core.boolean$(v));
});

hoplon.core.check_val_BANG_.cljs$lang$maxFixedArity = 2;
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__5947__auto__ = (function (){var G__8869 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8869) : cljs.core.atom.call(null,G__8869));
})();
var prefer_table__5948__auto__ = (function (){var G__8870 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8870) : cljs.core.atom.call(null,G__8870));
})();
var method_cache__5949__auto__ = (function (){var G__8871 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8871) : cljs.core.atom.call(null,G__8871));
})();
var cached_hierarchy__5950__auto__ = (function (){var G__8872 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8872) : cljs.core.atom.call(null,G__8872));
})();
var hierarchy__5951__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","do!"),((function (method_table__5947__auto__,prefer_table__5948__auto__,method_cache__5949__auto__,cached_hierarchy__5950__auto__,hierarchy__5951__auto__){
return (function (elem,key,val){
return key;
});})(method_table__5947__auto__,prefer_table__5948__auto__,method_cache__5949__auto__,cached_hierarchy__5950__auto__,hierarchy__5951__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__5951__auto__,method_table__5947__auto__,prefer_table__5948__auto__,method_cache__5949__auto__,cached_hierarchy__5950__auto__));
})();
}
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__8873 = elem;
var G__8874 = cljs.core.cst$kw$attr;
var G__8875 = new cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__8873,G__8874,G__8875) : hoplon.core.do_BANG_.call(null,G__8873,G__8874,G__8875));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__8876__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.core.check_val_BANG_:hoplon.core.text_val_BANG_),e,args);
};
var G__8876 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__8877__i = 0, G__8877__a = new Array(arguments.length -  2);
while (G__8877__i < G__8877__a.length) {G__8877__a[G__8877__i] = arguments[G__8877__i + 2]; ++G__8877__i;}
  args = new cljs.core.IndexedSeq(G__8877__a,0);
} 
return G__8876__delegate.call(this,elem,_,args);};
G__8876.cljs$lang$maxFixedArity = 2;
G__8876.cljs$lang$applyTo = (function (arglist__8878){
var elem = cljs.core.first(arglist__8878);
arglist__8878 = cljs.core.next(arglist__8878);
var _ = cljs.core.first(arglist__8878);
var args = cljs.core.rest(arglist__8878);
return G__8876__delegate(elem,_,args);
});
G__8876.cljs$core$IFn$_invoke$arity$variadic = G__8876__delegate;
return G__8876;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
var e = jQuery(elem);
var seq__8879 = cljs.core.seq(kvs);
var chunk__8880 = null;
var count__8881 = (0);
var i__8882 = (0);
while(true){
if((i__8882 < count__8881)){
var vec__8883 = chunk__8880.cljs$core$IIndexed$_nth$arity$2(null,i__8882);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8883,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8883,(1),null);
var k_8885__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_8885__$1);
} else {
e.attr(k_8885__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_8885__$1:v));
}

var G__8886 = seq__8879;
var G__8887 = chunk__8880;
var G__8888 = count__8881;
var G__8889 = (i__8882 + (1));
seq__8879 = G__8886;
chunk__8880 = G__8887;
count__8881 = G__8888;
i__8882 = G__8889;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__8879);
if(temp__4425__auto__){
var seq__8879__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8879__$1)){
var c__5837__auto__ = cljs.core.chunk_first(seq__8879__$1);
var G__8890 = cljs.core.chunk_rest(seq__8879__$1);
var G__8891 = c__5837__auto__;
var G__8892 = cljs.core.count(c__5837__auto__);
var G__8893 = (0);
seq__8879 = G__8890;
chunk__8880 = G__8891;
count__8881 = G__8892;
i__8882 = G__8893;
continue;
} else {
var vec__8884 = cljs.core.first(seq__8879__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8884,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8884,(1),null);
var k_8894__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_8894__$1);
} else {
e.attr(k_8894__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_8894__$1:v));
}

var G__8895 = cljs.core.next(seq__8879__$1);
var G__8896 = null;
var G__8897 = (0);
var G__8898 = (0);
seq__8879 = G__8895;
chunk__8880 = G__8896;
count__8881 = G__8897;
i__8882 = G__8898;
continue;
}
} else {
return null;
}
}
break;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var __GT_map = ((function (elem__$1){
return (function (p1__8899_SHARP_){
return cljs.core.zipmap(p1__8899_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__8900 = cljs.core.seq(clmap);
var chunk__8901 = null;
var count__8902 = (0);
var i__8903 = (0);
while(true){
if((i__8903 < count__8902)){
var vec__8904 = chunk__8901.cljs$core$IIndexed$_nth$arity$2(null,i__8903);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8904,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8904,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__8906 = seq__8900;
var G__8907 = chunk__8901;
var G__8908 = count__8902;
var G__8909 = (i__8903 + (1));
seq__8900 = G__8906;
chunk__8901 = G__8907;
count__8902 = G__8908;
i__8903 = G__8909;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__8900);
if(temp__4425__auto__){
var seq__8900__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8900__$1)){
var c__5837__auto__ = cljs.core.chunk_first(seq__8900__$1);
var G__8910 = cljs.core.chunk_rest(seq__8900__$1);
var G__8911 = c__5837__auto__;
var G__8912 = cljs.core.count(c__5837__auto__);
var G__8913 = (0);
seq__8900 = G__8910;
chunk__8901 = G__8911;
count__8902 = G__8912;
i__8903 = G__8913;
continue;
} else {
var vec__8905 = cljs.core.first(seq__8900__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8905,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8905,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__8914 = cljs.core.next(seq__8900__$1);
var G__8915 = null;
var G__8916 = (0);
var G__8917 = (0);
seq__8900 = G__8914;
chunk__8901 = G__8915;
count__8902 = G__8916;
i__8903 = G__8917;
continue;
}
} else {
return null;
}
}
break;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (elem,_,kvs){
var e = jQuery(elem);
var seq__8918 = cljs.core.seq(kvs);
var chunk__8919 = null;
var count__8920 = (0);
var i__8921 = (0);
while(true){
if((i__8921 < count__8920)){
var vec__8922 = chunk__8919.cljs$core$IIndexed$_nth$arity$2(null,i__8921);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8922,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8922,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__8924 = seq__8918;
var G__8925 = chunk__8919;
var G__8926 = count__8920;
var G__8927 = (i__8921 + (1));
seq__8918 = G__8924;
chunk__8919 = G__8925;
count__8920 = G__8926;
i__8921 = G__8927;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__8918);
if(temp__4425__auto__){
var seq__8918__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8918__$1)){
var c__5837__auto__ = cljs.core.chunk_first(seq__8918__$1);
var G__8928 = cljs.core.chunk_rest(seq__8918__$1);
var G__8929 = c__5837__auto__;
var G__8930 = cljs.core.count(c__5837__auto__);
var G__8931 = (0);
seq__8918 = G__8928;
chunk__8919 = G__8929;
count__8920 = G__8930;
i__8921 = G__8931;
continue;
} else {
var vec__8923 = cljs.core.first(seq__8918__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8923,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8923,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__8932 = cljs.core.next(seq__8918__$1);
var G__8933 = null;
var G__8934 = (0);
var G__8935 = (0);
seq__8918 = G__8932;
chunk__8919 = G__8933;
count__8920 = G__8934;
i__8921 = G__8935;
continue;
}
} else {
return null;
}
}
break;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$toggle,(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$(v));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$slide_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fade_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus,(function (elem,_,v){
var G__8936 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__8937 = (0);
return setTimeout(G__8936,G__8937);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.cst$kw$focus,v) : hoplon.core.do_BANG_.call(null,elem,cljs.core.cst$kw$focus,v));

return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.cst$kw$select,v) : hoplon.core.do_BANG_.call(null,elem,cljs.core.cst$kw$select,v));
} else {
return null;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$text,(function (elem,_,v){
return jQuery(elem).text([cljs.core.str(v)].join(''));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html,(function (elem,_,v){
return jQuery(elem).html(v);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_to,(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scrollTop,elem__$1.offset().top], null)));
} else {
return null;
}
}));
if(typeof hoplon.core.on_BANG_ !== 'undefined'){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__5947__auto__ = (function (){var G__8938 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8938) : cljs.core.atom.call(null,G__8938));
})();
var prefer_table__5948__auto__ = (function (){var G__8939 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8939) : cljs.core.atom.call(null,G__8939));
})();
var method_cache__5949__auto__ = (function (){var G__8940 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8940) : cljs.core.atom.call(null,G__8940));
})();
var cached_hierarchy__5950__auto__ = (function (){var G__8941 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8941) : cljs.core.atom.call(null,G__8941));
})();
var hierarchy__5951__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","on!"),((function (method_table__5947__auto__,prefer_table__5948__auto__,method_cache__5949__auto__,cached_hierarchy__5950__auto__,hierarchy__5951__auto__){
return (function (elem,event,callback){
return event;
});})(method_table__5947__auto__,prefer_table__5948__auto__,method_cache__5949__auto__,cached_hierarchy__5950__auto__,hierarchy__5951__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__5951__auto__,method_table__5947__auto__,prefer_table__5948__auto__,method_cache__5949__auto__,cached_hierarchy__5950__auto__));
})();
}
jQuery.Event.prototype.cljs$core$IDeref$ = true;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return (function (){var G__8942 = this$__$1.target;
return jQuery(G__8942);
})().val();
});
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = (function (){var G__8957 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8957) : cljs.core.atom.call(null,G__8957));
})();
var items_seq = javelin.core.formula(((function (on_deck){
return (function (G__8958,G__8959){
return (G__8958.cljs$core$IFn$_invoke$arity$1 ? G__8958.cljs$core$IFn$_invoke$arity$1(G__8959) : G__8958.call(null,G__8959));
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__8943_SHARP_){
return javelin.core.formula(((function (on_deck,items_seq){
return (function (G__8962,G__8961,G__8960){
return (G__8960.cljs$core$IFn$_invoke$arity$2 ? G__8960.cljs$core$IFn$_invoke$arity$2(G__8961,G__8962) : G__8960.call(null,G__8961,G__8962));
});})(on_deck,items_seq))
).call(null,p1__8943_SHARP_,items_seq,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__8944_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__8944_SHARP_) : cljs.core.deref.call(null,p1__8944_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__8944_SHARP_,cljs.core.rest);

return x;
});})(on_deck,items_seq,ith_item))
;
var current = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(items_seq,((function (current,on_deck,items_seq,ith_item,shift_BANG_){
return (function (old_items,new_items){
var old = cljs.core.count(old_items);
var new$ = cljs.core.count(new_items);
var diff = (new$ - old);
if((diff > (0))){
var seq__8963 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__8964 = null;
var count__8965 = (0);
var i__8966 = (0);
while(true){
if((i__8966 < count__8965)){
var i = chunk__8964.cljs$core$IIndexed$_nth$arity$2(null,i__8966);
var e_8969 = (function (){var or__5053__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5053__auto__)){
return or__5053__auto__;
} else {
var G__8967 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__8967) : tpl.call(null,G__8967));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_8969);

var G__8970 = seq__8963;
var G__8971 = chunk__8964;
var G__8972 = count__8965;
var G__8973 = (i__8966 + (1));
seq__8963 = G__8970;
chunk__8964 = G__8971;
count__8965 = G__8972;
i__8966 = G__8973;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__8963);
if(temp__4425__auto__){
var seq__8963__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8963__$1)){
var c__5837__auto__ = cljs.core.chunk_first(seq__8963__$1);
var G__8974 = cljs.core.chunk_rest(seq__8963__$1);
var G__8975 = c__5837__auto__;
var G__8976 = cljs.core.count(c__5837__auto__);
var G__8977 = (0);
seq__8963 = G__8974;
chunk__8964 = G__8975;
count__8965 = G__8976;
i__8966 = G__8977;
continue;
} else {
var i = cljs.core.first(seq__8963__$1);
var e_8978 = (function (){var or__5053__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5053__auto__)){
return or__5053__auto__;
} else {
var G__8968 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__8968) : tpl.call(null,G__8968));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_8978);

var G__8979 = cljs.core.next(seq__8963__$1);
var G__8980 = null;
var G__8981 = (0);
var G__8982 = (0);
seq__8963 = G__8979;
chunk__8964 = G__8980;
count__8965 = G__8981;
i__8966 = G__8982;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if((diff < (0))){
var n__5937__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__5937__auto__)){
var e_8983 = cljs.core.peek((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current) : cljs.core.deref.call(null,current)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_8983);

var G__8984 = (_ + (1));
_ = G__8984;
continue;
} else {
return null;
}
break;
}
} else {
return null;
}
}
});})(current,on_deck,items_seq,ith_item,shift_BANG_))
);

return current;
});
hoplon.core.route_cell = (function hoplon$core$route_cell(){
var args__6099__auto__ = [];
var len__6092__auto___8993 = arguments.length;
var i__6093__auto___8994 = (0);
while(true){
if((i__6093__auto___8994 < len__6092__auto___8993)){
args__6099__auto__.push((arguments[i__6093__auto___8994]));

var G__8995 = (i__6093__auto___8994 + (1));
i__6093__auto___8994 = G__8995;
continue;
} else {
}
break;
}

var argseq__6100__auto__ = ((((0) < args__6099__auto__.length))?(new cljs.core.IndexedSeq(args__6099__auto__.slice((0)),(0))):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__6100__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__8986){
var vec__8987 = p__8986;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8987,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = javelin.core.formula(((function (c,vec__8987,default$){
return (function (G__8988,G__8990,G__8989){
var or__5053__auto__ = (function (){var and__5041__auto__ = (G__8988.cljs$core$IFn$_invoke$arity$1 ? G__8988.cljs$core$IFn$_invoke$arity$1(G__8989) : G__8988.call(null,G__8989));
if(cljs.core.truth_(and__5041__auto__)){
return G__8989;
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5053__auto__)){
return or__5053__auto__;
} else {
return G__8990;
}
});})(c,vec__8987,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__8987,default$){
return (function (){
var G__8991 = c;
var G__8992 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__8991,G__8992) : cljs.core.reset_BANG_.call(null,G__8991,G__8992));
});})(_,c,vec__8987,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq8985){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq8985));
});
