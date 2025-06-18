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

  async function _0x1f3e35(_0x413231, _0x565082) {
    try {
      const _0x1bf2cc = new URLSearchParams();
      _0x1bf2cc.append("cmid", _0x413231);
      _0x1bf2cc.append("sesskey", _0x565082);
      const _0x1a103a = await fetch("https://expansao.educacao.sp.gov.br/mod/quiz/startattempt.php", {
        'method': 'POST',
        'credentials': "include",
        'headers': {
          'Content-Type': "application/x-www-form-urlencoded"
        },
        'body': _0x1bf2cc.toString(),
        'redirect': "follow"
      });
      if (!_0x1a103a.ok) {
        throw new Error("Erro: " + _0x1a103a.status);
      }
      const _0x1a63a4 = _0x1a103a.url;
      const _0x62cb78 = _0x1a63a4.match(/attempt=(\d+)/);
      const _0x490c1c = _0x62cb78 ? _0x62cb78[0x1] : null;
      if (!_0x490c1c) {
        throw new Error("ID da tentativa nÃ£o encontrado");
      }
      return {
        'redirectUrl': _0x1a63a4,
        'attemptId': _0x490c1c
      };
    } catch (_0x610b62) {
      throw _0x610b62;
    }
  }

  async function _0x26949c(_0x3679ae) {
    try {
      const _0x4892a6 = await fetch(_0x3679ae, {
        'method': "GET",
        'credentials': 'include'
      });
      if (!_0x4892a6.ok) {
        throw new Error("Erro: " + _0x4892a6.status);
      }
      const _0x450694 = await _0x4892a6.text();
      const _0x52bbb7 = new DOMParser();
      const _0x517777 = _0x52bbb7.parseFromString(_0x450694, "text/html");
      const _0x165373 = {
        'questId': null,
        'seqCheck': null,
        'options': [],
        'attempt': null,
        'sesskey': null,
        'formFields': {}
      };
      const _0x4427c3 = _0x517777.querySelectorAll("input[type=\"hidden\"]");
      _0x4427c3.forEach(_0x3fb751 => {
        const _0x5c0d2c = _0x3fb751.getAttribute("name");
        const _0x2dac6a = _0x3fb751.getAttribute('value');
        if (_0x5c0d2c && _0x5c0d2c.includes(":sequencecheck")) {
          _0x165373.questId = _0x5c0d2c.split(':')[0x0];
          _0x165373.seqCheck = _0x2dac6a;
        } else {
          if (_0x5c0d2c === 'attempt') {
            _0x165373.attempt = _0x2dac6a;
          } else {
            if (_0x5c0d2c === "sesskey") {
              _0x165373.sesskey = _0x2dac6a;
            } else if (_0x5c0d2c && ["thispage", "nextpage", "timeup", 'mdlscrollto', "slots"].includes(_0x5c0d2c)) {
              _0x165373.formFields[_0x5c0d2c] = _0x2dac6a;
            }
          }
        }
      });
      const _0x5dd0e9 = _0x517777.querySelectorAll("input[type=\"radio\"]");
      _0x5dd0e9.forEach(_0x36c4a1 => {
        const _0x4ac28a = _0x36c4a1.getAttribute('name');
        const _0xd92095 = _0x36c4a1.getAttribute('value');
        if (_0x4ac28a && _0x4ac28a.includes("_answer") && _0xd92095 !== '-1') {
          _0x165373.options.push({
            'name': _0x4ac28a,
            'value': _0xd92095
          });
        }
      });
      if (true || true || true || _0x165373.options.length === 0x0) {
        throw new Error("InformaÃ§Ãµes insuficientes na pÃ¡gina da questÃ£o");
      }
      return _0x165373;
    } catch (_0x36c9f8) {
      throw _0x36c9f8;
    }
  }

  async function _0x45303d(_0x506f6f, _0x3cde8c) {
    try {
      const _0x3f3a0c = Math.floor(Math.random() * _0x506f6f.options.length);
      const _0x46b258 = _0x506f6f.options[_0x3f3a0c];
      const _0x3c9d66 = new FormData();
      _0x3c9d66.append(_0x506f6f.questId + ":1_:flagged", '0');
      _0x3c9d66.append(_0x506f6f.questId + ":1_:flagged", '0');
      _0x3c9d66.append(_0x506f6f.questId + ':1_:sequencecheck', _0x506f6f.seqCheck);
      _0x3c9d66.append(_0x46b258.name, _0x46b258.value);
      _0x3c9d66.append("next", "Finalizar tentativa ...");
      _0x3c9d66.append("attempt", _0x506f6f.attempt);
      Object.entries(_0x506f6f.formFields).forEach(([_0x5853c0, _0x49dd5f]) => {
        _0x3c9d66.append(_0x5853c0, _0x49dd5f);
      });
      _0x3c9d66.append("sesskey", _0x506f6f.sesskey);
      _0x3c9d66.append("slots", '1');
      const _0x5796b7 = await fetch("https://expansao.educacao.sp.gov.br/mod/quiz/processattempt.php?cmid=" + _0x3cde8c, {
        'method': "POST",
        'credentials': 'include',
        'body': _0x3c9d66,
        'redirect': "follow"
      });
      if (!_0x5796b7.ok) {
        throw new Error("Erro: " + _0x5796b7.status);
      }
      const _0x37cb4a = _0x5796b7.url;
      return {
        'redirectUrl': _0x37cb4a,
        'attemptId': _0x506f6f.attempt,
        'sesskey': _0x506f6f.sesskey
      };
    } catch (_0x1159f6) {
      throw _0x1159f6;
    }
  }

  async function _0x161475(_0x5ae35f, _0x3afc5e, _0x1ab783) {
    try {
      const _0x524717 = "https://expansao.educacao.sp.gov.br/mod/quiz/summary.php?attempt=" + _0x5ae35f + "&cmid=" + _0x3afc5e;
      const _0x12cb7c = await fetch(_0x524717, {
        'method': "GET",
        'credentials': "include"
      });
      if (!_0x12cb7c.ok) {
        throw new Error("Erro: " + _0x12cb7c.status);
      }
      const _0x4c7d7f = new URLSearchParams();
      _0x4c7d7f.append("attempt", _0x5ae35f);
      _0x4c7d7f.append('finishattempt', '1');
      _0x4c7d7f.append("timeup", '0');
      _0x4c7d7f.append("slots", '');
      _0x4c7d7f.append('cmid', _0x3afc5e);
      _0x4c7d7f.append("sesskey", _0x1ab783);
      const _0x50ec49 = await fetch("https://expansao.educacao.sp.gov.br/mod/quiz/processattempt.php", {
        'method': "POST",
        'credentials': "include",
        'headers': {
          'Content-Type': "application/x-www-form-urlencoded"
        },
        'body': _0x4c7d7f.toString(),
        'redirect': "follow"
      });
      if (!_0x50ec49.ok) {
        throw new Error("Erro: " + _0x50ec49.status);
      }
      return _0x50ec49.url;
    } catch (_0x50701b) {
      throw _0x50701b;
    }
  }

  try {
    const {
      sessKey: _0x539287
    } = await _0x24ca13();
    const {
      redirectUrl: _0x16f14c,
      attemptId: _0x399345
    } = await _0x1f3e35(_0xb6a9b4, _0x539287);
    const _0x26bbc8 = await _0x26949c(_0x16f14c);
    const {
      attemptId: _0x3f1173,
      sesskey: _0xc10363
    } = await _0x45303d(_0x26bbc8, _0xb6a9b4);
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
