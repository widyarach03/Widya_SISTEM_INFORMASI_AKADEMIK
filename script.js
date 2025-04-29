// Data dummy
const visi = "Terwujudnya lulusan SMK Hang Tuah 1 Jakarta yang Nasionalis, Religius, Mandiri, Kompeten, Juara, Berjiwa Bahari, dan Berwawasan Global sehingga Mampu BMW (Bekerja, Melanjutkan Kuliah dan Wirausaha).";
const misi = [
    "Menyelenggarakan pendidikan yang berorientasi untuk membentuk karakter peserta didik yang Nasionalis, Religius, Mandiri, Kompeten, dan Juara",
    "Membekali peserta didik dengan IMTAQ & IPTEK, jiwa bahari dan wawasan global",
    "Meningkatkan mutu pendidik, tenaga kependidikan, sarana/prasrana sekolah, dan manajemen sekolah unluk meningkatkan pelayananyan yang unggul",
    "Meningkatkan kolaborasi dengan mitra industri dan pemangku kepentingan lainnya dalam mendukung program-program sekolah",
    "Memfasilitasi peserla didik agar Mampu BMW (Bekeria, Melanjulkan Kuliah atau Wirasuaha)"
];
const programKeahlian = [
    "Akuntansi",
    "Perkantoran",
    "Pemasaran",
    "Desain Komunikasi Visual",
    "Pengembangan Perangkat Lunak dan Gim"
];
const saranaPembelajaran = [
    "Sarana1", "Sarana2", "Sarana3", "Sarana4", "Sarana5",
    "Sarana6", "Sarana7", "Sarana8", "Sarana9", "Sarana10"
];

// Menampilkan visi dan misi ketika bagian "Visi & Misi" di-scroll
document.querySelector("#VisiMisi").style.display = "block"; // Tampilkan bagian
document.getElementById("visi").innerText = visi;

const misiList = document.getElementById("misi");
misi.forEach(item => {
    const listItem = document.createElement("li");
    listItem.innerText = item;
    misiList.appendChild(listItem);
});

// Menampilkan program keahlian
document.querySelector("#Program").style.display = "block"; // Tampilkan bagian
const programKeahlianList = document.getElementById("program-keahlian");
programKeahlian.forEach(item => {
    const listItem = document.createElement("li");
    listItem.innerText = item;
    programKeahlianList.appendChild(listItem);
});

// Menampilkan sarana pembelajaran
document.querySelector("#Sarana").style.display = "block"; // Tampilkan bagian
const saranaList = document.getElementById("sarana-pembelajaran");
saranaPembelajaran.forEach(item => {
    const listItem = document.createElement("li");
    listItem.innerText = item;
    saranaList.appendChild(listItem);
});

// Scroll ke bawah dengan smooth behavior
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
