 function add(a,b) {
     return a+b;
 }

 var addFuction = add(5,6);
//  console.log(addFuction);


 console.log(process.argv[0]);
var args = process.argv.slice(2);

 console.log(add(parseInt(args[0]),parseInt(args[1])));