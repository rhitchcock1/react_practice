import React from 'react';

function Contact(){
    return(
        <div>
            <h1>Contact</h1>
            <p>make a reservation </p>
            <form>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Phone" />
                <input type="date" placeholder="Date" />
                <input type="time" placeholder="Time" />
                <input type="text" placeholder="Any additional details" />
            </form>
        </div>
    )
}

export default Contact;