import contasSusgetoes from "./ContasSugestoes"

function TopoSugestoes(){
    return contasSusgetoes.filter(props => props.status == "Catana").map(props => 
<div class="topoSideBar">
    <img src={props.imagem}alt=""/>
    <div class="textoConta">  
        <h3>{props.nome}</h3>
        <h4>{props.status}</h4>
    </div>

</div>)
}

function Sugestao(){
    return contasSusgetoes.filter(props => props.status == "Segue você").map(props => 
    <div class="contasSusgetoes">
     <div class="sugestao">
        <img src={props.imagem} alt=""/>
        <div class="textSugestao">
            <h3>{props.nome}</h3>
            <h4>{props.status}</h4>
        </div>
    </div>
    <h3>Seguir</h3>
</div>)    
}

export default function SidBar(){
    return (
        <>
            <TopoSugestoes/>
            <div class="topoSugestoes">
                <h4>Sugestões para você</h4>
                <h3>Ver tudo</h3>
            </div>
            <Sugestao/>
            <h4>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                Termos • Localizações • Contas mais relevantes • Hashtags • 
                Idioma</h4>
            <h5>© 2021 INSTAGRAM DO FACEBOOK</h5>   
        </>     )

}