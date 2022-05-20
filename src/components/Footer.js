export default function Footer({ poster, titulo, sessao }) {
    return (
        <footer>
            <div className="poster-footer">
                <img src={poster} alt="filme" />
            </div>
            <div className="titulo-footer">{titulo}</div>
            <div className="sessao-footer">{sessao}</div>
        </footer>
    );
}