import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task1';
  content: string = " ";
  value: string = " ";
  registerSt: boolean = false;
  loginSt: boolean = false;
  index: number = -1;
  boolean: number;
  email: string;
  name: string;
  password: string;
  is_blocked: boolean;
  infoAboutUser: string;


  search() {
    this.content = this.value
  }

  onInput(event) {
    this.value = event.target.value
  }

  newUsers = {
    id: undefined, email: '', password: '', name: '', is_blocked: Boolean(Math.floor(Math.random() * 100))

  };
  house = {
    id: undefined, street: '', price: '', owner: undefined
  };
  login = {
    email: '', password: ''
  };
  findUser = {
    email: '',
    password: ''
  };
  users = [
    {name: 'Oleh', password: 456,email:'Oleh4@gmail.com', is_blocked: true},
    {name: 'Andriy', password: 4578,email:'Andriy4@gmail.com', is_blocked: false},
    {name: 'Nazar', password: 896,email:'Nazar4@gmail.com', is_blocked: true},
    {name: 'Iwan',  password: 'asdadsd',email:'Iwan4@gmail.com', is_blocked: true},
  ];
  houses = [
    {id: 0, price: 798, street: 'naukova', owner: this.users[0]},
    {id: 1, price: 788, street: 'naukova', owner: this.users[1]},
    {id: 2, price: 44554, street: 'naukova', owner: this.users[2]},
    {id: 3, price: 798, street: 'naukova', owner: this.users[3]},
  ];

  ShowAllBtn(id: number) {
    this.index = id;
  }

  registrationUser() {
    this.newUsers.id = this.users.length + 1;
    this.email = this.newUsers.email;
    this.name = this.newUsers.name;
    this.password = this.newUsers.password;

    this.users.push({email: this.email, name: this.name, password: this.password, is_blocked: this.is_blocked});

    this.newUsers.email = '';
    this.newUsers.name = '';
    this.newUsers.password = '';
  }

  createHouse() {
    this.house.id = this.houses.length+1;
    this.house.owner = this.users;
    this.house.street = '';
    this.house.price = '';
  }

  loginUser() {
    const User = this.users.find(user =>
    this.findUser.email === user.email && this.findUser.password === user.password);
    User ? this.infoAboutUser='Welcome' :this.infoAboutUser='User is not found'
  }
}
