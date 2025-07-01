try {
  let hasilnya = 20 / 0;
  if (!isFinite(hasilnya)) throw "Error: Requirest url not found!";
  console.log(hasilnya);
} catch (e) {
  console.log(e);
}
