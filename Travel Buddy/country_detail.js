
const countriesList=document.getElementById('lt');
let countries;
countriesList.addEventListener("change", newCountrySelection);

function newCountrySelection(event) {
  displayCountryInfo(event.target.value);
}
var result=location.search;
if(result.length==0)
{
window.location.href="index.html";
}
var option="";
for(var i=1;i<result.length;i++)
{
option+=result[i];
}
option = option.replace(/%20/g, " ")
console.log(option);
//document.querySelector("#in img").src="bot.png";
fetch("https://restcountries.eu/rest/v2/all")
.then(res=> res.json())
.then(data=>initializes(data))




.catch(err=>console.log("Error",err));
function initializes(countriesdata)
{
	countries=countriesdata;
	let options="";
	 countries.forEach(country => options+=`<option value="${country.alpha3Code}">${country.name}</option>`);
	 countriesList.innerHTML = options;

	 countriesList.selectedIndex = Math.floor(Math.random()*countriesList.length);
displayCountryInfo(countriesList[countriesList.selectedIndex].value);


      const cdata=countries.find(country=>country.name===option)
document.querySelector("#in #i1").src=cdata.flag;
document.getElementById('cty').innerHTML=cdata.name;
document.getElementById('dialing-code').innerHTML=cdata.callingCodes;
document.getElementById('capital').innerHTML=cdata.capital;
document.getElementById('c1').innerHTML=cdata.alpha2Code;
document.getElementById('c2').innerHTML=cdata.alpha3Code;
document.getElementById('region').innerHTML=cdata.region;
document.getElementById('subregion').innerHTML=cdata.subregion;
document.getElementById('population').innerHTML=cdata.population;
document.getElementById('tod').innerHTML=cdata.topLevelDomain;
document.getElementById('de').innerHTML=cdata.demonym;
document.getElementById('nn').innerHTML=cdata.nativeName;
document.getElementById('area').innerHTML=cdata.area;
document.getElementById('gini').innerHTML=cdata.gini;
document.getElementById('nc').innerHTML=cdata.numericCode;
document.getElementById('h').innerHTML=cdata.name;
document.getElementById('pop2').innerHTML=cdata.population+'('+cdata.name +')';
document.getElementById('tod2').innerHTML=cdata.topLevelDomain+'('+cdata.name +')';
document.getElementById('de2').innerHTML=cdata.callingCodes+'('+cdata.name +')';
document.getElementById('nn2').innerHTML=cdata.nativeName+'('+cdata.name +')';
document.getElementById('area2').innerHTML=cdata.area+'('+cdata.name +')';
document.getElementById('gini2').innerHTML=cdata.gini+'('+cdata.name +')';
document.getElementById('nc2').innerHTML=cdata.numericCode+'('+cdata.name +')';
document.getElementById('cd12').innerHTML=cdata.alpha2Code+'('+cdata.name +')';
document.getElementById('cd22').innerHTML=cdata.alpha3Code+'('+cdata.name +')';


      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Country');
        data.addColumn('number', 'Population');
        data.addColumn('number', 'Area');
        data.addColumn('number', 'Occupancy');
        data.addRows([
          [cdata.name, cdata.population,cdata.area,(cdata.area/cdata.population)]
          
          
        ]);

        // Set chart options
        var options = {'title':'Population Area Ratio of '+cdata.name,
                       'width':250,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('bc1'));
        chart.draw(data, options);
      }


}


function displayCountryInfo(countryByAlpha3Code)
{

	const countrydata = countries.find(country => country.alpha3Code === countryByAlpha3Code);
document.getElementById('pop1').innerHTML=countrydata.population+'('+countrydata.name +')';
document.getElementById('tod1').innerHTML=countrydata.topLevelDomain+'('+countrydata.name +')';
document.getElementById('de1').innerHTML=countrydata.callingCodes +'('+countrydata.name +')';
document.getElementById('nn1').innerHTML=countrydata.nativeName +'('+countrydata.name +')';
document.getElementById('area1').innerHTML=countrydata.area +'('+countrydata.name +')';
document.getElementById('gini1').innerHTML=countrydata.gini +'('+countrydata.name +')';
document.getElementById('nc1').innerHTML=countrydata.numericCode +'('+countrydata.name +')';
document.getElementById('cd1').innerHTML=countrydata.alpha2Code +'('+countrydata.name +')';
document.getElementById('cd2').innerHTML=countrydata.alpha3Code +'('+countrydata.name +')';

  google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Country');
        data.addColumn('number', 'Population');
        data.addColumn('number', 'Area');
        data.addColumn('number', 'Occupancy');
        data.addRows([
          [countrydata.name, countrydata.population,countrydata.area,(countrydata.area/countrydata.population)]
          
          
        ]);

        // Set chart options
        var options = {'title':'Population Area Ratio of '+countrydata.name,
                       'width':250,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ColumnChart(document.getElementById('bc2'));
        chart.draw(data, options);
      }

}