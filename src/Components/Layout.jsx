import { Outlet } from 'react-router-dom';

const Layout = () => {
  // Función para formatear la fecha en el formato deseado
  const getFormattedDate = () => {
    const options = { year: 'numeric', month: 'long', day: '2-digit' };
    const today = new Date();
    return today.toLocaleDateString('es-ES', options);
  };

  // Función para formatear la hora en el formato de 12 horas
  const getFormattedTime = () => {
    const options = { hour: 'numeric', minute: '2-digit', hour12: true };
    const today = new Date();
    return today.toLocaleTimeString('es-ES', options);
  };

  return (
    <div className='lg:flex lg:min-h-screen'>
      <aside className='lg:w-1/4 bg-blue-500 px-5 py-10'>
        <h2 className='text-4xl font-black text-center mb-10 text-white'>Seguimiento Pacientes</h2>
        <p className='text-white text-2xl text-center'>{getFormattedDate()}</p>
        <p className='text-white text-2xl text-center'>{getFormattedTime()}</p>
      </aside>

      <main className='lg:w-3/4 p-10 md:h-screen lg:overflow-scroll'>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
