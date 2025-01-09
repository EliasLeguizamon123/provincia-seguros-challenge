// * Utility para manejar las slides de la sección hero

import type HeroButton from "@/models/heroButtons.model";

export const HeroButtons: HeroButton[] = [
    { 
        title: 'COTIZÁ Y CONTRATÁ TU \nSEGURO PARA TU HOGAR \nDE MAMERA FÁCIL Y RÁPIDA', 
        text: '',
        buttonText: 'Cotizá acá',
        image: new URL('@/assets/hero1.jpg', import.meta.url).href
    },
    { 
        title: 'COTIZÁ Y CONTRATÁ TU \nSEGURO DE AUTO O MOTO \nFÁCIL CON BENEFICIOS', 
        text: '',
        buttonText: 'Cotizá acá',
        image: new URL('@/assets/hero2.jpg', import.meta.url).href
    },
    { 
        title: 'WEB CLIENTES', 
        text: 'Nuevo diseño \ny más autogestión',
        buttonText: 'Click acá',
        image: new URL('@/assets/hero3.jpg', import.meta.url).href
    },
    { 
        title: 'SEGURO \nPyME', 
        text: 'Un seguro diseñado \npara proteger tu negocio',
        buttonText: 'Cotizá acá',
        image: new URL('@/assets/hero4.jpg', import.meta.url).href
    },
    { 
        title: 'DESCARGÁ LA APP\nY ACCEDÉ A\nNUESTROS SERVICIOS', 
        text: 'Llevá con vos la nueva app para tener todo lo que \nnecesitás a un dedo de distancia',
        buttonText: 'Descargá acá',
        image: new URL('@/assets/hero5.jpg', import.meta.url).href
    },
    { 
        title: 'SI ESTÁS EN SITUACIÓN\nDE VIOLENCIA DE GÉNERO\nNO DUDES EL LLAMAR AL 144', 
        text: '',
        buttonText: '',
        image: new URL('@/assets/hero6.jpg', import.meta.url).href
    },
]