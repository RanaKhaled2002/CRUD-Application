// var bts = ["RM","Jin","Suga","Jhope","Jimin","V","Jungkook"];
// console.log(bts)
// console.log(bts[8]);//undefiend
// for(var i = 0;i<bts.length;i++)
// {
//     console.log(bts[i]);
// }


// array of object , JSON = Array OF Object ,Object
// var bts = [
//     {name:"RM",age:29,job:"Rap",group:"BTS" },
//     {name:"Jin",age:31,job:"Vocal",group:"BTS" },
//     {name:"Suga",age:30,job:"Rap",group:"BTS" },
//     {name:"Jhope",age:29,job:"Rap",group:"BTS" },
//     {name:"Jimin",age:28,job:"Vocal",group:"BTS" },
//     {name:"V",age:28,job:"Vocal",group:"BTS" },
//     {name:"Jungkook",age:26,job:"Vocal",group:"BTS"},
// ]
// console.log(bts[6].age);



// bulit in method
// Make Change In Main Array
// 1- Add
//    * push ==> end
//    * unshift ==> start
//    * bts.splice(3,0,"Aguest D");
// 2- Remove
//    * pop ==> end
//    * shift ==> start
//    * bts.splice(0,1);
// sort()
// reverse()

// Do Not Change In MAin Array
// slice(0,3)
// concat()

// var bts = ["RM","Jin","Suga","Jhope","Jimin","V","Jungkook"];
// bts.push("Aguest D");
// bts.unshift("Aguest D");
// bts.splice(0,1);
// bts.splice(3,0,"Aguest D");
// console.log(bts);
// bts.pop();
// bts.shift();
// console.log(bts);
// var x = bts.slice(0,3);
// var x = bts.sort();
//var x = bts.reverse();
// var rap = ["Aguest D"];
// var x = bts.concat(rap);
// console.log(bts);
// console.log(x);

// var box = ""; // do not forget ""
// for(var i =0;i<bts.length;i++)
// {
//     // document.getElementById("demo").innerHTML += "<h1>"+bts[i]+"</h1>";
//     box += "<h1>"+bts[i]+"</h1>";

// }
// document.getElementById("bts").innerHTML = box;


// var myh1 =document.querySelectorAll("h1");
// for (let index = 0; index < myh1.length; index++) {
//     myh1[index].addEventListener("click",function(){
//         alert("HI");        
//     });
    
// }

