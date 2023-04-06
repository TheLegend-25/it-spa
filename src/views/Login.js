export function Login(){
    var i =1
    const checkbox = document.createElement('checkbox');
    checkbox.innerHTML=`
    <div class="srodek">
    <label class="switch">
    <input type="checkbox" onclick={change()}>
    <span class="slider round"></span>
    </label> 
    </div>
    <script>
    function change(){
        var i=2
     }
    </script>
    `;
     
    // checkbox.addEventListener('change', ()=>{
    //     var i =2
    //     return i
    // })

    const section = document.createElement('section');
    
    if (i === 1){
    
    section.innerHTML=`
    <div id="login">
        <div class="blok">
            <h2>Zaloguj się na swoje konto</h2>
        
        <form>  
            <div id="okna">  
                <div>
                  <label for="username">e-mail:</label>
                  <input type="email" name="username">
                </div>
                <div>
                    <label for="password">Hasło: </label>
                    <input type="password" name="password">
                </div>
            </div>
            <div>
                <input id="loguj" type="submit" value="Loguj">
            </div>
        </form>
        </div>
    `;}
    else{
        section.innerHTML=`
        <div id="login">
        <div class="blok">
            <h2>Zarejestruj swoje konto</h2>
        
        <form>  
            <div id="okna">  
                <div>
                  <label for="username">e-mail:</label>
                  <input type="email" name="username">
                </div>
                <div>
                    <label for="password">Hasło: </label>
                    <input type="password" name="password">
                </div>
            </div>
            <div>
                <input id="loguj" type="submit" value="Loguj">
            </div>
        </form>
        </div>`;
        };
    section.append(checkbox)
    
    return section;
}