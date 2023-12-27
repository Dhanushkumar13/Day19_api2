async function disneyapi(){
    try {
        const response = await fetch("https://v2.jokeapi.dev/joke/Any")
        .then((response)=>response.json())
        .then((result)=>{
                console.log(result)
                document.querySelector(".joke").innerHTML=
                `
                <div class= "container">
                <div class="description">
                <h1>
                Joke: 
                <div class="text"> <p> ${result.setup} <p></div>
                </h1>
                <div>
                <h5>
                Answer:
                <div>
                ${result.delivery}
                </div>
                </h5>
                </div>   
                </div>
                </div>
                `

        })
    } catch (error) {
        if(error){
            console.log(error);
        }
        
    }
}

disneyapi();