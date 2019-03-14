// from data.js
var tableData = data;
//console.log(tableData)

var tbody = d3.select('tbody');

var newRows = tableData.forEach((newRow) => {
  var row = tbody.append('tr');
  Object.entries(newRow).forEach(([key, value]) => {
    var cell = tbody.append('td').text(value);
  });
});


var submit = d3.select('#filter-btn');

submit.on('click', function() {
  d3.event.preventDefault();
  var formInputElement = d3.select('#datetime')
  var inputValue = formInputElement.property('value');
  var filterTableData = tableData.filter(filterData => filterData.datetime === inputValue);

  console.log(filterTableData);
});
