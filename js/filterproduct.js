
function chksize(){
	var strsize = "";
	var totcntSZ = document.getElementById("totcntSize").value;
	for (sz = 1; sz <= totcntSZ; sz++) {
		if (document.getElementById("chksize"+sz).checked != ""){
			if (strsize == ""){
				strsize = document.getElementById("chksize"+sz).value;
				}else{
				strsize = strsize + "," + document.getElementById("chksize"+sz).value;
			}
		}
	}
	document.getElementById("hidchksize").value = strsize;
	loadsrchxml();
}

function chkfinish(){
	var strfinish = "";
	var totcntFin = document.getElementById("totcntFinish").value;
	for (sz = 1; sz <= totcntFin; sz++) {
		if (document.getElementById("chkfinish"+sz).checked != ""){
			if (strfinish == ""){
				strfinish = document.getElementById("chkfinish"+sz).value;
				}else{
				strfinish = strfinish + "," + document.getElementById("chkfinish"+sz).value;
			}
		}
	}
	document.getElementById("hidchkfinish").value = strfinish;
	loadsrchxml();
}

function chkdesign(){
	var strdesign = "";
	var totcntDsg = document.getElementById("totcntDesign").value;
	for (sz = 1; sz <= totcntDsg; sz++) {
		if (document.getElementById("chkdesign"+sz).checked != ""){
			if (strdesign == ""){
				strdesign = document.getElementById("chkdesign"+sz).value;
				}else{
				strdesign = strdesign + "," + document.getElementById("chkdesign"+sz).value;
			}
		}
	}
	document.getElementById("hidchkdesign").value = strdesign;
	loadsrchxml();
}

function chkcategory(){
	var strcategory = "";
	var totcntCat = document.getElementById("totcntcategory").value;
	for (sz = 1; sz <= totcntCat; sz++) {
		if (document.getElementById("chkcategory"+sz).checked != ""){
			if (strcategory == ""){
				strcategory = document.getElementById("chkcategory"+sz).value;
				}else{
				strcategory = strcategory + "," + document.getElementById("chkcategory"+sz).value;
			}
		}
	}
	document.getElementById("hidchkcategory").value = strcategory;
	loadsrchxml();
}

function chkbyspace(){
	var sp;
	var strspace = "";
	var totcntspace = document.getElementById("totcntbyspace").value;
	for (sp = 1; sp <= totcntspace; sp++) {
		if (document.getElementById("chkbyspace"+sp).checked == true){
			if (strspace == ""){
				strspace = document.getElementById("chkbyspace"+sp).value;
				}else{
				strspace = strspace + "," + document.getElementById("chkbyspace"+sp).value;
			}
		}
	}
	document.getElementById("hidchkbyspace").value = strspace;
	loadsrchxml();
}
function chkapplication(){
	var strapplication = "";
	var totcntapp = document.getElementById("totcntApplication").value;
	for (sz = 1; sz <= totcntapp; sz++) {
		if (document.getElementById("chkapplication"+sz).checked != ""){
			if (strapplication == ""){
				strapplication = document.getElementById("chkapplication"+sz).value;
				}else{
				strapplication = strapplication + "," + document.getElementById("chkapplication"+sz).value;
			}
		}
	}
	document.getElementById("hidchkbyapp").value = strapplication;
	loadsrchxml();
}

function chkicons(){
	var stricons = "";
	var totcnticons = document.getElementById("totcntbyicons").value;
	for (sz = 1; sz <= totcnticons; sz++) {
		if (document.getElementById("chkbyicons"+sz).checked != ""){
			if (stricons == ""){
				stricons = document.getElementById("chkbyicons"+sz).value;
				}else{
				stricons = stricons + "," + document.getElementById("chkbyicons"+sz).value;
			}
		}
	}
	document.getElementById("hidchkbyicons").value = stricons;
	loadsrchxml();
}

function loadsrchxml(){
	var hidfltrcat = document.getElementById("hidfltrcat").value;
	var hidchksize = document.getElementById("hidchksize").value;
	var hidchkfinish = document.getElementById("hidchkfinish").value;
	var hidchkdesign = document.getElementById("hidchkdesign").value;
	var hidchkcategory = document.getElementById("hidchkcategory").value;
	var hidchkbyspace = document.getElementById("hidchkbyspace").value;
	var hidchkbyapplication = document.getElementById("hidchkbyapp").value;
	var hidchkbyicons = document.getElementById("hidchkbyicons").value;
	loadproduct('1',hidfltrcat,hidchksize,hidchkfinish,hidchkdesign,hidchkcategory,hidchkbyspace,hidchkbyapplication,hidchkbyicons);
}

function loadproduct(fltrOn,strpcat,strsize,strfinish,strdesign,strcategory,strbyspace,strbyapplication,strbyicons){
  $(".preloader").fadeIn("slow");
  var qrystr = "?fltrIsOn="+fltrOn+"&strpcat="+strpcat+"&strsize="+strsize+"&strfinish="+strfinish+"&strdesign="+strdesign+"&strcategory="+strcategory+"&strbyspace="+strbyspace+"&strbyapplication="+strbyapplication+"&strbyicons="+strbyicons;
  var xhr = new XMLHttpRequest();
	xhr.open("POST", "productajx.aspx"+qrystr, true);
	xhr.onreadystatechange = function() {
 	 if (xhr.readyState == 4) {
   	 document.getElementById("pdatadiv").innerHTML = xhr.responseText;
	 $(".preloader").fadeOut("slow");
	 $(".innerloading").fadeOut("slow");
	 
	 document.getElementById("divtotskucnt").innerHTML = "<strong style='font-size: 16px;'>"+document.getElementById("hidtotalsku").value+"</strong> products search."; 
  	}
	}
 
	xhr.send();
 } 
  
 function loadfilterdiv(fltrOn,strpcat){
  var strsize = document.getElementById("hidchksize").value;
  var strfinish = document.getElementById("hidchkfinish").value;
  var strdesign = document.getElementById("hidchkdesign").value;
  var strcategory = document.getElementById("hidchkcategory").value
  var strbyspace = document.getElementById("hidchkbyspace").value;
  var strbyapplication = document.getElementById("hidchkbyapp").value;
  var strbyicons = document.getElementById("hidchkbyicons").value;
  var qrystr = "?fltrIsOn="+fltrOn+"&strpcat="+strpcat+"&strsize="+strsize+"&strfinish="+strfinish+"&strdesign="+strdesign+"&strcategory="+strcategory+"&strbyspace="+strbyspace+"&strbyapplication="+strbyapplication+"&strbyicons="+strbyicons;
  var xhr = new XMLHttpRequest();
	xhr.open("POST", "filterajx.aspx"+qrystr, true);
	xhr.onreadystatechange = function() {
 	 if (xhr.readyState == 4) {
   	 document.getElementById("Divfilter").innerHTML = xhr.responseText;
	 document.getElementById("divtotskucnt").innerHTML = "<strong style='font-size: 16px;'>"+document.getElementById("hidtotalsku").value+"</strong> products search.";  
  	}
	}
	xhr.send();
 }
 
  function loadsearch(strpcat){
  $(".preloader").fadeIn("slow");
  var strsrchtxt = document.getElementById("txtsearch").value;
  var qrystr = "?strpcat="+strpcat+"&strsearch="+strsrchtxt;
  var xhr = new XMLHttpRequest();
	xhr.open("POST", "productajx.aspx"+qrystr, true);
	xhr.onreadystatechange = function() {
 	 if (xhr.readyState == 4) {
   	 document.getElementById("pdatadiv").innerHTML = xhr.responseText;
	 $(".preloader").fadeOut("slow");
	 $(".innerloading").fadeOut("slow");
  	}
	}
	xhr.send();
 }
 
 function citysearch(stateid,divCity,status){
  document.getElementById("innerloading").style.display="block";
  if (status==1){
  var qrystr = "?stateid="+stateid+"&status=1";
  }
  else{
  var qrystr = "?stateid="+stateid;
  }
  var xhr = new XMLHttpRequest();
	xhr.open("POST", "cityLoc.aspx"+qrystr, true);
	xhr.onreadystatechange = function() {
 	 if (xhr.readyState == 4) {
   	 document.getElementById(divCity).innerHTML = xhr.responseText;
	 document.getElementById("innerloading").style.display="none";
  	}
	}
	xhr.send();
 }
 
  function citysearchdealer(statename,divCity){
  document.getElementById("innerloading").style.display="block";
  var qrystr = "?statename="+statename;
  var xhr = new XMLHttpRequest();
	xhr.open("POST", "cityLoc-dealer.aspx"+qrystr, true);
	xhr.onreadystatechange = function() {
 	 if (xhr.readyState == 4) {
   	 document.getElementById(divCity).innerHTML = xhr.responseText;
	 document.getElementById("innerloading").style.display="none";
  	}
	}
	xhr.send();
 }
 
   function citysearch_franchisee(stateid,divCity){
  document.getElementById("innerloading").style.display="block";
  var qrystr = "?statename="+stateid;
  var xhr = new XMLHttpRequest();
	xhr.open("POST", "cityLoc-franchise.aspx"+qrystr, true);
	xhr.onreadystatechange = function() {
 	 if (xhr.readyState == 4) {
   	 document.getElementById(divCity).innerHTML = xhr.responseText;
	 document.getElementById("innerloading").style.display="none";
  	}
	}
	xhr.send();
 }
 
  function searchlist(url,state,city,DivId){
  document.getElementById("innerloadingsh").style.display="block";
  var qrystr = "?state="+state+"&city="+city;
  var xhr = new XMLHttpRequest();
	xhr.open("POST", url+qrystr, true);
	xhr.onreadystatechange = function() {
 	 if (xhr.readyState == 4) {
   	 document.getElementById(DivId).innerHTML = xhr.responseText;
	 document.getElementById("innerloadingsh").style.display="none";
  	}
	}
	xhr.send();
 }