// Variabel untuk menyimpan gender yang dipilih
let selectedGender = "";

/**
 * Fungsi untuk memilih gender
 * @param {string} gender - "pria" atau "wanita"
 */
function selectGender(gender) {
    selectedGender = gender;
    
    // Hapus kelas 'selected' dari semua opsi
    document.querySelectorAll(".gender-option").forEach(el => el.classList.remove("selected"));
    
    // Tambahkan kelas 'selected' pada gender yang dipilih
    document.querySelector(`[onclick="selectGender('${gender}')"]`).classList.add("selected");
}

/**
 * Fungsi untuk menghitung BMI berdasarkan input pengguna
 */
function calculateBMI() {
    // Ambil nilai input
    let age = document.getElementById("age").value;
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value / 100; // Konversi tinggi dari cm ke meter

    // Validasi input
    if (age && weight && height && selectedGender) {
        // Hitung BMI
        let bmi = (weight / (height * height)).toFixed(1);
        let status = "";
        let description = "";
        let diseases = "";

        // Tentukan kategori BMI berdasarkan hasil perhitungan
        if (bmi < 18.5) {
            status = "Berat Rendah";
            description = "Anda memiliki berat badan di bawah normal. Sebaiknya konsultasikan dengan ahli gizi.";
            diseases = "Risiko penyakit: Osteoporosis, Anemia, Sistem Imun Lemah.";
        } else if (bmi < 24.9) {
            status = "Normal";
            description = "Berat badan Anda dalam kategori normal. Tetap jaga pola makan seimbang dan olahraga teratur.";
            diseases = "Risiko penyakit: Relatif rendah, tetapi tetap perlu pola hidup sehat.";
        } else if (bmi < 29.9) {
            status = "Kelebihan Berat Badan";
            description = "Anda memiliki kelebihan berat badan. Sebaiknya perhatikan pola makan dan tingkatkan aktivitas fisik.";
            diseases = "Risiko penyakit: Hipertensi, Diabetes Tipe 2, Gangguan Jantung.";
        } else {
            status = "Obesitas";
            description = "BMI Anda menunjukkan obesitas. Sangat disarankan untuk berkonsultasi dengan tenaga medis.";
            diseases = "Risiko penyakit: Penyakit Jantung, Stroke, Sleep Apnea, Osteoarthritis.";
        }

        // Tampilkan hasil
        document.getElementById("result").innerHTML = `
            <h3>BMI Anda: ${bmi}</h3>
            <p>Kategori: <strong>${status}</strong></p>
            <p>${description}</p>
            <p><strong>${diseases}</strong></p>
        `;

        // Tampilkan hasil di samping kanan
        document.getElementById("result-container").style.display = "block";
    } else {
        alert("Mohon isi semua data dan pilih gender.");
    }
}

/**
 * Fungsi untuk mereset form dan menyembunyikan hasil
 */
function resetForm() {
    document.getElementById("result-container").style.display = "none";
    document.getElementById("age").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    selectedGender = "";
    document.querySelectorAll(".gender-option").forEach(el => el.classList.remove("selected"));
}
