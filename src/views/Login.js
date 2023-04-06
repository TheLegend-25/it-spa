export function Login(){
    var i =1
    const checkbox = document.createElement('checkbox');
    checkbox.innerHTML=`
    <div class="srodek">
    <label class="switch">
    <input type="checkbox" id="hehe">
    <span class="slider round"></span>
    </label> 
    </div>
    
    `;
     const switc = checkbox.querySelector("#hehe")

     

    const section = document.createElement('section');
    
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
    `;

   switc.addEventListener('change', ()=>{

    if (i % 2 == 0){
    
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
    `;
        i = i+1
        }
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
        i = i+1
        };
        })

    checkbox.append(section)
    
    return checkbox;
}