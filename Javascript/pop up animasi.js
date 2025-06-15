<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>Popup</title>
<style>
body{margin:0;font-family:sans-serif}
#swal{display:none;position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.5);justify-content:center;align-items:center;z-index:9999}
.box{background:#fff;padding:20px;border-radius:10px;width:300px;text-align:center;animation:fade 0.3s}
.icon{font-size:40px;margin-bottom:10px}
.title{font-size:18px;font-weight:bold}
.text{margin:10px 0;color:#444}
.btns{margin-top:15px}
.btns button{margin:5px;padding:8px 12px;border:none;border-radius:5px;color:#fff;cursor:pointer}
.yes{background:green}
.no{background:red}
@keyframes fade{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:scale(1)}}
</style></head>
<body>
<button onclick="show()">Hapus</button>
<div id="swal">
  <div class="box">
    <div class="icon">⚠️</div>
    <div class="title">Yakin?</div>
    <div class="text">Data tidak bisa dikembalikan!</div>
    <div class="btns">
      <button class="yes" onclick="ok()">Ya</button>
      <button class="no" onclick="batal()">Tidak</button>
    </div>
  </div>
</div>
<script>
const swal=document.getElementById('swal');
function show(){swal.style.display='flex'}
function ok(){swal.innerHTML='<div class="box"><div class="icon">✅</div><div class="title">Berhasil</div><div class="text">Data dihapus</div><div class="btns"><button class="yes" onclick="swal.style.display=\'none\'">OK</button></div></div>'}
function batal(){swal.innerHTML='<div class="box"><div class="icon">❌</div><div class="title">Batal</div><div class="text">Data aman</div><div class="btns"><button class="no" onclick="swal.style.display=\'none\'">OK</button></div></div>'}
</script>
</body></html>