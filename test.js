let myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (e) => {
            e.preventDefault();

            let request = new XMLHttpRequest();

            request.open("post", "form.
                php ");

                request.onload = function() {
                    console.log(request.responseText);
                }

                request.send(new FormData(myForm));
            })

        document.get