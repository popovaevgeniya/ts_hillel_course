const filterArray = <T, U>(array: T[], condition: U): void => array.forEach((element: T) => condition);

class Stack<T> {
  private stack: T[] = [];

  push(element: T): void {
    this.stack.push(element);
  }

  pop(): void {
    this.stack.pop();
  }

  peek(): T | undefined {
    return this.stack[this.stack.length - 1];
  }
}

type DictionaryType<T extends string | number | symbol, V> = {
  [K in T]?: V;
};

class Dictionary<T extends string | number | symbol, V> {
  private dictionary: DictionaryType<T, V> = {};

  get getDictionary(): DictionaryType<T, V> {
    return this.dictionary;
  }

  set setDictionary(dictionary: DictionaryType<T, V>) {
    this.dictionary = dictionary;
  }

  hasDictionaryElem(elem: T): boolean {
    return elem in this.dictionary;
  }
}
