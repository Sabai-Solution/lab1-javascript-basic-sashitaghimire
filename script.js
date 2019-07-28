function validateEmptyValues(){
	var txtEmail=document.getElementsByTagName("txtEmail");
	var txtUn=document.getElementsByTagName("txtEmail");
	var txtPassword=document.getElementsByTagName("txtEmail");

	var appendError="";
	if(txtEmail==""){
		appendError="email";
	}
	if(txtUn==""){
		if(appendError!=""){
			appendError=appendError+"and";
		}
		appendError=appendError+"un";
	}
	if(txtPassword==""){
		if(appendError!=""){
			appendError=appendError+"and";
		}
		appendError=appendError+"Password";
	
}
if(appendError!=""){
	appendError=appendError+"can not be empty.";
	alert(appendError);
	return false;
}
else{
return true;
}
}
