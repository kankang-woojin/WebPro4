var lookup = {
    'Option 1': ['Select','Option 1 - Choice 1', 'Option 1 - Choice 2', 'Option 1 - Choice 3'],
    'Option 2': ['Select','Option 2 - Choice 1', 'Option 2 - Choice 2'],
    'Option 3': ['Select','Option 3 - Choice 1'],
};
var link = {
    'Option 1': ['#','sub5.htm', 'sub6.htm', 'sub7.htm'],
    'Option 2': ['#','sub1.htm', 'sub2.htm',],
    'Option 3': ['#','sub7.htm'],
};
// When an option is changed, search the above for matching choices
$('#options').on('change', function () {
    // Set selected option as variable
    var selectValue = $(this).val();

    // Empty the target field
    $('#choices').empty();

    // For each chocie in the selected option
    for (i = 0; i < lookup[selectValue].length; i++) {
        // Output choice in the target field
        $('#choices').append("<option value='" + link[selectValue][i]  + "'+name='" + lookup[selectValue][i]+ "'>" + lookup[selectValue][i] + "</option>");
    }

});

/*Accordion */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
/*Image */
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}
//filter


filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filcolumn");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "filshow");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "filshow");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("filbtn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
//인물 필터링
filterper("all")
function filterper(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
    }
}

function AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("BtnContainer");
var btns = btnContainer.getElementsByClassName("testibtn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
//aaa
(function (win, doc) {
    'use strict';

    // Return if addEventListener isn't supported
    if (!win.addEventListener) {
        return;
    }

    // Store Variables
    var enhanceclass = 'cutsthemustard',
        breadcrumbNav = document.getElementById('js-breadcrumb'),
        breadcrumbToggleClass = 'breadcrumb__toggle',
        breadcrumbHoverClass = 'is-toggled';

    // Remove string quotes to normalize browser behavior
    var removeQuotes = function (string) {
        if (typeof string === 'string' || string instanceof String) {
            string = string.replace(/^['"]+|\s+|\\|(;\s?})+|['"]$/g, '');
        }
        return string;
    };

    // Get value of body generated content
    var checkBreadcrumbMedia = function () {
        var media = window.getComputedStyle(breadcrumbNav, ':after').getPropertyValue('content');
        return removeQuotes(media);
    };

    // Toggle className Helper Function
    var toggleClassName = function (element, toggleClass) {
        var reg = new RegExp('(\\s|^)' + toggleClass + '(\\s|$)');
        if (!element.className.match(reg)) {
            element.className += ' ' + toggleClass;
        } else {
            element.className = element.className.replace(reg, '');
        }
    };

    // Process event on Breadcrumb Nav
    var breadcrumbListener = function (ev) {
        ev = ev || win.event;
        var target = ev.target || ev.srcElement;
        if (target.className.indexOf(breadcrumbToggleClass) !== -1) {
            ev.preventDefault();
            toggleClassName(target.parentNode, breadcrumbHoverClass);
        }
    };

    // Add Enhancement Class
    doc.documentElement.className += ' ' + enhanceclass;

    // Fire checkMedia to get value
    checkBreadcrumbMedia();

    /**
     * Do nothing if pointing device can relay a hover state
     * Else, attach event listener to breadcrumb
     */
    if (checkBreadcrumbMedia() === "hover") {
        return;
    } else {
        breadcrumbNav.addEventListener('click', breadcrumbListener, false);
    }

}(this, this.document));
//breadcrum choice
var lookup = {
    'Option 1': ['Option 1 - Choice 1', 'Option 1 - Choice 2', 'Option 1 - Choice 3'],
    'Option 2': ['Option 2 - Choice 1', 'Option 2 - Choice 2'],
    'Option 3': ['Option 3 - Choice 1'],
};

// When an option is changed, search the above for matching choices
$('#options').on('change', function () {
    // Set selected option as variable
    var selectValue = $(this).val();

    // Empty the target field
    $('#choices').empty();

    // For each chocie in the selected option
    for (i = 0; i < lookup[selectValue].length; i++) {
        // Output choice in the target field
        $('#choices').append("<option value='" + lookup[selectValue][i] + "'>" + lookup[selectValue][i] + "</option>");
    }
});

//menu용
function myFunction() {
    var x = document.getElementById("Topnav");
    if (x.className === "jsnav") {
        x.className += " responsive";
    } else {
        x.className = "jsnav";
    }
}
