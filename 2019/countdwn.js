//<script language="javascript">
<!-- Activate Cloaking 

/*
        Javascript Countdown Timer (version 1.0)
        Copyright (C) 1997 Andrew Turi  All Rights Reserved.
        Permission given to use this script provided that 
        this copyright notice remains in tact.
        [E-mail: andrew@2-cool.com]
*/

var timerID;
var timerRunning = false;
var today = new Date();
var count = new Date();
var secPerDay = 0;
var minPerDay = 0;
var hourPerDay = 0;
var secsLeft = 0;
var secsRound = 0;
var secsRemain = 0;
var minLeft = 0;
var minRound = 0;
var dayRemain = 0;
var minRemain = 0;
var Expire = 0;
var timeRemain = 0;
var timeRemain2 = 0;
var timeUp = "Type Anything You Want"    // enter text to be displayed when countdown is finished
var time = "0 days, 0 hours, 0 minutes, 0 seconds" //do not modify this text

function stopclock (){
if(timerRunning)
clearTimeout(timerID);
timerRunning = false;
}

function startclock () {
stopclock();
showtime();
}


function showtime () {
	today = new Date();

	//unmark either of the two following lines

	//count = new Date("January 1, 2000");   // enter date to count down to (use the same format)
	count = new Date(document.clock.indate.value);   //let the user enter the date to count down to in the input box


	secsPerDay = 1000 ;
	minPerDay = 60 * 1000 ;
	hoursPerDay = 60 * 60 * 1000;
	PerDay = 24 * 60 * 60 * 1000;
	PerYear = 24 * 60 * 60 * 1000 * 365;
	Expire = (count.getTime() - today.getTime())

	/*Seconds*/
	secsLeft = (count.getTime() - today.getTime()) / minPerDay;
	secsRound = Math.round(secsLeft);
	secsRemain = secsLeft - secsRound;
	secsRemain = (secsRemain < 0) ? secsRemain = 60 - ((secsRound - secsLeft) * 60) : secsRemain = (secsLeft - secsRound) * 60;
	secsRemain = Math.round(secsRemain);


	/*Minutes*/
	minLeft = ((count.getTime() - today.getTime()) / hoursPerDay);
	minRound = Math.round(minLeft);
	minRemain = minLeft - minRound;
	minRemain = (minRemain < 0) ? minRemain = 60 - ((minRound - minLeft)  * 60) : minRemain = ((minLeft - minRound) * 60);
	minRemain = Math.round(minRemain - 0.495);

	/*Hours*/
	hoursLeft = ((count.getTime() - today.getTime()) / PerDay);
	//alert("hoursLeft = " + (count.getTime() / PerDay) );
	hoursRound = Math.round(hoursLeft);
	//alert("hoursRound = " + hoursRound);
	hoursRemain = hoursLeft - hoursRound;
	//alert("hoursRemain = " + hoursRemain);
	hoursRemain = (hoursRemain < 0) ? hoursRemain = 24 - ((hoursRound - hoursLeft)  * 24) : hoursRemain = ((hoursLeft - hoursRound) * 24);
	//hoursRemain = Math.round(hoursRemain - 0.5);
	hoursRemain = Math.round(hoursRemain - 0.5);
	//alert("compute = " + ((hoursLeft - hoursRound) * 24));
	//alert(hoursRemain);
	
	/*Days*/
	daysLeft = ((count.getTime() - today.getTime()) / PerYear);
	daysRound = Math.round(daysLeft);
	//alert("daysLeft = " + daysLeft + "  daysRound = " + daysRound);
	daysRemain = daysLeft - daysRound;
	daysRemain = (daysRemain < 0) ? daysRemain = 365 - ((daysRound - daysLeft)  * 365) : daysRemain = ((daysLeft - daysRound) * 365);
	//alert("daysRemain = " + daysRemain);
	daysRemain = daysRemain - 0.5;
	//alert("daysRemain = " + daysRemain);
	daysRemain = Math.round(daysRemain);
	//alert("daysRemain = " + daysRemain);

	daysLeft = ((count.getTime() - today.getTime()) / PerDay);
	//alert("daysLeft = " + daysLeft);
	daysLeft = (daysLeft);
	daysRound = Math.round(daysLeft);
	daysRemain2 = daysRound;
	//alert("daysRemain2 = " + daysRemain2);

	if (hoursRemain == 24) {
		//alert("hi");
		hoursRemain = 0;
		daysRemain++;
	}


	/*Years*/
	yearsLeft = ((count.getTime() - today.getTime()) / PerYear);
	yearsLeft = (yearsLeft);
	yearsRound = Math.round(yearsLeft);
	yearsRemain = yearsRound;

	/*Fixes*/
	if (yearsRemain == 1) yearsRemain = yearsRemain + " year, ";
	        else yearsRemain = yearsRemain + " years, "; 

	if (daysRemain == 1) daysRemain = daysRemain + " day, ";
	        else daysRemain = daysRemain + " days, "; 

	if (daysRemain2 == 1) daysRemain2 = daysRemain2 + " day, ";
	        else daysRemain2 = daysRemain2 + " days, "; 

	if (hoursRemain == 1) hoursRemain = hoursRemain + " hour,  ";
	        else hoursRemain = hoursRemain + " hours,  ";

	if (minRemain == 1) minRemain = minRemain + " minute,  ";
	        else minRemain = minRemain + " minutes,  ";

	if (secsRemain == 1) secsRemain = secsRemain + " second";
	        else secsRemain = secsRemain + " seconds";


	/*Time*/
	timeRemain = yearsRemain + daysRemain + hoursRemain + minRemain + secsRemain;//shows the number of days, hours, secs, minutes until...
	//timeRemain2 = daysRemain2 + hoursRemain + minRemain + secsRemain;//shows the number of years, days, hours, secs, minutes until...
	timeRemain2 = daysRemain + hoursRemain + minRemain + secsRemain;//shows the number of years, days, hours, secs, minutes until...
	timeRemain3 = daysRemain2//shows the days until...

	window.status = "";
	//document.clock.face.value = timeRemain;
	document.clock.face2.value = timeRemain2;
	//document.clock.face3.value = timeRemain3;
	timerID = setTimeout("showtime()",1000);
	timerRunning = true;

	if (Expire <= 0){
	    //document.clock.face2.value = time;  // choose either "time" or "timeUp"  (without quotes)
		stopclock();
	}

}
// De-activate Cloaking --> 
// -->

function simplecountdwn() {

	today = new Date();

	BigDay = new Date("April 19, 2004 16:00:00")
	msPerDay = 24 * 60 * 60 * 1000 ;
	timeLeft = (BigDay.getTime() - today.getTime());
	e_daysLeft = timeLeft / msPerDay;
	daysLeft = Math.floor(e_daysLeft);
	e_hrsLeft = (e_daysLeft - daysLeft)*24;
	hrsLeft = Math.floor(e_hrsLeft);
	minsLeft = Math.floor((e_hrsLeft - hrsLeft)*60);
	document.write("There are only<BR> <H4>" + daysLeft + " days " + hrsLeft +" hours and " + minsLeft + " minutes left </H4> Until the start of the season!<P>");

}

