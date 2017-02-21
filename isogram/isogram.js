
var Isogram=function(word){
    this.word=word;
}

Isogram.prototype.isIsogram=function () {

return this.word.test();
}

console.log(new Isogram("Isogram check").isIsogram())
module.exports=Isogram;
