import List2 from './List2';
import Form2 from './Form2';
import Table2 from './Table2';

function Hobby2() {
    return(
    <div>
        <h2>Henry's Hobby: Snowboarding</h2>
        <hr/>
        <img src="public/snowboarding.jpg" width="300" height="300" alt="Snowboarding action shot" />
        <br />
        <p>Snowboarding is an exhilarating winter sport that involves gliding down snow-covered slopes on a single board attached to both feet. Combining elements of surfing, skateboarding, and skiing, it requires balance, agility, and control. Riders carve through the snow by shifting their weight, making sharp turns and performing tricks. The sport offers a blend of adrenaline and artistry, attracting thrill-seekers to terrain parks and backcountry trails alike. Whether cruising down groomed runs or tackling fresh powder, snowboarding delivers a unique and dynamic outdoor experience.</p>
        <hr />
        <List2></List2>
        <hr />
        <Table2></Table2>
        <hr />
        <Form2></Form2>
        <hr />
    </div>
    )
}
export default Hobby2;