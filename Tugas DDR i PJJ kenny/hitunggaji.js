function hitungGaji(jamKerja, tarifPerlam) {
    // Hitung gaji untuk jam kerja normal
    const gajiNormal = jamKerja * tarifPerlam;
  
    // Hitung jam kerja lembur
    const jamLembur = jamKerja - 40;
  
    // Hitung gaji lembur
    const gajiLembur = jamLembur * tarifPerlam * 1.5;
  
    // Hitung total gaji
    const totalGaji = gajiNormal + gajiLembur;
  
    return totalGaji;
    
  }

  