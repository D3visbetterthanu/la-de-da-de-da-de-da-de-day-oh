var canvass= new fabric.Canvas("canvass");
var BD_epic=" ";
function pogchampp (){
    fabric.Image.fromURL("BirthdayImage.jpg",function(Img){

        BD_epic=Img;
        BD_epic.scaleToWidth(150);
        BD_epic.scaleToHeight(140);
        BD_epic.set({
            top: 0,
            left: 0,

        });
        canvas.add(BD_epic);
    });
}
play=bdayaudio.mp3;