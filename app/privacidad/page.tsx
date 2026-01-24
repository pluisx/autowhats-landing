import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Política de Privacidad | AutoWhats',
  description: 'Política de privacidad de AutoWhats. Conoce cómo recopilamos, usamos y protegemos tu información.',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Política de Privacidad
          </h1>
          <p className="text-gray-500 mb-8">Última actualización: Enero 2025</p>

          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              En Echo Haven Holdings LLC (&ldquo;AutoWhats&rdquo;, &ldquo;nosotros&rdquo;, &ldquo;nuestro&rdquo;),
              nos comprometemos a proteger tu privacidad. Esta política describe cómo recopilamos,
              usamos y protegemos la información que nos proporcionas al utilizar nuestros servicios
              de automatización de WhatsApp Business.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Información que Recopilamos</h2>
            <p className="text-gray-600 mb-4">Recopilamos los siguientes tipos de información:</p>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">1.1 Información de Contacto</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Nombre completo o razón social</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono y WhatsApp Business</li>
              <li>Nombre del negocio</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">1.2 Datos de Conversaciones</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Mensajes enviados y recibidos a través de WhatsApp Business conectado a nuestro servicio</li>
              <li>Historial de conversaciones para el funcionamiento del bot automatizado</li>
              <li>Datos de los clientes finales que interactúan con tu WhatsApp Business</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">1.3 Métricas y Análisis</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Estadísticas de uso del servicio</li>
              <li>Tasas de respuesta y conversión</li>
              <li>Patrones de interacción para mejorar el servicio</li>
              <li>Datos de rendimiento del sistema</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Cómo Usamos tu Información</h2>
            <p className="text-gray-600 mb-4">Utilizamos la información recopilada para:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Proporcionar y mantener nuestro servicio de automatización de WhatsApp</li>
              <li>Configurar y personalizar los flujos de conversación automatizados</li>
              <li>Enviar notificaciones importantes sobre tu cuenta o el servicio</li>
              <li>Proporcionar soporte técnico y atención al cliente</li>
              <li>Mejorar y optimizar nuestros servicios</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Propiedad de los Datos</h2>
            <p className="text-gray-600 mb-4">
              <strong>Tus datos te pertenecen.</strong> Toda la información de tu negocio, incluyendo
              las conversaciones de WhatsApp y los datos de tus clientes, son de tu propiedad exclusiva.
              Nosotros actuamos únicamente como procesadores de datos para brindarte el servicio.
            </p>
            <p className="text-gray-600 mb-4">
              No vendemos, alquilamos ni compartimos tu información personal o la de tus clientes
              con terceros para fines de marketing.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Almacenamiento y Seguridad</h2>
            <p className="text-gray-600 mb-4">
              Tus datos se almacenan en servidores seguros ubicados en Estados Unidos.
              Implementamos medidas de seguridad técnicas y organizativas para proteger
              tu información contra acceso no autorizado, alteración, divulgación o destrucción.
            </p>
            <p className="text-gray-600 mb-4">Estas medidas incluyen:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Encriptación de datos en tránsito y en reposo</li>
              <li>Acceso restringido a personal autorizado</li>
              <li>Monitoreo continuo de seguridad</li>
              <li>Copias de seguridad regulares</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Compartir Información con Terceros</h2>
            <p className="text-gray-600 mb-4">
              Podemos compartir información con terceros únicamente en las siguientes circunstancias:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li><strong>Proveedores de servicios:</strong> Empresas que nos ayudan a operar el servicio (hosting, procesamiento de pagos)</li>
              <li><strong>Meta/WhatsApp:</strong> Como parte de la integración con WhatsApp Business API</li>
              <li><strong>Requerimientos legales:</strong> Cuando sea requerido por ley o autoridades competentes</li>
              <li><strong>Protección de derechos:</strong> Para proteger nuestros derechos, privacidad, seguridad o propiedad</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. Tus Derechos</h2>
            <p className="text-gray-600 mb-4">Tienes derecho a:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li><strong>Acceso:</strong> Solicitar una copia de los datos que tenemos sobre ti</li>
              <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos</li>
              <li><strong>Eliminación:</strong> Solicitar la eliminación de tus datos personales</li>
              <li><strong>Portabilidad:</strong> Recibir tus datos en un formato estructurado</li>
              <li><strong>Oposición:</strong> Oponerte al procesamiento de tus datos en ciertas circunstancias</li>
            </ul>
            <p className="text-gray-600 mb-4">
              Para ejercer cualquiera de estos derechos, contáctanos a{' '}
              <a href="mailto:info@loomia.net" className="text-primary-500 hover:underline">
                info@loomia.net
              </a>
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">7. Retención de Datos</h2>
            <p className="text-gray-600 mb-4">
              Conservamos tu información mientras mantengas una cuenta activa con nosotros.
              Si cancelas tu suscripción, eliminaremos tus datos dentro de los 30 días siguientes,
              salvo que la ley requiera que los conservemos por más tiempo.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">8. Cookies y Tecnologías Similares</h2>
            <p className="text-gray-600 mb-4">
              Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar
              tu experiencia, analizar el uso del sitio y personalizar contenido. Puedes
              configurar tu navegador para rechazar cookies, aunque esto puede afectar
              algunas funcionalidades.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">9. Menores de Edad</h2>
            <p className="text-gray-600 mb-4">
              Nuestros servicios están dirigidos a empresas y no recopilamos intencionalmente
              información de menores de 18 años. Si descubrimos que hemos recopilado datos de
              un menor, los eliminaremos inmediatamente.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">10. Cambios a esta Política</h2>
            <p className="text-gray-600 mb-4">
              Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos
              sobre cambios significativos por correo electrónico o mediante un aviso destacado
              en nuestro sitio web. Te recomendamos revisar esta política periódicamente.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">11. Contacto</h2>
            <p className="text-gray-600 mb-4">
              Si tienes preguntas sobre esta política de privacidad o sobre cómo manejamos
              tu información, puedes contactarnos:
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mt-4">
              <p className="text-gray-700 font-medium">Echo Haven Holdings LLC</p>
              <p className="text-gray-600">Email: <a href="mailto:info@loomia.net" className="text-primary-500 hover:underline">info@loomia.net</a></p>
              <p className="text-gray-600">País: Estados Unidos</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
