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
// // + - * ** / %
// //  ! DEĞİL &&=VE ||=VEYA
// // X++ İŞLEMDEN SONRA BİR ATTIR
// //X-- İŞLEMDEN SONRA BİR AZALT
// //++X İŞLEMDEN ÖNCE BİR ARTTIR SONRA İŞLEM
// //--X İŞLEMDEN BİR ÖNCE AZALT SONRA İŞLEME DEVAM ET

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
/*
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

console.log(Math.round(Math.random()*9+1)); */

//Number
// var sayi=15000;
// console.log(sayi);

// var sayi2=1.5E+4;
// console.log(sayi2);

// //binary,octal,decimal, hexdecimal nedir?

// //binary : 0-1
// var binary=0b00011;
// console.log(binary);

// //octal: 0-1-2-3-4-5-6-7 
// var octal=0o7512;
// console.log(octal);

// //decimal: 0-1-2-3-4-5-6-7-8-9 
// var decimal=123456;
// console.log(decimal);

// //hexadecimal: 0-1-2-3-4-5-6-7-8-9-A-B-C-D-E-F
// var hexadecimal=0xff;
// console.log(hexadecimal);

//Number() parseInt()=bu int çeviriyor arasındaki fark nedir?
//string() data.toString nedir aralarındaki farlkar nedir?
//Cast
//database, port, api(string)
// console.log(Number("10")+10);
// console.log(parseInt("10")+10);

// console.log(String(30)+10);
//  var number=30;
//  console.log(number.toString()+10);


//  //var, let, const

//  var data1=11;
//  console.log(data1);

//  var data1=22;
//  console.log(data1);

//  let data2=33;
//  console.log(data2);

//  let data3=33;
//  data3=44;
//  console.log(data3);

// const data4=55;
// console.log(data4);

// const data5=66;
// data5=76;
// console.log(data5);
///////////////////////////////
// //string
// let str=' js ÖĞreniyorum js '
// console.log(str);
// console.log(str.length);
// console.log(str.trim().length);

// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// console.log(str.charAt(1)); //1.data daki karakteri gösterir

// console.log(str.indexOf("js")); //soldan arama yaparken nerede buluğunu yazar
// console.log(str.lastIndexOf("js")); //sondan aramaya başlıyor

// console.log(str.concat("sona ekleme"));
// console.log(str.replace(str,"değiştir")); //yazıyı satırdaki ile değişiyor

// console.log(str.substring(2));  //2.indisten itibaren parçala bana göster
// console.log(str.substring(0,4)); // bana 2 ile 4 arasında parçala göster
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //Function (Normal Fonksiyon)

// //1 retursuz Parametresiz
// function returnsuzParametresiz(){
//     console.log("deneme");
// }
// returnsuzParametresiz();

// //2 retursuz Parametreli
// function returnsuzParametreli(adi){//parametre:adi
//     console.log("deneme "+adi);
// }
// returnsuzParametreli("merve"); //argüman: "merve "


// //3 returlu Parametresiz
// function returnluParametresiz(){
//     return "deneme55";
// }
// let result3=returnluParametresiz();
// console.log(result3);

// //4 returlu Parametreli
// function returnluParametreli(soyadi){
//     return "deneme66 "+soyadi;
// }
// let result4=returnluParametreli("Turhan");
// console.log(result4);
//  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Normal Function
// function normal(){}

//  //Anonymous (function)
//  let Anonymous=function(){}

// //Arrow (Function)
// let Arrow=()=>{}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//let veya const
//arrow function
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function deneme1(){
//     console.log("normal function");
// }
// deneme1();

// let deneme2=function(){
//     console.log("anonymous function");
// }
// deneme2();

// const deneme3=()=>{
//     console.log("arrow function");
// }
// deneme3();



//Immedia Function()();
//   (function(){
//     console.log("deneme4");
//   })(); // main dizi yapılarında kullanıllıyor çok kullanılmıyor ama

////////////////////////////////////////////////////////////////////
//condition
 const condi=()=>{
    let number=4;
    if(number>=2){
        console.log("Büyüktür");
    } else{
        console.log("Küçüktür");
    }
 }
 condi();


 const condi2=()=>{
    let number=4;
    if(number>=2)
        console.log("Büyüktür");
    else
        console.log("Küçüktür");
    
 }
 condi2();


 const condi3=()=>{
    let number=4;
    let result=(number>=2) ? "Büyüktür":"Küçüktür";
     console.log(result);
 }
 condi3();

 
 const condi4=()=>{
    let number=4;
     console.log((number>=2) ? "Büyüktür":"Küçüktür");
 }
 condi4();

 const condi5=()=>{
    let number=4;
    if(number=="1"){
        console.log("1");
    } else if(number==2){
        console.log("2");
    }else if(number==3){
        console.log("3");
 }else if(number==4){
    console.log("4");
}else{
    console.log("1<X<5 Dışındadır");
} }
 condi5();


 const condi6=()=>{
    let number=4;
// break : döngü kırmak
//return :metot kırmak
//continue :1 kereye mahsus es geç sonra döngüye devam
switch (number) {
    case 1:
        console.log("1");
        break; // döngüyü kırmak
    case 2:
            console.log("2");
            break;
    case 3:
        console.log("3");
        break;
     case 4:
        console.log("4");
        break;
    default:
        console.log("1<X<5 Dışındadır");
        break;
}
 }
condi6();






//loop
//örnekler



// let userData=prompt("Lütfen bir şeyler yazınız") ;
// console.log(userData);
//  console.log(userData.length);
//  console.log(userData.trim().length);

//  console.log(userData.toLowerCase());
// console.log(userData.toUpperCase());

// console.log(userData.concat("-ben js öğreniyorum"));
// console.log(userData.replace(userData,"Muaz")); //yazıyı satırdaki ile değişiyor

// console.log(userData.substring(2)); 
// console.log(userData.startsWith());
// console.log(userData.endsWith());
// console.log(userData.charAt(1));
// console.log(userData.substring(0,4)); 

//ÖDEV:
//Kullanıcı tarafından girilen bir sayının negatif mi, pozitif mi
//(dikkat: normal function ile yazınız)

// Kullanıcı tarafından girilen bir sayının tek mi, çift mi olduğunu gösteren
//(dikkat:anonymous function ve ternary ile yazınız)

let isOddEven=()=>{
    const result=4;
    if(result%2==0)
    console.log("Çift"); 
    else
    console.log("Tektir")
}
isOddEven() //bölümünde kalan denilince bu akla gelsin

//kullanıcadan alınan sayıya göre haftanın günlerini switch-case ile
//Örneğin:kullanıcı 1 girdi: 1=pazartesi


//////////////////////////////////////////////////////////////////

//loop
 
let loop=()=>{
for (let i = 1; i <= 10; i++) {
    document.write(i+ " ");
}   
}
loop()
document.writeln("<br/>")

let loop2=()=>{
    let i=1;
    while(i <= 10) {

            document.write(i+ " ");
            i++;
    }   
    }
    loop2();
     document.writeln("<br/>")

    let loop3=()=>{
        let i=1;
        do{
            document.write(i+ " ");
                i++;
        }   
        while(i <= 10) ;
        }
        loop3();

//örnekler