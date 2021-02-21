 var btn1 = document.getElementById("btn1");
 btn1.addEventListener('click',()=>{
   // fetch request to api
   fetch('https://corona.lmao.ninja/v2/countries')
   .then((response)=>{
      return(response.json());

   })
    .then((data) =>{
      var results = document.getElementById("results");
      var template = '<h1 class="mt-8">Covid Cases </h2>'
       data.forEach((element) => {
         template +=`<ul class="list-group">
         <li class="list-group-item active mt-5"><b>Country:${element.country}</b></li>
         <li  class="list-group-item  bg-warning   "  ><b>  Cases: ${element.cases}</b></li>
         <li  class="list-group-item bg-danger  "  ><b>Deaths:  ${element.deaths}</b></li>
         </ul>`



       });
       results.innerHTML = template;



    })


 })
