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

    MM = parseInt(month2);


    DD = parseInt(day2);
    CC = parseInt(year2.substring(0, 2))
    YY = parseInt(year2.substring(2, 5))

    let D = Math.floor((((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7)


    console.log(DD);
    console.log(MM);
    console.log(CC);
    console.log(typeof(YY));

    console.log(D)


    let maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


    if (gen == "male") {
        alert("Your Akan name is " +
            fname + " " + maleName[D])
    } else if (maleFemale = "female") {
        alert("Your Akan name is " +
            fname + " " + femaleName[D])
    }



})