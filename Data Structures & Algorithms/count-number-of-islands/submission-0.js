class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const dir = [[1, 0], [-1, 0], [0, -1], [0, 1]];
        const m = grid.length;
        const n = grid[0].length;
        let res = 0;

        const bfs = (row, col) => {
            const q = new Queue();
            q.push([row, col]);
            grid[row][col] = '0';

            while (!q.isEmpty()) {
                const [r, c] = q.pop();
                for (const [dr, dc] of dir) {
                    const newR = r + dr;
                    const newC = c + dc;
                    if (
                        newR >= 0 && newC >= 0 &&
                        newR < m && newC < n &&
                        grid[newR][newC] === '1'
                    ) {
                        q.push([newR, newC]);
                        grid[newR][newC] = '0';
                    }
                }
            }
        }

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === '1') {
                    bfs(i, j);
                    res++;
                }
            }
        }
        return res;
    }
}
