# ABSOL local (recuperado) — versão Python

Coach de voz para League of Legends reconstruído a partir do `absol-v2.exe` (engenharia reversa com Ghidra).
Roda local: sem login, sem servidor. Só LÊ a Live Client Data API (https://127.0.0.1:2999) e o client do LoL (LCU).

## Como rodar (Windows)
1. Instale Python 3.11+ (python.org). Não precisa instalar pacotes.
2. Coloque o seu `padrao.pak` (zip com os clips `md5(frase).mp3`) nesta pasta.
3. Dois cliques em `RODAR.bat` e abra o LoL.
Frases sem clip no pak (dicas de matchup/campeão, números, champ select...) são faladas pela voz do Windows.
Exe: `BUILD_EXE.bat` (PyInstaller) → `dist\ABSOL\ABSOL.exe`; copie o `padrao.pak` para a mesma pasta.
Simular sem o jogo: `python run.py --demo exemplo.json`. Testes: `python -m pytest tests`.
A janela tem um botão (caixa de seleção) para cada gatilho; a escolha fica salva em `absol_config.json`. Sem janela: `python run.py --sem-janela --sem-modulo tips,build`.

## Cobertura por gatilho
| Gatilho | Estado |
|---|---|
| minimap, ward, kill, objetivos, mental | Portados do Rust testado (lógica lida do binário). kill agora inclui marcos 5/10/15/20, "Boa kill!", assistências, "morrendo rápido" e "inimigo te matou várias vezes" |
| role (dicas por posição) | Lido do binário (FUN_1402b94a0): Anjo Guardião/Barreira, CS/min, assassinos, TP, objetivos, suporte, jungler inimigo morto, split push. Aninhamento de alguns blocos por role é INCERTO |
| jungle / gank | Tabela de tempo de clear por jungler lida do binário. "jungle_spotted" lido do binário: dispara quando o jungler inimigo volta de morto, sobe de nível ou muda de itens (t<900) |
| tips | Dados exatos (matchup_tips.json, champion_tips.json). QUANDO falar é reconstruído |
| gossip/scout | Só o que dá localmente: nível 6 do oponente e CS/min aos 10min. Séries de vitória/derrota e "main" do inimigo precisavam do perfil Riot via servidor: NÃO recuperado |
| build | APROXIMAÇÃO local (botas anti-AP/AD, anti-cura, anti-tank, item completo). As builds originais vinham do servidor |
| champ select | APROXIMAÇÃO via LCU com as frases exatas do exe (ban, pick, AP/AD, tanks, assassinos, CC, matchup) |
| veredito pós-partida | Frases exatas; a escolha da categoria é heurística |
| mental_spike | Tabela de 29 campeões e frases lidas do binário. INCERTO: o exe compara o valor com o NÍVEL mas a fala diz "minutos" (valores 25 nunca batem); copiado literalmente. Campos kills/deaths da condição de consolo são suposição |
| jungle_vision (NOVO) | Detector do ícone do jungler inimigo na minimapa (captura de tela + OpenCV, ícones da Data Dragon). NÃO existe no original e só foi testado com imagens sintéticas. Se não detectar, rode `python -m absol.main --calibrar` e ajuste `minimapa` (x, y, lado, limiar) em absol_config.json. Botão no painel "Extras" da interface (canto inferior direito) |
| builds_web (NOVO) | Runas e itens de op.gg → u.gg → deeplol → mobalytics → metasrc → runas do client (LCU). Janelinha + voz ao travar o campeão na seleção. Leitor genérico (ícones na ordem da página), NUNCA testado contra os sites reais; se uma fonte falhar salva `cache_icones/debug_<fonte>.html`. Botão no painel Extras e na própria janelinha |
| Interface | A frontend SvelteKit original roda embutida (servidor local + emulação Tauri em Python). Abre numa janela do Edge/Chrome. Os toggles de módulos do app original ligam/desligam os gatilhos. `--janela-simples` usa a janelinha tkinter |

## Outras incertezas
- Flags `+0x1e1` (minimap) e `+0x1f1` (objetivos), byte de urgência `+0x61` do recall.
- Listas de campeões AP/tank/cura/assassino do build/champ select foram escritas aqui (o original usava dados do servidor).
- Os clips de voz não vêm no exe: use o seu `padrao.pak`.
- Testado só em simulação (sem o jogo e sem áudio neste ambiente).


## Voz do Windows (TTS)
Frases sem clip no padrao.pak usam a voz do Windows num PowerShell que fica aberto (sem atraso por fala). Ajustes em `absol_config.json`:
`"tts": {"velocidade": 2, "volume": 50, "voz": ""}` — velocidade de -10 a 10, volume em % do volume geral (50 = metade), voz = nome exato de uma voz instalada (ex.: "Microsoft Maria Desktop").

## Voz neural (recomendado)
Instala com `RODAR.bat` (pacote `edge-tts`). Usa a voz neural do Edge em pt-BR (precisa de internet na 1ª vez de cada frase; depois fica no cache `cache_voz/` e toca offline e instantâneo).
`BAIXAR_VOZES.bat` baixa de uma vez todas as frases fixas que não têm clip no padrao.pak. Config em absol_config.json:
`"tts": {"motor": "edge", "voz": "pt-BR-FranciscaNeural", "velocidade": 2, "volume": 70}` — vozes: pt-BR-FranciscaNeural, pt-BR-AntonioNeural, pt-BR-ThalitaMultilingualNeural. `"motor": "windows"` volta para a voz do Windows.
