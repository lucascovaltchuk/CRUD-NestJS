
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users: { id: number; username: string; password: string; role: string }[] = [];

  create(createUserDto: { username: string; password: string; role: string }) {
    const user = { id: Date.now(), ...createUserDto };
    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  update(id: number, updateUserDto: any) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex >= 0) {
      this.users[userIndex] = { ...this.users[userIndex], ...updateUserDto };
      return this.users[userIndex];
    }
    return null;
  }

  remove(id: number) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex >= 0) {
      const removedUser = this.users.splice(userIndex, 1);
      return removedUser;
    }
    return null;
  }
}
