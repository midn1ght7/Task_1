async function getPublishers()
{
    const response = await fetch(`/get_publishers`,{method:'GET'});
    var data = await response.json();
    if(data){
        console.log(data);
        showSellers(data.amount, data.sellers, "Publishers");
    }
}

window.onload=async function(){
    await getPublishers();
}   

