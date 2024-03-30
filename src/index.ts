class School {
  directions: string[] = [];

  addDirection(direction: string): void {
    this.directions.push(direction);
  }
}

class Direction {
  levels: number[] = [];
  _name: string;

  get name(): string {
    return this._name;
  }

  constructor(name: string) {
    this._name = name;
  }

  addLevel(level: number): void {
    this.levels.push(level);
  }
}

class Level {
  groups: never[] = [];
  _program: string;
  _name: string;

  get name(): string {
    return this._name;
  }

  get program(): string {
    return this._program;
  }

  constructor(name: string, program: string) {
    this._name = name;
    this._program = program;
  }

  addGroup(group: never): void {
    this.groups.push(group);
  }
}

class Group {
  _students: never[] = [];
  directionName: string;
  levelName: string;

  get students(): never[] {
    return this._students;
  }

  constructor(directionName: string, levelName: string) {
    this.directionName = directionName;
    this.levelName = levelName;
  }

  addStudent(student: never): void {
    this._students.push(student);
  }

  showPerformance(): never[] {
    return this.students.toSorted((a: any, b: any) => b.getPerformanceRating() - a.getPerformanceRating());
  }
}

class Student {
  grades: any = {};
  attendance: boolean[] = [];
  firstName: string;
  lastName: string;
  birthYear: number;

  get fullName(): string {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value: string) {
    [this.lastName, this.firstName] = value.split(' ');
  }

  get age(): number {
    return new Date().getFullYear() - this.birthYear;
  }

  constructor(firstName: string, lastName: string, birthYear: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }

  setGrade(subject: string, grade: number): void {
    this.grades[subject] = grade;
  }

  markAttendance(present: boolean): void {
    this.attendance.push(present);
  }

  getPerformanceRating(): number {
    const gradeValues: number[] = Object.values(this.grades);
    const isZeroGradeValuesLength: unknown = gradeValues.length === 0;

    if (isZeroGradeValuesLength) return 0;

    const averageGrade: number =
      gradeValues.reduce((sum: number, grade: number) => sum + grade, 0) / gradeValues.length;

    const attendancePercentage: number =
      (this.attendance.filter((present: boolean) => present).length / this.attendance.length) * 100;

    return (averageGrade + attendancePercentage) / 2;
  }
}
