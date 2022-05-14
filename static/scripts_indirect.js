async function getIntermediaries()
{
    const response = await fetch(`/get_intermediaries`,{method:'GET'});
    var data = await response.json();
    if(data){
        console.log(data);
        showSellers(data.amount, data.sellers, "Intermediaries");
    }
}

window.onload=async function(){
    await getIntermediaries();
}   
