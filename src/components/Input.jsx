export default function Input(props) {
  return (

    <div>
        <input
          placeholder="Enter guess"
          className="flex-auto w-32 rounded-sm border border-black"
          type="text"
          id="input--box"
          onChange={props.updateInput}
          />
    </div>
          )
}