import Items from "./Items";
const Sample = () => {
  return (
    <div>
      <h1 className="head">CSE_student details</h1>

      <div className="items">
        <Items name="lavanya" age={19} salary={30000} />
        <Items name="varu" age={20} salary={35000}/>
        <Items name="rakshu" age={22} salary={29000}/>
        <Items name="pooja" age={18} salary={31000}/>
      </div>
    </div>
  );
};

export default Sample;