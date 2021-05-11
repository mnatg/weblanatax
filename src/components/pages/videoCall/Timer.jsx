import React from 'react';
import { useStopwatch } from 'react-timer-hook';

import { IconButton, Tooltip } from '@material-ui/core';
//icons
import {
    FiberManualRecord, 
    Stop
} from '@material-ui/icons';

const Timer = () =>  {
    const {
    seconds,
    minutes,
    hours,
    isRunning,
    start,
    reset
} = useStopwatch();

    const setTimer = () =>{
        if(isRunning){
            reset();
        }else{
            start();
        }
    }

    return (
        <div className="content-timer">
            <IconButton onClick={setTimer} className={ isRunning && "record-red" }>
                {
                    isRunning ?
                        <Tooltip title="Detener grabación" arrow >
                            <Stop /> 
                        </Tooltip>
                        :
                        <Tooltip title="Empezar grabación" arrow >
                            <FiberManualRecord  />
                        </Tooltip>
                }
            </IconButton>
            {
                isRunning &&
            <div className="timer">
                <FiberManualRecord  /><span>{hours<10 && 0}{hours}</span>:<span>{minutes<10 && 0}{minutes}</span>:<span>{seconds<10 && 0}{seconds}</span>
            </div>
            }
        </div>
    );
}



export default Timer;