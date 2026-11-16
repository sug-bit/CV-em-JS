# Currículo Web (JSON + HTML/CSS/JS)

Currículo e portfólio web dinâmico renderizado a partir de um arquivo `cv.json`, com suporte a tema claro/escuro, layout responsivo e exportação para PDF.

## Estrutura do projeto

- `index.html` — Estrutura da página e containers das seções.
- `style.css` — Estilos, responsividade, variáveis de tema e regras de impressão.
- `script.js` — Carregamento do `cv.json` e renderização dinâmica dos dados.
- `cv.json` — Dados do currículo (informações pessoais, experiências, projetos, habilidades e preferências).
- `photo.img.jpg` — Foto de perfil (opcional).

## Como usar

1. Coloque todos os arquivos na mesma pasta (incluindo a foto de perfil, se houver).
2. Edite o `cv.json` com suas informações e atualize o campo `profilePhoto` com o nome exato do arquivo da imagem.
3. Abra o `index.html` no navegador ou rode com um servidor local (como o **Live Server** no VS Code).

## Funcionalidades

- **Tema Claro/Escuro:** Botão no topo para alternar entre os temas.
- **Exportar PDF:** Botão para imprimir ou salvar o currículo em PDF.