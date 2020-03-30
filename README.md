# Bubble Sort Algorithm Implementation

This is a sorting algorithm that works for different types of data structures

## Sorting an Array, String, LinkedList or some other ones (The Bad Approach 🤬)

We intend to, first, implement a class sorter to sort an array of numbers using Bubble sort...hear me out!

It's not the best sorting algorithm out there but it suits our case. We intend to eventually make it to suit other cases like sorting a string like `JoPaB` to get `aBJoP` and a LinkedList.

But for now we implement the simplest scenario.

Say we have:

```ts
[10, 3, -5, 0, 1]
```

After implementation of our sorter and used on the above collection,
we should get:

```ts
[-5, 0, 1, 3, 10]
```

The `BubbleMethodForNumbers.ts` file holds the implementation for soring an array of numbers. Great!

This won't however work for a string. Yes. Yes. I know...but string behaves like an array in Javascript. But you cannot replace an element at some index in a string as it can be done for elements in an array.

This makes the solution in the above named file to be solely for that use case.

So, we may need to implement another class for sorting a string and then a LinkedList.

We could decide to annotate the collection variable in `BubbleMethodForNumbers.ts` to take `number[] | string` but this has a downside.

The pipe operator (called *union operator*) or the *'or'* as loosely called will make us lose methods that are not common to both **an array** and **a string**, which will make the logic fail in the case of a string.

A work around is to do something in Typescript called a _type guard_, which means we check if the collection to sort is either an array of numbers or a string. Just as below:

```ts
./BubbleMethodForNumbers.ts

...
// Type guarding collection to ensure the logic
// works if the input is an array
if (this.collection instanceof Array) {
  if (this.collection[j] > this.collection[j + 1]) {
    const temp = this.collection[j];

    this.collection[j] = this.collection[j + 1];
    this.collection[j + 1] = temp;
  }
}

// Then type guard for a sting as well
if (typeof this.collection === 'string') {
  // The we make a logic for strings here
}
...

```

This helps make all array methods available wuthin the block and as such we could still make use of the logic in there. Then we'll need to make another one for strings and then a LinkedList.

This is a bad approach.

## A Better Approach

A better approach is to make a class for any type of data we intend to sort and ensure we invert its dependency on the `Sorter.ts`.

The interface is defined in `Sorter.ts` as follows:

```ts

interface Sortable {
  length: number;
  compare(firstIndex: number, nextIndex: number): boolean;
  swap(firstIndex: number, nextIndex: number): void;
}
```

This interface has to be satisfied by any collection for it to be considered for sorting by our sorter class - `Sorter.ts`.

Now, we are able to create a `NumberCollection.ts`, in which is a class that satisfies the interface for consideration. This becomes flexible as we can now make any form of collection, so long they satify the interface.

For example, we can have `CharacterCollection`, `LinkedList` and so on.

Our `index.ts` file looks as such:

```ts

# index.ts

import { Sorter } from './Sorter';
// import { NumbersCollection } from './NumbersCollection';
// import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';

// const numberCollection = new NumbersCollection([10, 3, -5, 0, 1]);
// const characterCollection = new CharacterCollection('JoPaB');

const linkedList = new LinkedList();
linkedList.add(50);
linkedList.add(-20);
linkedList.add(10);
linkedList.add(-10);
linkedList.add(-5);
linkedList.add(51);
linkedList.add(5);
linkedList.add(1);

// const sorter = new Sorter(numberCollection);
// sorter.sort();
// console.log(numberCollection.data);

// const sorter = new Sorter(characterCollection);
// sorter.sort();
// console.log(characterCollection.data);

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();

```

### Did you notice another problem

Well this method is better off the first route we took.

However, it has some issues in itself. We'll need to create an instance of each collection, as well as an instance of the `Sorter` class with the instance of the collection created earlier.

It's only after this that we can then get our desired aim of sorting - a method inside `Sorter`.

## A Far Better Approach

A better approach would be that after creating the instance of either of the collections, there should be a sort method available to it.

So, we do something in the line:

```ts
...
const numberCollection = new NumberCollection([10, 3, -5, 0, 1]);
numberCollection.sort();
...
```

Afterall this is mostly how most developers would prefer to work rather the other way round.

To achieve this, there has to be a way to borrow the `sort()` method of the  `Sorter` class without actually implementing it in there - in each of the collection classes.

This concept is referred to as an **abstract** class, which does not need to be instantiated before use. It only needs to be injected in the place of need.

This is what we are going to be implementing now.
