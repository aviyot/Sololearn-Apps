window.onload = function(){

    var FRAMEWORK_LINKS = [{
    bootstrap :"https://getbootstrap.com/",
    }
    ]
    var html = `
       <div id="top">
       <!--
       <div>
        <button>MENU</button>
        <span>CSS RESET</span
        </div>
        -->
    <nav>
    <header>CSS FRAMEWORK</header>
    </nav>
    <hr/>
    <div id="cssbtn">
    <button id="native">native</button>
    <button id="bootstrap">boostrap</button>
    <button id="mat">Materialize</button>
    <button id="fnd">Foundation</button>
    <button id="blm">Bulma</button>
    <button id="uikit">UIkit</button>
    <button id="nor">normalize</button>
    <button id="pure">PURE.css</button>
    <button id="tw">Tailwind</button>
    <button id ="w3">w3.css</button>
    <button id ="mg">milligram</button>
    <button id ="sp">Spectre</button>
    <button id = "pic">Picnic CSS</button>
    </div>
    <hr/>
    <textarea id="htmlinput" placeholder = "Select framework and Enter HTML code here and press ENTER to test" rows="4">
    </textarea></br>
    <input id="enter" type ="button" value="ENTER"
    </div>
    `
    
    document.querySelector("body").insertAdjacentHTML("afterbegin",html)
    
    document.querySelector("#enter").addEventListener("click",function(){
    
    var htmlTag = document.querySelector("#htmlinput").value;
        document.querySelector("body").insertAdjacentHTML("afterend",htmlTag)
    })
    
    var link = document.createElement('link');
    link.rel = 'stylesheet'; 
    document.head.appendChild(link);
    
    function addHref(el,href){
       document.querySelector(el).addEventListener("click",()=>{
            link.href=href;
        })
    }
    
    
    addHref("#bootstrap","https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css")
    
    addHref("#native","")
    
    
    addHref("#mat","https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
    )
    
    addHref("#fnd","https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/css/foundation.min.css"
    )
    
    addHref("#blm","https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css"
    )
    
    addHref("#uikit","css/uikit.min.css")
    
    addHref("#nor","https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
    )
    
    addHref("#pure","https://unpkg.com/purecss@2.0.3/build/pure-min.css"
    )
    
    addHref("#tw","https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
    )
    
    addHref("#w3","https://www.w3schools.com/w3css/4/w3.css");
    
    
    addHref("#mg","https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.0/milligram.css");
    
    addHref("#sp","https://unpkg.com/spectre.css/dist/spectre.min.css");
    
    addHref("#pic","https://cdn.jsdelivr.net/npm/picnic")
    }
    