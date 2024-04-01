type PersonInfoType = {
  name: string;
  surname: string;
};

type LecturerType = {
  position: string;
  company: string;
  experience: string;
  courses: string[];
  contacts: [string | number];
};

type AreaType = {
  name: string;
  levels: number[];
};

class School {
  // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods

  _areas: AreaType[][] = [];
  _lecturer: Array<LecturerType & PersonInfoType> = [];
  _lecturers: Array<LecturerType & PersonInfoType>[] = []; // Name, surname, position, company, experience, courses, contacts

  get areas(): AreaType[][] {
    return this._areas;
  }

  get lecturers(): LecturerType[][] {
    return this._lecturers;
  }

  addArea(area: AreaType[]): void {
    this._areas.push(area);
  }

  removeArea(areaIndex: number): void {
    this._areas.splice(areaIndex, 1);
  }

  addLecturer(lecturer: Array<LecturerType & PersonInfoType>): void {
    this._lecturers.push(lecturer);
  }

  removeLecturer(lecturerIndex: number): void {
    this._lecturers = this._lecturers.filter((item: LecturerType[], i: number): boolean => i !== lecturerIndex);
  }
}

class Area {
  // implement getters for fields and 'add/remove level' methods
  _levels: number[] = [];
  _name: string;

  get name(): string {
    return this._name;
  }

  get levels(): number[] {
    return this._levels;
  }

  constructor(name: string) {
    this._name = name;
  }

  addLevel(level: number): void {
    this._levels.push(level);
  }

  removeLevel(levelIndex: number): void {
    this._levels.splice(levelIndex, 1);
  }
}

class Level {
  // implement getters for fields and 'add/remove group' methods

  _groups: GroupType[] = [];
  _name: string;
  _description: string;

  get name(): string {
    return this._name;
  }

  get groups(): GroupType[] {
    return this._groups;
  }

  constructor(name: string, description: string) {
    this._name = name;
    this._description = description;
  }

  addGroup(group: GroupType): void {
    this._groups.push(group);
  }

  removeGroup(groupIndex: number): void {
    this._groups.splice(groupIndex, 1);
  }
}

type StudentType = {
  firstName: string;
  lastName: string;
  birthYear: number;
  grades: GradeType;
  visits: boolean[];
  getPerformanceRating: () => number;
};

type GroupType = {
  area: AreaType;
  status: boolean;
  students: StudentType[];
};

class Group {
  // implement getters for fields and 'add/remove student' and 'set status' methods

  _area: AreaType[] = [];
  _status: boolean = false;
  _students: StudentType[] = []; // Modify the array so that it has a valid toSorted method*
  directionName: string;
  levelName: string;

  get area(): AreaType[] {
    return this._area;
  }

  get status(): boolean {
    return this._status;
  }

  get students(): StudentType[] {
    return this._students;
  }

  constructor(directionName: string, levelName: string) {
    this.directionName = directionName;
    this.levelName = levelName;
  }

  showPerformance(): StudentType[] {
    return this._students.toSorted((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
  }

  addStudent(student: StudentType): void {
    this._students.push(student);
  }

  removeStudent(firstName: string, lastName: string): void {
    this._students = this._students.filter(
      (student: StudentType): boolean => student.firstName !== firstName && student.lastName !== lastName
    );
  }

  setStatus(statusValue: boolean): void {
    this._status = statusValue;
  }
}

type markType = number;

type GradeType = {
  [workName: string]: markType;
};

class Student {
  // implement 'set grade' and 'set visit' methods

  _firstName: string;
  _lastName: string;
  _birthYear: number;
  _grades: GradeType = {}; // workName: mark
  _visits: boolean[] = []; // lesson: present

  get fullName(): string {
    return `${this._lastName} ${this._firstName}`;
  }

  set fullName(value: string) {
    [this._lastName, this._firstName] = value.split(' ');
  }

  get age(): number {
    return new Date().getFullYear() - this._birthYear;
  }

  constructor(firstName: string, lastName: string, birthYear: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthYear = birthYear;
  }

  getPerformanceRating(): number {
    const gradeValues: markType[] = Object.values(this._grades);

    if (!gradeValues.length) return 0;

    const averageGrade: number = gradeValues.reduce((sum: number, grade) => sum + grade, 0) / gradeValues.length;
    const attendancePercentage: number = (this._visits.filter(present => present).length / this._visits.length) * 100;

    return (averageGrade + attendancePercentage) / 2;
  }
}
