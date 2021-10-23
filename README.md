# NLW HEAT_node

## Este é uma parte do projeto realizada durante a Next Level Week da Rocketseat

O projeto é baseado no Do/While programa da rocketseat que ocorrerá no inicio do mês de dezembro

## Techs

Nesta aplicacao esta sendo utilizada as tecnologias:

- NodeJs
- Typescript
- Prisma
- Express
- Socket.io
- Axios

## Detalhes a respeito do desenvolvimento:

### Primeiro os problemas

- Tive alguns problemas com o prismaClient, foi necessário remover tudo que era ligado ao prisma e recomeçar, não foi um processo demorado mas foi chato e tal problema não foi localizado na internet em momento algum, o erro era o seguinte : `A propriedade '{nome da minha model}' não existe no tipo 'PrismaClient<PrismaClientOptions, never, RejectOnNotFound | RejectPerOperation>'`.
- Tive problemas também com a estrutura que queria aplicar, tentei aplicar o clean archteture, mas ele ocorreu junto ao problema que citei acima sobre o prisma então me desfiz toda minha estrutura e apliquei como na aula, com modificações mais simples na forma de codificar.
- A aula não explicou muito sobre socket.io mas creio que isso vai depender da próxima aula que é o front-end

### Agora as partes boas

- Prisma é uma ótima ferramenta e estou ansioso para utilizar em novos projetos, realmente é muito bom usar ela com typescript
- Prisma Studio destroi um aparato que as vezes é necessário apenas para visualizar uma base de dados e simplifica muito as coisas.
- Decidi fazer essa parte em node do curso para aprender mais sobre o prisma como ferramenta e estou muito contente.
- Prisma sem dúvida foi a melhor coisa kakakak

### Modificações

- Separei todas as interfaces criadas em uma única pasta para facilitar a modificação futura caso necessária.
- Criei uma interface própria para o infoWS consumido pelo `io.emit()`, dessa forma facilita qualquer modificação futura que possa ocorrer em mensagens
- Criei um servico a parte apenas para o `io.emit()` deixando o sistema mais desacoplado e permitindo mais modificações nas interfaces
- Separei as rotas em diversos arquivos todas as rotas relacionadas aos seus próprios controllers para evitar confusão
- Consumi a rota de uma maneira diferente, executei um forEach percorrendo um array que continha as rotas com o `app.use()` dentro, assim só me preocupando em aplicar a rota no array e evitando replicação de código no app.ts
