
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private users = [
    { id: 1, username: 'admin', password: 'admin', role: 'admin' },
    { id: 2, username: 'user', password: 'user', role: 'user' },
  ];

  constructor(private readonly jwtService: JwtService) {}

  async login(loginDto: any) {
    const user = this.users.find(
      (u) => u.username === loginDto.username && u.password === loginDto.password,
    );
    if (!user) {
      return null;
    }
    const payload = { username: user.username, sub: user.id, role: user.role };
    return this.jwtService.sign(payload);
  }

  async register(registerDto: any) {
    const user = { id: Date.now(), ...registerDto };
    this.users.push(user);
    return user;
  }
}
