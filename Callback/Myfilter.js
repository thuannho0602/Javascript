/**
 * My filter trong js
 */
Array.prototype.filter2=function(callback){
    var outPut=[];
    for(var index in this){
        if(this.hasOwnProperty(index)){
           var reslut= callback(this[index],index,this)
           if(reslut){
                outPut.push(this[index]);
           }
        }
    }
    return outPut;
}

//tạo mảng
var myArrCouns=[
    {
        name:'PHP',
        coins:500
    },
    {
        name:'C#',
        coins:1500
    },
    {
        name:'Java',
        coins:1500
    },
    {
        name:'Golang',
        coins:1000
    },
]

var filterArr=myArrCouns.filter2(function(myArrCoun,index,arr){
    //console.log(myArrCouns,index,arr);
   return myArrCoun.coins>1000
})
console.log(filterArr)