import { BaseEntity } from 'src/common/mysql/base.entity';
import { Column, Entity } from 'typeorm';

export enum TypeCourse {
  FREE = 'free',
  PAID = 'paid',
}

@Entity({ name: 'course' })
export class CourseEntity extends BaseEntity {
  @Column()
  name: string;

  @Column()
  alias: string;

  @Column()
  code: string;

  @Column()
  avatarUrl: string;

  @Column({
    type: 'enum',
    enum: TypeCourse,
    default: TypeCourse.FREE,
  })
  type: TypeCourse;

  @Column()
  description: string;

  @Column()
  shortDescription: string;

  @Column({ default: false })
  isActive: boolean;
}
