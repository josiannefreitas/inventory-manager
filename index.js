const { select, input } = require('@inquirer/prompts')

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

const updateProduct = async () => {
  const identifyingProduct = await input({
    message: 'Informe o ID do produto que deseja atualizar:'
  })

  const filteredProduct = await products.find(
    product => product.id == identifyingProduct
  )

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
        filteredProduct.name = newName
        break
      case 'category':
        const newCategory = await input({
          message: 'Digite a nova categoria do produto:'
        })
        filteredProduct.category = newCategory
        break
      case 'quantum':
        const newQuantum = await input({
          message: 'Informe a quantidade disponível atualmente em estoque:'
        })
        filteredProduct.quantum = newQuantum
        break
      case 'price':
        const newPrice = await input({
          message: 'Informe o valor unitário atualizado (Ex.: R$18,90 = 1890):'
        })
        filteredProduct.price = (newPrice / 100).toFixed(2)
        break
      case 'sair':
        console.log('Produto atualizado com sucesso!')
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
        console.log('Excluindo produtos')
        break
      case 'buscar':
        console.log('Buscando produtos')
        break
      case 'sair':
        console.log('Saindo')
        return
    }
  }
}

start()
