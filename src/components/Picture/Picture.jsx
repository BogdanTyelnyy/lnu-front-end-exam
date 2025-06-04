
export default function Picture({id, src, width, children}) {
    return(
        <div>
            <img id={id} src={src} width={width}/>
            <>{children}</>
        </div>
    );
}