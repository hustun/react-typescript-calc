// Declaring type of props - see "Typing Component Props" for more examples
type AppProps = {
  message: string;
}; /* use `interface` if exporting so that consumers can extend */

// you can choose annotate the return type so an error is raised if you accidentally return some other type
const Header = ({ message }: AppProps): JSX.Element => {
  return (
    <div className="fixed top-0 left-0 w-full py-4 border-b-2 border-gray-300 text-center">
      {message}
    </div>
  );
};

export default Header;
