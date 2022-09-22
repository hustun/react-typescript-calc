import React, { useEffect, useState } from 'react';
import Operation from '../helpers/Operation';
import Input from './common/Input';

// Declaring type of props - see "Typing Component Props" for more examples
type AppProps = {
  message: string;
}; /* use `interface` if exporting so that consumers can extend */

// you can choose annotate the return type so an error is raised if you accidentally return some other type
const Calculator = ({ message }: AppProps): JSX.Element => {
  const [val1, setVal1] = useState<number>(0);
  const [val2, setVal2] = useState<number>(0);
  const [operation, setOperation] = useState(Operation.ADDITION);
  const [res, setRes] = useState(0);

  const onChangeVal1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal1(parseInt(e.target.value));
    console.log(e.target.value);
  };

  const onChangeVal2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal2(parseInt(e.target.value));
    console.log(e.target.value);
  };

  const onChangeOperation = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOperation(parseInt(e.target.value));
    console.log(e.target.value);
  };

  useEffect(() => {
    switch (operation) {
      case Operation.ADDITION:
        setRes(val1 + val2);
        break;
      case Operation.SUBTRACT:
        setRes(val1 - val2);
        break;
      case Operation.MULTIPLICATION:
        setRes(val1 * val2);
        break;
      case Operation.DIVISION:
        setRes(val1 / val2);
        break;

      default:
        break;
    }
  }, [operation, val1, val2]);

  return (
    <div className="w-full py-4 px-8 border-2 border-gray-300 max-w-2xl flex justify-between">
      <div className="flex flex-col">
        <label htmlFor="val1">Input 1</label>
        <Input
          type="text"
          id="val1"
          name="val1"
          onChange={onChangeVal1}
          value={val1}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="operation-menu">Operation</label>
        <div className="relative h-8">
          <select
            className="block appearance-none w-24 border border-gray-200 bg-slate-800 h-full px-4 rounded focus:outline-none"
            id="operation-menu"
            value={operation}
            onChange={(e) => {
              onChangeOperation(e);
            }}
          >
            <option value={Operation.ADDITION}>+</option>
            <option value={Operation.SUBTRACT}>-</option>
            <option value={Operation.MULTIPLICATION}>*</option>
            <option value={Operation.DIVISION}>/</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="val2">Input 2</label>
        <Input
          type="text"
          id="val2"
          name="val2"
          onChange={onChangeVal2}
          value={val2}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="result">Result</label>
        <Input
          type="text"
          id="result"
          name="result"
          disabled={true}
          value={res}
        />
      </div>
    </div>
  );
};

export default Calculator;
