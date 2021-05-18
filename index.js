var customerName='bob';
const leastFavoriteCustomer='knob';

function upperCaseCustomerName(){
    customerName=customerName.toUpperCase();
}

function setBestCustomer(name='not bob'){
    bestCustomer=name;
}

function overwriteBestCustomer(name){
    bestCustomer=name;
}

function changeLeastFavoriteCustomer(name){
    leastFavoriteCustomer=name;
}