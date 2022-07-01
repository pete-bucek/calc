import React, { useState } from 'react';
import NumberInput from './NumberInput';
import Select from 'react-select';
import Result from './Result';

const CalculatorForm = (props) => {
    const [selectedOptionState, setSelectedOptionState] = useState({
        selectedOption: {
            value: '--Vyberte operaci--',
            label: '--Vyberte operaci--',
        },
    });
    const [resultState, setResultState] = useState(null);

    const options = [
        { value: 'ADD', label: 'S��t�n�' },
        { value: 'SUBTRACT', label: 'Od��t�n�' },
        { value: 'MULTIPLY', label: 'N�soben�' },
        { value: 'DIVIDE', label: 'D�len�' },
    ];

    let calculate = () => {
        const { x, y } = props;
        switch (selectedOptionState.selectedOptionState.value) {
            case 'ADD':
                return parseFloat(x) + parseFloat(y);
            case 'SUBTRACT':
                return parseFloat(x) - parseFloat(y);
            case 'MULTIPLY':
                return parseFloat(x) * parseFloat(y);
            case 'DIVIDE':
                return parseFloat(x) / parseFloat(y);
            default:
                return null; // Sem by to nikdy nem�lo doj�t.
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const result = calculate();
        console.log(result);
        setResultState(result);
    };
    const handleChange = (selectedOptionState) => {
        setSelectedOptionState({ selectedOptionState });
    };
    return (
        <div>
            <form className="CalculatorForm" onSubmit={handleSubmit}>
                <NumberInput
                    OnChange={props.xOnChange}
                    name="x"
                    label="Prvn� ��slo:"
                    value={props.x}
                />
                <NumberInput
                    OnChange={props.yOnChange}
                    name="y"
                    label="Druh� ��slo:"
                    value={props.y}
                />
                <Select
                    onChange={handleChange}
                    value={selectedOptionState.selectedOption}
                    options={options}
                />
                <input value="Spo��tej" type="submit" />
            </form>
            <Result value={resultState} />
        </div>
    );
};

export default CalculatorForm;