console.log("script dosyası")
document.write("<p>html</p>")

console.log("merhaba dünya" , "30" ," günde devri alem" ) 


//değişkenler
var firstName = "emre";
let lastName = "durmaz";
const age = 33;
console.log(firstName,lastName, age,"yaşında" )

// değişkenler sayı ile başlayamazlar..
//içerisinde özel karakterler olmaz..
// $ ve _ işaretlerini kabul ediyor..


//variable yazarken camel case kullanmak 
//pascal case

let firstName11 ="emre"; //js de bu şekilde kullanılır

//Camel case
let FirstName ="emre";

//snake case
let first_name ="emre"; // genelde database yazımlarında kullanılıyor.

let isMarried = true; // true false doğrulamalarda kullanıyoruz.

let ageIsOver18 = true; //örnek



let team1="şahin", team2="doğan", team3="kartal"; // let içine ayrı ayrı değer tanımlayabiliyoruz.

console.log(team1 + team2 + team3) //artı kullanabiliyoruz birleştirmeye yarar.

console.log("merha" + "ba") // çıktısı merhaba olur.

console.log(age + 5); //age  le 5 i toplar

console.log(age+ "5") //age le 5 i yanyana yazar.


//datatypelar


let dataString1 = "merhaba"; // 3 tür string yazabiliyoruz. çift tırnak
let dataString2 = 'merhaba'; // tek tırnak..
let dataString3 =`merhaba`; // bektik 

//undefined tanımlanmamış anlamındadır.

//console.log(telefon) // telefon değişkeni tanımlanmadığından boş gösterecek
                    // değişken atanıp değer yazılmazsa undefined yazar (boş veri)

//Null value boş datalar

let nullValue = "";
console.log(nullValue)


// scope
// Scope'lar 2 ye ayrılır 1.Global scope 2. local scope

function nameFunc(params) {
    let test = "fonksiyon içi";
    console.log(test);
    console.log(firstName) // local scope , global scope'a erişebilir.
}
nameFunc()

//console.log(test); // test local scope olduğu için çalışmaz 

let nane = "haydar";
let limon ="dümenci";
let zeytin =43;
console.log(`${nane}  ${limon} ${zeytin} yaşındadır`)