export default function Footer({ poster, titulo, dia, data }) {
    return (
        <footer>
            <div className="poster-footer">
                <img src={poster} alt="filme" />
            </div>
            <div className="texto-footer">
                <div className="titulo-footer">{titulo}</div>
                <div className="sessao-footer">{dia} - {data}</div>
            </div>
        </footer>
    );
}