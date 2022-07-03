import Titulo from "./Titulo";
import Container from "./Container";

function App(){

	const titulo = [
		{
			titulo: "Mais Lidas",
		},
	];

	const container = [
		{
			number: "1",
			text: "Funcionaria que denunciou procurador diz que agressor 'desprezava mulheres e teme sair na rua: 'Muito medo'",
			},
		{
			number: "2",
			text: "Imposto de Renda 2022: Receita abre consultas ao 2° lote de restituição nessa quinta; veja se você está no grupo ",
			},
		{
			number: "3",
			text: "Governo opera para evitar CPI do MEC, que ganhou força após prisão de Milton Ribeiro",
			},
    {
			number: "4",
			text: "Em Itajubá, assaltantes armados atacam agência da Caixa Econômica Federal; 7 ficam feridos",
			},
		{
			number: "5",
			text: "Almir Sater é 'parado em blitz' e policiais tietam cantor: 'o senhor é o dono dessa chalana?'",
			},
	];

	return(
		<div>
			{
				titulo.map((cons) => {
					return <Titulo 
							titulo={cons.titulo}
						/>;
				})
			}
		
		<div className="cont"> 
			{
			container.map((cont, res) => {
					return <Container key={res}
							number={cont.number}
							text={cont.text}
						/>;
				})
			}
	        </div>
			</div>
	);
}

export default App;