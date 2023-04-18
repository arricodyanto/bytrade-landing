import Cookies from 'js-cookie';

export const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // prevent browser to reload
    e.preventDefault() 

    // defined telegram api @fatherbot
    var token = '6088512570:AAGf3_SejmPO-NfuYOXDltXLTEndsv296cQ'
    var chat_id = -1001955730983

    // get value from form
    const form = e.currentTarget
    const input = form.elements.namedItem('username') as HTMLInputElement
    const username = input.value
    var messageContext = `Hello! %0A${username} is currently logged in.`
    
    // send message to api
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${messageContext}`
    let api = new XMLHttpRequest()
    api.open('POST', url, true)
    api.send()
    alert('Succesfully Logged In!')
    
    // save credential to cookie
    Cookies.set('loginInfo', username, { expires: 1 });
}