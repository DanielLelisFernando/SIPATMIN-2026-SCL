# Experiência Coletiva SIPAT 2026 - Salum Construções

Protótipo web widescreen para uma dinâmica coletiva da SIPAT 2026.

Mensagem central:

> A vida SEMPRE em primeiro lugar.

E utiliza o slogan da experiência:

> Por trás de uma vida, existem várias vidas.

## Formato de uso

A experiência foi desenhada para exibição em um único painel, TV ou telão. O fluxo foi simplificado em três telas:

1. Abertura institucional com logo, SIPAT 2026 e mensagem central.
2. Instruções da dinâmica e legenda: resposta errada, correta incompleta ou correta completa.
3. Rodadas do quiz com imagem, situação breve, alternativas e feedback.

O teclado também pode ser usado na condução: `1`, `2` ou `3` registram uma opção e `Enter` avança depois da resposta.

## Cenários contemplados

- Terraplenagem: escavadeiras, tratores, pás carregadeiras, motoniveladoras e caminhões basculantes.
- Manutenção: mecânica e lubrificação dos equipamentos, com controle de energias e imobilização.
- Obra civil de infraestrutura: movimentação por içamento e concretagem de aduelas pré-moldadas.
- Proteção de taludes: plantio de grama e decisão segura diante de mudança nas condições do terreno.

Não há conteúdo de construção predial nesta versão.

## Representação dos isolamentos

- Terraplenagem: isolamento visual por leiras e pontaletes sinalizados com faixas refletivas, conforme referência operacional recebida.
- Içamento: isolamento visual por barreiras pantográficas.
- Não são representadas fitas zebradas nem correntes plásticas.

## Entregáveis

- Layout enxuto de apresentação para painel widescreen.
- Logo oficial incluído localmente em `assets/logo-salum.jpg`.
- Três ilustrações visuais otimizadas para exibição em `assets/terraplenagem.jpg`, `assets/manutencao.jpg` e `assets/obra-civil.jpg`; os PNG originais foram mantidos como matrizes.
- Seis rodadas coletivas em duas missões: atividades críticas e liderança como barreira.
- Placar coletivo, indicação visual das barreiras preservadas e painel final para impressão.

## Como executar

Abra `index.html` em um navegador moderno. Todos os ativos necessários estão dentro do projeto.

Para servir em um painel por endereço local:

```powershell
python -m http.server 4173
```

Depois, abra `http://localhost:4173` no navegador conectado ao telão e acione o modo tela cheia do navegador (`F11`).

## Antes do evento

- Validar os controles e termos com a equipe de SST e as lideranças operacionais.
- Definir o método de votação coletiva: voz, cartões coloridos ou levantamento de mãos.
- Testar contraste, legibilidade e áudio do facilitador no painel real do evento.
