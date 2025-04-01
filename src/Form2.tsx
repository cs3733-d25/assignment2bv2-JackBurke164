function Form2() {
    return(
        <div>
            <h2>Want To Snowboard With Me?</h2>
            <form>
                <label htmlFor="fullname">Enter Your Full Name:</label>
                <input type="text" id="fullname"/>
                <br/>
                <label htmlFor="phoneNumber">Enter Your Phone Number:</label>
                <input type="text" id="phoneNumber"/>
                <br/>
                I have:
                <br/>
                <input type="checkbox" id="wg"/>
                <label htmlFor="wg">Weather Gear</label>
                <br/>
                <input type="checkbox" id="sg"/>
                <label htmlFor="sg">Safety Gear</label>
                <br/>
                <input type="checkbox" id="b/s"/>
                <label htmlFor="b/s">A board/skis</label>
                <br/>
                I am a:
                <br/>
                <input type="radio" id="sb" name="athlete_type" value="Snowboarder"/>
                <label htmlFor="sb">Snowboarder</label><br/>
                <input type="radio" id="ski" name="athlete_type" value="Skier"/>
                <label htmlFor="ski">Skier</label><br/>
                <input type="radio" id="other" name="athlete_type" value="Other"/>
                <label htmlFor="other">Other</label>
                <br/>
                <label htmlFor="mountain">Choose a mounatin:</label>
                <select name="mountain" id="mountain">
                    <option value="sugarloaf">Sugarloaf</option>
                    <option value="csb">Camden Snow Bowl</option>
                    <option value="Saddleback">Saddleback</option>
                </select>
                <br/>
                <label htmlFor="comments">Any Comments?</label>
                <br/>
                <textarea id="comments" name="comments"></textarea>
                <br/>
                <input type="submit" value="Submit"/>
                <hr/>
            </form>
        </div>
    )
}

export default Form2;