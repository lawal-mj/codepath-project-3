export default function Card(props) {
    let text = "w-2/5 h-64 text-center rounded-md flex items-center justify-center" + " " + props.color;
  return (
    <div className={text}>
      <button
        onClick={props.handleClick}
      
      >
        <div>{props.content}</div>
      </button>
    </div>
  );
}
