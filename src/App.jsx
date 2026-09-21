const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.name}
      <br></br>
      Units: {props.units}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <hr />

      <Part name={props.part1.subject} units={props.part1.units} />
      <Part name={props.part2.subject} units={props.part2.units} />
      <Part name={props.part3.subject} units={props.part3.units} />

      <hr />
    </div>
  )
}
const Total = (props) => {
  return <p>Total Number of Units: {props.total}</p>;
};

const Footer = (props) => {
  return (
    <footer>
      {props.name} - {props.courseCode} - {props.section}
    </footer>
  );
};

const App = () => {
  // Course
  const course = "Bachelor of Science in Information Technology";

  const part1 = {
    subject: "CSIT327: Information Management 2",
    units: 3
  }
 const part2 = {
    subject: "IT365: Data Analytics",
    units: 3
  }
 const part3 = {
    subject: "IT317: Project Management",
    units: 3
  }

  const name = "Briar Rovic Z. Elemino";
  const courseCode = "CSIT340";
  const section = "G8";

  return (
    <div>
      <Header course={course} />

      <Content
        part1={part1}
        part2={part2}
        part3={part3}
      />

      <Total total={part1.units + part2.units + part3.units} />

      <Footer name={name} courseCode={courseCode} section={section} />
    </div>
  );
};

export default App;
