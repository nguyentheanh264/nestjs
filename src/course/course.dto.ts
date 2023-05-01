import { Expose, Transform } from 'class-transformer';
import { BaseDto } from 'src/common/base.dto';
import { TypeCourse } from './course.entity/course.entity';

export class CourseDto extends BaseDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  alias: string;

  @Expose()
  code: string;

  @Expose()
  avatarUrl: string;

  @Expose()
  type: TypeCourse;

  @Transform(({ obj }) => obj.shortDescription + ' ' + obj.description)
  @Expose()
  fullDescription: string;

  @Expose()
  shortDescription: string;

  @Expose()
  isActive: boolean;
}
