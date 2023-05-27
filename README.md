
  # FastGrill IDP
https://vercel.com/dutraxz/idp-fast-grill
Cálculo de tempo médio:

```js
/*

Este código é um algoritmo que faz previsões do tempo de espera de pedidos. 
Ele usa o histórico dos últimos 30 pedidos para calcular médias e variâncias dos tempos de preparo e 
espera. Com essas estatísticas, ele ajusta a previsão do tempo de espera para os pedidos atuais com base
em seus tempos de preparo. O ajuste é maior quando a variância dos tempos de espera é alta. 
O método utilizado é uma simplificação e pode precisar de técnicas mais avançadas para maior precisão 
em cenários complexos.

*/

// Histórico de pedidos
const historicoPedidos = [
    { id: 1, tempoMedioPreparo: 10, tempoEspera: 15 },
    { id: 2, tempoMedioPreparo: 15, tempoEspera: 20 },
    { id: 3, tempoMedioPreparo: 20, tempoEspera: 30 },
    // ... outros pedidos ...
  ];
  
  // Lista atual de pedidos de espera
  const listaEsperaAtual = [
    { id: 101, tempoMedioPreparo: 12 },
    { id: 102, tempoMedioPreparo: 18 },
    { id: 103, tempoMedioPreparo: 16 },
    // ... outros pedidos ...
  ];
  
  // Pega os últimos 30 pedidos do histórico de pedidos.
  let ultimosPedidos = historicoPedidos.slice(-30);
  
  let somaTemposPreparo = 0;
  let somaTemposEspera = 0;
  
  // Calcula a soma dos tempos de preparo e espera dos últimos 30 pedidos.
  ultimosPedidos.forEach(pedido => {
    somaTemposPreparo += pedido.tempoMedioPreparo;
    somaTemposEspera += pedido.tempoEspera;
  });
  
  // Calcula a média dos tempos de preparo e espera dos últimos 30 pedidos.
  let mediaTemposPreparo = somaTemposPreparo / ultimosPedidos.length;
  let mediaTemposEspera = somaTemposEspera / ultimosPedidos.length;
  
  let varianciaTemposPreparo = 0;
  let varianciaTemposEspera = 0;
  
  // Calcula a variância dos tempos de preparo e espera dos últimos 30 pedidos.
  ultimosPedidos.forEach(pedido => {
    varianciaTemposPreparo += Math.pow(pedido.tempoMedioPreparo - mediaTemposPreparo, 2);
    varianciaTemposEspera += Math.pow(pedido.tempoEspera - mediaTemposEspera, 2);
  });
  
  // Finaliza o cálculo da variância dividindo pelo número de pedidos.
  varianciaTemposPreparo /= ultimosPedidos.length;
  varianciaTemposEspera /= ultimosPedidos.length;
  
  // Para cada pedido na lista de espera, calcula uma estimativa para o tempo de espera.
  let estimativasTempoEspera = listaEsperaAtual.map(pedido => {
    // Calcula a diferença entre o tempo médio de preparo do pedido e a média dos tempos de preparo.
    let diferencaTempoPreparo = pedido.tempoMedioPreparo - mediaTemposPreparo;
    // Calcula a estimativa do tempo de espera baseada na média dos tempos de espera, ajustada pela diferença
    // no tempo de preparo e pela razão das raízes quadradas das variâncias.
    let estimativaTempoEspera = mediaTemposEspera + diferencaTempoPreparo * (Math.sqrt(varianciaTemposEspera) / Math.sqrt(varianciaTemposPreparo));

    return { id: pedido.id, estimativaTempoEspera };
  });
  ``

Depois é só somar a estimativa de tempo de todos os pedidos.
