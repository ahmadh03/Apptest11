// JavaScript Document

String.prototype.stripSlashes = function(){
    return this.replace(/\\(.)/mg, "$1");
}

function DayDiff(SpecifiedDate)
{ var CurrentDate= new Date();
var SD =new Date(SpecifiedDate);
		
        var DayCount=(SD-CurrentDate)/(1000*60*60*24);
        DayCount=Math.round(DayCount); 
		document.write(DayCount);
   		
		
}
function clear_c(){
	document.getElementById("textinput").value="";
	document.getElementById("name_input").value="";
	document.getElementById("email_input").value="";
	document.getElementById("phone_input").value="";
	document.getElementById("message_input").value="";
	
}


function pr_get(x,y){
goload();
var url = 'http://viaananasonline.com/ws.php?type=select&format=json&table=products&columns=id%2Cname%2Cbrief%2Cprice%2Cthumb&condition=active=1&priority=sorting,id&limit=' + x + ',' + y;

    $.getJSON(url,
    function (json) {
        var tr;
        for (var i = 0; i < json.length; i++) {
            tr = $('<tr/>');
         //   tr.append("<td>" + json[i].id + "</td>");
		 	var image_url = "http://www.viaananasonline.com/cms/upload/image/" + json[i].thumb + "\"" ;	
		//	add_description(json[i].id);
			var t='<td><a onclick="add_description('+json[i].id+');" href="#">'+ "<img src=" + "\"" + image_url  + ">"+'</a></td>';
			tr.append(t);	
            tr.append("<tr>" + "<td VALIGN = Middle Align = Center>" + json[i].name + "</td>" + "</tr>");
            tr.append("<tr>" + "<td VALIGN = Middle Align = Center>" + json[i].brief + "</td>" + "</tr>");
            tr.append("<tr>" + "<td VALIGN = Middle Align = Center>" + "Price: " + json[i].price + " $ " + "</td>" + "</tr>");
			//tr.append("<tr>" + "<td VALIGN = Middle Align = Center>" + json[i].id + "</td>" + "</tr>");

			
            $('#e_l').append(tr);
        }
        $('#spinner').hide();
    });
}

function add_description(x){
			 var url2 = 'http://viaananasonline.com/ws.php?type=select&format=json&table=products&columns=id%2Cname%2Cdescription%2Cthumb%2Cprice&condition=active=1%20and%20id=' + x;
		 
		 $.getJSON(url2,function(json){
			 var image_url = "http://www.viaananasonline.com/cms/upload/image/" + json[0].thumb + "\"" ;
		 	$('body').append('<div data-role="page" id="'+ x + '"><div data-role="header" class="ui-header ui-header-fixed"><h1>'+json[0].name+'</h1><a href="#home_page" data-role="button" data-icon="home" data-iconpos="notext">Button</a> </div>'+'<div class="content"><br><br>'+ "<img src=" + "\"" + image_url  + ">" +'<br>'+ "Price: " + json[0].price + " $ " +'<br>'+ json[0].description +  '</div>');
 $.mobile.changePage('#'+x);
		
 });

	
}

function add_description_tips(x){
			 var url2 = 'http://viaananasonline.com/ws.php?type=select&format=json&table=articles&columns=id,title,thumb,date,description%20&condition=langid=2%20and%20active=1%20and%20id=' + x;
		 
		 $.getJSON(url2,function(json){
			 var image_url = "http://www.viaananasonline.com/cms/upload/image/" + json[0].thumb + "\"" ;
			 var desc=json[0].description.stripSlashes();
		 	$('body').append('<div data-role="page" class="rtl" id="'+ x + '"><div data-role="header" class="ui-header ui-header-fixed"><h1>Healthy Tips</h1><a href="#home_page" data-role="button" data-icon="home" data-iconpos="notext">Button</a> </div>'+'<div class="ar_content"><h1>'+ json[0].title +'</h1><br>'+ "<img src=" + "\"" + image_url  + ">" +'<br>'+ json[0].date.substring(0, 10) +'<br>'+desc+  '</div>');
 $.mobile.changePage('#'+x);		
 });

	
}

function tips_get(x,y){
var url = 'http://viaananasonline.com/ws.php?type=select&format=json&table=articles&columns=id,title,thumb,date,description%20&condition=langid=2%20and%20active=1&priority=id%20desc&limit=' + x + ',' + y;

			
    $.getJSON(url,
    function (json) {
        var tr;
        for (var i = 0; i < json.length; i++) {
            tr = $('<tr/>');
         //   tr.append("<td>" + json[i].id + "</td>");
		 	var image_url = "http://www.viaananasonline.com/cms/upload/image/" + json[i].thumb + "\"" ;
       //     add_description_tips(json[i].id);
			var t='<td><a onclick="add_description_tips('+json[i].id+');" href="#">'+ "<img src=" + "\"" + image_url  + ">"+'</a></td>';
			tr.append(t);			
            tr.append("<tr>" + "<td VALIGN = Middle Align = Center >" + json[i].title + "</td>" + "</tr>");
            tr.append("<tr>" + "<td VALIGN = Middle Align = Center>" + json[i].date.substring(0, 10) + "</td>" + "</tr>");
            //tr.append("<tr>" + "<td VALIGN = Middle Align = Center>" + json[i].id + "</td>" + "</tr>");
			
            $('#tips').append(tr);
       
        }
        
    });
			}
			
		
	function c_get(){
var url = 'http://viaananasonline.com/ws.php?type=select&format=json&table=static&columns=contactus&condition=id=1';

			
    $.getJSON(url,
    function (json) {
        var tr;
        for (var i = 0; i < json.length; i++) {
		
		$('#c_content').append(json[i].contactus);
       
        }
    });
			}
			
	function check_get(){
var code = $("#textinput").val();
if (code=='') {
	
    alert("Please Fill in the Required Code");
} else 
{goload();clear_c();
var url = 'http://viaananasonline.com/ws.php?format=json&type=select_one&table=activation&columns=id,active&condition=code=%27' + code + '%27';

			
    $.getJSON(url,
    function (json) {
        var tr;
        for (var i = 0; i < json.length; i++) {
		//var x='<a href="Fp.html?id='+json[i].id+'#page_pr">'+json[i].post_title+'</a>';
		
		if (json[i].active == "1")
		{
			$("#v_image").hide();
			$("#f_image").hide();
			$('#spinner').hide();
			$("#g_image").show();
			var id = json[i].id;
			localStorage.setItem("id", id);
			update_get();
			setTimeout(function() { $.mobile.navigate( "#page_r" )}, 3000);
			
			
		} else if (json[i].active == "0")
		{
			$("#g_image").hide();
			$("#f_image").hide();
			$('#spinner').hide();
			$("#v_image").show();
			

		} else
		{
			$("#v_image").hide();
			$("#g_image").hide();
			$('#spinner').hide();
			$("#f_image").show();
			$('#message1').text("Please make sure that you have entered the code correctly.");
			$('#message2').text("Otherwise Please note that this product is fake.");
			$('#message3').text("If you like to report this product, then contacts us on the following numbers :");
			$('#message4').text("961 1 980100");
			$('#message5').text("961 1 980101");
			$('#message6').text("961 3 765849");
			setTimeout(function() { $.mobile.navigate( "#page_m" )}, 3000);
			
		}

       
        }
    });
}
			}

	function send_email(){
var name = $("#name_input").val();
var email = $("#email_input").val();
var phone = $("#phone_input").val();
var message = $("#message_input").val();
var url = 'http://viaananasonline.com/ws.php?type=email&name=' + name + '&email=' + email + '&phone=' + phone + '&message=' + message ;

if (name=='' || email=='' || phone=='' || message=='') {
	
    alert("Please fill in the required information");
} else 
{
    $.getJSON(url,
    function (json) {
        var tr;
        for (var i = 0; i < json.length; i++) {
		//var x='<a href="Fp.html?id='+json[i].id+'#page_pr">'+json[i].post_title+'</a>';
		
		
       
        }
    });
	alert("Email Sent");
	clear_c();
}
			}
			
			function update_get(){
var date = return_date();
var id = localStorage.getItem("id");
var url = 'http://viaananasonline.com/ws.php?format=json&type=update&table=activation&columns=activationDate=%27' + date +'%27%2Cactive=0&condition=id=' + id ;

			
    $.getJSON(url,
    function (json) {
        var tr;
        for (var i = 0; i < json.length; i++) {
		
		var id_v = json[i].id;
		
       
        }
    });
	
			}
			
			
			
			function register(){
var name = $("#name_input_r").val();
var gender = $("#selectmenu").val();
var country = $("#selectmenu2").val();
var phone = $("#phone_input_r").val();
var id = localStorage.getItem("id");
var url = 'http://viaananasonline.com/ws.php?format=json&type=update&table=activation&columns=name=%27' + name + '%27%2Cgender=%27' +gender + '%27%2Ccountry=%27' + country +'%27%2Cphone=%27' + phone + '%27&condition=id=' + id ;
if (name =='' || phone =='' || gender=='none' || country=='none')
{
	alert("Please fill in the required information");
}
else{
$('#message1').text("Thank You For Your Registeration");
$('#message2').text("");
$('#message3').text("");
$('#message4').text("");
$('#message5').text("");
$('#message6').text("");
$("#name_input_r").val("");
$("#phone_input_r").val("");

			
    $.getJSON(url,
    function (json) {
        var tr;
        for (var i = 0; i < json.length; i++) {
		//var x='<a href="Fp.html?id='+json[i].id+'#page_pr">'+json[i].post_title+'</a>';
		
       
        }
    });

	$.mobile.navigate( "#page_m" );

}
			}// JavaScript Document
			
function hideImages()
{
	$("#g_image").hide();
	$("#f_image").hide();
	$("#v_image").hide();
}

function showImage(x)
{
	x.show;
}
			
function qrscan() {
	  cordova.plugins.barcodeScanner.scan(
      function (result) {
		  if(result.cancelled == true) {
		document.addEventListener("backbutton", function(e){
       

           $.mobile.changePage('#home_page');
      
    }, false);			  
			  
		  } else {
//		         alert("We got a barcode\n" +
//                "Result: " + result.text + "\n" +
//                "Format: " + result.format + "\n" +
//               "Cancelled: " + result.cancelled);
			window.open(result.text,'_blank');
		  }
			
      }, 
      function (error) {
          alert("Scanning failed: " + error);
      }
   );
}


function return_date()
{
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	
	var yyyy = today.getFullYear();
	if(dd<10)
	{dd='0'+dd;}
	if(mm<10){mm='0'+mm;}
	var today = yyyy+'-'+mm+'-'+dd;
	return today;
}

function country_get(){
				
var url = 'country.json' ;

			
    $.getJSON(url,
    function (json) {
        
        for (var i = 0; i < json.length; i++) {
			var c= '<option value=' + json[i].Select+ '>' + json[i].Select+'</option>';
			$("#selectmenu2").append(c);
		

        }
    });
}

function goback2(currentpage,go2page)
{
	document.addEventListener("backbutton", function(e){
       if($.mobile.activePage.is('' + '#' + currentpage + '' )){
           e.preventDefault();
		   $.mobile.navigate( '' + '#' + go2page + '' );
	   }else {
		   navigator.app.backHistory();
	   }
    }, false);
}

function goload(){
	
	$('#spinner').show();
//	setTimeout(function() { $('#spinner').hide()}, 3000);
}



