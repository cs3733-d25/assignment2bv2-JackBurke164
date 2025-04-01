function Form1() {
    return (
        <div>
            <h2>Trade Request Form</h2>
            <p>Enter in details about yourself and a card and I'll see if I have it!</p>
            <form>
                <label htmlFor="fullname">Enter Your Full Name: </label>
                <input type="text" id="fullname"/>
                <br/>
                <br/>
                <label htmlFor="cardname">Enter the Name of the Card You Want: </label>
                <input type="text" id="cardname"/>
                <br/>
                <br/>
                <input type="checkbox" id="condition"/>
                <label htmlFor="condition">Do you want the card to be in good condition?</label>
                <br/>
                <input type="checkbox" id="rarity"/>
                <label htmlFor="rarity">Would you like the card in high rarity?</label>
                <br/>
                <input type="checkbox" id="cash"/>
                <label htmlFor="cash">Would you want to buy instead of trade?</label>
                <br/>
                <br/>
                <label>How many copies are you looking for?</label>
                <br/>
                <input type="radio" id="1" name="number" value="1"/>
                <label htmlFor="1">1 Copy</label><br/>
                <input type="radio" id="2" name="number" value="2"/>
                <label htmlFor="2">2 Copies</label><br/>
                <input type="radio" id="3" name="number" value="3"/>
                <label htmlFor="3">3 Copies</label>
                <br/>
                <br/>
                <label htmlFor="comments">Any other requests or comments? </label>
                <input type="text" id="comments"/>
                <br/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default Form1;