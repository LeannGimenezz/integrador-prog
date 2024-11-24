import { AppProduct } from "./components/AppProduct/AppProduct"

export const App = () =>{
    return(
        <div style={{display: `flex`, flexDirection: `column`, gap: `2vh`}}>
            {/* <MiPrimerComponente text={"Texto desde propiedades"} color="red" fontSize={2}/>
            <ComponentCounter/>
            <ComponentUseEffect/> */}
            {/* <FormComponent/> */}
            <AppProduct/>
        </div>
    )
}