
const db = JSON.parse(localStorage.getItem('netland_db')||'[]');
function save(){localStorage.setItem('netland_db',JSON.stringify(db));}
function addCustomer(){
 if(!nama.value.trim()) return alert('Nama wajib diisi');
 db.push({
   id:'NTL'+String(db.length+1).padStart(4,'0'),
   nama:nama.value,
   paket:paket.value,
   harga:+harga.value||0
 });
 save(); render();
}
function render(){
 let income=0;
 list.innerHTML=db.map(x=>{
   income+=x.harga;
   return `<div class="row"><b>${x.id}</b> ${x.nama} - ${x.paket} - Rp ${x.harga.toLocaleString('id-ID')}</div>`;
 }).join('');
 cust.textContent=db.length;
 incomeEl=document.getElementById('income');
 incomeEl.textContent='Rp '+income.toLocaleString('id-ID');
}
render();
