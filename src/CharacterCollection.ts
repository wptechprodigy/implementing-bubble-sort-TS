import { Sorter } from './Sorter';

export class CharacterCollection extends Sorter {
	constructor(public data: string) {
		super();
	}

	get length(): number {
		return this.data.length;
	}

	compare(firstIndex: number, nextIndex: number): boolean {
		return (
			this.data[firstIndex].toLowerCase() > this.data[nextIndex].toLowerCase()
		);
	}

	swap(firstIndex: number, nextIndex: number): void {
    const characters = this.data.split('');

    const leftCharacter = characters[firstIndex];
    characters[firstIndex] = characters[nextIndex];
    characters[nextIndex] = leftCharacter;

    this.data = characters.join('');
  }
}
