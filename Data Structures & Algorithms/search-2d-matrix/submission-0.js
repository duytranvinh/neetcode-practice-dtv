class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const m = matrix.length;
        const n = matrix[0].length;
        let l = 0;
        let r = m * n - 1;
        while (l <= r) {
            let mid = l + Math.floor((r - l) / 2);
            let row = Math.floor(mid / n);
            let col = mid % n;
            let cur = matrix[row][col];
            console.log(cur)
            if (cur > target) r = mid - 1;
            else if (cur < target) l = mid + 1;
            else return true;
        }
        return false;
    }
}
