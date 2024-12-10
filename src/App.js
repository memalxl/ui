import Button from "./components/button";
import Input from "./components/input/input"; 
import Typography from "./components/typography/typography";
import Heading from "./components/heading/heading";

function App() {
  const handleInputChange = (e) => {
    console.log("Input value:", e.target.value);
  };

  return (
    <div>
      <div>
        <div>
          <Button size="lg">WOWOWOW</Button>
          <Button size="md" variant="bordered">CRUTO</Button>
          <Button size="sm">MEMA</Button>
        </div>
        <div>
          <Button size="lg">WOWOWOW</Button>
          <Button size="md" variant="bordered">CRUTO</Button>
          <Button size="sm">MEMA</Button>
        </div>
      </div>
      <div>
        <Input 
          label="Name" 
          placeholder="Enter your name" 
          onChange={handleInputChange} 
        />
        <Input 
          label="Name" 
          placeholder="Enter your name" 
          onChange={handleInputChange} 
        />
        <Input 
          type="text" 
          label="Name" 
          placeholder="Enter your name" 
          danger 
          onChange={handleInputChange} 
        />
      </div>
      <div>
      <Typography textSize="sm">
        SM. Our mission is to redefine the model of learning and re-engineer
        its process by providing innovative administrative and instructional
        technologies. Click here for our beliefs. If you are a school
        administrator and would like to use ecourse.org for your classes,
        please create school profiles. Instructors and students may signup
        independent user account. For questions, contact us.
      </Typography>
      <Typography textSize="md" className="custom-class">
        MD. Our mission is to redefine the model of learning and re-engineer
        its process by providing innovative administrative and instructional
        technologies. Click here for our beliefs. If you are a school
        administrator and would like to use ecourse.org for your classes,
        please create school profiles. Instructors and students may signup
        independent user account. For questions, contact us.
      </Typography>
      <Typography textSize="lg">
        LG. TOur mission is to redefine the model of learning and re-engineer
        its process by providing innovative administrative and instructional
        technologies. Click here for our beliefs. If you are a school
        administrator and would like to use ecourse.org for your classes,
        please create school profiles. Instructors and students may signup
        independent user account. For questions, contact us.
      </Typography>
    </div>
    <div>
      <Heading level={1}>Heading 1</Heading>
      <Heading level={2} className="custom-class">Heading 2</Heading>
      <Heading level={3}>Heading 3</Heading>
      <Heading level={3}>Heading 4</Heading>
      <Heading level={3}>Heading 5</Heading>
      <Heading level={3}>Heading 6</Heading>
    </div>
    </div>
  );
}

export default App;
