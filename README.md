# Mundo Curioso Hoje — Template Astro para Blog de Benefícios e Direitos

Template **Astro estático** limpo, jornalístico, **mobile-first**, **Discover-friendly** e com **Core Web Vitals verde**. Pronto para deploy na **Netlify**.

**Domínio configurado:** `https://mundocuriosohoje.com.br` (`astro.config.mjs` → `site`)

---

## ✨ O que já vem pronto

- **SEO Discover:** `og:image` 1200×675, `max-image-preview:large`, títulos com 55–65 chars, fonte grande (17–19px), imagens destaque 1200px
- **Schema NewsArticle JSON-LD** (em `BaseLayout` + `blog/[slug]`) + BreadcrumbList
- **E-E-A-T:** persona **Ana Ribeiro** (Especialista Direitos Sociais 5 anos) em `/sobre`, selo “Revisado por Ana” em todos os posts
- **GA4 + AdSense** como placeholders (troque `G-XXXXXXXXXX` e `ca-pub-XXXXXXXXXXXXXXX` em `BaseLayout.astro`)
- **Netlify Forms** em `/contato` (com honeypot)
- **LGPD completa** em `/privacidade` + `/termos`
- **3 posts mock 800 palavras** com H1/H2, FAQ, tabela, imagem 1200px e **fonte gov.br linkada**: Bolsa Família, FGTS, INSS
- **Home** com 6 cards (3 do content + 3 extras) — layout 1 col mobile / 3 cols desktop
- `sitemap` + `robots.txt` + `netlify.toml` (headers de segurança, cache, HSTS)

## 📁 Estrutura

```
├─ astro.config.mjs          # site + sitemap + mdx
├─ netlify.toml              # build, headers, redirects
├─ public/robots.txt, favicon.svg
├─ src/layouts/BaseLayout.astro
├─ src/pages/index.astro
├─ src/pages/sobre.astro
├─ src/pages/contato.astro
├─ src/pages/privacidade.astro
├─ src/pages/termos.astro
├─ src/pages/blog/[slug].astro
├─ src/content/config.ts     # collection blog (title, description, pubDate, author, image, tags)
└─ src/content/blog/*.md     # 3 posts mock
```

## 🚀 Rodar local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera /dist
npm run preview  # preview do build
```

## 🌐 Deploy na Netlify (git push + conectar)

### Opção A — Via dashboard (recomendado)
1. Crie um repositório no GitHub e faça push:
   ```bash
   git init
   git add .
   git commit -m "feat: template blog beneficios Astro"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/blog-beneficios-netlify.git
   git push -u origin main
   ```
2. Em [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project** → conecte o GitHub → selecione o repositório.
3. Netlify detecta `netlify.toml` automaticamente:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node:** 20
4. Clique em **Deploy site**. Pronto — seu site estará no ar com HTTPS automático.
5. Em **Domain management** → **Add custom domain** → aponte `mundocuriosohoje.com.br` (adicione CNAME/ALIAS conforme instruções da Netlify).

### Opção B — Netlify CLI
```bash
npm i -g netlify-cli
netlify login
netlify init   # linka pasta ao site
netlify deploy --build --prod
```

### Após o deploy
- Troque IDs em `src/layouts/BaseLayout.astro`: GA4 (`G-XXXXXXXXXX`) e AdSense (`ca-pub-XXXXXXXXXXXXXXX`)
- Envie o `sitemap-index.xml` no Google Search Console
- Teste Netlify Forms em `/contato` (envie 1 mensagem de teste → aparece em **Forms** no dashboard)
- Valide Schema em https://validator.schema.org

## 🎨 Design

Jornalístico, fundo branco, azul #0e4a7b + amarelo #ffb703, cards com `aspect-ratio 16/9`, tipografia Inter/system-ui, 17px no corpo, 1200×675 nas imagens (1200px exigido pelo Discover).

## 📝 Criar novo post

Crie `src/content/blog/meu-post.md`:

```md
---
title: "Título com 55-65 caracteres e benefício + ano"
description: "Descrição 150-160 chars com palavra-chave e promessa de guia."
pubDate: 2025-09-11
author: "Ana Ribeiro"
image: "https://images.unsplash.com/...?w=1200&h=675&fit=crop"
imageAlt: "Descrição da imagem 1200x675 para acessibilidade"
tags: ["Bolsa Família"]
---
Conteúdo em Markdown com H2, listas, tabela e FAQ...
```

## ⚠️ Aviso legal

Conteúdo informativo, sem vínculo governamental. Sempre linkar gov.br/Caixa/INSS como fonte primária.

---

Feito com Astro 4 + Netlify • E-E-A-T por Ana Ribeiro
