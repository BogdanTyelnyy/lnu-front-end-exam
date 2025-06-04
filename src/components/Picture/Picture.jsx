
export default function Picture({id, className, src, width, onClick, children}) {
    return(
        <div className={className} onClick={onClick}>
            <img id={id} src={src} width={width}/>
            {children}
        </div>
    );
}