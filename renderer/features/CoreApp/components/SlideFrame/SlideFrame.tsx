import { InputIcon } from "../../../../components/form"
import { useAppDispatch } from "../../../../hooks"
import { setCurrPage } from "../../../../states/globalState"
import { setDelay } from "../../../../utils"
import { usePostSlide } from "../../hooks"
import { setCurrentCode } from "../../states/slideState"

export const SlideFrame = ({
  currentCode,
  lastCode,
  currPage
}) => {
  const dispatch = useAppDispatch()
  const addCurrPage = async () => {
    await setDelay(.5)
    dispatch(setCurrPage('user'))
  }
  if(!currPage)
    addCurrPage()
  return (
    <div className="position-absolute top-50 start-50 translate-middle responsive-3 p-3">
      <div className="tx-center w-100">
        <label className="h3">Escanea el codigo</label>
        <InputIcon 
          name="iptCard"
          value={currentCode}
          onPressEnter={() => {
            if(currentCode)
              dispatch(usePostSlide(currentCode))
          }}
          icon="card"
          onChangeValue={e => dispatch(setCurrentCode(`${e.target.value}`.trim()))} />
      </div>
      <div className="w-100">
        <label 
          className="text-light">
            {`Anterior: ${lastCode}`}
        </label>
      </div>
    </div>
  )
}
export default SlideFrame