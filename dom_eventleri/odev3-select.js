/**
 * ### ODEV 3 ###
 *
 * 1. Dersler listesindeki derslerin basliklarini select icerisine yerlestirin.
 *      `Ipucu: For dongusu icinde `<option>` olusturup text'ini title olarak belirleyin.`
 *
 * 2. Select degistiginde (`change` eventi) alttaki `ul` liste icine hangi ders secilmis ise onun bilgileri yazdirilsin.
 *      `Ipucu: Asagidaki yapiyi dongu icerisinde olusturup `ul` liste icine eklemelisiniz.`
 *      <li class=listItemClass>
 *       Matematik <span class=listBadgeClass>90</span>
 *      </li>
 */

const dersler = [
  { title: 'Matematik', puan: 90 },
  { title: 'Fen', puan: 86 },
  { title: 'Kimya', puan: 72 },
  { title: 'Biyoloji', puan: 68 },
];

// CLASS ISIMLERI
// li va span icin asagidaki classlari attribute olarak ekleyebilirsiniz.
const listItemClass = 'list-group-item d-flex justify-content-between align-items-center';
const listBadgeClass = 'badge badge-primary badge-pill';

const select = document.getElementById('select');
const ul = document.getElementById('list');

// Kodunuzu asagi yaziniz
