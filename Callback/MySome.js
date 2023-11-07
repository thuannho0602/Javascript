/**
  My Some là 
 */
Array.prototype.some2=function(callback){
    var outPut=false
    for(var index in this){
        if(this.hasOwnProperty(index)){
            if(callback[index],index,this){
                return true;
            }
        }
    }
    return outPut;
}

  // Tạo list arr
  var myArrCouns=[
    {
        name:'PHP',
        coins:500,
        isFinish:false
    },
    {
        name:'C#',
        coins:1500,
        isFinish:false
    },
    {
        name:'Java',
        coins:1500,
        isFinish:false
    },
    {
        name:'Golang',
        coins:1000,
        isFinish:false
    },
];
// xl nó
var reslut=myArrCouns.some2(function(myArrCoun,index,arr){
    return myArrCoun.isFinish=true ;
});
//console.log(reslut);