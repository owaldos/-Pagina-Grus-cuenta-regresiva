const Fechalimite =   EltiempoConcedido => {
	let FechaActual = new Date(),
	TiempoFaltante = (new Date(EltiempoConcedido ) - FechaActual + 1000) / 1000,
	SegundosFaltantes = ('0' + Math.floor(TiempoFaltante % 60)).slice(-2),
	MinutosFaltantres = ('0' + Math.floor(TiempoFaltante / 60 % 60)).slice(-2),
	HorasFaltantes =  Math.floor(TiempoFaltante/ 3600 % 24);
	DiasFaltantes = Math.floor(TiempoFaltante / 86400 % 30);
    MesesFaltantes =  Math.floor(TiempoFaltante / (86400 * 30));

 return {
 	TiempoFaltante,
 	SegundosFaltantes,
	MinutosFaltantres,
	HorasFaltantes,
	DiasFaltantes, 
	MesesFaltantes 
 }



};




const countdown = ( EltiempoConcedido, elem, FinalMessage) => {
	const el = document.getElementById(elem);

	const timerupdate = setInterval( ()  => {
		let t = Fechalimite(EltiempoConcedido);

	   el.innerHTML = ` En ${t.MesesFaltantes}Meses   ${t.DiasFaltantes}Dias <br>${t.HorasFaltantes}h
	   ${t.MinutosFaltantres}m ${t.SegundosFaltantes}s`;
      
      if (t.TiempoFaltante <= 1) {
      	clearInterval(timerupdate);
      	 el.innerHTML = FinalMessage;
      }

	}, 1000)

};

countdown('Nov 15 2020 00:00:00 GMT-0400', 'clock', 'Comencemos');

