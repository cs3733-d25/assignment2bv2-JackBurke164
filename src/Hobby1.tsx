import List1 from './List1';
import Table1 from './Table1';
import Form1 from './Form1';

function Hobby1() {
    return(
        <div>
            <h2>Jack's Hobby: Yu-Gi-Oh!</h2>
            <hr />
            <img src="public/IMG_3807.jpg" width="640" alt="A picture of my trade binder" />
            <br/>
            <p>In my free time, I enjoy playing Yu-Gi-Oh!, a trading card game created by Kazuki Takahashi in 1999. Players construct a Main Deck of 40-60 cards, with an optional 15 card Extra Deck, and aim to reduce their opponent's Life Points to zero.</p>
            <hr />
            <List1></List1>
            <hr/>
            <Table1></Table1>
            <hr/>
            <Form1></Form1>
            <hr/>
        </div>
    )
}
export default Hobby1;