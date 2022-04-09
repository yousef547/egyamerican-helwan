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




let url_str = window.location.href;
let url = new URL(url_str);
let search_params = url.searchParams;
let id = search_params.get('id');
console.log(products[id]);
console.log(id);
$('#proudct').attr('src', products[id].img)
$('#title-product').text(products[id].name);
$('#title').text(products[id].name);
$('#title2').text(products[id].name);
$('#class-product').text(products[id].class);


if(id == products.length - 1) {
    $('#right').addClass('d-none')
} else if(id == 0){
    $('#left').addClass('d-none')
}

$("#right").on('click', function () {
    id++;
    $("#right > a").attr('href', `product.html?id=${id}`);
   
})

$("#left").on('click', function () {
    id--;
    $("#left > a").attr('href', `product.html?id=${id}`)
})


