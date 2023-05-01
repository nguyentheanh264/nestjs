import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { CourseEntity } from './course.entity/course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CourseEntity])],
  providers: [CourseService],
  controllers: [CourseController],
})
export class CourseModule {}
