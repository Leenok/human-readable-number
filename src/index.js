module.exports = function toReadable (number) {
  if(number<21){
     return numb[number];
  }
  let l = [0, 0, 0].concat(String(number).split("")).slice(-3).map((x)=>Number(x));
  let itn ="";
  if(l[0]>0){
    itn += numb[l[0]] +" hundred ";
  }
  if(l[1]>1){
    itn += des[l[1]];
  }
  if(l[1]==1){
    return itn + numb[number%100];
  }
  if(l[1]==0){
    itn = itn.slice(0,-1);
  }
  if(l[2]>0){
    itn += " "+numb[l[2]]
  };
 return itn;
}
let numb = ["zero", "one", "two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty"]
let des = ["","ten", "twenty", "thirty", "forty","fifty","sixty", "seventy", "eighty", "ninety"];
