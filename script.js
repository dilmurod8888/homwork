let str = prompt("m-a-t-i-n  k-i-r-i-t-i-n-g");
while (str.trim().length == 0) {
  str = prompt("Nmadir xato ketti qaytadan urnib ko'ring !!!");
}
let array = str.replace(/\s/g, "").split("").join("-");
console.log(array);





let wec = prompt("matin kiriting va unlli hariflar sonini aniqlang");
while (wec.trim().length == 0) {
  wec = prompt("matin kiriting !!!");
}
let string = wec.split("");
const arr = ["a", "i", "u", "o", "e"];
let t = 0;
for (let i = 0; i < wec.length; i++) {
  if (arr.includes(string[i])) {
    t++;
  }
}
console.log(t);





let hammaIsimlar = [];
dilmurodName();
function dilmurodName() {
  let isim = prompt("Ism kiriting => namuna Add isim, yoki Dell Isim");

  if (isim == "stop") {
    return;
  }
  while (isim.trim().length == 0) {
    isim = prompt("Ism kiriting !!!");
  }
  let parametr = isim.toLowerCase().split(" ");
  if (parametr[0] == "add") {
    hammaIsimlar.push(parametr[1]);
  } else if (parametr[0] == "dell") {
    let index = hammaIsimlar.indexOf(parametr[1]);

    if (index !== -1) {
      hammaIsimlar.splice(index, 1);
    }
  }
  console.log(hammaIsimlar);
  dilmurodName();
}
