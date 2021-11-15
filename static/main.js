$('#submit').on('click', () => {
    let year = $('#birthYear').val();
    let fname = $('#firstName').val();
    let month = $('#birthMonth').val();
    let date = $('#birthDate').val();
    let gen = $('#gender').val();



    switch (month) {
        case "January":
            monthNumber = 1;
            break;
        case "February":
            monthNumber = 2;
            break;
        case "March":
            monthNumber = 3;
            break;
        case "April":
            monthNumber = 4;
            break;
        case "May":
            monthNumber = 5;
            break;
        case "June":
            monthNumber = 6;
            break;
        case "July":
            monthNumber = 7;
            break;
        case "August":
            monthNumber = 8;
            break;
        case "September":
            monthNumber = 9;
            break;
        case "October":
            monthNumber = 10;
            break;
            monthNumber = 11;
            break;
        case "December":
            monthNumber = 12;
            break;
        default:
            monthNumber = "invalid Month"
    }
    MM = parseFloat(monthNumber);

    DD = parseFloat(date);
    CC = parseFloat(year.substring(0, 2))
    YY = parseFloat(year.substring(2, 4))

    let D = Math.floor((((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7)



    let maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    let sliceUp = D
    let sliceDown = D - 1

    if (gen == "male") {
        alert("Your Akan name is " +
            fname + " " + maleName.slice(sliceDown, sliceUp))
    } else if (maleFemale = "female") {
        alert("Your Akan name is " +
            fname + " " + femaleName.slice(sliceDown, sliceUp))
    }



})