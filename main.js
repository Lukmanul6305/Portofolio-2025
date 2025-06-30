document.addEventListener('DOMContentLoaded', function() {
    const typingTextElement = document.querySelector('.typing-text');
    const textArray = ["Fullstack Developer", "Frontend Developer", "Backend Developer"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 150; // Kecepatan mengetik (ms per karakter)
    const deletingSpeed = 100; // Kecepatan menghapus (ms per karakter)
    const delayBeforeNextText = 1500; // Jeda sebelum mengetik teks berikutnya (ms)

    function type() {
        const currentText = textArray[textIndex];
        if (isDeleting) {
            // Menghapus karakter
            typingTextElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Mengetik karakter
            typingTextElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let currentSpeed = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && charIndex === currentText.length) {
            // Teks selesai diketik, jeda sebelum menghapus
            currentSpeed = delayBeforeNextText;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Teks selesai dihapus, ganti ke teks berikutnya
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length; // Pindah ke teks berikutnya, kembali ke awal jika sudah di akhir
            currentSpeed = typingSpeed;
        }

        setTimeout(type, currentSpeed);
    }

    // Mulai efek mengetik setelah halaman dimuat
    type();
});