
//level 1
//################################################################

var my_array=[1,2,3];
var count=0;


my_array=my_array.sort((a,b)=>(b-a));
//console.log("sorted array: ",my_array)



my_array.filter((val)=>count+=val);
//console.log("sum of numbers: ",count);


//object printing

var my_obj={
    name:'ellie',
    rank:'pro',
    roll:12,
}

function print_obj(myObject){
     var keys = Object.keys(myObject);
     var len=keys.length;
     var str="";
     keys.forEach((k,i )=> {
          str+=k;
          str+=":";
          str+=""+myObject[k];
          str+=len==i+1?"":",";
     });
    return str;
}

//console.log("object is:",print_obj(my_obj));
