const search = ()=>{
    const searchbox=document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product-list")
    const product = document.querySelectorAll(".card m-2")
    const pname= documet.getElementsByTagName(".card-text")
    for (var i=0; i < pname.length; i++){
        let match = product[i].getElementsByTagName('.card-text')[0];
        if (match){
            let textValue = match.textContent || match.innerHTML
            if(textValue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display="";
            }else{
                product[i].style.display="none";
            }
        }
    }
}