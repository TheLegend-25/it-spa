import swal from "sweetalert";
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
    // bazowe logowanie
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
                <input class="loguj" id="loguj" type="submit" value="Loguj">
            </div>
        </form>
        </div>
    `;

   switc.addEventListener('change', ()=>{

    //logowanie po switchu
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
                <input class="loguj" id="loguj" type="submit" value="Loguj">
            </div>
        </form>
        </div>
    `;
        i = i+1
        }
        // Rejestracja
    else{
        section.innerHTML=`
        <div id="login">
        <div class="blok">
            <h2>Zarejestruj swoje konto</h2>
        
        <form>  
            <div id="okna">  
                <div>
                  <label for="username">e-mail:</label>
                  <input id="regemail" type="email" name="username">
                </div>
                <div>
                    <label for="password">Hasło: </label>
                    <input id="regpwd" type="password" name="password">
                </div>
                <div>
                    <label for="password">Powtórz Hasło: </label>
                    <input id="pwdrpt" type="password" name="password">
                </div>
            </div>
            <div>                
                <button class="loguj" id="regbtn" type="button">Rejestruj</button>
            </div>
        </form>
        </div>`;
        i = i+1
        const regemail = section.querySelector('#regemail')
        let validEmail = false
        let validRegpwd = false
        let validPwdrpt = false
        const regpwd = section.querySelector('#regpwd')
        const pwdrpt = section.querySelector('#pwdrpt')
        const regbtn = section.querySelector('#regbtn')
        regbtn.disabled = true
    
        regemail.addEventListener("change",()=>{
            const emailRegex =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            if (regemail.value.match(emailRegex) && regemail.value !== "") {
                validEmail = true
            } else {
                validEmail = false
                swal("Wpisz poprawny adres e-mail")
            }
            if (validEmail && validRegpwd && validPwdrpt){
                regbtn.disabled = false
            }else{
                regbtn.disabled = true
            }
        })

        regpwd.addEventListener("change",()=>{
            const passwordRegex =/^(?=.*\d)(?=.*[!@#$%^&*_])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            if (regpwd.value.match(passwordRegex)){
                validRegpwd = true
            } else{
                validRegpwd = false
                swal("Hasło musi zawierać co najmniej 8 znaków, w tym: dużą i małą literę, cyfrę oraz znak specjalny")
                regpwd.value = null
            }
            if (validEmail && validRegpwd && validPwdrpt){
                regbtn.disabled = false
            }else{
                regbtn.disabled = true
            }

        })

        pwdrpt.addEventListener("change",()=>{
            if (pwdrpt.value === regpwd.value){
                validPwdrpt = true
            } else{
                swal("Podane hasła nie są takie same")
                validPwdrpt = false
                pwdrpt.value = null
                regpwd.value = null
            }
            if (validEmail && validRegpwd && validPwdrpt){
                regbtn.disabled = false
            }else{
                regbtn.disabled = true
            }
        })

        
        regbtn.addEventListener("click",()=>{
            
            fetch("http://localhost:3000/users/")
            //.then((response) => {const existedUser = response.data.find((item) => item.email === regemail.value)});
            
            if (1===0) {
                        swal("Istnieje już użytkownik o podanym adresie E-mail")
                        regemail.value = null
                        regpwd.value = null
                        pwdrpt.value = null
            } else{
            swal("Pomyślnie zarejestrowano :)")
            }
        })

        };
        })

    checkbox.append(section)
    
    return checkbox;
}