//JS 1995 yılında Brandan Eich tarafından yazılmıştır. Betik dildir.
//Cross platform
//OOP uygun.



//single comment
/*
multiple comment
*/

//console.log("loglama");
//console.info("info");
//console.warn("warn");
//console.error("error");
//alert("pop-up bilgilendirme-1");
//window.alert("pop-up bilgilendirme-2");
//document.writeln("ekranda yazı");

//Variable
/* var result="Js öğreniyorum";
console.log(typeof result+" => "+result);

var result=4423;
console.log(typeof result+" => "+result);

var result=44.23;
console.log(typeof result+" => "+result);

var result=true;
console.log(typeof result+" => "+result);

//Naming convensition-Genel Kurallar
var deneme="JS Data "
console.log(deneme);

var deneme44="JS Data "
console.log(deneme44);

var $deneme44="JS Data "
console.log($deneme44);

var _$deneme44="JS Data "
console.log(_$deneme44);

/*
var 44$deneme44="JS Data "
console.log(44$deneme44); // sayıyla başlanmaz izin vermiyor */

/*var denemeVerisi="JS Data "
console.log(denemeVerisi);

//interpreter, compiler
//senkron, asenkron ?

//whoisting
result2=56;
var result2; */
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Operators
// + - * ** / %
// ! DEĞİL &&=VE ||=VEYA
// X++ İŞLEMDEN SONRA BİR ATTIR
//X-- İŞLEMDEN SONRA BİR AZALT
//++X İŞLEMDEN ÖNCE BİR ARTTIR SONRA İŞLEM
//--X İŞLEMDEN BİR ÖNCE AZALT SONRA İŞLEME DEVAM ET

// = ATAMA
// == EŞİT (TÜRÜNE BAKMA)
// ===EŞİT(TÜRÜNE BAK)


//var number1=40;
//var number2=5;
//console.log(number1+number2);
//console.log(number1-number2);
//console.log(number1*number2);
//console.log(number1/number2);
//console.log(number1%number2);

//Cast =özel yapıların ismi
//Number =sayılar
//String()

//var userData=Number(prompt("Lütfen sayı giriniz:"));
//console.log(userData+45);

// underfined
//  var result4;
//  console.log(result4); //eğer bir değişkene değer vermezsek karşımıza çıkar

// // NaN: Not A Number
// var result5="asd"/4;
// console.log(result5);

// // isNaN
// var result6=4;
// console.log(isNaN(result6)); //false: sayıdır

// // Infinity
// console.log(4/0); //Bir sayının sıfıra bölümü tanımsız,sonsuzluktur
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Math
console.log(Math.PI);
console.log(Math.E);
console.log(Math.min(4,1,99,555,25,-100));
console.log(Math.max(4,1,99,555,25,-100));

console.log(Math.sqrt(16));
console.log(Math.abs(-25));
console.log(Math.pow(2,5));

console.log(Math.floor(3.9)); // floor zemin sayıyı her zaman aşağıya yuvarlar
console.log(Math.ceil(3.1)); // yukarı yuvarlar
console.log(Math.round(6.4)); //6.4 oları aşağı yuvarlar
console.log(Math.round(6.5)); // 6.5 ve yukarı olanları yukarı yuvarlar

console.log(Math.sin(45));

console.log(Math.round(Math.random()*9+1));