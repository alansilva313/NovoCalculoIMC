var lista = [
    {   
        id: 1,
        treinoA: 'PUXADA LATERAL NO CROSS COM ARGOLA 4X20',
        img: 'puxada.gif'
        
    }, 
    {   id: 2,
        treinoA: 'PUXADOR PEGADA NEUTRA DROP 4X',
        img: 'pegada.gif'
    },
    {   id: 3,
        treinoA: 'PUXADOR ALTO COM CORDA 4X 20',

    },
  
    {   id: 4,
        treinoA: 'CRUCIFIXO INVERTIDO CROSS POLIA BAIXA 4X15',

    },
    { id: 5,
        treinoA: 'ROSCA SCOTT NO CROSS DROP 4X',

    },

    {   id: 6,
        treinoA: 'ROSCA ALTA COM ARGOLA NO CROSS 4X 12',
    },
   

    {  id: 7,
        treinoA: 'ROSCA DIRETA BARRA LIVRE 4XFALHA',

    },
    {    id: 8,
        treinoA: 'PRANCHA SERROTE 4X15'

    },

 

    
]

lista.forEach(dados => {

   
   
    document.querySelector(".lista").innerHTML += `
    

    <div class='treino'>
         <input type='checkbox' id='check'>
        <label>${dados.treinoA}</label>
        <img src='${dados.img}'>

        </div>

    
    `

    let c = document.querySelector('#check')
    if(c.checked){
        console.log('TMJ')
    }else {
        console.log('Conclua seu treino')
    }
   
    
    
  
    
})

function menu(){
    document.querySelector(".nav").style.display = 'flex'
}

