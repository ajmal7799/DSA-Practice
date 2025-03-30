    class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        }

        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return
        }

        for (let adjacencyList of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacencyList)
        }
        delete this.adjacencyList[vertex]
    }

    hasEdge(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
        )
    }

    bfs(start) {
        let queue = [start]
        let visited = new Set()
        visited.add(start)

        while (queue.length > 0) {
            let vertex = queue.shift()
            console.log(vertex)

            for (let nei of this.adjacencyList[vertex]) {
                if (!visited.has(nei)) {
                    visited.add(nei)
                    queue.push(nei)

                }
            }
        }
    }


    dfs(start, visited = new Set()) {
        if (!visited.has(start)) {
            console.log(start)
            visited.add(start)

            for (let nei of this.adjacencyList[start]) {
                this.dfs(nei, visited)
            }
        }
    }



    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + " -> " + [...this.adjacencyList[vertex]])
        }
    }
}

const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")

graph.addEdge("A", "B")
graph.addEdge("B", "C")


graph.display()
console.log(graph.hasEdge("B", "C"))
graph.removeVertex("A")
graph.display()