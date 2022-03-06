import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter";
import Buttons from "./components/Buttons"
import Input from "./components/Input";

function App() {
    const [messageValue, setMessageValue] = useState('');
    const [strawberryCounter, setStrawberryCounter] = useState(0);
    const [bananaCounter, setBananaCounter] = useState(0);
    const [appleCounter, setAppleCounter] = useState(0);
    const [kiwiCounter, setKiwiCounter] = useState(0);
    const [terms, setTerms] = React.useState(false);

    function resetButtons() {
        setStrawberryCounter(0)
        setAppleCounter(0)
        setKiwiCounter(0)
        setBananaCounter(0)
    }

    function handleSubmit() {
        let firstName = document.getElementById("first-name-field")
        let surname = document.getElementById("surname-field")
        let age = document.getElementById("age-field")
        let postcode = document.getElementById("postcode-field")
        let deliveryFrequency = document.getElementById("delivery-frequency-field")
        let comment = document.getElementById("comment")
        let form = document.forms[0]
        let timeSlot = form.elements['delivery-time-field']

        console.log(`Voornaam: ${firstName.value} Achternaam: ${surname.value} Leeftijd:${age.value} 
        Postcode:${postcode.value}  Bezorgfrequentie: ${deliveryFrequency.value} Tijdvak:${timeSlot.value}
         Opmerking:${comment.value} Voorwaarden zijn aanvaard:${terms} Aardbeien:${strawberryCounter} Bananen:${bananaCounter} Appels:${appleCounter} Kiwi's:${kiwiCounter}`)
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>

            <Counter counter={strawberryCounter} setCounter={setStrawberryCounter} image="🍓" fruit="Aarbeien"/>
            <p></p>
            <Counter counter={bananaCounter} setCounter={setBananaCounter} image="🍌" fruit="Bananen"/>
            <p></p>
            <Counter counter={appleCounter} setCounter={setAppleCounter} image="🍎" fruit="Appels"/>
            <p></p>
            <Counter counter={kiwiCounter} setCounter={setKiwiCounter} image="🥝" fruit="Kiwi's"/>
            <Buttons type="button" method={resetButtons} text="Reset"/>
            <form name="name">
                <fieldset>
                    <Input type="text" id="first-name-field" name="first-name" text="Voornaam"/>
                    <p></p>
                    <Input type="text" id="surname-field" name="surname" text="Achternaam"/>
                    <p></p>
                    <Input type="number" id="age-field" name="age" text="Leeftijd"/>
                    <p></p>
                    <Input type="text" id="postcode-field" name="postcode" text="Postcode"/>
                    <p></p>
                    <label htmlFor="delivery-frequency">
                        <p>Bezorgfrequentie</p>
                        <select id="delivery-frequency-field">
                            <option id="weekly">Iedere week</option>
                            <option id="monthly">Iedere maand</option>
                            <option id="daily">Iedere dag</option>
                        </select></label>
                    <p></p>
                    <Input type="radio" id="day-option" name="delivery-time-field" value="Overdag"/>Overdag
                    <Input type="radio" id="evening-option" name="delivery-time-field" value="'s Avonds"/>'s Avonds

                    <p>Opmerking <textarea value={messageValue} rows="4" cols="40"
                                           onChange={(e) => setMessageValue(e.target.value)} id="comment"/></p>

                    <Input type="checkbox" id="terms-and-conditions-checkbox" event={() => setTerms(!terms)}
                           select={terms}/>Ik ga akkoord met de voorwaarden


                </fieldset>
            </form>

            <Buttons type="submit" method={handleSubmit} text="Verstuur"/>


        </>
    );
}

export default App;
