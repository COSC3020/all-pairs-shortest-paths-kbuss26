[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/2i4vCRmk)
# All Pairs Shortest Paths

In the lectures, we've seen Dijkstra's algorithm for finding the shortest paths
from a given vertex to all other vertices in the graph. We've also covered the
Floyd-Warshall algorithm for finding the shortest path between all *pairs* of
vertices. It works as follows:

Given a graph $G = (V, E)$ with weighted edges:
- initialize a $|V|\times|V|$ matrix `dist` to $\infty$
- for each vertex $v \in V$, `dist[v][v] = 0`
- for each edge $(u,v) = e \in E$, `dist[u][v] = weight((u,v))`
- for each vertex $k\in V$:
    - for each vertex $i\in V$:
        - for each vertex $j\in V$:
            - `if dist[i][j] > dist[i][k] + dist[k][j]:`
              `dist[i][j] = dist[i][k] + dist[k][j]`

Implement this algorithm, starting with the template I provided in `code.js`.
The function takes a weighted graph graph and returns the matrix with the
distances, as described above. You can choose any data structures you like for
the implementation.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case time complexity ($\Theta$) of the algorithm? Add your
answer, including your reasoning, to this markdown file.

### Response

The worst-case time complexity of this algorithm's implementation is
$T(n) \in \Theta(|V|^3)$ . Because I derived the algorithm from the 
base pseudocode, we can look at said pseudocode and go from there.

We initially start with a $T(|V|^2)$ time by initializing a $V \cdot V$
matrix, then we iterate through the edges ( $T(|E|)$ ) to set the distance
to each vertice from each origin node. Then, we iterate through $|V|$ elements
nested in another for loop with $|V|$ elements, nested in yet another loop
through $|V|$ elements. This causes the time complexity to be $T(|V|^3 + |E|)$ .

Because $|E|$ has an upper bound of $T(|V|^2)$ , we say
that this is a lower-order term compared to $T(|V|^3)$ .

Therefore, this would cause the algorithm time
complexity to exist as $T(|V|^3 + |E|) \in \Theta(|V|^3)$ .

### Sources
- https://github.com/COSC3020/dijkstra-s-algorithm-kbuss26 - main.yml (reused), base test code
