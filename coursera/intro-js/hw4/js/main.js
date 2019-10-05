function billingFunction() {
    var billingName = document.getElementById('billingName');
    var billingZip = document.getElementById('billingZip');

    var same = document.getElementById('same');
    if (same.checked) {
        var shippingName = document.getElementById('shippingName');
        var shippingZip = document.getElementById('shippingZip');

        billingName.value = shippingName.value;
        billingZip.value = shippingZip.value;
    } else {
        billingName.value = "";
        billingZip.value = "";
    }
}
