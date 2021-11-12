let day = (year, month, date) => {


    DD = parseInt(date);

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
        case "November":
            monthNumber = 11;
            break;
        case "December":
            monthNumber = 12;
            break;
        default:
            monthNumber = "invalid Month"
    }
    MM = monthNumber;


    CC = parseInt(year.substring(0, 2))
    YY = parseInt(year.substring(2, 4))

    D = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7
    year = document.getElementById("bDate")[0].value;
}

day(year, "October", 5)

let gender = (maleFemale) => {

    var isMale = document.getElementById("maleCheck").ariaChecked;
    var isFemale = document.getElementById("femaleCheck")

    let maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    if (maleFemale == "male") {
        akanGender = maleName
    } else if (maleFemale = "female") {
        akanGender = femaleName
    }


}
gender("male")

let akanName = (akanName) => {

    sliceUp = D
    sliceDown = D - 1
    console.log(akanGender.slice(sliceDown, sliceUp))
}
akanName()