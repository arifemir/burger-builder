import React from 'react';
import styles from './BuildControlPanel.module.css'
import Control from "./Control/Control";

const controls = [
  {label:'salad',type:'salad'},
  {label:'bacon',type:'bacon'},
  {label:'cheese',type:'cheese'},
  {label:'meat',type:'meat'}
]

const BuildControlPanel = (props) => {
  return (
    <div className={styles.BuildControls}>
      {controls.map(ctrl => (
        <Control
          addIngredient={()=>props.addIngredient(ctrl.type)}
          removeIngredient={()=>props.removeIngredient(ctrl.type)}
          key={ctrl.label}
          label={ctrl.label}
          disabledInfo={props.disabledInfo[ctrl.type]}
        />
      ))}
    </div>
  );
};

export default BuildControlPanel;
