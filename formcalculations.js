// JavaScript

//product1
	 var Product1_prices= new Array();
	 Product1_prices["0"]=0;
	 Product1_prices["215"]=215;
	 Product1_prices["190"]=190;
	 Product1_prices["230"]=230;
	 Product1_prices["160"]=160;
	 Product1_prices["110"]=110;
	 Product1_prices["100"]=100;

function getProduct1(){
    var Product1=1;
    var theForm = document.forms["gameform"];
    var selectedProduct1 = theForm.elements["Product1"];
	Product1 = Product1_prices[selectedProduct1.value];
    return Product1;}
 
	 var P1Qty_prices= new Array();
	 P1Qty_prices["0"]=0;
	 P1Qty_prices["1"]=1;
	 P1Qty_prices["2"]=2;
	 P1Qty_prices["3"]=3;
	 P1Qty_prices["4"]=4;
	 P1Qty_prices["5"]=5;
	 P1Qty_prices["6"]=6;
	 P1Qty_prices["7"]=7;
	 P1Qty_prices["8"]=8;
	 P1Qty_prices["9"]=9;
	 P1Qty_prices["10"]=10;
  
function getP1Qty(){
    var P1Qty=1;
    var theForm = document.forms["gameform"];
    var selectedP1Qty = theForm.elements["P1Qty"];
	P1Qty = P1Qty_prices[selectedP1Qty.value];
    return P1Qty;}

function P1Total(){
    var P1subTotal = getProduct1()*getP1Qty();
    var P1divobj = document.getElementById('SubPrice1');	
   P1divobj.style.display='block';
   
   P1divobj.innerHTML ="&pound"+P1subTotal;
   number.format = currency;
   }
   
//product2
	 var Product2_prices= new Array();
	 Product2_prices["0"]=0;
	 Product2_prices["215"]=215;
	 Product2_prices["190"]=190;
	 Product2_prices["230"]=230;
	 Product2_prices["160"]=160;
	 Product2_prices["110"]=110;
	 Product2_prices["100"]=100;

function getProduct2(){
    var Product2=1;
    var theForm = document.forms["gameform"];
    var selectedProduct2 = theForm.elements["Product2"];
	Product2 = Product2_prices[selectedProduct2.value];
    return Product2;}
	
 var P2Qty_prices= new Array();
 P2Qty_prices["0"]=0;
 P2Qty_prices["1"]=1;
 P2Qty_prices["2"]=2;
 P2Qty_prices["3"]=3;
 P2Qty_prices["4"]=4;
 P2Qty_prices["5"]=5;
 P2Qty_prices["6"]=6;
 P2Qty_prices["7"]=7;
 P2Qty_prices["8"]=8;
 P2Qty_prices["9"]=9;
 P2Qty_prices["10"]=10;
 
function getP2Qty(){
    var P2Qty=1;
    var theForm = document.forms["gameform"];
    var selectedP2Qty = theForm.elements["P2Qty"];
    P2Qty = P2Qty_prices[selectedP2Qty.value];
    return P2Qty;}


function P2Total(){
    var P2subTotal = getProduct2()* getP2Qty();
    var P2divobj = document.getElementById('SubPrice2');
   P2divobj.style.display='block';
   P2divobj.innerHTML = "&pound"+P2subTotal;}

//product3
	 var Product3_prices= new Array();
	 Product3_prices["0"]=0;
	 Product3_prices["215"]=215;
	 Product3_prices["190"]=190;
	 Product3_prices["230"]=230;
	 Product3_prices["160"]=160;
	 Product3_prices["110"]=110;
	 Product3_prices["100"]=100;

function getProduct3(){
    var Product3=1;
    var theForm = document.forms["gameform"];
    var selectedProduct3 = theForm.elements["Product3"];
	Product3 = Product3_prices[selectedProduct3.value];
    return Product3;}

 var P3Qty_prices= new Array();
 P3Qty_prices["0"]=0;
 P3Qty_prices["1"]=1;
 P3Qty_prices["2"]=2;
 P3Qty_prices["3"]=3;
 P3Qty_prices["4"]=4;
 P3Qty_prices["5"]=5;
 P3Qty_prices["6"]=6;
 P3Qty_prices["7"]=7;
 P3Qty_prices["8"]=8;
 P3Qty_prices["9"]=9;
 P3Qty_prices["10"]=10;
 
function getP3Qty(){
    var P3Qty=1;
    var theForm = document.forms["gameform"];
    var selectedP3Qty = theForm.elements["P3Qty"];
    P3Qty = P3Qty_prices[selectedP3Qty.value];
    return P3Qty;}

function P3Total(){
    var P3subTotal = getProduct3()* getP3Qty();
    var P3divobj = document.getElementById('SubPrice3');
   P3divobj.style.display='block';
   P3divobj.innerHTML = "&pound"+P3subTotal;}

//product4
	 var Product4_prices= new Array();
	 Product4_prices["0"]=0;
	 Product4_prices["215"]=215;
	 Product4_prices["190"]=190;
	 Product4_prices["230"]=230;
	 Product4_prices["160"]=160;
	 Product4_prices["110"]=110;
	 Product4_prices["100"]=100;

function getProduct4(){
    var Product4=1;
    var theForm = document.forms["gameform"];
    var selectedProduct4 = theForm.elements["Product4"];
	Product4 = Product4_prices[selectedProduct4.value];
    return Product4;}

 var P4Qty_prices= new Array();
 P4Qty_prices["0"]=0;
 P4Qty_prices["1"]=1;
 P4Qty_prices["2"]=2;
 P4Qty_prices["3"]=3;
 P4Qty_prices["4"]=4;
 P4Qty_prices["5"]=5;
 P4Qty_prices["6"]=6;
 P4Qty_prices["7"]=7;
 P4Qty_prices["8"]=8;
 P4Qty_prices["9"]=9;
 P4Qty_prices["10"]=10;
 
function getP4Qty(){
    var P4Qty=1;
    var theForm = document.forms["gameform"];
    var selectedP4Qty = theForm.elements["P4Qty"];
    P4Qty = P4Qty_prices[selectedP4Qty.value];
    return P4Qty;}

function P4Total(){
    var P4subTotal = getProduct4()* getP4Qty();
    var P4divobj = document.getElementById('SubPrice4');
   P4divobj.style.display='block';
   P4divobj.innerHTML = "&pound"+P4subTotal;}

//product5

	 var Product5_prices= new Array();
	 Product5_prices["0"]=0;
	 Product5_prices["215"]=215;
	 Product5_prices["190"]=190;
	 Product5_prices["230"]=230;
	 Product5_prices["160"]=160;
	 Product5_prices["110"]=110;
	 Product5_prices["100"]=100;

function getProduct5(){
    var Product5=1;
    var theForm = document.forms["gameform"];
    var selectedProduct5 = theForm.elements["Product5"];
	Product5 = Product5_prices[selectedProduct5.value];
    return Product5;}
	
 var P5Qty_prices= new Array();
 P5Qty_prices["0"]=0;
 P5Qty_prices["1"]=1;
 P5Qty_prices["2"]=2;
 P5Qty_prices["3"]=3;
 P5Qty_prices["4"]=4;
 P5Qty_prices["5"]=5;
 P5Qty_prices["6"]=6;
 P5Qty_prices["7"]=7;
 P5Qty_prices["8"]=8;
 P5Qty_prices["9"]=9;
 P5Qty_prices["10"]=10;
 
function getP5Qty(){
    var P5Qty=1;
    var theForm = document.forms["gameform"];
    var selectedP5Qty = theForm.elements["P5Qty"];
    P5Qty = P5Qty_prices[selectedP5Qty.value];
    return P5Qty;}

function P5Total(){
    var P5subTotal = getProduct5()* getP5Qty();
    var P5divobj = document.getElementById('SubPrice5');
   P5divobj.style.display='block';
   P5divobj.innerHTML = "&pound"+P5subTotal;}

//product6

	 var Product6_prices= new Array();
	 Product6_prices["0"]=0;
	 Product6_prices["215"]=215;
	 Product6_prices["190"]=190;
	 Product6_prices["230"]=230;
	 Product6_prices["160"]=160;
	 Product6_prices["110"]=110;
	 Product6_prices["100"]=100;

function getProduct6(){
    var Product6=1;
    var theForm = document.forms["gameform"];
    var selectedProduct6 = theForm.elements["Product6"];
	Product6 = Product6_prices[selectedProduct6.value];
    return Product6;}

 var P6Qty_prices= new Array();
 P6Qty_prices["0"]=0;
 P6Qty_prices["1"]=1;
 P6Qty_prices["2"]=2;
 P6Qty_prices["3"]=3;
 P6Qty_prices["4"]=4;
 P6Qty_prices["5"]=5;
 P6Qty_prices["6"]=6;
 P6Qty_prices["7"]=7;
 P6Qty_prices["8"]=8;
 P6Qty_prices["9"]=9;
 P6Qty_prices["10"]=10;
 
function getP6Qty(){
    var P6Qty=1;
    var theForm = document.forms["gameform"];
    var selectedP6Qty = theForm.elements["P6Qty"];
    P6Qty = P6Qty_prices[selectedP6Qty.value];
    return P6Qty;}

function P6Total(){
    var P6subTotal = getProduct6()* getP6Qty();
    var P6divobj = document.getElementById('SubPrice6');
   P6divobj.style.display='block';
   P6divobj.innerHTML = "&pound"+P6subTotal;}
  
function P7Total(){
    var P7subTotal =(getProduct1()* getP1Qty())+(getProduct2()* getP2Qty()) +(getProduct3()* getP3Qty())+(getProduct4()* getP4Qty())+(getProduct5()* getP5Qty())+(getProduct6()* getP6Qty());
    var P7divobj = document.getElementById('SubPrice7');
   P7divobj.style.display='block';
   P7divobj.innerHTML = "&pound"+P7subTotal;}
