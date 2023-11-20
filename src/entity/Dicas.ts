import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Dicas {
  static create(arg0: {
    nome: any;
    email: any;
    tipo: any;
    titulo: any;
    dica: any;
    dataEnvio: any;
  }) {
    throw new Error("Method not implemented.");
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  titulo: string;

  @Column()
  tipo: string;

  @Column()
  dica: string;

  @CreateDateColumn({ type: "timestamp" })
  dataEnvio: Date;
}
