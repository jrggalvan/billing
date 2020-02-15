/*Add the JavaScript here for the function billingFunction().  
It is responsible for setting and clearing the fields in Billing Information */
function billingFunction() 
{
    if (document.getElementById('same').checked) 
    {

        var name = document.getElementById('shippingName').value;
        var zipcode = document.getElementById('shippingZip').value;

        document.getElementById('billingName').value = name;
        document.getElementById('billingZip').value = zipcode;

    }
    else 
    {

        document.getElementById('billingName').value = "";
        document.getElementById('billingZip').value = "";

    }

}

function verify()
{
    var shippingname = document.getElementById('shippingName').value;
    var shippingzip = document.getElementById('shippingZip').value;
    var billingname = document.getElementById('billingName').value;
    var billingzip = document.getElementById('billingZip').value;

    if(shippingname === billingname && shippingzip === billingzip)
    {
            alert('Entered data are the same.');
    }
    else
    {
            alert('Entered data are not the same.');
    }
}

