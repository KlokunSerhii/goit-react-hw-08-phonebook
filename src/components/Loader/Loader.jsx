import { FallingLines, Bars } from 'react-loader-spinner';

export function ContactsLoader() {
  return (
    <FallingLines
      color="#4b0082"
      width="100"
      visible={true}
      ariaLabel="falling-lines-loading"
    />
  );
}

export function AppLoader() {
  return (
    <Bars
      height="80"
      width="80"
      color="#4b0082"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}
