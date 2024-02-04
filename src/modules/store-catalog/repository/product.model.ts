import { Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({
  tableName: "products",
  timestamps: false,
})
export default class ProductStoreModel extends Model {
  @PrimaryKey
  @Column({ allowNull: false })
  id: string;

  @Column({ allowNull: false })
  name: string;

  @Column({ allowNull: false })
  description: string;

  @Column({ allowNull: true })
  purchasePrice: number;

  @Column({ allowNull: true })
  declare stock: number;

  @Column({ allowNull: true })
  declare salesPrice: number;

  @Column({allowNull: true})
  declare createdAt: Date;

  @Column({allowNull: true})
  declare updatedAt: Date;
}
