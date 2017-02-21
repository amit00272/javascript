
var Isogram=function(word){
    this.word=word;
}

Isogram.prototype.isIsogram=function () {

return /([A-Za-z]).*\1/.test(this.word);
}

console.log(new Isogram("Instag  pzyI").isIsogram())
module.exports=Isogram;
