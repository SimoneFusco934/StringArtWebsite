import React from 'react';
import '../cssComponents/Evento.css';

import photoTicket from '../../assets/ticket.jpeg';

const Evento = () => {
  return (
    <div className="evento">
      
      <img src={photoTicket} className="evento-ticket"></img>


      <h1>EVENTO LIMITATO</h1>
      <span></span>
      <p>Partecipa all'Estrazione: Porta a casa la tua String Art su misura!

In occasione del lancio della nostra start-up, abbiamo deciso di festeggiare con un'iniziativa speciale legata all'estrazione del lotto del prossimo 7 luglio. 

Acquistando un biglietto della nostra lotteria, avrai la possibilità di aggiudicarti un'opera d'arte unica e totalmente esclusiva. Il vincitore  avrà diritto alla personalizzazione completa e totale dell'opera:che tu desideri il volto di una persona cara, il profilo del tuo animale domestico o una scritta speciale, trasformeremo la tua idea in un capolavoro di String Art intrecciato a mano.

Con noi vincono tutti: ogni singolo partecipante, a prescindere dall'estrazione finale, riceverà un buono sconto del 10% garantito da utilizzare sull'acquisto di una String Art sul nostro store.

Non perdere l'occasione di dare vita alla tua opera d'arte personalizzata e di supportare il nostro nuovo progetto.</p>
      
      

          

      

        
    </div>
  );
}

export default Evento;