// PERMAINAN BEBAS BUATANMU

// Game yang saya buat kali ini bernama Point Bom. Game ini mengisahkan sekelompok prajurit ( yang terdiri dari 4 prajurit ) yang sedang menjalankan sebuah misi dari negaranya yaitu untuk meledakan sebuah markas yang terdapat di atas bukit dengan menggunakan bom.
//Untuk memulai game ini, Diperlukan 2 variabel yaitu nama dan senjata. vaiabel senjata harus memiliki isi data, bila kosong pemain akan diberikan peringatan berupa "Pilih senjata". terdapat 3 senjata berbeda yaitu AK-47, Sniper, dan Bom.  

//Prajurit 1 
var prajurit = 'Robert';
var senjata = ['AK-47'];
senjata.splice(0,0,"Shotgun","Famas");
if(prajurit === 'Robert'){
  console.log('Halo Robert, Kamu dapat membunuh musuh menggunakan'+ ' '+ senjata);
}
else{
console.log('Silahkan pilih prajurit!');
}

// Prajurit 2
var prajurit = 'James';
var senjata = 'Sniper';
if(prajurit === 'James' ){
  console.log('Halo James, Kamu dapat membunuh musuh menggunakan Sniper');
}
else{
console.log('Silahkan pilih prajurit!');
}

// Prajurit 3
var prajurit = 'Greeny';
var senjata = '';
console.log(senjata);
if(prajurit === 'Greeny' ){
  console.log('Halo Greeny, Pilih senjatamu untuk dapat bermain');
}
else{
console.log('Silahkan pilih prajurit!');
}

// Prajurit 4
var prajurit = 'Barnes';
var senjata = 'Bom';
if(prajurit === 'Barnes' ){
  console.log('Halo Barnes, Kamu dapat melempar bom ke markas musuh dan meledakkannya');
}
else{
console.log('Silahkan pilih prajurit!');
}
console.log();

function tampilkan() {
  
var tahundimulai = 2016;
var tahunselesai = 2018 - tahundimulai;
var darahprajurit = tahundimulai*Math.random();
var darahmusuh = tahundimulai*Math.random();
var prajuritmusuh= Math.floor(Math.pow(100, Math.random()));
var senjatamusuh =["Shotgun","Pistol"];

for(var i = 0; i <= tahundimulai; i++) {
    
    if (i%tahunselesai===0) {
        console.log(prajurit +' '+ 'Melempar bom ke markas musuh');
        darahmusuh = darahmusuh-tahunselesai;
    }

    else if (i%prajuritmusuh===0) {
        console.log('musuh menembaki' +' '+ prajurit);
        darahprajurit = darahprajurit-prajuritmusuh;
    }
    else if (i%tahunselesai===0 && i%jenismusuh===0) {
        console.log('prajurit dan musuh saling tempur');
        darahmusuh = darahmusuh+tahunselesai;
        darahprajurit= darahprajurit+jenismusuh;
    }
}

if (darahprajurit>darahmusuh) {
    console.log('Selamat, ' +' ' + prajurit + ' Dapat meledakkan markas musuh menggunakan' + ' '+ senjata);
}
else if (darahprajurit<darahmusuh) {
    console.log('Sayang sekali, ' + ' ' + prajurit + ' Gagal meledakkan markas musuh');
}
}
tampilkan();













