console.log(process.argv);
let args=process.argv;

for(let i=0; i<args.length; i++){
    console.log(args[i]);
}


const math=require('./math');
console.log(math);
console.log(math.sum(2,2));

