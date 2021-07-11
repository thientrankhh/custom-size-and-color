
function ChangeSize(props) {
  return (
    <div className="">
        <div className="text-center header-change-size">
            <h3 className="">Change Size</h3>
            <span>Font Size: {props.size}px</span>
        </div>
        <div className="text-center content">
            <button className="btn btn-success m-2" onClick={() => props.changeSize("+")}>Tăng</button>
            <button className="btn btn-success m-2"  onClick={() => props.changeSize("-")}>Giảm</button>
        </div>
    </div>
  );
}

export default ChangeSize;