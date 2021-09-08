const paginate = (items) => {
  let itemsPerPage = 9;
  let totalItem = items.length;
  let totalPages = Math.ceil(totalItem / itemsPerPage);
  const newItems = Array.from({ length: totalPages }, (_, index) => {
    let start = index * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  });
  return newItems;
};

export default paginate;
