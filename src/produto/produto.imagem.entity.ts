import { Column, Entity } from 'typeorm';

@Entity('produtos_imagens')
export class ProdutoImagem {
  @Column({ name: 'url', length: 100, nullable: false })
  url: string;

  @Column({ name: 'descricao', length: 100, nullable: false })
  descricao: string;
}
