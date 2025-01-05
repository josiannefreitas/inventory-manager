const start = () => {
  while (true) {
    let option = 'sair'

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
        return
    }
  }
}

start()
