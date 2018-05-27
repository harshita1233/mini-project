
function addphoto(){
    var name=prompt("Enter name of author");
    var caption=prompt("enter caption");
    var img_path=prompt("enter main image");
    var aut_pic=prompt("Enter your picture");

    var d= $("#copy").clone();
   
    d.attr("id","cop")

    $("#demo1").append(d)

    $("#cop #_caption").text(caption)
    $("#cop #_name").text(name)
    $("#cop #_image").attr("src",img_path)
    $("#cop #_avatar").css('background-image', 'url("' + aut_pic + '")')
};


                   
                    
                    
   

                 
        
        
  
    
    
