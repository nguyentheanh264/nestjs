import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MySqlBaseService } from 'src/common/mysql/base.service';
import { Repository } from 'typeorm';
import { CourseDto } from './course.dto';
import { CourseEntity } from './course.entity/course.entity';

@Injectable()
export class CourseService extends MySqlBaseService<CourseEntity, CourseDto> {
  constructor(
    @InjectRepository(CourseEntity)
    private readonly courseRepository: Repository<CourseEntity>,
  ) {
    super(courseRepository);
  }
}
