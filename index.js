// let num = +prompt("Kasr son kiriting");

// if(num-0.5>=num;)
//==================== 10-56 -rasidagi butun sonlarni chiqarish =====================
// let a = 10;
// let b = 56;
// console.log(Math.floor(Math.random() * (b - a + 1) + 10));

// ===========================================================
// avval butun songa yaxlitlang
// agar just chiqsa kvadratga oshiring
// agar toq bo'lsa kubga oshiring

// let num = +prompt("Son kiriting");
// let yax = Math.floor(num);

// if (yax % 2 == 0) {
//   console.log(Math.pow(yax, 2));
// } else if (yax % 2 == 1) {
//   console.log(Math.pow(yax, 3));
// } else {
//   console.log(0);
// }

//================================= VAZIFA ===============================================
//===========================================================

// 2. Minutlarnibutun son sifatida qabul qilib
//  uni sekundlarga o'girib beradigan funksiya tuzing

// function toSekunt(minut) {
//   return minut * 60;
// }
// console.log(toSekunt(9));
//===========================================================

// 3.Funksiyabutunsonqabulqiladi. Funksiyaushbubutun
// sondankeyingisonniqaytarsin.

// function oshir(num) {
//   return num + 1;
// }
// console.log(oshir(8));
//===========================================================

// 4.Funskiyauchburchakningasosivabalandliginiqabulqiladi.
// Funksiyauchburchakningyuzinihisoblabqaytarsin.Uchbur
// chakyuzinitopishformulasi:S=(asos*balandlik)/2

// let asos = 6;
// let balandlik = 4;
// function yuzi(asos, balandlik) {
//   return (asos * balandlik) / 2;
// }
// console.log(yuzi(asos, balandlik));
//===========================================================

// 5.Funksiyayoshniyilko’rinishidaqabulqiladi.ushbufunksiya
// yoshnikunlardahisoblabnatijaniqaytarsin.Biryil365kundeb
// oling
// function kun(yil) {
//   return yil * 365;
// }
// console.log(kun(65));

//===========================================================
// 6. Kubga oshirish

// function kub(son) {
//   return Math.pow(son, 3);
// }
// console.log(kub(3));
//===========================================================

// 7.Massivniichidanbirinchielementiniqaytaradiganfunksiya
// yasang;

// function first(a) {
//   return a[0];
// }
// console.log(first(["dk", 6, "shn"]));
//===========================================================

// 8. kopaytirish
// function kopay(a, b) {
//   return a * b;
// }
// console.log(kopay(5, 9));
//===========================================================

// 9. Soatko’rinishidaqiymatkiritilsa,sekundlardaqaytaradigan
// funksiyayasang.

// function sekund(a) {
//   return a * 3600;
// }
// console.log(sekund(10));
//===========================================================

//10.Uchburchakninguchinchitomoniningenguzunqiymatini
// qaytaradiganfunksiyayasang.
// Formula:Enguzunuchinchitomon=(tomon1+tomon2)-1

// function uchinchi(ikki, bir) {
//   return ikki + bir - 1;
// }
// console.log(uchinchi(8, 10));
//===========================================================

// 11.Ikkitasonargumentsifatidakiritilsa,ushbuikkalasonnibir
// inchisiniikkinchisigabo’lgandagiqoldiqniqaytaribberadigan
// funksiyayasang

function qoldiq(son1, son2) {
  return son1 % son2;
}
console.log("11:", qoldiq(15, 7));

//===========================================================
// 12.Turtburchakningbo’yivaeniberilsauningyuzinihisoblab
// qaytaradiganfunksiyayasang.FormulaS=bo’yi*eni

function turtburchakYuzi(boyi, eni) {
  return boyi * eni;
}
console.log("12:", turtburchakYuzi(4, 6));
//===========================================================

// 13.Funksiya“a”argumentsifatidastringma’lumotqabulqiladi.
// ushbu funksiya “Something” stringiga ” ” bo’sh joyva “a”
// stringinibirlashtiribqaytarsin.

function stringQoshish(a) {
  return `13: Something ${a}`;
}
console.log(stringQoshish("va yana birnima "));
//===========================================================

// 14.Quyidaginamunalargaqaraganholatdafunksiyayasang.
// Namuna: kvadrat(5) 25

function kvadrat(a) {
  return Math.pow(a, 2);
}
console.log(`14:`, kvadrat(5));
//===========================================================

// 15.Funksiyaraqamqabulqiladi.Agarushburaqam0dankichik
// yokitengbo’lsafunksiyarostqaytarsinaksholdayolg’on.

function noldan(raqam) {
  return raqam <= 0;
}
console.log("15:", noldan(-9));
//===========================================================

// 16.Funksiyako’pburchaklishaklningburchaklarsoniniqabul
// qiladi. Natijadafunksiyaushbushaklningichkiburchaklar
// yig’indisiniqaytarsin.Formula(n-2)x180

function ichkiBurchaklar(n) {
  return (n - 2) * 180;
}
console.log("16:", ichkiBurchaklar(6));
//===========================================================

// 17.Basketbolo’yinida ikkiochkolikvauchochkolikgollar
// mavjud.Agarfunksiya1-argumentsifatidaikkiochkolikgollar
// soniniva2-argumentsifatidauchochkolikgollarsoniniqabul
// qilsa, jamoaningjamiochkosiniqaytaradiganfunksiyayasang.

function ochkolar(x, y) {
  return x * 2 + y * 3;
}
console.log("17:", ochkolar(4, 2));
//===========================================================

// 18.Quyidagi namunalarni kuzatgan holda ungamuvofiq
// funksiyayasang.
// Namuna:
// nameString("Mubashir") "MubashirEdabit

function nameString(name) {
  return name + "Edabit";
}
console.log("18:", nameString("Saidolim"));
//===========================================================

// 19.Ikkitasonkiritilsa,agarularningyig’indisi100dankichkina
// bo’lsarost,kattabo’lsayolg’onqiymatqaytaradiganfunksiya
// yasang.

function ikkitaSon(x, y) {
  return x + y < 100;
}
console.log("19", ikkitaSon(50, 49));
//===========================================================

// 20.Quyidaginamunalarnikuzatganholdaungamuvofiqkeladi
// ganfunksiyayasang.
// Namuna:
// printArray(1) [1]

function printArray(son) {
  for (let i = 1; i <= son; i++) {
    console.log("20", i);
  }
}
console.log("20", printArray(5));

//===========================================================

//21.Fermadaturlixildagihayvonlarmavjud.Shundayfunksiya
// yasangki,ushbufunksiyajamifermadagihayvonlaroyoqlari
// nechtaekanliginihisoblabqaytarsin.Bundafunksiyabirinchi
// argumentsifatidatovuqlarsonini,ikkinchiargumentsifatida
// qo’ylarni vauchinchi argument sifatidasigirlarningsonini
// qabulqiladi.

function oyoqlar(tovuq, qoy, sigir) {
  return tovuq * 2 + qoy * 4 + sigir * 4;
}
console.log("21", oyoqlar(2, 3, 5));
//===========================================================

// 22.Javascriptda“&&”matiqiyoperatorimavjud.Ushbuoper
// atorikkitamantiqiyifodaqabulqiladi.Quyidaginamunaga
// muvofiqkeladiganfunskiyayasang.Ushbuoperatordanfoy
// dalanganholda!

function and(aa, bb) {
  if (aa == true && bb == true) {
    return ("22", true);
  } else {
    return ("22", false);
  }
}
console.log("22", and(1, 1));
//===========================================================

// 23.Funksiya2tasonqiymatqabulqiladi.Agar1-son2-songa
// tengbo’lsarost,aksholdayolg’onqiymatqaytsin.Bundaikkala
// qiymatningma’lumotturibirxilbo’lsin.
function tengMi(x, y) {
  if (x === y) return ("23", true);
  else {
    return ("23", false);
  }
}
console.log("23", tengMi(";", ";"));

// 24.Futboldaochkonihisoblaydiganfunksiyayasang. Bunda
// funksiyayutishlarsoni,duranglarsonivamag’lubiyatlarsonini
// qabulqiladi.1tayutish=3ochko,1tadurang=1ochko,1ta
// mag’lubiyat=0ochkohisoblanadi.
function futbolOchko(yutishlar, duranglar, maglubiyatlar) {
  return yutishlar * 3 + duranglar * 1 + maglubiyatlar * 0;
}
console.log("24", futbolOchko(3, 4, 1));

// 25.Funskiyasoatlarvaminutlarni argument sifatidaqabul
// qiladi.Ushbufunkisyasoatlarvaminutlarnisekundgao’girib
// ularningyig’indisiniqaytarsin.
function sekundlar(soat, minut) {
  return soat * 3600 + minut * 60;
}
console.log("25", sekundlar(1, 3), "sekund");

// 26.Quyidaginamunalarnikuzatganholdafunksiyayasang.
// Namuna:
// fun(4) false
// fun(9) false
// fun(7) true
function kv(num) {
  for (let i = 2; i < num; i++) {
    if (num === 2) {
      return true;
    } else {
      return false;
    }
  }
  console.log("27", kv(4));
}

// 27.Funskiay2taistalganturdagiqiymatlarqabulqiladi.Agar
// ushbu2taqiymathamqiymat jihatidanhamma’lumot turi
// jihatidantengbo’lsarost,aksholdafunkisyayolg’onqiymat
// qaytarsin.
function tengMi(x, y) {
  if (x === y) {
    return "rost";
  } else return "yol'gon";
}
console.log("27", tengMi("a5", "a5"));

// 28.Funksiyabooleanqiymatqabulqiladi. Ushbufunksiya
// booleanqiymatnistringgao’giribqaytaribbersin.
function booleanToString(bool) {
  if (bool == Boolean(true)) {
    return "true";
  } else if (bool == Boolean(false)) {
    return "false";
  }
}
console.log("28", booleanToString(true));

// 29.Arrowfunksiyasini yaratingushbu funksiya shunchaki
// berilganqiymatniqaytarsin.
// Namuna:
// arrowFunc(3) 3
// arrowFunc("3") "3"
// arrowFunc(true) true

function arrowFunc(qiymat) {
  return qiymat;
}
console.log("29", arrowFunc(NaN));

// 30.Framelarsoninihisoblaydiganfunksiyayarating.Framebu
// 1sekunddanechamartako’rinishlarsoniaylanishi.Funksiya
// 14
// EDABIT
// minutlarva1sekunddanechtaframelarsoniaylanishiniar
// gumentsifatidaqabulqiladi. Funksiyajamiframelarsonini
// qaytarsin.
// functionframeSoni(minut,frame){
// //code...
// }
// Namuna:
// frameSoni(1,1) 60
// frameSoni(10,1) 600
// frameSoni(10,25) 15000

function frameSoni(minut, frame) {
  return minut * frame * 60;
}
console.log("30", frameSoni(10, 25));
