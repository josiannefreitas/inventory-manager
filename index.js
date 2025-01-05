const { select } = require('@inquirer/prompts')

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
        console.log('Adicionando produtos')
        break
      case 'listar':
        console.log('Listando produtos')
        break
      case 'atualizar':
        console.log('Atualizando produtos')
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
