// This interface makes it possible to invert dependency
// So, whatever type of data we want to sort must fulfill
// the interface to be able to be sorted.
interface Sortable {
	length: number;
	compare(firstIndex: number, nextIndex: number): boolean;
	swap(firstIndex: number, nextIndex: number): void;
}

export abstract class Sorter {
	abstract length: number;
	abstract compare(firstIndex: number, nextIndex: number): boolean;
	abstract swap(firstIndex: number, nextIndex: number): void;

	sort(): void {
		const { length } = this;

		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				if (this.compare(j, j + 1)) {
					this.swap(j, j + 1);
				}
			}
		}
	}
}
