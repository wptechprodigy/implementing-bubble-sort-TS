import { Sorter } from './Sorter';

/**
 * Collectyion of Numbers for sorting using Bubble sort
 *
 * @export
 * @class NumbersCollection
 */
export class NumbersCollection extends Sorter {
	constructor(public data: number[]) {
    super();
  }

	/**
	 * get makes it possible to call length
	 * without been invoked like a function/method
	 *
	 * @readonly
	 * @type {number}
	 * @memberof NumbersCollection
	 */
	get length(): number {
		return this.data.length;
	}

	/**
	 *
	 *
	 * @param {number} firstIndex
	 * @param {number} nextIndex
	 * @returns {boolean}
	 * @memberof NumbersCollection
	 */
	compare(firstIndex: number, nextIndex: number): boolean {
		return this.data[firstIndex] > this.data[nextIndex];
	}

	/**
	 *
	 *
	 * @param {number} firstIndex
	 * @param {number} nextIndex
	 * @memberof NumbersCollection
	 */
	swap(firstIndex: number, nextIndex: number): void {
		const leftElement = this.data[firstIndex];
		this.data[firstIndex] = this.data[nextIndex];
		this.data[nextIndex] = leftElement;
	}
}
