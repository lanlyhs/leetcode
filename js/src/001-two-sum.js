module.exports = [
	/**
	 * @param {number[]} nums
	 * @param {number} target
	 * @return {number[]}
	 */
	function twoSum(nums, target) {
		if (nums.length < 2) {
			throw new Error("nums length can't smaller than 2");
		}
		for (let i = 0; i < nums.length; i++) {
			for (let j = i + 1; j < nums.length; j++) {
				if (nums[i] + nums[j] === target) {
					return [i, j];
				}
			}
		}
		throw new Error("can't find result");
	},
	/**
	 * @param {number[]} nums
	 * @param {number} target
	 * @return {number[]}
	 */
	function twoSum1(nums, target) {
		if (nums.length < 2) {
			throw new Error("nums length can't smaller than 2");
		}
		const numIndex = new Map();
		for (let i = 0; i < nums.length; i++) {
			const remainValue = target - nums[i];
			if (numIndex.has(remainValue)) {
				return [numIndex.get(remainValue), i];
			}
			numIndex.set(nums[i], i);
		}
		throw new Error("can't find result");
	},
];
