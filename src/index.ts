interface IToDoList {
  list: ListType;
  addRecord: (record: RecordType) => void;
  removeRecord: (id: number) => void;
  editRecord: (id: number) => void;
  getRecordById: (id: number) => RecordType | undefined;
  getList: () => ListType;
  putDoneStatus: (id: number) => void;
  getRecordsQuantity: () => number;
  getUndoneRecordsQuantity: () => number;
}

type RecordType = {
  id: number;
  name: string;
  content: string;
  creationDate: Date;
  editingDate: string;
  doneStatus: boolean;
  recordType: 'default' | 'needsConfirmation';
};

type ListType = RecordType[];

class ToDoList implements IToDoList {
  list: ListType;

  constructor(list: ListType) {
    this.list = list;
  }

  getList(): ListType {
    return this.list;
  }

  addRecord(record: RecordType): void {
    this.list.push(record);
  }

  removeRecord(id: number): void {
    const record = this.list.find(el => el.id === id);
    if (record) this.list.splice(record.id, 1);
  }

  editRecord(id: number): void {}

  getRecordById(id: number): RecordType | undefined {
    return this.list.find(elem => elem.id === id);
  }

  putDoneStatus(id: number): void {
    const record = this.list.find(elem => elem.id === id);
    if (record) record.doneStatus = true;
  }

  getRecordsQuantity(): number {
    return this.list.length;
  }

  getUndoneRecordsQuantity(): number {
    return this.list.filter(({ doneStatus }) => doneStatus === false).length;
  }
}

interface IToDoListWithSearch {
  list: IToDoList['list'];
  getRecordByName: (name: string) => RecordType | ListType | undefined;
}

class ToDoListWithSearch extends ToDoList {
  list: IToDoList['list'];
  constructor(list: IToDoList['list']) {
    super(list);
    this.list = list;
  }

  getRecordByNameContent(searchValue: string): RecordType | ListType | undefined {
    return this.list.filter(elem => elem.name.includes(searchValue) || elem.content.includes(searchValue));
  }
}

interface IToDoListWithSort {
  list: IToDoList['list'];
  sortRecordsByStatus: (status: boolean) => ListType;
  sortRecordsByDate: () => ListType;
}

class ToDoListWithSort extends ToDoList {
  list: IToDoList['list'];
  constructor(list: IToDoList['list']) {
    super(list);
    this.list = list;
  }

  sortRecordsByStatus(status: boolean): ListType {
    const statusRecords = this.list.filter(({ doneStatus }) => doneStatus === status);
    const otherRecords = this.list.filter(({ doneStatus }) => doneStatus === !status);
    return statusRecords.concat(otherRecords);
  }

  sortRecordsByDate(): ListType {
    return this.list.sort((a, b) => Date.parse(b.editingDate) - Date.parse(a.editingDate));
  }
}
