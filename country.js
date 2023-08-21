class Country {
    constructor(name, lang, greeting, colors, img) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
        this.img = img;
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"], "https://as2.ftcdn.net/v2/jpg/01/22/01/51/1000_F_122015145_k2jNV8ed5pAlYi9fRjQAzjtZ8DVAYhF9.jpg");
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"], "https://media-server.clubmed.com/image/jpeg/1024/auto/crop/center/70/https%3A%2F%2Fns.clubmed.com%2Fnmea%2F2019%2FB2C%2F341%2FRWD%2Fdestination%2FMexico%2FNEW%2Fmetropolitan_cathedral.jpg");
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"], "https://www.state.gov/wp-content/uploads/2019/04/shutterstock_1105071320v2-2157x1406.jpg")


function SwitchCountry() {
    let input = document.querySelector("#CountryList").value;
    console.log(input);
    let country;

    if (input === "USA") {
        //set country to usa 
        country = usa;
    }
    else if (input === "Mexico") {
        country = mexico;
    }
    else if (input === "Algeria") {
        country = algeria;
    }
    document.querySelector("#CountryName").innerText = country.name;
    let langNode = document.querySelector("#OfficialLanguage");
    //nameNode.innerText = country.name;
    langNode.innerText = country.lang;
    document.querySelector("#HelloWorld").innerText = country.greeting;

    document.querySelector("#Color1").style.backgroundColor = country.colors[0];
    document.querySelector("#Color2").style.backgroundColor = country.colors[1];
    document.querySelector("#Color3").style.backgroundColor = country.colors[2];
    
    let imgNode = document.querySelector("#Image");
     imgNode.setAttribute("src", country.img);
    
    //document.querySelector("#Image").innerText = country.img;

    
    
    
}
    


//function DisplayColors(){
  //  document.querySelector(".color1").style.backgroundColor = Country.country[0];
    //document.querySelector(".color2").style.backgroundColor = colorNode[1];
//    document.querySelector(".color3").style.backgroundColor = colorNode[2];
//}
