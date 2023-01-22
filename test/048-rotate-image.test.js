const fns = require(require(".")(__filename).sourcePath);

fns.forEach((fn) => {
	describe(fn.name, () => {
		it("[[1,2,3],[4,5,6],[7,8,9]]", () => {
			let array = [
				[1, 2, 3],
				[4, 5, 6],
				[7, 8, 9],
			];
			fn(array);
			expect(array).toEqual([
				[7, 4, 1],
				[8, 5, 2],
				[9, 6, 3],
			]);
		});

		it("[[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]", () => {
			let array = [
				[5, 1, 9, 11],
				[2, 4, 8, 10],
				[13, 3, 6, 7],
				[15, 14, 12, 16],
			];
			fn(array);
			expect(array).toEqual([
				[15, 13, 2, 5],
				[14, 3, 4, 1],
				[12, 6, 8, 9],
				[16, 7, 10, 11],
			]);
		});
	});
});
