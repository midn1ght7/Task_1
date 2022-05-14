async function showSellers(amount, data, of_type)
{
    let header = document.createElement('h2')
    header.innerHTML = `${of_type} (${amount} IDs & ${data.length} Names)`
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    table.className = "table";
    table.appendChild(thead);
    table.appendChild(tbody);
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "IDs";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Name";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "Domain";
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = "Type";
    let heading_5 = document.createElement('th');
    heading_5.innerHTML = "Passthrough";
    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    row_1.appendChild(heading_5);
    thead.appendChild(row_1);

    for (const seller of data){
        let row = document.createElement('tr');
        let row_data_1 = document.createElement('td');
        if(seller.seller_ids.length > 1){
            row_data_1.innerHTML = `Amount: ${seller.seller_ids.length}<br>`
            var select = document.createElement("select");
            select.name = `IDs of ${seller.name}`;
            for (const id of seller.seller_ids){
                //row_data_1.innerHTML = row_data_1.innerHTML + `${id}<br>`
                var option = document.createElement("option");
                option.text = `${id}`
                select.appendChild(option);
            }
            row_data_1.appendChild(select);
        }
        else{
            row_data_1.innerHTML = `${seller.seller_ids}`
        }
        let row_data_2 = document.createElement('td');
        row_data_2.innerHTML = seller.name;
        let row_data_3 = document.createElement('td');
        row_data_3.innerHTML = seller.domain;
        let row_data_4 = document.createElement('td');
        row_data_4.innerHTML = seller.seller_type;
        let row_data_5 = document.createElement('td');
        if (seller.is_passthrough == 0){
            row_data_5.innerHTML = "No";
        }
        else{
            row_data_5.innerHTML = "Yes";
        }
        row.appendChild(row_data_1);
        row.appendChild(row_data_2);
        row.appendChild(row_data_3);
        row.appendChild(row_data_4);
        row.appendChild(row_data_5);
        tbody.appendChild(row);
    }
    document.getElementById('body').appendChild(header);
    document.getElementById('body').appendChild(table);
}

