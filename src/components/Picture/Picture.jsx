
export default function Picture({id, className, src, width, children}) {
    return(
        <div className={className}>
            <img id={id} src={src} width={width}/>
            <>{children}</>
        </div>
    );
}