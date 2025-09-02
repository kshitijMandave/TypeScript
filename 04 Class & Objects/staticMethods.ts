class Student {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  static schoolName() {
    return "ABC Public School";
  }
}

const s1 = new Student("Rakesh");

//  Error: s1.schoolName();  // static methods are not for objects
console.log(Student.schoolName()); //  "ABC Public School"
