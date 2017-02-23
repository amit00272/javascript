
var Anagram=function (str) {
    this.str=str;
}

Anagram.prototype.matches=function (strAR) {

       var ar=[];
      var s= strAR.reduce((result,val) =>{if(this.str.length==val.length&&val.toLowerCase()!=this.str.toLowerCase()) {

                      var dval=val;
                      this.str.split('').map(value => dval = dval.replace(new RegExp(value,"i"), ''));
                        if(dval.trim()=='') {
                            ar.push(val);
                        }

                    }},[]);
       return ar;
}

module.exports=Anagram;
//reduce((result,value,index)=>value!=dna2[index]?result+1:result,0);