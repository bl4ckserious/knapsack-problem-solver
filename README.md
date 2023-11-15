# Knapsack Solver
## Descrição
O Knapsack Solver é uma implementação em JavaScript para resolver o problema da Mochila (Knapsack Problem) utilizando programação dinâmica. A aplicação permite que o usuário insira uma lista de itens, cada um representado por um par de peso e valor, e especifica a capacidade da mochila. Em seguida, o algoritmo calcula a seleção ótima de itens que maximiza o valor total dentro da capacidade da mochila.

## Como Usar
### Pré-requisitos
Certifique-se de ter o Node.js instalado no seu sistema. Você pode baixá-lo em [nodejs.org](https://nodejs.org/en).

### Instalação
Clone este repositório:

```
git clone git@github.com:bl4ckserious/knapsack-problem-solver.git
```

Navegue até o diretório do projeto:

```
cd knapsack-problem-solver
```

Instale as dependências:

```
npm install
```

### Execução
Para executar o Knapsack Solver, use o seguinte comando:

```
node knapsack_solver.js
``` 

Siga as instruções no terminal para inserir os itens desejados e a capacidade da mochila. O programa exibirá os resultados e solicitará se você deseja continuar.

### Exemplo de Entrada

```
Insira os itens [ex.: (1, 2), (3, 4), ...]: (2, 10), (3, 7), (4, 13), (5, 17)
Insira a capacidade da mochila: 6
```

### Exemplo de Saída

```
Itens selecionados: [[2, 10], [4, 13]]
Maior valor possível na mochila: 23
```
