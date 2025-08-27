import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS
  app.enableCors({
    origin: [
      'http://localhost:8081',   // React Native packager  
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  });
  
  await app.listen(3000);
}
bootstrap();