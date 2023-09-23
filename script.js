function validDate(dayValue, monthValue, yearValue) {
    // Create a Date object using the provided values
    const userDate = new Date(yearValue, monthValue - 1, dayValue);

    // Calculate the user's age
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - userDate;

    // Calculate years, months, and days
    const millisecondsPerYear = 31536000000; // Approximate number of milliseconds in a year
    const millisecondsPerMonth = 2628000000; // Approximate number of milliseconds in a month
    const remainingMilliseconds = ageInMilliseconds % millisecondsPerYear;

    if(dayValue === "") {
        document.getElementById('errorMsgDay').innerHTML = "This field is required";
        document.getElementById('dayText').style.color = "hsla(0, 100%, 67%, 0.767)";
        document.getElementById('dayValue').style.borderColor = "hsla(0, 100%, 67%, 0.767)";
        document.getElementById('resultDay').innerHTML = "--";
    } else {
        parseInt(dayValue, 10);
        if(isNaN(dayValue) || dayValue < 1 || dayValue > 31) {
            document.getElementById('errorMsgDay').innerHTML = "Must be valid day";
            document.getElementById('dayText').style.color = "hsla(0, 100%, 67%, 0.767)";
            document.getElementById('dayValue').style.borderColor = "hsla(0, 100%, 67%, 0.767)";
        } else {
            document.getElementById('errorMsgDay').innerHTML = "";
            document.getElementById('dayText').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('dayValue').style.borderColor = "hsl(0, 0%, 86%)";

            document.getElementById('resultDay').innerHTML = Math.floor((remainingMilliseconds % millisecondsPerMonth) / (1000 * 60 * 60 * 24));
        }
    }
    if(monthValue === "") {
        document.getElementById('errorMsgMonth').innerHTML = "This field is required";
        document.getElementById('monthText').style.color = "hsla(0, 100%, 67%, 0.767)";
        document.getElementById('monthValue').style.borderColor = "hsla(0, 100%, 67%, 0.767)";
        document.getElementById('resultMonth').innerHTML = "--";
    } else {
        parseInt(monthValue, 10);
        if(isNaN(monthValue) || monthValue < 1 || monthValue > 12) {
            document.getElementById('errorMsgMonth').innerHTML = "Must be valid month";
            document.getElementById('monthText').style.color = "hsla(0, 100%, 67%, 0.767)";
            document.getElementById('monthValue').style.borderColor = "hsla(0, 100%, 67%, 0.767)";
        } else {
            document.getElementById('errorMsgMonth').innerHTML = "";
            document.getElementById('monthText').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('monthValue').style.borderColor = "hsl(0, 0%, 86%)";

            document.getElementById('resultMonth').innerHTML = Math.floor(remainingMilliseconds / millisecondsPerMonth);
        }
    }
    if(yearValue === "") {
        document.getElementById('errorMsgYear').innerHTML = "This field is required";
        document.getElementById('yearText').style.color = "hsla(0, 100%, 67%, 0.767)";
        document.getElementById('yearValue').style.borderColor = "hsla(0, 100%, 67%, 0.767)";
        document.getElementById('resultYear').innerHTML = "--";
    } else {
        parseInt(yearValue, 10);
        if(isNaN(yearValue) || yearValue > new Date().getFullYear()) {
            document.getElementById('errorMsgYear').innerHTML = "Must be in the past";
            document.getElementById('yearText').style.color = "hsla(0, 100%, 67%, 0.767)";
            document.getElementById('yearValue').style.borderColor = "hsla(0, 100%, 67%, 0.767)";
        }
        else {
            document.getElementById('errorMsgYear').innerHTML = "";
            document.getElementById('yearText').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('yearValue').style.borderColor = "hsl(0, 0%, 86%)";

            document.getElementById('resultYear').innerHTML = Math.floor(ageInMilliseconds / millisecondsPerYear);
        }
    }
}


function calcAge() {
    // Get day, month, and year values from input fields
    const dayValue = document.getElementById('dayValue').value;
    const monthValue = document.getElementById('monthValue').value;
    const yearValue = document.getElementById('yearValue').value;
    
    validDate(dayValue, monthValue, yearValue);
}