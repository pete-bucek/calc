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
        { value: 'ADD', label: 'Sèítání' },
        { value: 'SUBTRACT', label: 'Odèítání' },
        { value: 'MULTIPLY', label: 'Násobení' },
        { value: 'DIVIDE', label: 'Dìlení' },
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
                return null; // Sem by to nikdy nemìlo dojít.
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
                    label="První èíslo:"
                    value={props.x}
                />
                <NumberInput
                    OnChange={props.yOnChange}
                    name="y"
                    label="Druhé èíslo:"
                    value={props.y}
                />
                <Select
                    onChange={handleChange}
                    value={selectedOptionState.selectedOption}
                    options={options}
                />
                <input value="Spoèítej" type="submit" />
            </form>
            <Result value={resultState} />
        </div>
    );
};

export default CalculatorForm;