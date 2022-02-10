//level1
//#######################################################

var limit=7;
for(let i=1;i<limit;i++){
    var str = "";
    var mid = limit%2!==0?((limit+2)/2-1):(limit+2)/2; 
    var count=1;
    var inc=+1;
    var ch=false;
    for(let j=1;j<=limit+2;j++){
        
        if(j<(mid+i) && j>(mid-i) ){
            str+=count;
        }
        else{
            str+=" ";
        }
        if(count>=i && ch==false){
            inc=-1;
            ch=true;
        }
        count+=inc;
    }
    console.log(str);
    console.log("\n");
}
