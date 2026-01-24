import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Términos de Servicio | AutoWhats',
  description: 'Términos y condiciones de uso de AutoWhats. Lee las condiciones que rigen el uso de nuestro servicio de automatización de WhatsApp Business.',
};

export default function TermsOfService() {
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
            Términos de Servicio
          </h1>
          <p className="text-gray-500 mb-8">Última actualización: Enero 2025</p>

          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              Estos Términos de Servicio (&ldquo;Términos&rdquo;) rigen tu uso de los servicios de
              automatización de WhatsApp Business proporcionados por Echo Haven Holdings LLC
              (&ldquo;AutoWhats&rdquo;, &ldquo;nosotros&rdquo;, &ldquo;nuestro&rdquo;). Al utilizar nuestros servicios,
              aceptas estos Términos en su totalidad.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Descripción del Servicio</h2>
            <p className="text-gray-600 mb-4">
              AutoWhats proporciona servicios de automatización de mensajes para WhatsApp Business,
              incluyendo pero no limitado a:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Configuración de respuestas automáticas personalizadas</li>
              <li>Automatización de agendamiento de citas</li>
              <li>Flujos de conversación automatizados (bots)</li>
              <li>Integración con calendarios y herramientas de terceros</li>
              <li>Envío de recordatorios y notificaciones</li>
              <li>Reportes y métricas de rendimiento</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Requisitos para Usar el Servicio</h2>
            <p className="text-gray-600 mb-4">Para utilizar nuestros servicios, debes:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Ser mayor de 18 años</li>
              <li>Tener capacidad legal para celebrar contratos</li>
              <li>Contar con una cuenta de WhatsApp Business verificada</li>
              <li>Cumplir con las políticas de uso de WhatsApp/Meta</li>
              <li>Proporcionar información veraz y actualizada</li>
              <li>Tener un negocio legítimo y legal</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Registro y Cuenta</h2>
            <p className="text-gray-600 mb-4">
              Al registrarte, te comprometes a proporcionar información precisa y completa.
              Eres responsable de mantener la confidencialidad de tu cuenta y contraseña,
              así como de todas las actividades que ocurran bajo tu cuenta.
            </p>
            <p className="text-gray-600 mb-4">
              Debes notificarnos inmediatamente sobre cualquier uso no autorizado de tu cuenta
              o cualquier otra violación de seguridad.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Precios y Pagos</h2>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">4.1 Tarifas</h3>
            <p className="text-gray-600 mb-4">
              Los precios de nuestros servicios se comunican antes de la contratación.
              Los planes comienzan desde $299 MXN mensuales. Las tarifas pueden variar
              según el plan seleccionado y las funcionalidades incluidas.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">4.2 Facturación</h3>
            <p className="text-gray-600 mb-4">
              La facturación es mensual y se realiza por adelantado. Los cargos se procesan
              automáticamente a través del método de pago registrado.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">4.3 Garantía de Devolución</h3>
            <p className="text-gray-600 mb-4">
              Ofrecemos una garantía de devolución de <strong>14 días</strong>. Si no estás satisfecho
              con el servicio durante los primeros 14 días después de tu primera contratación,
              puedes solicitar un reembolso completo sin preguntas.
            </p>
            <p className="text-gray-600 mb-4">
              Esta garantía aplica únicamente al primer mes de servicio y no es válida para
              renovaciones posteriores.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Cancelación</h2>
            <p className="text-gray-600 mb-4">
              Puedes cancelar tu suscripción en cualquier momento enviando un correo electrónico a{' '}
              <a href="mailto:info@loomia.net" className="text-primary-500 hover:underline">
                info@loomia.net
              </a>
            </p>
            <p className="text-gray-600 mb-4">
              La cancelación será efectiva al final del período de facturación actual.
              No se realizan reembolsos por períodos parciales de servicio después de
              los primeros 14 días.
            </p>
            <p className="text-gray-600 mb-4">
              Una vez cancelada la suscripción, tus datos serán eliminados dentro de los
              30 días siguientes, salvo que solicites una exportación de los mismos.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. Uso Aceptable</h2>
            <p className="text-gray-600 mb-4">
              Al utilizar nuestros servicios, aceptas NO usar el servicio para:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Enviar spam o mensajes no solicitados masivos</li>
              <li>Actividades ilegales o fraudulentas</li>
              <li>Acosar, amenazar o abusar de terceros</li>
              <li>Distribuir malware o contenido malicioso</li>
              <li>Violar las políticas de WhatsApp/Meta</li>
              <li>Suplantar la identidad de personas u organizaciones</li>
              <li>Recopilar datos de usuarios sin su consentimiento</li>
              <li>Cualquier actividad que pueda dañar nuestra reputación o servicio</li>
            </ul>
            <p className="text-gray-600 mb-4">
              Nos reservamos el derecho de suspender o terminar tu cuenta si detectamos
              un uso indebido del servicio, sin derecho a reembolso.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">7. Propiedad Intelectual</h2>
            <p className="text-gray-600 mb-4">
              Todo el contenido, diseño, código, marcas y materiales de AutoWhats son propiedad
              de Echo Haven Holdings LLC y están protegidos por leyes de propiedad intelectual.
            </p>
            <p className="text-gray-600 mb-4">
              Los contenidos y datos que tú generes a través del servicio (conversaciones,
              configuraciones, información de clientes) son y permanecerán de tu propiedad exclusiva.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">8. Disponibilidad del Servicio</h2>
            <p className="text-gray-600 mb-4">
              Nos esforzamos por mantener el servicio disponible 24/7, sin embargo, no garantizamos
              disponibilidad ininterrumpida. El servicio puede verse afectado por:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Mantenimiento programado (notificado con anticipación)</li>
              <li>Actualizaciones de seguridad</li>
              <li>Problemas técnicos imprevistos</li>
              <li>Cambios en las APIs de terceros (WhatsApp, Meta)</li>
              <li>Causas de fuerza mayor</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">9. Limitación de Responsabilidad</h2>
            <p className="text-gray-600 mb-4">
              En la máxima medida permitida por la ley aplicable:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>El servicio se proporciona &ldquo;tal cual&rdquo; y &ldquo;según disponibilidad&rdquo;</li>
              <li>No garantizamos resultados específicos de ventas o conversión</li>
              <li>No somos responsables por daños indirectos, incidentales o consecuentes</li>
              <li>Nuestra responsabilidad total está limitada al monto pagado por el servicio en los últimos 12 meses</li>
              <li>No somos responsables por acciones de WhatsApp/Meta sobre tu cuenta</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">10. Indemnización</h2>
            <p className="text-gray-600 mb-4">
              Aceptas indemnizar y mantener indemne a Echo Haven Holdings LLC, sus directores,
              empleados y agentes, de cualquier reclamación, pérdida, daño o gasto (incluyendo
              honorarios legales) que surja de:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Tu uso del servicio</li>
              <li>Tu violación de estos Términos</li>
              <li>Tu violación de derechos de terceros</li>
              <li>El contenido que transmitas a través del servicio</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">11. Modificaciones al Servicio y Términos</h2>
            <p className="text-gray-600 mb-4">
              Nos reservamos el derecho de modificar o descontinuar el servicio (o cualquier
              parte del mismo) temporal o permanentemente, con o sin previo aviso.
            </p>
            <p className="text-gray-600 mb-4">
              Podemos actualizar estos Términos ocasionalmente. Te notificaremos sobre cambios
              significativos con al menos 30 días de anticipación. El uso continuado del servicio
              después de los cambios constituye tu aceptación de los nuevos Términos.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">12. Ley Aplicable y Jurisdicción</h2>
            <p className="text-gray-600 mb-4">
              Estos Términos se rigen por las leyes de los Estados Unidos de América.
              Cualquier disputa que surja de estos Términos o del uso del servicio será
              sometida a la jurisdicción exclusiva de los tribunales competentes de Estados Unidos.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">13. Disposiciones Generales</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li><strong>Acuerdo completo:</strong> Estos Términos constituyen el acuerdo completo entre tú y nosotros</li>
              <li><strong>Divisibilidad:</strong> Si alguna disposición es inválida, las demás permanecen en vigor</li>
              <li><strong>Renuncia:</strong> La falta de ejercicio de un derecho no constituye renuncia al mismo</li>
              <li><strong>Cesión:</strong> No puedes ceder estos Términos sin nuestro consentimiento previo</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">14. Contacto</h2>
            <p className="text-gray-600 mb-4">
              Para cualquier pregunta sobre estos Términos de Servicio, puedes contactarnos:
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mt-4">
              <p className="text-gray-700 font-medium">Echo Haven Holdings LLC</p>
              <p className="text-gray-600">Email: <a href="mailto:info@loomia.net" className="text-primary-500 hover:underline">info@loomia.net</a></p>
              <p className="text-gray-600">País: Estados Unidos</p>
            </div>

            <div className="mt-8 p-6 bg-primary-50 rounded-xl border border-primary-100">
              <p className="text-gray-700">
                Al utilizar nuestros servicios, confirmas que has leído, entendido y aceptas
                estos Términos de Servicio y nuestra{' '}
                <Link href="/privacidad" className="text-primary-500 hover:underline">
                  Política de Privacidad
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
