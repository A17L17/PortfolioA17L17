const texts = [
    "Hi, My name is Barra",
    "Wanna hear it ?",
    "I'm Network Engginer",
    "Thanks For Coming",
    "Also Desaigner",
    "Have a nice day",
    "I like play Guitar"
  ];
  
  const typedTextElement = document.getElementById("typed-text");
  let textIndex = 0; // Indeks teks saat ini
  let charIndex = 0; // Indeks karakter saat ini
  
  function type() {
    const currentText = texts[textIndex];
    
    typedTextElement.textContent = currentText.slice(0, charIndex);
  
    if (charIndex < currentText.length) {
      charIndex++;
      setTimeout(type, 100); // Waktu penundaan antara setiap karakter (ms)
    } else {
      setTimeout(erase, 2000); // Waktu penundaan sebelum menghapus teks (ms)
    }
  }
  
  function erase() {
    const currentText = texts[textIndex];
    
    typedTextElement.textContent = currentText.slice(0, charIndex);
  
    if (charIndex > 0) {
      charIndex--;
      setTimeout(erase, 50); // Waktu penundaan antara setiap karakter saat penghapusan (ms)
    } else {
      textIndex++;
      if (textIndex >= texts.length) {
        textIndex = 0; // Mengulang dari awal setelah mencapai teks terakhir dalam array
      }
      setTimeout(type, 1000); // Waktu penundaan sebelum memulai teks baru (ms)
    }
  }
  
  type();