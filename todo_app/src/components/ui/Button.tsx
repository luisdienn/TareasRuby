function Button({ onClick, text, classes }: { onClick: () => void, text: string, classes: string }) {
    return (
      <button className={`button ${classes}`} onClick={onClick}>
        { text }
      </button>
    )
  }

export default Button;