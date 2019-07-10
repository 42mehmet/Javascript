'use strict';

{
  // HAZIR KOD
  function fetchJSON(url, cb) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.onload = () => {
      if (xhr.status < 400) {
        cb(null, xhr.response);
      } else {
        cb(new Error(`Network error: ${xhr.status} - ${xhr.statusText}`));
      }
    };
    xhr.onerror = () => cb(new Error('Network request failed'));
    xhr.send();
  }

  // HAZIR KOD
  function createAndAppend(name, parent, options = {}) {
    const elem = document.createElement(name);
    parent.appendChild(elem);
    Object.keys(options).forEach(key => {
      const value = options[key];
      if (key === 'text') {
        elem.textContent = value;
      } else {
        elem.setAttribute(key, value);
      }
    });
    return elem;
  }

  function main(url) {
    fetchJSON(url, (err, repos) => {
      const root = document.getElementById('root');
      if (err) {
        createAndAppend('div', root, { text: err.message, class: 'alert-error' });
        return;
      }

      // Ustteki input ve yanindaki buton
      const indexInput = document.getElementById('index');
      const fetchBtn = document.getElementById('fetch');

      // Solda repo listelendigi bolge
      const repoListContainer = document.getElementById('repo-list');
      const repoUl = createAndAppend('ul', repoListContainer, { class: 'list-group' });

      // Sagda contributor listelendigi bolge
      const contributorListContainer = document.getElementById('contributor-list');
      const contributorUl = createAndAppend('ul', contributorListContainer, {
        class: 'list-group',
      });

      // Fetch butonuna tiklandiginda soldaki listeye inputtaki indexteki repo adi gelsin.
      fetchBtn.addEventListener('click', () => {
        repoUl.innerHTML = ''; // Her tiklamada liste temizlensin
        const index = indexInput.value;

        // Input bossa veya sifirdan kucukse `return` olsun fonksiyondan ciksin, kalan kisim calismasin
        if (index === '' || index < 0) {
          alert('Gecerli bir index giriniz!');
          return;
        }

        // Inputa girilen indexe gore data listesinden tek repoyu secelim.
        const repo = repos[index];

        // Secilen reponun adini li icine yazalim
        const repoLi = createAndAppend('li', repoUl, { text: repo.name, class: 'list-group-item' });

        // Listeye tiklandiginda sagdaki bolgeye contributor listesi gelsin
        repoLi.addEventListener('click', () => {
          contributorUl.innerHTML = '';
          fetchJSON(repo.contributors_url, (error, contributors) => {
            // Hata olursa soldaki bolgeye hata alerti icinde hata mesaji yazsin
            if (error) {
              createAndAppend('div', contributorListContainer, {
                class: 'alert alert-danger',
                text: error.message,
              });
            }

            // Her controibutor icin liste olusturulsun
            contributors.forEach(contributor =>
              createAndAppend('li', contributorUl, {
                class: 'list-group-item',
                text: contributor.login,
              }),
            );
          });
        });
      });
    });
  }

  const HYF_REPOS_URL = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

  window.onload = () => main(HYF_REPOS_URL);
}
