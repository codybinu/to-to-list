import './CSS/TodoItems.css'
import checked from './Assets/checked.png'
import checkbox from './Assets/checkbox.png'
import cross from './Assets/cross.png'

const TodoItems = ({no,display,text,setTodos}) => {

  const deleteTodo = (no) =>{
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo)=>todo.no!==no);
    setTodos(data);
  }

  const toggle = (no)=>{
    let data = JSON.parse(localStorage.getItem("todos"));
    for(let i=0;i<data.length;i++){
      if (data[i].no===no) {
        if (data[i].display==="") {
          data[i].display = "line-through";
        }else{
          data[i].display = "";
        }
        break;
      }
    }
    setTodos(data);
  }
  return (
    <div className='todoitems'>
      <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
        {(display==="")?<img src={checkbox} alt="checkbox" />:<img src={checked} alt="checked" />}
        <div className="todoitems-text">{text}</div>
      </div>
      <img className='todoitems-cross-icon' onClick={()=>{deleteTodo(no)}} src={cross} alt="cross" />
    </div>
  )
}

export default TodoItems