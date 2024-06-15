const { createBot, createProvider, createFlow, addKeyword, addAnswer } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')
const { Buttons } = require('whatsapp-web.js')

////////ASESOR - ASESOR - ASESOR - ASESOR/////
const flowAsesor = addKeyword([
  'asesor', 'agente', 'ayuda', 'quiero hablar con alguien'
])

.addAnswer('👩‍💻 ¡No te preocupes! En un momento estaremos en contacto contigo.')
.addAnswer('El Chat se reiniciara, pero no te preocupes, ya esteremos de nuevo contigo',{ delay: 1000 })


//SALUDO DE BIENVENIDA

const flowSaludo = addKeyword([
    'hola', 'ola', 'ole', 'alo', 'holaa', 'holaaa', 'holaaaa', 'holi', 'holis', 'holis', 
    'buenos días', 'buenas tardes', 'buenas noches', 'buen dia', 'buenas', 'buenas dias', 
    'buenas tarde', 'buenas nochess', 'buenas nochesss', 'buenas noces', 
    'hello', 'helo', 'heloo', 'helooo', 'hi', 'hii', 'hiii', 'hey', 'heyy', 'heyyy', 
    'qué tal', 'ke tal', 'k tal', 'que tal', 'q tal', 'k tal', 'q tal', 
    'qué onda', 'que onda', 'k onda', 'q onda', 
    'saludos', 'saludo', 'salu2', 'saludoss', 'saludoo', 'saluudos', 
    'buen día', 'buen dia', 'buen dias', 'buen dìa', 'buen dìas', 
    'qué pasa', 'que pasa', 'k pasa', 'q pasa', 
    'hello there', 'helo there', 'heloo there', 'helooo there', 'howdy', 
    'hiya', 'hiya there', 'hi there', 'hey there', 
    'saludos a todos', 'saludos a todas', 'saludos a todxs', 'saludoss a todos', 'saludoss a todas', 'saludoss a todxs', 
    'qué hay', 'ke hay', 'q hay', 'que hay', 
    'qué hubo', 'ke hubo', 'q hubo', 'que hubo', 
    'qué tal todos', 'ke tal todos', 'q tal todos', 'que tal todos', 
    'qué tal todas', 'ke tal todas', 'q tal todas', 'que tal todas', 
    'qué más', 'ke más', 'q más', 'que más', 
    'qué honda', 'ke honda', 'q honda', 'que honda', 
    'qué cuentas', 'ke cuentas', 'q cuentas', 'que cuentas', 
    'cómo estás', 'como estás', 'como estas', 'cómo estas', 'como estas', 
    'cómo están', 'como están', 'como estan', 'cómo estan', 
    'cómo va', 'como va', 'como ba', 
    'qué hay de nuevo', 'ke hay de nuevo', 'q hay de nuevo', 'que hay de nuevo', 
    'qué se cuenta', 'ke se cuenta', 'q se cuenta', 'que se cuenta', 
    'qué dice', 'ke dice', 'q dice', 'que dice', '7','6', 'inicio', 'home', 'iniciar', 'start', 'inici','de nuevo','atras','ir atras'
  ])
  
    .addAnswer('🙌 Hola bienvenido a *Casa Kapikua*' ,{delay: 1000,})
    .addAnswer(
        [
            'Soy Daisy Bot de Casa Kapikua y quiero darte una cálida bienvenida.',
            ' ',
            '💙 Somos un destino espectacular ubicado cerca de Santa Marta, estamos aquí para hacer que tu celebración sea realmente única.',
            'Nos encantaría saber más sobre tu evento. ¿Podrías ayudarnos contestando algunas preguntas Así podemos ayudarte a hacerlo especial 🎉😊',
            ' ',
            '👇 ¿Quién eres? 👇',
            ' ',
            '🌴 *Pareja*',
            '🌴 *Wedding Planner*',
            '🌴 *Otro*',
            ' ',
            '👇 Responde con la palabra escrita de tu preferencia 👇'
            
        ],{delay: 1000,}
    )

////////INGRESA OPCIÓN PAREJA//////

    const flowPareja = addKeyword([
        'pareja', 'parejas', 'parej', 'parejo', 'parjea', 'parejea', 
        'pareia', 'parejia', 'pareia', 'parjeja', 'parreja', 
        'parje', 'parejia', 'parieja', 'pareej', 'pareeja', 
        'pareha', 'pareya', 'parrja', 'parrjea', 'pareia', 
        'parjea', 'parrjeja', 'parrje', 'parrjia', 'parriya', 
        'parejja', 'parjeja', 'parre', 'parrieja', 'parejoo', 'otro'
      ])
        .addAnswer('🙌 Hola que alegría tenerte aquí *¿Que quieres hacer hoy?*' ,{delay: 1000,})
        .addAnswer(
        [   '👇 Responde con la palabra escrita de tu preferencia 👇',
            ' ',
            '🌴 *Disponibilidad de la casa*',
            '🌴 *Precios de la casa*',
            '🌴 *Información de la casa*',
            '🌴 *Planear mi boda*',
            '🌴 *Reservar Casa*',
            '🌴 *Agendar mi boda*',
            '🌴 *Agendar una visita*',
            '🌴 *Licor*',
            '🌴 *Ir atras*',
            '🌴 *Inicio*',
            ' ',
            '👇 Responde con la palabra escrita de tu preferencia 👇'
        ],{delay: 1000,}
    )
    ////////INGRESA OPCIÓN PAREJA - DISPONIBILIDAD DE LA CASA//////

    const flowParejaDisp = addKeyword([
        'disponibilidad de la casa', 'disponibilidad casa', 'casa disponibilidad', 
        'disponivilidad de la casa', 'disponibilidad d la casa', 'disponibilidad de la csa', 
        'disponibilidad de casa', 'casa disponivilidad', 'disponivilidad casa', 
        'disponivilidad d la casa', 'disponivilidad de la csa', 'csa disponibilidad', 
        'disponibilidad dela casa', 'disponivilidad dela casa', 'disponivilidad de casa',
        'disponibilidad casa', 'disponivilidad de casa', 'disponibilidad la casa', 
        'disponibilidad la csa', 'disp de la casa', 'disponi de la casa', 
        'disponibilidad de lacasa', 'disponibilidadd la casa', 'disponibilidads casa', 'disponibilidad', 'Dispinibilidad'
      ])
    .addAnswer('Puedes revisar la disponibilidad de la casa en el siguiente enlace:', {delay: 1000,})
    .addAnswer('📄 👉 https://kapikua.com.co/your-booking-detail/?task=search' ,{delay: 1000,})
    .addAnswer(
        [ 
            '👇 Responde con la palabra escrita de tu preferencia 👇 ',
            ' ',
            '🌴 *Precios*',
            '🌴 *Información de la casa*',
            '🌴 *Reservar Casa*',
            '🌴 *Planear mi boda*',
            '🌴 *Agendar una visita*',
            '🌴 *Licor*',
            '🌴 *Inicio*',
            ' ',
            '👇 Responde con la palabra escrita de tu preferencia 👇'
        ],{delay: 2000,}
    )
    ////////INGRESA OPCIÓN PAREJA - PRECIOS//////
    const flowParejaPrecio = addKeyword([
        'precio', 'precios', 'coste', 'costo', 
        'precio de la casa', 'cuánto cuesta', 'cuanto cuesta', 'cuanto vale', 
        'cuánto vale', 'costo de la casa', 'precio casa', 
        'precios casa', 'precio del alquiler', 'precios del alquiler'
      ])
      .addAnswer('🏠 Puedes consultar los precios en el siguiente PDF:' ,{delay: 1000,})
      .addAnswer('📄 👉 https://kapikua.com.co/wp-content/uploads/2024/06/PORTAFOLIO-OFICIAL-KAPIKUA-2024-2025.pdf' ,{delay: 1000,})
      .addAnswer(
        [ 
            '👇 Responde con la palabra escrita de tu preferencia 👇',
            ' ',
            '🌴 *Precios*',
            '🌴 *Información de la casa*',
            '🌴 *Reservar Casa*',
            '🌴 *Planear mi boda*',
            '🌴 *Agendar mi boda*',
            '🌴 *Agendar una visita*',
            '🌴 *Licor*',
            '🌴 *Inicio*',
            ' ',
            '👇 Responde con la palabra escrita de tu preferencia 👇'
        ],{delay: 2000,}
    )


   ////////INGRESA OPCIÓN PAREJA - INFO DE LA CASA//////
 const flowParejaInfo = addKeyword([
    'información de la casa', 'info de la casa', 'informacion casa', 'info casa', 
    'información casa', 'informacion de la casa', 'detalles de la casa', 
    'detalles casa', 'características de la casa', 'caracteristicas de la casa', 
    'características casa', 'caracteristicas casa', 'datos de la casa', 
    'datos casa', 'descripción de la casa', 'descripcion de la casa', 
    'descripción casa', 'descripcion casa', 'informacion d la casa', 
    'info d la casa', 'informacion d casa', 'info d casa', 'información','informacion'
  ])

  .addAnswer('🏠 Puedes consultar toda la información de la casa en el siguiente PDF:' ,{delay: 1000,})
  .addAnswer('📄 👉 https://kapikua.com.co/wp-content/uploads/2024/06/PORTAFOLIO-OFICIAL-KAPIKUA-2024-2025.pdf' ,{delay: 1000,})
  .addAnswer(
    [ 
        '👇 Responde con la palabra escrita de tu preferencia 👇 ',
        ' ',
        '🌴 *Precios*',
        '🌴 *Información de la casa*',
        '🌴 *Reservar Casa*',
        '🌴 *Planear mi boda*',
        '🌴 *Agendar mi boda*',
        '🌴 *Agendar una visita*',
        '🌴 *Licor*',
        '🌴 *Inicio*',
        ' ',
        '👇 Responde con la palabra escrita de tu preferencia 👇'
    ],{delay: 2000,}
)


   ////////INGRESA OPCIÓN PAREJA - Reservar Casa//////
   const flowParejaReserva = addKeyword([
    'reservar casa', 'reservar la casa', 'hacer reserva de la casa', 
    'reserva casa', 'reserva de la casa', 'reserva la casa', 
    'quiero reservar casa', 'quiero reservar la casa', 'cómo reservar casa', 
    'como reservar casa', 'cómo reservar la casa', 'como reservar la casa', 
    'reservacion casa', 'reservación casa', 'reservacion de la casa', 
    'reservación de la casa', 'hacer una reserva de la casa', 
    'quiero hacer una reserva de la casa', 'reservo la casa', 'reservo casa','Agendar mi boda','agendar mi boda', 'reservar', 'reserva'
  ])

  .addAnswer('🏠 Puedes solicitar tu contrato para reservar la casa en el siguiente enlace:' ,{delay: 1000,})
  .addAnswer('📄 👉 https://kapikua.com.co/solicitud-de-contratos-bodas-kapikua/' ,{delay: 1000,})
  .addAnswer(
    [ 
        '👇 Responde con la palabra escrita de tu preferencia 👇 ',
        ' ',
        '🌴 *Precios*',
        '🌴 *Información de la casa*',
        '🌴 *Reservar Casa*',
        '🌴 *Planear mi boda*',
        '🌴 *Agendar mi boda*',
        '🌴 *Agendar una visita*',
        '🌴 *Licor*',
        '🌴 *Inicio*',
        ' ',
        '👇 Responde con la palabra escrita de tu preferencia 👇'
    ],{delay: 2000,}
)


   ////////INGRESA OPCIÓN PAREJA - Wedding Planner//////
const flowParejaWedding = addKeyword([
    'Planear mi boda*', 'planeación de boda', 'organización de boda', 
    'planificador de boda', 'coordinación de boda', 'wedding coordinator', 
    'servicios de wedding planner', 
    'organizar matrimonio', 'planificar matrimonio', 
    'coordinador de matrimonio', 'planeación de matrimonio', 
    'organización de matrimonio', 'planeador de bodas', 
    'coordinación de matrimonios', 'planificación de bodas', 
    'planeación evento nupcial', 'organización evento nupcial'
])

  .addAnswer('👥 ¿Cuántas personas planeas invitar a tu boda?' ,{delay: 1000,})
  .addAnswer(

    [ 
        '👇 Responde con la palabra escrita de tu preferencia 👇',
        ' ',
        '🌴 *Más de 50*',
        '🌴 *Menos de 50*',
        '🌴 *Inicio*',
        ' ',
        '👇 Responde con la palabra escrita de tu preferencia 👇'
    ],{delay: 1000,})

    ////////INGRESA OPCIÓN PAREJA - Planear mi boda* - más de 50//////
    const flowParejaCotizarBoda50 = addKeyword([
        'mas de 50', 'más de 50', 
        'mas de 50 personas', '50 personas o mas'
      ])
      .addAnswer('Perfecto, te pondremos en contacto con nuestra Planner Aliada Karol Planner' ,{delay: 1000,})
      .addAnswer('📄 👉 Te invitamos a consultar su página web, ya estamos arreglando todo para contactarte - https://www.karolplanner.com/' ,{delay: 1000,})
      .addAnswer(
        [ 
            '👇 Responde con la palabra escrita de tu preferencia 👇',
            ' ',
            '🌴 *Precios*',
            '🌴 *Información de la casa*',
            '🌴 *Reservar Casa*',
            '🌴 *Planear mi boda*',
            '🌴 *Agendar mi boda*',
            '🌴 *Agendar una visita*',
            '🌴 *Licor*',
            '🌴 *Inicio*',
            ' ',
            '👇 Responde con la palabra escrita de tu preferencia 👇'
        ],{delay: 1000,})
                      

   ////////INGRESA OPCIÓN PAREJA - Planear mi boda*- menos de 50//////
   const flowParejaCotizarBodamen50 = addKeyword([
    'menos de 50', 'mens de 50', 
    'menos de 50 personas', '50 personas o menos'
  ])
  .addAnswer('Llena el siguiente formulario y nuestra Planner estará en contacto contigo muy pronto!' ,{delay: 1000,})
  .addAnswer('📄 👉 https://kapikua.com.co/wedding-planner/' ,{delay: 1000,})
  .addAnswer(

    [ 
        '👇 Responde con la palabra escrita de tu preferencia 👇',
        ' ',
        '🌴 *Precios*',
        '🌴 *Información de la casa*',
        '🌴 *Reservar Casa*',
        '🌴 *Planear mi boda*',
        '🌴 *Agendar mi boda*',
        '🌴 *Agendar una visita*',
        '🌴 *Licor*',
        '🌴 *Inicio*',
        ' ',
        '👇 Responde con la palabra escrita de tu preferencia 👇'
    ],{delay: 2000,})
                  


   ////////INGRESA OPCIÓN PAREJA - Agendar visita//////
   const flowParejaAgenda = addKeyword([
    'agendar visita', 'agendar una visita', 'agendar mi visita', 
    'agendar visita a la casa', 'agendar una visita a la casa',
    'agendar visita de la casa', 'agendar una visita de la casa',
    'agendar una visita para ver la casa', 'agendar una visita para verla'
  ])

  .addAnswer('🏠 Por favor escribe la fecha en la que deseas programar la visita (formato DD/MM/AAAA):', { delay: 1000 })
  .addAnswer('📅 ¡Gracias! Hemos recibido tu solicitud para programar la visita. En un momento estaremos en contacto contigo para coordinar los detalles.')
  .addAnswer('El Chat se reiniciara, pero ya esteremos de nuevo contigo',{ delay: 1000 })



   ////////INGRESA OPCIÓN PAREJA - Licor //////


    const flowParejaLicor = addKeyword(['Licor', 'Lcor', 'trago', 'licor boda', 'trago boda', 'licor de mi boda', 'Lcor',])

    .addAnswer('🙌 En el siguiente enlace puedes comprar tu licor https://kapikua.com.co/tienda-licores/' ,{delay: 1000,})
    .addAnswer('*_KAPIKUA te invita a disfrutar con responsabilidad. El exceso de alcohol es perjudicial para la salud. Ley 30 de 1986. Prohíbase el expendio de bebidas embriagantes a menores de edad y mujeres embarazadas. Ley 124 de 1994. Los grados alcohólicos varían según la referencia del producto, véase la etiqueta*_' ,{delay: 1000,})
    .addAnswer(
        [  '¿Tienes más dudas?',
            ' ',
            '👇 Responde con la palabra escrita de tu preferencia 👇',
            ' ',
            '🌴 *Precios*',
            '🌴 *Información de la casa*',
            '🌴 *Reservar Casa*',
            '🌴 *Planear mi boda*',
            '🌴 *Agendar mi boda*',
            '🌴 *Agendar una visita*',
            '🌴 *Licor*',
            '🌴 *Inicio*',
            ' ',
            '👇 Responde con la palabra escrita de tu preferencia 👇',

        ],{delay: 2000,}
    )
////////////////////WEDDING PLANNER/////////
////////////////////WEDDING PLANNER/////////
////////////////////WEDDING PLANNER/////////
////////////////////WEDDING PLANNER/////////
////////////////////WEDDING PLANNER/////////
////////////////////WEDDING PLANNER/////////
////////////////////WEDDING PLANNER/////////
////////////////////WEDDING PLANNER/////////
////////////////////WEDDING PLANNER/////////
////////////////////WEDDING PLANNER/////////
////////////////////WEDDING PLANNER/////////


////////INGRESA WEDDING PLANNER//////

const flowWeddingPlanner = addKeyword([
  'wedding planner','weddingplaner', 'weding planner', 'weding planer', 'weding'
])
  .addAnswer('🙌 Hola *Planner* 💙 que alegría tenerte aquí *¿Que quieres hacer hoy?*' ,{delay: 1000,})
  .addAnswer(
  [   '👇 Responde con la palabra escrita de tu preferencia 👇',
      ' ',
      '🌴 *Fechas Libres*',
      '🌴 *Tarifas*',
      '🌴 *Visita inspección*',
      '🌴 *Licor*',
      '🌴 *Generar un contrato*',
      '🌴 *Consulta de Proveedores*',
      '🌴 *Resgistrar Proveedores*',
      '🌴 *Info Pre bodas*',
      '🌴 *Info Post bodas*',
      '🌴 *Pagos*',
      '🌴 *Ir atras*',
      '🌴 *Inicio*',
      ' ',
      '👇 Responde con la palabra escrita de tu preferencia 👇'
  ],{delay: 1000,}
)

   ////////INGRESA OPCIÓN wEDDING - FECHAS LIBRES//////

   const flowWeddingDisp = addKeyword([
    'fechas libres','fecha libre', 'feca libres', 'fechas libre', 'fechas libre'
  ])
.addAnswer('Puedes revisar la disponibilidad de la casa en el siguiente enlace:', {delay: 1000,})
.addAnswer('📄 👉 https://kapikua.com.co/your-booking-detail/?task=search' ,{delay: 1000,})
.addAnswer(
    [ 
        '👇 Responde con la palabra escrita de tu preferencia 👇 ',
        ' ',
        '🌴 *Fechas Libres*',
        '🌴 *Tarifas*',
        '🌴 *Visita inspección*',
        '🌴 *Licor*',
        '🌴 *Generar un contrato*',
        '🌴 *Consulta de Proveedores*',
        '🌴 *Resgistrar Proveedores*',
        '🌴 *Info Pre bodas*',
        '🌴 *Info Post bodas*',
        '🌴 *Pagos*',
        '🌴 *Ir atras*',
        '🌴 *Inicio*',
        ' ',
        '👇 Responde con la palabra escrita de tu preferencia 👇'
    ],{delay: 2000,}
)

   ////////INGRESA OPCIÓN WEDDING - tarifass//////

const flowWeddingInfo = addKeyword([
  'Tarifas', 'Tarifa', 'info pre bodas', 'info post bodas*', 'pagos',
])

.addAnswer('🏠 Puedes consultar toda la información de la casa en el siguiente PDF:' ,{delay: 1000,})
.addAnswer('📄 👉 https://kapikua.com.co/wp-content/uploads/2024/06/PORTAFOLIO-OFICIAL-KAPIKUA-2024-2025.pdf' ,{delay: 1000,})
.addAnswer(
  [ 
      '👇 Responde con la palabra escrita de tu preferencia 👇 ',
      ' ',
      '🌴 *Fechas Libres*',
      '🌴 *Tarifas*',
      '🌴 *Visita inspección*',
      '🌴 *Licores*',
      '🌴 *Generar un contrato*',
      '🌴 *Consulta de Proveedores*',
      '🌴 *Resgistrar Proveedores*',
      '🌴 *Info Pre bodas*',
      '🌴 *Info Post bodas*',
      '🌴 *Pagos*',
      '🌴 *Ir atras*',
      '🌴 *Inicio*',
      ' ',
      '👇 Responde con la palabra escrita de tu preferencia 👇'
  ],{delay: 2000,}
)

 ////////INGRESA OPCIÓN WEDDING -  visita inspección//////
 const flowWeddingVisita = addKeyword([
  'Visita inspección', 'Visita inspeccion', 'visita de inspección', 'visita de inspeccion', 'visita a inspección', 'visita a inspeccion'
])

.addAnswer('🏠 Por favor escribe la fecha en la que deseas programar la visita (formato DD/MM/AAAA):', { delay: 1000 })
.addAnswer('📅 ¡Gracias! Hemos recibido tu solicitud para programar la visita. En un momento estaremos en contacto contigo para coordinar los detalles.')
.addAnswer('El Chat se reiniciara, pero ya esteremos de nuevo contigo',{ delay: 1000 })




////////INGRESA OPCIÓN PAREJA - Licor //////


const flowWeddingLicor = addKeyword(['Licores'])

.addAnswer('🙌 En el siguiente enlace puedes comprar tu licor https://kapikua.com.co/tienda-licores/ *Recuerda que el ecceso de alcohol es perjudicial para la salud*' ,{delay: 1000,})
.addAnswer('*_KAPIKUA te invita a disfrutar con responsabilidad. El exceso de alcohol es perjudicial para la salud. Ley 30 de 1986. Prohíbase el expendio de bebidas embriagantes a menores de edad y mujeres embarazadas. Ley 124 de 1994. Los grados alcohólicos varían según la referencia del producto, véase la etiqueta*_' ,{delay: 1000,})
.addAnswer(
    [  '¿Tienes más dudas?',
        ' ',
        '👇 Responde con la palabra escrita de tu preferencia 👇',
        ' ',
        '🌴 *Fechas Libres*',
        '🌴 *Tarifas*',
        '🌴 *Visita inspección*',
        '🌴 *Licores*',
        '🌴 *Generar un contrato*',
        '🌴 *Consulta de Proveedores*',
        '🌴 *Resgistrar Proveedores*',
        '🌴 *Info Pre bodas*',
        '🌴 *Info Post bodas*',
        '🌴 *Pagos*',
        '🌴 *Ir atras*',
        '🌴 *Inicio*',
        ' ',
        '👇 Responde con la palabra escrita de tu preferencia 👇',

    ],{delay: 2000,}
)


   ////////INGRESA OPCIÓN wedding - generar un contrato//////
   const flowWeddingContrato = addKeyword([
    'Generar un contrato'

  ])

  .addAnswer('🏠 Puedes solicitar tu contrato para reservar la casa en el siguiente enlace:' ,{delay: 1000,})
  .addAnswer('📄 👉 https://kapikua.com.co/solicitud-de-contratos-bodas-kapikua/' ,{delay: 1000,})
  .addAnswer(
    [ 
        '👇 Responde con la palabra escrita de tu preferencia 👇 ',
        ' ',
        '🌴 *Fechas Libres*',
        '🌴 *Tarifas*',
        '🌴 *Visita inspección*',
        '🌴 *Licores*',
        '🌴 *Generar un contrato*',
        '🌴 *Consulta de Proveedores*',
        '🌴 *Resgistrar Proveedores*',
        '🌴 *Info Pre bodas*',
        '🌴 *Info Post bodas*',
        '🌴 *Pagos*',
        '🌴 *Ir atras*',
        '🌴 *Inicio*',
        ' ',
        '👇 Responde con la palabra escrita de tu preferencia 👇'
    ],{delay: 2000,}
)



 ////////INGRESA OPCIÓN WEDDING -  consulta de Proveedores//////
 const flowWeddingConsultaPro = addKeyword([
  'consulta de proveedores'
])

.addAnswer('🏠 Para consultar nuestros proveedores autorizados, te invitamos a conocer los que ya han trabajado con Casa Kapikua. 📸 Encuéntralos en nuestras redes sociales', { delay: 1000 })
.addAnswer('Instagram👉 [Instagram: @kapikua_official](https://www.instagram.com/kapikua_official/)', { delay: 1000 })
.addAnswer(
  [ 
      '👇 Responde con la palabra escrita de tu preferencia 👇 ',
      ' ',
      '🌴 *Fechas Libres*',
      '🌴 *Tarifas*',
      '🌴 *Visita inspección*',
      '🌴 *Licores*',
      '🌴 *Generar un contrato*',
      '🌴 *Consulta de Proveedores*',
      '🌴 *Resgistrar Proveedores*',
      '🌴 *Info Pre bodas*',
      '🌴 *Info Post bodas*',
      '🌴 *Pagos*',
      '🌴 *Ir atras*',
      '🌴 *Inicio*',
      ' ',
      '👇 Responde con la palabra escrita de tu preferencia 👇'
  ],{delay: 2000,}
)

////////INGRESA OPCIÓN WEDDING -  registro de Proveedores//////
const flowWeddingRegistroPro = addKeyword([
  'resgistrar proveedores'
])

.addAnswer('🏠 Para registrar tus proveedores autorizados a Casa Kapikua te invitamos a llenar el siguiente formulario', { delay: 1000 })
.addAnswer('*Forumuario*👉 https://kapikua.com.co/solicitud-de-ingreso-bodas-kapikua/', { delay: 1000 })
.addAnswer(
  [ 
      '👇 Responde con la palabra escrita de tu preferencia 👇 ',
      ' ',
      '🌴 *Fechas Libres*',
      '🌴 *Tarifas*',
      '🌴 *Visita inspección*',
      '🌴 *Licores*',
      '🌴 *Generar un contrato*',
      '🌴 *Consulta de Proveedores*',
      '🌴 *Resgistrar Proveedores*',
      '🌴 *Info Pre bodas*',
      '🌴 *Info Post bodas*',
      '🌴 *Pagos*',
      '🌴 *Ir atras*',
      '🌴 *Inicio*',
      ' ',
      '👇 Responde con la palabra escrita de tu preferencia 👇'
  ],{delay: 2000,}
)







const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowSaludo,flowWeddingRegistroPro,flowPareja,flowWeddingConsultaPro,flowWeddingContrato,flowWeddingLicor,flowWeddingVisita,flowParejaDisp,flowWeddingInfo,flowParejaPrecio,flowParejaInfo,flowParejaReserva,flowParejaWedding,flowParejaCotizarBoda50,flowParejaAgenda,flowParejaCotizarBodamen50,flowAsesor,flowParejaLicor,flowWeddingPlanner,flowWeddingDisp])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
