 var link = document.querySelector(".search-hostel");
        var popup = document.querySelector(".search");
        
        link.addEventListener("click", function(event) {
            event.preventDefault();
            popup.classList.toggle("search-show");
        });