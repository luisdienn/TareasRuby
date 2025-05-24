
function Button({ children, onClick, text, classes }: { children: React.ReactNode, onClick: () => void, text: string, classes: string }) {
    return (
      <button className={`button ${classes}`} onClick={onClick}>
        { text }
      </button>
    )
  }

export default Button;