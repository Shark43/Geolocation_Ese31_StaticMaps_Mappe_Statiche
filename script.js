/**
 * Created by e.marchisio.9874 on 15/05/2017.
 */
window.onload=function()
{
    var path="http://maps.googleapis.com/maps/api/staticmap?";//? serve per i parametri
    //path+="center=41.890617421405366,12.493300437927246";//il + si può sottointendere
    path+="center= MONTARIBALDI Az. Agricola di Taliano Luciano e Taliano Roberto, Barbaresco, CN";
    path+="&zoom=17";//parametro per zoomare
    path+="&size=1200x800";
    path+="&key=AIzaSyB2oQYf3hnb1Tjb1gd8iPM8MsT_vuAn5sk";
    path+="&sensor=false";
    path+="&markers=color:red|size:big|label:M|MONTARIBALDI";

    var body=document.getElementById("wrapper");
    var mappa= ['roadmap','satellite','hybrid','terrain','streetview'];
    for(var i=0;i<5;i++)
    {
        var btn = document.createElement("button");
        btn.setAttribute("type", "button");
        body.appendChild(btn);
        btn.innerHTML = mappa[i];
        btn.setAttribute("tipo",mappa[i]);
        btn.setAttribute("i", i);
        btn.addEventListener("click", function()
        {
            visualizza(path,this);
        });
    }
 };

function visualizza(path, sender)
{
    //alert(path+" "+sender.getAttribute("tipo"));
    var img = document.getElementById("imgBox");
    i= sender.getAttribute("i");

    if(i<4)
    {
        path+="&maptype="+sender.getAttribute("tipo");
    }else
    {
        path = path.replace("staticmap", "streetview");
        path = path.replace("center", "location");
        path+="&heading=270";
        path+="&pitch=0";
        path+="&fov=30";
    }
    img.setAttribute("src", path);
    //alert(path);
}