const Practice1 = () => {
  let marks = 70;
  let cities = ["Dhaka", "Naogaon", "Chitagang", "Khulna"];
  var login = true;
  return (
    <div>
      <h1 style={{ color: "red", backgroundColor: "yellow" }}>Shohan</h1>

      <button onClick={() => alert("Hello")}>Submit</button>

      <div>
        {(() => {
          if (marks >= 80 && marks <= 100) {
            return <h1>A+</h1>;
          } else if (marks >= 40 && marks < 80) {
            return <h1>Pass</h1>;
          } else {
            return <h1>Fail</h1>;
          }
        })()}
      </div>

      <ol>
        {cities.map((city, i) => {
          return <li key={i.toString()}>{city}</li>;
        })}
      </ol>

      {login && <button>Log out</button>}
      
    </div>
  );
};

export default Practice1;
