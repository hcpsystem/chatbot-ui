import React from 'react';

interface ReferralStepsProps {
  isMobile?: boolean;
}

export const ReferralSteps: React.FC<ReferralStepsProps> = ({ isMobile = false }) => {
  const steps = [
    {
      number: '01',
      title: 'Contáctanos a través',
      details: 'de nuestro número de WhatsApp:',
      highlight: '960 938 422',
    },
    {
      number: '02',
      title: 'Envía los datos',
      details: 'de tu referido',
      highlight: '(nombre, apellido, celular)',
    },
    {
      number: '03',
      title: 'Una vez que tu referido se',
      details: 'matricule y pague los servicios para el estudiante',
      highlight: '¡Programaremos tu pago!',
    },
  ];

  if (isMobile) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {steps.map((step) => (
          <div key={step.number} className="bg-indigo-800 p-4 rounded-lg shadow">
            <div className="text-pink-300 font-bold text-2xl mb-2">{step.number}</div>
            <p className="text-white">
              <span className="font-medium">{step.title}</span>
              <br />
              {step.details}
              <br />
              <span className="font-bold text-yellow-400">{step.highlight}</span>
            </p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-black bg-opacity-20 backdrop-blur-sm p-4 rounded-l-lg">
      <h3 className="text-yellow-400 font-bold text-xl mb-6">SIGUE ESTOS SENCILLOS PASOS:</h3>
      <div className="space-y-6">
        {steps.map((step) => (
          <div key={step.number} className="bg-indigo-800 p-4 rounded-lg shadow">
            <div className="text-pink-300 font-bold text-2xl mb-2">{step.number}</div>
            <p className="text-white">
              <span className="font-medium">{step.title}</span>
              <br />
              {step.details}
              <br />
              <span className="font-bold text-yellow-400">{step.highlight}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};