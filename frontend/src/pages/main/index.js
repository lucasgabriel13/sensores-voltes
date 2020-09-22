import React, {useEffect, useState} from 'react';
import Header from '../../components/header';

import umidade from '../../assets/umidade.svg';
import temperatura from '../../assets/temperatura.svg';

import api from '../../services/api';

import './styles.css';

function Main (){

    const [valores, setValor] = useState([]);

    useEffect(()=>{
        const getValor = async ()=>{
            const response = await api.get("/sensorAtualizado");
            setValor(response.data);
        };
        getValor();
    })
    

return(
    <div>
        <Header/>
        <div className="main-content">
            <fieldset>
                <img src={umidade} alt="imagem umidade"/>
                <p>
                A umidade do ar diz respeito à quantidade de vapor de água presente na atmosfera - o que caracteriza se 
                o ar é seco ou úmido - e varia de um dia para o outro.
                </p>
                <p>
                    A umidade do ar neste momento é:
                </p>
                {valores.map((valor, index)=>(
                    <p id="valor" key={index}>
                        {valor.umidade} %
                    </p>
                ))}
            </fieldset>
            <fieldset>
                <img src={temperatura} alt="imagem umidade"/>
                <p>
                A temperatura do ambiente está sendo monitorada através de um sensor em tempo real, este sensor coleta a
                informação a respeito da temperatura e repasssa para essa aplicação.
                </p>
                <p>
                    A temperatura do ambiente neste momento é:
                </p>
                {valores.map((valor, index)=>(
                    <p id="valor" key={index}>
                        {valor.temperatura} ºC
                    </p>
                ))}
            </fieldset>
        </div>
    </div>
);

}

export default Main;