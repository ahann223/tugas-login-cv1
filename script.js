// Tunggu sampai DOM selesai dimuat
document.addEventListener("DOMContentLoaded", function () {
    
    // --- Logika Halaman Login ---
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Mencegah reload halaman saat submit

            const usernameInput = document.getElementById("username").value;
            const passwordInput = document.getElementById("password").value;
            const errorMsg = document.getElementById("error-msg");

            // Hardcode Akun untuk Tugas Kuliah
            if (usernameInput === "hanhan" && passwordInput === "1") {
                // Simpan status login di sessionStorage agar tidak bisa 'nembak' URL langsung (opsional/basic)
                sessionStorage.setItem("isLoggedIn", "true");
                // Alihkan ke halaman CV
                window.location.href = "cv.html";
            } else {
                errorMsg.innerText = "Username atau password salah!";
            }
        });
    }

    // --- Logika Halaman Logout ---
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            // Hapus session login
            sessionStorage.removeItem("isLoggedIn");
            // Alihkan kembali ke halaman login
            window.location.href = "index.html";
        });
    }
});