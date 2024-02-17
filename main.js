function tampil(num) {
   let textarea = document.forms.textarea;
   let jumlah = textarea.value;

   let operators = ['+', '-', '*', '%', '.', '/', '00'];

   if (jumlah === '0' && num === '-') {
         textarea.value = num;
      }

   if (jumlah === '0' && operators.includes(num)) {
      if (jumlah === '0' && num === '.') {
         textarea.value = jumlah + num;
      } else {
         return;
      }
   }

   if (jumlah === '0' && num === '0') {
      if (jumlah.length === 1 && jumlah === '0') {
         return;
      } else {
         textarea.value = jumlah + num;
      }
   } else {
      if (jumlah.length === 1 && jumlah === '0') {
         textarea.value = num;
      } else {
         textarea.value = jumlah + num;
      }
   }

   if (operators.includes(num)) {
      let lastChar = jumlah.charAt(jumlah.length -1);

      if (operators.includes(lastChar)) {
         textarea.value = jumlah.slice(0, -1) + num;
      } else {
         textarea.value = jumlah + num;
      }
   }
}

function hasil() {
   let hasil = document.forms.textarea.value;

   if (hasil.includes('%')) {
      let lastChar = hasil.substring(0, hasil.length -1);
      document.forms.textarea.value = (lastChar / 100);
   }

   document.forms.textarea.value = eval(hasil);
}

function hapusAll() {
   document.forms.textarea.value = '0';
}

function hapus() {
   let hasil = document.forms.textarea.value;

   if (hasil.length === 1) {
      document.forms.textarea.value = '0';
   } else {
      document.forms.textarea.value = hasil.substring(0, hasil.length -1);
   }
}