(function(e){function a(a){for(var n,r,c=a[0],s=a[1],l=a[2],u=0,d=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);m&&m(a);while(d.length)d.shift()();return t.push.apply(t,l||[]),o()}function o(){for(var e,a=0;a<t.length;a++){for(var o=t[a],n=!0,r=1;r<o.length;r++){var c=o[r];0!==i[c]&&(n=!1)}n&&(t.splice(a--,1),e=s(s.s=o[0]))}return e}var n={},r={app:0},i={app:0},t=[];function c(e){return s.p+"js/"+({comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5"}[e]||e)+"."+{"chunk-0206bfa0":"ddd1e7fa","chunk-04b93936":"b4db237a","chunk-13a6037e":"7bf899d0","chunk-16015154":"ba9696fe","chunk-17977988":"4f3efa73","chunk-2c06842c":"924e7248","chunk-2d208d90":"7abf34b7","chunk-2d21d0e2":"061f51d1","chunk-2d22c123":"fa1cefcb","chunk-2e80bb9a":"0502187c","chunk-3145fe0f":"9366f016","chunk-328f70dd":"ed4eea27","chunk-3807499c":"78c23e29","chunk-3c94cd2f":"b6023d43","chunk-3dc647fd":"a9407d7f","chunk-4cdd78c0":"dc8e6fb4","chunk-515a8379":"80282c61","chunk-53ccb27e":"a66d83e9","chunk-59974754":"aa559d02","chunk-766a929b":"b1540445","chunk-839300a6":"69725811","chunk-c796899c":"c41b2b81",comple:"bf2fd7ed",creditos:"e4c269c7",glosario:"1a5468d2",intro:"e0e81a63",referencias:"ff8c7c04",tema1:"b376334d",tema2:"cd09cb48",tema3:"0f3cd725",tema4:"a5613220",tema5:"600057aa"}[e]+".js"}function s(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var a=[],o={"chunk-04b93936":1,"chunk-16015154":1,"chunk-17977988":1,"chunk-3145fe0f":1,"chunk-328f70dd":1,"chunk-3807499c":1,"chunk-3c94cd2f":1,"chunk-3dc647fd":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-766a929b":1,"chunk-839300a6":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1};r[e]?a.push(r[e]):0!==r[e]&&o[e]&&a.push(r[e]=new Promise((function(a,o){for(var n="css/"+({comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5"}[e]||e)+"."+{"chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-13a6037e":"31d6cfe0","chunk-16015154":"d035a47c","chunk-17977988":"d035a47c","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3145fe0f":"d035a47c","chunk-328f70dd":"d035a47c","chunk-3807499c":"d035a47c","chunk-3c94cd2f":"1dbe8d4a","chunk-3dc647fd":"d035a47c","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"e7b87a14","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"b9c30b54","chunk-766a929b":"c482463b","chunk-839300a6":"b67dc245","chunk-c796899c":"31d6cfe0",comple:"7fd6a723",creditos:"0d395036",glosario:"6c90f735",intro:"0e433876",referencias:"9354dd1f",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0",tema5:"31d6cfe0"}[e]+".css",i=s.p+n,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var l=t[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===i))return a()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===n||u===i)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var n=a&&a.target&&a.target.src||i,t=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=n,delete r[e],m.parentNode.removeChild(m),o(t)},m.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){r[e]=0})));var n=i[e];if(0!==n)if(n)a.push(n[2]);else{var t=new Promise((function(a,o){n=i[e]=[a,o]}));a.push(n[2]=t);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var d=new Error;l=function(a){u.onerror=u.onload=null,clearTimeout(m);var o=i[e];if(0!==o){if(o){var n=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,o[1](d)}i[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(a)},s.m=e,s.c=n,s.d=function(e,a,o){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)s.d(o,n,function(a){return e[a]}.bind(null,n));return o},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=a,l=l.slice();for(var d=0;d<l.length;d++)a(l[d]);var m=u;t.push([0,"chunk-vendors"]),o()})({0:function(e,a,o){e.exports=o("56d7")},"52e5":function(e,a,o){e.exports=o.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,o){"use strict";o.r(a);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("68f3"),r=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"app",attrs:{id:"app"}},[o("Header"),o("div",{staticClass:"contenedor-principal"},[o("AsideMenu"),o("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[o("router-view")],1)],1),o("BarraAvance"),o("Accesibilidad")],1)},i=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=t,s=o("2877"),l=Object(s["a"])(c,r,i,!1,null,null,null),u=l.exports,d=(o("d3b7"),o("3ca3"),o("ddb0"),o("b0c0"),o("2b0e")),m=o("8c4f"),f=o("ae58"),p=o("7e58");d["a"].use(m["a"]);var h=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return o.e("intro").then(o.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return o.e("tema1").then(o.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return o.e("tema2").then(o.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return o.e("tema3").then(o.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return o.e("tema4").then(o.bind(null,"3eb5"))}},{path:"tema5",name:"tema5",component:function(){return o.e("tema5").then(o.bind(null,"5029"))}}]},{path:"/glosario",name:"glosario",component:function(){return o.e("glosario").then(o.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return o.e("comple").then(o.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return o.e("referencias").then(o.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return o.e("creditos").then(o.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var o={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?o:new Promise((function(e){setTimeout((function(){e(o)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),g=h,b=o("1c2c"),v=(o("a3a0"),{global:{componenteFormativo:"Procedimientos de reservas",descripcionCurso:"Este componente formativo contiene una descripción detallada del procedimiento técnico para reservas hoteleras, donde se explica cómo se puede consultar la disponibilidad y registrar paso a paso la información requerida, indicando el orden para la confirmación de la reservación: estado, condiciones y políticas. Así mismo, se estará en la capacidad de generar los reportes de reservas de manera correcta. <br><br>¡Nuevamente bienvenido al programa de formación en Servicio de recepción hotelera!",imagenBannerPrincipal:o("ae0a"),fondoBannerPrincipal:o("e6b0")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Canales de reserva",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Canales de reserva directos",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Canales de reserva indirectos",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Ventajas y desventajas",hash:"t_1_3"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Tipos y codificación de reservas",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Tipos de reservas hoteleras",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Codificación de reservas ",hash:"t_2_2"}]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Reportes",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"3.1",titulo:"Rooming list",hash:"t_3_1"},{icono:"far fa-file-alt",numero:"3.2",titulo:"Waiting list",hash:"t_3_2"},{icono:"far fa-file-alt",numero:"3.3",titulo:"Forecasting (pronóstico)",hash:"t_3_3"},{icono:"far fa-file-alt",numero:"3.4",titulo:"Overbooking",hash:"t_3_4"},{icono:"far fa-file-alt",numero:"3.5",titulo:"No Show",hash:"t_3_5"}]},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Procedimientos técnicos",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"4.1",titulo:"Confirmación",hash:"t_4_1"},{icono:"far fa-file-alt",numero:"4.2",titulo:"Modificación",hash:"t_4_2"},{icono:"far fa-file-alt",numero:"4.3",titulo:"Cancelación",hash:"t_4_3"},{icono:"far fa-file-alt",numero:"4.4",titulo:"Anulación",hash:"t_4_4"}]},{nombreRuta:"tema5",icono:"far fa-file-alt",numero:"5",titulo:"Reservas",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"5.1",titulo:"Tratamiento de la reserva",hash:"t_5_1"},{icono:"far fa-file-alt",numero:"5.2",titulo:"Condiciones",hash:"t_5_2"},{icono:"far fa-file-alt",numero:"5.3",titulo:"Políticas",hash:"t_5_3"},{icono:"far fa-file-alt",numero:"5.4",titulo:"Garantía de reserva",hash:"t_5_4"}]}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},creditos:{liderEquipo:{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo"},contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor pedagógico",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"},{nombre:"Amparo Virginia Moreno Cantero",cargo:"Experta temática",centro:"Centro de Servicios y Gestión Empresarial"},{nombre:"Harbey Castelblanco",cargo:"Experto temático",centro:"Centro Colombo Alemán"},{nombre:"Leidy Carolina Arias Aguirre",cargo:"Diseñadora instruccional",centro:"Centro de diseño y metrología",regional:""},{nombre:"Martha Isabel Martínez Vargas",cargo:"Productora audiovisual",centro:"Centro Industrial del Diseño y la Manufactura",regional:""},{nombre:"Ana Catalina Córdoba Sus",cargo:"Revisora Metodológica y Pedagógica",centro:"Centro para la Industria de la Comunicación Gráfica.",regional:"Regional Distrito Capital"},{nombre:"Jhon Jairo Rodríguez Pérez",cargo:"Diseñador y evaluador instruccional",centro:"Centro para la Industria de la Comunicación Gráfica.",regional:"Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Integración de recursos y pruebas",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"},{nombre:["Yuly Rey","Eulises Orduz Amezquita"],cargo:"Diseño web y Producción Audiovisual",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"},{nombre:"Camilo Andres Bolaño Rey",cargo:"Desarrollo Front-End",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"},{nombre:"Rafael Augusto Mantilla López",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"}],gestoresRepositorio:[{nombre:"Álvaro Andrés Angarita Ramirez",cargo:["Validación de recursos"],centro:"Centro de comercio y servicios - Regional Tolima"},{nombre:"Daniel Felipe Varón Molina",cargo:["Validación de recursos"],centro:"Centro de comercio y servicios - Regional Tolima"},{nombre:"Milady Tatiana Villamil Castellanos",cargo:["Validación y vinculación en plataforma LMS"],centro:"Centro de Comercio y Servicios Regional Tolima",regional:"Regional Tolima"}]},referencias:[{referencia:"Unknown. (2015, diciembre 17).  Códigos IATA. [Web log post]. Agencia de Viajes I.",link:"http://av1germainebatson.blogspot.com/2015/12/codigos-iata.html"},{referencia:"Álvarez, E. A. (2021, enero 7). Recepción y reservas. Unidad de trabajo 6. [Web log post]. Emilio Alonso Álvarez - Blog Profesional.",link:"https://emilioalonsoalvarez.files.wordpress.com/2012/10/ut6-reservas.pdf"},{referencia:"Ateortua, K. S. [ksateortua]. (2013, noviembre, 13). Reserva hotelera [Presentación]. Slideshare.",link:"https://es.slideshare.net/ksateortua/421-reserva-de-hotel"},{referencia:"Duran, W. (2018, mayo , 9). Tarifas dinámicas en hoteles, tendencia que ya existe en los viajes de negocios. [Publicación en perfil].  Linkedin. ",link:"https://www.linkedin.com/pulse/tarifas-din%C3%A1micas-en-hoteles-tendencia-que-ya-existe-los-waldin-duran#:~:text=El%20establecimiento%20de%20precios%20din%C3%A1micos,Esp"},{referencia:"Oracle Corporation. (s.f.). Group Rooming List. oracle.com",link:"https://docs.oracle.com/cd/E53547_01/opera_5_04_03_core_help/grprmlist_help.htm"},{referencia:"Oracle Corporation. (s.f.). Waitlist Screen. oracle.com",link:"https://docs.oracle.com/cd/E98457_01/opera_5_6_core_help/waitlist_options.htm"},{referencia:"eZee Technosys Pvt. Ltd. (s.f) How to Assign Bookings/Rooms in eZee Absolute",link:"https://help.ezeetechnosys.com/how-to-assign-bookings-rooms-in-ezee-absolute/"},{referencia:"Hytar. (2013) Código de aeropuertos de OACI. Wikipedia.",link:"https://es.wikipedia.org/wiki/C%C3%B3digo_de_aeropuertos_de_OACI#/media/Archivo:ICAO_FirstLetter.svg"},{referencia:"Marrero, F. J. (2016, Noviembre 1). Glosario de términos hoteleros, turísticos y relacionados. Obtenido de Hosteltur:",link:"https://www.hosteltur.com/files/web/templates/term/wikitur.pdf"},{referencia:"Soler, J. R. (2.000). Técnicas de Gestión y Dirección Hotelera. Barcelona: Ediciones Gestión 2.000 S.A."}],glosario:[{termino:"Availability - Disponibilidad",significado:"“En hotelería, número de habitaciones o plazas disponibles para la venta en un día concreto” (Marrero, 2016, p. 55)."},{termino:"Cancelación",significado:"“En hotelería, anulación de una reserva confirmada” (Marrero, 2016, p. 37)."},{termino:"Allotment - Cupo",significado:"“En hotelería y transporte, conjunto de plazas reservadas sin asignación de un nombre de cliente y que precisan confirmación” (Marrero, 2016, p. 50)."},{termino:"Dynamic Pricing",significado:"“El establecimiento de precios dinámicos o dynamic pricing es una estrategia en la que el valor de la venta cambia en función de la oferta y la demanda en tiempo real. significa que usted les ofrece a sus clientes corporativos un descuento porcentual de su BAR” (Duran, 2018)."},{termino:"Forecast",significado:"“En marketing y ventas, voz inglesa para la proyección, pronóstico o predicción futura estimada en el volumen de negocio o más concretamente en la previsión de ventas” (Marrero, 2016, p. 66)."},{termino:"IATA Asociación Internacional de Transporte Aéreo",significado:"“Colectivo que tiene entre sus principales objetivos asegurar el normal desarrollo del tráfico aéreo, con la mayor velocidad, comodidad y eficiencia posibles para las compañías aéreas” (Marrero, 2016, p. 24)."},{termino:"No Show",significado:"“En hotelería, expresión inglesa para una reserva confirmada no presentada” (Marrero, 2016, p. 99)."},{termino:"Overbooking - Sobreventa",significado:"“En turismo, venta excesiva que se realiza sobre un servicio con el objeto de garantizar su plena ocupación” (Marrero, 2016, p. 129)."},{termino:"PNR - Passenger Name Record",significado:"“Expresión inglesa para Registro de Nombre de Pasajero” (Marrero, 2016, p.111). “contiene todos los datos y eventos relacionados con la reserva de un pasajero o un grupo de pasajeros que viajan como un conjunto” (Marrero, 2016, p. 119)."},{termino:"Planning ",significado:"En español Plano de ocupación. “En hotelería, panel o casillero físico o digital en el que están representadas todas las habitaciones de un establecimiento de alojamiento y que sirve para gestionar el estado en que se encuentran (libre, ocupada, bloqueada, etc.)” <br>(Marrero, 2016, p.  110)."},{termino:"Rooming List",significado:"“En hotelería, expresión inglesa para la relación de habitaciones asignadas a personas o grupos, elaborado en la recepción” (Marrero, 2016, p. 122 )."},{termino:"Waiting list Lista de espera",significado:"“En turismo y transporte, relación de personas inscritas en espera de la cancelación de la reserva de un servicio, al haber más demanda que oferta para el mismo en una fecha y horario determinados” (Marrero, 2016, p. 89)."}],complementario:[{texto:"Misra, A. (2020). The History of the NATO Phonetic Alphabet [Video]. Youtube",tipo:"Video en youtube.",link:"https://www.youtube.com/watch?v=0U6y9JysqXA "}]});n["a"].prototype.$config=v;var k=o("9224");n["a"].prototype.$package=k,new n["a"]({router:g,store:b["a"],render:function(e){return e(u)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"4.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"3.0.3","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},"9eb5":function(e,a,o){e.exports=o.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,o){},ae0a:function(e,a,o){e.exports=o.p+"img/banner-princiapal.8e7e32ba.svg"},e6b0:function(e,a,o){e.exports=o.p+"img/fondo-banner-principal.944fc1da.png"}});
//# sourceMappingURL=app.d2757003.js.map