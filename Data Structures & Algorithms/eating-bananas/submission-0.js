class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        let res = r;
        while (l <= r) {
            let k = l + Math.floor((r - l) / 2);

            let totalTimes = 0;
            for (const p of piles) {
                totalTimes += Math.ceil(p / k);
            }
            if (totalTimes <= h) {
                res = k;
                r = k - 1;
            } else {
                l = k + 1;
            }
        }
        return res;
    }
}
