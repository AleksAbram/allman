import { useNavigate } from "react-router-dom";

function Path({path}) {
  const navigate = useNavigate();
  const pathClick = (e) => {
    console.log(e);
    navigate(`/items/types/${e.target.id}`);
  }

  return (
    <div className="path">
    { path.map((seg, i, arr) => <>
      {/* <div className='chevron'>&gt;</div> */}
      <div id={seg.id} className="path-seg" key={seg.id} onClick={pathClick}>{`${seg.name} ${(i < arr.length - 1) ? "  ->  " : ""}`} </div>
      </>
    )} 
  </div>
  );
}

export default Path;
