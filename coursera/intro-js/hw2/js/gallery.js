/*Name this external file gallery.js*/

function upDate(previewPic) {
    var imgDiv = document.getElementById('image');
    imgDiv.style.backgroundImage = 'url(' + previewPic.src + ')';
    imgDiv.innerHTML = previewPic.alt;
}

function unDo() {
    var imgDiv = document.getElementById('image');
    imgDiv.style.backgroundImage = '';
    imgDiv.innerHTML = 'Hover over an image below to display here.';
}