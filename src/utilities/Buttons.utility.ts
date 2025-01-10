import AeroplaneIcon from "@/assets/icons/Aeroplane.icon.vue";
import AmbulanceIcon from "@/assets/icons/Ambulance.icon.vue";
import BookIcon from "@/assets/icons/Book.icon.vue";
import BuildIcon from "@/assets/icons/Build.icon.vue";
import CarIcon from "@/assets/icons/Car.icon.vue";
import DollarIcon from "@/assets/icons/Dollar.icon.vue";
import FactoryIcon from "@/assets/icons/Factory,icon.vue";
import FileIcon from "@/assets/icons/File.icon.vue";
import FireExtinguisherIcon from "@/assets/icons/FireExtinguisher.icon.vue";
import GraphIcon from "@/assets/icons/Graph.icon.vue";
import HearbeathIcon from "@/assets/icons/Hearbeath.icon.vue";
import HomeIcon from "@/assets/icons/Home.icon.vue";
import LeafIcon from "@/assets/icons/Leaf.icon.vue";
import MotorBikeIcon from "@/assets/icons/MotorBike.icon.vue";
import PipeWrenchIcon from "@/assets/icons/PipeWrench.icon.vue";
import ShipIcon from "@/assets/icons/Ship.icon.vue";
import ShoppingBagIcon from "@/assets/icons/ShoppingBag.icon.vue";
import TruckIcon from "@/assets/icons/Truck.icon.vue";
import WorldIcon from "@/assets/icons/World.icon.vue";
import type IconButton from "@/models/iconButton.model";

// Definición de un array de objetos `personsIconButtons` para representar los botones de la sección de personas

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
        text: "Un seguro pensado especialmente para tu cartera, bolso o equipaje.",
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

];

// Definición de un array de objetos `companyIconButtons` para representar los botones de la sección de empresas.

export const companyIconButtons: IconButton[] = [
    {
        icon: FactoryIcon,
        title: "SEGURO PyME",
        text: "Te ofrecemos un seguro todo riesgo operativo especialmente diseñado para proteger tu negocio.",
    },
    {
        icon: AeroplaneIcon,
        title: "AERONAVEGACION",
        text: "Te ofrecemos una amplia gama de coberturas para la actividad aeronáutica comercial y/o privada.",
    },
    {
        icon: GraphIcon,
        title: "INTEGRAL COMERCIO",
        text: "Tenemos u seguro con las mejores coberturas y servicios adiciones para tu comercio o consorcio.",
    },
    {
        icon: WorldIcon,
        title: "RC OPERADORAS DE TURISMO",
        text: "Brindamos cobertura de responsabilidad civil para actividades e instalaciones turísticas.",
    },
    {
        icon: DollarIcon,
        title: "ROBO",
        text: "Contamos con diversas coberturas, generales y específicas, para asegurar tu empresa y/o negocio.",
    },
    {
        icon: HearbeathIcon,
        title: "VIDA, AP Y SEPELIO",
        text: "Contamos con una amplia gama de coberturas para organismos e instituciones públicas y privadas.",
    },
    {
        icon: BookIcon,
        title: "CAUCIÓN",
        text: "Asumimos la responsabilidad de un tercero por su obligacion de dar o hacer algo en tiempo y forma.",
    },
    {
        icon: CarIcon,
        title: "AUTOMOTORES",
        text: "Tenemos diversas coberturas con servicios adicionales incluidas para que elijas la que más se adapte a tus necesidades.",
    },
    {
        icon: TruckIcon,
        title: "TRANSPORTE DE MERCADERIA",
        text: "Te damos la cobertura que necesitás para asegurar tu mercancía, en tránsito nacional y/o internacional.",
    },
    {
        icon: FireExtinguisherIcon,
        title: "TODO RIESGO OPERATIVO",
        text: "Te ofrecemos las mejores coberturas para asegurar todos tus bienes de tu empresa y/o negocio.",
    },
    {
        icon: BuildIcon,
        title: "RESPONSABILIDAD CIVIL",
        text: "Te brindamos la cobertura y los adicionales para las operaciones de tu comercio.",
    },
    {
        icon: LeafIcon,
        title: "AGRO",
        text: `Una cobertura "multi riesgo agropecuario" con un plan especialmente adaptado para productores independientes.`,
    },
    {
        icon: PipeWrenchIcon,
        title: "SEGURO TÉCNICO",
        text: "Te compañamos con un Seguro Técnico que se adapta a todas sus necesidades.",
    }
];