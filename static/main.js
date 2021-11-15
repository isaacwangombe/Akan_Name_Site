$('#submit').on('click', () => {
    let year = $('#birthYear').val();
    let fname = $('#firstName').val();
    let month = $('#birthMonth').val();
    let date = $('#birthDate').val();
    let gen = $('#gender').val();

    let date2 = new Date($('#dateDate').val());
    let day2 = date2.getDate()
    let month2 = date2.getMonth() + 1;
    let fullyear2 = date2.getFullYear()
    let year2 = String(fullyear2)

    /* 
        console.log(day2)


        let Month = month.toLowerCase() */
    /* 
        var arr1 = d.split(' ');
        var arr2 = arr1[1].split('-');

        console.log('date: ', arr1[0]);
        console.log('month: ', arr2[0]);
        console.log('year: ', arr2[1]);
     */
    /* switch (month) {
        case "january":
            monthNumber = 1;
            break;
        case "february":
            monthNumber = 2;
            break;
        case "march":
            monthNumber = 3;
            break;
        case "april":
            monthNumber = 4;
            break;
        case "may":
            monthNumber = 5;
            break;
        case "june":
            monthNumber = 6;
            break;
        case "july":
            monthNumber = 7;
            break;
        case "august":
            monthNumber = 8;
            break;
        case "september":
            monthNumber = 9;
            break;
        case "october":
            monthNumber = 10;
            break;
        case "november":
            monthNumber = 11;
            break;
        case "december":
            monthNumber = 12;
            break;
        default:
            monthNumber = "invalid Month"
    } */
    /* 
        if (monthNumber == "invalid month") {
            alert("invalid Month")
        } else { */
    MM = parseInt(month2);


    DD = parseInt(day2);
    CC = parseInt(year2.substring(0, 2))
    YY = parseInt(year2.substring(2, 5))

    let D = Math.floor((((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7)

    /* let L = (DD + (Math.floor(2.6 * MM) - 0.2) - (2 * CC) + YY + Math.floor(YY / 4) + Math.floor(CC / 4)) % 7
    console.log(L); */

    console.log(DD);
    console.log(MM);
    console.log(CC);
    console.log(typeof(YY));

    console.log(D)


    let maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    /* let sliceUp = Math.round(D)
    let sliceDown = Math.round(D) - 1 */


    if (gen == "male") {
        alert("Your Akan name is " +
            fname + " " + maleName[D])
    } else if (maleFemale = "female") {
        alert("Your Akan name is " +
            fname + " " + femaleName[D])
    }



})