1. Find the number of digits
 
const Find_Digits = (N) => 
{
	return N.toString().length
	

};

2. Find the Fives.

const Find_Five = (N,d) => 
{
let i=N, digit5=0;
	 while(i>0){
	   x = i%10;
	   if(x==5){
	     digit5 = digit5 + 1;
	   }
	   i = parseInt(i/10);
	 }
	 return digit5;
 
};

3. Find Sum

const findSum = (n) => {
  
    let i;
    let sum=0
    for(i=1;i<=n;i++)
    {
      if(i%2==0)
      {
        sum=sum+i
      }
      
    }
    return sum
  };
  

  4. Find the sum of the digits of a given number.

  const Number_Sum = (N) => 
{
	let rem;
  let sum=0;
  let d=N.toString().length;

for(i=0;i<d;i++)
{
  rem=N%10;
  
  N=parseInt(N/10);
 
  sum=rem+sum;

}
return sum
};

5. Print the Odds.


const Print_Odd = (N) => 
{
 
	 for(let i=2;i<=N;i++)
	 {
	   
	   if(i==2)
	   {
	     console.log(i)
	     continue;
	   }
	   if(i%2!=0)
	   {
	     console.log(i)
	   }
	 }
};


6. Print the Pattern.


const Print_pattern = (N) => 
{

for(let i=1;i<=N; i++){
	  let a = "*";
	  console.log(a.repeat(i));
	}
};


7. Check whether a Number is a prime or not.


const Prime_Check = (N) => 
{
	 let i;
	 for(i=2;i<=(N-1);i++){
	   if(N%i==0){
	     break;
	   }
	 }
	   if(i==N){
	     return "YES"
	   }else{
	     return "NO"
	   }

	
};


8. Print Numbers


const printNumbers = (n) => {
    let i;
    for(i=1;i<=n;i++)
    {
      console.log(i)
    }
    
};



9. Print the Table


const Print_Table = (N) => 
{
	 let num = N;
  let tab = 0;
	for(let i=1; i<=10; i++){
	  num = N*i;
	  table = N + " * " + i + " = " + num;
	  console.log(table);
	}
};

