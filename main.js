let maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


let day = (year, month, date) => {
    DD = parseInt(date);
    switch (month) {
        case "January":
            monthNumber = 0;
            break;
        case "February":
            monthNumber = 1;
            break;
        case "March":
            monthNumber = 2;
            break;
        case "April":
            monthNumber = 3;
            break;
        case "May":
            monthNumber = 4;
            break;
        case "June":
            monthNumber = 5;
            break;
        case "July":
            monthNumber = 6;
            break;
        case "August":
            monthNumber = 7;
            break;
        case "September":
            monthNumber = 8;
            break;
        case "October":
            monthNumber = 9;
            break;
        case "November":
            monthNumber = 12;
            break;
        case "December":
            monthNumber = 11;
            break;
        default:
            monthNumber = "invalid Month"
    }
    let MM = monthNumber

    let years = year
    let CC = parseInt(years.substring(0, 2))
    let YY = parseInt(years.substring(2, 4))


    console.log(MM)
    console.log(DD)
    console.log(CC)
    console.log(YY)

}

day("1999", "April", 7)