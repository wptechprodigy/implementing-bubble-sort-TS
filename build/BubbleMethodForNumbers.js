"use strict";
// // 1. This is one way with specifying the parameter and initializing it later
// // class Sorter {
// //   collection: number[];
// //   constructor(collection: number[]) {
// //     this.collection = collection;
// //   }
// // }
// // 2. Second way is to just specify public in the constructor for the argument
// export class Sorter {
// 	constructor(public collection: number[] | string) {}
// 	sort(): void {
// 		const { length } = this.collection;
// 		for (let i = 0; i < length; i++) {
// 			for (let j = 0; j < length - i - 1; j++) {
// 				// Type guarding collection to ensure the logic
// 				// works if the input is an array
// 				if (this.collection instanceof Array) {
// 					if (this.collection[j] > this.collection[j + 1]) {
// 						const temp = this.collection[j];
// 						this.collection[j] = this.collection[j + 1];
// 						this.collection[j + 1] = temp;
// 					}
// 				}
// 			}
// 		}
// 	}
// }
