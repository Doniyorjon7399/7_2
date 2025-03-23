import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BlogDto } from './dto/blog.dto';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}
  @HttpCode(200)
  @Get('all')
  async getAll() {
    return this.blogService.getAllBlog();
  }

  @HttpCode(201)
  @Post('create')
  @UsePipes(ValidationPipe)
  async create(@Body() dto: BlogDto) {
    return this.blogService.create(dto);
  }

  @HttpCode(200)
  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.blogService.getById(id);
  }

  @HttpCode(200)
  @Put(':id')
  @UsePipes(ValidationPipe)
  async update(@Body() dto: BlogDto, @Param('id') id: string) {
    return this.blogService.update(dto, id);
  }

  @HttpCode(201)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.blogService.delete(id);
  }
}
