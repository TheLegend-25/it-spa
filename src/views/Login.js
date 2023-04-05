export function Login(){
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



    return section;
}