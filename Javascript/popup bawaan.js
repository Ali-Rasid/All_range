<!DOCTYPE html>
<html>
<body>

<button onclick="hapus()">Hapus Data</button>

<script>
function hapus() {
  if (confirm("Apakah kamu yakin ingin menghapus data?")) {
    alert("Data berhasil dihapus.");
  } else {
    alert("Penghapusan dibatalkan.");
  }
}
</script>

</body>
</html>