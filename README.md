<h1 align="center">inventory-manager<br> (Gerenciador de inventário)</h1>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/josiannefreitas/inventory-manager.svg)](https://github.com/josiannefreitas/inventory-manager/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/josiannefreitas/inventory-manager.svg)](https://github.com/josiannefreitas/inventory-manager/pulls)
[![License](https://img.shields.io/badge/license-ISC-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Uma aplicação de gestão automatizada de inventário de produtos, operável pelo terminal. 
    <br> 
</p>

## 📝 Tabela de conteúdos

- [Sobre](#about)
- [Introdução](#getting_started)
- [Implementação](#deployment)
- [Utilização](#usage)
- [Construído com](#built_using)
- [Autora](#authors)

## 🧐 Sobre <a name = "about"></a>

Uma aplicação de gestão automatizada de inventário de produtos, operável pelo terminal, que visa facilitar operações como adicionar novos produtos, listar produtos existentes, atualizar informações e remover itens obsoletos. Ainda, realizando o salvamento dos dados em um arquivo JSON, permitindo a permanência das informações.

## 🏁 Introdução <a name = "getting_started"></a>

Essas instruções farão com que você tenha uma cópia do projeto instalada e em execução em seu computador local.

### Pré-requisitos

O que você precisa para instalar a aplicação e como instalar.

<strong>NodeJS</strong>

Neste projeto, eu usei o Node.js na versão 22.11.0, então você precisará ter uma versão igual ou superior.
Caso ainda não tenha instalado, basta seguir até a página do [Node.js](https://nodejs.org/pt) e fazer a instalação seguindo o passo a passo.

Para conferir se a instalação foi um sucesso, basta abrir o seu terminal e digitar o comando:

```bash
node -v
```

### Installing

Clone o projeto ou o fork do projeto com o seguinte comando:

```bash
git clone https://github.com/josiannefreitas/inventory-manager.git
```

Em seguida, instale as dependências:

```bash
npm install
```

## 🎈 Utilização <a name="usage"></a>

Esta aplicação é operada através do terminal de comando. Então, você precisa abrir a pasta local na qual você clonou o repositório no terminal e executar o comando:

```bash
node index.js
```

Ao executar o comando acima, a aplicação já estará em funcionamento dentro do seu servidor e apresentará a interface contendo:

```
? Menu > (Use arrow keys)
❯ Adicionar produto
  Listar produtos
  Atualizar produtos
  Excluir produtos
  Buscar produtos
  Sair
```

Para navegar entre as opções do menu, é necessária a utilização das setas do teclado.

<strong>Adicionar produto</strong>

Ao selecionar a opção adicionar produto, será solicitada a inserção dos dados do produto, um por vez:

```
? Digite o nome do produto:
? Digite a categoria do produto:
? Informe a quantidade disponível em estoque:
? Informe o valor unitário (Ex.: R$18,90 = 1890):
```

Caso alguma das informações não seja preenchida, os dados não serão salvos e será exibida a seguinte mensagem:

```
Todos os campos são obrigatórios. Por favor, tente novamente.
```

Se todas as informações forem preenchidas, os dados serão armazenados no arquivo JSON que contém a base de dados, criando um ID automático correspondente a cada produto, e será exibida a seguinte mensagem:

```
Produto adicionado com sucesso!
```

<strong>Listar produtos</strong>

Ao selecionar a opção listar produtos, serão exibidos todos os produtos existentes na base de dados, com seus respectivos dados (ID, nome, categoria, quantidade e preço).

<strong>Atualizar produtos</strong>

Ao selecionar a opção atualizar produtos, será solicitado o ID do produto a ser atualizado:

```
? Informe o ID do produto que deseja atualizar:
```

O terminal irá exibir as informações do produto correspondente ao ID indicado, assim como abrirá um submenu solicitando a seleção do campo a ser atualizado:

```
ID: *
Nome: *
Categoria: *
Quantidade: *
Preço: R$*
? Selecione o campo do produto que deseja atualizar? (Use arrow keys)
❯ Nome
  Categoria
  Quantidade
  Preço
  Finalizar
```

Após selecionar e atualizar os campos necessários, é necessário selecionar a opção 'finalizar' para sair do submenu de atualização.

<strong>Excluir produto</strong>

Ao selecionar a opção excluir produtos, se não houverem produtos armazenados na base de dados, será exibida a mensagem:

```
Não existem produtos cadastrados!
```

Havendo produtos cadastrados, será solicitado o ID do produto a ser atualizado:

```
? Informe o ID do produto que deseja atualizar:
```

O terminal irá exibir as informações do produto correspondente ao ID indicado, assim como exibirá a mensagem:

```
ID: *
Nome: *
Categoria: *
Quantidade: *
Preço: R$*
? Deseja excluir este produto? (Y/n)
```

Caso a resposta seja 'y', o produto selecionado será excluído da base de dados e o terminal exibirá a mensagem:

```
Produto excluído com sucesso!
```

Caso a resposta seja 'n', o terminal exibirá a mensagem:

```
Exclusão cancelada.
```

<strong>Buscar produtos</strong>

Ao selecionar a opção buscar produtos, será exibido um submenu solicitando a seleção do campo pelo qual a busca será realizada:

```
? Escolha por qual campo deseja fazer a busca: (Use arrow keys)
❯ ID
  Nome
  Encerrar
```

A busca realizada pelo nome suporta pesquisa parcial, exibindo todos os produtos que possuam os caracteres digitados no campo do nome, com suas respectivas informações.

## ⛏️ Construído com <a name = "built_using"></a>

- [Git](https://git-scm.com/) - Controle de versão
- [Github](https://github.com/) - Armazenamento de código
- [VSCode](vscode) - Editor de código
- [NodeJs](https://nodejs.org/en/) - Ambiente do servidor
- [Inquirer](https://github.com/SBoudrias/Inquirer.js/blob/main/packages/inquirer/README.md) - Interfaces de usuário de linha de comando interativas comuns

## ✍️ Autora <a name = "authors"></a>

Josianne Maria de Freitas | anne.jmfreitas@gmail.com

- [@josiannefreitas](https://www.github.com/josiannefreitas)
