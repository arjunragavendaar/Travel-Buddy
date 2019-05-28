let countries;
var elem = document.createElement("img");

elem.setAttribute("height", "100%");
elem.setAttribute("width", "100%");
elem.setAttribute("border-radius", "100%");
elem.setAttribute("alt", "Country");
fetch("https://restcountries.eu/rest/v2/all")
.then(res=> res.json())
.then(data=>initialize(data))



.catch(err=>console.log("Error",err));

function initialize(countriesdata)
{
	countries=countriesdata;
      
}
function execute(v)
      { 
      	var n="";
      	 n+=v[0].toUpperCase();
      	for(var i=1;i<v.length;i++)
      	{  if(v[i]===' ')
             {
             	n+=v[i];
             }
             else
             {
             	if(v[i-1]!=' ')
             	{
            n+=v[i].toLowerCase();
        }
        else
        {
        	n+=v[i].toUpperCase();
         }
        }
      	}
      	console.log(n);
      	const countrydata=countries.find(country=>country.name===n)
   document.getElementById('tel').style.display='none'; 
   document.getElementById('bot').style.display='none';
   document.getElementById('cot').style.display='block';  	
   document.getElementById('fl').style.display='block';
   document.getElementById('cot').innerHTML=countrydata.name; 
elem.src =countrydata.flag ;
a = document.createElement('a');
    a.href =  'country_details.html?'+countrydata.name; 
document.getElementById("fl").appendChild(a);
a.appendChild(elem);


      }

