import styles from './index.module.css';
import NavBar from '../components/navbar';
import Image from 'next/image';

export function Index() {
  return (
    <>
      <NavBar />
      <br></br>
      <div className="h-18 mx-auto px-5 flex items-center justify-between">
        <div>
          <Image src="/static/photo-testdnd.avif" alt="dnd image" height='200px' width='200px' />
        </div>

        <div className="bg-white">
          <div className="py-16 sm:py-24">
            <div className="mx-auto max-w-7xl sm:px-2 lg:px-8">
              <div className="mx-auto max-w-2xl px-4 lg:max-w-4xl lg:px-0">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Welcome to the Land of Eldari!</h1>
                <p className="mt-2 text-sm text-gray-500">
                  Check the status of recent orders, manage returns, and discover similar products.
                </p>
              </div>
            </div>  
          </div>  
        </div>
      </div>
      <div className="mx-auto max-w-3xl">{/* Content goes here */}Text is here</div>
    </>
  );
}

export default Index;