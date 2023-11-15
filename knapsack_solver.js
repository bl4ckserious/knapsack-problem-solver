const readlineSync = require('readline-sync');

class KnapsackProblemSolver {
    solveKnapsack(items, capacity) {
        const matrix = Array.from({ length: items.length + 1 }, () => Array(capacity + 1).fill(0));
        const candidates = Array.from({ length: items.length + 1 }, () => Array(capacity + 1).fill(0));
        let currentCapacity = capacity;
        const selectedItems = [];

        for (let row = 1; row <= items.length; row++) {
            const [weight, value] = items[row - 1];
            for (let column = 1; column <= capacity; column++) {
                matrix[row][column] = weight > column
                    ? matrix[row - 1][column]
                    : Math.max(matrix[row - 1][column], matrix[row - 1][column - weight] + value);

                if (matrix[row][column] !== matrix[row - 1][column]) {
                    candidates[row][column] = 1;
                }
            }
        }

        for (let row = items.length; row > 0; row--) {
            if (candidates[row][currentCapacity] === 1) {
                selectedItems.push(items[row - 1]);
                currentCapacity -= items[row - 1][0];
            }
        }

        return { selectedItems, matrix };
    }

    displayResults(selectedItems, matrix, items, capacity) {
        console.log("Itens selecionados: " + JSON.stringify(selectedItems.reverse()));
        console.log("Maior valor possível na mochila: " + matrix[items.length][capacity]);
    }

    startSolver() {
        let shouldContinue = false;

        while (!shouldContinue) {
            const userInput = readlineSync.question('Insira os itens [ex.: (1, 2), (3, 4), ...]: ');
            const regex = /\((\d+), (\d+)\)/g;
            const matches = [...userInput.matchAll(regex)];
            const items = matches.map(([_, weight, value]) => [parseInt(weight), parseInt(value)]);
            const capacity = parseInt(readlineSync.question('Insira a capacidade da mochila: '));
            console.log('\n')
            const { selectedItems, matrix } = this.solveKnapsack(items, capacity);
            this.displayResults(selectedItems, matrix, items, capacity);
            console.log('\n')

            shouldContinue = !readlineSync.keyInYNStrict('Clique Y para continuar');
        }

    }
}

const knapsackSolver = new KnapsackProblemSolver();
knapsackSolver.startSolver();
