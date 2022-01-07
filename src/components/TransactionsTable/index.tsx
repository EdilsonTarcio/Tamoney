import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TrasactionTables() {

useEffect(() => {
    api.get('transactions')
    .then(response => console.log(response.data))
}, []);


    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/05/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$500,00</td>
                        <td>Casa</td>
                        <td>10/05/2022</td>
                    </tr>
                    <tr>
                        <td>Conta de luz</td>
                        <td className="withdraw">- R$100,00</td>
                        <td>casa</td>
                        <td>8/05/2022</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de E-comerce</td>
                        <td className="deposit">R$20.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/05/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}