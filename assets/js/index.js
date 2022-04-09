// import { products,projects } from './products.js';
var products = [
    { id: 1, name: "A central ", desc: "BARADOURA, Products",class:"baradoura", img: "assets/images/1.jpg" },
    { id: 3, name: "A central curvature", desc: "BARADOURA, Products", class:"interlock", img: "assets/images/3.jpg" },
    { id: 2, name: "A central curvature", desc: "BARADOURA, Products", class:"interlock", img: "assets/images/4.jpg" },
    { id: 4, name: "A central curvature", desc: "BARADOURA, Products", class:"interlock", img: "assets/images/2.jpg" },
    { id: 5, name: "A central curvature", desc: "BARADOURA, Products", class:"block", img: "assets/images/8.jpg" },
    { id: 6, name: "A central curvature", desc: "BARADOURA, Products", class:"block", img: "assets/images/5.jpg" },
    { id: 7, name: "A central curvature", desc: "BARADOURA, Products", class:"block", img: "assets/images/6.jpg" },
    { id: 8, name: "A central curvature", desc: "BARADOURA, Products", class:"block", img: "assets/images/7.jpg" }
]



var projects = [
    { id: 1, name: "Beverly Hills ", img: "assets/images/p1.jpg" },
    { id: 3, name: "Beverly Hills", img: "assets/images/p3.jpg" },
    { id: 2, name: "Beverly Hills", img: "assets/images/p4.jpg" },
    { id: 4, name: "A central curvature", img: "assets/images/p2.png" },
    { id: 5, name: "A central curvature", img: "assets/images/p8.jpg" },
    { id: 6, name: "A central curvature", img: "assets/images/p5.jpg" },
    { id: 7, name: "A central curvature", img: "assets/images/p6.jpg" },
    { id: 8, name: "A central curvature", img: "assets/images/p7.jpg" }
]

var pageIds = localStorage.getItem("namePage");
console.log("#"+pageIds);
$("#"+pageIds).addClass('activetion').siblings().removeClass('activetion');


$(function () {
    'use strict';
    var featured = '';

    for (var i = 0; i < products.length; i++) {
        featured += `<div class="content col-md-3 ">
    <div class="grid ${products[i].class}">
        <figure class="effect-goliath w-100">
            <img  src="${products[i].img}" alt="img24" />
            <figcaption>
                <h2 class="w-100">${products[i].name} <br><span>project</span></h2>
                <p class=" w-100"><a href="project.html?id=${i}" class="eyes"><i class="fa fa-eye text-white"></i></a>
                    <a class="shows" data-bs-toggle="modal" onclick="imgProject(${i})" data-bs-target="#exampleModalFullscreen"><i class="fa fa-arrows-alt text-white"></i></a></p>
            </figcaption>
        </figure>
    </div>
</div>`;
    }

    document.getElementById('featured-product').innerHTML = featured;

    //featured

    $(' .featured ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all') {
            $('.shuffle-images .col-md-3').css('display', 'block');
        } else {

            $('.shuffle-images .col-md-3').css('display', 'none');
            console.log($(this).data('class'))
            $($(this).data('class')).parent().css('display', 'block');
        }
    });
});







$('.nav-item').on('click', function () {
    $(this).addClass('activetion').siblings().removeClass('activetion');
    localStorage.setItem("namePage", this.id);
});




var container = '';
for (var i = 0; i < products.length; i++) {
    container += `  <div class="col-md-3">
    <div class="position-relative product">
        <div class="over-lay">
            <a  class="bg-red float-end py-1 px-2 m-auto icon-show" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="openImg(${i})">
                <i class="fa fa-arrows-alt text-dark "></i>
            </a>
            <div class="desc d-flex flex-column justify-content-center align-items-center h-100 text-white">
                <a href="product.html?id=${i}">
                ${products[i].name}
                </a>
                <p>${products[i].desc}</p>
            </div>
        </div>
        <img src="${products[i].img}" class="w-100" alt="" srcset="">
    </div>
</div>`;
}
document.getElementById('listOfProduct').innerHTML = container;


function openImg(id) {
    console.log('ffffffffffffff')
    $('#exampleModalLabel').text(products[id].name);
    $('#show-img').attr('src', products[id].img)
    $('.fa-arrow-right').attr('data-id', id)
    $('.fa-arrow-left').attr('data-id', id)

    // console.log(products[id - 1])
}
var right = document.getElementById('right');
var left = document.getElementById('left');

var index2 = left.getAttribute('data-id')

var index = 0


function next() {
    index++;
    if (index == products.length) {
        index = 0;
    }
    $('#exampleModalLabel').text(products[index].name);
    $('#show-img').attr('src', products[index].img)
    // imgInLayaout.style.backgroundImage=`url(${srcImg})`;
}



function perv() {
    index--;
    if (index < 0) {
        index = products.length - 1;
    }
    $('#exampleModalLabel').text(products[index].name);
    $('#show-img').attr('src', products[index].img)
}


var allProjects = '';
for (var i = 0; i < projects.length; i++) {
    allProjects += `   <div class="content col-md-3">
    <div class="grid ">
        <figure class="effect-goliath">
            <img src="${projects[i].img}" alt="img24" />
            <figcaption>
                <h2 class="w-100">${projects[i].name} <br><span>project</span></h2>
                <p class=" w-100"><a href="project.html?id=${i}" class="eyes"><i class="fa fa-eye text-white"></i></a>
                    <a class="shows" data-bs-toggle="modal" onclick="imgProject(${i})" data-bs-target="#exampleModalFullscreen"><i class="fa fa-arrows-alt text-white"></i></a></p>
            </figcaption>
        </figure>
    </div>
</div>`;
}
document.getElementById('listOfprojects').innerHTML = allProjects;
var indexProject;
function imgProject(indexs) {
    indexProject = indexs;
    $('#img-project').attr('src', projects[indexs].img)
    $('#exampleModalFullscreenLabel').text(projects[indexs].name)
}

$('#project-right').on('click', function () {
    indexProject++;
    if (indexProject == products.length) {
        indexProject = 0;
    }
    console.log(indexProject)
    $('#img-project').attr('src', projects[indexProject].img)
    $('#exampleModalFullscreenLabel').text(projects[indexProject].name)
})

$('#project-left').on('click', function () {
    indexProject--;
    if (indexProject < 0) {
        indexProject = projects.length - 1;
    }
    $('#img-project').attr('src', projects[indexProject].img)
    $('#exampleModalFullscreenLabel').text(projects[indexProject].name)
})





var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}





