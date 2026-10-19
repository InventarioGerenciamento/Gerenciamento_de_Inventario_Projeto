# Senai estoque · Gestão de inventário

Demonstração web em português, feita com PHP, HTML, CSS e JavaScript. A interface está em `index.html`; o PHP em `index.php` e `api.php` entrega a página e disponibiliza a API; os cadastros são persistidos em `data/inventory.json`.

## Como abrir

1. Instale o PHP 8 ou mais recente e habilite o servidor local integrado.
2. No terminal, entre na pasta do projeto e execute `php -S localhost:8000`.
3. Abra `http://localhost:8000` no navegador.

Para apresentar em outra máquina, copie a pasta inteira do projeto, instale o PHP nessa máquina e repita os passos. O servidor precisa ter permissão para criar e gravar na pasta `data`.

## O que apresentar

- **Visão geral:** indicadores do estoque, atividade recente e atalhos para os cadastros.
- **Produtos:** nome, categoria, marca, fornecedor, local, quantidade e nível mínimo de estoque.
- **Categorias:** organização do catálogo por tipo de produto.
- **Fornecedores:** contatos, e-mail, telefone e especialidade.
- **Locais de armazenamento:** setor, categoria do estoque e pessoa responsável.
- **Usuários:** nome, CPF ou crachá, e-mail e perfil de acesso.

Os formulários permitem incluir e editar cadastros. As listas têm busca e opção para excluir registros. O PHP grava os dados no servidor, no arquivo `data/inventory.json`.

## Recomeçar a demonstração

Os dados ficam no arquivo `data/inventory.json`. Para recomeçar com os exemplos, pare o servidor e apague esse arquivo; ele será recriado com os dados iniciais na próxima gravação.