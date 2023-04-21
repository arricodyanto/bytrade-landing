import Cookies from 'js-cookie'

export function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
    // prevent browser to reload
    e.preventDefault() 

    // defined telegram api @fatherbot
    var token = process.env.TELEGRAM_BOT_TOKEN
    var chat_id = process.env.TELEGRAM_CHAT_ID

    // get value from form
    const form = e.currentTarget
    const input1 = form.elements.namedItem('action') as HTMLInputElement
    const input = form.elements.namedItem('username') as HTMLInputElement
    const action = input1.value
    const username = input.value
    var messageContext = `A new user registered.%0A${username} just create an account.`
    
    if (action === 'register') {
        // send message to api
        var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${messageContext}`
        let api = new XMLHttpRequest()
        api.open('POST', url, true)
        api.send()
        alert('Succesfully Registered!')
        
        // save credential to cookie
        Cookies.set('loginInfo', username, { expires: 1 });
    
        // redirect to home page
        window.location.href = '/'
        
    } else if (action === 'login') {
        const checkCookies = Cookies.get('loginInfo')
        if(!checkCookies) {
            alert("User not found! \nPlease create an account first on Register's Page")
        } else{
            alert('Login success!')
            window.location.href = '/'
        }
    } else {alert('Invalid action!')}
}
