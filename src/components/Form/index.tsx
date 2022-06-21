import React from "react";
import Button from "../Button";

class Form extends React.Component {
    render(){
        return (
            <form>
                <div>
                    <label htmlFor="task">
                        Adicione um novo conteúdo:
                    </label>
                    <input 
                        type="text"
                        name="task" id="task" 
                        placeholder="O que você quer estudar?"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="time">
                        Tempo!
                    </label>
                    <input 
                        type="time"
                        step="1"
                        name="time"
                        id="time"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Button />
            </form>
        )
    }
}

export default Form;