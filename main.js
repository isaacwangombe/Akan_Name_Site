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
            monthNumber = 1;
            break;
        case "April":
            monthNumber = 2;
            break;
        case "May":
            monthNumber = 3;
            break;
        case "June":
            monthNumber = 4;
            break;
        case "July":
            monthNumber = 5;
            break;
        case "August":
            monthNumber = 6;
            break;
        case "September":
            monthNumber = 7;
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

}

day("1995", "October", 5)



D = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7
console.log(D)

D2 = console.log(parseInt(D))

let gender = (male, female) => {


}
gender()

let akanName = (akanName) => {
    let maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


}

sliceUp = D
sliceDown = D - 1

console.log(maleName.slice(sliceDown, sliceUp))