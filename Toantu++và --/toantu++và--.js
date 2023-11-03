/**
 * toán tử ++ và -- 
 * prefix và postfix
 *
 */

/**
 * PreFix
 */
var a=7;
/**
 * Đối với ++
 * + Việc 1: cộng 1 cho a , a=a+x =>a=8
   + việc 2 trả về a sau khi được cộng 1
 */

console.log(++a);//(prefix) tiền tố 

var b=7;
/* Đối với --
 *  + Việc 1: trừ 1 cho a , a=a-x =>a=6
    + Việc 2: trả về a sau khi được trừ 1 
 */
console.log(--b);//(prefix) tiền tố



/**
 * PostFIx
 */

var c=7
/**
 * Cộng 
 * Việc 1: 'c copy', 'c copy'=7
 * việc 2. cộng 1 của c, c=c+1 =>c=8
 * việc 3 trả về 'c copy' 
 */
var Output=c++
console.log('Output:',Output);

// muốn coi biến c thì ta 
console.log(c);


/**
 * Trừ
 * Việc 1: 'c copy', 'c copy'=7
 * việc 2. trừ 1 của c, c=c-1 =>c=6
 * việc 3 trả về 'c copy
 */
var d=7
var Output1=d--;
console.log('outPut',Output1);
// muốn coi biến d thì ta 
console.log(d);