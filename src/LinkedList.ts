import { Sorter } from './Sorter';

class Node {
	next: Node | null = null;

	constructor(public data: number) {}
}

export class LinkedList extends Sorter {
	head: Node | null = null;

	add(data: number): void {
		const node = new Node(data);

		// Is there a head - in an other word, is there a node?
		if (!this.head) {
			this.head = node;
			return;
		}

		// If there's a node, we need to get to the last node
		// so we link the new node.
		// tail holds reference to the first node
		let tail = this.head;
		while (tail.next) {
			tail = tail.next;
		}

		tail.next = node;
	}

	get length(): number {
		if (!this.head) {
			return 0;
		}

		let length = 1;
		let node = this.head;
		while (node.next) {
			length++;
			node = node.next;
		}

		return length;
	}

	at(index: number): Node {
		if (!this.head) {
			throw new Error('Index out of bounds.');
		}

		let counter = 0;
		let node: Node | null = this.head;
		while (node) {
			if (counter === index) {
				return node;
			}

			counter++;
			node = node.next;
		}

		throw new Error('Index out of bounds.');
	}

	compare(firstIndex: number, nextIndex: number): boolean {
		if (!this.head) {
			throw new Error('List is empty!');
		}

		return this.at(firstIndex).data > this.at(nextIndex).data;
	}

	swap(firstIndex: number, nextIndex: number): void {
		const leftNode = this.at(firstIndex);
		const nextNode = this.at(nextIndex);

		const leftElement = leftNode.data;
		leftNode.data = nextNode.data;
		nextNode.data = leftElement;
	}

	print(): void {
		if (!this.head) {
			return;
		}

		let node: Node | null = this.head;
		while (node) {
			console.log(node.data);
			node = node.next;
		}
	}
}
