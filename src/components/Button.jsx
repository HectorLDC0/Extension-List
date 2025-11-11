import './Button.css';

function Button({ text, onClick, isActive }) {
  return (
    <button
      onClick={onClick}
      className={isActive ? 'active' : ''}
    >
      {text}
    </button>
  );
}

export default Button;
