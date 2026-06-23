const insights = [
  "Kesalahan bukan akhir, tapi awal pemahaman.",
  "Adaptasi itu seperti list Python—bisa diubah, bisa ditambah.",
  "Ritual kecil bisa jadi fondasi besar dalam mentoring.",
  "Kelelahan bukan musuh, tapi sinyal untuk jeda yang bijak.",
  "Setiap presentasi adalah panggung transisi, bukan ujian."
];

function tampilkanInsight() {
  const randomIndex = Math.floor(Math.random() * insights.length);
  const output = document.getElementById("output");
  output.textContent = insights[randomIndex];
}