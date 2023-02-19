import './App.css';
import useModal from './hooks/useModal';

function App() {
  const { modal } = useModal();

  const onClickSuccess = () => {
    modal.success({
      title: '성공!',
      content: '성공 모달입니다.'
    })
  }
  const onClickError = () => {
    modal.error({
      title: '에러!',
      content: '에러 모달입니다.'
    })
  }
  const onClickInfo = () => {
    modal.info({
      title: '정보!',
      content: '정보 모달입니다.'
    })
  }
  const onClickWarning = () => {
    modal.warning({
      title: '경고!',
      content: '경고 모달입니다.'
    })
  }
  return (
    <div className="App">
      <h1>버튼 클릭시 모달이 발생합니다.</h1>

      <div>
        <button style={{marginRight: 10}} onClick={onClickSuccess}>Success</button>
        <button style={{marginRight: 10}} onClick={onClickError}>Error</button>
        <button style={{marginRight: 10}} onClick={onClickInfo}>Info</button>
        <button  onClick={onClickWarning}>Warning</button>
      </div>
    </div>
  );
}

export default App;
