//<script language="javascript">

ns4 = (document.layers)? true:false;
ie4 = (document.all)? true:false;

isFirefox = (navigator.userAgent.indexOf("Firefox")!=-1);
isSafari = (navigator.userAgent.indexOf("Safari")!=-1);

//document.writeln("Appversion = " + navigator.appVersion + "<br>");
//document.writeln("userAgent = " + navigator.userAgent + "<br>");
//document.writeln("userAgent index = " + navigator.userAgent.indexOf("Safari")  + "<br>");
//document.writeln("userAgent index FF = " + navigator.userAgent.indexOf("Firefox")  + "<br>");

//alert("firefox = " + isFirefox);

//	document.write("<img src='http://img46.exs.cx/img46/3493/spreadfirefox180600mv.gif'>")
//if (navigator.userAgent.indexOf("MSIE")!=-1)
//	document.write("<img src='http://img33.exs.cx/img33/3916/getfirefox180604pu.gif'>")

function show(id) {
	if (ns4) document.layers[id].visibility = "show"
	else if (ie4) document.all[id].style.visibility = "visible"
}

function hide(id) {
	if (ns4) document.layers[id].visibility = "hide"
	else if (ie4) document.all[id].style.visibility = "hidden"
}

function expandIt(whichElo, whichImo) {
    //whichIm = event.srcElement;
    whichEl = document.getElementById(whichElo);
    whichIm = document.getElementById(whichImo);
    //if( ns4 ) {
	//	document.layers[whichEl].visibility = "show"
   	//} else {

		if (whichEl.style.display == "none") {
		    whichEl.style.display = "";
		    whichEl.style.visibility = "visible";
		    whichIm.src = "images/triUp.gif";        
		}
		else {
		    whichEl.style.display = "none";
		    whichEl.style.visibility = "hidden";
		    whichIm.src = "images/triDown.gif";
		}
	//}	
}

function loadpage(id) {
	
	//alert("ns4 = "  + ns4);
	//if( ns4 ) {
		//alert("hi");
	//var idstring = navigator.userAgent;
	var idstring = new String(navigator.appVersion);
	//alert("id = " + idstring);
	var iVer = idstring.split(" ");
	//var iver = Math.abs(idstring);
	//alert("ver = " + iVer[0]);

	var elm = document.getElementById(id);
	if( iVer[0] == "5.0" ) {
	
		elm.style.visibility = "visible";
		elm.style.display = "show";
	} else {
		//alert("in else");
		elm.style.display = "none";

	
	}
	//document.writeln(idstring);
}


function glLastModified()
{
	//s.substr(6,4)+"/"+s.substr(0,5)
	var s = new String(document.lastModified);
	//alert(s + " - " + isFirefox);
	
	var s2="";

	if( isFirefox || isSafari ) 
		s2 = new String(s);
	else
		s2 = new String(s.substr(6,4)+"/"+s.substr(0,5)+ s.substr(10))
	
	document.write(s2);
}

function glLastModifiedDate()
{
	//s.substr(6,4)+"/"+s.substr(0,5)
	var s = new String(document.lastModified);
	//alert(s + " - " + isFirefox);

	var s2="";
	//var s2 = new String(s.substr(6,4)+"/" + s.substr(0,5))
	
	if( isFirefox || isSafari) 
		s2 = new String(s);
	else
		s2 = new String(s.substr(6,4)+"/" + s.substr(0,5));
	
	document.write(s2);
}

function blankline()
{
	return "<TR><TD height=2></TD></TR>";
}

function getWeeks()
{
	var i;
	var iHalf = this.half; //1;
	var iCurrWeek = this.currweek; //5; 
	var iCurrDone = this.currdone;  //4;
	var sDate = this.startdate;  //new Date(2004,3,21);
	var sDate2 = new Date();  // Temp field
	var sDay = "m";
	var weekTypes = this.weektypes; //new Array("w","w","w","w","w","b","Holiday;Memorial Day","b",
		//"w","w","w","b","Fun Nite I;4 Man Scramble");
	var weeks = new Array();

	var summ = this.summ; //new Array("Low Net<br>for week", "Hcp List<BR>for week",
		//"Standings<BR>after week");
	var summSuf = this.summsuf;  //new Array("lnet", "hcp", "stan");

	//alert(this.weektypes);
	//alert("holidays length = " + this.holidays.length);

	var wk = 1;
	var bSpecial = false;
	
	for(i=0; i< this.weektypes.length; i++) {

		var wtypes = this.weektypes[i];
		var weekstext = "";
		
		for(var j=0; j<this.holidays.length; j++ ) {
			//alert(this.holidays[j] + "_" + sDate );
			//alert(typeof(this.holidays[j]) + "_" + typeof(sDate) );
			
			if( this.holidays[j].toString(20) == sDate.toString(20) ) {
				//alert("match!");
				wtypes = this.holidays[j+1];
				//alert("wtypes = " + wtypes);
				i--;
				weeks[weeks.length] = blankline();
				bSpecial = true;
			}
			j++;
		}
		
		//alert("wtypes = " + wtypes+ " " + i);
		
		//var wtypes = this.weektypes[i];
		//var weekstext = "";

		if(wtypes == "b" ) {
			//weekstext = blankline(); //"<TR><TD height=2></TD></TR>";
			//weeks[weeks.length] = weekstext;
			weeks[weeks.length] = blankline();
			
			continue;
		}

		var strTemp = new String(wtypes);
		
		//alert(strTemp);
		weekstext = "<TR><td class=\"smbox\">";
		
		if(wtypes == "wt") {
			wtypes = "w";
			sDay = "t";
			sDate2.setTime(sDate.getTime() + 1 * 24 * 60 * 60 * 1000);
		} else {
			sDate2.setTime(sDate.getTime());
			sDay = "m";
		}


		switch ( wtypes ) {
			case "w":
			case "W":
				//weeks[i] = sDate.toDateString();
				weekstext += "Week "+ wk + " ";
				//wk += 1;
				//sDate += 7;
				break;
			default:
				//weeks[i] += weekTypes[i];
				//alert(strTemp);
				weekstext += strTemp.substr(0,strTemp.indexOf(';'));
				break;
		}
		weekstext += " (";
		if(sDay == "t") {weekstext += "Tue "}
		weekstext += (sDate2.getMonth()+1) + "/" + sDate2.getDate() + ")</td>";
		
		sTemp = iHalf + "_" + wk;
		
		weekstext += "<td class=\"smbox\">";

		switch ( wtypes ) {
			case "w":
			case "W":
				if(wk <= iCurrWeek) {
					weekstext += "<A HREF=\"" + this.schprefix + sTemp + ".htm\">Schedule</A>&nbsp;&nbsp;";
					if( wk <= iCurrDone ) {
						weekstext += "<A HREF=\"res_" + sTemp + ".htm\">Results</A>";
					}
				}
				break;
			default:
				//weeks[i] += "<b>" + strTemp.substr(strTemp.indexOf(';')+1) + "</b>";
				weekstext += strTemp.substr(strTemp.indexOf(';')+1);
				break;
		}
		
		weekstext += "</td></tr>";

		weeks[weeks.length] = weekstext;
		
		if( bSpecial ) {
			weeks[weeks.length] = blankline();
			bSpecial = false;
		}
		
		if( wtypes == "w" ) 
			wk++;
		
		//if(wk > 5) {
		//	alert("sdate = " + sDate + "  sDate2 = " + sDate2);
		//}
		
		sDate.setTime(sDate.getTime() + 7 * 24 * 60 * 60 * 1000);

	}
	
	for(i=0; i< weeks.length; i++) {
		//if( i==0) alert(weeks[i]);
		document.writeln(weeks[i]);
	}

	//return weeks;
}

function getLabel()
{
    return this.heading;
}

function getSumm()
{
	var i,j;
	var sTemp;
	
	if( this.currdone > 0 ) {
		for(i=0;i<this.summ.length; i++) {
		    if( this.summsuf[i] == "hcpa" )
				document.writeln("<TR><TD colspan=2></TD></TR>");
			else
				document.writeln("<TR><TD colspan=2><hr></TD></TR>");
							
			document.writeln("<TR><TD class=\"smbox9\" >");
			document.write(this.summ[i]);
			document.write("</TD><TD class=\"smbox\"  valign=bottom>");
							
			for(j=1;j<=this.currdone;j++) {
				sTemp = "_" + this.half + "_" + j.toString();
				document.writeln("<A href=\"" + this.summsuf[i]+ sTemp + ".htm\">"+j+"</A>&nbsp;");
			}
							
			document.write("</TD></TR>");
		}
	}
}

function glWeeks(heading, half, currweek, currdone, startdate, weektypes, summ, summsuf, holidays) {
	this.heading = heading;
	//alert(this.heading);
	this.half = half;
	this.currweek = currweek;
	this.currdone = currdone;
	this.startdate = startdate;
	this.weektypes = weektypes;
	this.summ = summ;
	this.summsuf = summsuf;
	//alert(">>" + weektypes);
	//alert(">>" + this.weektypes);
	this.getWeeks = getWeeks;
	this.getSumm = getSumm;
	this.schprefix = "gl20_";
	this.holidays = holidays;
	this.getLabel = getLabel;
}

function cardWindow(cardfile) {
    window.open("images/" + cardfile, "_blank", "toolbar=no, scrollbars=yes, resizable=yes, top=50, left=50, width=400, height=600");
}

//</script>