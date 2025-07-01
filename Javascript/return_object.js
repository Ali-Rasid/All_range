function users(nama, umur) {
  return {
      Nama: nama,
      Umur: umur,
      status: umur >= 18? "Dewasa" : "Bocil"
};
}
console.log(users("Nagumo", 21 ));