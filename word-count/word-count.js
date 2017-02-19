
var Word=function () {}

Word.prototype.count = function(pGraphs){

var ocr={};
pGraphs=pGraphs.toLowerCase();
    var ocr={};
    var regX=/\b[a-z\u0000-\u00FF0-9A-Z\']+\b/g;
    while(gp = regX.exec(pGraphs) )
        ocr[gp[0]] = ocr.hasOwnProperty(gp[0]) ? ocr[gp[0]] + 1 : 1
console.log(ocr)



    pGraphs.trim().toLowerCase()
        .split(/[a-z\u00E0-\u00FC]+/i)
        .map(val=>{
            val=val.trim();
            if(val!='') {

                ocr[val] = ocr.hasOwnProperty(val) ? ocr[val] + 1 : 1;
            }
        });
return ocr;
}

module.exports=Word;