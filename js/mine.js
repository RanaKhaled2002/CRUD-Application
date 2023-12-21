var product;
var items = [];
var place;

if(localStorage.getItem("localProduct")!=null)
{
    items = JSON.parse(localStorage.getItem("localProduct"));
    display();
}

function addProduct()
{
    product ={
        pName:document.getElementById("pNameId").value,
        pPrice:document.getElementById("pPriceId").value,
        pCat:document.getElementById("pCatId").value,
        pDesc:document.getElementById("pDescId").value,

    }
    items.push(product);
    localStorage.getItem("localProduct",JSON.stringify(items));
    display();
    clear();

}
function clear()
{
    document.getElementById("pNameId").value="";
    document.getElementById("pPriceId").value="";
    document.getElementById("pCatId").value="";
    document.getElementById("pDescId").value="";  
}

function display()
{
    var cartona="";
    for(var i =0;i<items.length;i++)
    {
        cartona +=
        `<tr>
        <td>${items[i].pName}</td>
        <td>${items[i].pPrice}</td>
        <td>${items[i].pCat}</td>
        <td>${items[i].pDesc}</td>
        <td><button onclick='getData(${i})' class='btn btn-outline-warning'>Update</button></td>
        <td><button onclick='removeProduct(${i})' class='btn btn-outline-danger'>Delete</button></td>
        </tr>`
    }
    document.getElementById("tbody").innerHTML= cartona;
}
function search(search)
{
    var cartona = "";
    for(var i=0;i<items.length;i++)
    {
        if(items[i].pName.toLowerCase().includes(search.toLowerCase()))
        {
            cartona +=
            `<tr>
            <td>${items[i].pName}</td>
            <td>${items[i].pPrice}</td>
            <td>${items[i].pCat}</td>
            <td>${items[i].pDesc}</td>
            <td><button onclick='getData(${i})' class='btn btn-outline-warning'>Update</button></td>
            <td><button onclick='removeProduct(${i})' class='btn btn-outline-danger'>Delete</button></td>
            </tr>`
        }
    }
    document.getElementById("tbody").innerHTML= cartona;
}
function removeProduct(index)
{
    items.splice(index,1);
    localStorage.setItem("localProduct",JSON.stringify(items));
    display();
}
function getData(index)
{
    //change button
    document.getElementById("add").classList.add("d-none");
    document.getElementById("update").classList.remove("d-none");

    // data
    document.getElementById("pNameId").value = items[index].pName;
    document.getElementById("pPriceId").value = items[index].pPrice;
    document.getElementById("pCatId").value = items[index].pCat;
    document.getElementById("pDescId").value = items[index].pDesc;
    place = index;

}
function updateProduct()
{
    product ={
        pName:document.getElementById("pNameId").value,
        pPrice:document.getElementById("pPriceId").value,
        pCat:document.getElementById("pCatId").value,
        pDesc:document.getElementById("pDescId").value,

    }
    items.splice(place,1,product)
    localStorage.getItem("localProduct",JSON.stringify(items));
    display();
    clear();

    document.getElementById("add").classList.remove("d-none");
    document.getElementById("update").classList.add("d-none");
}