import { Injectable } from '@nestjs/common';
import { BlogDto } from './dto/blog.dto';

@Injectable()
export class BlogService {
  blogs: BlogDto[];
  constructor() {
    this.blogs = [
      {
        id: 1,
        title: 'nestjs',
        excerpt: 'hello',
        description: 'hello nestjs',
      },
      {
        id: 2,
        title: 'nestjs',
        excerpt: 'hello',
        description: 'hello nestjs',
      },
      {
        id: 3,
        title: 'nestjs',
        excerpt: 'hello',
        description: 'hello nestjs',
      },
    ];
  }
  async getAllBlog() {
    return this.blogs;
  }
  async create(dto: BlogDto) {
    delete dto.id;
    const data: BlogDto = {
      id: new Date().getTime(),
      ...dto,
    };
    return [...this.blogs, data];
  }
  async getById(id: string) {
    return this.blogs.find((itim) => itim.id == Number(id));
  }
  async update(dto: BlogDto, id: string) {
    let currentBlog = this.blogs.find((item) => item.id == Number(id));
    currentBlog = dto;
    return currentBlog;
  }
  async delete(id: string) {
    const delleteUser = this.blogs.filter((item) => item.id !== Number(id));
    return delleteUser;
  }
}
