function run(){
    let htmlcode=document.getElementById('htmlcode').value;
    let csscode=document.getElementById('csscode').value;
    let jscode=document.getElementById('jscode').value;
    let output=document.getElementById('output');

    output.contentDocument.body.innerHTML=htmlcode+"<style>"+csscode+"</style>"
    let script=output.contentDocument.createElement("script");
    script.innerHTML=jscode;
    output.contentDocument.body.appendChild(script);
}
