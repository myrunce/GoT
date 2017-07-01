var API = "http://anapioficeandfire.com/api/houses/?name="
var house = ''

$(document).ready(function(){
    $(document).on("click", "img", function(){
        house = (this).attr('alt');
        var gotAPI = API + house;
        var html = ''
        $.get(gotAPI, function(data){
            
            var houseInfo = {
                name: data.name,
                words: data.words,
                titles: data.titles
            }
            
        })


    })


})