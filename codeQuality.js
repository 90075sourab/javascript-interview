// level 1
//#####################################

const  getData = async()=>{
     const resp = await fetch("https://jsonplaceholder.typicode.com/todos/1")
     return resp.json();
}
//console.log(getData());
 


