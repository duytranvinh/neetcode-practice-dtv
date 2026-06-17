class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;
        let mid;
        while (l <= r) {
            mid = Math.floor(l + ((r - l) / 2));
            console.log(mid);
            if (nums[mid] > target) r = mid - 1;
            else if (nums[mid] < target) l = mid + 1;
            else return mid
        }
        return -1;
    }
}
