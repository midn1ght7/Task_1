async function getBoth()
{
    const response = await fetch(`/get_both`,{method:'GET'});
    var data = await response.json();
    if(data){
        console.log(data);
        showSellers(data.amount, data.sellers, "Both");
    }
}

window.onload=async function(){
    await getBoth();
}   
