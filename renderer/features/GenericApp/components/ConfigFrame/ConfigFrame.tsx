import { InputLabel } from "../../../../components/form";
import { Button } from "../../../../components/ui";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { usePostConfig } from "../../hooks";
import { useGetConfig } from "../../hooks/useGetConfig";
import { 
  selectBreakfastTime, 
  selectCodeSize, 
  selectCompanyName, 
  selectDinnerTime, 
  selectLunchTime, 
  setBreakfastTime,
  setCodeSize,
  setCompanyName,
  setDinnerTime,
  setLunchTime
} from "../../states/configState";

export const ConfigFrame = ({
    companyName,
    breakfastTime,
    lunchTime,
    dinnerTime,
    codeSize
}) => {
  const dispatch = useAppDispatch()
    return (
      <div className="mt-2">
        <div className="col-md-5">
          <InputLabel 
            title="Compañia" 
            value={companyName}
            onChangeValue={e => dispatch(setCompanyName(e.target.value))} />
          <InputLabel 
            title="Desayuno" 
            type="time" 
            value={breakfastTime} 
            onChangeValue={e => dispatch(setBreakfastTime(e.target.value))} />
          <InputLabel 
            title="Almuerzo" 
            type="time" 
            value={lunchTime} 
            onChangeValue={e => dispatch(setLunchTime(e.target.value))} />
          <InputLabel 
            title="Cena" 
            type="time" 
            value={dinnerTime} 
            onChangeValue={e => dispatch(setDinnerTime(e.target.value))} />
          <InputLabel 
            title="Size del Codigo" 
            type="number" 
            value={codeSize} 
            onChangeValue={e => dispatch(setCodeSize(e.target.value))} />
        </div>
        <div className="position-fixed pps-rb">
          <Button icon="save" className="ppr-1 me-1" primary onClick={() => {
            dispatch(usePostConfig({companyName, breakfastTime, lunchTime, dinnerTime, codeSize}))
            dispatch(useGetConfig())
          }}/>
          <Button icon="cancel" className="ppr-1" onClick={() => dispatch(useGetConfig())}/>
        </div>
      </div>
    )
  }