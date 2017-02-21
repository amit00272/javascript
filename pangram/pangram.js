
var Pangram=function(word){

    this.word=word.toLowerCase();
}

Pangram.prototype.isPangram=function(){

    return  /([\w\u00C0-\u01BF]).*\1/g.test(this.word);

}
module.exports=Pangram;