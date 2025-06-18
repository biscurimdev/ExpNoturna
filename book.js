async function do_exam(_0xf0b499) {
  if (!_0xf0b499) {
    return;
  }
  let _0xb6a9b4 = '';
  try {
    const _0xe8548 = new URL(_0xf0b499).searchParams;
    _0xb6a9b4 = _0xe8548.get('id');
  } catch (_0x8c2d74) {}
  function _0x3ec924(_0x3c9eb9, _0x5a1a9b, _0xc44894) {
    const _0x4a84c5 = _0x3c9eb9.match(_0x5a1a9b);
    if (!_0x4a84c5 || !_0x4a84c5[0x1]) {
      throw new Error(_0xc44894);
    }
    return _0x4a84c5[0x1];
  }

  // Função para exibir o Toast personalizado
  function showToast(message, duration = 5000) {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = `
      <span>${message}</span>
      <div class="progress-bar"></div>
    `;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('show');
    }, 100);

    const progressBar = toast.querySelector('.progress-bar');
    let progress = 0;
    const interval = setInterval(() => {
      progress += 2;
      progressBar.style.width = `${progress}%`;

      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          toast.classList.remove('show');
          setTimeout(() => {
            toast.remove();
          }, 500);
        }, 1000);
      }
    }, duration / 50);
  }

  // CSS para o Toast
  const style = document.createElement('style');
  style.innerHTML = `
    .toast {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: linear-gradient(45deg, #800080, #000000);
      color: white;
      padding: 15px;
      border-radius: 10px;
      font-size: 16px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
      display: flex;
      justify-content: space-between;
      align-items: center;
      opacity: 0;
      transition: opacity 0.5s ease;
      z-index: 1000;
    }
    .toast.show {
      opacity: 1;
    }
    .toast .progress-bar {
      width: 100%;
      height: 5px;
      background-color: #3498db;
      border-radius: 5px;
      margin-top: 10px;
    }
  `;
  document.head.appendChild(style);

  async function _0x24ca13() {
    try {
      const _0x49622f = await fetch(_0xf0b499, {
        'method': "GET",
        'credentials': "include"
      });
      if (!_0x49622f.ok) {
        throw new Error("Erro: " + _0x49622f.status);
      }
      const _0x40a84f = await _0x49622f.text();
      if (!_0xb6a9b4) {
        try {
          _0xb6a9b4 = _0x3ec924(_0x40a84f, /contextInstanceId":(\d+)/, "CMID nÃ£o encontrado");
        } catch (_0x38d24a) {}
      }
      const _0x310031 = _0x3ec924(_0x40a84f, /sesskey":"([^"]+)/, "Sesskey nÃ£o encontrado");
      return {
        'sessKey': _0x310031,
        'html': _0x40a84f
      };
    } catch (_0x52a489) {
      throw _0x52a489;
    }
  }

  // Continuação do código do exame e páginas...
  try {
    const { sessKey: _0x539287 } = await _0x24ca13();
    const { redirectUrl: _0x16f14c, attemptId: _0x399345 } = await _0x1f3e35(_0xb6a9b4, _0x539287);
    const _0x26bbc8 = await _0x26949c(_0x16f14c);
    const { attemptId: _0x3f1173, sesskey: _0xc10363 } = await _0x45303d(_0x26bbc8, _0xb6a9b4);
    return await _0x161475(_0x3f1173, _0xb6a9b4, _0xc10363);
  } catch (_0x47f5b0) {
    throw _0x47f5b0;
  }
}

async function marcarPaginaComoConcluida(_0x3c8d5e) {
  try {
    await fetch("https://expansao.educacao.sp.gov.br/mod/resource/view.php?id=" + _0x3c8d5e, {
      'credentials': "include",
      'headers': {
        'User-Agent': "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/118.0",
        'Accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        'Accept-Language': "en-US,en;q=0.5",
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': "document",
        'Sec-Fetch-Mode': "navigate",
        'Sec-Fetch-Site': "same-origin"
      },
      'method': "GET",
      'mode': "cors"
    });
  } catch (_0xbb019d) {}
}

async function verificarPaginas() {
  showToast("Script made by marcos10pc | discord.gg/platformdestroyer", 5000); // Substituindo o alert por showToast
  const _0x593ebc = document.createElement("div");
  _0x593ebc.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); display: flex; flex-direction: column; justify-content: center; align-items: center; z-index: 9999;";
  const _0x3f9d00 = document.createElement("div");
  _0x3f9d00.style.cssText = "border: 16px solid #f3f3f3; border-radius: 50%; border-top: 16px solid #3498db; width: 120px; height: 120px; animation: spin 2s linear infinite; margin-bottom: 20px;";
  const _0x2c6108 = document.createElement("div");
  _0x2c6108.style.cssText = "color: white; font-size: 24px; font-weight: bold; text-align: center;";
  _0x2c6108.innerText = "Processando atividades...";
  const _0x2c7fd7 = document.createElement("div");
  _0x2c7fd7.style.cssText = "color: white; font-size: 18px; margin-top: 10px;";
  const _0x4be9e7 = document.createElement("style");
  _0x4be9e7.innerHTML = "@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }";
  document.head.appendChild(_0x4be9e7);
  _0x593ebc.appendChild(_0x3f9d00);
  _0x593ebc.appendChild(_0x2c6108);
  _0x593ebc.appendChild(_0x2c7fd7);
  document.body.appendChild(_0x593ebc);
  const _0x2b4ab0 = document.querySelectorAll('li.activity');
  const _0x53116c = [];
  const _0x250c6c = [];
  _0x2b4ab0.forEach(_0x3f69fb => {
    const _0x2bb98c = _0x3f69fb.querySelector("a.aalink");
    const _0x210d69 = _0x3f69fb.querySelector(".completion-dropdown button");
    if (_0x2bb98c && _0x2bb98c.href && (!_0x210d69 || !_0x210d69.classList.contains("btn-success"))) {
      const _0x4fd422 = new URL(_0x2bb98c.href);
      const _0x5d1f80 = _0x4fd422.searchParams.get('id');
      const _0x4b1455 = _0x2bb98c.textContent.trim();
      if (_0x5d1f80) {
        if (/responda|pause/i.test(_0x4b1455)) {
          _0x250c6c.push({
            'href': _0x2bb98c.href,
            'nome': _0x4b1455
          });
        } else {
          _0x53116c.push(marcarPaginaComoConcluida(_0x5d1f80, _0x4b1455));
        }
      }
    }
  });
  _0x2c7fd7.innerText = "Marcando " + _0x53116c.length + " atividades como concluÃ­das...";
  await Promise.all(_0x53116c);
  const _0x4d5c65 = _0x250c6c.length;
  for (let _0x1f71e6 = 0x0; _0x1f71e6 < _0x4d5c65; _0x1f71e6++) {
    const _0x2ed740 = _0x250c6c[_0x1f71e6];
    _0x2c7fd7.innerText = "Processando exame " + (_0x1f71e6 + 0x1) + '/' + _0x4d5c65 + ": \"" + _0x2ed740.nome + "\"";
    try {
      await do_exam(_0x2ed740.href);
    } catch (_0x21481b) {}
    if (_0x1f71e6 < _0x4d5c65 - 0x1) {
      await new Promise(_0x29bc2f => setTimeout(_0x29bc2f, 0xbb8));
    }
  }
  document.body.removeChild(_0x593ebc);
  showToast("Atividades Finalizadas! | Caso Sobrar alguma execute denovo", 5000); // Substituindo alert por showToast
  location.reload();
}
verificarPaginas();
