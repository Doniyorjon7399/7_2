import { NestFactory } from '@nestjs/core';
import { BlogModule } from './blog/blog.module';

async function bootstrap() {
  const app = await NestFactory.create(BlogModule);
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
