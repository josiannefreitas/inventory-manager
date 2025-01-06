const { select, input, confirm } = require('@inquirer/prompts')
const fs = require('fs').promises

let products = []
let currentId = 1

const addProduct = async () => {
  const name = await input({ message: 'Digite o nome do produto:' })
  const category = await input({ message: 'Digite a categoria do produto:' })
  const quantum = await input({
    message: 'Informe a quantidade disponível em estoque:'
  })
  const price = await input({
    message: 'Informe o valor unitário (Ex.: R$18,90 = 1890):'
  })

  if (!name || !category || !quantum || !price) {
    console.log('Todos os campos são obrigatórios. Por favor, tente novamente.')
    return
  }

  const product = {
    id: currentId++,
    name,
    category,
    quantum: Number(quantum),
    price: (price / 100).toFixed(2)
  }

  products.push(product)
  console.log('Produto adicionado com sucesso!')
}

const listProducts = async () => {
  if (products.length == 0) {
    console.log('Nenhum produto cadastrado.')
  } else {
    console.log('Lista de produtos:')
    products.forEach(product => {
      console.log(
        `ID: ${product.id}\n` +
          `Nome: ${product.name}\n` +
          `Categoria: ${product.category}\n` +
          `Quantidade: ${product.quantum}\n` +
          `Preço: R$${product.price}`
      )
      console.log('------------------')
    })
  }
}

const findProductById = async id => {
  const filteredProduct = await products.find(product => product.id == id)

  if (!filteredProduct) {
    console.log('Produto não encontrado. Verifique o ID e tente novamente.')
  }

  console.log(
    `ID: ${filteredProduct.id}\n` +
      `Nome: ${filteredProduct.name}\n` +
      `Categoria: ${filteredProduct.category}\n` +
      `Quantidade: ${filteredProduct.quantum}\n` +
      `Preço: R$${filteredProduct.price}`
  )

  return filteredProduct
}

const findProductByName = async name => {
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(name.toLowerCase())
  )

  if (filteredProducts.length == 0) {
    console.log('Nenhum produto encontrado com esse nome.')
    return null
  }

  console.log('Produtos encontrados:')
  filteredProducts.forEach(product => {
    console.log(
      `ID: ${product.id}\n` +
        `Nome: ${product.name}\n` +
        `Categoria: ${product.category}\n` +
        `Quantidade: ${product.quantum}\n` +
        `Preço: R$${product.price}`
    )
  })

  return filteredProducts
}

const updateProduct = async () => {
  const productId = await input({
    message: 'Informe o ID do produto que deseja atualizar:'
  })

  const productToUpdate = await findProductById(productId)
  if (!productToUpdate) return

  while (true) {
    const fieldToUpdate = await select({
      message: 'Selecione o campo do produto que deseja atualizar?',
      choices: [
        {
          name: 'Nome',
          value: 'name'
        },
        {
          name: 'Categoria',
          value: 'category'
        },
        {
          name: 'Quantidade',
          value: 'quantum'
        },
        {
          name: 'Preço',
          value: 'price'
        },
        {
          name: 'Finalizar',
          value: 'sair'
        }
      ]
    })

    switch (fieldToUpdate) {
      case 'name':
        const newName = await input({
          message: 'Digite o novo nome do produto:'
        })
        productToUpdate.name = newName
        break
      case 'category':
        const newCategory = await input({
          message: 'Digite a nova categoria do produto:'
        })
        productToUpdate.category = newCategory
        break
      case 'quantum':
        const newQuantum = await input({
          message: 'Informe a quantidade disponível atualmente em estoque:'
        })
        productToUpdate.quantum = newQuantum
        break
      case 'price':
        const newPrice = await input({
          message: 'Informe o valor unitário atualizado (Ex.: R$18,90 = 1890):'
        })
        productToUpdate.price = (newPrice / 100).toFixed(2)
        break
      case 'sair':
        console.log('Produto atualizado com sucesso!')
        return
    }
  }
}

const deleteProduct = async () => {
  if (products.length == 0) {
    console.log('Não existem produtos cadastrados!')
    return
  }

  const productId = await input({
    message: 'Informe o ID do produto que deseja excluir:'
  })

  const productToDelete = await findProductById(productId)
  if (!productToDelete) return

  const deleteConfirmation = await confirm({
    message: 'Deseja excluir este produto?'
  })

  if (deleteConfirmation) {
    products = products.filter(product => product.id != productId)
    console.log('Produto excluído com sucesso!')
  } else {
    console.log('Exclusão cancelada.')
  }
}

const searchProduct = async () => {
  if (products.length == 0) {
    console.log('Não existem produtos cadastrados!')
    return
  }

  const searchById = async () => {
    const productId = await input({
      message: 'Informe o ID do produto que deseja buscar:'
    })

    const productToSearch = await findProductById(productId)
    if (!productToSearch) return
  }

  const searchByName = async () => {
    const productName = await input({
      message: 'Informe o Nome do produto que deseja buscar:'
    })

    const productToSearch = await findProductByName(productName)
    if (!productToSearch) return
  }

  while (true) {
    const searchMode = await select({
      message: 'Escolha por qual campo deseja fazer a busca:',
      choices: [
        {
          name: 'ID',
          value: 'id'
        },
        {
          name: 'Nome',
          value: 'name'
        },
        {
          name: 'Encerrar',
          value: 'sair'
        }
      ]
    })

    switch (searchMode) {
      case 'id':
        await searchById()
        break
      case 'name':
        await searchByName()
        break
      case 'sair':
        console.log('Encerrando')
        return
    }
  }
}

const start = async () => {

  while (true) {

    const option = await select({
      message: 'Menu >',
      choices: [
        {
          name: 'Adicionar produto',
          value: 'adicionar'
        },
        {
          name: 'Listar produtos',
          value: 'listar'
        },
        {
          name: 'Atualizar produtos',
          value: 'atualizar'
        },
        {
          name: 'Excluir produtos',
          value: 'excluir'
        },
        {
          name: 'Buscar produtos',
          value: 'buscar'
        },
        {
          name: 'Sair',
          value: 'sair'
        }
      ]
    })

    switch (option) {
      case 'adicionar':
        await addProduct()
        break
      case 'listar':
        await listProducts()
        break
      case 'atualizar':
        await updateProduct()
        break
      case 'excluir':
        await deleteProduct()
        break
      case 'buscar':
        await searchProduct()
        break
      case 'sair':
        console.log('Saindo')
        return
    }
  }
}

start()
