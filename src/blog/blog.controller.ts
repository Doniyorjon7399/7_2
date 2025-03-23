import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { BlogDto } from './dto/blog.dto';
@Controller('blog')
export class BlogController {
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
  @HttpCode(200)
  @Get('all')
  async getAll() {
    return this.blogs;
  }
  @HttpCode(201)
  @Post('create')
  async create(@Body() dto: BlogDto) {
    delete dto.id;
    const data: BlogDto = {
      id: new Date().getTime(),
      ...dto,
    };
    return [...this.blogs, data];
  }
  @HttpCode(200)
  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.blogs.find((itim) => itim.id == Number(id));
  }
  @HttpCode(200)
  @Put(':id')
  async update(@Body() dto: BlogDto, @Param('id') id: string) {
    let currentBlog = this.blogs.find((item) => item.id == Number(id));
    currentBlog = dto;
    return currentBlog;
  }
  @HttpCode(201)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    const delleteUser = this.blogs.filter((item) => item.id !== Number(id));
    return delleteUser;
  }
}
