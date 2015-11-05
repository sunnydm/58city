/**
 * Created by Administrator on 2015/10/23.
 */
$(function(){
    var logins=$('#loginNav li a');
    for(var i=0;i<logins.length;i++){
        logins[i].addEventListener('click',loginsClick);
    }
    function loginsClick(){
        for(var i=0;i<logins.length;i++){
            console.log(this);
            if(this==logins[i]){
                $('#login'+i).css('display','block');
            }
            else{
                $('#login'+i).css('display','none');
            }
        }
    }
})