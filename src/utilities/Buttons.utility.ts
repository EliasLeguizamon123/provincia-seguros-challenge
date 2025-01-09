import AmbulanceIcon from "@/assets/icons/Ambulance.icon.vue";
import CarIcon from "@/assets/icons/Car.icon.vue";
import FileIcon from "@/assets/icons/File.icon.vue";
import HomeIcon from "@/assets/icons/Home.icon.vue";
import MotorBikeIcon from "@/assets/icons/MotorBike.icon.vue";
import ShipIcon from "@/assets/icons/Ship.icon.vue";
import ShoppingBagIcon from "@/assets/icons/ShoppingBag.icon.vue";
import type IconButton from "@/models/iconButton.model";

export const personsIconButtons: IconButton[] = [
    {
        icon: CarIcon,
        title: "AUTOMOTORES",
        text: "Tenemos diversas coberturas con servicios adicionales incluidos para que elijas la que prefieras.",
    },
    {
        icon: HomeIcon,
        title: "HOGAR",
        text: "Te ofrecemos las coberturas que necesitas para bindarte la tranquilidad de tener todo asegurado.",
    },
    {
        icon: MotorBikeIcon,
        title: "MOTO",
        text: "Te ofrecemos distintos planes pensados para vos, con servicios adicionales incluidos",
    },
    {
        icon: FileIcon,
        title: "GARANTIA DE ALQUILER",
        text: "Tenemos un seguro de caución para tu contrato de alquiler.",
    },
    {
        icon: ShoppingBagIcon,
        title: "BOLSO PROTEGIDO",
        text: "Un seguro pensado especialmente para tu cartera, bolso o equipaje."
    },
    {
        icon: ShipIcon,
        title: "EMBARCACIONES DE PLACER",
        text: "Te ofrecemos un seguro para embarcaciones de placer o deporte",
    },
    {
        icon: AmbulanceIcon,
        title: "ACCIDENTES PERSONALES",
        text: "Te brindamos cobertura ante cualquier riesgo, in impordar donde te encuentres."
    }

]