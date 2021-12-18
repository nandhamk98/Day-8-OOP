class Person {
  constructor(
    firstName,
    lastName,
    dob,
    email,
    gender,
    nationality,
    phoneNumber
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.phoneNumber = phoneNumber;
    this.dob = dob;
    this.email = email;
    this.nationality = nationality;
    this.fullName = this.getFullName();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getPhoneNumber() {
    return this.phoneNumber;
  }

  getGender() {
    return this.gender;
  }

  getNationality() {
    return this.nationality;
  }

  getEmail() {
    return this.email;
  }

  getdob() {
    return this.dob;
  }

  setEmail(newEmail) {
    this.email = newEmail;
  }

  setPhoneNumber(newPhoneNumber) {
    this.phoneNumber = newPhoneNumber;
  }
}

const sam = new Person(
  "Sam",
  "Anderson",
  "12/12/80",
  "samanderson@yahoo.com",
  "Male",
  "American",
  "6721234567"
);

console.log(sam.fullName);
