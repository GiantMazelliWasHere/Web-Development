import FormContato from "../FormContato/FormContato"
import InfoPessoais from "../InfoPessoais/InfoPessoais"

function ConteudoPrincipal(){
    return(
        <div class="mainInfo">
            <InfoPessoais/>
            <FormContato/>
        </div>
    )
}

export default ConteudoPrincipal