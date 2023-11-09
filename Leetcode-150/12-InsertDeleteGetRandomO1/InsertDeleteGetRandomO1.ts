/**
 * Implement the RandomizedSet class:
 * RandomizedSet() Initializes the RandomizedSet object.
 *    - bool insert(int val) Inserts an item val into the set if not present.
 *      Returns true if the item was not present, false otherwise.
 *    - bool remove(int val) Removes an item val from the set if present.
 *      Returns true if the item was present, false otherwise.
 *    - int getRandom() Returns a random element from the current set of elements
 *      (it's guaranteed that at least one element exists when this method is called).
 *      Each element must have the same probability of being returned.
 *
 * You must implement the functions of the class such that each function works in average O(1) time complexity.
 *
 * My Solution
 * -----------
 * Typically, the insert, delete, and lookup methods of an array are performed in the following time complexities.
 *  - Insert -> O(n) since you may have to shift all elements depending on where the new element is inserted
 *  - Remove -> O(n) since you may have to shift all elements depending on where the new element is deleted
 *  - Lookup -> O(1)
 *
 * To ensure the insert and remove methods can occur in O(1) time, move the insertion/deletion to the end of the array.
 * When inserting, we need a way to validate that the item is unique without traversing through the array in O(n) time.
 * First idea: keep a hash map along side the set since hash lookup is about O(1) on average. The key is the string
 * representation of the number, and the value is it's position in the array.
 */

class RandomizedSet {
  set: number[];
  positions: Record<string, number | undefined>;

  constructor() {
    this.set = [];
    this.positions = {};
  }

  insert(val: number): boolean {
    if (this.positions[`${val}`] !== undefined) return false;
    this.positions[`${val}`] = this.set.length;
    this.set.push(val);
    return true;
  }

  remove(val: number): boolean {
    const valPosition = this.positions[`${val}`];
    if (valPosition === undefined) return false;
    const lastItem = this.set[this.set.length - 1];
    // swap positions
    this.set[valPosition] = lastItem;
    this.set[this.set.length - 1] = val;
    // remove item from end of array in O(1) time
    this.set.pop();
    // update the positions hash
    this.positions[`${lastItem}`] = valPosition;
    this.positions[`${val}`] = undefined;
    return true;
  }

  getRandom(): number {
    const randomNumber = Math.random();
    const position = Math.min(
      this.set.length - 1,
      Math.floor(randomNumber * this.set.length)
    );
    return this.set[position];
  }
}

console.log('Insert Delete Get Random O(1)');
const q = new RandomizedSet();
q.remove(0);
q.remove(0);
q.insert(0);
q.getRandom();
q.remove(0);
q.insert(0);
