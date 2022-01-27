import { createContext, ReactNode, useState } from 'react'

interface PlayerContextProvider {
  children: ReactNode
}

interface Episode {
  id: string
  url: string
  title: string
  members: string
  duration: number
  thumbnail: string
}

interface PlayerContextProps {
  isPlaying: boolean
  episodeList: Episode[]
  togglePlay: () => void
  currentEpisodeIndex: number
  play: (episode: Episode) => void
  setPlayingState: (state: boolean) => void
}

export const PlayerContext = createContext({} as PlayerContextProps)

const PlayerContextProvider: React.FC<PlayerContextProvider> = ({
  children
}) => {
  const [episodeList, setEpisodeList] = useState<any>([])
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)

  function play(episode: any) {
    setIsPlaying(true)
    setEpisodeList([episode])
    setCurrentEpisodeIndex(0)
  }

  function setPlayingState(state: boolean) {
    setIsPlaying(state)
  }

  function togglePlay() {
    setIsPlaying(!isPlaying)
  }

  return (
    <PlayerContext.Provider
      value={{
        play,
        isPlaying,
        togglePlay,
        episodeList,
        setPlayingState,
        currentEpisodeIndex
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}

export default PlayerContextProvider
