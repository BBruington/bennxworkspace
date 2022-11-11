import styles from './index.module.css';
import Image from 'next/image';
export function Index() {

  return (
    <>
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="mt-5 mx-auto max-w-2xl text-white-200 border border-gray-300 rounded-md shadow bg-white">{/* Content goes here */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta feugiat efficitur. Pro laoreet risus eget odio vulputate, eu tincidunt tellus vestibulum. Nullam nec dui vel felis ultrices dictum. Fusce at tellus scelerisque, malesuada odio in, condimentum velit. Duis pretium elit tortor, a vestibulum urna commodo sit amet. Donec iaculis ac eros id pellentesque. Donec quis lacinia quam, auctor scelerisque massa. In commodo erat sed arcu lacinia lacinia. Aenean at imperdiet ligula. Vestibulum sit amet pellentesque odio, sit amet mattis nibh. Ut feugiat eget sem in elementum. Nulla blandit magna non nibh interdum imperdiet.
Fusce risus libero, lacinia quis nisi ut, scelerisque ornare orci. Nullam vel sollicitudin mi. Suspendisse posuere leo mi, a posuere nisl congue vitae. Nam ullamcorper neque sit amet fringilla rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id ante efficitur felis posuere mollis. Praesent posuere leo quis bibendum tempus. Sed et pretium sapien. Sed nec leo a dolor varius porttitor vel nec lorem. Vivamus ac libero sed sem tristique efficitur vitae sed arcu. Etiam vulputate tincidunt massa sed mattis. Praesent cursus venenatis dui, vitae mattis sem eleifend eget. Vestibulum tempus, lorem vitae rutrum maximus, sem justo consequat metus, nec feugiat nisi nulla eu dui. Cras sagittis tortor vehicula elit porta lobortis.
Nullam maximus, turpis viverra feugiat eleifend, dui eros scelerisque neque, eget pellentesque urna urna id purus. Fusce accumsan fringilla auctor. Pellentesque in elit ligula. Vestibulum eget interdum arcu. Vestibulum placerat nunc sit amet dolor rutrum, at efficitur enim tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur mollis massa ligula, aliquet mattis ante pretium id.
        </div>
      </div>
    </>
  );
}

export default Index;