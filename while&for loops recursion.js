function iterateAndLogWithFor(n) {
    for (let i = 0; i < n; i=i+1) {
      if (i % 2 === 0) {
        console.log(i+" is even");
      } else {
        console.log(i+" is odd");
      }
    }
  }

    function iterateAndLogWithWhile(n) {
        var i=0
        while(i<n){
            if (n%2===0){
                console.log(i+" is even")
              }
            else {
                console.log(i+" is odd")
                
            }
            i=i+1
         }
    }



    function reverseIterateAndLogRecursively(n) {
        if (n < 0){
             return 0}
        
        if (n % 2 === 0) {
          console.log(n + " is even");
        } else {
          console.log(n + " is odd");
        }
        
       return  reverseIterateAndLogRecursively(n - 1)
      }


     function weirdDivisionWithFor(n) {
            for (var i=0; i<n; i=i+1){
                if (n%3===0 &&n%5===0){
                    return "juliajames"
                }
                else if (n%3===0){
                    return "julia"
                }
                else if (n%5===0){
                    return "james"
                }
                else {
                    return n 
                }
             }
     }


     function weirdDivisionWithWhile(n) {
        var i=0
        while (i<n){
            if (n%3===0 && n%5===0){
                return "juliajames"
            }
            else if (n%3===0){
                return "julia"
            }
            else if (n%5===0){
                return "james"
            }
            else {
                return n
            }
        i=i+1
        }
     }

     function inverseWeirdDivisionRecursively(n) {
        if (n<0){
            return 0}
        if (n%3===0 && n%5===0){
                    return "juliajames"
                }
                else if (n%3===0){
                    return "julia"
                }
                else if (n%5===0){
                    return "james"
                }
                else {
                    return n}
        return inverseWeirdDivisionRecursively(n-1)
    }

      function laughWithFor(number) {
        var result =""
        for (var i=number;i>0;i=i-1){
            result =result+"ha"
        }

      }

      function laughWithWhile(number) {
        var result ="" 
        var i =number
        while (i>0){
            result =result+"ha"
            i=i-1
        }
        return result 
      }
       
      function laughRecursively(number) {
        if (number===0){
            return ""
        }
        return "ha"+laughRecursively(number-1)
    }

    function sumWithWhile(number) {
        var i=0
        var sum =0
        while (i<=number){
            sum=sum+i
            i=i+1
        }
        return sum
    }
    function sumWithFor(number) {
        var sum =0
        for (var i=0;i<=number;i=i+1){
            sum=sum+i
        }
        return sum 
    }

    function factorialRecursively(number) {
        if (number===1){
            return 1}
        return number*factorialRecursively(number-1)
    }


    function rangeFor(min, max) {
        var array=[]
        for(var i=min;i<=max;i=i+1){
            array.push(i)
        }
        return array
    }

    function rangeWhile(min, max) {
        var array=[]
        var i=min 
        while (i<=max){
            array.push(i)
            i=i+1
        }
        return array
    }

    function reverseWithWhile(str) {
        var result =""
        var i=str.length-1
        while (i>=0){
            result =result+str.charAt(i)
            i=i-1
        }
        return result
     }

     function reverseWithFor(str) {
        var result =""
        for (var i=str.length-1;i>=0;i=i-1){
            result=result+str.charAet(i)

        }
        return result 
     }



      
     function fibRecursive(number) {
        if (number<2){
            return number}
        return fibRecursive (number-1)+fibRecursive(number-2)
    
        
    }

    function firstDigit(str) {
        var i=0
        while (i<str.length){
            if (str.charAt(i)>="0" && str.charAt(i)<="9"){
                return str.charAt(i)
            }
            i=i+1
        
        return null}
        }

     function findMax(array) {
            var max =0
            for (var i=0;i<array.length; i=i+1){
                if (array[i]>max){
                    max=array[i]

                }
            }
            return max
        }