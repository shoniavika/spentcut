
data = [];

fetch('transactions.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
});


spent = 0;
const limit = 600;

var month = new Array();
month[1] = "January";
month[2] = "February";
month[3] = "March";
month[4] = "April";
month[5] = "May";
month[6] = "June";
month[7] = "July";
month[8] = "August";
month[9] = "September";
month[0] = "October";
month[11] = "November";
month[12] = "December";

function appendData(data) {
    for (var i = 0; i < data.length; i++) {
        this.data[i] = {
            "category": data[i].category,
            "location": data[i].location,
            "amount": parseInt(data[i].amount),
            "month": data[i].month,
            "year": data[i].year
        }
    }
}

function drawChart() {
    var arr = getDataForChart();
    var data = google.visualization.arrayToDataTable(arr);

    var options = {
        title: 'Monthly Spendings'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}

function getMonth() {
    date = document.getElementById("bdaymonth").value;
    resYear = date.slice(0, 4);
    
    partialMonth = parseInt(date.slice(5));
    if (partialMonth[0] == "0") {
        partialMonth = parseInt(date.slice(6));
    }
    
    console.log("PARDATEE ", partialMonth)
    resMonth = month[partialMonth];
    console.log("RES MONTH ", resMonth);

    google.charts.setOnLoadCallback(drawChart);

    for (var i = 0; i < data.length; i++) {
        if (resMonth == data[i].month && resYear == data[i].year) {
            spent += data[i].amount;
        }
    }
    if (limit - spent < 0) {
        document.getElementById("div1").innerHTML = "<span style='color: red;'>" + "Spent:  "+ spent.toString() + "GEL" + "<br>" + "Have Left:  " + (limit - spent).toString() + "GEL" + "</span>";
    } else {
        document.getElementById("div1").innerText = "Spent:  "+ spent.toString() + "GEL\n" + "Have Left:  " + (limit - spent).toString() + "GEL";
    }
}


function getDataForChart() {
    var categories = {
        "Food": 0, 
        "Gas": 0,
        "Mobile": 0, 
        "Leisure": 0, 
        "Shopping": 0
    };
    retData = [['Category', 'Spent']];

    date = document.getElementById("bdaymonth").value;

    partialMonth = parseInt(date.slice(5))
    if (partialMonth[0] == "0") {
        partialMonth = parseInt(date.slice(6));
    }
    resMonth = month[partialMonth];
    console.log("resMon", resMonth);
    
    for (var i = 0; i < data.length; i++) {
        console.log("dataMon", data[i].month)
        if (resMonth == data[i].month) {
            
        console.log("categoryyy ", data[i].category)
        categories[data[i].category] += 1;
        }
    }

    for (var key in categories) {
        let arr = [key, categories[key]];
        
        retData.push(arr);
    }

    console.log("redData => ", retData);

    return retData;
}




function populateTable() {
    var conceptName = $('#categorySelector').find(":selected").text();

    $(document).ready(function () { 
  
        $.each(data, function (key, value) { 
            if (conceptName == value.category && month == value.month)
                transact += '<tr>'; 
                transact += '<td>' +  
                    value.amount + '</td>'; 

                transact += '<td>' +  
                    value.location + '</td>'; 

                transact += '</tr>'; 
        }); 
            
        //INSERTING ROWS INTO TABLE  
        $('#table').append(transact); 
    }); 
}