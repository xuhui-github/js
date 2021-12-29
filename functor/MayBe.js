const MayBe=function(val){
this.value=val;
}
MayBe.of=function(val){
return new MayBe(val);
}
MayBe.prototype.isNothing=function(){
return (this.value==null||this.value===undefined);
}
MayBe.prototype.map=function(fn){
return this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this.value));
}
MayBe.of("string").map((x) => x.toUpperCase())
MayBe
let v=MayBe.of("string").map((x) => x.toUpperCase())
v
MayBe.of(null).map((x) => x.toUpperCase())
MayBe.of("George").map((x) => x.toUpperCase()).map((x) => "Mr. " + x)
MayBe.of("George").map((x) => x.toUpperCase()).map((x) => "Mr. " + x).map(() => undefined)
