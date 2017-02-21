
var Isogram=function(word){
    this.word=word;
}

Isogram.prototype.isIsogram=function () {

return this.word.match(/([A-Za-z])\1/);
}

console.log(new Isogram("IIsogram check").isIsogram())
module.exports=Isogram;
