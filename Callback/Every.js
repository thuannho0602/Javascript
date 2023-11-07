/**
 * Every
 */

// Tao every2 
Array.prototype.every2=function(callback){
    var outPut=true;
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var reslut=callback([this[index],index,this]);
            if (!reslut)
            {
                return outPut=false;
                break;
            }
        }
    }
    return outPut;
} 

// tạo một mảng 
var myArrCoun=[
    {
       
        name:'Java',
        Cions:500,
        isFinite:true
    },
    {
        
        name:'PHP',
        Cions:400,
        isFinite:false
    },
    {
        
        name:'C#',
        Cions:600,
        isFinite:false
    }
]

var reslut=myArrCouns.every2(function(myArrCoun,index,arr){
    return myArrCoun.isFinite;
});
console.log(reslut);