import './Card.css';
import Button from './Button.jsx';

function Card({ text, paragraph, imageUrl, active, onToggle, onRemove }) {

  const Remove = () => {
    const ConfirmDelete = window.confirm(`Are you sure, you want to delete "${text}"?`);
    if (ConfirmDelete) {
      onRemove();
    }
  }

  return (
    <>
      <div className="card">

        <div className="imgWrapper">
          <img src={imageUrl} alt={text} />
          <div className="textWrapper">
            <h2>{text}</h2>
            <p>{paragraph}</p>
          </div>
        </div>

        <div className="togleWrapper">
          <Button text="Remove" onClick={Remove} />

          {/* Toggle controlado pelo App */}
          <div
            className={`toggle ${active ? "active" : ""}`}
            onClick={onToggle}
          >
            <div className="circle"></div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Card;
