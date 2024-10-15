let images = [
    "pic (1).jpg",
"pic (2).jpg",
"pic (3).jpg",
"pic (4).jpg",
"pic (5).jpg",
"pic (6).jpg",
"pic (7).jpg",
"pic (8).jpg",
"pic (9).jpg",
"pic (10).jpg",
"pic (11).jpg",
"pic (12).jpg",
"pic (13).jpg",
"pic (14).jpg",
"pic (15).jpg",
"pic (16).jpg",
"pic (17).jpg",
"pic (18).jpg",
"pic (19).jpg",
"pic (20).jpg",
"pic (21).jpg",
"pic (22).jpg",
"pic (23).jpg",
"pic (24).jpg",
"pic (25).jpg",
"pic (26).jpg",
"pic (27).jpg",
"pic (28).jpg",
"pic (29).jpg",
"pic (30).jpg",
"pic (31).jpg",
"pic (32).jpg",
"pic (33).jpg",
"pic (34).jpg",
"pic (35).jpg",
"pic (36).jpg",
"pic (37).jpg",
"pic (38).jpg",
"pic (39).jpg",
"pic (40).jpg",
"pic (41).jpg",
"pic (42).jpg",
"pic (43).jpg",
"pic (44).jpg",
"pic (45).jpg",
"pic (46).jpg",
"pic (47).jpg",
"pic (48).jpg",
"pic (49).jpg",
"pic (50).jpg",
"pic (51).jpg",
"pic (52).jpg",
"pic (53).jpg",
"pic (54).jpg",
"pic (55).jpg",
"pic (56).jpg",
"pic (57).jpg",
"pic (58).jpg",
"pic (59).jpg",
"pic (60).jpg",
"pic (61).jpg",
"pic (62).jpg",
"pic (63).jpg",
"pic (64).jpg",
"pic (65).jpg",
"pic (66).jpg",
"pic (67).jpg",
"pic (68).jpg",
"pic (69).jpg",
"pic (70).jpg",
"pic (71).jpg",
"pic (72).jpg",
"pic (73).jpg",
"pic (74).jpg",
"pic (75).jpg",
"pic (76).jpg",
"pic (77).jpg",
"pic (78).jpg",
"pic (79).jpg",
    // Добавь все 79 изображений
];

let currentIndex = 0;

function showImage(index) {
    const comicImage = document.getElementById("comicImage");
    comicImage.src = images[index];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

