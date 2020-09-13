/*
*******************************************
Scott Horsburgh
future_value Application
06/18/2019
*******************************************
*/

//*****************************************
//	Main future value program starts here
//*****************************************
var year = new Array();
var numYears = new Array();
var interest = new Array();
var invest = new Array();
var again = "y";

do{
	investmentInput();
	rateInput();
	yearsInput();
	displaysOutput();
	again = prompt("Continue with more Entries? (y/n)", "y");
}
while(again == "y");

//******************************************
//	Main future value program ends here
//******************************************
/*
********************************************
			functions below
********************************************
*/
//function for investment (prompt) input and check if it's a number
function investmentInput(){
	do{	
		var investment = prompt("Enter investment amount as xxxxx.xx ", 10000);
		window.investment = parseFloat(investment);
		if(!isNaN(investment)){
			invest[invest.length] = investment;
		}
		else{
			alert("Investment must be a number!");
		}
	}
	while(isNaN(investment));
};
//function for rate (prompt) input and check if it's a number
//also checks if number is less than 0 or greater than 15
function rateInput(){
	do{
		var rate = prompt("Enter interest rate as xx.x ", 7.5);
		window.rate = parseFloat(rate);
		if(isNaN(rate) || rate > 0 && rate < 15){
			interest[interest.length] = rate;
		}
		else{
			alert("Rate must be greater than 0 and less than 15!");
		}
	}
	while(isNaN(rate) || rate <= 0 || rate >= 15);
};
//function for years (prompt) input and check if it's number
function yearsInput(){
	do{
		var years = prompt("Enter number of years ", 10);
		window.years = parseInt(years);	
		if(!isNaN(years)){
			numYears[numYears.length] = years;
		}
		else{
			alert("Invalid characters! Years must be numbers.");
		}
	}
	while(isNaN(years) || years <= 0);
};
//function to display output from prompt values and uses function
//interestEachYear() to display the interest and value based on how many years
function displaysOutput(){
	document.write(" Investment amount = " + investment + '&nbsp &nbsp' + 
					" Interest rate = " + rate + '&nbsp &nbsp' + 
					" Years = " + years + '&nbsp &nbsp<br><br>');
	interestEachYear();
};
//function to find out interest based on how many years
function interestEachYear(){
	var interest = (investment *(rate / 100));
	var futureInterest = (interest * (rate / 100));
	 for (var i = 1; i <= years; i++) {
	 	window.year +=year[i];
	 	interest += futureInterest ;
	 	document.write(" Year = " + i + '&nbsp &nbsp');
	 	document.write(" Interest = " + interest.toFixed(2) + '&nbsp &nbsp');
       	document.write("Value = "+  parseInt(investment + interest) + "<br>");
    }
    document.write('<br><br>');
};	