function hitungmundur(x){
    if (x <= 0) return;
      console.log(x);
      hitungmundur(x-7);
      hitungmundur(x-7);
}
hitungmundur(10)