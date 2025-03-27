"use client";
import { Timeline } from "@/components/AboutMePage/ui";

export const TimelineComponent = () => {
  const data = [
    {
      title: "Éxito",
      content: (
        <div>
          <p className="text-white dark:text-black text-xs md:text-3xl font-bold mb-2">
            Impulsando tu Negocio Hacia el Éxito Digital
          </p>
          <p className="text-slate-400 dark:text-black text-xs md:text-lg font-normal mb-8">
            ¿Buscas un sitio web único, atractivo y funcional que se adapte
            perfectamente a tus necesidades y presupuesto? Estás en el lugar
            correcto. En nuestro equipo, nos especializamos en diseñar y
            desarrollar sitios web que no solo cumplen, sino que superan tus
            expectativas.
          </p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: "Calidad",
      content: (
        <div>
          <p className="text-white dark:text-black text-xs md:text-3xl font-bold mb-2">
            Entrega Rápida sin Compromisos en Calidad
          </p>
          <p className="text-slate-400 dark:text-black text-xs md:text-lg font-normal mb-8">
            Entregamos tu sitio web en tiempo récord, sin comprometer la calidad
            del trabajo. Nos aseguramos de que cada aspecto de tu sitio web esté
            alineado con los estándares actuales de diseño y tecnología,
            garantizando una experiencia óptima tanto para ti como para tus
            visitantes.
          </p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: "Relación",
      content: (
        <div>
          <p className="text-white dark:text-black text-xs md:text-3xl font-bold mb-2">
            Relación Profesional
          </p>
          <p className="text-slate-400 dark:text-black text-xs md:text-lg font-normal mb-8">
            Más que proveedores de servicios, somos tu socio en el éxito
            digital. Mantenemos una relación profesional y comprometida contigo
            durante todo el proceso de desarrollo y más allá. Tu satisfacción es
            nuestra prioridad número uno.
          </p>

          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: "Ventas",
      content: (
        <div>
          <p className="text-white dark:text-black text-xs md:text-3xl font-bold mb-2">
            Atrae Más Clientes, Aumenta tus Ventas
          </p>
          <p className="text-slate-400 dark:text-black text-xs md:text-lg font-normal mb-8">
            Un sitio web bien diseñado y funcional no solo mejora la visibilidad
            de tu negocio, sino que también atrae más clientes y aumenta las
            ventas. Con una presencia en línea efectiva, tu negocio se vuelve
            accesible y visible para aquellos que buscan tus productos o
            servicios en internet.
          </p>

          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
  ];
  return <Timeline data={data} />;
};
