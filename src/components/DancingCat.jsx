import { useEffect } from 'react'
import catSvg from '../assets/images/cat.svg'
import { useAnimation, useDeviceType } from '../hooks/useAnimation'
import '../styles/animations.css'

function DancingCat() {
  const { isAnimating, reducedMotion, toggleAnimation } = useAnimation()
  const deviceType = useDeviceType()

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault()
        toggleAnimation()
      }
    }

    const handleClick = (e) => {
      if (e.target.classList.contains('cat-image')) {
        toggleAnimation()
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
      document.removeEventListener('click', handleClick)
    }
  }, [toggleAnimation])

  return (
    <div className="dancing-cat-container">
      <div className={`cat-wrapper ${isAnimating ? 'dancing' : ''} ${deviceType}`}>
        <img
          src={catSvg}
          alt="춤추는 고양이 - 클릭하거나 스페이스바를 눌러 애니메이션을 제어하세요"
          className="cat-image"
          tabIndex="0"
          role="button"
          aria-label={isAnimating ? '고양이가 춤추는 중입니다. 클릭하면 멈춥니다.' : '고양이가 준비중입니다. 클릭하면 춤을 춥니다.'}
        />
      </div>

      <div className="control-panel">
        <button
          className={`dance-button ${isAnimating ? 'stop' : 'start'}`}
          onClick={toggleAnimation}
          aria-label={isAnimating ? '댄스 애니메이션 멈추기' : '댄스 애니메이션 시작하기'}
        >
          {isAnimating ? '멈추기 🛑' : '춤추기 💃'}
        </button>

        <div className="animation-status">
          <span className={`status-indicator ${isAnimating ? 'active' : 'inactive'}`}>
            {isAnimating ? '춤추는 중...' : '준비중...'}
          </span>
          {reducedMotion && (
            <span className="accessibility-note">
              (접근성 모드: 애니메이션 단순화됨)
            </span>
          )}
        </div>

        <div className="device-info">
          <span className="device-type">기기: {deviceType === 'mobile' ? '모바일' : deviceType === 'tablet' ? '태블릿' : '데스크톱'}</span>
        </div>

        <div className="instructions">
          <p>💡 조작 방법:</p>
          <ul>
            <li>🖱️ 고양이를 클릭하거나</li>
            <li>⌨️ 스페이스바를 누르거나</li>
            <li>🔘 버튼을 클릭하세요</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DancingCat