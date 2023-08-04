import Sequelize from "sequelize";

export default function (sequelize) {
  return sequelize.define(
    "tbl_bbs",
    {
      b_seq: {
        autoIncrement: true,
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      b_title: {
        type: Sequelize.STRING(125),
        allowNull: true,
      },
      b_content: {
        type: Sequelize.STRING(1000),
        allowNull: true,
      },
      b_nickname: {
        type: Sequelize.STRING(125),
        allowNull: true,
      },
      b_password: {
        type: Sequelize.STRING(125),
        allowNull: true,
      },
      b_ccode: {
        type: Sequelize.STRING(6),
        allowNull: true,
      },
      b_date: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      b_viewcount: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      b_image: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      b_origin_image: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "tbl_bbs",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "b_seq" }],
        },
      ],
    }
  );
}
