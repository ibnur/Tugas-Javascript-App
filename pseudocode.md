// Prajurit 1
SIMPAN 'Prajurit'
SIMPAN 'Senjata
TAMBAHKAN Shotgun,Famas ke dalam 'senjata' 
IF 'Prajurit' adalah Robert
  TULISKAN  Halo Robert, Kamu dapat membunuh musuh menggunakan 'senjata'
ENDIF
ELSE:
  TULISKAN Silahkan pilih prajurit!
  
// Prajurit 2
SIMPAN 'Prajurit'
SIMPAN 'Senjata'
IF 'Prajurit' adalah James THEN
  TULISKAN  Halo James, Kamu dapat membunuh musuh menggunakan Sniper
ENDIF
ELSE:
  TULISKAN Silahkan pilih prajurit!

// prajurit 3
SIMPAN 'Prajurit'
SIMPAN 'Senjata'
IF 'Prajurit' adalah Greeny THEN
  TULISKAN  Halo Greeny, Pilih senjatamu untuk dapat bermain
ENDIF
ELSE:
  TULISKAN Silahkan pilih prajurit!

// prajurit 4
SIMPAN 'Prajurit'
SIMPAN 'Senjata'
IF 'Prajurit' adalah Barnes THEN
  TULISKAN  Halo Barnes, Kamu dapat melempar bom ke markas musuh dan meledakkannya
ENDIF
ELSE:
  TULISKAN Silahkan pilih prajurit!
  
TAMBAHKAN FUNGSI TAMPILKAN

SIMPAN tahundimulai
SIMPAN tahunselesai
SIMPAN darahprajurit
SIMPAN darahmusuh
SIMPAN prajuritmusuh
SIMPAN senjatamusuh
  FOR setiap pertambahan 1 pada `index1` dari 0 sampai dengan 'tahundimulai:
    IF `index1` modulus 'tahunselesai' adalah 0:
      TULISKAN 'Prajurit' Melempar bom ke markas musuh
      HITUNG 'darahmusuh' dari 'darahmusuh' dikurangi 'tahunselesai'
    ENDIF
    
    ELSE IF 'index1' modulus 'prajuritmusuh' adalah 0
      TULISKAN musuh menembaki 'Prajurit
      HITUNG 'darahprajurit' dari 'darahprajurit' dikurangi 'prajuritmusuh'
    ENDIF
    ELSE IF 'index1' modulus 'tahunselesai' adalah 0 dan 'index1' modulus 'jenismusuh' adalah 0
      TULISKAN prajurit dan musuh saling tempur
      HITUNG 'darahprajurit' dari 'darahprajurit' ditambah 'jenismusuh'
    ENDIF
  ENDFOR
 
    IF 'darahprajurit' lebih besar dari 'darahmusuh'
      TULISKAN selamat 'prajurit' Dapat meledakkan markas musuh menggunakan 'senjata'
    ENDIF
    ELSE IF 'darahprajurit' lebih kecil dari 'darahmusuh'
      TULISKAN Sayang sekali 'prajurit' Gagal meledakkan markas musuh
    ENDIF
ENDFUNGSI
tampilkan fungsi tampilkan

  
  
  
  
  
  
  
  
  
  
  
