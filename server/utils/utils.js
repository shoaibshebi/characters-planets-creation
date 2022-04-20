const knex = require("../connect");

const paginationData = (reqData) => {
  var pagination = {};
  var pageSize = reqData.pageSize || 10;
  var page = reqData.page || 1;

  if (pageSize > 100) pageSize = 100;
  if (page < 1) page = 1;

  var offset = (page - 1) * pageSize;
  var id = reqData.table[0] + "_id";

  return Promise.all([
    knex.count("* as count").from(reqData.table).first(),
    knex
      .select("*")
      .from(reqData.table)
      .offset(offset)
      .limit(pageSize)
      .orderBy(id, "desc"),
  ]).then(([total, rows]) => {
    var count = total.count;
    var rows = rows;
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
