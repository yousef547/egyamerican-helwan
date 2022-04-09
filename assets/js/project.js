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
console.log(id);
$('#project-imgs').attr('src', projects[id].img)
$('#title-project').text(projects[id].name);
$('#project-text').text(projects[id].name);
$('#name-project').text(projects[id].name);
$('#project-name').text(projects[id].name);

if(id == projects.length - 1) {
    $('#right').addClass('d-none')
} else if(id == 0){
    $('#left').addClass('d-none')
}

$("#right").on('click', function () {
    id++;
    $("#right > a").attr('href', `project.html?id=${id}`);
   
})

$("#left").on('click', function () {
    id--;
    $("#left > a").attr('href', `project.html?id=${id}`)
})


