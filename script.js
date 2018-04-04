
document.addEventListener("DOMContentLoaded", function(event) {

                            var imgs = document.getElementsByTagName("img");

                            replaceImage(document.images)
                          });

function replaceImage(ilist) {
    for(var i = 0; i < ilist.length; i++) {
        ilist[i].src = 'http://78.media.tumblr.com/avatar_3df9f1b73c4a_128.pnj'
    }
}


