const knex = require("../connect");

const paginationData = (reqData) => {
  let pagination = {};
  let pageSize = reqData.pageSize || 10;
  let page = reqData.page || 1;

  if (pageSize > 100) pageSize = 100;
  if (page < 1) page = 1;

  let offset = (page - 1) * pageSize;
  let id = reqData.table[0] + "_id";

  return Promise.all([
    knex.count("* as count").from(reqData.table).first(),
    knex
      .select("*")
      .from(reqData.table)
      .offset(offset)
      .limit(pageSize)
      .orderBy(id, "desc"),
  ]).then(([total, rows]) => {
    let count = total.count;
    pagination.total = count;
    pagination.pageSize = pageSize;
    pagination.offset = offset;
    pagination.page = page;
    return {
      pagination,
      data: rows,
    };
  });
};

const compressImg = (picture_url) => {
  if (picture_url.includes("?")) {
    let url = picture_url.split("?")[0];
    return `${url}?auto=compress&cs=tinysrgb&dpr=1&w=500`;
  }
  return picture_url;
};

module.exports = {
  compressImg,
  paginationData,
};
