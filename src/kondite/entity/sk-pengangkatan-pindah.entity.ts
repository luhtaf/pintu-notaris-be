import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { KonditeEntity } from './kondite.entity';

@Entity()
export class SkPengangkatanPindahEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nomorSurat: string;

  @Column({ type: 'date' })
  tanggalSurat: Date;

  @Column()
  file: string;

  @OneToOne(() => KonditeEntity, (kondite) => kondite.skPengangkatanPindah)
  kondite: KonditeEntity;
}
