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

      <Part name={props.subject1} units={props.units1} />
      <Part name={props.subject2} units={props.units2} />
      <Part name={props.subject3} units={props.units3} />

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

  // Subjects
  const subject1 = "CSIT327: Information Management 2";
  const units1 = 3;

  const subject2 = "IT365: Data Analytics";
  const units2 = 3;

  const subject3 = "IT317: Project Management";
  const units3 = 3;

  // Footer information
  const name = "Briar Rovic Z. Elemino";
  const courseCode = "CSIT340";
  const section = "G8";

  return (
    <div>
      <Header course={course} />

      <Content
        subject1={subject1}
        units1={units1}
        subject2={subject2}
        units2={units2}
        subject3={subject3}
        units3={units3}
      />

      <Total total={units1 + units2 + units3} />

      <Footer name={name} courseCode={courseCode} section={section} />
    </div>
  );
};

export default App;
