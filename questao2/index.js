const num =  parseInt(prompt("Digite um valor", "0"));;
const isFibonacci = num => {
   if(num === 0 || num === 1){
      return alert("O número informado pertence a sequencia");
   }
   let prev = 1;
   let count = 2;
   let temp = 0;
   while(count <= num){
      if(prev + count === num){
        return alert("O número informado pertence a sequencia");
      };
      temp = prev;
      prev = count;
      count += temp;
   };
   return alert("O número informado não pertence a sequencia");
};
console.log(isFibonacci(num));

