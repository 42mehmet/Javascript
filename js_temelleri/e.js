"use strict";

// d.js dosyasinda yaptiginiz islemleri daha dinamik bir fonksiyon olusturarak gerceklestirin.
// Fonksiyon, diziyi direkt kullanmak yerine parametre olarak alsin.

function istenenIsimler(isimler, uzunluk) {
  const yeniIsimler = [];

  // const yeniYabancilar = [];
  for (let i = 0; i < isimler.length, yabancilar.length; i++) {
    const isim = isimler[i];
    // const isimleri = yabancilar[i];

    if (isimler.length === uzunluk) {
      yeniIsimler.push(isim);
    }
    if (yabancilar.length === uzunluk) {
      yeniYabancilar.push(isimleri);
    }
  }
  return yeniIsimler;
}

const isimler = [
  "Furkan",
  "Sezgin",
  "Fatih",
  "Emir",
  "Yakup",
  "Mehmet",
  "Muhammed",
  "Selman"
];
const yabancilar = [
  "Thom",
  "Peter",
  "James",
  "Frank",
  "Adrian",
  "Harry",
  "Steve",
  "Patrick"
];

const yeniIsimler = istenenIsimler(isimler, 4);
// const yeniYabancilar = istenenIsimler(yabancilar, 5);
console.log("yeniIsimler", yeniIsimler);
// console.log("yeniYabancilar", yeniYabancilar);
