
# Galeria de Fotos

Este é um projeto de galeria de fotos desenvolvido como uma aplicação web moderna e responsiva. Ele permite que os usuários visualizem, pesquisem e filtrem imagens de forma interativa.

## Deploy

A aplicação está disponível para acesso em:
[https://galeria-de-fotos-h3q2mctog-leonardof108s-projects.vercel.app/](https://galeria-de-fotos-h3q2mctog-leonardof108s-projects.vercel.app/)

## Funcionalidades

- **Visualização em Grid**: As fotos são exibidas em um layout de grade limpo e organizado.
- **Busca em Tempo Real**: Filtre as fotos instantaneamente digitando no campo de busca.
- **Design Responsivo**: A galeria se adapta a diferentes tamanhos de tela, de desktops a dispositivos móveis.
- **Tema Claro e Escuro**: Alterne entre os modos de visualização para maior conforto visual.
- **Efeitos de Interação**: Efeitos sutis de hover nas imagens para uma melhor experiência do usuário.

## Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

- **React**: Biblioteca para construção de interfaces de usuário.
- **Vite**: Ferramenta de build para desenvolvimento frontend moderno.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática.
- **Tailwind CSS**: Framework CSS utility-first para estilização.
- **shadcn/ui**: Componentes de UI reusáveis construídos com Radix UI e Tailwind CSS.
- **Lucide React**: Biblioteca de ícones.

## Como Executar Localmente

Para executar o projeto em seu ambiente de desenvolvimento, siga os passos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   cd galeria-de-fotos
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```
   ou
   ```bash
   yarn install
   ```
   ou
   ```bash
   bun install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   ou
   ```bash
   yarn dev
   ```
   ou
   ```bash
   bun dev
   ```

4. **Abra o navegador:**
   Acesse `http://localhost:5173` (ou a porta indicada no terminal) para visualizar a aplicação.


## Estrutura do Projeto

A estrutura de pastas do projeto está organizada da seguinte forma:

```
/
├── public/               # Arquivos estáticos
├── src/
│   ├── components/       # Componentes React
│   │   ├── ui/           # Componentes do shadcn/ui
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── PhotoCard.tsx
│   │   └── ...
│   ├── data/             # Dados estáticos (fotos)
│   ├── hooks/            # Hooks customizados
│   ├── lib/              # Funções utilitárias
│   ├── pages/            # Páginas da aplicação
│   ├── App.tsx           # Componente principal
│   └── main.tsx          # Ponto de entrada da aplicação
├── package.json
└── ...
```

---

© 2026 Galeria de Fotos. Todos os direitos reservados.
