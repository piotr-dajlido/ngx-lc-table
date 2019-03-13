import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {

  tableData: Person[] = [{
    name: 'Jhon',
    lastName: 'Marcelvic',
    age: 43,
    sex: SEX.MALE,
    misc: {
      phone: 566674834,
      bloodType: 'Arh+',
      eyeColor: 'blue'
    }
  }, {
    name: 'Robert',
    lastName: 'Damascus',
    age: 31,
    sex: SEX.MALE
  }, {
    name: 'Chris',
    lastName: 'Patrickson',
    age: 26,
    sex: SEX.MALE,
    misc: {
      phone: 2234776,
      bloodType: '0rh-',
      eyeColor: 'brown'
    }
  }, {
    name: 'Ann',
    lastName: 'McGhungheught',
    age: 28,
    sex: SEX.FEMALE
  }, {
    name: 'Sara',
    lastName: 'Winston',
    age: 25,
    sex: SEX.FEMALE
  }, {
    name: 'Jessica',
    lastName: 'Dickson',
    age: 48,
    sex: SEX.FEMALE
  }, {
    name: 'Eveline',
    lastName: 'Thoughtful',
    age: 57,
    sex: SEX.FEMALE,
    misc: {
      phone: 2234776,
      bloodType: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      eyeColor: 'brown'
    }
  }];

  constructor() {
  }

  acc(arr: any[]) {
    return arr.reduce((acc, v) => acc + v.age, 0);
  }

  ngOnInit() {
  }

  click() {

  }

}

export class Person {
  name: string;
  lastName: string;
  age: number;
  sex: SEX;
  misc?: Misc;
}

export enum SEX {
  MALE = 'MALE', FEMALE = 'FEMALE'
}

export class Misc {
  phone: number;
  bloodType: string;
  eyeColor: string;
}
