# Site institucional da Nexcompany

Site de página única, estático (HTML, CSS e JavaScript simples), pronto para publicação gratuita no GitHub Pages. Não precisa de servidor, base de dados, instalação de programas nem serviços pagos.

## O que está nesta pasta

```
nexcompany-site/
├── index.html          → estrutura e textos do site
├── styles.css          → cores, tipo de letra, layout e responsividade
├── script.js           → menu móvel, ano automático e contactos
├── assets/
│   └── favicon.svg     → ícone provisório do separador do browser
└── README.md           → este guia
```

## Estado do conteúdo (leia antes de publicar)

- O **NexVerify** está apresentado como **em desenvolvimento**, sem promessas de precisão nem de disponibilidade.
- Não foram inventados clientes, parceiros, prémios, números, certificações ou funcionalidades.
- O **logótipo é tipográfico com um símbolo provisório**. Não é o logótipo oficial definitivo.
- Os **contactos estão como marcadores de posição** (`[A confirmar: ...]`). O botão de e-mail aparece inativo até configurar um endereço confirmado.

**Antes de divulgar o endereço do site, configure os contactos** (ver "Como editar os contactos").

## Ver o site no seu computador (opcional)

Abra o ficheiro `index.html` com duplo clique. O site abre no browser. Se estiver sem Internet, o tipo de letra Poppins não carrega e o site usa um tipo de letra do sistema; o resto funciona igual.

---

## Publicar no GitHub Pages, passo a passo

### 1. Criar uma conta no GitHub

1. Abra <https://github.com> e clique em **Sign up** (Registar).
2. Indique o seu e-mail, crie uma palavra-passe e escolha um **nome de utilizador**. Este nome fará parte do endereço do site (por exemplo, `nexcompany`).
3. Resolva a verificação e confirme o e-mail com o código que receber.

### 2. Criar o repositório

Um repositório é uma "pasta" online onde ficam os ficheiros do site.

1. Depois de entrar, clique no **+** no canto superior direito e escolha **New repository**.
2. Em **Repository name**, escreva um nome sem espaços, por exemplo `nexcompany-site`.
3. Escolha **Public**. Nas contas gratuitas, o GitHub Pages precisa que o repositório seja público.
4. Marque **Add a README file** (opcional, mas facilita) e clique em **Create repository**.

### 3. Carregar os ficheiros

1. Descompacte o ZIP no seu computador.
2. No repositório, clique em **Add file** e depois em **Upload files**.
3. Abra a pasta `nexcompany-site` e arraste para a página **o conteúdo da pasta**: `index.html`, `styles.css`, `script.js` e a pasta `assets`. Não arraste o ZIP nem a pasta de fora: o `index.html` tem de ficar na raiz do repositório.
4. Aguarde o carregamento terminar e clique em **Commit changes** (Guardar alterações).

### 4. Configurar o GitHub Pages

1. No repositório, clique no separador **Settings** (Definições).
2. No menu da esquerda, clique em **Pages**.
3. Em **Build and deployment**, na opção **Source**, escolha **Deploy from a branch**.
4. Em **Branch**, escolha **main** e a pasta **/ (root)**. Clique em **Save**.

### 5. Descobrir o endereço público do site

1. Fique na página **Settings → Pages** e aguarde 1 a 3 minutos.
2. Atualize a página. Aparece uma mensagem a indicar que o site está publicado, com o endereço.
3. O endereço tem este formato:

   `https://NOME-DE-UTILIZADOR.github.io/NOME-DO-REPOSITORIO/`

   Exemplo: `https://nexcompany.github.io/nexcompany-site/`

Se criar um repositório com o nome exato `NOME-DE-UTILIZADOR.github.io`, o endereço fica mais curto: `https://NOME-DE-UTILIZADOR.github.io/`.

---

## Como editar o site no futuro

### Textos

Abra `index.html` num editor de texto simples (Bloco de Notas, TextEdit ou o editor do GitHub). Procure o texto que quer mudar e altere apenas o que está **entre as marcas** `>` e `<`. Não apague as marcas (por exemplo `<p>` ou `</p>`).

O título e a descrição que aparecem no Google estão no início do ficheiro, nas linhas `<title>` e `<meta name="description" ...>`.

### Cores

Abra `styles.css`. No início há o bloco `:root` com as cores, cada uma com um comentário:

- `--azul`: títulos, botões principais e elementos tecnológicos.
- `--verde`: detalhes e destaques de confiança e inovação.
- `--texto`: cor do texto corrente.

Altere o código da cor (por exemplo `#2463EB`) e todo o site é atualizado.

### Como editar os contactos

Abra `script.js`. No início está o bloco `CONFIG`:

```js
const CONFIG = {
  email: "",        // coloque aqui o e-mail oficial confirmado
  telefone: "",
  localizacao: "",
  redes: []
};
```

- Escreva o e-mail entre as aspas, por exemplo `email: "contacto@exemplo.com"`. O botão de e-mail passa a funcionar e o endereço aparece nos Contactos e no rodapé.
- Preencha o telefone e a localização do mesmo modo.
- Para redes sociais, use este formato (uma linha por rede, separadas por vírgula):

  ```js
  redes: [
    { nome: "LinkedIn", url: "https://www.linkedin.com/company/..." },
    { nome: "Instagram", url: "https://www.instagram.com/..." }
  ]
  ```

Deixe vazio o que ainda não estiver confirmado. O site mostra então o marcador `[A confirmar]`.

### Logótipo

O símbolo provisório está no `index.html` (dentro de `<svg class="logo-mark">`, no cabeçalho e no rodapé) e em `assets/favicon.svg`. Quando existir um logótipo oficial, substitua estes elementos.

---

## Como atualizar o site depois de publicado

**Pelo próprio GitHub (mais simples):**

1. No repositório, clique no ficheiro que quer alterar (por exemplo `index.html`).
2. Clique no ícone do **lápis** (Edit this file).
3. Faça a alteração e clique em **Commit changes**.
4. Aguarde 1 a 3 minutos. O site publicado atualiza-se sozinho.

**Substituir ficheiros inteiros:** em **Add file → Upload files**, carregue o ficheiro novo com o mesmo nome e confirme com **Commit changes**. O ficheiro antigo é substituído.

Se não vir a alteração, atualize a página no browser com **Ctrl + F5** (ou **Cmd + Shift + R** no Mac).

---

## Endereço gratuito do GitHub Pages ou domínio próprio?

| | Endereço gratuito do GitHub Pages | Domínio próprio |
|---|---|---|
| Exemplo | `nexcompany.github.io/nexcompany-site/` | `www.nexcompany.com` |
| Custo | Gratuito | Pago anualmente a um registador de domínios |
| Imagem | Mostra "github.io" no endereço | Endereço próprio e mais profissional |
| Configuração | Nenhuma | Requer configuração de DNS e do campo **Custom domain** em Settings → Pages |
| Quando usar | Testes, fase inicial, versão provisória | Comunicação oficial com clientes, parceiros e instituições |

Pode começar com o endereço gratuito e passar para um domínio próprio mais tarde, sem refazer o site. A documentação oficial do GitHub explica a configuração em "Configuring a custom domain for your GitHub Pages site".

---

## Notas técnicas

- HTML5 semântico, CSS3 e JavaScript simples. Sem frameworks, sem dependências, sem base de dados.
- Responsivo para telemóveis, tablets e computadores, com menu móvel funcional.
- Cuidados de acessibilidade: ligação "Saltar para o conteúdo", foco visível, contraste adequado, texto alternativo nas ilustrações e navegação por teclado.
- Respeita a preferência de movimento reduzido do sistema.
- Os elementos gráficos são SVG embutidos, sem imagens externas.
- A única ligação externa é o tipo de letra gratuito Poppins (Google Fonts). Se preferir não depender dele, apague as três linhas `<link>` de fontes no `index.html`; o site passa a usar o tipo de letra do sistema.
