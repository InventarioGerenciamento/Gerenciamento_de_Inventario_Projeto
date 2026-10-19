# Senai estoque · Gestão de inventário

Aplicativo web em português, feito com PHP, HTML, CSS e JavaScript. A interface fica em `frontend/`; a API PHP e a integração com o banco Supabase ficam em `backend/`.

## Organização das pastas

- `frontend/`: HTML, estilos, JavaScript, manifesto, service worker e ícones do PWA.
- `backend/`: API e roteador PHP, integração Supabase e configuração privada do servidor.
- `backend/data/`: banco SQLite antigo, mantido como origem da migração inicial para o Supabase.

## Configurar o banco Supabase

1. Crie um projeto no [Supabase](https://supabase.com/) ou abra o projeto existente.
2. No **SQL Editor**, execute o conteúdo de [`backend/supabase-schema.sql`](backend/supabase-schema.sql). Ele cria as tabelas e as funções de leitura e gravação.
3. No painel do projeto, copie a **Project URL** e uma chave secreta de servidor (`service_role` ou `sb_secret_`). **Nunca coloque essa chave no frontend nem a publique no GitHub.**
4. Copie `backend/.env.example` para `backend/.env` e preencha os valores:

   ```dotenv
   SUPABASE_URL=https://seu-projeto.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=sua_chave_secreta
   ```

   No PowerShell, a cópia pode ser feita com `Copy-Item backend\.env.example backend\.env`. Depois, abra `backend/.env` no VS Code para inserir a URL e chave reais. O arquivo `.env` está excluído do Git. Não envie nem compartilhe a chave secreta.

## Executar localmente

Instale PHP 8 ou mais recente com as extensões OpenSSL, PDO e PDO_SQLite habilitadas. Execute o servidor na raiz do projeto:

```powershell
php -S localhost:8000 -t frontend backend/router.php
```

Abra `http://localhost:8000`. A API PHP usa a chave apenas no servidor e comunica com o Supabase por HTTPS.

Na primeira leitura, o sistema transfere os dados atuais do SQLite local para o Supabase, se o Supabase ainda estiver sem inventário. Depois disso, o Supabase passa a ser a fonte dos dados.

O endpoint da API não tem autenticação de usuários. Enquanto não houver login, use-o apenas localmente ou em um ambiente controlado; não publique na internet com dados reais.

## Instalar como aplicativo

Abra o sistema em um endereço HTTPS no Chrome ou Edge e use **Instalar app** no cabeçalho ou o ícone de instalação do navegador. O navegador integrado do VS Code não oferece instalação de PWA. Essa opção instala o app pelo navegador; não baixa um arquivo APK.

Para instalar no Android, publique o site em HTTPS e abra o endereço no Chrome. No iPhone ou iPad, abra o site HTTPS no Safari, toque em **Compartilhar** e escolha **Adicionar à Tela de Início**. A interface pode abrir offline, mas ler e salvar os dados exige internet e conexão com o Supabase.

## Cadastros disponíveis

- **Produtos:** nome, categoria, marca, fornecedor, local, quantidade e nível mínimo.
- **Categorias:** organização dos produtos por tipo.
- **Fornecedores:** contatos, e-mail, telefone e especialidade.
- **Locais de armazenamento:** setor, categoria e responsável.
- **Usuários:** nome, CPF ou crachá, e-mail e cargo.

Os formulários permitem incluir, editar, buscar e excluir cadastros. A função SQL salva o inventário em uma única transação.

## Reiniciar os dados

Para recomeçar com os exemplos, limpe as tabelas do Supabase e defina `inicializado` como `false` em `configuracao_inventario`; na próxima leitura o sistema importará novamente os dados locais. A rotina de reinicialização exige cuidado para não sobrescrever dados existentes.
