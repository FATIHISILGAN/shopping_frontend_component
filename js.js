var ürün1mik=0;
var ürün2mik=0;

var ürün1fiyat=0;
var ürün2fiyat=0;

var ürün1netfiyat=0;// mik*fiyat(1)

var ürün2netfiyat=0;// mik*fiyat(2)


var toplam_fiyat=0;//ürün1netfiyat+ürün2netfiyat


$(document).ready(function(){

    ürün1netfiyat=$("#ilk_ürün_fiyat").html();
    ürün2netfiyat=$("#iki_ürün_fiyat").html();

$("#ilk_mik_art_btn").click(function(){
 
           ürün1mik++;
           
           $("#ilk_ürün_mik").val(ürün1mik.toString());

           ürün1fiyat=$("#ilk_ürün_fiyat").html();

             ürün1netfiyat=ürün1mik*ürün1fiyat;

           $("#ilk_ürün_net_fiyat").html(ürün1mik*ürün1fiyat);

        
    })


    $("#ilk_mik_eks_btn").click(function(){
 
        if(ürün1mik>0){

     
        ürün1mik--;
        $("#ilk_ürün_mik").val(ürün1mik.toString());
    }

    ürün1fiyat=$("#ilk_ürün_fiyat").html();
    ürün1netfiyat=ürün1mik*ürün1fiyat;

    $("#ilk_ürün_net_fiyat").html(ürün1mik*ürün1fiyat);
 })




 //----------------------------------------------

 $("#iki_mik_art_btn").click(function(){
 
    ürün2mik++;
    $("#iki_ürün_mik").val(ürün2mik.toString());


    ürün2fiyat=$("#iki_ürün_fiyat").html();
    ürün2netfiyat=ürün2mik*ürün2fiyat;
    $("#iki_ürün_net_fiyat").html(ürün2mik*ürün2fiyat);
})


$("#iki_mik_eks_btn").click(function(){

 if(ürün2mik>0){


 ürün2mik--;
 $("#iki_ürün_mik").val(ürün2mik.toString());
}
ürün2fiyat=$("#iki_ürün_fiyat").html();

ürün2netfiyat=ürün2mik*ürün2fiyat;
$("#iki_ürün_net_fiyat").html(ürün2mik*ürün2fiyat);
})

 //----------------------------------------------


 $("#ilk_ürün_sıfırla").click(function(){

    $("#ilk_ürün_mik").val(0);
    ürün1fiyat=$("#ilk_ürün_fiyat").html();
    ürün1netfiyat=0;
    $("#ilk_ürün_net_fiyat").html(0);

   })

   
 $("#iki_ürün_sıfırla").click(function(){

    $("#iki_ürün_mik").val(0);
   
    ürün2fiyat=$("#iki_ürün_fiyat").html();
    ürün2netfiyat=0;
    $("#iki_ürün_net_fiyat").html(0);
})

//----------------------------------------------------------

$("#sepete_git_btn").click(function(){

  
    localStorage.setItem('hafıza_ilk_net', JSON.stringify(ürün1netfiyat)); //net fiyatları ön belleğe al
    localStorage.setItem('hafıza_iki_net', JSON.stringify(ürün2netfiyat)); //net fiyatları ön belleğe al

    window.location.href ="ödeme.html";
})


});