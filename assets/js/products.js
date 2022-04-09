 export var products = [
    { id: 1, name: "A central ", desc: "BARADOURA, Products", img: "assets/images/1.jpg" },
    { id: 3, name: "A central curvature", desc: "BARADOURA, Products", img: "assets/images/3.jpg" },
    { id: 2, name: "A central curvature", desc: "BARADOURA, Products", img: "assets/images/4.jpg" },
    { id: 4, name: "A central curvature", desc: "BARADOURA, Products", img: "assets/images/2.jpg" },
    { id: 5, name: "A central curvature", desc: "BARADOURA, Products", img: "assets/images/8.jpg" },
    { id: 6, name: "A central curvature", desc: "BARADOURA, Products", img: "assets/images/5.jpg" },
    { id: 7, name: "A central curvature", desc: "BARADOURA, Products", img: "assets/images/6.jpg" },
    { id: 8, name: "A central curvature", desc: "BARADOURA, Products", img: "assets/images/7.jpg" }
]



export var projects = [
    { id: 1, name: "Beverly Hills ", img: "assets/images/p1.jpg" },
    { id: 3, name: "Beverly Hills", img: "assets/images/p3.jpg" },
    { id: 2, name: "Beverly Hills", img: "assets/images/p4.jpg" },
    { id: 4, name: "A central curvature", img: "assets/images/p2.png" },
    { id: 5, name: "A central curvature", img: "assets/images/p8.jpg" },
    { id: 6, name: "A central curvature", img: "assets/images/p5.jpg" },
    { id: 7, name: "A central curvature", img: "assets/images/p6.jpg" },
    { id: 8, name: "A central curvature", img: "assets/images/p7.jpg" }
]


export function openImg(id){
    console.log('ffffffffffffff')
   $('#exampleModalLabel').text(products[id].name);
   $('#show-img').attr('src',products[id].img)
   $('.fa-arrow-right').attr('data-id', id)
   $('.fa-arrow-left').attr('data-id', id)

   // console.log(products[id - 1])
}
