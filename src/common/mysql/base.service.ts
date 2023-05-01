import { plainToInstance } from 'class-transformer';
import { CourseDto } from 'src/course/course.dto';
import { Like, Repository } from 'typeorm';
import { BaseDto } from '../base.dto';
import { BaseEntity } from './base.entity';

export class MySqlBaseService<Entity extends BaseEntity, Dto extends BaseDto> {
  constructor(protected repo: Repository<Entity>) {}

  async findAll(query): Promise<any> {
    const size = query.size || 10;
    const page = query.page || 0;
    const [result, total] = await this.repo.findAndCount({
      // where: { name: Like('%' + search + '%') },
      // order: { name: 'DESC' },
      take: size,
      skip: page,
    });

    return {
      data: result,
      total: total,
      page,
      size,
    };
  }

  async save(baseDto: any): Promise<any> {
    const saveEntity = await this.repo.save(baseDto);
    return plainToInstance(CourseDto, saveEntity, {
      excludeExtraneousValues: true,
    });
  }

  async update(id: string, baseDto: any): Promise<{ result: string }> {
    await this.repo.update(id, baseDto);
    return { result: 'success' };
  }

  async findOne(id: number): Promise<any> {
    const foundEntity = await this.repo.findOne({
      where: { id: id as any },
    });
    return plainToInstance(CourseDto, foundEntity, {
      excludeExtraneousValues: true,
    });
  }

  async softDelete(id: number): Promise<{ result: string }> {
    await this.repo.softDelete(id);
    return { result: 'success' };
  }
}
