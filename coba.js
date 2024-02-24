// console.log("hasil", a % b);

var a = 5;
var b = 7;
var c = null;

function cobatambah() {
  if (c == "null") {
    console.log("lima");
  } else if (c === null) {
    console.log("limaDUA");
  } else {
    console.log("limaTiga");
  }

  var hewan = {
    binatang: "kucing",
    makan: "ikan",
    umur: 10,
  };

  var hewan2 = ["ayam", "sapi", "kambing"];

  console.log(hewan.binatang);
  console.log(hewan2[0]);

  for (var i = 0; i < hewan2.length; i++) {
    console.log(hewan2[i]);
  }

  while (a < b) {
    console.log(a);
    a++;
  }
  var isi = 2;
  switch (isi) {
    case 5:
      console.log("lima");
      break;
    case 6:
      console.log("enam");
      break;
  }
}

cobatambah();
