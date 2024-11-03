//immediately Invoked function expression (IIFE) hahahahahahhaah

(function chai(){
    // named iife
    console.log(`DB Connected`);
    
})();
 
(function chai(name){
    console.log(`DB connected two ${name}`)   
})(`Naman`)
