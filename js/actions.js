// JavaScript Document
$(document).keypress(function(e) {
    if(e.which == 13) {
        doLogin();
    }
});


function postPupup(objform,popupname){
	var myPopup=window.open('about:blank',popupname,'width=50, height=50,toolbar=no, menubar=no, location=no, scrollbars=no');
	$("#"+objform).submit();
}

function loadContent(param){
	$('#launcher').load(param);
}

function showObj(obj){
	if($('#'+obj).is(":visible")){
		$('#'+obj).slideUp();
	}else{
		$('#'+obj).slideDown();		
	}
}

function loadMore(target,param){
	
	
	$('.preview').each(function(){
		$(this).html('');
	});
	
	
	
	$('#'+target).load(param);
}

function hideMore(target){
	$('#'+target).html('');
}

function doLogin(){
	var usertxt=$("#txtUSER").val();
	var passtxt=$("#txtPASS").val();
	if(usertxt!='' && usertxt!='undefined'){
		loadContent('login.php?action=doLogin&user='+usertxt+'&string='+passtxt);
	}
}

function filterInput(filterType, evt, allowDecimal, allowCustom){ 
    var keyCode, Char, inputField, filter = ''; 
    var alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
    var num   = '0123456789'; 
    var symbols   = ' _@.'; 	
    // Get the Key Code of the Key pressed if possible else - allow 
    if(window.event){ 
        keyCode = window.event.keyCode; 
        evt = window.event; 
    }else if (evt)keyCode = evt.which; 
    else return true; 
    // Setup the allowed Character Set 
    if(filterType == 0) filter = alpha; 
    else if(filterType == 1) filter = num; 
    else if(filterType == 2) filter = alpha + num; 
    else if(filterType == 3) filter = alpha + num + symbols; 	
    if(allowCustom)filter += allowCustom; 
    if(filter == '')return true; 
    // Get the Element that triggered the Event 
    inputField = evt.srcElement ? evt.srcElement : evt.target || evt.currentTarget; 
    // If the Key Pressed is a CTRL key like Esc, Enter etc - allow 
    if((keyCode==null) || (keyCode==0) || (keyCode==8) || (keyCode==9) || (keyCode==13) || (keyCode==27) )return true; 
    // Get the Pressed Character 
    Char = String.fromCharCode(keyCode); 
    // If the Character is a number - allow 
    if((filter.indexOf(Char) > -1)) return true; 
    // Else if Decimal Point is allowed and the Character is '.' - allow 
    else if(filterType == 1 && allowDecimal && (Char == '.') && inputField.value.indexOf('.') == -1)return true; 
    else return false; 
}