import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';

const numberCollection = new NumbersCollection([10, 3, -5, 0, 1]);
const characterCollection = new CharacterCollection('JoPaB');

const linkedList = new LinkedList();
linkedList.add(50);
linkedList.add(-20);
linkedList.add(-5);
linkedList.add(51);
linkedList.add(5);
linkedList.add(1);

numberCollection.sort();
console.log('+++++++++++++++++++++ \n', numberCollection.data);
console.log('+++++++++++++++++++++')

characterCollection.sort();
console.log(characterCollection.data);

console.log('+++++++++++++++++++++')
linkedList.sort();
linkedList.print();
