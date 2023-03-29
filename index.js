//1
// function reverseNumber(number) {
//      let String = number.toString();
//     // console.log(String);
//     reverseString = String.split('').reverse().join('');
//     // console.log(reverseString);
//     return Number(reverseString);
// }
// const result = reverseNumber(123);
// console.log(result);

//2
// function alphabetOrder(string) {
//  let letters = string.toUpperCase().split("").sort().join("");
// //    console.log(letters) ;
//      return letters;
// }
// const result = alphabetOrder("Hello World");
// console.log(result);

//3
// function firstletter(string) {
//     const words = string.split(" ");
//      console.log(words);
//     const CapitalizedWord = words.map((word)=>
//     {
//         return word[0].toUpperCase() + word.substring(1);
//     }).join(" ");
//     return CapitalizedWord;
// }
// const result = firstletter("hello my name is archana");
// console.log(result);


//4
// function longest(str){
//      const longestWord = str.split(" ").sort((a,b)=>(b.length - a.length));
//      return longestWord[0];
//     }
// const result = longest("Hello World Archana");
// console.log(result);

//5 
// const vowels = ["a", "e", "i", "o", "u"];
// function countVowels(string){
//    let count = 0;
//    for (let iterator of string) {
//       if(vowels.includes(iterator)){
//         count++;
//       }
//    }
//   return count;
// }
// const result = countVowels("my name  is archana ");
// console.log(result);
// //6

// function longestCityName(cityname){
//     // console.log(CityName);
//    return cityname.sort((a,b)=>(b.length - a.length))[0];

// };
// const result = longestCityName(["Valsad","Navsari","Surat","Vadodra","Ahmedabad"]);
// console.log(result);

//7

// function JavaScriptFunction() {
//     console.log("Hello I am inside Passfunction");
// }
// function PassFunction(JavaScriptFunction)
// {
//     JavaScriptFunction();
//     return "Hello I am PassFunction";
// }
// const result = PassFunction(JavaScriptFunction);
// console.log(result);


// 8 
// function getFunctionName(){
//     console.log(getFunctionName.name);
// }
// getFunctionName();

//1
// const car = {type:"Fiat", model:"500", color:"white"};
//  function retriveObjectValue(value){
//     return Object.values(value);
//  }
// const result = retriveObjectValue({type:"Fiat", model:"500", color:"white"});
// console.log(result);

//2
// const car = {type:"Fiat", model:"500", color:"white"};
// function ObjectPairs(values){
//     return Object.entries(values);
// }
// const result = ObjectPairs({type:"Fiat", model:"500", color:"white"});
// console.log(result);


//3
// const car = {type:"Fiat", model:"500", color:"white"};
// function CopyOfObject(obj){
//     const swapped = Object.entries(obj).map(
//         ([key, value]) => [value, key]
//       );
//       return Object.fromEntries(swapped);
// }
// const result = CopyOfObject({type:"Fiat", model:"500", color:"white"});
// console.log(result);

//5 
// function RemoveDuplicates(array){
//     return [...new Set(array)];
// }
// const result = RemoveDuplicates(["Archana","archana","jaitry","jaitry","riya","diya"]);
// console.log(result);

//6
// function mergeTowArray(array1,array2){
//     const mergearray =  array1.concat(array2);
//     return [...new Set(mergearray)];
// }
// const result = mergeTowArray(["Archana","archana","jaitry","jaitry","riya","diya"],["drshti","drshti","kruplai","anuska"]);
// console.log(result);

//7 
// function removeSpecificElement(array,item){
//     let index =array.findIndex((element)=> element === item);
//     if(index != -1){
//         array.splice(index,1);
//         return array ;
//     }
// }
// const result = removeSpecificElement(["Archana","archana","jaitry","riya","diya"],"jaitry");
// console.log(result);

//8
// function getRandomItem(array){
//     return array[Math.floor(Math.random()*array.length)];
// }
// const result = getRandomItem([1,2,3,4,5,6,7,8,9,10]);
// console.log(result);

// 9 
// function Filter(array){
//  return array.filter(Boolean);
// }
// const result = Filter([58,'','abcd',true,null,false,0]);
// console.log(result);



