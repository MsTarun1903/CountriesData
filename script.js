const populationButton = document.querySelector("#Population")
const languageButton = document.querySelector("#languages");
const output = document.querySelector("#buttonText")

populationButton.addEventListener("click", e => {
  output.innerHTML = ""; 
  output.innerHTML += "10 most populated countries in the world";
  countriesData.forEach(country => {
    output.innerHTML += `
    <div class ="country-data">
    <span class = "left">  ${country.country}</span>
    <span class = "right"> ${country.population}</span>
    </div>`;
  });
  let ctx = document.getElementById('myChart');
  let labels = countriesData.map(data=>data.country);
  let data = countriesData.map(data=> data.population);
  if (myChart){
    chart.destroy();
  }
  let myChart = new Chart(ctx,{
    type: "bar",
    data:{
      labels: labels,
      datasets:[{
        label: "Population",
        data: data,
        backgroundColor: "red"
      }]
    },
    options : {
      scales:{
        yAxes:[{
          ticks:{
            beginAtZero: true
          }
        }]
      }
    }
  });
});

languageButton.addEventListener("click", e => {
  output.innerHTML = ""; 
  output.innerHTML += "10 most Spoken languages in the world";
  languagesData.forEach(language => {
    output.innerHTML += `
    <div class = "language-data">
    <span class = "left"> ${language.language}</span>
    <span class = "right"> ${language.nativeSpeakers}
    </div>`;
  });
  let ctx = document.getElementById('myChart');
  let labels = languagesData.map(data=>data.language);
  let data = languagesData.map(data=>data.nativeSpeakers);
  if(myChart){
    myChart.destroy();
  }
  let myChart = new Chart(ctx,{
    type: "bar",
    data:{
      labels: labels,
      datasets:[{
        label: "Native Speakers",
        data: data,
        backgroundColor: "blue"
      }]
    },
    options : {
      scales:{
        yAxes:[{
          ticks:{
            beginAtZero: true
          }
        }]
      }
    }
  });
});



const countriesData = [
  {rank: 1, country : "china" , population: "1409517397"},
  {rank: 2, country : "India" , population: "1339180127"},
  {rank: 3, country : "United States" , population: "324459463"},
  {rank: 4, country : "Indonesia" , population: "263991379"},
  {rank: 5, country : "Brazil" , population: "209288278"},
  {rank: 6, country : "Pakistan" , population: "197015955"},
  {rank: 7, country : "Nigeria" , population: "190886311"},
  {rank: 8, country : "Bangladesh" , population: "164669751"},
  {rank: 9, country : "Russia" , population: "143989754"},
  {rank: 10, country : "Mexico" , population: "129163276"},
]

const languagesData = [
  { language: "Chinese (Mandarin)", nativeSpeakers: 1100000000 },
  { language: "Spanish", nativeSpeakers: 460000000 },
  { language: "English", nativeSpeakers: 375000000 },
  { language: "Hindi", nativeSpeakers: 310000000 },
  { language: "Arabic", nativeSpeakers: 310000000 },
  { language: "Bengali", nativeSpeakers: 230000000 },
  { language: "Portuguese", nativeSpeakers: 220000000 },
  { language: "Russian", nativeSpeakers: 150000000 },
  { language: "Japanese", nativeSpeakers: 130000000 },
  { language: "Lahnda/Punjabi", nativeSpeakers: 100000000 }
];


populationButton.addEventListener("click",e=>{

});


languageButton.addEventListener("click",e=>{

})
