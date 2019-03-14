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
<<<<<<< HEAD

submit.on('click', function() {
  d3.event.preventDefault();
  var formInputElement = d3.select('#datetime')
  var inputValue = formInputElement.property('value');

  console.log(inputValue);
  console.log(tableData);

  var filterTableData = tableData.filter(filterData => filterData.datetime === inputValue);

  console.log(filterTableData);
});
=======
var formInputValue = d3.select('#datetime');

var tableFilter = submit.on('click', function(){
  var inputValue = formInputValue.property('value');
  var filterValue = tableData.datetime === inputValue;
  console.log(inputValue);
})

var filter = tableData.forEach(filterData => filterData.filter(inputValue));

console.log(filter);



// second code
/*

// date form: <input class="form-control" id="datetime" type="text" placeholder="1/11/2011">
var dateForm = d3.select('#datetime');
// possible events: change,input, ValueChange;
var filterBtn = d3.select('#filter-btn');
// possible events: submit, click
// potential event: invalid

// listen event: input
/*
var formEvent = dateForm.on(/*'change*',*/  //function() {
  // value change
//});

// listen event: click
//var filterEvent = filterBtn.on('click', function() {
  // d3.event.preventDefault()

  // filter table data
//});


/*
var dateForm = d3.select('#datetime')
  .on('')
  .on('')

  */


// first code

// <input type='text' class='form-control' id='datetime'>    d3.select('#datetime')
  // possible events: change,input, ValueChange
// <button id='filter-btn' type='submit'>                   d3.select('#filter-btn')
  // event: submit
    // potential event: invalid
>>>>>>> c8eeeb7ca3439b296c4d087154230618f079a930
