function formvalidation01(){
    var name=document.myform.MarkCharles.value;

    if(name==null || name==""){
        alert("Enter username first");
        return false
    }
    
    else if(name=="Abe"){
        return false
    }
    var name=document.myform.Abe.value;

    if(name==null || name==""){
        alert("Enter Password first");
        return false
    }
    else if(name=="Abe"){
        return true
    }
    else alert("Invalid Username and Password");{
        return false
    }

}