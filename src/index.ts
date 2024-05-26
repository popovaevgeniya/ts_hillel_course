//Company entity:
type AllStaffType = {
  preHiredStaff: string[];
  allDepartmentsStaff: string[];
};

interface ICompany {
  name: string;
  departmentList: string[];
  preHiredStaff: string[];
  allStaffList: AllStaffType;
}

class Company implements ICompany {
  allStaffList: AllStaffType;
  departmentList: string[];
  name: string;
  preHiredStaff: string[];
}

//Department entity:
type BudgetType = {
  debit: number;
  credit: number;
};

type EmployeeType = {};

interface IDepartment {
  name: string;
  domainArea: string;
  staff: EmployeeType[];
  budget: BudgetType;
  balanceCalculation: (budget: BudgetType) => number;
  addNewStaff: (employee: EmployeeType[]) => EmployeeType[];
}

class Department implements IDepartment {
  budget: BudgetType;
  domainArea: string;
  name: string;
  staff: EmployeeType[];

  balanceCalculation(budget: BudgetType): number {
    //методи для обчислення балансу виходячи з поточного бюджету
    const { debit, credit } = budget;
    return debit + credit;
  }

  addNewStaff(employee: EmployeeType): EmployeeType[] {
    //враховує зміни балансу і перетворення з Попередньо найнятого на Співробітника або видалення Співробітника з минулого відділу
  }
}

//Pre-hired staff entity:
interface IPreHiredEmployee {
  name: string;
  surname: string;
  salary: number;
  bankAccountNumber: number;
}

class PreHiredEmployee implements IPreHiredEmployee {
  name: string;
  surname: string;
  salary: number;
  bankAccountNumber: string;

  constructor(name: string, surname: string, salary: number, bankAccountNumber: number) {
    this.name = name;
    this.surname = surname;
    this.salary = salary;
    this.bankAccountNumber = bankAccountNumber;
  }

  get fullName(): string {
    return `${this.name} ${this.surname}`;
  }

  get salary(): number {
    return this.salary;
  }

  get bankAccountNumber(): number {
    return this.bankAccountNumber;
  }

  set fullName(value: string) {
    [this.name, this.surname] = value.split(' ');
  }

  set salary(salary: number) {
    this.salary = salary;
  }

  set bankAccountNumber(bankAccountNumber: number) {
    this.bankAccountNumber = bankAccountNumber;
  }
}

//Employee entity:
interface IEmployee extends IPreHiredEmployee {
  status: 'active' | 'inactive' | 'unpaidLeave';
  department: IDepartment;
}

class Employee implements IEmployee {
  bankAccountNumber: number;
  department: IDepartment;
  name: string;
  salary: number;
  status: 'active' | 'inactive' | 'unpaidLeave';
  surname: string;
}

//Accounting entity:
interface IAccounting {
  balance: number;
  takeOnBalance: () => void; //методи для взяття на баланс співробітника або департаменту
  removeFromBalance: () => void;
  paySalary: () => void; //виплати зарплати для всього персоналу. Попередньо найняті
  // співробітники отримують зарплату за допомогою зовнішніх оплат, Співробітники (тільки активні) - за допомогою внутрішніх.
}

class Accounting extends Department implements IAccounting {
  balance: number;

  paySalary(): void {}

  removeFromBalance(): void {}

  takeOnBalance(): void {}
}
