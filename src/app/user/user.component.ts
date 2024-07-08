import { Component, Input, Output, EventEmitter, output, input } from '@angular/core';

//can define types
type UserType = {
  id: string,
  name: string,
  avatar: string
}
//also a way to define types
interface IUser {
  id: string,
  name: string,
  avatar: string
}




@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //normal, input decorator
  @Input({ required: true }) user!: {
    id: string,
    name: string,
    avatar: string
  };
  @Output() select = new EventEmitter<string>(); //output decorator
  // select = output<string>() //same as above, but shorter and new
  //using signals 
  // avatar = input.required<string>()
  // name = input.required<string>()
  // imagePath = computed(() => "assets/users/" + this.avatar())


  get imagePath() {
    return "assets/users/" + this.user.avatar
  }
  onSelectUser() {
    this.select.emit(this.user.id)
  }
}
