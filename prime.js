prime number=======>



let num = 64;
let flag = true;

for(let i = 2; i<num; i++){
	if(num%i == 0){
		flag = false
     }
}
(flag)?console.log("Prime"):console.log("Not Prime")
