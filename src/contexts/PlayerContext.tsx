import { createContext, ReactNode, useState } from 'react'
import toast from 'react-hot-toast'
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
  hasNext: boolean
  isLooping: boolean
  isPlaying: boolean
  hasPrevious: boolean
  playNext: () => void
  episodeList: Episode[]
  toggleLoop: () => void
  togglePlay: () => void
  playPrevious: () => void
  currentEpisodeIndex: number
  play: (episode: Episode) => void
  playList: (episode: Episode) => void
  setPlayingState: (state: boolean) => void
}

export const PlayerContext = createContext({} as PlayerContextProps)

const PlayerContextProvider: React.FC<PlayerContextProvider> = ({
  children
}) => {
  const [episodeList, setEpisodeList] = useState<any>([])
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [isLooping, setIsLooping] = useState<boolean>(false)
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)

  const hasNext: boolean = currentEpisodeIndex + 1 < episodeList.length
  const hasPrevious: boolean = currentEpisodeIndex > 0

  function play(episode: any) {
    setIsPlaying(true)
    setEpisodeList([episode])
    setCurrentEpisodeIndex(0)
  }

  function playList(episode: any) {
    let currentPlaylist: Array<Episode> = episodeList

    try {
      setEpisodeList(currentPlaylist.concat(episode))
      toast.success('Episódio adicionado a playlist')
    } catch {
      toast.error('Falha ao adicionar episódio a playlist')
    }
  }

  function playNext() {
    if (hasNext) {
      setCurrentEpisodeIndex(currentEpisodeIndex + 1)
    }
  }

  function playPrevious() {
    if (hasPrevious) {
      setCurrentEpisodeIndex(currentEpisodeIndex - 1)
    }
  }

  function setPlayingState(state: boolean) {
    setIsPlaying(state)
  }

  function togglePlay() {
    setIsPlaying(!isPlaying)
  }

  function toggleLoop() {
    setIsLooping(!isLooping)
  }

  return (
    <PlayerContext.Provider
      value={{
        play,
        hasNext,
        playNext,
        playList,
        isLooping,
        isPlaying,
        toggleLoop,
        togglePlay,
        episodeList,
        hasPrevious,
        playPrevious,
        setPlayingState,
        currentEpisodeIndex
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}

export default PlayerContextProvider
