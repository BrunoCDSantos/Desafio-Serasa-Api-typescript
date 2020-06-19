/* eslint-disable camelcase */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import companys from './companys';

@Entity('accounts')
class accounts {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => companys)
  @JoinColumn({ name: 'id_company' })
  id_company: string;

  @Column()
  description: string;

  @Column()
  pay: boolean;

  @Column()
  value: string;

  @Column()
  file: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}

export default accounts;
