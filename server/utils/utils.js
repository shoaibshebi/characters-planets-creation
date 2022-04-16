const knex = require("../connect");

const paginationData = (reqData) => {
  var pagination = {};
  var pageSize = reqData.pageSize || 10;
  var page = reqData.page || 1;

  if (pageSize > 100) pageSize = 100;
  if (page < 1) page = 1;

  var offset = (page - 1) * pageSize;

  return Promise.all([
    knex.count("* as count").from(reqData.table).first(),
    knex.select("*").from(reqData.table).offset(offset).limit(pageSize),
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

module.exports = {
  paginationData,
};
