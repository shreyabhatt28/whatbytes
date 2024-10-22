'use client'

import UpdateData from '@/components/UpdateData';
import QuickStats from '@/components/QuickStats';
import ComparisonGraph from '@/components/ComparisonGraph';
import SyllabusWiseAnalysis from '@/components/SyllabusWiseAnalysis';
import QuestionAnalysis from '@/components/QuestionAnalysis';
import { useState } from 'react';

const SkillsTestPage = () => {
    const initialState = {rank:"1",percentile:"30",score:"12"}
    const [values,setValues] = useState(initialState);
    const [details,setDetails] = useState(values);
    const [errors, setErrors] = useState({});

    const validate = (name,value) => {
        let error = '';
        if(name === 'rank'){
            if(!value.trim() || isNaN(value) || value<1){
                error = "rank should be a valid number";
            }
        }
        if(name === 'percentile'){
            if (!value.trim() || isNaN(value) || value < 0 || value > 100){
                error = "percentile should be 0-100";
            }
        }
        if(name === 'score'){
            if (!value.trim() || isNaN(value) || value < 0 || value > 15){
                error = "score should be 0-15";
            }
        }
        return error;
    }

    const handleChange = (e) => {
        const {name,value} = e.target;
        setValues(prevState => ({
            ...prevState,
            [name]:value
        }));

        const error = validate (name,value);
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]:error
        }));
    };

    const handleSave = () => {
        const hasErrors = Object.values(errors).some(error => error !== '');
        if(!hasErrors){
            setDetails(values);
        }
    }

    return ( 
        <div className = "grid grid-flow-rows lg:grid-cols-[auto_400px] h-full overflow-y-scroll">
            <div className = "p-10 pt-4 flex flex-col items-center gap-6">
                <h1 className = "text-md place-self-start"> Skills Test </h1>
                <UpdateData
                handleChange = {handleChange}
                values = {values}
                handleSave = {handleSave}
                errors = {errors}
                />
                <QuickStats details = {details}/>
                <ComparisonGraph details={details} />
            </div>
            <div className = " h-auto">
                <SyllabusWiseAnalysis/>
                <QuestionAnalysis/>
            </div>
        </div>
    );
}

export default SkillsTestPage;