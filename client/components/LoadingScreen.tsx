import { useAppSelector } from '../hooks/redux'

function LoadingScreen() {
  const showLoading = useAppSelector((state) => state.loading)
  return showLoading ? (
    <div className="loading-screen">
      <div className="loading">Brewing...</div>
    </div>
  ) : null
}

export default LoadingScreen
